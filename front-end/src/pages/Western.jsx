const Western = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Western Fashion</h1>
                <p className="text-gray-600 mb-8">Discover the latest trends in western fashion for women.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Dresses</h3>
                        <p className="text-sm text-gray-600">Elegant dresses for every occasion</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Tops</h3>
                        <p className="text-sm text-gray-600">Stylish tops and blouses</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Jeans</h3>
                        <p className="text-sm text-gray-600">Comfortable and trendy jeans</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Shirts</h3>
                        <p className="text-sm text-gray-600">Casual and formal shirts</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Skirts</h3>
                        <p className="text-sm text-gray-600">Beautiful skirts for all seasons</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Jumpsuits</h3>
                        <p className="text-sm text-gray-600">Trendy jumpsuits and rompers</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Western; 