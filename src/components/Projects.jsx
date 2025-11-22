import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaProjectDiagram, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { resumeData } from '../data/resume';
import microservicesImg from '../assets/microservices.png';
import hybridCloudImg from '../assets/hybrid_cloud.png';

const GenericDiagram = ({ title }) => {
    let imgSrc = null;
    if (title.includes("Microservices")) imgSrc = microservicesImg;
    else if (title.includes("Hybrid Cloud")) imgSrc = hybridCloudImg;

    if (imgSrc) {
        return (
            <div style={{
                width: '100%',
                height: '400px',
                background: 'var(--bg-primary)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        );
    }

    return (
        <div style={{
            width: '100%',
            height: '300px',
            background: 'var(--bg-primary)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--glass-border)'
        }}>
            {/* Simple CSS Diagram Visualization */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div className="diagram-node" style={{ padding: '1rem', border: '2px solid var(--accent-primary)', borderRadius: '8px', color: 'var(--accent-primary)' }}>User</div>
                <div style={{ width: '50px', height: '2px', background: 'var(--text-secondary)' }}></div>
                <div className="diagram-node" style={{ padding: '1rem', border: '2px solid var(--accent-secondary)', borderRadius: '8px', color: 'var(--accent-secondary)' }}>Load Balancer</div>
                <div style={{ width: '50px', height: '2px', background: 'var(--text-secondary)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="diagram-node" style={{ padding: '1rem', border: '2px solid var(--accent-tertiary)', borderRadius: '8px', color: 'var(--accent-tertiary)' }}>Service A</div>
                    <div className="diagram-node" style={{ padding: '1rem', border: '2px solid var(--accent-tertiary)', borderRadius: '8px', color: 'var(--accent-tertiary)' }}>Service B</div>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Architecture Diagram: {title}
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold' }}>
                    Featured Projects
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{ padding: '2rem', borderRadius: '16px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                                <FaProjectDiagram />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                {project.description.substring(0, 100)}...
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tools.slice(0, 3).map((tool) => (
                                    <span key={tool} style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                                        {tool}
                                    </span>
                                ))}
                                {project.tools.length > 3 && <span style={{ fontSize: '0.8rem', padding: '4px 8px' }}>+{project.tools.length - 3} more</span>}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                                background: 'rgba(0,0,0,0.8)', zIndex: 1000,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
                            }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="glass"
                                style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', borderRadius: '16px', background: 'var(--bg-secondary)', position: 'relative' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer' }}
                                >
                                    <FaTimes />
                                </button>

                                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{selectedProject.title}</h2>

                                <div style={{ marginBottom: '2rem' }}>
                                    <GenericDiagram title={selectedProject.title} />
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Description</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.description}</p>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Key Results</h3>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                                        {selectedProject.results.map((result, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>{result}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Technologies</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {selectedProject.tools.map((tool) => (
                                            <span key={tool} style={{ padding: '6px 12px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '20px', color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
