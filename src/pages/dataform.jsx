import React, { useState, useEffect } from 'react'
import axios from 'axios'

function StudentForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    blood_group: '',
    occupation: '', // Added occupation field
    fromYear: '', // Added From Year field
    toYear: '', // Added To Year field
    degree: '', // Added Degree Program field
    contact_email: '',
    mobile: '',
    // photo: null, // Added photo field to store the selected file
  })

  useEffect(() => {
    // Make an API request to fetch user data
    axios
      .get('http://127.0.0.1:8000/api/get_user_data/') // Replace with your API endpoint
      .then((response) => {
        const userData = response.data
        // Update the form data state with the fetched user data
        setFormData({
          first_name: userData.first_name,
          last_name: userData.last_name,
          dob: userData.dob,
          gender: userData.gender,
          blood_group: userData.blood_group,
          occupation: userData.occupation,
          fromYear: userData.fromYear,
          toYear: userData.toYear,
          degree: userData.degree,
          contact_email: userData.contact_email,
          mobile: userData.mobile,
        })
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePhotoChange = (e) => {
    // Handle file input change and set it to the photo field
    setFormData({ ...formData, photo: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://127.0.0.1:8000/api/create_alumni/', formData)
      // Handle success or navigate to another page
      console.log('OKAY')
    } catch (error) {
      // Handle error
      console.log('Something Went wrong')
    }
  }

  return (
    <div className="absolute top-0 w-full h-full flex flex-col items-center text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl	 bg-white p-8 mt-8 rounded shadow-2xl text-black">
        <div className="  -mx-3 mb-6">
          <h3 className="">Basic information</h3>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="age">
            DOB
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="DOB"
          />

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Gender:
            <br />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Other</option>
            </select>
          </label>

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Blood group:
            <br />
            <select
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="blood_group"
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </label>
          {/* <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="fromYear"
          >
            From
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="fromYear"
            value={formData.fromYear}
            onChange={handleChange}
          >
            <option value="">Select From Year</option>
            {Array.from({ length: 57 }, (_, index) => (
              <option key={index} value={1964 + index}>
                {1964 + index}
              </option>
            ))}
          </select>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="toYear"
          >
            To
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="toYear"
            value={formData.toYear}
            onChange={handleChange}
          >
            <option value="">Select To Year</option>
            {Array.from({ length: 58 }, (_, index) => (
              <option key={index} value={1966 + index}>
                {1966 + index}
              </option>
            ))}
          </select> */}

          {/* <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="degree"
          >
            Degree Program
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="degree"
            value={formData.degree_program}
            onChange={handleChange}
          >
            <option value="">Select Degree Program</option>
            <option value="Bsc Physics">Bsc_Physics</option>
            <option value="Bsc Polymer Chemistry">Bsc_Polyme_ Chemistry</option>
            <option value="Bsc Statistics">Bsc_Statistics</option>
          </select> */}
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact_email">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="email"
            name="contact_email"
            value={formData.contact_email}
            onChange={handleChange}
            placeholder="Email"
          />

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="photo">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
