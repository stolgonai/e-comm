import Modal from '../ui/Modal/Modal'
import activeStar from "../../assets/active-star.svg"
import nonactiveStar from "../../assets/inactive-star.svg"
import pullover from "../../assets/pullover.png"
import blouse from "../../assets/blouse.png"
import tshirts from "../../assets/t-shirts.png"
import shirts from "../../assets/shirts.png"
import heart from "../../assets/heart.svg"
import { useState } from 'react'

function Womens(){
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  return(
    <div className="top-list">
        <article className="one-card">
          <img src={pullover} className="cardPic"/>
          <div className="cardCaption">
              <h2 className="cardTitle">Pullover</h2>
              <p className="cardFirm">Mango</p>
              <div className="rating">
                  <img className="star" src={activeStar} alt="star" />
                  <img className="star" src={activeStar} alt="star" />
                  <img className="star" src={activeStar} alt="star" />
                  <img className="star" src={activeStar} alt="star" />
                  <img className="star" src={nonactiveStar} alt="star" />
              </div>
              <span className="cardPrice">51$</span>
              <div className="like">
                <img classname="heart"src={heart} alt="" />
              </div>
          </div>
        </article>
        <article className="one-card" onClick={() => setIsOpenModal(true)}>
          <img src={blouse} className="cardPic"/>
          <h2 className="cardTitle">Blouse</h2>
          <p className="cardFirm">Dorothy Perkins</p>
          <div className="rating">
              <img className="star" src={nonactiveStar} alt="star" />
              <img className="star" src={nonactiveStar} alt="star" />
              <img className="star" src={nonactiveStar} alt="star" />
              <img className="star" src={nonactiveStar} alt="star" />
              <img className="star" src={nonactiveStar} alt="star" />
          </div>
          <span className="cardPrice">34$</span>
        </article>
        <article className="one-card">
          <img src={tshirts} className="cardPic"/>
          <h2 className="cardTitle">T-shirt</h2>
          <p className="cardFirm">LOST Ink</p>
          <div className="rating">
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
          </div>
          <span className="cardPrice">12$</span>
        </article>
        <article className="one-card">
          <img src={shirts} className="cardPic"/>
          <h2 className="cardTitle">Shirt</h2>
          <p className="cardFirm">Topshop</p>
          <div className="rating">
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={activeStar} alt="star" />
              <img className="star" src={nonactiveStar} alt="star" />
          </div>
          <span className="cardPrice">51$</span>
        </article>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <h3>Sort by</h3>
          <ul className="modal-list">
            <li>Popular</li>
            <li>Newest</li>
            <li>Customer review</li>
            <li>Price: lowest to high</li>
            <li>Price: highest to low</li>
          </ul>
        </Modal>
      )}
    </div>
  )
}

export default Womens