export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing search query' });

  const search = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&2CcontentDetails&maxResults=20&q=${q}&type=video&key=${process.env.YOUTUBE_API_KEY}`;
  const getVideos = await fetch(search);

  const videos = await getVideos.json();
  return res.json(videos);
}
