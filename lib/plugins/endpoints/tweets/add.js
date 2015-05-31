'use strict';

var Tweet = require('../../../models/tweet.js');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/posts/tweets',
    config: {
      description: 'Add a new tweet',
      handler: function(request, reply){
        var tweet = new Tweet(request.payload);
        tweet.save();
        return reply().code(200);
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'add.tweet'
};
