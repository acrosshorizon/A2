// import { ChangeEvent } from 'react';
// import { WPTASQuestion as WPTASQuestionType, multipleChoiceAnswerPosition } from '../../../@types/custom/WPTAS';
// import { WPTASFaceQuestion } from './WPTASFaceQuestion';
// import { WPTASNonImageQuestion } from './WPTASNonImageQuestion';
// import { WPTASPictureQuestion } from './WPTASPictureQuestion';
// import { PatientData } from '../../../@types/custom/Patient';

// export const WPTASQuestion = ({
// 	data,
// 	question,
// 	showCorrectAnswer,
// 	correctAnswerPositionOverride,
// 	comment,
// 	onCommentChange,
// 	...rest
// }: {
// 	data: PatientData;
// 	question: WPTASQuestionType;
// 	correctAnswerPositionOverride?: multipleChoiceAnswerPosition;
// 	showCorrectAnswer: boolean;
// 	setQuestionMultiChoiceGiven: (q_index: number | Array<number>, val: boolean) => void;
// 	setQuestionCorrect: (questionNum: number | Array<number>, val: boolean | Array<boolean>) => void;
// 	getResponseOnChange: (q_index: number) => (event: ChangeEvent<HTMLInputElement> | string) => void;
// 	error_: boolean;
// 	comment: string; // Add this line
//   	onCommentChange: (comment: string) => void;
// }) => {
// 	switch (question.questionType) {
// 		case 'face_question':
// 			return <WPTASFaceQuestion data={data} question={question} {...rest} />;
// 		case 'pictures_question':
// 			return <WPTASPictureQuestion data={data} question={question} {...rest} />;
// 		default:
// 			return (
// 				<WPTASNonImageQuestion
// 					data={data}
// 					showCorrectAnswer={showCorrectAnswer}
// 					correctAnswerPositionOverride={correctAnswerPositionOverride}
// 					question={question}
// 					comment={comment} // Pass the comment here
//           			onCommentChange={onCommentChange} // Pass the onCommentChange function here

// 					{...rest}
// 				/>
// 			);
// 	}
// };
