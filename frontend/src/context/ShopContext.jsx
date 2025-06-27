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
    const [products, setProducts] = useState([]);
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

    useEffect(() => {
        getProductsData();
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
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

