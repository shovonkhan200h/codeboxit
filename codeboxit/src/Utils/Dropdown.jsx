import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Hover area that triggers the dropdown */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-pointer"
      >
        <button className="px-4 py-2 p-2 cursor-pointer hover:border-b hover:border-white text-[16px] text-[rgb(209,209,209)]">
          Services
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute left-0 w-48 mt-2 origin-top-left bg-white border border-gray-200 rounded-md shadow-lg "
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul className="py-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
