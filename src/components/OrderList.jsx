import styled from "styled-components"
import { useLoaderData } from "react-router-dom"
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
    const { orders, meta } = useLoaderData();

    return (
        <Wrapper>
            <div className="mt-8">
                <h4 className="header">total orders: {meta.pagination.total}</h4>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Products</th>
                                <th>Cost</th>
                                <th className="hidden sm:block">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => {
                                const id = order.id;
                                const { name, address, numItemsInCart, orderTotal, createdAt } = order.attributes;
                                const date = day(createdAt).format('hh:mm a - MMM Do, YYYY')

                                return <tr key={id}>
                                    <td data-cell="Name">{name}</td>
                                    <td data-cell="Address">{address}</td>
                                    <td data-cell="Products">{numItemsInCart}</td>
                                    <td data-cell="Cost" className="cost">{orderTotal}</td>
                                    <td data-cell="Date" className="date">{date}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default OrdersList;

const Wrapper = styled.div`
.header {
    text-transform: uppercase;
    margin-top: 1rem;
}
    table {
        border-radius: .5rem;
        width: 100%;
        margin-top: 1rem;
        overflow: hidden;
        border-collapse: collapse;
    }
    td, th {
        padding: 1rem;
    }
    th {
        text-align: left;
        text-transform: uppercase;
    }

    /* Mobile */
    @media (max-width:33.75em) {
        th, .date {
            display: none;
        }
        td {
            display: grid;
            gap: .5rem;
            grid-template-columns: 15ch auto;
            padding: 0.5rem 1rem;
        }
        td:first-child{
            padding-top: 2rem;
        }
        .cost {
            padding-bottom: 2rem;
        }
        td::before {
            content: attr(data-cell) ": ";
            text-transform: uppercase;
            opacity: 0.7;
        }
    }
`