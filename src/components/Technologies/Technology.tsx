import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../../types/TechnologyType";
import { toast } from "react-toastify";

export interface TechnologyProps {
    technology: TechnologyType;
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
}

export default function Technology({ technology,selectedTechnologies,setSelectedTechnologies }: TechnologyProps) {
    const isSelected = selectedTechnologies.find(tech => tech.id === technology.id);

    function handleTechnology(){
        if(!isSelected){
            setSelectedTechnologies([...selectedTechnologies, technology]);
            toast.success(`${technology.name} Added to Stack`);
        }
    }
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 p-2 flex items-center justify-center">
                        <img
                            src={technology.image}
                            alt={technology.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className={`badge badge-sm border-0 font-semibold ${technology.badgeColor}`}>
                        {technology.badge}
                    </span>
                </div>
                <h3 className="font-bold text-gray-900">{technology.name}</h3>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed h-12">
                    {technology.description}
                </p>
            </div>

            <div>
                <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-[11px] text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                            {technology.category}
                        </span>
                        <span>{technology.level}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-gray-700">
                        <span className="text-amber-400">★</span> {technology.rating}
                    </div>
                </div>
                <button onClick={() => handleTechnology()} className="btn btn-neutral btn-sm w-full mt-4 normal-case font-semibold" disabled={isSelected ? true : false}>
                   {isSelected ? 'Selected Stack' : 'Add to Stack'} 
                </button>
            </div>
        </div>
    );
}
