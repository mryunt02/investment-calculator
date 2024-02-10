import React, { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 2000,
    expectedReturn: 4,
    duration: 12
  })
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue

      }
    });


  }
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero. </p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App
