import ytdl from 'ytdl-core';

export default async function handler(req, res) {
  const requirements = req.body;
  console.log({ requirements });
  const { url, filter, quality } = requirements;

  if (!url || !filter || !quality)
    return res.status(400).json({ error: 'Missing requirements' });

  if (filter.startsWith('audio')) {
    res.setHeader('Content-Type', 'audio/mpeg');
  }
  if (filter.startsWith('video')) {
    res.setHeader('Content-Type', 'video/mp4');
  }

  // // Get the length of the video
  let length = 0;

  await ytdl.getInfo(url).then((info) => {
    length = ytdl.chooseFormat(info.formats, {
      quality,
      filter,
    }).contentLength;
  });

  try {
    res.setHeader('Content-Length', length);
  } catch (error) {
    console.log('Error setting content length', error);
  }

  return ytdl(url, {
    filter,
    quality,
  })
    .on('end', () => {
      console.log('Downloaded finished');
    })
    .pipe(res);
}

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '100mb',
    }
  },
};
