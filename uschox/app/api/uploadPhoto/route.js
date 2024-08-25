import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.body;

    try {
      const { url } = await put(`photos/${Date.now()}.jpg`, file, {
        access: 'public',
      });

      res.status(200).json({ url });
    } catch (error) {
      console.error('Error uploading to Vercel Blob:', error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}