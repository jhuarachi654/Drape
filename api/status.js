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
        'Authorization': `Bearer ${api_key}`,
      },
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(500).json({ error: `Fashn.ai returned non-JSON: ${text.slice(0, 300)}` });
    }

    return res.status(response.status).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
