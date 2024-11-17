
/*--------------------------------------------------------------------*/
import axios from 'axios';

const RequestSocialMediaDataV2 = axios.create({
  baseURL: 'https://full-downloader-social-media.p.rapidapi.com',
  timeout: 30000,
  headers: {
    'x-rapidapi-key': '371828caf7msh9dee98d80d26a06p1d43e9jsnebdd59a9dc58',
    'x-rapidapi-host': 'full-downloader-social-media.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});

export async function getSocialMediaDataV2(videoUrl) {
  try {
    const response = await RequestSocialMediaDataV2.get('/', {
      params: {
        url: videoUrl, 
        hd: 0, 
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching Youtube data:', error);
    throw error; 
  }
}

/*--------------------------------------------------------------------*/
// Création de l'instance axios pour l'API
const RequestSocialMediaData = axios.create({
  baseURL: 'https://social-download-all-in-one.p.rapidapi.com/v1/social',
  timeout: 30000,
  headers: {
    'x-rapidapi-key': '371828caf7msh9dee98d80d26a06p1d43e9jsnebdd59a9dc58',
    'x-rapidapi-host': 'social-download-all-in-one.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});


export async function getSocialMediaData(videoUrl) {
  try {
    const response = await RequestSocialMediaData.post('/autolink', {
      url: videoUrl, 
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching social media data:', error);
    throw error; 
  }
}
/*--------------------------------------------------------------------*/
