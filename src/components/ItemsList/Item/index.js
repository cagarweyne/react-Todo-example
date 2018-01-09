import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, complete, inComplete } from '../../../logic/actions';
import './styles.css';

export class Item extends Component {
  filterClass = () => {
    switch (this.props.filter) {
      case 'COMPLETED':
        return (this.props.item.completed ? '' : 'hidden-item');
      case 'INCOMPLETE':
        return (this.props.item.completed ? 'hidden-item' : '');
      default:
        return '';
    }
  };

  render() {
    const { item, onDelete, onComplete, onInComplete } = this.props;
    return (
      <div className={this.filterClass()}>
        <li className={ "list-item " + (item.completed ? 'completed-task' : '') }>{item.content}</li>
        <input
          className="itemDelete-button btn btn-primary"
          type="button"
          value="Delete"
          onClick={()=> {
            onDelete(item.id);
          }}
        />

        <input
          className={ "itemComplete btn btn-primary " + (item.completed ? 'hidden' : '') }
          type="button"
          value='Complete'
          onClick={ () => {
            onComplete(item.id);
          }}
        />

        <input
          className={"itemIncomplete btn btn-primary " + (item.completed ? '' : 'hidden')}
          type="button"
          value="Incomplete"
          onClick={ () => {
            onInComplete(item.id);
          }}
        />

      </div>
    );
  }
}

Item.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onInComplete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteItem(id)),
  onComplete: id => dispatch(complete(id)),
  onInComplete: id => dispatch(inComplete(id)),

});

export default connect(null, mapDispatchToProps)(Item);