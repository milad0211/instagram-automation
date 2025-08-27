import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { PopoverContent } from '@radix-ui/react-popover'
import React from 'react'

type Props = {
    children:React.ReactNode
    trigger:JSX.Element
    className?:string
}

const PopOver = ({children,trigger,className}: Props) => {
  return (
   <Popover>
    <PopoverTrigger asChild>{trigger}</PopoverTrigger>
    <PopoverContent className={cn('bg-[#1d1d1d] shadow-lg',className)}
    align='end'
    side='bottom'>
        {children}
    </PopoverContent>
   </Popover>
  )
}

export default PopOver