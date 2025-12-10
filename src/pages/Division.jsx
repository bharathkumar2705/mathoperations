// Importing CSS for styling (Styling concept)
import '../styles/components/content-page.css';

// Functional Component definition (Component concept)
const Division = () => {
    // JSX return statement (JSX concept)
    return (
        // Applying multiple CSS classes (Styling concept)
        <div className="content-page division-page">
            <div className="page-container">

                {/* JSX heading element (JSX Elements concept) */}
                <h1 className="page-title">Division</h1>
                
                {/* Using multiple child sections in a single component (Component Composition concept) */}
                <div className="content-sections">

                    {/* Section with heading and paragraph (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title purple">What is Division?</h2>
                        <p className="section-description">
                            Division is the process of splitting a number into equal groups or finding how many times 
                            one number fits into another. It's the inverse operation of multiplication.
                        </p>
                        
                        {/* Static box showing key vocabulary (HTML in JSX concept) */}
                        <div className="highlight-box purple">
                            <h3 className="key-concepts">Division Vocabulary:</h3>
                            {/* Rendering a static list (Lists concept) */}
                            <ul className="concept-list">
                                <li>Dividend: The number being divided</li>
                                <li>Divisor: The number dividing the dividend</li>
                                <li>Quotient: The result of division</li>
                                <li>Remainder: What's left over (if any)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section describing methods of division (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title purple">Division Methods</h2>
                        
                        {/* Grid layout for examples (Styling concept) */}
                        <div className="examples-grid">
                            <div className="example-section">
                                <h3 className="example-title">Short Division</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">84 ÷ 4 = 21</div>
                                        <div className="division-note">
                                            Think: How many 4s go into 84?
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="example-section">
                                <h3 className="example-title">Long Division</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">156 ÷ 12 = 13</div>
                                        <div className="division-note">
                                            Step by step process
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Demonstrating real-life example of division (JSX concept) */}
                        <div className="division-sharing purple">
                            <h3 className="tip-title">Division as Sharing</h3>
                            <p>
                                If you have 12 cookies and want to share them equally among 3 friends, 
                                you divide: 12 ÷ 3 = 4 cookies per friend.
                            </p>
                        </div>
                    </div>

                    {/* Section for division facts and tips (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title purple">Division Facts & Tips</h2>
                        
                        {/* Grid layout for tips (Styling concept) */}
                        <div className="tips-grid">
                            <div className="tip-section">
                                <h3 className="tip-title">Important Rules</h3>
                                {/* Rendering a static list (Lists concept) */}
                                <ul className="tip-list">
                                    <li>Any number ÷ 1 = that same number</li>
                                    <li>Any number ÷ itself = 1</li>
                                    <li>0 ÷ any number = 0</li>
                                    <li>Division by 0 is undefined</li>
                                    <li>Check your answer by multiplying</li>
                                </ul>
                            </div>
                            
                            <div className="tip-section">
                                <h3 className="tip-title">Real-world Examples</h3>
                                <ul className="tip-list">
                                    <li>Splitting bills among friends</li>
                                    <li>Calculating price per item</li>
                                    <li>Organizing items into equal groups</li>
                                    <li>Finding average values</li>
                                    <li>Recipe conversions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting the component for use in routing (Export concept)
export default Division;
