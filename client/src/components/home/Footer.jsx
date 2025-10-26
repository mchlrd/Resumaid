import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800 mt-28">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-indigo-600 text-2xl font-bold">Resumaid</span>
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed mb-6">
          Empowering job seekers with AI-driven resume building for a brighter career future.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 mt-4">
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/mchlurd/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition"
          >
            <img 
              src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-noire.png" 
              alt="LinkedIn Logo" 
              className="w-6 h-6"
            />
          </a>

          {/* GitHub Button */}
          <a 
            href="https://github.com/mchlrd/Resumaid" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition"
          >
            <img 
              src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-png-transparent.png" 
              alt="GitHub Logo" 
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href='#'>resumaid</a> ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer