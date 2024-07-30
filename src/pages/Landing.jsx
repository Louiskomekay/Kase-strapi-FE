import styled from "styled-components"
import { Hero, FeaturedProducts } from "../components";
import axios from 'axios';
import { useEffect, useState } from "react";
import { makeRequest } from "../utils";

export const loader = async () => {
    //Featured Fits
    const featuredFitsResponse = await axios.get(import.meta.env.VITE_APP_API_URL + "/products?filters[FeaturedFits][$eq]=true", {
        headers: {
            Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN
        }
    });
    const featuredFitsProducts = featuredFitsResponse.data.data;


    //Featured Hyped
    const featuredHypedResponse = await axios.get(import.meta.env.VITE_APP_API_URL + "/products?filters[FeaturedHyped][$eq]=true", {
        headers: {
            Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN
        }
    });
    const featuredHypedProducts = featuredHypedResponse.data.data;

    //Featured Hottest
    const featuredHottestResponse = await axios.get(import.meta.env.VITE_APP_API_URL + "/products?filters[FeaturedHottest][$eq]=true", {
        headers: {
            Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN
        }
    });
    const featuredHottestProducts = featuredHottestResponse.data.data;

    return { featuredFitsProducts, featuredHypedProducts, featuredHottestProducts };
}

const Landing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_APP_API_URL + "/products", {
                    headers: {
                        Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN
                    }
                });
                const data = response.data.data;
                return data;
            }
            catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Hero />
            <FeaturedProducts />
        </Wrapper>
    )
}

export default Landing;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
`