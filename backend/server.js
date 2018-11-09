import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import {getSecret} from './secrets';
import Ticket from './models/ticket';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3000;

mongoose.connect(getSecret('dbUri'), {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({enxtended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

router.get('/tickets', (req, res) => {
    Ticket.find((err, tickets) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: tickets});
    });
});

router.post('/tickets', (req, res) => {
    const ticket = new Ticket();
    const {title, requestor, su, ice, type} = req.body;
    ticket.title = title;
    ticket.requestor = requestor;
    ticket.su = su;
    ticket.ice = ice;
    ticket.type = type;
    ticket.save(err => {
        if (err) return res.json({success:false, error: err});
        return res.json({success: true});
    });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));