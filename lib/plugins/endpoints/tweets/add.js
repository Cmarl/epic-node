'use strict';

var Tweet = require('../../../models/tweet.js');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/posts/tweets',
    config: {
      description: 'Add a new tweet',
      handler: function(request, reply){
        Tweet.findOne({id: request.payload.id}, function(err, t){
          if(err || t){return reply().code(400); }
          var tweet = new Tweet(request.payload);
          tweet.userId = request.auth.credentials._id;
          tweet.save();
          return reply().code(200);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'add.tweet'
};
