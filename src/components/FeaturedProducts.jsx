import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom"
import Brands from '../images/Brands.png'

const FeaturedProducts = () => {
    const { featuredFitsProducts, featuredHypedProducts, featuredHottestProducts } = useLoaderData();
    return (
        <Wrapper>
            <div>
                <div className="sectionName">
                    <SectionTitle text='WEEKLY TRENDING FITS' />
                    <Link className="seeAll" to='/Products'>
                        <p>See all</p>
                        <FaArrowRight />
                    </Link>
                </div>
                <ProductsGrid data={featuredFitsProducts} />
            </div>

            <div>
                <div className="sectionName">
                    <SectionTitle text='MOST HYPED' />
                    <Link className="seeAll" to='/Products'>
                        <p>See all</p>
                        <FaArrowRight />
                    </Link>
                </div>
                <ProductsGrid data={featuredHypedProducts} />
            </div>

            <div>
                <div className="sectionName">
                    <SectionTitle text='HOTTEST AND LATEST' />
                    <Link className="seeAll" to='/Products'>
                        <p>See all</p>
                        <FaArrowRight />
                    </Link>
                </div>
                <ProductsGrid data={featuredHottestProducts} />
            </div>

            <div>
                <div className="sectionName">
                    <SectionTitle text='TRENDING BRANDS' />
                </div>
                <img src={Brands} alt="Trending Brands Image" className="brand" />
            </div>
        </Wrapper>
    )
}

export default FeaturedProducts;

const Wrapper = styled.div`
    .sectionName, .seeAll {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sectionName {
        margin-top: 5rem;
        margin-bottom: 2rem;
    }
    .seeAll {
        gap: 0.5rem;
        transition: var(--smooth);
    }
    .seeAll p {
        font-size: var(--fs-400);
    }
    .seeAll:hover {
        gap: .8rem;
    }
    .brand {
        width: 80rem;
    }

    /* Tablet */
    @media (max-width:80em) {
        .brand {
            width: 40rem;
        }
    }
    /* Mobile */
    @media (max-width:33.75em) {
        .sectionName {
            margin-top: 3rem;
            margin-bottom: 1.5rem;
        }
        .brand {
            width: 22rem;
        }
    }
`