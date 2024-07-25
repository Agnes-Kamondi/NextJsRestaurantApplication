const Advertisement = () => {
    return (
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 flex items-center gap-24 mr-10">
          <div>
            <img src="/Images/app.png" alt="" className="w-72 h-104" />
          </div>
          <div>
            <h3 className="text-yellow-500 ">
              Download Our App
            </h3>
            <h1 className="text-3xl font-bold mb-4">
              It's all here. <br />
              All in one app.
            </h1>
            <p className="text-gray-700 mb-8">
              Discover local on-demand delivery or Pickup from restaurants nearby
              grocery and convenience stores and more.
            </p>
            <div className="flex gap-6">
              <img src="Images/appstore.png" alt="" className="w-32 h-10 mr-4" />
              <img src="Images/googleplay.png" alt="" className="w-32 h-10" />
            </div>
          </div>
        </div>
        <div className="bg-white py-12 mt-12 mr-28">
          <div className="container mx-auto px-4 flex gap-20 items-center">
            <div className="text-start mb-8 w-96">
              <h1 className="text-4xl font-bold mb-4">Subscribe Our NewsLetter</h1>
              <p className="text-gray-700">Subscribe on our newsletter to get our news</p>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Your email address..."
                className="border rounded-l-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-yellow-500 h-12 "
              />
              <button className="bg-yellow-500 text-white rounded-r-md px-4 py-2 hover:bg-yellow-600 h-12 w-32">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Advertisement;
  