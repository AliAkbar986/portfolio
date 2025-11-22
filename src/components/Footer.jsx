import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--bg-secondary)', textAlign: 'center' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    {resumeData.contact.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                    &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
