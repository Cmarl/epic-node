'use strict';

var IgPost = require('../../../models/igpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/posts/igposts/{postId}',
    config: {
      description: 'Delete a saved instagram post',
      handler: function(request, reply){
        IgPost.findOne({userId: request.auth.credentials._id, _id: request.params.postId}, function(err, post){
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
  name: 'delete.igpost'
};
