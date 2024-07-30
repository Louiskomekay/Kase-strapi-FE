import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../components/CartItem'

const CartItemsList = () => {
    const cartItems = useSelector((state) => state.cartState.cartItems);

    return (
        <Wrapper>
            {cartItems.map((item) => {
                return <CartItem key={item.cartID} cartItem={item} className='theItem' />
            })}
        </Wrapper>
    )
}

export default CartItemsList;

const Wrapper = styled.div`

`