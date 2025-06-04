import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NFTs = () => {
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
              <span className="gradient-text">NFTs & Collectibles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock special abilities and express yourself with BRAWL3D's meme-themed NFT collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NFT Overview */}
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
              <h2 className="text-3xl font-bold mb-6 neon-purple">NFT Strategy</h2>
              <p className="text-gray-300 mb-6">
                BRAWL3D NFTs are more than just collectibles - they provide unique gameplay advantages and special abilities that enhance your experience in the arena.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gameplay Advantage</h3>
                    <p className="text-gray-300">
                      Each NFT contains a unique ability that provides strategic advantages in the arena without being pay-to-win.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rarity Tiers</h3>
                    <p className="text-gray-300">
                      NFTs come in four rarity tiers: Common, Rare, Epic, and Legendary, each with increasingly powerful abilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community-First Distribution</h3>
                    <p className="text-gray-300">
                      NFTs will be distributed primarily through gameplay achievements, leaderboard rankings, and community engagement rather than direct sales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phase 2 Launch</h3>
                    <p className="text-gray-300">
                      NFTs will be introduced in Phase 2 of our roadmap, after the core gameplay and token ecosystem are established.
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
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="card aspect-square flex items-center justify-center"
                >
                  <div className="text-6xl">🐻</div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-sm text-blue-400">Common</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="card aspect-square flex items-center justify-center"
                >
                  <div className="text-6xl">🐂</div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-sm text-indigo-400">Rare</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="card aspect-square flex items-center justify-center"
                >
                  <div className="text-6xl">🤖</div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-sm text-purple-400">Epic</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="card aspect-square flex items-center justify-center"
                >
                  <div className="text-6xl">👑</div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-sm text-yellow-400">Legendary</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meme Skins Showcase */}
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
              <span className="gradient-text">Meme Skin Collection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Express yourself with these iconic meme characters in the arena.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Liquidation Face", rarity: "Legendary" },
              { name: "Billy the Bull", rarity: "Epic" },
              { name: "Bob the Bear", rarity: "Rare" },
              { name: "Gigachad", rarity: "Epic" },
              { name: "Zuck", rarity: "Rare" },
              { name: "The Trump", rarity: "Epic" },
              { name: "Bitmask", rarity: "Common" },
              { name: "Elon", rarity: "Legendary" },
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
                  skin.rarity === 'Rare' ? 'text-indigo-400' : 
                  'text-blue-400'
                }`}>
                  {skin.rarity}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Abilities */}
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
              <span className="gradient-text">Special Abilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each NFT grants a unique ability that provides strategic advantages in the arena.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 neon-purple">Common Abilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">⎵</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Quick Dash</h4>
                    <p className="text-gray-300">75% speed boost for 0.5 seconds</p>
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
              <h3 className="text-2xl font-bold mb-4 neon-green">Rare Abilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-400 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">⎵</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Orb Magnet</h4>
                    <p className="text-gray-300">7.5x radius attraction force</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 neon-purple">Epic Abilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">⎵</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Stealth Mode</h4>
                    <p className="text-gray-300">Invisible for 5 seconds</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 neon-green">Legendary Abilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">⎵</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Golden Growth</h4>
                    <p className="text-gray-300">40% growth + 50% speedboost for 1 sec</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Obtain */}
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
              <span className="gradient-text">How to Obtain NFTs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to add these powerful NFTs to your collection.
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
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center neon-purple">Gameplay Rewards</h3>
              <p className="text-gray-300 text-center">
                Earn NFTs by ranking on leaderboards, completing special achievements, and winning tournaments.
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
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center neon-green">Token Staking</h3>
              <p className="text-gray-300 text-center">
                Stake your BRAWL3D tokens to earn NFT drops and exclusive access to limited edition skins.
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
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center neon-purple">Marketplace</h3>
              <p className="text-gray-300 text-center">
                Trade with other players on our integrated NFT marketplace using BRAWL3D tokens.
              </p>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Coming Soon <ArrowRight className="inline ml-2" size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* NFT Marketplace */}
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
              <h2 className="text-3xl font-bold mb-6 neon-purple">NFT Marketplace</h2>
              <p className="text-gray-300 mb-6">
                Our integrated marketplace allows players to trade, sell, and purchase NFTs directly within the BRAWL3D ecosystem using our native token.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Zero Gas Fees</h3>
                    <p className="text-gray-300">
                      Trade without worrying about gas fees thanks to our Solana-based infrastructure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Instant Transfers</h3>
                    <p className="text-gray-300">
                      Enjoy instant NFT transfers with immediate gameplay benefits.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-purple)] flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community-Set Prices</h3>
                    <p className="text-gray-300">
                      Fair market value determined by player demand and rarity.
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
              <div className="card p-6">
                <h3 className="text-2xl font-bold mb-6 text-center neon-green">Marketplace Preview</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[var(--darker-bg)] rounded-md p-4 flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] mb-3 flex items-center justify-center">
                      <span className="text-3xl">🔒</span>
                    </div>
                    <h4 className="text-sm font-bold">Rare Skin</h4>
                    <p className="text-xs text-gray-400">500 BRAWL</p>
                  </div>
                  
                  <div className="bg-[var(--darker-bg)] rounded-md p-4 flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] mb-3 flex items-center justify-center">
                      <span className="text-3xl">🔒</span>
                    </div>
                    <h4 className="text-sm font-bold">Epic Ability</h4>
                    <p className="text-xs text-gray-400">1200 BRAWL</p>
                  </div>
                  
                  <div className="bg-[var(--darker-bg)] rounded-md p-4 flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] mb-3 flex items-center justify-center">
                      <span className="text-3xl">🔒</span>
                    </div>
                    <h4 className="text-sm font-bold">Common Bundle</h4>
                    <p className="text-xs text-gray-400">300 BRAWL</p>
                  </div>
                  
                  <div className="bg-[var(--darker-bg)] rounded-md p-4 flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-green)] mb-3 flex items-center justify-center">
                      <span className="text-3xl">🔒</span>
                    </div>
                    <h4 className="text-sm font-bold">Legendary Skin</h4>
                    <p className="text-xs text-gray-400">2500 BRAWL</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary"
                  >
                    Coming in Phase 2
                  </motion.button>
                </div>
              </div>
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
              <span className="neon-purple">Ready to</span> <span className="neon-green">Collect?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our community to stay updated on NFT releases and early access opportunities.
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

export default NFTs;
