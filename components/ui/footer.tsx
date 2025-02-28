import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-red-500">Watchify</h2>
                    <p className="text-gray-300 mt-2">
                        Your ultimate streaming destination for the best movies and TV shows.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                    
                    <div>
                        <h3 className="text-lg font-semibold text-red-500 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-red-400">Home</a></li>
                            <li><a href="#" className="hover:text-red-400">Movies</a></li>
                            <li><a href="#" className="hover:text-red-400">TV Shows</a></li>
                        </ul>
                    </div>

                 
                    <div>
                        <h3 className="text-lg font-semibold text-red-500 mb-4">Help & Info</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-red-400">Account</a></li>
                            <li><a href="#" className="hover:text-red-400">FAQs</a></li>
                            <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-red-500 mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-3">Subscribe to get the latest updates.</p>
                        <div className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-black focus:outline-none"
                            />
                            <button className="bg-red-500 px-4 py-2 text-white font-semibold hover:bg-red-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 mt-10">
                    <p>&copy; {new Date().getFullYear()} Watchify. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
