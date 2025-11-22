import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background elements could go here */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <img
                            src={profileImg}
                            alt={resumeData.name}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                border: '4px solid var(--accent-primary)',
                                boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Hello, I'm</h2>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1rem', lineHeight: 1.1 }}>
                        {resumeData.name}
                    </h1>
                    <h3 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                        {resumeData.role}
                    </h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        {resumeData.summary}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
