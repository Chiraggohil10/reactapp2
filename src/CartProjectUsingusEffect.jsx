import React from 'react'
import { useState, useEffect } from "react";

export default function CartProjectUsingusEffect() {

    let [cart, setCart] = useState([]);

    useEffect(() => {
        async function getData() {
            let res = await fetch('http://localhost:1000/products')
            let response = await res.json()
            setCart(response);
        }
        getData();
    }, [])

    console.log(cart);



    return (
        <div className="main">
            {
                cart.map((x) => {
                    return (
                        <React.Fragment key={x.id}>
                            <div className="cart">
                                    <img src={x.images[0]} />
                                    <p><b>Title : </b>{x.title}</p>
                                    <p><b>Price :</b> {x.price}</p>
                                    <p><b>Discount Price : </b>{Math.round(x.price - (x.price * x.discountPercentage / 100))}</p>
                                    <p><b>Brand : </b>{x.brand}</p>
                                    <p><b>Category : </b>{x.category}</p>
                                    <p><b>Rating : </b>{x.rating}</p>
                                    <p><b>Stock : </b>{x.stock}</p>
                                    <button>Add To Cart</button>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}
