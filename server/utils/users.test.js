const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Dan',
      room: 'A'
    }, {
      id: '2',
      name: 'Tom',
      room: 'B'
    }, {
      id: '3',
      name: 'Adam',
      room: 'A'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '321',
      name: 'Daniel',
      room: 'A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser('1');

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '14';
    var user = users.removeUser('14');

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should get user by id', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user with invalid id', () => {
    var userId = '6';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for A', () => {
    var userList = users.getUserList('A');

    expect(userList).toEqual(['Dan', 'Adam']);
  });

  it('should return names for B', () => {
    var userList = users.getUserList('B');

    expect(userList).toEqual(['Tom']);
  });

});
