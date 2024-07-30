import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Footer, Loading } from "../components";

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    return (
        <>
            <Navbar />
            {isPageLoading ? <Loading /> : <Outlet />}
            <Footer />
        </>
    )
}

export default HomeLayout