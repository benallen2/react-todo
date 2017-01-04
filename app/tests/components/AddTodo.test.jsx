var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo Form', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call AddToDO prop with valid data', () => {
    var todoText = "Stuff";

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call AddToDO prop with invalid data', () => {
    var todoText = "";

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
