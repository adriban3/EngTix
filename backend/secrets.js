require('dotenv').config();

const secrets = {
    dbUri: 'mongodb://Andrew:habasit1@ds157383.mlab.com:57383/engtix' //will have to set DB_URI environment variable at home
};

export const getSecret = key => secrets[key];
