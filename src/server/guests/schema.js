import mongoose from 'mongoose';

const GuestsSchema = mongoose.Schema({
  name:{
    type:String,
    description: 'name of the guest',
    index: true,
    unique: true
  },
  type:{
    type: String,
    description: 'type of guest',
    enum: ['adult', 'children', 'baby']
  },
  group:{
    type: String,
    description: 'group',
    enum: ['abrahamFamily', 'nicoleFamily', 'abrahamFriends', 'nicoleFrieds', 'tremp', 'moncortes', 'other', 'holland'],
    index: true
  },
  companions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Guests'
    }
  ]
});

const Guests = mongoose.model('Guests', GuestsSchema);
export default Guests;
