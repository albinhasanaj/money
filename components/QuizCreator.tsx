import React, { useState } from 'react';

const QuizCreator = () => {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ question: '', answers: ['', '', '', ''], correctAnswer: '' }]);

    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (questionIndex: number, answerIndex: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers[answerIndex] = value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].correctAnswer = value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answers: ['', '', '', ''], correctAnswer: '' }]);
    };

    const removeQuestion = (index: number) => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleSubmit = async () => {
        const newQuiz = {
            title,
            questions,
        };

        try {
            const response = await fetch('/api/quiz/createQuiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newQuiz),
            });

            if (response.ok) {
                alert('Quiz saved successfully!');
                setTitle('');
                setQuestions([{ question: '', answers: ['', '', '', ''], correctAnswer: '' }]);
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert('An error occurred while saving the quiz.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4">Create Quiz</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter quiz title"
                className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex flex-col gap-10">
                {questions.map((q, qIdx) => (
                    <div key={qIdx} className="mb-6">
                        <input
                            type="text"
                            value={q.question}
                            onChange={(e) => handleQuestionChange(qIdx, e.target.value)}
                            placeholder="Enter question"
                            className="w-full p-2 mb-4 border rounded"
                        />
                        {q.answers.map((answer, aIdx) => (
                            <input
                                key={aIdx}
                                type="text"
                                value={answer}
                                onChange={(e) => handleAnswerChange(qIdx, aIdx, e.target.value)}
                                placeholder={`Answer ${aIdx + 1}`}
                                className="w-full p-2 mb-2 border rounded"
                            />
                        ))}
                        <input
                            type="text"
                            value={q.correctAnswer}
                            onChange={(e) => handleCorrectAnswerChange(qIdx, e.target.value)}
                            placeholder="Correct Answer"
                            className="w-full p-2 mb-4 border rounded"
                        />
                        <div className="h-[2px] w-full bg-black" />
                    </div>
                ))}
            </div>
            <div className="flex gap-3">
                <button
                    onClick={addQuestion}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Question
                </button>
                <button
                    onClick={() => removeQuestion(questions.length - 1)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Remove Question
                </button>
                <button
                    onClick={handleSubmit}
                    className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Save Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizCreator;
