import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  render() {
    return (
        <div id="grid_item" key={this.props.id}>
            <img className="grid_item_image" src={this.props.artwork} alt={this.props.title}/>       
            <div className="grid_item_title">{this.props.title}</div>
            <div className="grid_item_content">{this.props.content}</div>
        </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  artwork: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

Item.defaultProps = {
  id: 0,
  artwork: '',
  title: '',
  content: ''
};

export default Item;

