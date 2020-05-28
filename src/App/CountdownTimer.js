import React, { useState, useEffect } from "react"
import { Typography } from "@material-ui/core"

export default function CountdownTimer() {
  const myCenter = {
    textAlign: "center"
  }
  return (
    <>
      <div>
        <h1 style={myCenter}>The Countdown Timer App</h1>
      </div>

      <Typography align="center" variant="h5" gutterBottom>
        Countdown
      </Typography>
    </>
  )
}
