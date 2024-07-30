import styled from "styled-components"
import { formatPrice, generateAmount } from "../utils";
import { removeItem, editItem } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ cartItem }) => {
    const { cartID, title, price, img, quantity, brand, productColor } = cartItem;

    const dispatch = useDispatch();
    const removeItemFromCart = () => {
        dispatch(removeItem({ cartID }))
    }
    const handleAmount = (e) => {
        dispatch(editItem({ cartID, quantity: parseInt(e.target.value) }))
    }

    return (
        <Wrapper key={cartID} className="cartItemContainer">
            <div className="cartImgContainer"><img src={img} alt={title} className="cartImg" /></div>

            <div className="info">
                <h2>{title}</h2>
                <p className="brand">Brand: {brand}</p>
                <div>
                    <p>Colour:</p>
                    <div className="colour" style={{ background: productColor }}></div>
                </div>
            </div>

            <div className="qty">
                <label htmlFor="quantity">Quantity: </label>
                <select
                    name="quantity"
                    id="quantity"
                    className="cartQty"
                    value={quantity}
                    onChange={handleAmount}
                >
                    {generateAmount(quantity + 10)}
                </select>
            </div>

            <h3>{formatPrice(price)}</h3>

            <button
                type="button"
                className="delete"
                onClick={removeItemFromCart}
            >
                <RiDeleteBin6Line className="deleteIcon" />
            </button>

        </Wrapper>
    )
}

export default CartItem;

const Wrapper = styled.article`
    padding: 2rem;
    cursor: pointer;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .colour {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
    }
    .cartImgContainer {
        height: 12rem;
        width: 12rem;
        display: grid;
        place-content: center;
        overflow: hidden;
        border-radius: 0.5rem;
        background: none;
    }
    .cartImg {
        width: 14rem;
        object-fit:cover;
        display: flex;
    }
    .info {
        width: 12rem;
    }
    .info div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .info h2, .brand {
        margin-bottom: .8rem;
    }
    .qty {
        display: flex;
        flex-direction: column;
    }
    .qty select {
        cursor: pointer;
    }
    #quantity {
        padding: .5rem;
        margin-top: .5rem;
        max-width: 10rem;
        border-radius: 0.5rem;
    }
    #quantity option {
        background: none;
    }
    .delete {
        background: none;
        padding: 1rem;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        place-content: center;
    }
    .deleteIcon {
        font-size: 1.2rem;
    }
`