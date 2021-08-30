import CategoryList from './CategoryList'
import Womens from './Womens'
import './Shop.css'

function Shop() {
  return (
    <div className="shopPage">
      <CategoryList />
      <Womens />
    </div>
  )
}

export default Shop