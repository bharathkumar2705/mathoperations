    import { Award, RefreshCw } from 'lucide-react'; //  Icon components
import { useState } from 'react'; //  useState Hook for managing state
import { questions } from '../../utils/questions'; //  Importing data

    const PracticeQuiz = () => { //  Functional Component
    // State variables
    const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question
    const [score, setScore] = useState(0); // Track score
    const [showResult, setShowResult] = useState(false); // Show correct/incorrect feedback
    const [selectedAnswer, setSelectedAnswer] = useState(''); // Track selected answer
    const [quizComplete, setQuizComplete] = useState(false); // Check if quiz is over

    //  Event handler for answer selection
    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        if (answer === questions[currentQuestion].correct) {
        setScore(score + 1); // Update score if correct
        }
        setShowResult(true);
        
        setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer('');
            setShowResult(false);
        } else {
            setQuizComplete(true);
        }
        }, 1500);
    };

    //  Reset quiz state
    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer('');
        setQuizComplete(false);
    };

    //  Conditional rendering based on score
    const getScoreMessage = () => {
        const percentage = (score / questions.length);
        if (percentage === 1) return "Perfect! Excellent work!";
        if (percentage >= 0.8) return "Great job! Well done!";
        if (percentage >= 0.6) return "Good effort! Keep practicing!";
        return "Keep practicing! You'll improve!";
    };

    //  Conditional rendering when quiz ends
    if (quizComplete) {
        return (
        <div className="quiz-complete">
            <Award className="completion-icon" /> {/* Icon component */}
            <h2 className="completion-title">Quiz Complete!</h2>
            <p className="final-score">
            Your final score: {score} out of {questions.length}
            </p>
            <div className="score-message">
            {getScoreMessage()}
            </div>
            <button onClick={resetQuiz} className="reset-button"> {/* 📌 Event handling */}
            <RefreshCw className="reset-icon" />
            Try Again
            </button>
        </div>
        );
    }

    return (
        <div className="quiz-container">
        <div className="quiz-header">
            <div className="question-info">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}/{questions.length}</span>
            </div>
            
            {/* 📌 Progress bar with dynamic width */}
            <div className="progress-bar">
            <div 
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
            </div>
        </div>

        <div className="question-section">
            <h2 className="question-text">
            {questions[currentQuestion].question} {/* 📌 Rendering from array */}
            </h2>
            
            {/* 📌 Mapping options to buttons */}
            <div className="options-grid">
            {questions[currentQuestion].options.map((option, index) => (
                <button
                key={index}
                onClick={() => !showResult && handleAnswer(option)}
                disabled={showResult}
                className={`option-button ${
                    showResult
                    ? option === questions[currentQuestion].correct
                        ? 'correct'
                        : option === selectedAnswer
                        ? 'incorrect'
                        : 'disabled'
                    : ''
                }`}
                >
                {option}
                </button>
            ))}
            </div>
        </div>

        {/* 📌 Conditional rendering for answer feedback */}
        {showResult && (
            <div className="result-section">
            {selectedAnswer === questions[currentQuestion].correct ? (
                <div className="correct-result">
                <Award className="result-icon" />
                <p>Correct!</p>
                </div>
            ) : (
                <div className="incorrect-result">
                <p>Incorrect. The answer is {questions[currentQuestion].correct}</p>
                </div>
            )}
            </div>
        )}
        </div>
    );
    };

    export default PracticeQuiz;
