import React from 'react'
import CollectionItem from './collection-item'
import '../styles/style.scss'

const CollectionPreview = ({ title, items }) => (
  <>
  <h1 className='title'>{title.toUpperCase()}</h1>
  <div className='row collection-preview'>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))
      }
  </div>
  </>
)

export default CollectionPreview