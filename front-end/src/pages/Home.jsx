const Home = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to Your E-commerce Store
                </h1>
                <p className="text-gray-600 mb-6">
                    Hover over the navigation items above to see the dropdown menus
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-purple-600 mb-2">Western</h3>
                        <p className="text-sm text-gray-600">Fashion for women with modern western styles</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-purple-600 mb-2">Men</h3>
                        <p className="text-sm text-gray-600">Complete men's fashion collection</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-purple-600 mb-2">Kids</h3>
                        <p className="text-sm text-gray-600">Adorable clothing for children</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-purple-600 mb-2">Jewellery & Accessories</h3>
                        <p className="text-sm text-gray-600">Beautiful jewellery and fashion accessories</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home; 