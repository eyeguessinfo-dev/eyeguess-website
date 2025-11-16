import { useState, useEffect } from 'react';
import PieChart3D from './PieChart3D';

const questions = [
  {
    id: 1,
    question: "How much revenue do you think you're losing from unautomated partnerships?",
    options: [
      { label: "Under $5k/month", value: "5k" },
      { label: "$5k-$20k/month", value: "20k" },
      { label: "Over $20k/month", value: "20k+" },
      { label: "Not sure", value: "unknown" }
    ]
  },
  {
    id: 2, 
    question: "How many potential partners are you not engaging due to manual processes?",
    options: [
      { label: "1-5 partners", value: "1-5" },
      { label: "5-15 partners", value: "5-15" },
      { label: "15+ partners", value: "15+" },
      { label: "Haven't tracked", value: "untracked" }
    ]
  },
  {
    id: 3,
    question: "How much time does your team spend on partner payments monthly?",
    options: [
      { label: "Under 10 hours", value: "10h" },
      { label: "10-40 hours", value: "40h" }, 
      { label: "Full-time role", value: "ft" },
      { label: "Multiple people", value: "team" }
    ]
  },
  {
    id: 4,
    question: "Ready to discover your partnership automation potential?",
    isEmail: true
  }
];

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (answer) => {
    setIsAnimating(true);
    setAnswers([...answers, answer]);
    
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnimating(false);
    }, 800);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email capture - integrate with your email service
    console.log('Email captured:', email);
    alert('Thanks! We\'ll send your partnership automation assessment shortly.');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (currentQuestion >= questions.length) {
    return (
      <div className="text-center py-12">
        <div className="text-matrix-green text-6xl mb-6">✓</div>
        <h3 className="text-2xl font-bold text-white mb-4">Assessment Complete!</h3>
        <p className="text-gray-300">Check your email for your personalized partnership automation report.</p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="py-20 px-4 matrix-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-headline font-bold mb-4 text-white">
          Discover Your Partnership Potential
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Take the 60-second assessment to see how much revenue you could automate
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-12">
          <div 
            className="bg-matrix-green h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="relative min-h-96">
          {/* Animated Pie Chart */}
          <PieChart3D 
            questionIndex={currentQuestion}
            isAnimating={isAnimating}
            answers={answers}
          />

          {/* Question & Options */}
          <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-2xl">
              {question.question}
            </h3>

            {question.isEmail ? (
              <form onSubmit={handleEmailSubmit} className="w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for results..."
                  className="w-full px-6 py-4 rounded-lg bg-gray-800 border border-matrix-green text-white text-lg mb-4"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-matrix-green text-gray-900 py-4 px-8 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors"
                >
                  Get My Assessment
                </button>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="bg-gray-800 hover:bg-matrix-green hover:text-gray-900 border border-gray-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-matrix-green"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
