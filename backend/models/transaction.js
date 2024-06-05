const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  app_trans_id: { type: String, required: true, unique: true },
  app_user: { type: String, required: true },
  amount: { type: Number, required: true },
  app_time: { type: Date, required: true },
  description: { type: String, required: true },
  order_url: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('transaction', TransactionSchema);
