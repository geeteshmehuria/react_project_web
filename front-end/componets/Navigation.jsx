import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const navigationItems = [
        {
            name: "Western",
            href: "/western",
            dropdown: {
                columns: [
                    {
                        title: "Western Wear",
                        items: [
                            "All Western",
                            "Dresses",
                            "Tops",
                            "Jeans",
                            "Shirts",
                            "Skirts",
                            "Shorts",
                            "Jumpsuits",
                            "Outerwear",
                            "Activewear"
                        ]
                    }
                ]
            }
        },
        {
            name: "Men",
            href: "/men",
            dropdown: {
                columns: [
                    {
                        title: "Men's Fashion",
                        items: [
                            "All Men's",
                            "Shirts",
                            "T-Shirts",
                            "Jeans",
                            "Trousers",
                            "Kurta & Sets",
                            "Sherwani",
                            "Blazers",
                            "Sweaters",
                            "Jackets"
                        ]
                    }
                ]
            }
        },
        {
            name: "Kids",
            href: "/kids",
            dropdown: {
                columns: [
                    {
                        title: "Kids Fashion",
                        items: [
                            "All Kids",
                            "Boys Clothing",
                            "Girls Clothing",
                            "Infants",
                            "School Wear",
                            "Party Wear",
                            "Shoes",
                            "Toys",
                            "Books"
                        ]
                    }
                ]
            }
        },
        {
            name: "Jewellery & Accessories",
            href: "/jewellery",
            dropdown: {
                columns: [
                    {
                        title: "Jewellery",
                        items: [
                            "All Jewellery",
                            "Jewellery Set",
                            "Earrings & Studs",
                            "Mangalsutras",
                            "Bangles",
                            "Necklaces",
                            "Rings",
                            "Kamarbandh & Maangtika",
                            "Anklets",
                            "Men Jewellery",
                            "Oxidised"
                        ]
                    }
                ]
            }
        }
    ];

    return (
        <nav className="shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center items-center">

                    {/* Navigation Items */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigationItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredCategory(item.name)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    <Link
                                        to={item.href}
                                        className={`text-purple-900 hover:text-purple-300 px-3 py-4 text-sm font-medium transition-colors duration-200 ${hoveredCategory === item.name ? 'text-purple-300' : ''
                                            }`}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && hoveredCategory === item.name && (
                                        <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 z-50 min-w-64">
                                            <div className="py-4">
                                                {item.dropdown.columns.map((column, colIndex) => (
                                                    <div key={colIndex} className="relative">
                                                        <h3 className="text-purple-600 font-semibold text-lg mb-3 px-4">
                                                            {column.title}
                                                        </h3>
                                                        <ul className="space-y-1">
                                                            {column.items.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link
                                                                        to={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                                        className="text-gray-700 hover:text-purple-600 text-sm px-4 py-2 block transition-colors duration-200 hover:bg-gray-50"
                                                                    >
                                                                        {subItem}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-purple-600">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 