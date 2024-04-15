import ytdl from 'ytdl-core';

const AVAILABLE_TYPING = [
  {
    filter: 'audioonly',
    quality: 'highest',
  },
  {
    filter: 'audioonly',
    quality: 'lowest',
  },
  {
    filter: 'videoandaudio',
    quality: 'highest',
  },
  {
    filter: 'videoandaudio',
    quality: 'lowest',
  }
]

export default async function getInfoVideo(req, res) {
  const { q: id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing prop id' });

  let length = [];

  const info = await ytdl.getInfo(id).then((info) => {
    const { videoDetails, related_videos } = info;

    try {
      for (let i = 0; i <= AVAILABLE_TYPING.length; i++) {
        const { filter, quality } = AVAILABLE_TYPING[i];

        const fileLength = ytdl.chooseFormat(info.formats, {
          quality,
          filter,
        }).contentLength;

        length.push({
          filter,
          quality,
          fileLength,
        });
      }
    } catch (error) {
      console.log('Error setting content length', error);
    }

    return res.json({ formats: length, videoDetails, related_videos });
  });

  info.catch((err) => {
    res
      .status(400)
      .json({ error: 'Ha ocurrido un error', message: err.message });
  });
}

/* 
formats": [],
"related_videos": [],
"videoDetails": {}

*/