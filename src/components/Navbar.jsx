import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { KaseLogo, SwitchIcon } from '../utils';
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../feature/cart/cartSlice';
import { logOutUser } from '../feature/user/userSlice';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    //links
    const links = [
        { id: 1, path: '/', text: 'Home' },
        { id: 2, path: '/About', text: 'About' },
        { id: 3, path: '/Products', text: 'Products' },
        { id: 4, path: '/Cart', text: 'Cart' },
        { id: 5, path: '/Checkout', text: 'Checkout' },
        { id: 6, path: '/Orders', text: 'Orders' },
    ]
    //menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //cart functionality
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

    //user functionality
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userState.user);
    const handelLogout = () => {
        navigate('/');
        dispatch(clearCart());
        dispatch(logOutUser());
    };

    return (
        <Wrapper>
            <nav className='nav-container'>
                <div className='menu-icon' onClick={() => {
                    return console.log(setIsMenuOpen(!isMenuOpen));
                }}><IoMenu /></div>
                <div className="nav-start">
                    <Link> < KaseLogo className='KaseLogo' /> </Link>
                </div>

                <ul className='nav-center'>
                    {links.map((link) => {
                        const { id, path, text } = link;
                        if ((path === '/Checkout' || path === '/Orders') && !user) {
                            return null;
                        }
                        return (
                            < NavLink className='nav-link' to={path} key={id} >{text}</NavLink>
                        )
                    })}
                </ul>

                <div className='nav-end'>
                    <div className='cart'>
                        <Link to='/Cart' className='nav-end-item' >
                            <FiShoppingCart className='cartIcon' />
                        </Link>
                        <div className='cartItemNumber'>{numItemsInCart}</div>
                    </div>
                    <div className='nav-end-item'>
                        <SwitchIcon />
                    </div>

                    {user ?
                        (<div className='user'>
                            <p>Hello, {user.username}</p>
                            <button className='nav-end-item strokeBtn strokeButton' onClick={handelLogout}>logout</button>
                        </div>)
                        :
                        (<Link to='/Login' className='nav-end-item strokeBtn strokeButton'>Login</Link>)
                    }
                </div>
            </nav>

            <div className={isMenuOpen ? 'mobile-nav-link-container open' : 'mobile-nav-link-container'}>
                {links.map((link) => {
                    const { id, path, text } = link;
                    if ((path === '/Checkout' || path === '/Orders') && !user) {
                        return null;
                    }
                    return (
                        < NavLink className='mobile-nav-link' to={path} key={id} >{text}</NavLink>
                    )
                })}
            </div>

        </Wrapper >
    )
}

export default Navbar

// STYLING
const Wrapper = styled.div`
.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--page-margin);
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: static;
    top: 0;
    z-index: 500rem;
}

.mobile-nav-link-container {
    display: none;
    transition: var(--smooth);
}

.menu-icon {
    display: none;
}

.KaseLogo {
    width: 7rem;
}

.nav-center, .nav-end {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-end {
    gap: 2rem;
}

.nav-center .nav-link, .nav-end .nav-end-item {
    display: block;
}
.user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.nav-center .nav-link, .active {
    padding: .5rem 1rem;
    margin-right: 1.5rem;
    border-radius: var(--border-radius);
}

.nav-link.active {
    background: var(--Red);
}

.nav-end .strokeButton {
    padding: .5rem 1rem;
}

.strokeBtn.strokeButton:hover {
    color: var(--lm-white1);
}

.cart {
    position: relative;
    top: 6px;
    margin-right:10px;
}

.cartIcon {
    width: 1.5rem;
    height: 1.5rem;
}

.cartItemNumber {
    color: var(--lm-white1);
    display: grid;
    place-items: center;
    position: absolute;
    background: var(--Red);
    min-width: 2rem;
    min-height: 2rem;
    padding: .2rem;
    text-align: center;
    border-radius: 50%;
    top: -20px;
    right: -20px;
}

.nav-end-item {
    cursor: pointer;
}

.mode-icon {
    width: 1.5rem;
    height: 1.5rem;
}

/* Mobile and Tab */
@media (max-width:76em) {
    .nav-container{
        padding: 1.3rem 1.8rem;
        align-items: center;
    }
    .mobile-nav-link-container {
        position: absolute;
        display: none;
        width: 60vw;
        padding: 1.5rem;
        z-index: 100;
        border-radius: var(--border-radius);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        transition: var(--smooth);
        transform: translateX(-400px);
    }
    .mobile-nav-link-container.open {
        display: block;
        transform: translateX(0px);
        transition: var(--smooth);
    }
    .mobile-nav-link, .active {
        display: block;
        text-align: center;
        margin-bottom: 1rem;
        padding: 1rem;
        width: 100%;
        border-radius: var(--border-radius);
    }
    .active {
        color: var(--lm-white1);
    }
    .mobile-nav-link.active {
        color: var(--lm-white1);
        background: var(--Red);
    }
    .KaseLogo {
        display: block;
    }
    .menu-icon {
        display: grid;
        place-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--border-radius);
        cursor: pointer;
    }
    .nav-center {
        display: none;
    }
    .nav-end {
        gap: 2rem;
    }
    .nav-end .strokeButton {
        padding: .7rem 1rem;
        font-size: 14px;
    }
    .cartIcon {
        width: 1.5rem;
        height: 1.5rem;
    }
    .cartItemNumber {
        min-width: 1.7rem;
        min-height: 1.7rem;
        padding: .2rem;
        font-size: 14px;
        top: -16px;
        right: -20px;
    }

    @media (max-width:33.75em){
        .KaseLogo {
            display: none;
        }
    }
}
`