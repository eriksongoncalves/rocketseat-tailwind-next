import { LogOut } from "lucide-react"

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

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
