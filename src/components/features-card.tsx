import React from 'react'
import Card from './ui/card'

const FeaturesCard = () => {
  return (
    <Card className="border border-dark-blue shadow-small-card rounded-[32px] py-10 px-6 flex flex-col items-center gap-4">
      <h4>{}</h4>
      <p className="text-center text-grey">{}</p>
    </Card>
  )
}

export default FeaturesCard