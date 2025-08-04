
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/03e4c471-cf8e-4226-b1ae-04e55d73bb7e.png" 
              alt="LUME GLOBAL INC" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Intelligent Skilling Infrastructure for a Smarter Workforce. 
              From learning to certification, we power the future of work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lume-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-lume-yellow transition-colors font-medium cursor-pointer">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-lume-yellow transition-colors font-medium cursor-pointer">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-lume-yellow transition-colors font-medium cursor-pointer">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-lume-yellow transition-colors font-medium cursor-pointer">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lume-yellow">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-lume-yellow transition-colors font-medium cursor-pointer">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-lume-yellow transition-colors font-medium cursor-pointer">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>LUME GLOBAL Inc</p>
              <p>16192 Coastal Hwy<br />Lewes, DE 19958 (USA)</p>
              <p>Corporate Email: info@lumeglobal.ai</p>
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              © 2025 LUME GLOBAL Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
