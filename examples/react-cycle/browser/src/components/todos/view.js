/** @jsx hJSX */
import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom';
import _ from 'lodash';

// TODO : Move somewhere else and import.
var superStyles = {
  button: {
    margin: 0,
    padding: 0,
    border: 0,
    background: 'none',
    fontSize: '100%',
    verticalAlign: 'baseline',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
    WebkitAppearance: 'none',
    appearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased'
  }
}

var styles = {
  // Combine style declarations.
  // TODO : There's got to be a better way of doing this.
  merge: function () {
    let o = {};
    _.forEach(arguments, function (p) {
      _.assign(o, p);
    });
    return o;
  },

  h1: {
    position: 'absolute',
    top: '-155px',
    width: '100%',
    fontSize: '100px',
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
    WebkitTextRendering: 'optimizeLegibility',
    MozTextRendering: 'optimizeLegibility',
    textRendering: 'optimizeLegibility'
  },

  newTodo: {
    position: 'relative',
    margin: 0,
    width: '100%',
    fontSize: '24px',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: '1.4em',
    border: 0,
    outline: 'none',
    color: 'inherit',
    padding: '6px',
    border: '1px solid #999',
    boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
    padding: '16px 16px 16px 60px',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)'
  },

  // TODO : This is usually accessed in the following ways, but I don't think we
  // can do this via JSX styles.
  /*
  .todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
  */
  placeholder: {
    fontStyle: 'italic',
    fontWeight: 300,
    color: '#e6e6e6'
  },

  main: {
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #e6e6e6'
  },

  // TODO : I don't think that this is possible in JSX styling either.
  /*
  label[for='toggle-all'] {
    display: none;
  }

  .toggle-all:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked:before {
    color: #737373;
  }
  */

  toggleAll: {
    position: 'absolute',
    top: '-55px',
    left: '-12px',
    width: '60px',
    height: '34px',
    textAlign: 'center',
    border: 'none'
  },

  todoList: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },

  footer: {
    color: '#777',
    padding: '10px 15px',
    height: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e6e6e6'
  },

  /*
  .footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
  */

  todoCount: {
    float: 'left',
    textAlign: 'left',
    fontWeight: 300
  },

  filters: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'absolute',
    right: 0,
    left: 0
  },

  filtersItem: {
    display: 'inline'
  },

  filtersLink: {
    color: 'inherit',
    margin: '3px',
    padding: '3px 7px',
    textDecoration: 'none',
    border: '1px solid transparent',
    borderRadius: '3px'
  },

  filtersLinkSelected: {
    borderColor: 'rgba(175, 47, 47, 0.2)'
  },

  /*
  .filters li a.selected,
  .filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
  */

  // .clear-completed,
  // html .clear-completed:active {
  clearCompleted: _.extend(superStyles.button, {
    float: 'right',
    position: 'relative',
    lineHeight: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative'
  }),

  /*
  .clear-completed:hover {
    text-decoration: underline;
  }
  */

  info: {
    margin: '65px auto 0',
    color: '#bfbfbf',
    fontSize: '10px',
    textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
    textAlign: 'center'
  },

  infoP: {
    lineHeight: 1
  },

  infoA: {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 400
  }

  /*
  .info a:hover {
    text-decoration: underline;
  }
  */
};

function renderHeader() {
  return (
    <header>
      <h1 style={styles.h1}>todos</h1>
      <input
        type="text"
        attributes=""
        autofocus
        name="newTodo"
        placeholder="What needs to be done?"
        value=""
        style={styles.newTodo}>
      </input>
    </header>
  )
}

function renderMainSection(todosData) {
  let allCompleted = todosData.list.reduce((x, y) => x && y.completed, true);
  if (todosData.list.length > 0) {
    return (
      <section style={styles.main}>
        <input
          type="checkbox"
          checked={allCompleted}
          style={styles.toggleAll}>
        </input>
        <ul style={styles.todoList}>
          {todosData.list.filter(todosData.filterFn).map(data => data.todoItem.DOM)}
        </ul>
      </section>
    )
  }
}

function renderFooter(todosData) {
  let amountCompleted = todosData.list
    .filter(todoData => todoData.completed)
    .length;
  let amountActive = todosData.list.length - amountCompleted;
  if (todosData.list.length > 0) {
    var completeButton;
    if (amountCompleted > 0) {
      completeButton = <button style={styles.clearCompleted}>Clear completed ({amountCompleted})</button>;
    }

    return (
      <section style={styles.footer}>
        <span style={styles.todoCount}>{amountActive} item{(amountActive !== 1 ? 's' : '')} left</span>
        <ul style={styles.filters}>
          <li style={styles.filtersItem}>
            <a
              style={todosData.filter === '' ? styles.merge(styles.filtersLink, styles.filtersLinkSelected) : styles.filtersLink}
              href="#">
                All
              </a>
          </li>
          <li style={styles.filtersItem}>
            <a
              style={todosData.filter === 'active' ? styles.merge(styles.filtersLink, styles.filtersLinkSelected) : styles.filtersLink}
              href="#">
                Active
              </a>
          </li>
          <li style={styles.filtersItem}>
            <a
              style={todosData.filter === 'completed' ? styles.merge(styles.filtersLink, styles.filtersLinkSelected) : styles.filtersLink}
              href="#">
                Completed
              </a>
          </li>
        </ul>
        {completeButton}
      </section>
    )
  }
}

export default function view(todos$) {
  return todos$.map(todos =>
    <div>
      {renderHeader()}
      {renderMainSection(todos)}
      {renderFooter(todos)}
    </div>
  );
};
