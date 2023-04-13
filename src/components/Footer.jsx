import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center absolute bottom-0 w-full py-4 rounded-t-xl ">
      {/* //TODO login spotify */}

      <div className="tooltip" data-tip="login to your own spotify account">
        <button className=" btn btn-success">login</button>
      </div>
      <p className="text-sm">- {new Date().getFullYear()} -</p>
    </footer>
  );
}

export default Footer;
