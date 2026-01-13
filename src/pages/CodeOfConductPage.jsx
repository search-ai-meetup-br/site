import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import CompleteCodeOfCondute from "../components/sections/CompleteCodeOfCondute.jsx"
import NavBarInternal from "../components/navs/NavBarInternal.jsx";

export default function CodeOfConductPage() {
    return (
        <>
            <Header>
                <NavBarInternal />
            </Header>
            <Main>
                <CompleteCodeOfCondute />
            </Main>
            <Footer />
        </>
    );
}
