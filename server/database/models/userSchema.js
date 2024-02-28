import bcrypt from "bcrypt";
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  token: {
    type: String,
    default: null
  },
  avatarURL: {
    type: String,
    default: null
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String,
    default: null
  },
  favorites: {
    type: [String],
    default: []
  },
  shoppingList: {
    type: [String],
    default: []
  }
}, { versionKey: false, timestamps: false });

userSchema.pre('save', async function(next) {
  if (!this.password) {
    return;
  }
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model('User', userSchema);