let mongoose = require('mongoose')
let Schema = mongoose.Schema

let RoleSchema = new Schema({
  title: String,
  content: Boolean,
  user: Boolean,
  order: Boolean,
  email: Boolean,
  question: Boolean,
})

export default mongoose.model('Role', RoleSchema, 'Role')
