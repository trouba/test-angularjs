angular.module('testApp').factory('userService', function(){

  var savedUser;

  localStorage.getItem('user') === null ? savedUser = {} : savedUser = JSON.parse(localStorage.getItem('user'))

  savedUser.save = function(user) {
    if (user.email !== undefined && user.name !== undefined) {
      savedUser = angular.copy(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true
    }
    return false
  }

  savedUser.security = function() {
    return savedUser.email !== undefined && savedUser.name !== undefined
  }

  savedUser.load = function() {
    return savedUser
  }

  return savedUser
});