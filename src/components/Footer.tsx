const Footer = () => {
    return (
      <footer className="bg-white text-black py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left section */}
            <div>
              <div className="font-bold">
                Andrew <span className="font-normal">Kurochkin</span>
              </div>
              <p>Lviv, Ukraine</p>
              <p>me(at)andrewkurochkin.com</p>
            </div>
  
            {/* Right section */}
            <div className="md:pl-4">
              <div className="font-bold">Stay tuned</div>
              <p>Join 132 other followers and sign up to receive the latest news from me.</p>
              <form className="mt-2 flex">
                <input
                  type="text"
                  placeholder="Enter your Email here"
                  className="border border-gray-300 px-2 py-1 rounded-l mr-2"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Social links */}
          <div className="mt-4 flex space-x-4">
            <a target="_blank" href="https://www.linkedin.com/in/sangreel/" className="hover:underline">
              LinkedIn
            </a>
            <a target="_blank" href="https://github.com/SanGreel" className="hover:underline">
              GitHub
            </a>
            <a target="_blank" href="https://t.me/s/film1319" className="hover:underline">
              Film Photo
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  