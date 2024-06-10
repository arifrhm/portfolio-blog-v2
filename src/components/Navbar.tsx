import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-black shadow-md w-full fixed top-0 z-50">
      <header className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="text-white">
            <span className="font-bold">{`Gita's`}</span> Portfolio
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link href="/blog" className="text-white hover:text-blue-500 transition duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-white hover:text-blue-500 transition duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/photo" className="text-white hover:text-blue-500 transition duration-300">
                Photo
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-blue-500 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
