const { Schema, model, Types } = require('mongoose');
//brings in moment 
const moment = require('moment');

// reaction 
const ReactionsSchema = new Schema(
    {
    // sets th eid
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
);

// thoughts
const ThoughtsSchema = new Schema(
    {

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },

    username: {
        type: String,
        required: true
    },

    reactions: [ReactionsSchema]
    },
    
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

//count of reactions
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// makes thoughts model using the schema
const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;