const { createToken, verifyToken } = require('./auth')

import User from './models/user'
import Order from './models/order'

const resolvers = {
  Query: {
    async role(root, args, token) {
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) return {
        content: true,
        user: true,
        order: true,
        email: true,
        question: true
      }
      else return {
        content: false,
        user: false,
        order: false,
        email: false,
        question: false
      }
    },
    async users(root, args, token) {
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) return await User.find()
      else throw new Error('Invalid token')
    },
    async order(root, args, token) {
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) {
        return await Order.findOne({ _id: args.id }).populate('seen')
      }
      else throw new Error('Invalid token')
    },
    async orders(root, args, token) {
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) {
        let orders = await Order.find().populate('seen').sort({ date: -1 })
        orders = orders.slice(args.start || 0, (args.start || 0 + args.count || orders.length))
        return orders
      }
      else throw new Error('Invalid token')
    }
  },
  Mutation: {
    async createUser(root, args, token){
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) return await User.create({ ...args })
      else throw new Error('Invalid token')
    },
    async deleteUser(root, args, token){
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) {
        await User.remove({ _id: args.id })
        return 'Deleted'
      }
      else throw new Error('Invalid token')
    },

    async createOrder(root, args){
      return await Order.create({ ...args, date: new Date(), seen: [] })
    },
    async deleteOrder(root, args, token){
      const _id = await verifyToken(token).then(res => res.id)
      const user = await User.findOne({ _id })
      if(user) {
        await Order.remove({ _id: args.id })
        return 'Deleted'
      }
      else throw new Error('Invalid token')
    },
    async seeOrder(root, args, token){
      if(token) {
        const _id = await verifyToken(token).then(res => res.id)
        const user = await User.findOne({ _id })
        if(user) {
          let seen = (await Order.findOne({ _id: args.id })).seen
          if(seen.indexOf(_id) == -1) seen = [...seen, _id]
          await Order.update({ _id: args.id }, { $set: { 'seen': seen } })
          return await Order.findOne({ _id: args.id }).populate('seen')
        }
        else return { error: 'Invalid token' }
      }
      else return { error: 'Token was not provided' }
    },

    async signIn(root, args) {
      const user = await User.findOne({ login: args.login, password: args.password })
      if(user) return { token: await createToken({ id: user._id }) }
      else return { token: '', error: 'Authentication failed. User not found.' }
    }
  }
}

module.exports = resolvers
