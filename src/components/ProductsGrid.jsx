import { Link } from "react-router-dom"
import styled from "styled-components";
import { CartIcon } from "../utils";
import { formatPrice } from "../utils";

const ProductsGrid = ({ data }) => {
    return (
        <Wrapper>
            <div className="productContainer">{data.map((product) => {
                const { id, attributes } = product;
                const { Title: title, Price: price, ImageLink: img } = attributes;
                const nairaAmount = formatPrice(price);

                return <Link key={id} to={`/Products/${id}`}>
                    <div className="productCard">
                        <div className="imgContainer"><img src={img} alt="product image" className="img" /></div>
                        <div className="productDetails">
                            <h1>{title}</h1>
                            <div className="pricePoint">
                                <div>
                                    <p className="priceLabel">Price:</p>
                                    <h2 className="price">{nairaAmount}</h2>
                                </div>
                                <button className="cart" to='/Cart' onClick={() => console.log('added to cart')}>
                                    <CartIcon className='cartIcon' />
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            })}</div>
        </Wrapper>
    )
}

export default ProductsGrid;

const Wrapper = styled.div`
    .productContainer{
        display: grid;
        grid-template-columns: repeat(auto-fit, 27.1875rem);
        gap: 1rem;
        place-content: center;
    }
    .productCard {
        width: fit-content;
        border-radius: 1rem;
    }
    .imgContainer {
        display: grid;
        align-items: center;
    }
    .img {
        width: 27.2rem;
    }
    .productDetails {
        padding: 1.5rem;
    }
    .productDetails h1 {
        margin-bottom: 1rem;
    }
    .productDetails .pricePoint {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cart {
        display: grid;
        place-content: center;
        background: linear-gradient(142deg, rgba(37,99,235,1) 0%, rgba(95,148,250,1) 100%);
        padding: .5rem 1rem;
        border-radius: .5rem;
    }

    /* Tablet */
    @media (max-width:80em) {
        .productContainer {
            grid-template-columns: repeat(auto-fit, 19rem);
        }
        .img {
            width: 19rem;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        .productContainer {
            grid-template-columns: repeat(auto-fit, 10rem);
        }
        .productCard{
            border-radius: 0.5rem;
        }
        .img {
            width: 10rem;
        }
        .productDetails {
            padding: 0.9rem;
        }
        .productDetails h1, .pricePoint .price {
            font-size: 1rem;
        }
        .priceLabel {
            font-size: 12px;
        }
        .cart{
            padding: .1rem .8rem;
        }
        .cartIcon {
            width: 1rem;
        }
    }
`