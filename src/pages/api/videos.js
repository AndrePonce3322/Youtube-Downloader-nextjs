let fetchCount = 0;

export default async function handler(req, res) {
  const { maxResults, pageToken } = req.query;
  const results = maxResults ? maxResults : 15;

  let linkToFetch = '';

  console.log('Videos Fetch', fetchCount++);

  if (pageToken) {
    linkToFetch = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${results}&regionCode=ES&key=${process.env.YOUTUBE_API_KEY}&pageToken=${pageToken}`;
  } else {
    linkToFetch = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${results}&regionCode=ES&key=${process.env.YOUTUBE_API_KEY}`;
  }

  const getVideos = await fetch(linkToFetch);
  const videos = await getVideos.json();

  return res.json(videos);
}
