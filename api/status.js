export default async function handler(req, res) {
  const { id } = req.query;
  const apiKey = req.headers['x-api-key'];

  const response = await fetch(`https://api.fashn.ai/v1/status/${id}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
