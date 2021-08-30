import dress from "../../assets/EveningDress.png";
import sport from "../../assets/sportDress.png";
import "./Home.css";

function Home() {
  return (
    <div className="homePage">
      <div className="banner">
        <h1>
          Fashion <br />
          sale
        </h1>
        <button>Check</button>
      </div>
      <div className="saleBlock">
        <div className="aboutSale">
          <h1 className="saleTitle">Sale</h1>
          <p className="saleCaption">Super summer sale</p>
          <button className="btn viewBtn">View all</button>
        </div>
        <main>
          <div className="cardList">
            <div className="card">
              <img src={dress} alt="dress"></img>
              <p className="saleCaption">Dorothy Perkins</p>
              <h3 className="cardTitle">Evening Dress</h3>
              <span className="cardPrice">12$</span>
            </div>
            <div className="card">
              <img src={sport} alt="dress"></img>
              <p className="saleCaption">Sitlly</p>
              <h3 className="cardTitle">Sport Dress</h3>
              <span className="cardPrice">19$</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
