import { KaseLogo } from '../utils';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <Wrapper className='footer-container'>
            <div className='footer-top'>
                < KaseLogo className='KaseLogo' />
                <div className='footer-links'>
                    <h3>company</h3>
                    <Link to='/About' className='footer-link'>About</Link>
                    <Link to='/ContactUs' className='footer-link'>Contact us</Link>
                </div>
                <div className='footer-links'>
                    <h3>products</h3>
                    <Link to='/Products' className='footer-link'>Shop</Link>
                    <Link to='/TermsAndCondition' className='footer-link'>Terms and Conditions</Link>
                    <Link to='/PrivacyPolicy' className='footer-link'>Privacy Policy</Link>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-underline'></div>
                <div className='footer-bottom-details'>
                    <p>© 2024 KASE Technologies. All rights reserved.</p>
                    <div className='social-icons'>
                        <FaSquareFacebook className='social-icon' />
                        <RiInstagramFill className='social-icon' />
                        <FaSquareXTwitter className='social-icon' />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.footer`
    padding: var(--page-margin);
    padding-top: 5rem;
    padding-bottom: 2rem;
    .footer-top {
        display: flex;
        flex-wrap:wrap;
        gap: 20rem;
    }
    .KaseLogo {
        width: 7rem;
    }
    .footer-links h3 {
        font-weight:400;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
    }
    .footer-links .footer-link {
        display: block;
        margin-bottom: 1.5rem;
        transition: var(--smooth);
    }
    .footer-bottom {
        margin-top: 2.5rem;
    }
    .footer-underline {
        height: 2px;
        width: 100%;
        border-radius: var(--border-radius2);
    }
    .footer-bottom-details {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .social-icons .social-icon{
        margin-right: 1rem;
    }
    .social-icons .social-icon:last-child {
        margin-right: 0rem;
    }
    .social-icons {
        gap: 3rem;
    }
    .social-icon {
        cursor: pointer;
    }
    /* Tablet */
    @media (max-width:48em) {
        .footer-top {
            gap: 12rem;
        }
    }
    /* Mobile */
    @media (max-width:33.75em) {
        padding-top: 4rem;
        padding-bottom: 2rem;
        .KaseLogo{
            width: 6rem;
        }
        .footer-top{
            flex-direction: column;
            gap: 2rem;
        }
        .footer-bottom-details {
            flex-direction:column;
            gap: 2rem;
        }
    }
`