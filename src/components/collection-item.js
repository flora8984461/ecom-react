import React from 'react';
import CustomButton from '../components/custom-button';
import { connect } from 'react-redux';
import { addItem } from './redux/cart/cart-actions';

const CollectionItem = ({ item, addItem }) => (

  <div className="col-md-3">
    <div className="card">
      <div className="card-img-top"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);