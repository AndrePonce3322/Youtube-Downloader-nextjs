import ytdl from 'ytdl-core';

export default async function handler(req, res) {
  const requirements = req.body;
  console.log(requirements);
  const { url, filter, quality } = requirements;

  if (!url || !filter || !quality)
    return res.status(400).json({ error: 'Missing requirements' });

  if (filter.startsWith('audio')) {
    res.setHeader('Content-Type', 'audio/mpeg');
  }
  if (filter.startsWith('video')) {
    res.setHeader('Content-Type', 'video/mp4');
  }

  // // Downloader
  ytdl(url, {
    filter,
    quality,
  })
    .on('progress', (chunkLength, downloaded, total) => {
      const percent = downloaded / total;
      console.log((percent * 100).toFixed(2) + '%');
    })
    .on('end', () => {
      console.log('Downloaded finished');
    })
    .pipe(res);
}

export const config = {
  api: {
    responseLimit: false,
  },
};
