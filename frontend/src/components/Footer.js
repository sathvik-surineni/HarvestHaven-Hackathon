import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Brand Center</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">Discord Server</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Facebook</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Licensing</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Download</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">iOS</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Android</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Windows</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">MacOS</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 HARVEST HAVEN.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white"><BsFacebook size={24} /></Link>
            <Link to="#" className="text-gray-400 hover:text-white"><BsInstagram size={24} /></Link>
            <Link to="#" className="text-gray-400 hover:text-white"><BsTwitter size={24} /></Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
