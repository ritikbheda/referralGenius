import mongoose from 'mongoose';

const allowedRewards = ['points', 'cash', 'coupon', 'discount'];

interface CampaignAttrs {
  title: string;
  description: string;
  API_key: string;
  rewards_system: string;
  referrer_rewards: number;
  referee_rewards: number;
  referrer: {
    user_id: mongoose.Types.ObjectId;
    code_id: mongoose.Types.ObjectId;
  };
  referee: {
    user_id: mongoose.Types.ObjectId;
    referrer_user_id: mongoose.Types.ObjectId;
  };
}

interface CampaignModel extends mongoose.Model<CampaignDoc> {
  build(attrs: CampaignAttrs): CampaignDoc;
}

interface CampaignDoc extends mongoose.Document {
  title: string;
  description: string;
  API_key: string;
  rewards_system: string;
  referrer_rewards: number;
  referee_rewards: number;
  referrer: {
    user_id: mongoose.Types.ObjectId;
    code_id: mongoose.Types.ObjectId;
  };
  referee: {
    user_id: mongoose.Types.ObjectId;
    referrer_user_id: mongoose.Types.ObjectId;
  };
}

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  API_key: { type: String, required: true },
  rewards_system: { type: String, required: true },
  referrer_rewards: { type: Number, required: true },
  referee_rewards: { type: Number, required: true },
  referrer: {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    code_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  referee: {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    referrer_user_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
});

campaignSchema.statics.build = (attrs: CampaignAttrs) => {
  return new Campaign(attrs);
};

const Campaign = mongoose.model<CampaignDoc, CampaignModel>(
  'Campaign',
  campaignSchema
);

export { Campaign };
