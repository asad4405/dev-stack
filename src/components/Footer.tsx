import Logo from "../../public/logo-text.png";
const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t border-gray-100 pt-10 pb-6 text-gray-500 text-xs sm:text-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left">
                        
                        <div className="space-y-3 max-w-xs mx-auto lg:mx-0">
                            <div className="flex items-center justify-center lg:justify-start">
                                <img src={Logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Curated tools, technologies, and resources for
                                developers building modern software.
                            </p>
                            <div className="flex justify-center lg:justify-start gap-3 font-semibold text-gray-700 text-xs">
                                <a href="#" className="hover:text-pink-500">
                                    GitHub
                                </a>
                                <span className="lg:hidden">•</span>
                                <a href="#" className="hover:text-pink-500">
                                    Twitter
                                </a>
                                <span className="lg:hidden">•</span>
                                <a href="#" className="hover:text-pink-500">
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block space-y-2">
                            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">
                                Product
                            </h4>
                            <a href="#" className="block hover:text-pink-500">
                                Home
                            </a>
                            <a href="#" className="block hover:text-pink-500">
                                Technologies
                            </a>
                            <a href="#" className="block hover:text-pink-500">
                                Projects
                            </a>
                        </div>

                        <div className="hidden lg:block space-y-2">
                            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">
                                Company
                            </h4>
                            <a href="#" className="block hover:text-pink-500">About</a>
                            <a href="#" className="block hover:text-pink-500">Contact</a>
                            <a href="#" className="block hover:text-pink-500">Careers</a>
                        </div>

                        <div className="hidden lg:block space-y-2">
                            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">
                                Legal
                            </h4>
                            <a href="#" className="block hover:text-pink-500">Privacy Policy</a>
                            <a href="#" className="block hover:text-pink-500">Terms of Service</a>
                        </div>

                    </div>

                    <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-pink-500">
                                Privacy
                            </a>
                            <a href="#" className="hover:text-pink-500">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
