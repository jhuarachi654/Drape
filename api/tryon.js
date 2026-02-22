import { Client } from '@gradio/client';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb', // needs to be large enough for two base64 images
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { person_image_b64, garment_image_b64 } = req.body;

  if (!person_image_b64 || !garment_image_b64) {
    return res.status(400).json({ error: 'Missing person_image_b64 or garment_image_b64' });
  }

  try {
    // Convert base64 strings to Blobs for the Gradio client
    const toBlob = (b64) => {
      const [header, data] = b64.split(',');
      const mime = header.match(/:(.*?);/)[1];
      const bytes = Buffer.from(data, 'base64');
      return new Blob([bytes], { type: mime });
    };

    const personBlob  = toBlob(person_image_b64);
    const garmentBlob = toBlob(garment_image_b64);

    // Connect to the free Kolors HF Space
    // If overloaded, swap to a mirror: "vorstcavry/Cloth" or "AhmedAlmaghz/Kolors-Virtual-Try-On"
    const client = await Client.connect('Kwai-Kolors/Kolors-Virtual-Try-On', {
      // Uncomment and set HF_TOKEN in Vercel env vars for faster queue:
      // hf_token: process.env.HF_TOKEN,
    });

    // Submit and wait for result — Gradio handles the polling internally
    const result = await client.predict('/tryon', {
      person_img: personBlob,
      garment_img: garmentBlob,
      seed: 0,
      randomize_seed: true,
    });

    // result.data[0] is the output image object { url, ... }
    const image = result.data?.[0];
    if (!image) throw new Error('No image returned from Kolors.');

    return res.status(200).json({ success: true, image });

  } catch (err) {
    console.error('Kolors error:', err);
    const isTimeout = err.message?.includes('timeout') || err.message?.includes('exceeded');
    return res.status(isTimeout ? 503 : 500).json({
      error: isTimeout
        ? 'Kolors Space is overloaded. Please try again in a moment.'
        : err.message || 'Something went wrong.',
    });
  }
}
