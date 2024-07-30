import { Link } from "react-router-dom"
import styled from "styled-components";
import { CartIcon } from "../utils";
import { formatPrice } from "../utils";

const ProductsList = ({ data }) => {
    return (
        <Wrapper>
            <div className="productContainer">
                {data.map((product) => {
                    const { id, attributes } = product;
                    const { Title: title, Price: price, ImageLink: img } = attributes;
                    const nairaAmount = formatPrice(price);

                    return <Link key={id} to={`/Products/${id}`}>
                        <div className="productCard">
                            <div className="imgListContainer"> <img src={img} alt="product image" className="img" /></div>

                            <div className="productInfo">
                                <h1>{title}</h1>
                                <h2>{nairaAmount}</h2>
                                <button className="cart" to='/Cart'>
                                    <CartIcon className='cartIcon' />
                                </button>
                            </div>

                        </div>
                    </Link>
                })}
            </div>
        </Wrapper>
    )
}

export default ProductsList;

const Wrapper = styled.div`
    img {
        width: 15rem;
    }
    .productCard {
        display: grid;
        grid-template-columns: .5fr 2fr;
        align-items: center;
        border-radius: 1rem;
        margin-bottom: 2rem;
        overflow: hidden;
    }
    .productInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
    }
    .cart {
        display: grid;
        place-content: center;
        background: linear-gradient(142deg, rgba(37,99,235,1) 0%, rgba(95,148,250,1) 100%);
        padding: .5rem 1rem;
        border-radius: .5rem;
    }
    .imgListContainer {
        display: grid;
        place-items: center;
    }

    /* Mobile */
    @media (max-width:33.75em) {
        img {
            width: 10rem;
        }
        .productCard {
            margin-bottom: 1rem;
        }
        .productInfo {
            flex-direction: column;
            padding: 1rem;
            align-items: flex-start;
            gap: .6rem;
        }
        .productInfo h1 {
            font-size: var(--fs-400);
        }
        .productInfo h2 {
            font-size: var(--fs-400);
        }
        .cart {
            padding: .1rem .8rem;
        }
        .cartIcon {
            width: 1rem;
        }
    }
`