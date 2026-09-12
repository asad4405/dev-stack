import React, { use, useState } from "react";
import type { TechnologyType } from "../../types/TechnologyType";
import Technology from "./Technology";
import SelectedTechnologies from "./SelectedTechnologies";
export interface TechnologiesProps {
    technologiesPromise: Promise<TechnologyType[]>;
}

export default function Technologies({
    technologiesPromise,
}: TechnologiesProps) {
    const technologies = use(technologiesPromise);
    
    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);
    const handleAddTechnology = (tech: TechnologyType) =>{
        const exists = selectedTechnologies.find(technology => technology.id === tech.id);
        if(!exists){
            setSelectedTechnologies([...selectedTechnologies,tech])
        }
    }
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Explore the{" "}
                    <span className="inline-block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
                    {technologies.map(technology => <Technology key={technology.id} technology={technology} selectedTechnologies={selectedTechnologies} setSelectedTechnologies ={setSelectedTechnologies} /> )}
                </div>

                {/*  Stack  */}
                <SelectedTechnologies selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}/>
            </div>
        </section>
    );
}
