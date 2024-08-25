import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1A110C] text-white py-8 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <Image
              src="/logo.png" // Replace with your actual logo path
              alt="Eta Omega Chi Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl mb-4 font-semibold">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link href="/" className="hover:underline">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:underline">About Us</Link></li>
              <li className="mb-2"><Link href="/events" className="hover:underline">Events</Link></li>
              <li className="mb-2"><Link href="/recruitment" className="hover:underline">Recruitment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl mb-4 font-semibold">Contact Us</h3>
            <p>Email: info@etaomegachi.org</p>
            <p>Address: University of Southern California, Los Angeles, CA 90007</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl mb-4 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Eta Omega Chi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;