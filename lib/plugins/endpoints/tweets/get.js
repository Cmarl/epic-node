'use strict';

var Tweet = require('../../../models/tweet.js');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/posts/tweets',
    config: {
      description: 'Get saved tweets',
      handler: function(request, reply){
        Tweet.find({userId: request.auth.credentials._id}, function(err, results){
          if(err){return reply().code(400); }
          return reply({results: results});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'get.tweets'
};
