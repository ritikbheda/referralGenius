import mongoose from 'mongoose';

interface CompanyAttrs {
  company_name: string;
  company_email: string;
  campaigns: Array<string>;
  users: Array<string>;
}

interface CompanyModel extends mongoose.Model<CompanyDoc> {
  build(attrs: CompanyAttrs): CompanyDoc;
}

interface CompanyDoc extends mongoose.Document {
  company_name: string;
  company_email: string;
  campaigns: Array<string>;
  users: Array<string>;
}

const companySchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    company_email: { type: String, required: true },
    campaigns: { type: Array<string> },
    users: { type: Array<string> },
  },
  {
    timestamps: true,
  }
);

companySchema.statics.build = (attrs: CompanyAttrs) => {
  return new Company(attrs);
};

const Company = mongoose.model<CompanyDoc, CompanyModel>(
  'Company',
  companySchema
);

export { Company };
