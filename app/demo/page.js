import { SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        {/* Actual Demo */}
        <SignedIn>
            <Link href={'/onboarding'}>
                Next
            </Link>
        </SignedIn>
    </div>
  )
}

export default page