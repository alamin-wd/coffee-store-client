import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";

const Home = () => {

    return (

        <div>
            <Helmet>
                <title>Home | Coffee Store</title>
            </Helmet>

            <Header></Header>

            
        </div>
    );
};

export default Home;

