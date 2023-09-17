import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowPathIcon, LockClosedIcon, WalletIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Secure Wallet',
    description:
      'Multi-factor authentication (MFA) to ensure that only authorized users can access their funds. Your account is protected by a combination of something you know and something you have, making it nearly impenetrable.',
    icon: WalletIcon,
  },
  {
    name: 'Group transactions',
    description:
      `Harnesses the power of collective action. Whether you're pooling funds for a shared dream, managing a group savings account, or engaging in friendly wagers with friends, Crowlly ensures that everyone's contributions are secure and accounted for.`,
    icon: UserGroupIcon,
  },
  {
    name: 'Send and Receive',
    description:
      `There's no need to wait around for funds to clear. Say goodbye to traditional delays; our lightning-fast transfers ensure that your money moves as quickly as your ambitions.`,
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      `Security is our top priority. We employ robust encryption techniques and follow industry-best security practices to safeguard your funds. Your money is stored in a highly secure environment, giving you the confidence that it's in safe hands.`,
    icon: LockClosedIcon,
  },
]



function Home() {
  return (
    <div>

      {/*  <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a> */}

      <div className=' min-h-screen flex flex-col justify-center items-start md:items-center bg-hero-pattern bg-center bg-no-repeat bg-cover lazy ' >
        <div className='max-w-5xl lg:max-w-7xl'>
          <h1 className=' text-white text-3xl text-left md:text-center font-semibold tracking-tighter md:text-4xl p-4 '>Secure Escrow</h1>
          <h3 className='text-white text-5xl text-left md:text-center  md:text-6xl lg:text-8xl lg:mx-10 tracking-tight font-bold p-4  ' >Your trusted escrow solution for safe and fair transactions.</h3>
        </div>
        <Link to={'/signup'}>
        <button className=' bg-[#22be1c] font-bold p-5 mx-5 justify-center text-2xl min-w-[150px] flex  rounded-xl '>Get Started</button>
        </Link>

      </div>

      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-4xl lg:max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:max-w-6xl lg:text-center">
            {/* <h2 className="text-lg font-semibold leading-7 text-fuchsia-600 ">Secure Escrow</h2> */}
            <p className="mt-2 text-5xl font-bold tracking-tight text-white lg:text-8xl">
              Crowlly is a secure and reliable solution for transactions involving multiple parties
            </p>
            <p className="mt-6 text-lg lg:text-2xl leading-8 text-white">
              We understand the complexity and importance of these dealings, and that's why we go above and beyond to ensure they're as secure and reliable as possible.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-600">
                      <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base lg:text-xl leading-7 text-white">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* <div className=' min-h-[80vh] flex flex-col justify-center items-center'>
              <h3 className='text-white text-5xl text-center md:text-6xl lg:text-8xl  tracking-tight font-medium p-4 lg:mx-40 '>Crowlly is a secure and reliable solution for transactions involving multiple parties</h3>
          </div> */}
      {/* 



export default function Example() {
  return (
    
  )
}
 */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center bg-section-pattern bg-cover">
        <div className='max-w-5xl lg:max-w-7xl'>
          <h3 className='text-white text-5xl text-center  md:text-6xl lg:text-8xl  tracking-tight font-bold p-4 lg:mx-40 '> A seamless and transparent escrow service</h3>
        </div>
      </div>
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <div className='max-w-5xl lg:max-w-7xl'>
          <h3 className='text-white text-5xl text-center  md:text-6xl lg:text-8xl  tracking-tight font-bold p-4 lg:mx-40 '>Safe and fair financial transactions.</h3>
        </div>
        <Link to={'/signup'}>
          <button className=' bg-[#22be1c] font-bold p-5 mx-5 justify-center text-2xl min-w-[150px] flex  rounded-xl '>Get Started</button>
        </Link>
      </div>

    </div>
  )
}

export default Home