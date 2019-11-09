import React from 'react'

const Footer = () => (
  <footer className='font-sans bg-black text-white py-4 px-4'>
    <div className='mx-auto max-w-xl overflow-hidden flex justify-between items-center'>
      <p className='inline-block py-2 px-3 text-gray-400 text-xs'>
        {' '}
        © {new Date().getFullYear()}, Built with ❤️ by Andrew Mason and John Espinsoa
      </p>
    </div>
  </footer>
)

export default Footer
