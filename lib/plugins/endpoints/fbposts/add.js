'use strict';

var FbPost = require('../../../models/fbpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/posts/fbposts',
    config: {
      description: 'Add a new facebook post',
      handler: function(request, reply){
        FbPost.findOne({id: request.payload.id}, function(err, post){
          if(err || post){return reply(err).code(400); }
          var fbPost = new FbPost(request.payload);
          fbPost.userId = request.auth.credentials._id;
          fbPost.save();
          return reply(post).code(200);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'add.fbpost'
};
