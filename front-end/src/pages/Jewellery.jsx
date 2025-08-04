const Jewellery = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Jewellery & Accessories</h1>
                <p className="text-gray-600 mb-8">Beautiful jewellery and fashion accessories for every occasion.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">All Jewellery</h3>
                        <p className="text-sm text-gray-600">Complete jewellery collection</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Jewellery Set</h3>
                        <p className="text-sm text-gray-600">Matching jewellery sets</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Earrings & Studs</h3>
                        <p className="text-sm text-gray-600">Beautiful earrings and studs</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Mangalsutras</h3>
                        <p className="text-sm text-gray-600">Traditional mangalsutras</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Bangles</h3>
                        <p className="text-sm text-gray-600">Elegant bangles and bracelets</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Necklaces</h3>
                        <p className="text-sm text-gray-600">Stunning necklaces and chains</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Jewellery; 