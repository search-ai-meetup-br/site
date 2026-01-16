import PublicLayout from "../../layouts/PublicLayout.jsx";
import NavBarInternal from "../../components/navigation/NavBarInternal.jsx";
import CompleteCodeOfCondute from "../../components/sections/code-of-conduct/CompleteCodeOfCondute.jsx";

export default function CodeOfConduct() {
    return (
        <PublicLayout nav={<NavBarInternal />}>
            <CompleteCodeOfCondute />
        </PublicLayout>
    );
}
