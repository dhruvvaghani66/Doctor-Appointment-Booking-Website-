import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue100 to-indi-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md mt-10 bg-white/30 shadow-2xl border border-white/40 rounded-xl p-8 sm:min-w-[400px] w-full max-w-md"
      >
        <h2 className="mb-2 text-3xl font-bold text-center text-zinc-800 font-poppins">
          {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="mb-6 text-center text-zinc-600 font-inter">
          {state === 'Sign Up' ? 'Sign up to book your appointment' : 'Log in to continue'}
        </p>

        {state === 'Sign Up' && (
          <div className="mb-4 font-poppins">
            <label className="block mb-1 text-sm text-zinc-700 font-poppins">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 transition border font-poppinsrounded-lg border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="mb-4 font-poppins">
          <label className="block mb-1 text-sm text-zinc-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 transition border rounded-lg border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-6 font-poppins">
          <label className="block mb-1 text-sm text-zinc-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 transition border rounded-lg border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          type="submit"
          className="w-full py-3 font-medium text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 font-inter"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </motion.button>

        <div className="mt-4 text-sm text-center text-zinc-600 font-poppins">
          {state === 'Sign Up' ? (
            <p>
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setState('Login')}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setState('Sign Up')}
              >
                Create one
              </span>
            </p>
          )}
        </div>
      </motion.div>
    </form>
  )
}

export default Login
