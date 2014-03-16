var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Thought = new Schema({
    _id    	   : ObjectId,
    content    : String,
	tags	   : Array,
	rank	   : Number,
	liked	   : Boolean,
    updated	   : Date
});
 
mongoose.model( 'Thought', remember );
mongoose.connect( 'mongodb://localhost:3000' );///express-remember