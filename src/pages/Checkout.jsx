import { CartTotals, CheckOutForm, SectionTitle } from "../components"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => async () => {
    const user = store.getState().userState.user;
    if (!user) {
        toast.warn('You must be logged in to checkout');
        return redirect('/Login');
    }
    return null;
}

const Checkout = () => {
    const cartTotal = useSelector((state) => state.cartState.cartTotal);
    if (cartTotal === 0) {
        return (
            <div className='empty'>
                <SectionTitle text='YOUR CART IS EMPTY' />
            </div>
        )
    }

    return (
        <Wrapper >
            <SectionTitle text='SHIPPING INFO' />
            <div className="cartContainer">
                <div className='cartUnit'>
                    <CheckOutForm />
                </div>
                <div className='cartUnit'>
                    <CartTotals />
                </div>
            </div>
        </Wrapper>
    )
}

export default Checkout;

const Wrapper = styled.section`
    padding: var(--page-margin);
    margin: 3.5rem auto;
    .cartContainer {
        margin-top: 1rem;
        padding: 2rem;
        border-radius: 1rem;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
    }
    .cartUnit {
        padding: 3rem;
    }

    /* Tablet */
    @media (max-width:80em) {
        .cartContainer {
            grid-template-columns: 1fr;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        .cartContainer {
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 1rem;
        }
        .cartUnit {
            padding: 1rem;
        }
    }
`