import Link from 'next/link';
import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = (option) => {
        console.log(`Clicked ${option}`);
        // Close dropdown after action
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="cursor-pointer">Films</p>
            {isOpen && (
                <div className="absolute mt-[1px] w-[150px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul>
                        <li>
                            <button
                                onClick={() => handleItemClick('Option 1')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                <Link href="/films/prewed"> pre wedding</Link>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleItemClick('Option 2')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                <Link href="/films/wedding">wedding</Link>
                            </button>
                        </li>

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
