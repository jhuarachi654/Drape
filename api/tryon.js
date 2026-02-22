export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { model_image, garment_image, category, api_key } = req.body;

  const response = await fetch('https://api.fashn.ai/v1/run', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`
    },
    body: JSON.stringify({ model_image, garment_image, category, mode: 'balanced' })
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
