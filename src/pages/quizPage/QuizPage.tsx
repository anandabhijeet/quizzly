import React, { useState, useEffect } from "react";
import { QuestionsState, Difficulty } from "../../api/API";
import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./QuizPage.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ButtonWrapper } from "./QuizPage.styles";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
type Props = {};

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
const QuizPage = (props: Props) => {

  const { data} = useAppSelector((state)=>state);
  const navigate = useNavigate();
  
   
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    // const newQuestions = await fetchQuizQuestions(
    //   TOTAL_QUESTIONS,
    //   Difficulty.EASY
    // );
    
    if(data?.length === 10){setQuestions(data);}
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  // const startCustomTrivia = (mode:string, category:string) => {
  //     console.log("mode and category",mode, category)
  // }
 
  useEffect(() => {
    startTrivia();
  }, []);

  React.useEffect(()=>{
    if(userAnswers.length === 10){
      // setGameOver(false)
      // setUserAnswers([])
      // navigate("/")
      setTimeout(()=>{
        setGameOver(false)
        setUserAnswers([])
        navigate("/")
      }, 2000)
    }
  }, [navigate, userAnswers])


  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  const userAnswer = userAnswers ? userAnswers[number] : undefined;

  return (
    console.log("answer", userAnswers?.length),
    console.log("question", questions[number]?.question),
    (
      <div style={{ width: "100%", padding: "0px 32px 0px 32px" }}>
        {loading ? (
          <p>Loading Questions...</p>
        ) : (
          <div>
            <Box
              sx={{
                my: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack>
                <Typography variant="subtitle1" className="number">
                  Question: {number} / {TOTAL_QUESTIONS}
                </Typography>
                <Typography  className="category" variant="h3" sx={{fontSize:"15px", fontWeight:600, color:"#adb0bd"}}>
                  {questions[number]?.category}
                </Typography>
                <Typography variant="h5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: questions[number]?.question,
                    }}
                  />
                </Typography>
              </Stack>

              <Box
                className="scoreBox"
                sx={{
                  ml: "auto",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  p: 1,
                }}
              >
                <Typography variant="subtitle1">Score:{score}</Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={(number + 1) * 10}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              {questions[number]?.answers?.map((answer, index) => (
                <ButtonWrapper
                  key={index}
                  correct={userAnswer?.correctAnswer === answer}
                  userClicked={userAnswer?.answer === answer}
                >
                  <button
                    disabled={userAnswer ? true : false}
                    value={answer}
                    onClick={checkAnswer}
                  >
                    <Typography variant="subtitle2">
                      <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </Typography>
                  </button>
                </ButtonWrapper>
              ))}
            </Box>
            <Stack direction="row" justifyContent="end">
              {!gameOver &&
              !loading &&
              userAnswers?.length === number + 1 &&
              number !== TOTAL_QUESTIONS - 1 ? (
                <Stack
                  onClick={nextQuestion}
                  className="nextButton"
                  direction="row"
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    backgroundColor: "#efefef",
                    borderRadius: "16px",
                  }}
                >
                  <Typography variant="subtitle1">Next</Typography>{" "}
                  <ArrowRightIcon />
                </Stack>
              ) : null}
              {userAnswers.length === 10 ? (
                <Typography>Game Over!!</Typography>
                
              ) : null}
            </Stack>
          </div>
        )}
      </div>
    )
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFAAE3" : "#FC9773",
  },
}));

export default QuizPage;
