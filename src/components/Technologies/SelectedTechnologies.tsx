export interface SelectedTechnologiesProps {
    prop: string
}

export default function SelectedTechnologies({ prop }: SelectedTechnologiesProps) {
    
    return (
    <div className="w-full lg:w-72 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-20">
        <h3 className="font-bold text-gray-900 text-sm">
            Your Stack
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
            2 Technology Selected
        </p>

        <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2.5">
                    <img
                        src="https://cdn.simpleicons.org/svelte/FF3E00"
                        alt="Svelte"
                        className="w-5 h-5 object-contain"
                    />
                    <div>
                        <h4 className="text-xs font-bold text-gray-800">
                            Svelte
                        </h4>
                        <span className="text-[10px] text-gray-400">
                            Frontend
                        </span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 text-xs font-bold px-1">
                    ✕
                </button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2.5">
                    <img
                        src="https://cdn.simpleicons.org/redis/FF4438"
                        alt="Redis"
                        className="w-5 h-5 object-contain"
                    />
                    <div>
                        <h4 className="text-xs font-bold text-gray-800">
                            Redis
                        </h4>
                        <span className="text-[10px] text-gray-400">
                            Database
                        </span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 text-xs font-bold px-1">
                    ✕
                </button>
            </div>
        </div>

        <button className="btn btn-outline btn-error btn-xs w-full mt-4 normal-case font-medium">
            Remove All
        </button>
    </div>
    )
}