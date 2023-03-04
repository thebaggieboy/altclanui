import HeaderNav from './HeaderNav'
import HeaderTab from './HeaderTab'
import Footer from './Footer'

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
  