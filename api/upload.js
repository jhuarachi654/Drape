import { handleUpload } from '@vercel/blob/client';

export default async function handler(req, res) {
  const body = await handleUpload({
    body: req.body,
    request: req,
    onBeforeGenerateToken: async (pathname) => {
      return {
        allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        maximumSizeInBytes: 10 * 1024 * 1024, // 10MB
      };
    },
    onUploadCompleted: async ({ blob }) => {
      console.log('Upload completed:', blob.url);
    },
  });

  return res.status(200).json(body);
}
