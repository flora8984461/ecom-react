import React from 'react'
import MenuItem from './menu-item'

class DirectoryMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    return (
      <div className='container directory-menu'>
        <div className="row">
          {this.state.sections.map(({ id, ...otherSectionProps }) => (  // same as {id, imageUrl, title, size, linkUrl}
            <div key={id} className="col-md-6">
              <MenuItem key={id} {...otherSectionProps} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DirectoryMenu