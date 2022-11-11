import AllProducts from '../Components/AllProducts';
import Search from '../Components/Search';

const Products = ({ productsList, search, setSearch }) => {

const visibleProducts = productsList.filter(product => {
  return product.product_name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <>
    <Search setSearch={setSearch} search={search} /> 

    <AllProducts products={visibleProducts}/>
    </>
  )
}

export default Products;