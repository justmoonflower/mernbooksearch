const {User} = require('../models')
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            
            const userData = await User.findOne({ _id: context.user._id });

            if (!userData) {
              return console.log("couldn't find user");
            }
    
            return userData;
          }
    
          
        },
      }
    }