const Navbar = () => {
  return (
      <main>
          <nav className="flex justify-between items-center p-8">
              <h1 className="text-3xl font-bold text-yellow-500 font-serif">FoodHouse</h1>
              <ul className="flex space-x-4">
                  <li>
                      <a href="#" className="text-yellow-500 font-bold hover:text-black">HOME</a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-700 font-bold hover:text-black">RESTAURANT</a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-700 font-bold hover:text-black">SERVICES</a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-700 font-bold hover:text-black">CART</a>
                  </li>
              </ul>
              <div>
                  <a href="#" className="text-xl text-gray-700 hover:text-black">Sign In</a>
              </div>
          </nav>
      </main>
  );
};

export default Navbar;
