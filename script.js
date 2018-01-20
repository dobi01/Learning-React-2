var Counter1 = React.createClass({
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
      console.log('Counter A_componentWillMount');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'counter A'),
            React.createElement('div', {className: 'count'}, this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('button', {onClick: this.decrement}, '-1'),
            )
        );
    },

    componentDidMount() {
        console.log('Counter A_componentDidMount');
    },

    shouldComponentUpdate(nextState) {
        if (this.state.counter !== nextState.counter) {
          let result = true;
          console.log('Counter A_shouldComponentUpdate: ' + result);
          return true;
        }
        return false;
    },

    componentWillUpdate(nextState) {
      console.log('Counter A_componentWillUpdate: you can make preparation before an update occurs');
    },

    componentDidUpdate(prevState) {
      console.log('Counter A_componentWillUpdate: you can operate on the DOM');
    }
});

var Counter2 = React.createClass({
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

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'counter B'),
            React.createElement('div', {className: 'count'}, this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('button', {onClick: this.decrement}, '-1'),
            )
        );
    }
});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter1, {className: 'Counter1'}),
        React.createElement(Counter2, {className: 'Counter1'})
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));
