import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass"
                    style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', borderRadius: '24px', textAlign: 'center' }}
                >
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                        Get In Touch
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <a href={`mailto:${resumeData.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '100%', maxWidth: '400px', justifyContent: 'center', transition: 'background 0.3s' }} className="hover-bg">
                            <FaEnvelope style={{ color: 'var(--accent-primary)' }} />
                            {resumeData.contact.email}
                        </a>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
                            <FaPhone style={{ color: 'var(--accent-secondary)' }} />
                            {resumeData.contact.phone}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--accent-tertiary)' }} />
                            {resumeData.contact.location}
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <a href={`mailto:${resumeData.contact.email}`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                            Say Hello
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
