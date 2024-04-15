import ytdl from 'ytdl-core';

export default async function getInfoVideo(req, res) {
  const { q: id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing prop id' });

  const info = await ytdl.getBasicInfo(id).then((info) => {
    const { videoDetails, related_videos } = info;
    return res.json({ videoDetails, related_videos });
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