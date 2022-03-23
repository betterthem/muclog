const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  admin_id: String,
  admin_pw: String,
  admin_name: String,
  date: {
    type: Date,
    default: Date.now
  },
}, { versionKey : false });

module.exports = mongoose.model('admin', adminSchema);