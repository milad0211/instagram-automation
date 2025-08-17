'use client'

import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  const param = useParams()
  const data = param.slug
  return (
    <div>{data}</div>
  )
}

export default Page