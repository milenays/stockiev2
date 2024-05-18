import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  stockcode: string;
  barcode: string;
  deporaf: string;
  depoalan: string;
  category: string;
  brand: string;
  buyprice: number;
  marketprice: number;
  saleprice: number;
  quantity: number;
  fakequantity: number;
  criticalquantity: number;
  images: string[];
  descriptions: string;
  desi: number;
  supplier: string;
  tags: string[];
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  stockcode: { type: String, required: true },
  barcode: { type: String },
  deporaf: { type: String },
  depoalan: { type: String },
  category: { type: String },
  brand: { type: String },
  buyprice: { type: Number },
  marketprice: { type: Number },
  saleprice: { type: Number },
  quantity: { type: Number, default: 0 },
  fakequantity: { type: Number, default: 0 },
  criticalquantity: { type: Number, default: 0 },
  images: [{ type: String }],
  descriptions: { type: String },
  desi: { type: Number },
  supplier: { type: String },
  tags: [{ type: String }],
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
