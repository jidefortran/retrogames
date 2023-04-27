import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {register} from "../services"
import { useTitle } from '../hooks/useTitle'

export const Register = () => {
  useTitle("Register")
    const navigate = useNavigate()
    async function handleRegister (event){
        event.preventDefault()
        try{

          const authDetail ={
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value

        }
    const data= await register(authDetail)
      data.accessToken ? navigate("/products"): toast.error(data)
        }catch(error){
toast.error(error.message,{closeButton: true , autoClose:4500})
        }
      
    }

 
  return (
    <main>
        <section>

<div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <form onSubmit={handleRegister}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                     Email
                    </label>
                    <input
                      placeholder="Email"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="passowrd"
                      className="inline-block mb-1 font-medium"
                    >
                     Password
                    </label>
                    <input
                      placeholder="passowrd"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
               
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Register
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
            </section>
    </main>
  )
}
