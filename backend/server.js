import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import cors from 'cors';
import tixRoutes from './routes/tixRoutes';
import session from 'express-session';
import passport from 'passport';
const MongoStore = require('connect-mongo')(session);
// const cors = require('cors');
// const tixRoutes = require('./routes/tixRoutes');

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri'), { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(
    session({
        secret: 'HabasitAmerica',
        store: new MongoStore({ mongooseConnection: mongoose.connection}),
        resave: false,
        saveUninitialized: false
    })
);

app.use((req, res, next) => {
    console.log('req.session', req.session)
    return next();
});

app.use(passport.initialize())

app.use(passport.session())

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// router.get('/', (req, res) => {
//     res.json({message: 'Hello World!'});
// });

// router.get('/tickets', (req, res) => {
//     Ticket.find((err, tickets) => {
//         if (err) return res.json({success: false, error: err});
//         return res.json({success: true, data: tickets});
//     });
// });

// router.post('/tickets', (req, res) => {
//     const ticket = new Ticket();
//     const {title, requestor, su, ice, type} = req.body;
//     ticket.title = title;
//     ticket.requestor = requestor;
//     ticket.su = su;
//     ticket.ice = ice;
//     ticket.type = type;
//     ticket.save(err => {
//         if (err) return res.json({success:false, error: err});
//         return res.json({success: true});
//     });
// });

app.use('/api', tixRoutes);
app.use(router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));