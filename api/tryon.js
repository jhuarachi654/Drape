export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { model_image, garment_image, category, api_key } = req.body;

  if (!api_key) {
    return res.status(400).json({ error: 'Missing API key' });
  }

  if (!model_image || !garment_image || !category) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Map your categories to Fashn.ai categories
    const categoryMap = {
      'tops': 'tops',
      'bottoms': 'bottoms',
      'one-pieces': 'dresses'
    };

    const response = await fetch('https://api.fashn.ai/v1/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': api_key, // Fashn.ai uses 'api-key' header, not Bearer token
      },
      body: JSON.stringify({
        model_image: model_image,
        garment_image: garment_image,
        category: categoryMap[category] || 'tops',
        garment_photo_type: 'auto', // Add this parameter
        mode: 'quality'
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: data.message || data.error || 'Fashn.ai API error',
        details: data 
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error('Fashn.ai API error:', err);
    return res.status(500).json({ error: err.message });
  }
}
