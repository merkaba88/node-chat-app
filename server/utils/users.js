class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    // return user that was removed
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    // Find all users whose room matches room argument passed in
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {
  Users
};
