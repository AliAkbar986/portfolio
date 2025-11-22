import { motion } from 'framer-motion';
import { FaAws, FaCode, FaShieldAlt, FaServer, FaCloud, FaMicrosoft } from 'react-icons/fa';
import { SiGooglecloud, SiKubernetes } from 'react-icons/si';
import { resumeData } from '../data/resume';

const iconMap = {
    aws: FaAws,
    azure: FaMicrosoft,
    gcp: SiGooglecloud,
    devops: SiKubernetes,
    languages: FaCode,
    security: FaShieldAlt,
    'os & web servers': FaServer // Fallback if key exists, though my data has 'os & web servers' as just 'OS & Web Servers' in resume text but I used 'security' in resume.js. Let's check resume.js keys.
};

// resume.js keys: aws, azure, gcp, devops, languages, security.
// I'll use these keys.

const Skills = () => {
    return (
        <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold' }}>
                    Technical Skills
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {Object.entries(resumeData.skills).map(([category, skills], index) => {
                        const Icon = iconMap[category] || FaCloud;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass"
                                style={{ padding: '2rem', borderRadius: '16px' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>
                                        <Icon />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'capitalize' }}>
                                        {category.replace(/_/g, ' ')}
                                    </h3>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            style={{
                                                padding: '6px 12px',
                                                background: 'rgba(255,255,255,0.05)',
                                                borderRadius: '8px',
                                                fontSize: '0.9rem',
                                                border: '1px solid transparent',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.borderColor = 'var(--accent-primary)';
                                                e.target.style.background = 'rgba(56, 189, 248, 0.1)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.borderColor = 'transparent';
                                                e.target.style.background = 'rgba(255,255,255,0.05)';
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
