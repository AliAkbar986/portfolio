import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Work Experience
                </motion.h2>

                <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        background: 'var(--glass-border)',
                        transform: 'translateX(-50%)',
                        borderRadius: '2px'
                    }} className="timeline-line" />

                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                marginBottom: '4rem',
                                position: 'relative',
                                width: '100%'
                            }}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            {/* Icon */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(-50%)',
                                width: '40px',
                                height: '40px',
                                background: 'var(--accent-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                                boxShadow: '0 0 10px var(--accent-primary)'
                            }}>
                                <FaBriefcase style={{ color: '#fff' }} />
                            </div>

                            {/* Content Card */}
                            <div style={{
                                width: '45%',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                position: 'relative',
                                marginLeft: index % 2 !== 0 ? '3rem' : '0',
                                marginRight: index % 2 === 0 ? '3rem' : '0',
                                textAlign: index % 2 === 0 ? 'right' : 'left'
                            }}>
                                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{exp.company}</h4>
                                <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
                                    {exp.period}
                                </span>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; transform: none !important; }
          .timeline-item { justify-content: flex-start !important; margin-bottom: 3rem !important; }
          .timeline-item > div:nth-child(2) { left: 20px !important; transform: translateX(-50%) !important; }
          .timeline-item > div:last-child { width: calc(100% - 60px) !important; margin-left: 60px !important; margin-right: 0 !important; text-align: left !important; }
        }
      `}</style>
        </section>
    );
};

export default Experience;
