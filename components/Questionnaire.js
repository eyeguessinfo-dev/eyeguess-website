import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "Do you have recurring services or products in your business?",
    options: [
      { label: "Yes, monthly subscription services", value: "monthly_subscriptions", color: "from-green-400 to-emerald-500" },
      { label: "Yes, annual contracts or retainers", value: "annual_contracts", color: "from-cyan-400 to-blue-500" },
      { label: "Yes, but they're one-time purchases", value: "one_time_products", color: "from-purple-400 to-indigo-500" },
      { label: "Not yet, but planning to add them", value: "planning_recurring", color: "from-orange-400 to-red-500" },
      { label: "No recurring offerings", value: "no_recurring", color: "from-gray-400 to-gray-600" }
    ]
  },
  {
    id: 2,
    question: "When do you want to start automating your partnerships?",
    options: [
      { label: "Immediately - within 30 days", value: "immediate_30_days", color: "from-green-400 to-emerald-500" },
      { label: "Within 1-3 months", value: "1_3_months", color: "from-cyan-400 to-blue-500" },
      { label: "3-6 months from now", value: "3_6_months", color: "from-purple-400 to-indigo-500" },
      { label: "6+ months - just exploring", value: "6_plus_months", color: "from-gray-400 to-gray-600" }
    ]
  },
  {
    id: 3,
    question: "What's your budget for partnership automation?",
    options: [
      { label: "$2,500-$5,000 (Strategy & Audit)", value: "budget_2_5k", color: "from-green-400 to-emerald-500" },
      { label: "$5,000-$15,000 (Basic System)", value: "budget_5_15k", color: "from-cyan-400 to-blue-500" },
      { label: "$15,000-$50,000 (Full Implementation)", value: "budget_15_50k", color: "from-purple-400 to-indigo-500" },
      { label: "$50,000+ (Enterprise Solution)", value: "budget_50k_plus", color: "from-orange-400 to-red-500" },
      { label: "Need custom pricing", value: "custom_pricing", color: "from-gray-400 to-gray-600" }
    ]
  },
  {
    id: 4,
    question: "How many potential partners could you activate with the right system?",
    options: [
      { label: "1-10 partners immediately", value: "1_10_partners", color: "from-green-400 to-emerald-500" },
      { label: "10-25 partners in pipeline", value: "10_25_partners", color: "from-cyan-400 to-blue-500" },
      { label: "25-50+ partners identified", value: "25_50_partners", color: "from-purple-400 to-indigo-500" },
      { label: "Unlimited - entire network", value: "unlimited_network", color: "from-orange-400 to-red-500" },
      { label: "Not sure yet", value: "unknown_potential", color: "from-gray-400 to-gray-600" }
    ]
  },
  {
    id: 5,
    question: "Get Your Custom Partnership Automation Plan",
    subtitle: "We'll analyze your answers and send a tailored strategy matching your budget and timeline",
    isEmail: true
  }
];

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  const handleAnswer = async (answer) => {
    setIsVisible(false);
    await new Promise(resolve => setTimeout(resolve, 400));
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    setIsVisible(true);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    // Create the data to send
    const formData = {
      email: email,
      answers: answers,
      timestamp: new Date().toISOString(),
      source: 'website-questionnaire',
      questionSet: 'qualification-v1'
    };

    try {
      // Send to your API
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Qualified lead captured successfully!');
        setCurrentQuestion(currentQuestion + 1);
      } else {
        console.error('Failed to capture lead');
        // Still advance to success screen
        setCurrentQuestion(currentQuestion + 1);
      }
    } catch (error) {
      console.error('Error capturing lead:', error);
      // Fallback: still advance to success screen
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Success screen
  if (currentQuestion >= questions.length) {
    return (
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-matrix-green rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-32 h-32 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Custom Plan Generated!
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Based on your answers, we're creating your personalized partnership automation roadmap
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 max-w-md mx-auto"
          >
            <p className="text-green-400 font-semibold mb-4">📧 Check Your Email</p>
            <p className="text-gray-400">We're sending your assessment with:</p>
            <ul className="text-gray-300 mt-4 space-y-2 text-left">
              <li>• Budget-matched solutions</li>
              <li>• Timeline-specific implementation plan</li>
              <li>• Partner activation strategy</li>
              <li>• Next steps to get started</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles - Fixed positions */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-matrix-green rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: ['0%', '-10%', '0%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 300, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: -90 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-center"
            >
              {/* Progress indicator */}
              <motion.div 
                className="flex justify-center mb-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-full px-8 py-4 border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 font-mono text-sm">Question {currentQuestion + 1}/{questions.length}</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-green-400 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main content */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual side - Modern data visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Central orb */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 rounded-full filter blur-xl opacity-30"
                    />
                    
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Rotating rings */}
                      {[0, 1, 2].map((ring) => (
                        <motion.div
                          key={ring}
                          animate={{
                            rotate: ring % 2 ? 360 : -360,
                          }}
                          transition={{
                            duration: 15 + ring * 5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className={`absolute rounded-full border-2 border-green-400 opacity-${30 + ring * 20}`}
                          style={{
                            width: 200 + ring * 40,
                            height: 200 + ring * 40,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Floating data points - Only show for non-email questions */}
                    {!question.isEmail && question.options.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${question.options[i].color} shadow-lg`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        style={{
                          left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / question.options.length)}%`,
                          top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / question.options.length)}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Question side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-left"
                >
                  <motion.h2 
                    className="text-4xl lg:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {question.question}
                  </motion.h2>

                  {question.subtitle && (
                    <motion.p 
                      className="text-xl text-cyan-400 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {question.subtitle}
                    </motion.p>
                  )}

                  {question.isEmail ? (
                    <motion.form 
                      onSubmit={handleEmailSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="space-y-6"
                    >
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email for personalized results..."
                          className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-lg border-2 border-gray-600 text-white text-lg placeholder-gray-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      >
                        <span className="flex items-center justify-center">
                          Get My Custom Automation Plan
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      className="grid gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {question.options.map((option, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02, x: 10 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(option.value)}
                          className={`bg-gradient-to-r ${option.color} text-white py-4 px-6 rounded-2xl font-semibold text-lg text-left shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-lg border border-white/10`}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-70"></span>
                            {option.label}
                          </span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </motion.section>
  );
}
