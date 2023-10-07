import React, { useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navigation/navigation'
// import Navbar from './Navbar'
// import Footer from './Footer'
import { useRouter } from 'next/router' // Import useRouter

function LoginForm() {
  // const navigate = useNavigate()
  const router = useRouter() // Get the router object

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your login logic here, e.g., sending data to the server.
    console.log(FormData)
    // try {
    //   await axios.post('http://127.0.0.1:8000/api/user_login/', loginData)
    //   // Handle success or navigate to another page
    //   router.push('/dataform')
    //   console.log('OKAY')
    // } catch (error) {
    //   // Handle error
    //   console.log('Something Went wrong')
    // }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user_login/', loginData)

      // Check the response status code
      if (response.status === 200) {
        // Handle success, e.g., navigate to another page
        router.push('/dataform')
        console.log('OKAY')
      } else {
        // Handle other status codes (e.g., 4xx, 5xx) as needed
        console.log('Server returned an unexpected status code:', response.status)
      }
    } catch (error) {
      // Handle network or request-related errors
      console.error('An error occurred while making the request:', error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </div>
              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">{/* Add a "Remember Me" checkbox if needed */}</div>
              <div className="text-sm"></div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-gray-800 hover:text-gray-900 hover:bg-white focus:outline- focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default LoginForm
