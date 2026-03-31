'use client'

import { Grow, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'

export default function AnimatedQuote({ text }: { text: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <Grow in={visible} timeout="auto">
      <Typography variant="body1" color={grey[900]}>
        &ldquo;{text}&rdquo;
      </Typography>
    </Grow>
  )
}
