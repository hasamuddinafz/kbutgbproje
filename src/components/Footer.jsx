import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-dark py-5 text-center text-secondary'>
      <p>© 2024 Karabük Teknokent Teknoloji Transfer Ofisi</p>
      <p>Tüm Hakları Saklıdır | <Link to="http://karabuktto.com.tr/" className='text-decoration-none second-color'>www.karabuktto.com.tr</Link></p>
    </div>
  )
}

export default Footer