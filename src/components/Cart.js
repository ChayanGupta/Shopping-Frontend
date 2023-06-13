import React, { useEffect, useState } from 'react'
import '../css/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { addToCartItem } from '../services/CartService'

function Cart({ setCartOpen, cartOpen }) {

    const [addClass, setClass] = useState('')
    const dispatch = useDispatch()
    const { cart } = useSelector(state=> state.cart)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        if (cartOpen) {
            setClass('-translate-x-0')
        } else {
            setClass('translate-x-80 hidden')
        }
    }, [cartOpen])

    const filterCartItem = (item)=>{
        let cartItem = cart.filter((cartItem) => {
            return cartItem.productId === item.productId
        })
        return cartItem;
    }

    const placeCartItem = (cartItem, itemQuantity) => {
        let itemIndex = 0;
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].productId === cartItem[0].productId) {
                itemIndex = index;
                break;
            }
        }

        let cartProduct = JSON.parse(JSON.stringify(cartItem[0]));
        cartProduct.purchaseQuantity = itemQuantity;

        let finalItems = cart.filter((item) => {
            return item.productId !== cartItem[0].productId
        })
        finalItems.splice(itemIndex, 0, cartProduct)
        dispatch(addToCart(finalItems))
    }

    const increaseItemQuantity = (item, purchaseQuantity) => {
        let cartItem = filterCartItem(item);
        if (cartItem[0].quantity <= purchaseQuantity) {
            alert('Reached maximum quantity for this product')
        } else {
            if(user!==null){
                addToCartItem('add-to-cart',user.token,user.id,cartItem[0].productId,true);
            }
            let itemQuantity = cartItem[0].purchaseQuantity + 1;
            placeCartItem(cartItem , itemQuantity)
        }
    }

    const reudceItemQuantity = (item, purchaseQuantity) => {
        let cartItem = filterCartItem(item);
        if(user!==null){
            addToCartItem('add-to-cart',user.token,user.id,cartItem[0].productId,false);
        }
        if (purchaseQuantity<=1) {
            let finalCartItems = cart.filter((cartItem)=>{
                return cartItem.productId!==item.productId
            })
            dispatch(addToCart(finalCartItems))
        } else {
            let itemQuantity = cartItem[0].purchaseQuantity - 1;
            placeCartItem(cartItem, itemQuantity)
        }
    }

    return (
        <div className={`text-white border border-purple-500 p-3 absolute z-10 right-0 duration-1000 ease-in-out bg-purple-400 cart-height-width ${addClass}`}>
            <h1 className='mb-5 text-2xl font-bold text-center'>Cart</h1>
            <i className='absolute text-3xl cursor-pointer right-2 bx bx-x-circle top-2' onClick={() => setCartOpen(false)}></i>
            {cart?.map((item, index) => {
                return <div key={index} className='flex flex-row mb-5'>
                    <img alt="product" className="w-20 h-20" src={`data:image/png;base64,${item?.image}`} />
                    <div className='ml-2'>
                        <h1 className='text-xl'>{item?.productName}</h1>
                        <div className="flex flex-row justify-between gap-5 mt-2 align-baseline">
                            <p className='text-lg'>${item?.unitPrice}</p>
                            <div className='flex flex-row gap-2'>
                                <i className='text-lg bx bx-minus-circle' onClick={() => reudceItemQuantity(item, item?.purchaseQuantity)}></i>
                                <p className='text-lg'>{item?.purchaseQuantity}</p>
                                <i className='text-lg bx bx-plus-circle' onClick={() => increaseItemQuantity(item, item?.purchaseQuantity)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cart