import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../types/TechnologyType";
import Technology from "./Technology";
import { toast } from "react-toastify";

export interface SelectedTechnologiesProps {
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
}

export default function SelectedTechnologies({
    selectedTechnologies,
    setSelectedTechnologies,
}: SelectedTechnologiesProps) {
    const handleTechnologyRemove = (id: number) => {
        const filterTechnology = selectedTechnologies.filter(technology => technology.id !== id);
        setSelectedTechnologies(filterTechnology);
        toast.error('Remove Stack');
    };

    const handleTechnologyRemoveAll =() =>{
        setSelectedTechnologies([]);
        toast.error('Remove All Stack');
    }
    return (
        <div className="w-full lg:w-72 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-20">
            <h3 className="font-bold text-gray-900 text-sm">Your Stack</h3>
            <p className="text-xs text-gray-400 mt-0.5">
                {selectedTechnologies.length} Technology Selected
            </p>

            <div className="mt-4 space-y-2">
                {selectedTechnologies.map((technology) => (
                    <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2.5">
                            <img
                                src={technology.image}
                                alt={technology.name}
                                className="w-5 h-5 object-contain"
                            />
                            <div>
                                <h4 className="text-xs font-bold text-gray-800">
                                    {technology.name}
                                </h4>
                                <span className="text-[10px] text-gray-400">
                                    {technology.category}
                                </span>
                            </div>
                        </div>
                        <button onClick={() => handleTechnologyRemove(technology.id)} className="text-gray-400 cursor-pointer hover:text-red-500 text-xs font-bold px-1">
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            <button onClick={handleTechnologyRemoveAll} className="btn btn-outline btn-error btn-xs w-full mt-4 normal-case font-medium">
                Remove All
            </button>
        </div>
    );
}
