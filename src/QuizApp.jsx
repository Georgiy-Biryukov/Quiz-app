import React, { createContext, useState } from 'react'

import { Layout } from './layout'
import { Goals } from './screens/Goals'
import { Behaviors } from './screens/Behaviors'
import { Measure } from './screens/Measure'
import { Exercise } from './screens/Exercise'
import { Results } from './screens/Results'

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
  const isFirstStep = step === 1

  const onNextStep = () => {
    step < totalSteps && setStep(step + 1)
  }

  const onBackStep = () => {
    step > 1 && setStep(step - 1)
  }

  return (
    <div className="QuizApp">
      <MainContext.Provider value={{ step, onNextStep, onBackStep, isFirstStep }}>
        <Layout>
          <Step store={store} setStore={setStore} />
        </Layout>
      </MainContext.Provider>
    </div>
  )
}

export default QuizApp
