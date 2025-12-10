    import { BookOpen, Menu } from 'lucide-react'; // 📌 Icons
import { useState } from 'react'; // 📌 useState hook
import { Link, useLocation } from 'react-router-dom'; // 📌 Navigation & location hooks
import '../styles/components/navigation.css';

    const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 📌 State for mobile menu
    const location = useLocation(); // 📌 Get current URL

    // 📌 Navigation items array
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/addition', label: 'Addition' },
        { path: '/subtraction', label: 'Subtraction' },
        { path: '/multiplication', label: 'Multiplication' },
        { path: '/division', label: 'Division' },
        { path: '/percentage', label: 'Percentage' },
        { path: '/practice', label: 'Practice' },
    ];

    // 📌 Toggle mobile menu
    const toggleMobileMenu = () => {
        
        setIsMenuOpen(!isMenuOpen);
    };

    // 📌 Close mobile menu
    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
        <div className="nav-container">
            <div className="nav-header">
            <Link to="/" className="nav-logo"> {/* 📌 Link to homepage */}
                <BookOpen className="nav-icon" />
                <span>MathMaster</span>
            </Link>
            
            {/* 📌 Desktop Navigation */}
            <div className="nav-menu">
                {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                    {item.label}
                </Link>
                ))}
            </div>

            {/* 📌 Mobile menu button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                <Menu className="nav-icon" />
            </button>
            </div>

            {/* 📌 Mobile Navigation */}
            {isMenuOpen && (
            <div className="mobile-menu">
                {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                >
                    {item.label}
                </Link>
                ))}
            </div>
            )}
        </div>
        </nav>
    );
    };

    export default Navigation;
