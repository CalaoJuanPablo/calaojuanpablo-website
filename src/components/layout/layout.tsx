import { Footer } from '../footer'
import { NavBar } from '../nav-bar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
)
