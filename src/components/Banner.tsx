const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
            
            <div className="flex-1 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Build Your Ideal
                    <span className="inline-block mt-1 bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-extrabold">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium">
                    <button className="bg-gradient-to-r from-[#FF5722] to-[#E91E63] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-sm hover:opacity-95 transition-all">
                        Explore Technologies
                    </button>
                    <button className="bg-white text-gray-600 border border-gray-200 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-50 transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-lg">
                <img
                    src="/banner-stack.png"
                    alt="Development Stack Illustration"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default Banner;
