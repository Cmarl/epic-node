'use strict';

var Tweet = require('../../../models/tweet.js');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/posts/tweets/{postId}',
    config: {
      description: 'Delete a saved tweet',
      handler: function(request, reply){
        Tweet.findOne({userId: request.auth.credentials._id, _id: request.params.postId}, function(err, tweet){
          if(err){return reply().code(400); }
          tweet.remove();
          return reply(tweet);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'delete.tweet'
};
