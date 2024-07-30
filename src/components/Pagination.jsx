import styled from "styled-components"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

const Pagination = () => {
    const { meta } = useLoaderData();

    // page - Tells what page we are on
    // pageSize - Tell us how many products are displayed on the page currently
    // pageCount - Total number of pages we have
    const { page, pageCount } = meta.pagination;

    // This is an array that has the numbers for our pagination up to the length of pages we have based on the number of products returned from the api(pageCount) e.g - [1, 2, 3, 4, 5, 6]
    const pageNumbers = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    })

    //The search gives us the query parameters and their values if there are any e.g "?Title=k&Category=All&Brand=All" and the pathname gives us the url path e.g "/products"
    const { search, pathname } = useLocation();
    const navigate = useNavigate();

    //The logic that handles page change, so that we see different sets of products when we change page
    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set(`pagination[page]`, pageNumber);
        navigate(`${pathname}?${searchParams}`);
    }

    //If the number of pages are less than one then there's no need for a pagination, hence the following code
    if (pageCount < 2) {
        return null;
    }

    return (
        <Wrapper className="pagContainer">
            <button
                className="pagBtn"
                onClick={() => {
                    let prevPage = page - 1;
                    if (prevPage < 1) prevPage = pageCount;
                    handlePageChange(prevPage);
                }}
            >
                Prev
            </button>

            {pageNumbers.map((pageNumber) => {
                return (
                    <button
                        key={pageNumber}
                        onClick={() => { handlePageChange(pageNumber) }}
                        className={` ${pageNumber === page ? 'pagBtn activePagBtn' : 'pagBtn'}`}
                    >
                        {pageNumber}
                    </button>
                )
            })}

            <button
                className="pagBtn"
                onClick={() => {
                    let nextPage = page + 1;
                    if (nextPage > pageCount) nextPage = 1;
                    handlePageChange(nextPage);
                }}
            >
                Next
            </button>
        </Wrapper>
    )
}

export default Pagination;

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    overflow: hidden;
    border-radius: .5rem;
    button {
        background: none;
    }
    .pagBtn {
        padding: 1.5rem;
        cursor: pointer;
    }

    /* Mobile */
    @media (max-width:33.75em) {
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        .pagBtn {
            padding: 0.93rem;
        }
    }
`