import React from 'react';

export default function Footer() {
  return (
    <footer className=" bg-purple-400 text-white py-4 fixed bottom-0 left-0 w-full ">
      <div className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} iDo. All rights reserved.
      </div>
    </footer>
  );
}
