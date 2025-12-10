// Importing CSS file for component styling (Styling concept)
import '../styles/components/content-page.css';

// Functional Component definition (Component concept)
const Subtraction = () => {

    // JSX return statement (JSX concept)
    return (
        // Applying CSS classes for styling (Styling concept)
        <div className="content-page subtraction-page">
            <div className="page-container">

                {/* JSX heading element (JSX Elements concept) */}
                <h1 className="page-title">Subtraction</h1>
                
                {/* Grouping different sections in JSX (Component Composition concept) */}
                <div className="content-sections">

                    {/* Section explaining subtraction (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title red">What is Subtraction?</h2>
                        <p className="section-description">
                            Subtraction is the arithmetic operation of finding the difference between two numbers. 
                            It represents taking away or removing a quantity from another quantity.
                        </p>
                        
                        {/* Static list rendering (Lists concept) */}
                        <div className="highlight-box red">
                            <h3 className="key-concepts">Key Terms:</h3>
                            <ul className="concept-list">
                                <li>Minuend: The number being subtracted from</li>
                                <li>Subtrahend: The number being subtracted</li>
                                <li>Difference: The result of subtraction</li>
                                <li>Unlike addition, subtraction is not commutative</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section showing examples (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title red">Examples and Methods</h2>
                        
                        {/* Examples grid layout (Styling concept) */}
                        <div className="examples-grid">

                            {/* Example with standard subtraction (JSX concept) */}
                            <div className="example-section">
                                <h3 className="example-title">Standard Method</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">  85</div>
                                        <div className="math-line">- 37</div>
                                        <div className="math-line math-result">  48</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Example with borrowing (JSX concept) */}
                            <div className="example-section">
                                <h3 className="example-title">With Borrowing</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">  524</div>
                                        <div className="math-line">- 187</div>
                                        <div className="math-line math-result">  337</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section showing strategies (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title red">Strategies and Applications</h2>
                        
                        {/* Group of strategies (Component Composition concept) */}
                        <div className="strategies-section">
                            <h3 className="tip-title">Mental Math Techniques</h3>

                            {/* Techniques displayed in grid layout (Styling concept) */}
                            <div className="technique-grid">
                                <div className="technique-box red">
                                    <h4>Counting Back</h4>
                                    <p>Start from the larger number and count backwards</p>
                                </div>
                                <div className="technique-box red">
                                    <h4>Adding Up</h4>
                                    <p>Find what to add to get from smaller to larger number</p>
                                </div>
                            </div>
                            
                            {/* Real-world uses list (Lists concept) */}
                            <h3 className="tip-title">Real-world Uses</h3>
                            <ul className="tip-list">
                                <li>Calculating change after a purchase</li>
                                <li>Finding remaining time or distance</li>
                                <li>Determining differences in measurements</li>
                                <li>Budget planning and expense tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting component for routing (Export concept)
export default Subtraction;
