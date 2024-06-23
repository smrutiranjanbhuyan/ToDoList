import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-400 text-white py-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} iDo. All rights reserved.
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-right mt-4 md:mt-0">
            <ul className="text-sm">
              <li className="inline-block ml-2 md:ml-4">About</li>
              <li className="inline-block ml-2 md:ml-4">Contact</li>
              <li className="inline-block ml-2 md:ml-4">Privacy Policy</li>
              <li className="inline-block ml-2 md:ml-4">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
