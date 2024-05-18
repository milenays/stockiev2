import mongoose, { Schema, Document } from 'mongoose';

interface IWarehouse extends Document {
  name: string;
  location: string;
  capacity: number;
  description: string;
}

const WarehouseSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Warehouse || mongoose.model<IWarehouse>('Warehouse', WarehouseSchema);
