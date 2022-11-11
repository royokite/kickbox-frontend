import AllProducts from '../Components/AllProducts';
import Search from '../Components/Search';

const Products = ({ productsList, search, setSearch }) => {

  return (
    <>
    <Search setSearch={setSearch} search={search} /> 

    <AllProducts products={productsList}/>
    </>
  )
}

export default Products;