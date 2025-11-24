import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, MapPin, Phone, Coffee } from 'lucide-react';
import PropTypes from 'prop-types';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press Kit', href: '#press' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Accessibility', href: '#accessibility' },
  ],
};

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/StarKnightt/Coffee-Website',
    ariaLabel: 'Visit our GitHub repository'
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    url: 'https://x.com/Star_Knight12',
    ariaLabel: 'Follow us on Twitter'
  },
  { 
    name: 'Email', 
    icon: Mail, 
    url: 'mailto:hello@quantumcoffee.com',
    ariaLabel: 'Send us an email'
  },
  { 
    name: 'Support', 
    icon: Coffee, 
    url: 'https://buymeacoffee.com/prasen',
    ariaLabel: 'Buy us a coffee'
  },
];

const contactInfo = [
  { icon: MapPin, text: '42 Quantum Lane, Nebula District, Universe 616' },
  { icon: Phone, text: '+1 (555) QUANTUM' },
  { icon: Mail, text: 'hello@quantumcoffee.com' },
];

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-quantum-orange" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple">
                  Vitality Coffee
                </h2>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Experience organic excellence in every cup. Sustainably sourced, expertly roasted, 
                and crafted for your wellness. Coffee that's good for you and good for the planet.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-500 text-sm">
                    <item.icon className="w-4 h-4 mt-1 text-quantum-orange flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <FooterLinksSection title="Company" links={footerLinks.company} delay={0.1} />
          <FooterLinksSection title="Support" links={footerLinks.support} delay={0.2} />
          <FooterLinksSection title="Legal" links={footerLinks.legal} delay={0.3} />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-sm text-center md:text-left"
          >
            &copy; {new Date().getFullYear()} Vitality Coffee Co. All rights reserved.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-pink" />
    </footer>
  );
}

const FooterLinksSection = React.memo(({ title, links, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-3" role="list">
      {links.map((link) => (
        <li key={link.label}>
          <a 
            href={link.href}
            className="text-gray-400 hover:text-quantum-orange transition-colors duration-300 text-sm focus:outline-none focus:text-quantum-orange"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
));

FooterLinksSection.displayName = 'FooterLinksSection';

FooterLinksSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  delay: PropTypes.number,
};

const SocialLink = React.memo(({ name, icon: Icon, url, ariaLabel }) => (
  <motion.a 
    href={url}
    className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-quantum-orange hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-quantum-orange"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    role="listitem"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
));

SocialLink.displayName = 'SocialLink';

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default Footer;