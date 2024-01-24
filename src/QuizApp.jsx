import React, { createContext, useState } from 'react'

import { Goals, Behaviors, Measure, Exercise, Results } from './screens'
import { Layout } from 'layout'

export const MainContext = createContext({})

const stepsComponents = {
  1: Goals,
  2: Measure,
  3: Behaviors,
  4: Exercise,
  5: Results,
}

function QuizApp() {
  const [store, setStore] = useState({})
  const [step, setStep] = useState(1)
  const Step = stepsComponents[step]

  const totalSteps = Object.entries(stepsComponents).length

  const onNextStep = () => {
    step < totalSteps && setStep(step + 1)
  }

  const onBackStep = () => {
    step > 1 && setStep(step - 1)
  }

  const submitFn = (options) => {
    setStore({ ...store, ...options })
    onNextStep()
  }

  return (
    <div className="QuizApp">
      <MainContext.Provider value={{ step, onNextStep, onBackStep, submitFn }}>
        <Layout>
          <Step store={store} setStore={setStore} />
        </Layout>
      </MainContext.Provider>
    </div>
  )
}

export default QuizApp
