import { LogOut } from "lucide-react"
import { Button } from "@/components/Form/Button"

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/eriksongoncalves.png"
        className="h-10 w-10 rounded-full"
        alt="Erikson Gonçalves Sanchez"
      />

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">Erikson Gonçalves</span>
        <span className="max-w-[190px] truncate text-sm text-zinc-500">
          eriksongoncalves@yahoo.com.br
        </span>
      </div>

      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
