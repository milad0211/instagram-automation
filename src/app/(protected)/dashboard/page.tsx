import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    //server action Onboard the user
    const user = await onBoardUser()
    if(user.status === 200 || user.status === 201){
      return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
    }
    // status 200 | 201
  return (
   redirect('/sign-in')
  ) 
}

export default Page