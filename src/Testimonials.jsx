import React, { useState } from 'react'





const Testimonials = () => {

    const testimonialsList=[
  {
    quote: "The food was absolutely delicious, and the service was excellent. I’ll definitely come back!",
    author: "Emma Johnson"
  },
  {
    quote: "A wonderful restaurant with a cozy atmosphere and amazing dishes. Everything tasted fresh.",
    author: "Lucas Martin"
  },
  {
    quote: "The staff were very friendly, and the portions were generous. Great value for the price!",
    author: "Sophia Williams"
  },
  {
    quote: "One of the best dining experiences I’ve had. The desserts were especially incredible.",
    author: "Daniel Anderson"
  },
  {
    quote: "The restaurant has a beautiful atmosphere, and every dish we ordered was full of flavor.",
    author: "Olivia Brown"
  },
  {
    quote: "Fast service, delicious food, and reasonable prices. What more could you ask for?",
    author: "Nathan Wilson"
  },
  {
    quote: "I came here with my family and everyone loved it. The food was fresh and perfectly cooked.",
    author: "Mia Thompson"
  },
  {
    quote: "The presentation was beautiful and the taste was even better. Highly recommended!",
    author: "Ethan Davis"
  },
  {
    quote: "A hidden gem! The atmosphere was relaxing and the food exceeded my expectations.",
    author: "Chloe Martinez"
  },
  {
    quote: "Fantastic experience from start to finish. Friendly staff and absolutely delicious meals.",
    author: "Alex Turner"
  }
];
const [currentIndex,setIndex]=useState(0)

console.log(currentIndex)
  return (
    <div className='Testimonials'>
        <div className='testim'>
        <h2>"{testimonialsList[currentIndex].quote}"</h2>
        <h2>-{testimonialsList[currentIndex].author}-</h2>
        </div>
        <div className='buttons'>
            <button onClick={()=>setIndex((currentIndex-1+testimonialsList.length)%testimonialsList.length)}>Prev</button>
            <button onClick={()=>setIndex((currentIndex+1+testimonialsList.length)%testimonialsList.length)}>Next</button>
        </div>

    </div>
  )
}

export default Testimonials