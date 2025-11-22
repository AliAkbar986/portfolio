import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            background: scrolled ? 'var(--glass-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    {resumeData.name.split(' ')[0]}<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.3s' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden" style={{ display: 'none' }}>
                    {/* Note: I'm using inline styles for simplicity in this artifact, but in a real app I'd use a CSS module or the global CSS with classes. 
              I'll add a media query in index.css for the .md-hidden class or similar if I were using Tailwind, but here I'm using vanilla CSS + inline for quick iteration.
              Actually, I should rely on classes defined in index.css or just simple inline styles with media queries? 
              React inline styles don't support media queries. 
              I will assume the user has a way to handle responsiveness or I should add media queries to index.css.
              For now, I'll stick to a simple desktop-first approach and add mobile styles in index.css later.
          */}
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', cursor: 'pointer' }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Placeholder for now, will implement properly with CSS classes */}
        </nav>
    );
};

export default Navbar;
