// Importing modules (Import concept)
import { Award, ChevronRight, Divide, Minus, Percent, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/components/home.css';

// Functional Component (Component concept)
const Home = () => {

    // JavaScript objects and arrays inside component (JavaScript in JSX concept)
    const features = [
        { icon: Plus, title: 'Addition', description: 'Learn how to add numbers with examples and tips', path: '/addition', colorClass: 'green' },
        { icon: Minus, title: 'Subtraction', description: 'Master subtraction with step-by-step guides', path: '/subtraction', colorClass: 'red' },
        { icon: X, title: 'Multiplication', description: 'Understand multiplication through patterns', path: '/multiplication', colorClass: 'blue' },
        { icon: Divide, title: 'Division', description: 'Learn division concepts and techniques', path: '/division', colorClass: 'purple' },
        { icon: Percent, title: 'Percentage', description: 'Master percentage calculations and applications', path: '/percentage', colorClass: 'yellow' },
        { icon: Award, title: 'Practice', description: 'Test your knowledge with practice problems', path: '/practice', colorClass: 'indigo' }
    ];

    // JSX return statement (JSX concept)
    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-content">
                    {/* JSX element rendering (JSX concept) */}
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">MathMaster</span>
                    </h1>

                    {/* Embedding expressions in JSX (JSX Expressions concept) */}
                    <p className="hero-description">
                        Learn mathematical operations through interactive lessons, examples, and step-by-step explanations. 
                        Master addition, subtraction, multiplication, division, and percentage calculations.
                    </p>

                    {/* Navigation link using react-router (Routing concept) */}
                    <Link to="/addition" className="cta-button">
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Rendering lists in JSX using map() (Lists concept) */}
            <div className="features-grid">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        // Key attribute for list rendering (Lists concept)
                        <Link key={index} to={feature.path} className="feature-card">
                            {/* Applying CSS classes dynamically (Styling concept) */}
                            <div className={`feature-icon ${feature.colorClass}`}>
                                <IconComponent className="icon" />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="learn-more">
                                Learn More <ChevronRight className="chevron-icon" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

// Exporting the component (Export concept)
export default Home;
