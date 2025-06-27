import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'

//placing orders using COD Method

const placeOrder = async (req, res) => {
    try {
        //take details
        const { userId, items, amount, address } = req.body;

        //detail wrapped
        const orderData = {
            userId, items, amount, address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now(),
        }

        //place order and create order model
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        //update user model regarding to cartdata
        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        return res.json({
            success: true,
            message: "Order Placed"
        })

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message,
        })
    }
}

//placing orders using Stripe Method

const placeOrderStripe = async (req, res) => {

}

//placing orders using Razorpay Method

const placeOrderRazorpay = async (req, res) => {

}

// All Orders data for Admin Panel

const allOrders = async (req, res) => {

}

// user order data for frontend

const userOrders = async (req, res) => {

}

// update orders status for Admin Panel

const updateStatus = async (req, res) => {

}

export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
}



