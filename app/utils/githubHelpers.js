var axios = require('axios');

var id = 'CLIENT_ID';
var secret = 'SECRET';
var param = '?client_id=' + id + '&client_secret=' + secret;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (name) {
      return getUserInfo(name);
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      });
    }).catch(function (err) {
      console.error('err', err);
    });
  }
};

module.exports = helpers;
