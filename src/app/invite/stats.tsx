import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

export default function Stats(){
  return (
    <div className="grid md:grid-cols-3">
    <div className="relative bg-gray-700 border border-gray-800 px-4 py-7 flex flex-col items-center justify-center gap-1">
    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">6468</span>
      <span className="text-gray-300 leading-none text-center">Acessos ao link
      </span>
      <MousePointerClick className="size-5 text-purple absolute top-3 left-3"/>
    </div>

    <div className="relative bg-gray-700 border border-gray-800 px-4 py-7 flex flex-col items-center justify-center gap-1">
    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">6468</span>
      <span className="text-gray-300 leading-none text-center">Inscrições feitas
      </span>
      <BadgeCheck className="size-5 text-purple absolute top-3 left-3"/>
    </div>

    <div className="relative bg-gray-700 border border-gray-800 px-4 py-7 flex flex-col items-center justify-center gap-1">
    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">3ª</span>
      <span className="text-gray-300 leading-none text-center">Posição no ranking
      </span>
      <Medal className="size-5 text-purple absolute top-3 left-3"/>
    </div>
  </div>
  )
}