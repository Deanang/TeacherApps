import React, { useState } from "react"
import DisplayComponent from "../Components/DisplayComponent"
import BtnComponent from "../Components/BtnComponent"
import "./Timer.css"

export default function CountdownTimer() {
  const [time, setTime] = useState({ ms: 0, s: 10, m: 0, h: 0 })
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 10))
  }

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h

  const run = () => {
    if (updatedH !== 0 && updatedM === 0 && updatedS === 0 && updatedMs === 0) {
      updatedH--
      updatedM = 60
    }
    if (updatedM !== 0 && updatedS === 0 && updatedMs === 0) {
      updatedM--
      updatedS = 60
    }
    if (updatedS !== 0 && updatedMs === 0) {
      updatedS--
      updatedMs = 100
    }
    if (updatedH !== 0 || updatedM !== 0 || updatedS !== 0) {
      updatedMs--
      return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
    } else {
      clearInterval(interv)
      setStatus(1)
      setTime({ ms: 0, s: 0, m: 0, h: 0 })
    }
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }

  const resume = () => start()

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <h1>The Count Down App</h1>
          <DisplayComponent time={time} />
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start} />
        </div>
      </div>
    </div>
  )
}
