const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productId: {
    type: String
  },
});

const cartModel = mongoose.Model("cart", cartSchema);

module.exports = cartModel;