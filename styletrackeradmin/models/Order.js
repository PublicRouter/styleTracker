import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
  lineItems: Object,
  name: String,
  email: String,
  city: String,
  state: String,
  zip: String,
  streetAddress: String,
  country: String,
  paid: Boolean,
}, {
  timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);