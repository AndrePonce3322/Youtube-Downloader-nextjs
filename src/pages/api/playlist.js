export default async function PlaylistInfoByChannelId(req, res) {
  const { q } = req.query;

  console.log('Fetch playlist')

  const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${q}&maxResults=30&key=${process.env.YOUTUBE_API_KEY}`;

  const response = await fetch(url);

  const data = await response.json();
  res.json(data);
}
