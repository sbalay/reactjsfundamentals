var React = require('react');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle (props) {
  return props.isLoading
    ? <p> LOADING </p>
    : <div> Confirm Battle!: {puke(props)} </div>;
}

module.exports = ConfirmBattle;