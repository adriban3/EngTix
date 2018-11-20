import axios from 'axios';

export default {
    getAllRequests: function () {
        return axios.get('/api/all')
            .catch(error => console.log(error.message));
    },

    newTicket: function (newTicket) {
        return axios.post('/api/', newTicket)
            .catch(error => console.log(error.message));
    }
};