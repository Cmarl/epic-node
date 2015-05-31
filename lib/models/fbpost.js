/* eslint no-reserved-keys: 0 */
/* eslint camelcase: 0 */

'use strict';

var Mongoose = require('mongoose');
var FbPost;

var fbPostSchema = Mongoose.Schema({
  userId: {type: String, required: true},
  id: {type: String},
  createdAt: {type: Date, required: true, default: Date.now},
  created_time: {type: String},
  updated_time: {type: String},
  from: {type: Object},
  height: {type: Number},
  widht: {type: Number},
  icon: {type: String},
  comments: {type: Object},
  images: {type: Array},
  likes: {type: Object},
  link: {type: String},
  message: {type: String},
  name: {type: String},
  picture: {type: String},
  source: {type: String}
});

FbPost = Mongoose.model('FbPost', fbPostSchema);
module.exports = FbPost;
