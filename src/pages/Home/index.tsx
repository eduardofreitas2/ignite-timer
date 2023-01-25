import { Play } from 'phosphor-react'

import {
  ClockContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartClockContainer,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Work in</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Name your project"
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <ClockContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </ClockContainer>

        <StartClockContainer type="submit" disabled>
          <Play size={24} />
          Start
        </StartClockContainer>
      </form>
    </HomeContainer>
  )
}