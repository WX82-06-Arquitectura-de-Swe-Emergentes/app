// api.js
const baseURL = process.env.BASE_URL || 'https://api.default.com';


export const fetchDestinations = async () => {
  try {
    const response = await useFetch(`${baseURL}/destinations`);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

