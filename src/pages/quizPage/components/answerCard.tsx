import React from 'react'
import {Typography} from "@mui/material"
import "./answerCard.css"
type Props = {
  answer:any,
}

const AnswerCard = ({answer}: Props) => {
  return (
    <div className='answerCard' >
        <Typography variant='subtitle1'>{answer}</Typography>
    </div>
  )
}

export default AnswerCard