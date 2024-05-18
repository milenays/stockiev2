import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  description: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
