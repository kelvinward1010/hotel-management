import Footer from "./Footer"
import Header from "./Header"
import ThemeProvider from "./themeprovider/ThemeProvider"



const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <div>
            <ThemeProvider>
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default Layout