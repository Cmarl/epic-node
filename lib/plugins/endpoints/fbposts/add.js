'use strict';

var FbPost = require('../../../models/fbpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/posts/fbposts',
    config: {
      description: 'Add a new facebook post',
      handler: function(request, reply){
        var fbPost = new FbPost(request.payload);
        fbPost.save();
        return reply().code(200);
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'add.fbpost'
};
