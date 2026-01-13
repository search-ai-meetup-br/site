import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Footer from "../../components/layout/Footer";
import NavBarInternal from "../../components/navs/NavBarInternal.jsx"
import CompleteCodeOfCondute from "./sections/CompleteCodeOfCondute.jsx"

export default function CodeOfConduct() {
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
