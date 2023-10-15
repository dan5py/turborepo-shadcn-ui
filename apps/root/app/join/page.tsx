import dm from '@ui/assets/dm.svg'
import { Button } from '@ui/components/ui/button'
import { Input } from '@ui/components/ui/input'
import Image from 'next/image'
import home_banner from '@ui/assets/other/dm-home-banner.svg'

const JoinPage = () => {
    return (
        <div className='flex items-center justify-center w-full p-12 wrapper_under_header'>
            <div className="flex items-center justify-center w-full h-full max-w-sm gap-8 md:max-w-6xl">
                <div className="relative items-center justify-center hidden w-2/3 md:flex h-fit">
                    <div className="absolute w-full h-fit">
                        <div className="absolute h-full w-full bg-gradient-to-r z-[5] from-black via-transparent to-black" />
                        <div className="absolute h-full w-full bg-gradient-to-t z-[5] from-black via-transparent to-black" />
                        <Image src={home_banner} className='object-contain w-full h-full -z-10' alt='banner' />
                    </div>
                </div>
                <div className="flex flex-col w-full h-full gap-4 md:w-1/3">
                    <div className="flex flex-col w-full gap-4 p-4 border h-fit rounded-xl border-neutral-700">
                        <div className="flex flex-col items-center justify-center w-full gap-2 py-4 h-fit">
                            <div className="p-2 bg-white rounded-xl">
                                <Image src={dm} width={42} height={42} className='invert' alt='dm-logo' />
                            </div>
                            <span className='text-sm font-medium text-center text-neutral-300'>Вход DM</span>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full py-2 h-fit">
                            <Input placeholder='Почта' />
                        </div>
                        <Button className='w-full' variant='secondary'>Войти</Button>
                    </div>
                    <div className="flex flex-col w-full gap-4 p-4 border h-fit rounded-xl border-neutral-700">
                        <div className="flex items-center justify-center w-full"><span className='text-center'>Нет аккаунта</span></div>
                        <Button className='w-full' variant='default'>Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinPage