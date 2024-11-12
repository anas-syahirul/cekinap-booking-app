import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
      min: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

export default User;
