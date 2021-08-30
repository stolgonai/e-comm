import newArr from '../../assets/newArr.svg'
import clothes from '../../assets/clothes.svg'
import shoes from '../../assets/shoes.svg'
import accesors from '../../assets/accesors.svg'
import searchIcon from '../../assets/search-icon.svg'
import goBackIcon from '../../assets/go-back-icon.svg'

function CategoryList() {
  return (
    <div className="categorList">
        <div className="tabs">
            <div className="back-icon"> 
            <img src= {goBackIcon}   alt="go back" />
            </div>
            <div className="title"> Categories </div>
            <div className="search-icon"> 
            <img src={searchIcon}  alt="search icon" />
            </div>
        </div>
         <nav className="chooseByGender">
             <div id="active" className="gender"> 
            <button  className="btn genderBtn" > Women </button>  </div>
             <div className="gender"> 
            <button className="btn genderBtn"> Men </button>  </div>
             <div className="gender"> 
            <button className="btn genderBtn"> Kids </button>  </div>
        </nav>
        <div className="catList">
       
            <div className="salesBaner">
                <h3 className="title">SUMMER SALES</h3>
                <p className="discount">Up to 50% off </p>
            </div>

            <div className="lists">
                <div className="departName">New Arrivals</div>
                <img src={newArr} alt="nrearr" />
            </div>
            <div className="lists">
                <div className="departName"> Clothes </div>
                <img src={clothes} alt="nrearr" />
            </div>
            <div className="lists">
                <div className="departName">Shoes</div>
                <img src={shoes} alt="nrearr" />
            </div>
            <div className="lists">
                <div className="departName"> Accesories </div>
                <img src={accesors} alt="nrearr" />
            </div>
            
        </div>

    </div>
   
  )
}

export default CategoryList