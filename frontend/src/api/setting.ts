import axios from 'axios';
import getStorageLanguage from '@/utils/getLang';

const BASE_URL = 'https://api.0xdeberin.com/api';

const axiosApiInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Lang: getStorageLanguage(),
        Accept: 'application/json',
    }
});

export default axiosApiInstance;