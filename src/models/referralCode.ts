import mongoose from 'mongoose';

interface ReferralcodeAttrs {
  code: string;
  user_id: string;
  campaign_id: string;
  referee_joined: Array<string>;
}

interface ReferralcodeModel extends mongoose.Model<ReferralcodeDoc> {
  build(attrs: ReferralcodeAttrs): ReferralcodeDoc;
}

interface ReferralcodeDoc extends mongoose.Document {
  code: string;
  user_id: string;
  campaign_id: string;
  referee_joined: Array<string>;
}

const referralcodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  user_id: { type: String, required: true },
  campaign_id: { type: String, required: true },
  referee_joined: { type: Array<string> },
});

referralcodeSchema.statics.build = (attrs: ReferralcodeAttrs) => {
  return new Referralcode(attrs);
};

const Referralcode = mongoose.model<ReferralcodeDoc, ReferralcodeModel>(
  'Referralcode',
  referralcodeSchema
);

export { Referralcode };
