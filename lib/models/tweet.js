/* eslint no-reserved-keys: 0 */
/* eslint camelcase: 0 */

'use strict';

var Mongoose = require('mongoose');
var Tweet;

var tweetSchema = Mongoose.Schema({
  userId: {type: String, required: true},
  id: {type: Number},
  id_str: {type: String},
  createdAt: {type: Date, required: true, default: Date.now},
  text: {type: String},
  source: {type: String},
  truncated: {type: Boolean},
  in_reply_to_status_id: {type: Boolean},
  in_reply_to_status_id_string: {type: String},
  in_reply_to_user_id: {type: Boolean},
  in_reply_to_user_id_str: {type: String},
  in_reply_to_screen_name: {type: Boolean},
  user: {type: Object},
  geo: {type: Array},
  coordinates: {type: Array},
  place: {type: Array},
  contributors: {type: Array},
  retweet_count: {type: Number},
  favorite_count: {type: Number},
  entities: {type: Object},
  extended_entities: {type: Object},
  favorited: {type: Boolean},
  Retweeted: {type: Boolean},
  possibly_sensitive: {type: Boolean},
  possibly_sensitive_appealable: {type: Boolean},
  lang: {type: String}
});

Tweet = Mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
