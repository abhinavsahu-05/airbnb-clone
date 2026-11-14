import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },

    email:{
         type: String,
        required: true
    },

    password:{
         type: String,
        required: true
    },

    listing : [{
        type: Schema.Types.ObjectId,
        ref: "Listing"
    }],

    Booking : [{
         type: Schema.Types.ObjectId,
        ref: "Listing"
    }]
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)