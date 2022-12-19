import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import "./Calculator.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function percentage(e) {
    setNum(num / 100);
  }

  function changeSign() {
    if(num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num))
    }
  }
  
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0)
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num))
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num))
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num))
    }
  }

  return (
    <>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className='wrapper'>
          <Box m={12} />
          <div>
            <h1 className='result textBoldXL'>{num}</h1>
            <Button className='lightButton textMediumM' onClick={clear}> AC </Button>
            <Button className='lightButton textMediumM' onClick={changeSign}> +/- </Button>
            <Button className='lightButton textMediumM' onClick={percentage}> % </Button>
            <Button className='lightButton textMediumM' onClick={operatorHandler} value={'/'}> / </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={7}> 7 </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={8}> 8 </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={9}> 9 </Button>
            <Button className='lightButton textMediumM' onClick={operatorHandler} value={'X'}> X </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={4}> 4 </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={5}> 5 </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={6}> 6 </Button>
            <Button className='lightButton textMediumM' onClick={operatorHandler} value={'-'}> - </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={1}> 1 </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={2}> 2 </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={3}> 3 </Button>
            <Button className='lightButton textMediumM' onClick={operatorHandler} value={'+'}> + </Button>
            <Button className='darkButton textMediumM' onClick={inputNum} value={0}> 0 </Button>
            <Button style={{visibility:"hidden"}}> a </Button>
            <Button className='lightButton textMediumM' onClick={inputNum} value={'.'}> , </Button>
            <Button className='lightButton textMediumM' onClick={calculate}> = </Button>
          </div>
        </div>
      </Container>
    </>
  )
}