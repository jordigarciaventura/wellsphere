
import { unstable_setRequestLocale } from "next-intl/server";
const MainPageContent = dynamic(() => import('@/components/mainpage'), { ssr: false })
import dynamic from 'next/dynamic'

interface Props {
  params: { locale: string };
}

export default function  DayCraftPage({ params: { locale } }: Props) {
    "use client";
  
    unstable_setRequestLocale(locale);
  
    return (
        
      <MainPageContent />
       
      )
  }
 









  
