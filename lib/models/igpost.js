/* eslint no-reserved-keys: 0 */
/* eslint camelcase: 0 */

'use strict';

var Mongoose = require('mongoose');
var IgPost;

var IgPostSchema = Mongoose.Schema({
  attribution: {type: String},
  caption: {type: String},
  comments: {type: Object},
  created_time: {type: String},
  filter: {type: String},
  id: {type: String},
  images: {type: Object},
  likes: {type: Object},
  link: {type: Object},
  location: {type: Object},
  tags: {type: Array},
  type: {type: String},
  user: {type: Object},
  userId: {type: String},
  user_has_liked: {type: Boolean},
  user_in_photo: {type: Array}
});

IgPost = Mongoose.model('IgPost', IgPostSchema);
module.exports = IgPost;
