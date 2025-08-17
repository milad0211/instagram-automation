import { AutomationDuoToneBlue, ContactsDuoToneBlue, HomeDuoToneBlue, RocketDuoToneBlue, SettingsDuoToneWhite } from "@/icons"

export const PAGE_BREAD_CRUMBS:string[] =[
    'contacts',
    'automation',
    'integrations',
    'settings',
]


type Props = {
    [page in string]:React.ReactNode
}

export const PAGGE_ICON:Props = {
    AUTOMATIONS: <AutomationDuoToneBlue />,
    CONTACTS:<ContactsDuoToneBlue />,
    INTEGRATIONS: <RocketDuoToneBlue />,
    SETTINGS: <SettingsDuoToneWhite />,
    HOME: <HomeDuoToneBlue />
}


export const PLANS = [
    {
      name: 'Essential',
      description: 'For creators starting their journey',
      price: '$0',
      billing: 'Forever free',
      features: [
        'Smart response automation for up to 100 comments/month',
        'Basic audience engagement analytics',
        'Community management tools',
        'Instagram content suggestions',
        'Email support',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For serious creators and businesses',
      price: '$99',
      billing: 'per month',
      features: [
        'Unlimited automated responses',
        'Advanced AI-powered engagement strategies',
        'Detailed analytics and ROI tracking',
        'Custom response templates',
        'Priority 24/7 support',
        'White-label reports',
        'Multi-account management',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
    },
  ]