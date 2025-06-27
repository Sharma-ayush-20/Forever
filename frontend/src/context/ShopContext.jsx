import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState("") //search function
    const [showSearch, setShowSearch] = useState(false) //search function
    const [cartItems, setCartItems] = useState({}); //cart info
    const [products, setProducts] = useState([]); // products data
    const [token, setToken] = useState('') //token
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems); //deepcopy of cartItems - object

        if (cartData[itemId]) { //check product id 
            if (cartData[itemId][size]) {  //check size of that productId 
                cartData[itemId][size] += 1;  //hai toh woh product ki quatity + 1 karo
            }
            else {
                cartData[itemId][size] = 1; //nhi hai toh 1 karo
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)

        if(token){
            try {
                
                await axios.post(backendUrl + `/api/cart/add`, {itemId, size}, {
                    headers: {
                        token
                    }
                })

            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    //updatequantity
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems) //deep copy of cartItem

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        if(token){
            try {
                await axios.post(backendUrl + `/api/cart/update`, {itemId, size, quantity}, {
                    headers: {
                        token,
                    }
                })
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + `/api/product/list`)
            if (response.data.success) {
                setProducts(response.data.products)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            
            const response = await axios.post(backendUrl + `/api/cart/get`, {}, {headers: {token}})

            if(response.data.success){
                setCartItems(response.data.cartData)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductsData();
    }, [])

    useEffect(() => {
        //agar token nhi hai but woh localstorage me available hai toh token set kardo 
        if(!token && localStorage.getItem('token')){ 
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch,
        showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token,setToken,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

