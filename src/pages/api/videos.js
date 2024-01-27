let count = 0;
export default async function handler(req, res) {
  const { maxResults } = req.query;
  const results = maxResults ? maxResults : 21;

  console.log('Fetch VIDEOS count: ', ++count);

  const allVideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${results}&regionCode=ES&key=${process.env.YOUTUBE_API_KEY}`;
  const getVideos = await fetch(allVideos);

  const videos = await getVideos.json();
  return res.json(videos);
}
