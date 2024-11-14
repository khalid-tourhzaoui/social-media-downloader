
/*--------------------------------------------------------------------*/
import axios from 'axios';

const RequestInstagramAndYoutube = axios.create({
  baseURL: 'https://full-downloader-social-media.p.rapidapi.com',
  timeout: 30000,
  headers: {
    'x-rapidapi-key': '371828caf7msh9dee98d80d26a06p1d43e9jsnebdd59a9dc58',
    'x-rapidapi-host': 'full-downloader-social-media.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});

export async function getInstagramYoutubeData(videoUrl) {
  try {
    const response = await RequestInstagramAndYoutube.get('/', {
      params: {
        url: videoUrl, // The video URL as a query parameter
        hd: 0, // Optional: Add HD parameter if supported
      },
    });
    return response.data; // Return the API response data
  } catch (error) {
    console.error('Error fetching TikTok/Youtube data:', error);
    throw error; // Rethrow error for caller to handle
  }
}

/*--------------------------------------------------------------------*/
const RequestTikTok = axios.create({
  baseURL: 'https://tiktok-download-without-watermark.p.rapidapi.com',
  timeout: 30000,
  headers: {
    'x-rapidapi-key': '371828caf7msh9dee98d80d26a06p1d43e9jsnebdd59a9dc58',
    'x-rapidapi-host': 'tiktok-download-without-watermark.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});

export async function getTikTokData(videoUrl) {
  try {
    const response = await RequestTikTok.get('/analysis', {
      params: {
        url: videoUrl,
        hd: 0,
      },
    });
    return response.data; // Return the API response data
  } catch (error) {
    console.error('Error fetching TikTok data:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
}