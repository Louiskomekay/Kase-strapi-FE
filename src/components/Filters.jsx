import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import styled from "styled-components";
import kaseBgImage from '../images/Kase.png';
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";

const category = ['All', 'Cardigan', 'Hoodie', 'Jacket', 'Shirt', 'Sweatshirt', 'T-Shirt']
const brand = ['All', 'Off-white', 'Nike', 'Stussy', 'H&M', 'Ralph Lauren', 'Aimé Leon Dore']

const Filters = () => {
    const { searchParams } = useLoaderData();
    const { Title, Category, Brand, Price, Shipping } = searchParams;

    return (
        <Wrapper style={{ backgroundImage: `url(${kaseBgImage})` }} className="filterFormBG">
            <div className="formWrapper" >
                <Form>
                    {/* SEARCH */}
                    <FormInput type='search' name='Title' id='searchInput' label='search product' defaultValue={Title} placeholder='Search for product' />

                    <div className="line"></div>

                    <div className="otherFilters">
                        {/* CATEGORY */}
                        <FormSelect name='Category' iterable={category} defaultValue={Category} />

                        {/* COMPANY */}
                        <FormSelect name='Brand' iterable={brand} defaultValue={Brand} />

                        {/* SHIPPING */}
                        <FormCheckbox name='Shipping' label='Free shipping' defaultValue={Shipping} />
                    </div>

                    {/* BUTTONS */}
                    <button type="submit" className="searchBtn">search</button>
                    <button className="resetBtn">
                        <Link to='/Products' className="resetLink" >
                            reset
                        </Link>
                    </button>
                </Form>
            </div>
        </Wrapper>
    )
}

export default Filters;

const Wrapper = styled.div`
    margin-bottom: 2rem;
    height: auto;
    display: grid;
    place-items: center;
    border-radius: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    .formWrapper {
        padding: 2rem;
        border-radius: 1rem;
        width: 80rem;
    }
    #searchInput {
        width:100%;
    }
    .line {
        height: 2px;
        width: 100%;
        border-radius: 10px;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
    .searchBtn, .resetBtn {
        text-transform: capitalize;
        padding: 1rem 2rem;
        border-radius: .5rem;
        cursor: pointer;
        color: var(--lm-white1);
        margin-right: 1rem;
        transition: var(--smooth);
    }
    .resetBtn .resetLink {
        color: var(--lm-white1);
    }
    .searchBtn:hover, .resetBtn:hover {
        background-color: var(--Blue1);
    }
    .otherFilters {
        margin-bottom: 2rem;
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
    }
    .selectStyling {
        padding: 1rem;
        margin-top: .5rem;
        max-width: 10rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    .filter {
        display: flex;
        flex-direction: column;
    }
    .filterLabel {
        display: flex;
        justify-content: space-between;
    }
    .pricerange {
        display: block;
        width: 20rem;
        height: 4px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    .interval {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .checkbox {
        width: 1.5rem;
        height: 1.5rem;
        margin-top: 1rem;
        border-radius: 50%;
        cursor: pointer;
    }

    /* Tablet */
    @media (max-width:90em) {
        .formWrapper {
            width: 40rem;
        }
    }

    /* Mobile */
    @media(max-width:33.75em){
        padding-top: 2rem;
        padding-bottom: 2rem;
        .formWrapper {
            border-radius: .7rem;
            width: 20rem;
        }
        .pricerange {
            width: 16rem;
        }
        .filterLabel, .interval span {
            font-size: 12px;
        }
        .otherFilters {
            gap: 2rem;
        }
    }
`