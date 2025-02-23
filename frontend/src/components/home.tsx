import { AnimatedGridPattern } from "./magicui/animated-grid-pattern"
import { TextAnimate } from "./magicui/text-animate"
import { ModeToggle } from "./mode-toggle"
import { ThemeProvider } from "./theme-provider"



function Home() {
  return (
     <div className="flex flex-col justify-center items-center min-h-screen gap-10">
        <AnimatedGridPattern />
       <h1 className="text-3xl font-bold">
       <TextAnimate animation="blurInUp" by="character" once>
          Blur in by character
        </TextAnimate>
       </h1>
      

         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
        </ThemeProvider>

        
    
        </div>
  )
}

export default Home
