var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var app = document.getElementById('app');

var HelloWorld = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div> Hello {this.props.name} </div>
    )
  }
});

var USER_DATA = {
  name: 'seba',
  username: 'sbalay',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPAazN5G9pHFVRuW0Iuv1AclfKU2eW83MHyf52qelP0vquYIYQ8w'
};

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return <Link href={'https://github.com/' + this.props.username}>{this.props.username}</Link>;
  }
});

var ProfileName = React.createClass({
  render: function () {
    return <div>{this.props.name}</div>;
  }
});

var Link = React.createClass({
  changeURL: function () {
    window.location.replace(this.props.href);
  },
  render: function () {
    return (
      <span
        style={{color: 'blue'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    );
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

ReactDOM.render(
  routes,
  app
);
