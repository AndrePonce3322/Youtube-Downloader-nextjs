let fetchCount = 0;

export default async function handler(req, res) {
  const { q, pageToken } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing search query' });

  console.log('Search Fetch', fetchCount++);

  let linkToFetch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${q}&key=${process.env.YOUTUBE_API_KEY}`;

  if (pageToken) {
    const linkPlusPageToken = `${linkToFetch}&pageToken=${pageToken}`;
    linkToFetch = linkPlusPageToken;
  }

  const getVideos = await fetch(linkToFetch);
  const videos = await getVideos.json();

  return res.json(videos);
}
