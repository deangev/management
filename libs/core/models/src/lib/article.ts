import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  authorUsername: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tagList: {
    type: [String],
  },
  favorites: {
    type: [String],
  }
}, { timestamps: true});

const Article = mongoose.model('Article', articleSchema);

export default Article;
