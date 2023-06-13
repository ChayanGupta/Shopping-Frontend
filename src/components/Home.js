import React, { useEffect, useState } from 'react'
import { getAllProducts, searchProducts } from '../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice'
import { addToCartItem } from '../services/CartService';

const Home = () => {

  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    function fetchData() {
      getAllProducts('all-products').then(response => {
        return response.data;
      }).then(async (res) => {
        let temp = [];
        await res.forEach(element => {
          element = { ...element, purchaseQuantity: 1 }
          temp.push(element);
        });
        setData(temp);
      })
    }
    fetchData();
  }, [])

  const handleAddCartItems = (product) => {
    const storage = JSON.parse(sessionStorage.getItem('persist:root'));
    const sessionCart = JSON.parse(storage.cart);
    let bool = true;
    sessionCart?.cart.forEach(element => {
      if(element.productId===product.productId){
        bool = false;
      }
    });
    if (bool) {
      dispatch(addToCart([...cart, product]))
      if(user!==null){
        addToCartItem('add-to-cart',user.token,user.id,product.productId,true);
      }
    }
  }

  const searchProduct = () => {
    searchProducts('filter-product', search)
      .then(res=>{
        setData(res.data)
      }).catch(err=>{
        console.log(err)
      })
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="mt-2 text-center">
        <input className="p-2 text-center border-4 border-gray-400 rounded-md w-96" 
            placeholder='Search Product' value={search} onChange={e => setSearch(e.target.value)}></input>
        <button className='p-2 rounded-md -ml-9 hover:bg-gray-200' onClick={searchProduct} ><i className='bx bx-search-alt'></i></button>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((product, index) => {
            return <div className="w-full p-4 border border-black cursor-pointer lg:w-1/4 md:w-1/2" key={index}>
              <p className="relative block h-48 overflow-hidden rounded">
                <img alt="product" className="block object-cover object-center w-full h-full" src={`data:image/png;base64,${product?.image}`} />
              </p>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">{product?.productName}</h2>
                <p className="mt-1">${product?.unitPrice}</p>
                <button className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600" onClick={() => handleAddCartItems(product)}>Add To Cart</button>
              </div>
            </div>
          }
          )}
          {
            data.length === 0 && 
            <div className='text-center'>
              <h1 className='text-4xl font-semibold'>No Products Found !!</h1>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default Home