import React from 'react'
import ServiceCard from './component/ServiceCard'

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-20 gap-y-8'>
        <ServiceCard
            image='/vectors/task.png'
            alt_text='Search for someone who would do your assignment'
            title='I want to Assign a Task'
            description='Provide your assignment detail to us and we will find you the best expert to work on it.'
            duration='1000'
        />
        <ServiceCard
            image='/vectors/professional.png'
            alt_text='Earn by doing assignments'
            title='I want to earn as Expert'
            description='Register as an expert and start earning by doing assignments.'
            duration='1200'
        />
    </div>
  )
}

export default Services