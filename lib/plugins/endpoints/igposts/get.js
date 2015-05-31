'use strict';

var IgPost = require('../../../models/igpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/posts/igposts',
    config: {
      description: 'Get saved instagram posts',
      handler: function(request, reply){
        IgPost.find({userId: request.auth.credentials._id}, function(err, results){
          if(err){return reply().code(400); }
          return reply({results: results});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'get.igposts'
};
