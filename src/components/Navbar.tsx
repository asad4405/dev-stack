import Logo from "../../public/logo-text.png";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="text-2xl text-gray-700">
                        <HiMenu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-48 flex flex-col gap-3 text-sm font-medium border border-gray-200">
                        <li>
                            <a href="#" className="text-pink-500 font-semibold">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">Technologies</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <img src={Logo} alt="DevStack Logo" className="h-9 w-auto object-contain"/>
                </div>

                <div className="hidden lg:flex gap-6 text-sm font-medium">
                    <a href="#" className="text-pink-500 font-semibold">
                        Home
                    </a>
                    <a href="#" className="hover:text-pink-500 transition-colors">
                        Technologies
                    </a>
                    <a href="#" className="hover:text-pink-500 transition-colors">
                        Projects
                    </a>
                    <a href="#" className="hover:text-pink-500 transition-colors">
                        About
                    </a>
                    <a href="#" className="hover:text-pink-500 transition-colors">
                        Contact
                    </a>
                </div>

                <div className="flex items-center gap-3 text-sm font-medium">
                    <button className="hover:text-pink-500 transition-colors cursor-pointer">
                        Sign In
                    </button>
                    <button className="bg-pink-500 text-white cursor-pointer px-4 py-2 rounded-full font-semibold shadow-sm hover:opacity-90 transition-opacity">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
