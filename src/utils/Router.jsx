//IMPORTS
import { createBrowserRouter } from 'react-router-dom'
import { About, Orders, Products, CheckOut, Error, HomeLayout, Landing, Login, PrivacyPolicy, Register, SingleProduct, TermsAndCondition, Cart, ContactUs } from '../pages'
import { ErrorElement } from '../components';
import { store } from '../store';

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5
        }
    }
})

//LOADERS
import { loader as landingLoader } from '../pages/Landing';
import { loader as singleProductLoader } from '../pages/SingleProduct';
import { loader as productsLoader } from '../pages/Products';
import { loader as checkOutLoader } from '../pages/Checkout';
import { loader as ordersLoader } from '../pages/Orders';

//ACTIONS
import { action as registerAction } from '../pages/Register';
import { action as loginAction } from '../pages/Login';
import { action as checkoutAction } from '../components/CheckOutForm';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader,
            },
            {
                path: 'About',
                element: <About />,
                errorElement: <ErrorElement />
            },
            {
                path: 'Orders',
                element: <Orders />,
                errorElement: <ErrorElement />,
                loader: ordersLoader(store),
            },
            {
                path: 'Products',
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: productsLoader,
            },
            {
                path: 'Products/:id',
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader,
            },
            {
                path: 'CheckOut',
                element: <CheckOut />,
                errorElement: <ErrorElement />,
                loader: checkOutLoader(store),
                action: checkoutAction(store),
            },
            {
                path: 'PrivacyPolicy',
                element: <PrivacyPolicy />,
                errorElement: <ErrorElement />
            },
            {
                path: 'TermsAndCondition',
                element: <TermsAndCondition />,
                errorElement: <ErrorElement />
            },
            {
                path: 'ContactUs',
                element: <ContactUs />,
                errorElement: <ErrorElement />
            },
            {
                path: 'Cart',
                element: <Cart />,
                errorElement: <ErrorElement />
            },
        ]
    },
    {
        path: '/Login',
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store),
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
    },
])

export default Router;