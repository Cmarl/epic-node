'use strict';

var FbPost = require('../../../models/fbpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/posts/fbposts',
    config: {
      description: 'Get saved facebook posts',
      handler: function(request, reply){
        FbPost.find({userId: request.auth.credentials._id}, function(err, results){
          if(err){return reply().code(400); }
          return reply({results: results});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'get.fbposts'
};
