import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './Item/index';

import './styles.css';

export class ItemsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: 'ALL',
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filter) {
    this.setState({filter});
  }

  render() {
    const items = this.props.items;
    return (
      <div className="todo-list-container">
        <hr />
        <ul className={'itemsList-ul'}>
          {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
          {items.map(item => <Item key={item.id} item={item} filter={this.state.filter}/>)}
        </ul>
        <h4>Filter Tasks</h4>
        <div className="filter-container">
          <button
            className="show-all btn btn-primary"
            onClick={() => {
              this.handleFilterClick('ALL');
            }}
          >
            All Tasks
          </button>

          <button
            className="completed btn btn-primary"
            onClick={() => {
              this.handleFilterClick('COMPLETED');
            }}
          >
            Completed
          </button>

          <button
            className="incomplete btn btn-primary"
            onClick={() => {
              this.handleFilterClick('INCOMPLETE');
            }}
          >
            Incomplete
          </button>
        </div>
      </div>
    );
  }

}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

export default connect(mapStateToProps)(ItemsList);
