import axios from 'axios';

export default {
    getAllRequests: function () {
        return axios.get('/api/all')
            .catch(error => console.log(error.message));
    },

    newTicket: function (newTicket) {
        return axios.post('/api/', newTicket)
            .catch(error => console.log(error.message));
    },

    newUser: function (newUser) {
        return axios.post('/api/newUser', newUser)
    },

    login: function (credentials) {
        return axios.post('/api/login', credentials)
    },

    isLoggedIn: function(username) {
        return axios.get('/api/user', username)
    },

    logout: function(username) {
        return axios.post('/api/logout', username)
    }
};