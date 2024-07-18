'use client';
import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Callnowbutton = () => {
  return (
    <Link href="tel:+917982922261">
      <button className="btn btn-primary text-white text-[1.2rem]"><FaPhoneAlt size="1.5rem"/>Call Now</button>
    </Link>
  )
}

export default Callnowbutton
