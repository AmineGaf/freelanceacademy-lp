import React from 'react'
import Button from './ui/button'
import { SHARED_CONTENT } from '@/content/shared'

const MainCta = () => {
  return (
    <Button variant='cta'>
        {SHARED_CONTENT.callToAction}
    </Button>
  )
}

export default MainCta