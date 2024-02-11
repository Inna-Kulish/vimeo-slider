const BASE_URL = "https://api.vimeo.com/videos";
const videoId = "824804225";

// vimeoAPI get video by ID
export const fetchVideo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${videoId}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
