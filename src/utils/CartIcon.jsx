import styled from 'styled-components'
import Cart from '../assets/Cart.svg?react'

const CartIcon = styled(Cart)`
    height: ${({ height }) => height || '40px'};
    & path {
        fill: white
    }
`
export default CartIcon;