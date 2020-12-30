import React from 'react'
import HomepageBackground from '../components/homepage-background'
import CollectionPreviewShopPage from '../pages/shoppage'
import '../styles/style.scss'
import '../styles/checkout.scss'

const HomePage = () => (
    <div className='homepage'>
        <HomepageBackground />
        <CollectionPreviewShopPage />
    </div>
)

export default HomePage