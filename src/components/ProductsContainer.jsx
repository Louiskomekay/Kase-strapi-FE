import { useState } from "react";
import { ProductsList } from ".";
import ProductsGrid from "./ProductsGrid"
import { useLoaderData } from "react-router-dom"
import styled from "styled-components";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const ProductsContainer = () => {
    const { allProducts, meta } = useLoaderData();
    const totalProducts = meta.pagination.total;

    const [layout, setLayout] = useState('grid');

    const setActiveStyles = (pattern) => {
        return `${pattern === layout ? 'layoutBtn activeLayoutBtn' : 'layoutBtn'}`;
    }

    return (
        <Wrapper>
            <div className="layoutToggleButtons">
                <button type='button' className={`${setActiveStyles('grid')}`} onClick={() => { setLayout('grid') }}>
                    <IoGrid />
                </button>
                <button type='button' className={`${setActiveStyles('list')}`} onClick={() => { setLayout('list') }}>
                    <FaThList />
                </button>
            </div>

            <div>
                {totalProducts === 0 ? <h4>Sorry no products match your search...</h4> : (layout === 'grid' ? <ProductsGrid data={allProducts} /> : <ProductsList data={allProducts} />)}
            </div>
        </Wrapper>
    )
}

export default ProductsContainer;

const Wrapper = styled.div`
    .layoutToggleButtons {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        justify-content: end;
    }
    .layoutBtn {
        padding: 1rem;
        background: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    /* Mobile */
    @media (max-width:33.75em) {
        .layoutToggleButtons {
            margin-bottom: 1rem;
            gap: .5rem;
        }
        .layoutBtn {
            padding: .8rem;
        }
    }
`