import React from 'react';

const Home = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Banner Section */}
            <section className="flex flex-col items-center justify-center bg-gray-300 text-white py-24 space-y-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold leading-tight">Welcome to Researchify</h1>
                    <p className="text-xl mt-6">Your ultimate research assistant for all your academic needs. Let us help you achieve excellence.</p>
                    <button className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300">Get Started</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-dark-navy-blue text-center mb-10">Our Premium Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
                            <h3 className="text-2xl font-semibold text-dark-navy-blue">Research Templates</h3>
                            <p className="text-gray-600 mt-4">Access a collection of customizable templates to kickstart your research projects.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
                            <h3 className="text-2xl font-semibold text-dark-navy-blue">Collaboration Tools</h3>
                            <p className="text-gray-600 mt-4">Work seamlessly with peers and advisors with our real-time collaboration features.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
                            <h3 className="text-2xl font-semibold text-dark-navy-blue">AI Research Assistant</h3>
                            <p className="text-gray-600 mt-4">Utilize our AI-driven research assistant to enhance productivity and accuracy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-dark-navy-blue text-center mb-10">What Our Users Say</h2>
                    <div className="flex justify-center gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center transition duration-300 hover:shadow-2xl">
                            <p className="text-xl text-gray-700">Researchify helped me finish my thesis in record time. The templates were a game changer!</p>
                            <p className="mt-4 font-semibold text-teal-700">Sarah L., Researcher</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center transition duration-300 hover:shadow-2xl">
                            <p className="text-xl text-gray-700">The collaboration tools made working with my team effortless. Highly recommend!</p>
                            <p className="mt-4 font-semibold text-teal-700">David K., Academic</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-dark-navy-blue text-white py-16 px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Join thousands of researchers who trust Researchify for all their academic needs.</p>
                    <button className="bg-teal-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300">Start Now</button>
                </div>
            </section>

            {/* Footer Section (optional if needed) */}
            {/* Comment out if no footer is required */}
            {/* <footer className="bg-royal-black text-white py-6 text-center">
                <p>© 2024 Researchify. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default Home;
