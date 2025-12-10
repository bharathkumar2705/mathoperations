// Importing CSS file for component styling (Styling concept)
import '../styles/components/content-page.css';

// Functional Component definition (Component concept)
const Multiplication = () => {

    // Using JavaScript array inside component to store table data (JavaScript in JSX concept)
    const timesTableData = [
        { table: 2, results: [2, 4, 6, 8, 10], pattern: 'Even numbers' },
        { table: 5, results: [5, 10, 15, 20, 25], pattern: 'Ends in 0 or 5' },
        { table: 9, results: [9, 18, 27, 36, 45], pattern: 'Digits add to 9' }
    ];

    // JSX return statement (JSX concept)
    return (
        // Multiple CSS classes applied to an element (Styling concept)
        <div className="content-page multiplication-page">
            <div className="page-container">

                {/* JSX heading element (JSX Elements concept) */}
                <h1 className="page-title">Multiplication</h1>
                
                {/* Grouping sections inside one component (Component Composition concept) */}
                <div className="content-sections">

                    {/* Static section with heading and paragraph (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title blue">Understanding Multiplication</h2>
                        <p className="section-description">
                            Multiplication is repeated addition. It's a way to quickly add the same number multiple times. 
                            For example, 4 × 3 means adding 4 three times: 4 + 4 + 4 = 12.
                        </p>
                        
                        {/* Highlight box with facts (HTML in JSX concept) */}
                        <div className="highlight-box blue">
                            <h3 className="key-concepts">Multiplication Facts:</h3>
                            {/* Rendering static list (Lists concept) */}
                            <ul className="concept-list">
                                <li>The numbers being multiplied are called "factors"</li>
                                <li>The result is called the "product"</li>
                                <li>Multiplication is commutative: 3 × 4 = 4 × 3</li>
                                <li>Any number × 0 = 0</li>
                                <li>Any number × 1 = that same number</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section for multiplication methods (JSX concept) */}
                    <div className="content-section">
                        <h2 className="section-title blue">Multiplication Methods</h2>
                        
                        {/* Example grid layout (Styling concept) */}
                        <div className="examples-grid">

                            {/* Example of arrays and groups (JSX concept) */}
                            <div className="example-section">
                                <h3 className="example-title">Arrays and Groups</h3>
                                <div className="example-box">
                                    <p className="math-center">3 × 4 = 12</p>

                                    {/* Rendering elements using map function (Lists concept) */}
                                    <div className="array-visual">
                                        {Array(12).fill(0).map((_, i) => (
                                            <div key={i} className="dot blue"></div>
                                        ))}
                                    </div>
                                    <p className="pattern-note">3 rows of 4 dots each</p>
                                </div>
                            </div>
                            
                            {/* Example of long multiplication (JSX concept) */}
                            <div className="example-section">
                                <h3 className="example-title">Long Multiplication</h3>
                                <div className="example-box">
                                    <div className="math-example">
                                        <div className="math-line">   23</div>
                                        <div className="math-line">×  15</div>
                                        <div className="math-line">  115  (23 × 5)</div>
                                        <div className="math-line">+ 230  (23 × 10)</div>
                                        <div className="math-line math-result">  345</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section rendering times tables dynamically (Lists concept) */}
                    <div className="content-section">
                        <h2 className="section-title blue">Times Tables & Patterns</h2>
                        
                        {/* Using map to generate multiple JSX elements from array (Lists concept) */}
                        <div className="times-tables-grid">
                            {timesTableData.map((data, index) => (
                                // Each child needs unique key (Lists concept)
                                <div key={index} className="times-table-box blue">
                                    <h4>{data.table} Times Table</h4>
                                    <div className="table-results">
                                        {data.results.map((result, i) => (
                                            <p key={i}>{data.table} × {i + 1} = {result}</p>
                                        ))}
                                    </div>
                                    <p className="pattern-note">Pattern: {data.pattern}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting component for routing (Export concept)
export default Multiplication;
