import mongoose, { Schema, Document } from 'mongoose';

interface ISupplier extends Document {
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
}

const SupplierSchema: Schema = new Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

export default mongoose.models.Supplier || mongoose.model<ISupplier>('Supplier', SupplierSchema);
