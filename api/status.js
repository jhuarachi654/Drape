export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id, api_key } = req.query;

  if (!id || !api_key) {
    return res.status(400).json({ error: 'Missing id or api_key' });
  }

  try {
    const response = await fetch(`https://api.fashn.ai/v1/status/${id}`, {
      headers: {
        'api-key': api_key, // Fashn.ai uses 'api-key' header
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: data.message || data.error || 'Fashn.ai status error',
        details: data 
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error('Fashn.ai status error:', err);
    return res.status(500).json({ error: err.message });
  }
}
