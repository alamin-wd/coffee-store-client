import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";

const Root = () => {

    return (

        <div>
            <Helmet>
                <title>Coffee Store</title>
            </Helmet>
            
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default Root;

