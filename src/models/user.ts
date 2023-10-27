import mongoose from 'mongoose';

interface UserAttrs {
  email: string;
  company_id: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  company_id: string;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    company_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
