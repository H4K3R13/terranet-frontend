// import React, { useState } from 'react';
// import axios from "axios";

// function RegisterForm() {
//   const [registerData, setRegisterData] = useState({
//     fullname:'',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterData({ ...registerData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Add your registration logic here, e.g., sending data to the server.
//     // Ensure that password and confirmPassword match before submitting.
//     if (registerData.password === registerData.confirmPassword) {
//       // Passwords match, proceed with registration.
//       // You can send the registerData to your server here.
//     console.log(registerData)
//       try {
//         await axios.post(
//           "http://127.0.0.1:8000/authentication/register/",
//           registerData
//         );
//         // Handle success or navigate to another page
//         console.log("Registration successful!");
//       } catch (error) {
//         // Handle error
//         console.log("Registration failed");
//       }
//     } else {
//       // Passwords do not match, handle the error accordingly.
//       console.log('Passwords do not match');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// Register          </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             {/* Name */}
//             <div>
//               <label htmlFor="fullname" className="sr-only">
//                 Full name
//               </label>
//               <input
//                 id="fullname"
//                 name="fullname"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Full name"
//                 value={registerData.fullname}
//                 onChange={handleChange}
//               />
//             </div>
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={registerData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={registerData.password}
//                 onChange={handleChange}
//               />
//             </div>
//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="sr-only">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Confirm Password"
//                 value={registerData.confirmPassword}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:text-gray-900 hover:bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterForm;
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/router' // Import useRouter

function RegistrationForm() {
  const router = useRouter() // Get the router object

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // confirmPassword: '',
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (formData.password !== formData.confirmPassword) {
    //   setError('Passwords do not match');
    //   return;
    // }
    // if (formData.password === formData.confirmPassword) {
    console.log(formData)
    try {
      await axios.post('http://127.0.0.1:8000/api/register/', formData)
      // Handle success or navigate to another page
      router.push('/login')

      console.log('Registration successful!')
    } catch (error) {
      // Handle error
      console.log('Registration failed')
    }
    // } else {
    //   // Passwords do not match, handle the error accordingly.
    //   console.log('Passwords do not match');
    // }
  }

  return (
    <div>
      <h2>Registration</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          /> */}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
