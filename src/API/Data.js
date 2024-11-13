
/*--------------------------------------------------------------------*/
import axios from 'axios';

const request = axios.create({
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
    const response = await request.post('/media_download_from_url', {
      url: userUrl
    });
    return response.data; // Return the data directly for use in the component
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    throw error; // Throw error to handle it in the component
  }
}






