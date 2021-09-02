import { useState } from 'react'
import HomePage from './components/Home/Home'
import ShopPage from './components/Shop/Shop'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/ui/Modal/Modal'
import moreInfoIcon from './assets/forvardIcon.png'

import './components/Shop/Shop.css'
import './components/Home/Home.css'


function App() {
  const [page, setPage] = useState("HOME")

  const [isOpenModal, setIsOpenModal] = useState(true)
  return (
    <div className="App">
      {page === "HOME" && <HomePage />}
      {page === "SHOP" && <ShopPage />}
      <Navbar navigate={setPage} />
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
      
   
    </div>
  );
}

export default App;
