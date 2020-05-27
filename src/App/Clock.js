import React, { useState, useEffect } from "react"
import { Typography } from "@material-ui/core"

export default function App() {
  const [theTime, setTheTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => setTheTime(new Date().toLocaleTimeString()), 1000)
  }, [])

  const myCenter = {
    textAlign: "center"
  }
  return (
    <>
      <div>
        <h1 style={myCenter}>The Clock App</h1>
      </div>

      <Typography align="center" variant="h5" gutterBottom>
        Current Time: {theTime}
      </Typography>
    </>
  )
}
