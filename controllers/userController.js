const { ObjectId } = require('mongoose').Types;
const { User, Thought }  = require('../models');

// May need to add aggregate functions here  
// userCount

  module.exports = {
    // Get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
  
        const userObj = {
          users,
        };
  
        res.json(userObj);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // Get a single user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' })
        }
  
        res.json({
          user,
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // create a new user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Delete a user and remove them from list
    async deleteUser(req, res) {
      try {
          const user = await User.findOneAndRemove({ _id: req.params.userId });
  
          if (!user) {
              return res.status(404).json({ message: 'No such user exists' });
          }
  
          // Delete corresponding thoughts of the user
          await Thought.deleteMany({ userId: req.params.userId });
  
          res.json({ message: 'User and associated thoughts successfully deleted' });
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  },

    // Update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
  
    // Add a friend to a user
    async addFriend(req, res) {
      console.log('You are adding a friend');
      console.log(req.params);
  
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        );
  
        if (!user) {
          return res
            .status(404)
            .json({ message: 'No user found with that ID :(' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Remove friend from a user
    async removeFriend(req, res) {
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        );
  
        if (!user) {
          return res
            .status(404)
            .json({ message: 'No user found with that ID :(' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };