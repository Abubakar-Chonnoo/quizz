import React, { FC, MouseEvent } from 'react';
import { IAnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
interface IProps {
    question: string;
    answers: string[];
    callback: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: IAnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: FC<IProps> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <Wrapper>
            <p className='number'>Question: { questionNr } / { totalQuestions } </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;