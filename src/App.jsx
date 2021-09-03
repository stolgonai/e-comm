import { useState } from 'react'
import HomePage from './components/Home/Home'
import ShopPage from './components/Shop/Shop'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/ui/Modal/Modal'
import './components/ui/Modal/Modal.css'
import inactiveStar from './assets/inactiveStar.png'
import cameraIcon from './assets/cameraIcon.png'
import moreInfoIcon from './assets/forvardIcon.png'
import PageOfReviews from './components/Shop/PageOfReviews'


import './components/Shop/Shop.css'
import './components/Home/Home.css'


function App() {
  const [page, setPage] = useState("HOME")

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalReview, setIsOpenModalReview] = useState(false)

  function handleSubmit(e){
    console.log(e.value)
  }

  function handleChange(){

  }
  return (
    <div className="App">
      {/* {page === "HOME" && <HomePage />}
      {page === "SHOP" && <ShopPage />} */}
      {/* <Navbar navigate={setPage} /> */}
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)} btnText="ADD TO CART">
          <h3>Select sizes</h3>
          <div className="sizeChart">
            <button className="btn sizes">XS</button>
            <button className="btn sizes">S</button>
            <button className="btn sizes">M</button>
            <button className="btn sizes">L</button>
            <button className="btn sizes">XL</button>
          </div>
          <div className="sizeInfo">
              <div className="title">Size info</div>
            <button className="btn clickMore">
              <img class="forvardIcon" src= {moreInfoIcon}   alt="click more" />
            </button>

          </div>
          
        </Modal>
      )}

      {isOpenModalReview && (
        <Modal onClose={() => setIsOpenModalReview(false)}>
          <div className="yourRateModal">

            <h3 className="header">What is your rate</h3>
            <div className="starRow">
              <img className="inactiveOneStar" src={inactiveStar} alt=" inactive star" />
              <img className="inactiveOneStar" src={inactiveStar} alt=" inactive star" />
              <img className="inactiveOneStar" src={inactiveStar} alt=" inactive star" />
              <img className="inactiveOneStar" src={inactiveStar} alt=" inactive star" />
              <img className="inactiveOneStar" src={inactiveStar} alt=" inactive star" />
            </div>

            <section className="shareopinion">
              <span className="h3 opinionContext"> Please share your opinion </span>
              <span className="h3 opinionContext"> about the product</span>
            </section>

            <div className="typeReview">
              <form onSubmit={handleSubmit}>
                <label>
                <textarea className="btn textarea" value={(e)=>e.value} onChange={handleChange}  placeholder="Your review" />
                </label>
              </form>

              <div className="addPhotoSection">
                <div className="circle">
                  <img className="cameraIcon" src={cameraIcon} alt="cameraIcon" />
                </div>
                <span className="hint text">Add your photos</span>
              </div>

              <div className="sendReviewBlock">
                <button className="btn sendRevievBtn">SEND REVIEW</button>
              </div>


            </div>

            
          </div>

        </Modal>
      )}
      
      <PageOfReviews />

      
   
    </div>
  );
}

export default App;





