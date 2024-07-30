import { useSelector } from "react-redux"
import { formatPrice } from "../utils";
import styled from "styled-components";

const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState);

    return (
        <Wrapper>
            <div className="total">
                <div className="totalItem">
                    <p>SUBTOTAL</p>
                    <p className="totalRender">{formatPrice(cartTotal)}</p>
                </div>
                <div className="totalItem">
                    <p>TAX</p>
                    <p className="totalRender">{formatPrice(tax)}</p>
                </div>
                <div className="totalItem">
                    <p>SHIPPING</p>
                    <p className="totalRender">{formatPrice(shipping)}</p>
                </div>
                <hr className="line" />
                <div className="totalItem">
                    <p>ORDER TOTAL</p>
                    <p className="totalRender">{formatPrice(orderTotal)}</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default CartTotals;

const Wrapper = styled.div`
   .line {
        height: 2px;
        border-radius: 50%;
        width: 100%;
        margin-bottom: 2rem;
    }
    .total .totalItem {
        margin-bottom: 2rem;
    }
    .totalItem {
        display: flex;
        justify-content: space-between;
    }
    .totalRender {
        font-weight: bold;
    }
`