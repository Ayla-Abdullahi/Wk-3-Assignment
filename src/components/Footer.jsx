import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-sm text-gray-500 dark:text-gray-400" href="#">Privacy</a>
            <a className="text-sm text-gray-500 dark:text-gray-400" href="#">Terms</a>
            <a className="text-sm text-gray-500 dark:text-gray-400" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
