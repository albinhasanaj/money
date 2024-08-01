'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quiz = ({ params }: { params: { id: string } }) => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const onAnswerSelected = (answer: string, idx: number) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer === questions[activeQuestion].correctAnswer);
    };

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/posts/getQuiz`);
            const data = await res.json();
            const id = params.id;
            const quiz = data.find((quiz: any) => quiz._id === id);
            if (quiz) {
                setQuestions(quiz.questions);
            }
            setLoading(false);
            console.log(quiz)
        } catch (error) {
            console.error("Error fetching quiz:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [params.id]);

    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
        setChecked(false);
    };

    if (loading) {
        return <div className="flex items-center justify-center w-full min-h-screen bg-[#d1d1d1] text-gray-800">Loading...</div>;
    }

    if (!loading && questions.length === 0) {
        return <div className="flex items-center justify-center w-full min-h-screen bg-[#d1d1d1] text-gray-800">No quiz found.</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#d1d1d1] text-gray-800">
            <motion.h1
                className="text-5xl font-bold mb-6 drop-shadow-lg"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Quiz Page
            </motion.h1>
            <div className="text-center mb-4">
                <motion.h2
                    className="text-2xl mb-4 drop-shadow-md"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Question: {activeQuestion + 1}
                    <span>/{questions.length}</span>
                </motion.h2>
            </div>
            <div className='w-full flex justify-center'>
                <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md text-gray-800">
                    <AnimatePresence>
                        {!showResult ? (
                            <motion.div
                                key={activeQuestion}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold mb-4">{questions[activeQuestion]?.question}</h3>
                                <ul>
                                    {questions[activeQuestion]?.answers.map((answer: string, idx: number) => (
                                        <motion.li
                                            key={idx}
                                            onClick={() => onAnswerSelected(answer, idx)}
                                            className={`cursor-pointer p-2 rounded mb-2 transition-all duration-200 ease-in-out ${selectedAnswerIndex === idx
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 hover:bg-gray-300'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>{answer}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                {checked ? (
                                    <motion.button
                                        onClick={nextQuestion}
                                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-200 ease-in-out"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                                    </motion.button>
                                ) : (
                                    <button
                                        onClick={nextQuestion}
                                        disabled
                                        className="mt-4 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                                    >
                                        {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                                    </button>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold mb-4">Results</h3>
                                <p className="mb-2">
                                    Total Questions: <span>{questions.length}</span>
                                </p>
                                <p className="mb-2">
                                    Correct Answers: <span>{result.correctAnswers}</span>
                                </p>
                                <p className="mb-2">
                                    Wrong Answers: <span>{result.wrongAnswers}</span>
                                </p>
                                <motion.button
                                    onClick={() => window.location.reload()}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 ease-in-out"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Restart
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
