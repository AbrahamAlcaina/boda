import mongoose from 'mongoose';

const GuestSchema = mongoose.Schema({
  name: {
    type: String,
    description: 'name of the guest',
    index: true,
    unique: true
  },
  type: {
    type: String,
    description: 'type of guest',
    enum: ['adult', 'children', 'baby']
  },
  group: {
    type: String,
    description: 'group',
    enum: ['family-bdn',
      'family-tremp',
      'family-holland',
      'friends-bcn',
      'friends-bdn',
      'friends-tremp'],
    index: true
  },
  companions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Guest'
    }
  ],
  attend: {
    type: Boolean,
    description: 'The guest attends the weeding'
  },
  needPlace: {
    type: Boolean,
    description: 'The guest needs place for sleep'
  }
});

const Guest = mongoose.model('Guest', GuestSchema);
export default Guest;
