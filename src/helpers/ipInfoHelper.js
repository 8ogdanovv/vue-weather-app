// ipInfoHelper.js

import axios from 'axios';

const getIPInfo = async () => {
  try {
    const response = await axios.get('https://ipinfo.io');
    return response.data;
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return null;
  }
};

export default getIPInfo;
