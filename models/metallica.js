const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const MettalicaSchema = new mongoose.Schema({

    tradeDate:{
        type: Date,
        require: true,
    },
    commodity:{
        type: String,
        require: true,
    },
    side:{
        type: Boolean,
        require: true,
        default: true
    },
    quantity:{
        type: Number,
        require: true,
        default: 0
    },
    price:{
        type: Number,
        require: true,
        default: 0
    },
    counterParty:{
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    },
});

MettalicaSchema.plugin(timestamp);

const Mettalica = mongoose.model('Mettalica', MettalicaSchema);
module.exports = Mettalica;

// Trade Date
// Commodity, AL 
// Side, Buy or Sell
// Qty(MT), 100 or 200
// Price(/MT), 1860.56
// Counterparty, Lorem, Ipsum, Sit, Amet, 
// Location , BA, NYC, SYD, TOK, LON, 