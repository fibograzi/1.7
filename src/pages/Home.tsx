import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="cyberpunk-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block gradient-text glitch-effect">ENTER THE</span>
                <span className="neon-purple">MEME</span> <span className="neon-green">ARENA</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                The ultimate Web3 multiplayer game where memes battle for supremacy in a chaotic, fun environment. Grow, fight, and earn in the BRAWL3D universe.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Play Now <ArrowRight className="inline ml-2" size={18} />
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] relative overflow-hidden flex items-center justify-center shadow-[0_0_40px_rgba(181,39,252,0.6)]">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white opacity-30 rounded-full"></div>
                    <div className="text-4xl font-bold text-white z-10 glitch-text">BRAWL</div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full border-4 border-[var(--primary-purple)] opacity-70"
                    ></motion.div>
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
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-purple)] relative overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(39,252,158,0.6)]">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white opacity-30 rounded-full"></div>
                    <div className="text-xl font-bold text-white z-10 glitch-text">3D</div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full border-4 border-[var(--primary-green)] opacity-70"
                    ></motion.div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-full h-full"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-[var(--primary-purple)] rounded-full opacity-40"
                  ></motion.div>
                  
                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-[var(--primary-green)] rounded-full opacity-40"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-gray-400 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="text-[var(--primary-purple)]" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Game Concept Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Game Concept</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              BRAWL3D is a multiplayer 3D meme-arena game in agar.io-style where players battle as colorful spheres or with meme avatars in a chaotic, fun environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <div className="mb-4 text-[var(--primary-purple)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-purple">Fun-First Gameplay</h3>
              <p className="text-gray-300">
                Collect orbs to grow, use power-ups, and battle other players in a fast-paced, chaotic arena. No wallet required to start playing!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <div className="mb-4 text-[var(--primary-green)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-green">Web3 Integration</h3>
              <p className="text-gray-300">
                BRAWL3D token powers the ecosystem with rewards, skin purchases, and tournament access. Hold tokens to earn more points!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card"
            >
              <div className="mb-4 text-[var(--primary-purple)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-purple">Meme Skins & NFTs</h3>
              <p className="text-gray-300">
                Express yourself with meme-themed skins and unlock special abilities through NFTs. Collect, trade, and dominate the arena!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Highlights */}
      <section className="py-20 relative bg-[var(--darker-bg)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-green)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">BRAWL3D Token</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The BRAWL3D token powers our ecosystem, providing utility and rewards for players.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-purple">Fair Launch</h3>
                    <p className="text-gray-300">
                      Transparent launch via Solana with countdown, airdrops, and teaser visuals to build excitement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-green">In-Game Utility</h3>
                    <p className="text-gray-300">
                      Use tokens to purchase skins, score boosters, and gain access to exclusive tournaments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-purple">Reward System</h3>
                    <p className="text-gray-300">
                      Earn tokens through leaderboard rankings, achievements, and community engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 neon-green">Staking Benefits</h3>
                    <p className="text-gray-300">
                      Higher token holdings mean increased in-game point rewards and exclusive perks.
                    </p>
                  </div>
                </div>
              </div>
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
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-80 h-80 rounded-full"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-[var(--primary-purple)] opacity-70"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-[var(--primary-purple)] opacity-40"></div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(181,39,252,0.4)]"
                  ></motion.div>
                </motion.div>
                
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-64 h-64 rounded-full"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-[var(--primary-green)] opacity-70"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-[var(--primary-green)] opacity-40"></div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(39,252,158,0.4)]"
                  ></motion.div>
                </motion.div>
                
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] flex items-center justify-center z-10 shadow-[0_0_30px_rgba(181,39,252,0.6)]"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-full"></div>
                  <div className="text-3xl font-bold text-white">BRAWL3D</div>
                  <div className="absolute inset-0 rounded-full border border-white opacity-20"></div>
                </motion.div>
                
                <motion.div
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-20"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-purple)] shadow-[0_0_20px_rgba(181,39,252,0.8)]"></div>
                </motion.div>
                
                <motion.div
                  animate={{
                    x: [0, -10, 0, 10, 0],
                    y: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-20 left-20"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-green)] shadow-[0_0_15px_rgba(39,252,158,0.8)]"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Meme Skins */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent"></div>
        <div className="cyberpunk-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Meme Skins</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Express yourself with these iconic meme characters in the arena.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Liquidation Face", rarity: "Legendary" },
              { name: "Billy the Bull", rarity: "Epic" },
              { name: "Gigachad", rarity: "Rare" },
              { name: "The Trump", rarity: "Epic" },
            ].map((skin, index) => (
              <motion.div
                key={skin.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] rounded-md mb-4 flex items-center justify-center">
                  <span className="text-6xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-1 neon-purple">{skin.name}</h3>
                <p className={`text-sm ${
                  skin.rarity === 'Legendary' ? 'text-yellow-400' : 
                  skin.rarity === 'Epic' ? 'text-purple-400' : 
                  'text-indigo-400'
                }`}>
                  {skin.rarity}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <motion.a
              href="/nfts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              View All Skins <ArrowRight className="inline ml-2" size={18} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
