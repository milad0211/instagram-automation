import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    //server action Onboard the user
    const user = await onBoardUser()
    // status 200 | 201
  return (
    <div>Dashboard Page</div>
  ) 
}

export default Page