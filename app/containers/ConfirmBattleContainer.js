var React = require('react');
var ReactRouter = require('react-router');

var ConfirmBattle = require('../components/ConfirmBattle')

var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  context: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    };
  },
  handleInititateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  componentDidMount: function () {
    var that = this;
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function (players) {
      that.setState({
        isLoading: false,
        playersInfo: players
      })
    });
  },
  render: function () {
    return <ConfirmBattle
              isLoading={this.state.isLoading}
              onInitiateBattle={this.handleInititateBattle}
              playersInfo={this.state.playersInfo} />
  }
});

module.exports = ConfirmBattleContainer;
