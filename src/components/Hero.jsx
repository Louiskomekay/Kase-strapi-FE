import styled from "styled-components"
import { Link } from 'react-router-dom'
import Hero_img from '../images/Hero_img.webp'

const Hero = () => {
    return (
        <Wrapper>
            <div className="heroCopy">
                <h1>STREET WEAR
                    THAT NEVER LEAVES
                    YOU CAUGHT
                    UNFRESH</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis rem adipisci alias obcaecati ad excepturi necessitatibus ab enim nihil, dolorem veniam eius vero molestiae consectetur voluptates.</p>
                    <button className="btn cta">
                        <Link to='/Products' className="HeroCtaLink">Start here</Link>
                    </button>
                </div>
            </div>
            <div className="PageImageContainer">
                <img src={Hero_img} alt="Hero image" className="heroImg" />
            </div>
        </Wrapper>
    )
}

export default Hero;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 5rem;
    .heroCopy {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 20rem;
    }
    .heroCopy h1 {
        font-size: var(--fs-xl);
        letter-spacing: -3px;
        line-height: 5.5rem;
    }
    .heroCopy div p {
        font-size: var(--fs-400);
        margin-bottom: 2rem;
        max-width: 95rem;
        line-height: 1.8rem;
    }
    .cta {
        width: 10rem;
        text-align: center;
        cursor: pointer;
    }
    .HeroCtaLink {
        color: var(--lm-white1);
    }
    .PageImageContainer{
        display: grid;
        position: relative;
        place-items: center;
        height: 37rem;
        margin-top: 8rem;
    }
    .heroImg {
        position: absolute;
        bottom: 0rem;
        width: 110rem;
    }

    /* Tablet */
    @media (max-width:80em) {
        padding: 0rem 3rem;
        .heroCopy{
            flex-direction: column;
            gap: 2rem;
            order: 2;
        }
        .PageImageContainer {
            height: 16rem;
            margin-top: 2rem;
            margin-bottom: 3rem;
            order: 1;
        }
        .heroImg {
            width: 40rem;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        padding: 0rem 0rem;
        .heroCopy{
            flex-direction: column;
            gap: 2rem;
            order: 2;
        }
        .PageImageContainer {
            height: 9rem;
            margin-top: -0.5rem;
            margin-bottom: 2rem;
            order: 1;
        }
        .heroImg {
            width: 22rem;
        }
        .heroCopy h1 {
            font-size: var(--fs-xl);
            letter-spacing: -2.5px;
            line-height: 3.5rem;
        }
        .heroCopy div p {
            font-size: var(--fs-400);
            margin-bottom: 2rem;
            max-width: 95rem;
            line-height: 1.6rem;
            margin-top: -0.8rem;
        }
        .cta {
            width: 8rem;
        }
    }
`