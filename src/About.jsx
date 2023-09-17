import React from 'react'
import Nav from './components/Nav'
import Footer from './Footer'

function About() {
  return (
    <div>
      <Nav />
      <div className=' min-h-[15rem] bg-hero-pattern bg-cover bg-center flex items-end'>
        <h1 className='text-white text-5xl  text-left  md:text-6xl lg:text-8xl lg:mx-10 tracking-tighter font-bold p-4 lg:px-52 '>About</h1>
      </div>
      <div className=' min-h-screen'>
        <div className=' text-white text-xl p-6 lg:px-52'>
        <h3 className=' text-2xl py-2 lg:py-8 font-semibold'>About Crowlly: Transforming Transactions, Empowering Community</h3>

          <p>At Crowlly, we believe that financial transactions should be more than just exchanges of money; they should be opportunities for growth, collaboration, and empowerment. That's why we've created a platform that revolutionizes the way we handle our finances, making it more secure, collaborative, and efficient. </p>

          <h4 className=' py-3'>Our Vision</h4> 

          <p> Our vision is to empower individuals and communities by providing them with the tools to manage their financial transactions in a way that's not only safe and efficient but also inspiring and impactful. We envision a world where financial goals are achieved collectively, where funds are managed transparently, and where trust is the cornerstone of every transaction.</p>

          <h4 className=' py-3'>The Crowlly Difference</h4>

          <p> <span className=' font-semibold'> Security First</span>: At Crowlly, security is our unwavering commitment. We've employed state-of-the-art security measures to ensure that your funds are safeguarded at all times. Trust is the foundation of everything we do. <br />

            <span className=' font-semibold'> Community Focus</span>: We're more than an app; we're a community of like-minded individuals and groups who are passionate about achieving their financial goals. Crowlly connects people with shared objectives, making collective financial achievements a reality.<br />

            <span className=' font-semibold'> Simplicity and Speed</span>: We understand the value of time and the need for simplicity. Crowlly is designed for lightning-fast fund transfers and seamless agreement management, so you can focus on what matters most.<br />

            <span className=' font-semibold'> Fairness and Transparency</span>: Our commitment to fairness and transparency means that every participant in a Crowlly agreement can trust that their contributions will only be released when the agreed-upon conditions are met.<br /></p>

          <h4 className=' py-3'>Join the Crowlly Community </h4>

          <p> Thousands have already chosen Crowlly to elevate their financial transactions, whether it's group savings, collaborative projects, or friendly wagers. We invite you to join our ever-growing community of users who are transforming the way they handle their finances.</p>

          <h4 className=' py-3'> Get Started with Crowlly </h4>

          <p> Crowlly is more than an app; it's a movement. It's a commitment to redefining financial transactions for the better, and it starts with you. Join us today and be part of the Crowlly journey toward financial empowerment, trust, and collaboration.

          Your financial journey, your community, your transformation. Crowlly.</p>
          </div>

      </div>
      <Footer />
    </div>
  )
}

export default About