import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies/Technologies";
import type { TechnologyType } from "./types/TechnologyType";

function App() {
    const techonologiesFetch = async(): Promise<TechnologyType[]> => {
        const res = await fetch("/data.json");
        const data = await res.json();
        return data;
    } 
    const [technologiesPromise] = useState(() => techonologiesFetch());
    
    return (
        <>
            <Navbar />
            <Banner />
            <Suspense fallback={<p className="text-center">Loading ...</p>}>
                <Technologies technologiesPromise={technologiesPromise} />
            </Suspense>
            <Footer />
        </>
    );
}

export default App;
