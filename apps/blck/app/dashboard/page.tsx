import { BiPlus } from "react-icons/bi"
import { Input } from '@ui/components/ui/input'
import { Button } from "@ui/components/ui/button"

const DashboardPage = () => {
    return (
        <div className='w-full min-h-screen py-4'>
            <div className="flex flex-col w-full h-full max-w-5xl gap-4 px-4 mx-auto">
                <div className="flex items-center justify-between w-full gap-4">
                    <Input placeholder="Начните вводить для поиска" className="border-neutral-700" />
                    <Button variant="secondary">Поиск</Button>
                </div>
                <div className="grid w-full gap-6 h-fit dashboard_grid">
                    <div className="w-full aspect-[2/1] p-4 flex flex-col justify-between gap-2 cursor-pointer shrink-0 border rounded-xl hover:bg-neutral-900 transition-colors border-neutral-700 hover:border-neutral-200">
                        <div className="flex flex-col w-full h-fit">
                            <span className="text-lg font-medium text-neutral-200">Проект</span>
                            <span className="text-sm text-neutral-400">Данные проект нужен для этого и того.</span>
                        </div>
                        <div className="flex items-center w-full gap-2 select-none h-fit">
                            <div className="flex flex-col w-1/3 h-full gap-2 p-2 border rounded-md border-neutral-700">
                                <span className="text-xs text-neutral-300">Этап</span>
                                <span className="mx-auto text-xl font-medium text-neutral-300">2/3</span>
                            </div>
                            <div className="flex flex-col w-1/3 h-full gap-2 p-2 border rounded-md border-neutral-700">
                                <span className="text-xs text-neutral-300">Заметок</span>
                                <span className="mx-auto text-xl font-medium text-neutral-300">10</span>
                            </div>
                            <div className="flex flex-col w-1/3 h-full gap-2 p-2 border rounded-md border-neutral-700">
                                <span className="text-xs text-neutral-300">Участников</span>
                                <span className="mx-auto text-xl font-medium text-neutral-300">1</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full aspect-[2/1] border rounded-xl group cursor-pointer hover:bg-neutral-900 transition-colors border-neutral-700 hover:border-neutral-200">
                        <div className="flex items-center justify-center w-full h-full">
                            <BiPlus size={25} className="group-hover:text-neutral-200 text-neutral-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage