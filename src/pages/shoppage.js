import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../components/collection-preview';

class CollectionPreviewShopPage extends React.Component {

  render() {
    const { collections } = this.props
    return (
      <div className='container shop-page'>
        {collections?.map(({ id, ...otherCollectionProps }) =>
          (<CollectionPreview key={id} {...otherCollectionProps} />)
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  collections: state.search.filtered
})

export default connect(mapStateToProps)(CollectionPreviewShopPage)