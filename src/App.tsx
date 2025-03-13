import React from 'react';
import { Github, Instagram, Mail, MessageCircle, ExternalLink, Linkedin, Twitter } from 'lucide-react';

function App() {
  const portfolioItems = [
    {
      title: "BoostupMedia",
      image: "/images/WD6.png", // Updated path
      url: "https://boostupmedia.in/"
    },
    {
      title: "DGineers",
      image: "/images/WD1.png", // Updated path
      url: "https://dgineers.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Floating Navigation */}
      <nav className="nav-container fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-8">
          {['home', 'about', 'portfolio', 'contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-item group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="writing-mode-vertical text-blue-600 group-hover:text-blue-800">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 mt-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </a>
          ))}
        </div>
      </nav>

      <main className="pl-16"> {/* Added padding to prevent content from going under navbar */}
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-r from-blue-50 to-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=800')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-6 py-32 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8 animate-float animate-glow">
                <img 
                  src="/images/Formal1.jpg" // Updated path
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h1 className="text-6xl font-bold gradient-text mb-4 animate-slideUp">Neeraj Madkar</h1>
              <p className="text-xl text-gray-600 animate-slideUp delay-200">Web Designer | UI/UX Expert</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center animate-scale">About Me</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4 animate-slideUp delay-200">
                I'm Neeraj Madkar, a passionate Web Designer & UI/UX Expert, dedicated to crafting visually stunning and high-converting websites. With a strong foundation in front-end development, user experience design, and digital strategy, I help businesses establish a powerful online presence.
              </p>
              <p className="animate-slideUp delay-400">
                I believe focusing on aesthetics + functionality for maximum impact, designing with a data-driven and user-first approach and helping brands turn their websites into lead-generating machines. Let's bring your vision to life!
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center animate-scale">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"> {/* Added max-w-4xl and mx-auto for centering */}
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Portfolio+Image';
                      }} // Fallback image if loading fails
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                    >
                      View Website 
                      <ExternalLink className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="footer-gradient py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-white mb-12 text-center animate-scale">Get in Touch</h2>
              
              {/* Social Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <a 
                  href="https://www.instagram.com/madkarneeraj_13?igsh=YWpjM29uc2ZqZjlm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="social-icon-container flex items-center space-x-3">
                    <Instagram className="w-6 h-6 text-white" />
                    <span className="text-white group-hover:text-blue-200 transition-colors">Instagram</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/+918888769281" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="social-icon-container flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <span className="text-white group-hover:text-blue-200 transition-colors">WhatsApp</span>
                  </div>
                </a>

                <a 
                  href="mailto:neerajmadkar35@gmail.com" 
                  className="footer-glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="social-icon-container flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-white" />
                    <span className="text-white group-hover:text-blue-200 transition-colors">Email</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/Manialer35" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="social-icon-container flex items-center space-x-3">
                    <Github className="w-6 h-6 text-white" />
                    <span className="text-white group-hover:text-blue-200 transition-colors">GitHub</span>
                  </div>
                </a>
              </div>

              {/* Additional Social Links */}
              <div className="mt-12 flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/madkarneeraj35?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>

              {/* Enhanced Copyright Section */}
              <div className="mt-16 copyright-section py-8 px-4 rounded-t-3xl">
                <div className="text-center text-white">
                  <p className="text-lg font-semibold mb-2">© 2025 Neeraj Madkar</p>
                  <p className="text-sm opacity-80">All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;