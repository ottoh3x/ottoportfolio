import React from 'react'
import Link from 'next/link'

function HeaderItem({url,title}) {
  return (
    <div className="hover:text-green-300 bold"><Link href={url}>{title}</Link></div>
  )
}

export default HeaderItem