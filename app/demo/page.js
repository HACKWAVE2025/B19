import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='bg-white'>
        {/* Actual Demo */}
        <SignedIn>
          <Link href={'/onboarding'}>
              Next
          </Link>
        <SignedOut>
          <Link href={'/onboarding'}>
              Next
          </Link>
        </SignedOut>
        </SignedIn>
    </div>
  )
}

export default page;