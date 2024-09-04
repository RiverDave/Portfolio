import { ThemeProvider as NextThemesProvider } from "next-themes"

const Providers = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  )
}

export default Providers
