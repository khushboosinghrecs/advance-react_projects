import React, { Component } from 'react'

const CHECKOUT_STEPS = [
    {
        name: 'custom Info',
        Component: () => { <div>Provide your contack details</div> }
    },

    {
        name: 'Shipping Information',
        Component: () => { <div>Enter your Shipping address</div>}
    },

    {
        name: 'Payment Information',
        Component: () => { <div>Enter your Payment Details</div> }
    },

    {
        name: 'Delivered',
        Component: () => { <div>Your order has been delivered</div>}
    }

]
function index() {
    return (
        <div>
            <h2>Checkout</h2>

            <Stepper
             stepComfig={CHECKOUT_STEPS} />
        </div>
    )
}

export default index