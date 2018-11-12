import axios from 'axios';

export default {
    getAllRequests: function () {
        return axios.get('/api/all')
            .catch(error => console.log(error.message));
    }
};