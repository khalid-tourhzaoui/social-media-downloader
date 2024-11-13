
/*--------------------------------------------------------------------*/
import axios from 'axios';

const RequestInstagram = axios.create({
    baseURL: 'https://instagram-bulk-scraper-latest.p.rapidapi.com/',
    timeout: 30000,
    headers: {
    'x-rapidapi-key': '371828caf7msh9dee98d80d26a06p1d43e9jsnebdd59a9dc58',
    'x-rapidapi-host': 'instagram-bulk-scraper-latest.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
});

export async function getInstagram(userUrl) {
    try {
        const response = await RequestInstagram.post('/media_download_from_url', {
            url: userUrl
        });
    return response.data; 
} catch (error) {
    console.error('Error fetching Instagram data:', error);
    throw error; 
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
