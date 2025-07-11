import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="cyberpunk-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About BRAWL3D</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The story behind the ultimate Web3 meme arena game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Background */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 neon-purple">Our Vision</h2>
              <p className="text-gray-300 mb-6">
                BRAWL3D was born from a simple idea: create a fun-first Web3 game that combines the addictive gameplay of classic .io games with the vibrant culture of internet memes and the innovative potential of blockchain technology.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that gaming should be accessible, entertaining, and rewarding. By building on the Solana blockchain, we're able to offer lightning-fast transactions, low fees, and a seamless gaming experience that doesn't compromise on fun.
              </p>
              <p className="text-gray-300">
                Our mission is to create a thriving ecosystem where players can compete, collect, and earn in a chaotic, meme-filled arena that celebrates internet culture while introducing Web3 concepts in an organic, optional way.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute"
                >
                  <div className="w-64 h-64 rounded-full bg-[var(--primary-purple)] opacity-80 relative overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white opacity-30 rounded-full"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -right-10 top-20"
                >
                  <div className="w-32 h-32 rounded-full bg-[var(--primary-green)] opacity-80 relative overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white opacity-30 rounded-full"></div>
                  </div>
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--darker-bg)] via-transparent to-[var(--darker-bg)] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 relative bg-[var(--darker-bg)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-green)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="h-16 w-16 rounded-full bg-[var(--primary-purple)] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center neon-purple">Fun First</h3>
              <p className="text-gray-300 text-center">
                We believe that gameplay should always come first. Web3 elements enhance the experience but never get in the way of fun.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <div className="h-16 w-16 rounded-full bg-[var(--primary-green)] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center neon-green">Community Driven</h3>
              <p className="text-gray-300 text-center">
                Our community is at the heart of everything we do. We listen, engage, and evolve based on player feedback.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="h-16 w-16 rounded-full bg-[var(--primary-purple)] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center neon-purple">Transparency</h3>
              <p className="text-gray-300 text-center">
                We believe in open communication and transparent operations, from token distribution to development roadmap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Meet the Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind BRAWL3D.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Alex Chen", role: "Founder & Game Designer", avatar: "👨‍🚀", origin: "Asia" },
              { name: "Sarah Johnson", role: "Lead Developer", avatar: "👩‍💻", origin: "North America" },
              { name: "Mike Rodriguez", role: "Blockchain Specialist", avatar: "🧙‍♂️", origin: "South America" },
              { name: "Emma Williams", role: "Community Manager", avatar: "👩‍🎤", origin: "Europe" },
              { name: "David Kim", role: "Art Director", avatar: "👨‍🎨", origin: "Asia" },
              { name: "Olivia Martinez", role: "Marketing Strategist", avatar: "👩‍💼", origin: "South America" },
              { name: "James Wilson", role: "UI/UX Designer", avatar: "👨‍🔬", origin: "North America" },
              { name: "Sophia Lee", role: "Content Creator", avatar: "👩‍🎨", origin: "Asia" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] rounded-md mb-4 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <motion.div 
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.3)] shadow-inner"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{member.avatar}</span>
                      </div>
                      <div className="absolute inset-0 rounded-full border-4 border-[var(--primary-purple)] opacity-30"></div>
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 neon-purple">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Investors */}
      <section className="py-16 relative bg-[var(--darker-bg)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-green)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Partners & Investors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The organizations supporting our vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[var(--darker-bg)] p-6 rounded-lg border border-gray-800 flex items-center justify-center"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Partner {partner}</h3>
                  <p className="text-sm text-gray-400">Strategic Partner</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or want to collaborate? Reach out to us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-purple">Email Us</h3>
                    <p className="text-gray-300">
                      <a href="mailto:contact@brawl3d.com" className="hover:text-[var(--primary-green)]">contact@brawl3d.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-purple">Telegram</h3>
                    <p className="text-gray-300">
                      Join our Telegram for the fastest support<br />
                      <a href="https://t.me/BRAWL3D_portal" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-green)]">t.me/BRAWL3D_portal</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 neon-green">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[var(--darker-bg)] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[var(--darker-bg)] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-[var(--darker-bg)] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Send Message <ArrowRight className="inline ml-2" size={18} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative bg-[var(--darker-bg)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-green)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="neon-purple">Join the</span> <span className="neon-green">Revolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of the BRAWL3D community and help shape the future of Web3 gaming.
            </p>
            <motion.a
              href="https://t.me/BRAWL3D_portal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary text-xl px-8 py-4"
            >
              Join Our Community <ArrowRight className="inline ml-2" size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
