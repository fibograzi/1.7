import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  
  return (
    <footer className="relative bg-[var(--darker-bg)] py-12 mt-auto">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
      
      <div className="cyberpunk-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="BRAWL3D Logo" className="h-10 mr-2" />
              <h3 className="text-xl font-bold gradient-text">BRAWL3D</h3>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate Web3 meme arena game with spherical characters and token integration.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/BRAWL3D_portal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-purple)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M15 9l-3 3"></path>
                  <path d="M18 6l-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 neon-purple">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/gameplay" className="text-gray-400 hover:text-white transition-colors">Gameplay</a></li>
              <li><a href="/tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="/nfts" className="text-gray-400 hover:text-white transition-colors">NFTs</a></li>
              <li><a href="/roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 neon-green">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 neon-purple">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and announcements.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[var(--dark-bg)] border border-[var(--primary-purple)] rounded-md px-4 py-2 focus:outline-none focus:border-[var(--primary-green)] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {year} BRAWL3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
