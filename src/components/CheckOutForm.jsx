import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../feature/cart/cartSlice";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";

export const action = (store) => async ({ request }) => {

    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;

    const info = {
        name, address, cartTotal: orderTotal, orderTotal: formatPrice(orderTotal), cartItems, numItemsInCart
    }

    try {
        const response = await axios.post('http://localhost:1337/api/orders', { data: info }, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        store.dispatch(clearCart());
        toast.success('order placed successfully')
        return redirect('/Orders');
    } catch (error) {
        const errorMessage = error.message || 'There was an error placing your order'
        toast.error(errorMessage);
        if (error.request.status === 401 || 403) return redirect('/Login')
        return null;
    }
}

const CheckOutForm = () => {
    return (
        <Wrapper>
            <Form method="POST">
                <FormInput label='First Name' name='name' type='text' id='width1' />
                <FormInput label='address' name='address' type='text' id='width2' />
                <div>
                    <SubmitBtn text='Place Order' className='btn submitBtn' id='submitBtnwidth' />
                </div>
            </Form>
        </Wrapper>
    )
}

export default CheckOutForm;

const Wrapper = styled.section`
    .submitBtn {
        width: 100%;
        margin-top: 1.5rem;
    }
    #width1, #width2{
        width: 100%;
    } 
    
    /* Mobile */
    @media (max-width:33.75em) {
        .submitBtn {
            width: 100%;
        }
        #width1, #width2{
            width: 100%;
        }
    }
`