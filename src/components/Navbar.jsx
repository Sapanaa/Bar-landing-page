import React from 'react'
import { navLinks } from '../../constants'
const Navbar = () => {
  return (
    <nav>
      <a href="#home" className='flex gap-2'>
            <p>Home</p>
      </a>
      <ul>
        { navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>  
        ))

        }
      </ul>
    </nav>
  )
}

export default Navbar
