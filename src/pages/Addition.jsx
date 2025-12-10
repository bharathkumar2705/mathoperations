// Importing external CSS file for component styling (Styling concept)
import '../styles/components/content-page.css';

// Functional Component definition (Component concept)
const Addition = () => {
    // JSX return statement (JSX concept)
    return (
        // Applying multiple CSS classes (Styling concept)
        <div className="content-page addition-page">
            <div className="page-container">

                {/* Heading rendered using JSX (JSX concept) */}
                <h1 className="page-title">Addition</h1>
                
                {/* Using multiple sections inside a single component (Component Composition concept) */}
                <div className="content-sections">

                    {/* Section with heading and paragraph (JSX Elements concept) */}
                    <div className="content-section">
                        <h2 className="section-title green">What is Addition?</h2>
                        <p className="section-description">
                            Addition is the process of combining two or more numbers to find their total sum. 
                            It's one of the four basic arithmetic operations and forms the foundation of mathematics.
                        </p>
                        
                        {/* Static content with semantic HTML elements in JSX (HTML in JSX concept) */}
                        <div className="highlight-box green">
                            <h3 className="key-concepts">Key Concepts:</h3>
                            {/* Unordered list rendering in JSX (Lists concept) */}
                            <ul className="concept-list">
                                <li>The numbers being added are called "addends"</li>
                                <li>The result is called the "sum" or "total"</li>
                                <li>Addition is commutative: 3 + 5 = 5 + 3</li>
                                <li>Addition is associative: (2 + 3) + 4 = 2 + (3 + 4)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section showing examples (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title green">Examples</h2>
                        
                        {/* Example grid layout (Styling and JSX concept) */}
                        <div className="examples-grid">
                            <div className="example-section">
                                <h3 className="example-title">Simple Addition</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">  15</div>
                                        <div className="math-line">+ 23</div>
                                        <div className="math-line math-result">  38</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="example-section">
                                <h3 className="example-title">Multi-digit Addition</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">  247</div>
                                        <div className="math-line">+ 386</div>
                                        <div className="math-line math-result">  633</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section for tips and tricks (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title green">Tips and Tricks</h2>
                        
                        {/* Grid layout for tips (Styling concept) */}
                        <div className="tips-grid">
                            <div className="tip-section">
                                <h3 className="tip-title">Mental Math Strategies</h3>
                                {/* List of tips (Lists concept) */}
                                <ul className="tip-list">
                                    <li>Round numbers to make calculations easier</li>
                                    <li>Break larger numbers into smaller parts</li>
                                    <li>Look for patterns and number bonds</li>
                                    <li>Use the "counting on" method</li>
                                </ul>
                            </div>
                            
                            <div className="tip-section">
                                <h3 className="tip-title">Real-world Applications</h3>
                                <ul className="tip-list">
                                    <li>Calculating total cost when shopping</li>
                                    <li>Adding scores in games</li>
                                    <li>Combining measurements in cooking</li>
                                    <li>Planning time and schedules</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting component for use in routing (Export concept)
export default Addition;
