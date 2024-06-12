import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const Root = () => {

    return (

        <div>
            <Helmet>
                <title>Coffee Store</title>
            </Helmet>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default Root;

