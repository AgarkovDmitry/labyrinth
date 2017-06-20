let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
  name: String,
  surname: String,
  login: { type: String, unique: true },
  password: String,
  role: { type: Schema.Types.ObjectId, ref: 'Role' }
})

export default mongoose.model('User', UserSchema, 'User')
