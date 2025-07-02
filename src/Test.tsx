import { useTheme } from '@/components/theme-provider'
import { Button } from "@/components/ui/button"

export function Test() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      Hello World {theme}

      <Button className="cursor-pointer" onClick={() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
      }}>Something terrible</Button>
    </div>
  )
}
