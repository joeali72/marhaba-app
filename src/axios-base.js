import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://demos-iconcreations.com/2021/marhaba_dev/marhabaas/public/api/'
});

export default instance;