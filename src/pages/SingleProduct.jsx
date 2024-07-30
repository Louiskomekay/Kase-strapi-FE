import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { formatPrice, CartIcon } from "../utils";
import { generateAmount } from "../utils";
import { useDispatch } from 'react-redux'
import { addItem } from "../feature/cart/cartSlice";


export const loader = async ({ params }) => {
    const response = await axios(`http://localhost:1337/api/products/${params.id}`);
    return { product: response.data.data };
}

const SingleProduct = () => {
    const { product } = useLoaderData();
    const { ImageLink: img, Title: title, Description, Price, Brand: brand, Colors: colors } = product.attributes;
    const desc = Description[0].children[0].text;
    const nairaAmount = formatPrice(Price);

    //Product color state
    const [productColor, setProductColor] = useState(colors[0]);

    //Quantity state
    const [quantity, setQuantity] = useState(1);

    const handleAmount = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const cartProduct = {
        cartID: product.id + productColor,
        productID: product.id,
        img,
        title,
        price: Price,
        brand,
        productColor,
        quantity
    }
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({ product: cartProduct }))
    }

    return (
        <Wrapper>
            <div className="productCard">
                <img src={img} alt="product image" className="img" />
            </div>

            <div>
                <div className="section">
                    <h1 className="title">{title}</h1>
                    <p className="desc">{desc}</p>
                </div>

                <div className="section">
                    <p className="label">Price:</p>
                    <h2 className="amount">{nairaAmount}</h2>
                </div>

                {/* COLORS */}
                <div className="section">
                    <p className="label">Colours:</p>
                    <div>
                        {colors.map((color) => {
                            return (
                                <button
                                    key={color}
                                    type="button"
                                    className={`colorButtons ${productColor === color && 'activeButton'}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => {
                                        return setProductColor(color)
                                    }}
                                >
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="section">
                    <p className="label">Size:</p>
                    <h2>Colours...</h2>
                </div>

                {/* QUANTITY */}
                <div className="section">
                    <div className="qty">
                        <label htmlFor="quantity" className="label">Quantity:</label>
                        <select
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={handleAmount}
                        >
                            {generateAmount(10)}
                        </select>
                    </div>

                    {/* CART BUTTON */}
                    <button className="cartButton" onClick={addToCart}>
                        <CartIcon />
                        <p>Add to cart</p>
                    </button>
                </div>

            </div>
        </Wrapper>
    )
}

export default SingleProduct;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
    display: flex;
    gap: 4rem;
    justify-content: center;
        
    .img {
        width: 50rem;
        object-fit:cover;
        display: flex;
    }
    .productCard{
        border-radius: 1rem;
    }
    .section {
        margin-bottom: 2rem;
    }
    .title{
        font-size: var(--fs-600);
        margin-bottom: .5rem;
    }
    .desc{
        font-size: var(--fs-400);
        width: 48rem;
    }
    .label{
        text-transform: uppercase;
    }
    .amount {
        font-size: 2rem;
        color: var(--Blue1);
    }
    .colorButtons {
        height: 2rem;
        width: 2rem;
        margin-right: 1rem;
        margin-top: 1rem;
        border-radius: 50%;
        cursor: pointer;
    }
    .cartButton {
        display: flex;
        margin-top: 2.5rem;
        align-items: center;
        width: fit-content;
        gap: .5rem;
        padding: .75rem 1.5rem;
        border-radius: 0.5rem;
        background: var(--Blue1);
        transition: var(--smooth);
        cursor: pointer;
    }
    .cartButton:hover {
        background: var(--Blue3);
    }
    .cartButton p {
        color: var(--lm-white1);
    }
    .qty {
        display: flex;
        flex-direction: column;
    }
    .qty select {
        cursor: pointer;
    }
    #quantity {
        padding: 1rem;
        margin-top: .5rem;
        max-width: 6rem;
        border-radius: 0.5rem;
    }
    #quantity option {
        background: none;
    }

    /* Tablet */
    @media (max-width:80em){
        flex-wrap: wrap;
    }

    /* Mobile */
    @media (max-width:33.75em) {
        margin: 2.5rem auto;
        flex-wrap: wrap;
        gap: 2rem;
        .img {
            width: 22rem;
        }
        .desc {
            width: auto;
        }
        .colorButtons {
            height: 1.8rem;
            width: 1.8rem;
            margin-right: 0.7rem;
            margin-top: 0.7rem;
        }
    }
`