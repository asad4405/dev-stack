import React from "react";
export interface TechnologiesProps {
    prop: string;
}

export default function Technologies({ prop }: TechnologiesProps) {
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
                    
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 p-2 flex items-center justify-center">
                                    <img
                                        src="https://cdn.simpleicons.org/react/61DAFB"
                                        alt="React"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="badge badge-sm border-0 font-semibold bg-sky-50 text-sky-600">
                                    Popular
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-900">React</h3>
                            <p className="mt-2 text-xs text-gray-400 leading-relaxed h-12">
                                A declarative, component-based JavaScript
                                library for building modern user interfaces.
                            </p>
                        </div>

                        <div>
                            <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-[11px] text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                                        Frontend
                                    </span>
                                    <span>Beginner-Friendly</span>
                                </div>
                                <div className="flex items-center gap-1 font-semibold text-gray-700">
                                    <span className="text-amber-400">★</span>{" "}
                                    4.9
                                </div>
                            </div>
                            <button className="btn btn-neutral btn-sm w-full mt-4 normal-case font-semibold">
                                Add to Stack
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 p-2 flex items-center justify-center">
                                    <img
                                        src="https://cdn.simpleicons.org/vuedotjs/4FC08D"
                                        alt="Vue.js"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="badge badge-sm border-0 font-semibold bg-emerald-50 text-emerald-600">
                                    Versatile
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-900">Vue.js</h3>
                            <p className="mt-2 text-xs text-gray-400 leading-relaxed h-12">
                                An approachable, performant, and versatile
                                framework for building web user interfaces.
                            </p>
                        </div>

                        <div>
                            <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-[11px] text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                                        Frontend
                                    </span>
                                    <span>Beginner-Friendly</span>
                                </div>
                                <div className="flex items-center gap-1 font-semibold text-gray-700">
                                    <span className="text-amber-400">★</span>{" "}
                                    4.8
                                </div>
                            </div>
                            <button className="btn btn-neutral btn-sm w-full mt-4 normal-case font-semibold">
                                Add to Stack
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 p-2 flex items-center justify-center">
                                    <img
                                        src="https://cdn.simpleicons.org/svelte/FF3E00"
                                        alt="Svelte"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="badge badge-sm border-0 font-semibold bg-orange-50 text-orange-600">
                                    Fast
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-900">Svelte</h3>
                            <p className="mt-2 text-xs text-gray-400 leading-relaxed h-12">
                                Cybernetically enhanced web apps with
                                compile-time reactivity and zero virtual DOM
                                overhead.
                            </p>
                        </div>

                        <div>
                            <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-[11px] text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                                        Frontend
                                    </span>
                                    <span>Intermediate</span>
                                </div>
                                <div className="flex items-center gap-1 font-semibold text-gray-700">
                                    <span className="text-amber-400">★</span>{" "}
                                    4.8
                                </div>
                            </div>
                            <button className="btn btn-neutral btn-sm w-full mt-4 normal-case font-semibold">
                                Add to Stack
                            </button>
                        </div>
                    </div>
                </div>

                {/*  Stack  */}
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
            </div>
        </section>
    );
}
