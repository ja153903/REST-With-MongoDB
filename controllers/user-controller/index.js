const chalk = require("chalk");
const User = require("../../models/user");

class UserController {
  static addUser(user) {
    User.create(user, (err) => {
      if (err) {
        console.log(chalk.red(err));
      }
    });
  }

  static findUserByEmail(email) {
    return User.find({ email }, (err) => {
      if (err) {
        console.log(chalk.red(err));
      }
    });
  }
}

module.exports = UserController;
