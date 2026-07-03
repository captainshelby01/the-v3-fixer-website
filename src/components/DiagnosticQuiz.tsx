import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, RefreshCw, BarChart } from "lucide-react";
import { CONFIG } from "../config";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: { verbal: number; vocal: number; visual: number };
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When explaining a complex business idea under pressure, what happens?",
    options: [
      { text: "I ramble or repeat myself until I find the point.", scores: { verbal: 20, vocal: 100, visual: 100 } },
      { text: "I structure it instantly, but my voice gets shaky or runs out of breath.", scores: { verbal: 100, vocal: 20, visual: 80 } },
      { text: "I get stiff, fidget, or lose control of my body language/posture.", scores: { verbal: 80, vocal: 80, visual: 20 } },
      { text: "I present it logically and concisely with complete poise.", scores: { verbal: 100, vocal: 100, visual: 100 } }
    ]
  },
  {
    id: 2,
    text: "How would you describe your voice projection during a high-stakes meeting?",
    options: [
      { text: "My throat tightens, I speak too fast, or sound monotonous.", scores: { verbal: 80, vocal: 20, visual: 80 } },
      { text: "My voice is steady, but I use too many filler words ('um', 'basically', 'like').", scores: { verbal: 20, vocal: 80, visual: 100 } },
      { text: "My speech is fine, but I make awkward movements or avoid eye contact.", scores: { verbal: 80, vocal: 80, visual: 20 } },
      { text: "I project diaphragmatic power, controlled pacing, and strategic pauses.", scores: { verbal: 100, vocal: 100, visual: 100 } }
    ]
  },
  {
    id: 3,
    text: "In virtual meetings (Zoom/Teams) or on-stage, what is your biggest styling concern?",
    options: [
      { text: "My posture feels slouched, my camera angle is poor, or my background looks messy.", scores: { verbal: 90, vocal: 90, visual: 20 } },
      { text: "My sentences lack framework logic and structure, making it hard to follow.", scores: { verbal: 20, vocal: 80, visual: 90 } },
      { text: "My voice sounds flat, lacks pitch range, and struggles to hold attention.", scores: { verbal: 80, vocal: 20, visual: 90 } },
      { text: "I command attention with a sharp frame, dynamic gestures, and executive poise.", scores: { verbal: 100, vocal: 100, visual: 100 } }
    ]
  },
  {
    id: 4,
    text: "When hit with a sudden, unexpected objection or question, how do you stall?",
    options: [
      { text: "I use verbal fillers (um, ah, you know) repeatedly to buy time.", scores: { verbal: 20, vocal: 80, visual: 90 } },
      { text: "My volume drops, my throat feels dry, and I speak very quietly.", scores: { verbal: 90, vocal: 20, visual: 80 } },
      { text: "I look away, touch my face/neck, or display nervous micro-expressions.", scores: { verbal: 90, vocal: 90, visual: 20 } },
      { text: "I pause intentionally, breathe diaphragmatically, and answer with structure.", scores: { verbal: 100, vocal: 100, visual: 100 } }
    ]
  },
  {
    id: 5,
    text: "What feedback do you typically receive after delivering a report or presentation?",
    options: [
      { text: "They found it detailed, but I feel they missed the core takeaways.", scores: { verbal: 20, vocal: 90, visual: 90 } },
      { text: "They struggled to stay engaged due to my pacing or lack of energy.", scores: { verbal: 80, vocal: 20, visual: 90 } },
      { text: "They felt my presence or styling did not match the authority of the topic.", scores: { verbal: 90, vocal: 90, visual: 20 } },
      { text: "They were highly inspired, clear on the logic, and bought into the vision.", scores: { verbal: 100, vocal: 100, visual: 100 } }
    ]
  }
];

export default function DiagnosticQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ verbal: number; vocal: number; visual: number }[]>([]);
  const [finished, setFinished] = useState(false);

  const startQuiz = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setFinished(false);
  };

  const handleAnswerSelect = (scores: { verbal: number; vocal: number; visual: number }) => {
    const updatedAnswers = [...answers, scores];
    setAnswers(updatedAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  // Calculate final score averages out of 100
  const getAverageScores = () => {
    if (answers.length === 0) return { verbal: 0, vocal: 0, visual: 0 };
    const sum = answers.reduce(
      (acc, val) => ({
        verbal: acc.verbal + val.verbal,
        vocal: acc.vocal + val.vocal,
        visual: acc.visual + val.visual
      }),
      { verbal: 0, vocal: 0, visual: 0 }
    );
    return {
      verbal: Math.round(sum.verbal / answers.length),
      vocal: Math.round(sum.vocal / answers.length),
      visual: Math.round(sum.visual / answers.length)
    };
  };

  const finalScores = getAverageScores();
  const overallPresence = Math.round((finalScores.verbal + finalScores.vocal + finalScores.visual) / 3);

  // Formulate WhatsApp sharing link
  const handleWhatsAppResults = () => {
    const message = `Hi Winfrey! I just completed the V3 Speech & Presence Diagnostic on your website. Here are my results:

- Verbal Structure Score: ${finalScores.verbal}%
- Vocal Resonance Score: ${finalScores.vocal}%
- Visual Poise Score: ${finalScores.visual}%
- Overall Executive Presence: ${overallPresence}%

I would like to book a speech assessment and consult on how to fix my V3 communication bottlenecks.`;

    window.open(
      `https://wa.me/${CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Helper to determine evaluation text
  const getFeedbackSummary = () => {
    if (overallPresence < 50) {
      return "Critical V3 Bottleneck detected. Your communication is significantly restricting your career growth. Let's fix your verbal logic and vocal energy immediately.";
    }
    if (overallPresence < 80) {
      return "Substantial leadership potential. You have strong foundation pieces, but specific verbal clutter or vocal tension is diluting your room command. Let's optimize it.";
    }
    return "High Presence Score! You are communicating effectively, but you can refine your micro-expressions and keynote pacing to reach absolute supreme room command.";
  };

  return (
    <section id="v3quiz" className="py-24 bg-white relative overflow-hidden">
      {/* Visual Accent Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-nude-50/50 rounded-[2.5rem] border border-nude-200 p-8 sm:p-12 text-center shadow-xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
          
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!started && !finished && (
              // Intro State
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 text-gold-800 px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider font-bold uppercase">
                    Free V3 Presence Diagnostic
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
                  Audit Your Executive Voice & Presence
                </h2>
                <p className="text-sm sm:text-base text-nude-700 font-sans font-light leading-relaxed">
                  How do you perform when all eyes are on you? Take this 2-minute diagnostic based on the **V3 Method** to pinpoint your Verbal, Vocal, and Visual bottlenecks.
                </p>
                <div className="pt-4">
                  <button
                    onClick={startQuiz}
                    className="inline-flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Start V3 Assessment</span>
                    <ArrowRight className="w-4 h-4 text-gold-300" />
                  </button>
                </div>
              </motion.div>
            )}

            {started && !finished && (
              // Question State
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 text-left"
              >
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase text-nude-500">
                    <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                  </div>
                  <div className="h-1 w-full bg-nude-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest-900 transition-all duration-300 rounded-full"
                      style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 leading-snug">
                    {QUIZ_QUESTIONS[currentQuestion].text}
                  </h3>
                  <div className="grid grid-cols-1 gap-3.5 pt-2">
                    {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(option.scores)}
                        className="w-full text-left p-5 rounded-2xl border border-nude-200 bg-white hover:bg-nude-100/50 hover:border-nude-400 text-nude-800 hover:text-forest-950 font-sans text-sm sm:text-base font-light transition-all duration-200 cursor-pointer shadow-sm focus:outline-none"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {finished && (
              // Results State
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-600 bg-gold-100/40 px-3 py-1 rounded-full inline-block">
                    Your V3 Scorecard
                  </span>
                  <h2 className="font-serif text-3xl font-extrabold text-forest-950 leading-tight">
                    Assessment Complete
                  </h2>
                </div>

                {/* Score indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-2">
                  <div className="bg-white border border-nude-200 p-6 rounded-3xl space-y-2 shadow-sm text-center">
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-nude-400">Verbal (Logic)</span>
                    <span className="block text-4xl font-serif font-extrabold text-forest-900">{finalScores.verbal}%</span>
                    <div className="h-1.5 bg-nude-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${finalScores.verbal}%` }} />
                    </div>
                  </div>

                  <div className="bg-white border border-nude-200 p-6 rounded-3xl space-y-2 shadow-sm text-center">
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-nude-400">Vocal (Power)</span>
                    <span className="block text-4xl font-serif font-extrabold text-forest-900">{finalScores.vocal}%</span>
                    <div className="h-1.5 bg-nude-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-600 rounded-full" style={{ width: `${finalScores.vocal}%` }} />
                    </div>
                  </div>

                  <div className="bg-white border border-nude-200 p-6 rounded-3xl space-y-2 shadow-sm text-center">
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-nude-400">Visual (Poise)</span>
                    <span className="block text-4xl font-serif font-extrabold text-forest-900">{finalScores.visual}%</span>
                    <div className="h-1.5 bg-nude-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-500 rounded-full" style={{ width: `${finalScores.visual}%` }} />
                    </div>
                  </div>
                </div>

                {/* Overall Score */}
                <div className="bg-white border border-nude-200 rounded-3xl p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md text-left">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-forest-900 text-gold-300 rounded-2xl flex-shrink-0">
                      <BarChart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-forest-950">Overall Executive Presence</h4>
                      <p className="text-xs text-nude-600 leading-normal max-w-md mt-1">{getFeedbackSummary()}</p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right flex-shrink-0">
                    <span className="block text-xs font-mono font-bold uppercase text-nude-400">V3 Index</span>
                    <span className="text-4xl font-serif font-extrabold text-gold-600">{overallPresence}%</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                  <button
                    onClick={handleWhatsAppResults}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-nude-50 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-gold-300" />
                    <span>Send Scorecard to Winfrey</span>
                  </button>

                  <button
                    onClick={startQuiz}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-nude-100 hover:bg-nude-200 border border-nude-300 text-forest-950 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 text-forest-800" />
                    <span>Re-Audit Myself</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
