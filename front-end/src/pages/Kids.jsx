const Kids = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Kids Fashion</h1>
                <p className="text-gray-600 mb-8">Adorable clothing and accessories for children of all ages.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Boys Clothing</h3>
                        <p className="text-sm text-gray-600">Stylish clothes for boys</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Girls Clothing</h3>
                        <p className="text-sm text-gray-600">Beautiful dresses for girls</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Infants</h3>
                        <p className="text-sm text-gray-600">Comfortable clothing for babies</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">School Wear</h3>
                        <p className="text-sm text-gray-600">Uniforms and school clothes</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Party Wear</h3>
                        <p className="text-sm text-gray-600">Special occasion dresses</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-purple-600 mb-2">Shoes</h3>
                        <p className="text-sm text-gray-600">Comfortable footwear for kids</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Kids; 