import React from 'react'

function Setting() {
  return (
    <>
      <div className="setting">
         <div className="max-w-4xl mx-auto px-6 py-12 text-white font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-700">About Us</h1>

      <p className="mb-4 text-lg leading-relaxed">
        Welcome to <strong className='text-[#00d8d8]'>Invoicely</strong>, your smart and simple invoicing solution. 
        This app is built to help  <span className='underline'>freelancers, small businesses, and entrepreneurs create, manage, 
        and track invoices</span> with ease. Our mission is to simplify the billing process 
        so you can focus more on growing your business and less on paperwork.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        With a React-powered frontend and Firebase as our backend, 
        we've ensured speed, real-time updates, and secure data storage. 
        Whether you're managing clients, tracking payments, or organizing invoice records,
        our app offers a smooth and intuitive experience.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        We're constantly improving and adding new features based on user feedback. 
        Your productivity and satisfaction are our top priorities.
      </p>

      <hr className="my-8" />

      <p className="text-center text-gray-600 text-md">
        Empowering businesses with technology, one invoice at a time.<br />
  Developed with passion and precision by <strong className='text-[#00d8d8]'>ABDUL REHMAN</strong>
      </p>
    </div>
      </div>
    </>
  )
}

export default Setting