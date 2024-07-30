import styled from "styled-components"
import { redirect, useLoaderData } from "react-router-dom"
import { OrdersList, ComplexPaginationContainer, SectionTitle, Pagination } from "../components"
import axios from "axios"
import { toast } from "react-toastify"

export const loader = (store) => async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
        toast.warn('You must be logged in to view orders')
        return redirect('/Login')
    }

    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    try {
        const response = await axios.get('http://localhost:1337/api/orders', {
            params, headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        return { orders: response.data.data, meta: response.data.meta }
    } catch (error) {
        const errorMessage = error.message || 'There was an error placing your order'
        toast.error(errorMessage);
        if (error.request.status === 401 || 403) return redirect('/Login')
        return null;
    }
}

const Orders = () => {
    const { meta } = useLoaderData();

    if (meta.pagination.total < 1) {
        return (
            <div className='empty'>
                <SectionTitle text='PLEASE MAKE AN ORDER' />
            </div>
        )
    }

    return (
        <Wrapper>
            <SectionTitle text='YOUR ORDERS' />
            <OrdersList />
            <Pagination />
        </Wrapper>
    )
}

export default Orders;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
    height: 50vh;

    /* Mobile */
    @media (max-width:33.75em) {
        height: fit-content;
    }
`