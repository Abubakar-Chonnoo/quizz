import { shuffleArray } from './utils';

export interface IQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export interface IQuestionState extends IQuestion {
    answers: string[];
}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // 1st await = for data
    // 2nd await = convert to json
    const data = await (await fetch(endpoint)).json();
    // console.log(data);
    return data.results.map((question: IQuestion) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),

        }
    ))
}