'use strict';

var FbPost = require('../../../models/fbpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/posts/fbposts/{postId}',
    config: {
      description: 'Delete a saved facebook post',
      handler: function(request, reply){
        FbPost.findOne({userId: request.auth.credentials._id, _id: request.params.postId}, function(err, post){
          if(err){return reply().code(400); }
          post.remove();
          return reply(post);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'delete.fbpost'
};
