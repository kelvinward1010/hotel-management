import Footer from "./Footer"
import Header from "./Header"



const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout