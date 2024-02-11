const TOKEN = "953fa4d64cf37d3c6c16bac8553f3d84";

export const fetchVideo = async () => {
    const BASE_URL = "https://api.vimeo.com/videos";
    const videoId = '824804225';

  try {
    const response = await fetch(`${BASE_URL}/${videoId}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
      },
    });
      
       if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
  } catch (error) {
      console.log(error.message)
    throw new Error(error.message);
  }
};