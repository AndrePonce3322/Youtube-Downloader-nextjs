import ytdl from 'ytdl-core';

export default function getInfoVideo(req, res) {
  const { q: id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing video id' });

  const info = ytdl.getBasicInfo(id).then((info) => {
    return res.json(info.videoDetails);
  });

  info.catch((err) => {
    res
      .status(400)
      .json({ error: 'Ha ocurrido un error', message: err.message });
  });
}
