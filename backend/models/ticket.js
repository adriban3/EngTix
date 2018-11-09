//will likely need to edit this, not sure what the format of a ticket is going to look like
//id, title, requestor (should probably come from a table in database), location (separate table), ICE Score (11-40), Submit Date, Type (prod, qual, sale, safe)
//need separate table for requestors, locations, and engineers, and assigned tickets?
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TicketsSchema = new Schema({
    title: String,
    requestor: String,
    su: String, 
    ice: Number,
    type: String,
    active: {type: Boolean, default: false}, //will have to be updated later through routing/user input
    status: String, //when front end is made these should all populate from secondary tables, but bc limited memory on mLab leave empty
    phase: String,
    next: String,
    lead: String
}, 
{
    timestamps: {createdAt: 'submit' }
});

export default mongoose.model('Ticket', TicketsSchema);