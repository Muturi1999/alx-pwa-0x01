import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">MovieApp</h3>
            <p className="text-gray-400">Discover amazing movies</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MovieApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;