import axios from 'axios';

export default {
    getAllRequests: function () {
        return axios.get('/api/all')
            .catch(error => console.log(error.message));
    },

    newTicket: function () {
        return axios.post('/api/')
            .catch(error => console.log(error.message));
    }
};