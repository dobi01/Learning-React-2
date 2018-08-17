var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount() {
      console.log(this.props.name + ' componentWillMount');
    },

    render: function() {
      console.log(this.props);
        return React.createElement('div', {},
            React.createElement('span', {}, this.props.name),
            React.createElement('div', {className: 'count'}, this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('button', {onClick: this.decrement}, '-1'),
            )
        );
    },

    componentDidMount() {
        console.log(this.props.name + ' componentDidMount');
    },

    shouldComponentUpdate(nextState) {
        if (this.state.counter !== nextState.counter) {
          let result = true;
          console.log(this.props.name + ' shouldComponentUpdate: ' + result);
          return true;
        }
        return false;
    },

    componentWillUpdate(nextState) {
      console.log(this.props.name + ' componentWillUpdate: you can make preparation before an update occurs');
    },

    componentDidUpdate(prevState) {
      console.log(this.props.name + ' componentDidUpdate: you can operate on the DOM');
    }
});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter, {className: 'CounterA', name: 'counter A'}),
        React.createElement(Counter, {className: 'CounterB', name: 'counter B'})
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));
