var mongoose=require('mongoose');

mongoose.promise=global.promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:root@ds123129.mlab.com:23129/items');

module.exports={
  mongoose:mongoose
};
