// Importing CSS for styling (Styling concept)
import '../styles/components/content-page.css';

// Functional Component definition (Component concept)
const Percentage = () => {

    // JavaScript array storing conversion examples (JavaScript in JSX concept)
    const conversionData = [
        {
            title: 'Percentage to Decimal',
            examples: ['25% → 25 ÷ 100 = 0.25', '75% → 75 ÷ 100 = 0.75', '150% → 150 ÷ 100 = 1.5']
        },
        {
            title: 'Decimal to Percentage',
            examples: ['0.25 → 0.25 × 100 = 25%', '0.75 → 0.75 × 100 = 75%', '1.5 → 1.5 × 100 = 150%']
        },
        {
            title: 'Fraction to Percentage',
            examples: ['1/4 → 0.25 → 25%', '3/4 → 0.75 → 75%', '1/2 → 0.5 → 50%']
        }
    ];

    // JSX return statement (JSX concept)
    return (
        // Applying multiple CSS classes (Styling concept)
        <div className="content-page percentage-page">
            <div className="page-container">

                {/* JSX heading element (JSX Elements concept) */}
                <h1 className="page-title">Percentages</h1>
                
                {/* Grouping different topic sections (Component Composition concept) */}
                <div className="content-sections">

                    {/* Section explaining percentages (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title yellow">Understanding Percentages</h2>
                        <p className="section-description">
                            A percentage is a way of expressing a number as a fraction of 100. 
                            The word "percent" means "per hundred" and is represented by the % symbol.
                        </p>
                        
                        {/* Static key concepts list (Lists concept) */}
                        <div className="highlight-box yellow">
                            <h3 className="key-concepts">Key Concepts:</h3>
                            <ul className="concept-list">
                                <li>50% = 50/100 = 1/2 = 0.5</li>
                                <li>25% = 25/100 = 1/4 = 0.25</li>
                                <li>100% = the whole amount</li>
                                <li>Percentages can be greater than 100%</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section with problem types (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title yellow">Types of Percentage Problems</h2>
                        
                        {/* Static problem examples (HTML in JSX concept) */}
                        <div className="percentage-types-grid">
                            <div className="percentage-type-box yellow">
                                <h3>Find Percentage Of</h3>
                                <p className="problem-text">What is 20% of 80?</p>
                                <p className="solution-text">20/100 × 80 = 16</p>
                            </div>
                            
                            <div className="percentage-type-box yellow">
                                <h3>Find What Percent</h3>
                                <p className="problem-text">15 is what % of 60?</p>
                                <p className="solution-text">(15/60) × 100 = 25%</p>
                            </div>
                            
                            <div className="percentage-type-box yellow">
                                <h3>Find the Whole</h3>
                                <p className="problem-text">30% of what is 24?</p>
                                <p className="solution-text">24 ÷ 0.30 = 80</p>
                            </div>
                        </div>
                    </div>

                    {/* Section with real-world examples (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title yellow">Real-World Applications</h2>
                        
                        {/* Example grid layout (Styling concept) */}
                        <div className="examples-grid">
                            <div className="example-section">
                                <h3 className="example-title">Shopping & Discounts</h3>
                                <div className="example-box yellow">
                                    <p className="problem-text">Item costs $50, 20% discount:</p>
                                    <p className="solution-text">Discount = $50 × 0.20 = $10</p>
                                    <p className="solution-text">Final price = $50 - $10 = $40</p>
                                </div>
                            </div>
                            
                            <div className="example-section">
                                <h3 className="example-title">Tips & Tax</h3>
                                <div className="example-box yellow">
                                    <p className="problem-text">Bill is $30, 15% tip:</p>
                                    <p className="solution-text">Tip = $30 × 0.15 = $4.50</p>
                                    <p className="solution-text">Total = $30 + $4.50 = $34.50</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Two-column list layout (Lists concept) */}
                        <div className="other-uses">
                            <h3 className="tip-title">Other Uses</h3>
                            <div className="uses-grid">
                                <div className="uses-column">
                                    <ul className="tip-list">
                                        <li>Test scores and grades</li>
                                        <li>Interest rates and loans</li>
                                        <li>Population growth statistics</li>
                                    </ul>
                                </div>
                                <div className="uses-column">
                                    <ul className="tip-list">
                                        <li>Success rates and probabilities</li>
                                        <li>Budget allocation</li>
                                        <li>Data analysis and surveys</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section rendering list dynamically (Lists concept) */}
                    <div className="content-section">
                        <h2 className="section-title yellow">Converting Between Forms</h2>
                        
                        {/* Using map() to create multiple boxes dynamically (Lists concept) */}
                        <div className="conversion-grid">
                            {conversionData.map((conversion, index) => (
                                // Key attribute for list rendering (Lists concept)
                                <div key={index} className="conversion-box yellow">
                                    <h3>{conversion.title}</h3>
                                    <div className="conversion-examples">
                                        {conversion.examples.map((example, i) => (
                                            <p key={i}>{example}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting the component for routing (Export concept)
export default Percentage;
