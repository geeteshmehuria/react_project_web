const Men = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Men's Fashion</h1>
                <p className="text-gray-600 mb-8">Complete collection of men's clothing and accessories.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Shirts</h3>
                        <p className="text-sm text-gray-600">Formal and casual shirts</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">T-Shirts</h3>
                        <p className="text-sm text-gray-600">Comfortable cotton t-shirts</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Jeans</h3>
                        <p className="text-sm text-gray-600">Stylish denim jeans</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Trousers</h3>
                        <p className="text-sm text-gray-600">Formal and casual trousers</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Kurta & Sets</h3>
                        <p className="text-sm text-gray-600">Traditional Indian wear</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Sherwani</h3>
                        <p className="text-sm text-gray-600">Elegant sherwanis for special occasions</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Men; 