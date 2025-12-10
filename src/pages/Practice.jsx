// Importing another component to be used inside this component (Component Composition concept)
import PracticeQuiz from '../components/practice/PracticeQuiz';

// Importing CSS for styling (Styling concept)
import '../styles/components/practice.css';

// Functional Component definition (Component concept)
const Practice = () => {

    // JSX return statement (JSX concept)
    return (
        // Applying CSS classes for layout and styling (Styling concept)
        <div className="practice-page">
            <div className="page-container">

                {/* JSX heading element (JSX Elements concept) */}
                <h1 className="page-title">Practice Problems</h1>

                {/* Rendering another component inside JSX (Component Composition concept) */}
                <PracticeQuiz />
            </div>
        </div>
    );
};

// Exporting component for routing (Export concept)
export default Practice;
