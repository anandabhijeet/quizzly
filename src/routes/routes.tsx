import {Routes, Route} from 'react-router-dom';
import LeaderBoard from '../pages/leaderBoard';
import QuizPage from '../pages/quizPage/QuizPage';
import ROUTES_PATH from '../constants/routes';
const QuizDashboardRoutes = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<LeaderBoard/>} />
        <Route path={ROUTES_PATH.QUIZ} element={<QuizPage/>}/>
       
        </Routes>
        </>
    )
}

export default QuizDashboardRoutes