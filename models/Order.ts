import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  orderNumber: string;
  fullName: string;
  address1: string;
  city: string;
  district: string;
  countryCode: string;
  neighborhood: string;
  neighborhoodId: string;
  lines: Array<{ product: string; quantity: number; price: number }>;
  status: string;
  shipmentPackageStatus: string;
  cargoSenderNumber: string;
  cargoProviderName: string;
}

const OrderSchema: Schema = new Schema({
  orderNumber: { type: String, required: true },
  fullName: { type: String, required: true },
  address1: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  countryCode: { type: String, required: true },
  neighborhood: { type: String, required: true },
  neighborhoodId: { type: String, required: true },
  lines: [
    {
      product: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  status: { type: String, required: true },
  shipmentPackageStatus: { type: String },
  cargoSenderNumber: { type: String },
  cargoProviderName: { type: String },
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
