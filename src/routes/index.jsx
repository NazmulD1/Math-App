import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import RoadMap from '../pages/RoadMap';
import FreeStudy from '../pages/FreeStudy';
import Progress from '../pages/Progress';
import Settings from '../pages/Settings';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import NumberRecognitionPractice from '../pages/problemPages/NumberRecognitionPractice';
import LongAdditionPractice from '../pages/problemPages/LongAdditionPractice';
import BasicAdditionPractice from '../pages/problemPages/BasicAdditionPractice';
import BasicSubtractionPractice from '../pages/problemPages/BasicSubtractionPractice';
import LongSubtractionPractice from '../pages/problemPages/LongSubtractionPractice';
import BasicMultiplicationPractice from '../pages/problemPages/BasicMultiplicationPractice';
import LongMultiplicationPractice from '../pages/problemPages/LongMultiplicationPractice';
import BasicDivisionPractice from '../pages/problemPages/BasicDivisionPractice';
import DivisionWithRemaindersPractice from '../pages/problemPages/DivisionWithRemaindersPractice';
import LongDivisionPractice from '../pages/problemPages/LongDivisionPractice';
import FractionsPage from '../pages/problemPages/FractionsPage';
import DecimalsPage from '../pages/problemPages/DecimalsPage';
import BasicAddition from '../pages/roadMapPages/BasicAddition';
import BasicDivision from '../pages/roadMapPages/BasicDivision';
import BasicMultiplication from '../pages/roadMapPages/BasicMultiplication';
import BasicSubtraction from '../pages/roadMapPages/BasicSubtraction';
import NumberRecognition from '../pages/roadMapPages/NumberRecognition';
import LongAddition from '../pages/roadMapPages/LongAddition';
import LongSubtraction from '../pages/roadMapPages/LongSubtraction';
import LongDivision from '../pages/roadMapPages/LongDivision';
import LongMultiplication from '../pages/roadMapPages/LongMultiplication';
import Fractions from '../pages/roadMapPages/Fractions';
import Decimals from '../pages/roadMapPages/Decimals';
import DivisionWithRemainders from '../pages/roadMapPages/DivisionWithRemainders';
import BasicAdditionExam from '../pages/masteryExamPages/BasicAdditionExam';
import { generateBasicAdditionProblem, generateBasicSubtractionProblem, generateBasicMultiplicationProblem, generateBasicDivisionProblem, generateLongDivisionProblem } from '../utils/problemGenerators';
import { validateAnswer } from "../utils/answerValidators";
import BasicSubtractionExam from '../pages/masteryExamPages/BasicSubtraction';
import BasicMultiplicationExam from '../pages/masteryExamPages/BasicMultiplicationExam';
import BasicDivisionExam from '../pages/masteryExamPages/BasicDivision.Exam';
import LongAdditionExam from '../pages/masteryExamPages/LongAdditionExam';
import LongSubtractionExam from '../pages/masteryExamPages/LongSubtractionExam';
import LongMultiplicationExam from '../pages/masteryExamPages/LongMultiplicationExam';
import LongDivisionExam from '../pages/masteryExamPages/LongDivisionExam';
import NumberRecognitionExam from '../pages/masteryExamPages/NumberRecognitionExam';
import DivisionWithRemaindersExam from '../pages/masteryExamPages/DivisionWithRemaindersExam';

// Route configurations
export const routes = [
    {
        path: '/',
        element: <Home />,
        public: true
    },
    {
        path: '/login',
        element: <LogIn />,
        public: true
    },
    {
        path: '/signup',
        element: <SignUp />,
        public: true
    },
    {
        path: '/roadmap',
        element: <RoadMap />,
        public: false
    },
    {
        path: '/freestudy',
        element: <FreeStudy />,
        public: false
    },
    {
        path: '/progress',
        element: <Progress />,
        public: false
    },
    {
        path: '/settings',
        element: <Settings />,
        public: false
    },
    // Practice routes
    {
        path: '/practice/number-recognition-and-counting',
        element: <NumberRecognitionPractice />,
        public: false
    },
    {
        path: '/practice/basic-addition',
        element: <BasicAdditionPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/long-addition',
        element: <LongAdditionPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/basic-subtraction',
        element: <BasicSubtractionPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/long-subtraction',
        element: <LongSubtractionPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/basic-multiplication',
        element: <BasicMultiplicationPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/long-multiplication',
        element: <LongMultiplicationPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/basic-division',
        element: <BasicDivisionPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/division-with-remainders',
        element: <DivisionWithRemaindersPractice />, // Use the dedicated component
        public: false
    },
    {
        path: '/practice/long-division',
        element: <LongDivisionPractice />, // Updated to use the dedicated component
        public: false
    },
    {
        path: '/practice/fractions',
        element: <FractionsPage />, // Updated to use the new FractionsPage component
        public: false
    },
    {
        path: '/practice/decimals',
        element: <DecimalsPage />,
        public: false
    },
    {
        path: '/roadmap/basic-addition',
        element: <BasicAddition />,
        public: false
    },
    {
        path: '/roadmap/basic-subtraction',
        element: <BasicSubtraction />,
        public: false
    },
    {
        path: '/roadmap/basic-multiplication',
        element: <BasicMultiplication />,
        public: false
    },
    {
        path: '/roadmap/basic-division',
        element: <BasicDivision />,
        public: false
    },
    {
        path: '/roadmap/long-addition',
        element: <LongAddition />,
        public: false
    },
    {
        path: '/roadmap/long-subtraction',
        element: <LongSubtraction />,
        public: false
    },
    {
        path: '/roadmap/long-multiplication',
        element: <LongMultiplication />,
        public: false
    },
    {
        path: '/roadmap/long-division',
        element: <LongDivision />,
        public: false
    },
    {
        path: '/roadmap/division-with-remainders',
        element: <DivisionWithRemainders />,
        public: false
    },
    {
        path: '/roadmap/fractions',
        element: <Fractions />,
        public: false
    },
    {
        path: '/roadmap/decimals',
        element: <Decimals />,
        public: false
    },
    {
        path: '/roadmap/number-recognition-and-counting',
        element: <NumberRecognition />,
        public: false
    },
    {
        path: '/roadmap/basic-addition/exam',
        element: <BasicAdditionExam />,
        public: false
    },
    {
        path: '/roadmap/basic-subtraction/exam',
        element: <BasicSubtractionExam />,
        public: false
    },
    {
        path: '/roadmap/basic-multiplication/exam',
        element: <BasicMultiplicationExam />,
        public: false
    },
    {
        path: '/roadmap/basic-division/exam',
        element: <BasicDivisionExam />,
        public: false
    },
    {
        path: '/roadmap/long-addition/exam',
        element: <LongAdditionExam />,
        public: false
    },
    {
        path: '/roadmap/long-subtraction/exam',
        element: <LongSubtractionExam />,
        public: false
    },
    {
        path: '/roadmap/long-multiplication/exam',
        element: <LongMultiplicationExam />,
        public: false
    },
    {
        path: '/roadmap/long-division/exam',
        element: <LongDivisionExam />,
        public: false
    },
    {
        path: '/roadmap/number-recognition-and-counting/exam',
        element: <NumberRecognitionExam />,
        public: false
    },
    {
        path: '/roadmap/division-with-remainders/exam',
        element: <DivisionWithRemaindersExam />,
        public: false
    }
];