import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, filename } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'Missing image data' });
  }

  try {
    // Convert base64 to buffer
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const mimeType = image.match(/^data:(image\/\w+);base64,/)?.[1] || 'image/jpeg';
    const ext = mimeType.split('/')[1];
    const name = filename || `garment-${Date.now()}.${ext}`;

    // Upload to Vercel Blob
    const blob = await put(name, buffer, {
      access: 'public',
      contentType: mimeType,
    });

    return res.status(200).json({ url: blob.url });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
