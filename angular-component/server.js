'use strict';

module.exports.data = function(context, callback){
  callback(null, {
    staticpath: context.staticPath
  });
};