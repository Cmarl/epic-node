'use strict';

var IgPost = require('../../../models/igpost.js');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/posts/igposts',
    config: {
      description: 'Add a new instagram post',
      handler: function(request, reply){
        var igPost = new IgPost(request.payload);
        igPost.save();
        return reply().code(200);
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'add.igpost'
};
