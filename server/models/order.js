let mongoose = require('mongoose')
let Schema = mongoose.Schema

let OrderSchema = new Schema({
  company: String,
  industry: String,
  service: String,
  description: String,
  result: String,
  name: String,
  surname: String,
  phone: String,
  email: String,
  date: { type: Date, default: Date.now },
  seen: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ]
})

export default mongoose.model('Order', OrderSchema, 'Order')
