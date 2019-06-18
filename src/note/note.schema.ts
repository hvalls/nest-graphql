import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  content: String,
});
