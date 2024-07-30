import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {
    //temp
    const user = useSelector((state) => state.userState.user);
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)


    if (numItemsInCart === 0) {
        return (
            <div className='empty'>
                <SectionTitle text='YOUR CART IS EMPTY' />
            </div>
        )
    }

    return (
        <Wrapper>
            <SectionTitle text='CART PAGE' />
            <div className='cartContainer'>
                <div>
                    <CartItemsList />
                </div>
                <div className='cartUnit cartTotal'>
                    <div className='shippinginfo'>
                        <div className="shippingHeading">
                            <span className="green"></span>
                            <h3>Shipping Policy</h3>
                        </div>
                        <p className="shippingCopy">
                            Home delivery (Within 7 days,
                            anywhere within Nigeria) - ₦3,000
                        </p>
                    </div>
                    <div>
                        <CartTotals />
                        {user ? (<Link to='/CheckOut' className='btn'>Proceed to checkout</Link>) : (<Link to='/Login' className='btn'>Please login</Link>)}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Cart

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
    .cartContainer {
        margin-top: 1rem;
        padding: 2rem;
        border-radius: 1rem;
    }
    .cartTotal {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1rem;
        margin-top: 1rem;
        padding:  2rem;
    }
    .shippingHeading {
        display: flex;
        gap: .5rem;
        align-items:center ;
    }
    .green {
        height: 10px;
        width: 10px;
        background-color: #12E828;
        border-radius: 50%;
    }
    .shippingCopy {
        margin-top: .5rem;
    }
    .btn {
        color: var(--lm-white1);
    }

    /* Tablet */
    @media (max-width:80em) {
        .cartUnit {
            grid-template-columns: 1fr;
        }
        .shippinginfo {
            margin-bottom: 2rem;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        .cartUnit {
            grid-template-columns: 1fr;
        }
        .shippinginfo {
            margin-bottom: 2rem;
        }
    }
`