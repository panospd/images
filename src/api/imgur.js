import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'ec857f0dfefdf15'
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },

    fetchImages(token) {
        const url = `${ROOT_URL}/3/account/me/images`;
        axios

        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}