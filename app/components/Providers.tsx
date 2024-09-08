import { ThemeProvider as NextThemesProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}

export default Providers
