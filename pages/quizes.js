import NewTest from './NewTest';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Home from '.';

const quizes = () => {
    const quiz01 = {
        heading: 'INFO132 eksamen',
        description: 'Eksamen i faget INFO132, ingen hjelpemidler tillatt',
        questions: [
            {
                text: 'What color is a bear?',
                alternatives: [
                    ['Brown', true],
                    ['Yellow', false],
                    ['Blue', false],
                ],
            },
            {
                text: 'What is opposite of up?',
                alternatives: [
                    ['Down', true],
                    ['Left', false],
                    ['Right', false],
                ],
            },
        ],
    };

    const [quiz, setQuiz] = useState(quiz01);

    const changeHeading = (head) => {
        setQuiz({ ...quiz, heading: head });
        console.log(quiz);
    };

    const addQuestion = () => {
        const indexLen = quiz.questions.length;

        setQuiz({
            ...quiz,
            questions: [
                ...quiz.questions,
                {
                    text: 'New question',
                    alternatives: ['New alternative', true],
                },
            ],
        });
    };

    const removeAlternative = (e, i) => {
        const newObj = quiz;

        newObj.questions[i].alternatives.splice(e, 1);

        setQuiz({ ...newObj });
    };

    return (
        <div className={styles.container}>
            <h2>{quiz.heading}</h2>
            <h3>{quiz.description}</h3>
            <button onClick={() => changeHeading('hello world')}>
                Change heading
            </button>

            <button onClick={() => addQuestion()}>Add question</button>
            <div>
                {quiz.questions.map((value, i) => {
                    return (
                        <div key={i}>
                            <h3>{value.text}</h3>
                            {value.alternatives.map((element, j) => {
                                return (
                                    <div
                                        className={styles.alternatives}
                                        key={'q' + j}
                                        index={j}
                                    >
                                        <p>{element}</p>
                                        <button>Edit</button>
                                        <button
                                            onClick={() =>
                                                removeAlternative(element, i)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default quizes;
