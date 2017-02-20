var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('Should generate search Text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo funciton', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing To do'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'Anything',
      completed: false,
      completedAt: undefined,
      createdAt: 923091
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    }
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);

  });

  it('Should toggle Todos', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should toggle todo based on id', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    }

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
