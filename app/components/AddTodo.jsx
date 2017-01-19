var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    var newTodo = this.refs.newTodo.value;
    if(newTodo.length > 0){
      this.refs.newTodo.value = "";
      this.props.onNewTodo(newTodo);
    } else {
      this.refs.newTodo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit} ref="form" className="todoForm">
          <input type="text" ref="newTodo" placeholder="What To Do?"/>
          <button className="button expanded success">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
