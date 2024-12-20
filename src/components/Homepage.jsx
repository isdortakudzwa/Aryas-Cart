
import './home.css'
import homepic from './Images/banner-image.jpg'
import brands from './Images/twitter.png'
import brand1 from './Images/whatsapp.png'
function Homepage() {
  return (
    <div className='home'>

        <div className="banner-text">
          <h1>Discover Your Perfect Style at<span> Ayas Cart</span></h1>
          <p className='home-p-tag'>Explore our latest collection of fashion-forward clothing designed to elevate your wardrobe.</p>
             <div className="banner-buttons">
               <a href="/shop" className="btn-primary">Shop Now</a>
               <a href="/new-arrivals" className="btn-secondary">New Arrivals</a>
             </div>
        </div>

        <div className="banner-images">
          <div className='more-home'>
            <img src={homepic} alt="/" className='homepic' />
          </div>
          <div className="banner-infor">
            <h3>Perfect Fashion</h3>
            <p>Meet Simba Our first customer</p>
            
            <div className="brands">
              <img src={brands} alt="/" className='supporting' />
              <img src={brand1} alt="/" className='supporting' />
              <img src={brands} alt="/" className='supporting' />
            </div>
          </div>

        </div>

    </div>
  )
}

export default Homepage