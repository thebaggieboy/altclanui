
import Footer from './Footer'
import HeaderNav from './headers/HeaderNav'
import HeaderTab from './headers/HeaderTab'

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
       <HeaderNav />
          {children}
        <Footer/>
      </>
      
       
      
      
    )
  }
  