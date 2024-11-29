import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import Link from 'next/link'; // Import Link from next/link
import links from '@data/PageLink/pageLink.json'; // Import page links from JSON
import socialLinks from '@data/SocialMediaLink/socialMediaLink.json'; // Import social media links from JSON

const Footer = () => {
    return (
        <footer className=' w-full text-white'>
            <section className="bg-gray-800 p-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Quick Links Section (Left Aligned) */}
                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>
                                            <p className="text-sm text-gray-400 hover:text-white">{link.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us Section (Left Aligned) */}
                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const Icon = FaFacebook; // Default icon (for all cases)
                                    switch (social.icon) {
                                        case 'FaFacebook':
                                            return (
                                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                                    <FaFacebook size={24} />
                                                </a>
                                            );
                                        case 'FaTwitter':
                                            return (
                                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                                    <FaTwitter size={24} />
                                                </a>
                                            );
                                        case 'FaLinkedin':
                                            return (
                                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                                    <FaLinkedin size={24} />
                                                </a>
                                            );
                                        case 'FaInstagram':
                                            return (
                                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                                    <FaInstagram size={24} />
                                                </a>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </div>

                        {/* About Section (Right Aligned) */}
                        <div className="text-right">
                            <h3 className="text-xl font-bold mb-4">About</h3>
                            <p className="text-md text-justify">
                                Researchify is a platform dedicated to helping you with all your research needs. We offer
                                a variety of services to assist you in your research journey.
                            </p>
                        </div>

                        {/* Contact Section (Right Aligned) */}
                        <div className="text-right">
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <ul>
                                <li><p className="text-sm text-gray-400">Email: contact@researchify.com</p></li>
                                <li><p className="text-sm text-gray-400">Phone: +123 456 7890</p></li>
                                <li><p className="text-sm text-gray-400">Address: 123 Research St, City, Country</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center">
                <p className="text-sm p-1 bg-gray-900">© 2024 Researchify. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
