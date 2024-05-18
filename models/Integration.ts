import mongoose, { Schema, Document } from 'mongoose';

interface IIntegration extends Document {
  name: string;
  type: string;
  apiKey: string;
  apiSecret: string;
  sellerId: string;
}

const IntegrationSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  apiKey: { type: String, required: true },
  apiSecret: { type: String, required: true },
  sellerId: { type: String, required: true },
});

export default mongoose.models.Integration || mongoose.model<IIntegration>('Integration', IntegrationSchema);
