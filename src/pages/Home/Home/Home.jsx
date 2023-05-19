import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import DollCategory from "../DollCategory/DollCategory";
import DollCloth from "../DollCloth/DollCloth";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <DollCategory></DollCategory>
            <DollCloth></DollCloth>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;