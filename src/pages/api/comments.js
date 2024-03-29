let fetchCount = 0;

export default async function getVideoComments(req, res) {
  const { q } = req.query;

  console.log('Comments Fetch', fetchCount++);

  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&part=replies&maxResults=25&part=id&videoId=${q}&key=${process.env.YOUTUBE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}
