import axios from "axios"
import { Filters, ProductsContainer, Pagination } from "../components";
import styled from "styled-components";


export const loader = async ({ request }) => {
    let allProductsUrl = import.meta.env.VITE_APP_API_URL + "/products?";
    const pageURL = new URL(request.url);

    const searchParams = Object.fromEntries([...pageURL.searchParams.entries()]);;

    // for (const [key, value] of Object.entries(searchParams)) {
    //     if (value === "" || value == "All") continue;

    //     if (key === "Title") {
    //         allProductsUrl += `filters[Title][$contains]=${value}&`;
    //     }
    //     else if (key === 'Price') {
    //         allProductsUrl += `filters[Price][$gt]=${value}`;
    //     }
    //     else if (key.includes('pagination'))
    //         allProductsUrl += `${key}=${value}`;
    //     else
    //         allProductsUrl += `filters[${key}][$eq]=${value}`;

    //     //if  key is price it means that we are at the end of the array, so we can remove the trailing ampersand
    // }

    for (const [key, value] of Object.entries(searchParams)) {
        if (value === "" || value === "All") continue;

        let filter = `filters[${key}]`;
        let operator = "";

        if (key === "Title") {
            operator = "$contains";
        } else if (key === "Price") {
            operator = "$gt";
        } else if (key.includes("pagination")) {
            // No operator needed for pagination
            filter = `${key}`;
        } else {
            operator = "$eq";
        }

        allProductsUrl += `${filter}[${operator}]=${value}`;
    }

    allProductsUrl = allProductsUrl.endsWith("&") ? allProductsUrl.slice(0, -1) : allProductsUrl;


    const response = await axios(allProductsUrl);
    const allProducts = response.data.data;
    const meta = response.data.meta;

    return { allProducts, meta, searchParams };
}

const Products = () => {
    return (
        <Wrapper>
            <Filters />
            <ProductsContainer />
            <Pagination />
        </Wrapper>
    )
}

export default Products;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;

    /* Mobile */
    @media (max-width:33.75em) {
        margin: 2.5rem auto;
    }
`