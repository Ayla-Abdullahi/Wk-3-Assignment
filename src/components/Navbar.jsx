import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {
  const { theme, toggle } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold">
              PLP Task Manager
            </Link>
            <Link to="/" className="text-sm text-gray-600 dark:text-gray-300">Home</Link>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={toggle} variant="secondary" size="sm">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
