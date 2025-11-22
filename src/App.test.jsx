import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { resumeData } from './data/resume';

// Mock the Experience component to avoid timeline library issues
vi.mock('./components/Experience', () => ({
    default: () => <div>Experience Section</div>
}));

describe('App', () => {
    it('renders the hero section with name', () => {
        render(<App />);
        expect(screen.getByText(resumeData.name)).toBeInTheDocument();
        expect(screen.getByText(resumeData.role)).toBeInTheDocument();
    });

    it('renders the skills section', () => {
        render(<App />);
        expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    });
});
