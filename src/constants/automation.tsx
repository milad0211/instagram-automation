import { PlaneBlue, SmartAi, TinyInstagram } from "@/icons"
import { v4 } from "uuid"

export type AutomationListenerProps = {
    id:string,
    lable:string,
    icon:JSX.Element,
    description:string,
    type:'SMARTAI' | 'MESSAGE'
}

export type AutomationTriggerProps = {
    id:string,
    lable:string,
    icon:JSX.Element,
    description:string,
    type:'COMMENT' | 'DM'
}

export const AUTOMATION_TRIGGERS:AutomationTriggerProps[] =[
    {
        id:v4(),
        lable:'User comments on my post',
        icon:<TinyInstagram />,
        description:'Select if you want to automate comments on your post',
        type:'COMMENT',
    },
    {
        id:v4(),
        lable:'User sends me a dm with a keyword',
        icon:<TinyInstagram />,
        description:'Select if you want to automate comments on your post',
        type:'DM',
    }
]



export const AUTOMATION_LISTENERS :AutomationListenerProps[] = [
    {
        id:v4(),
        lable:'Send the user a message',
        icon:<PlaneBlue />,
        description:'Enter the message that you want to send the user',
        type:'MESSAGE'
    },
    {
        id:v4(),
        lable:'Let Smart AI take over',
        icon:<SmartAi />,
        description:'Tell AI about project. (Upgrade to use this feature)',
        type:'SMARTAI'
    }
]