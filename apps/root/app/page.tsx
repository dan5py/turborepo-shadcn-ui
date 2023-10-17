import home_banner from '@ui/assets/other/dm-home-banner.svg'
import bum from '@ui/assets/bum.svg'
import Image from 'next/image';
import Link from 'next/link';
export default function Page() {
    return (
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-12 p-4 md:p-12 wrapper_under_header">
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 w-fit h-fit">
          <h1 className='text-4xl font-bold text-center lg:text-9xl md:text-6xl text-neutral-200'>DarkMaterial</h1>
        </div>
        <div className="z-10 flex items-center w-full gap-4 md:gap-12 md:w-fit h-fit">
          <Link href='https://bum.darkmaterial.space'
          className="relative w-1/2 transition-all border-2 cursor-pointer md:w-72 md:h-96 h-72 group hover:scale-110 hover:border-white rounded-xl border-neutral-800">
            <div className="flex items-center justify-center w-full h-full">
              <Image src={bum} width={48} height={48} alt='bum-logo' className='transition-all brightness-50 group-hover:scale-125 group-hover:brightness-100' />
            </div>
          </Link>
          <div className="relative w-1/2 transition-all border-2 cursor-pointer md:w-72 md:h-96 h-72 rounded-xl border-neutral-800">
            <div className="flex items-center justify-center w-full h-full">
              <span className='text-sm text-neutral-400'>Скоро...</span>
            </div>
          </div>
        </div>
        <div className="absolute h-full w-fit">
          <div className="absolute h-full w-full bg-gradient-to-r z-[5] from-black via-transparent to-black" />
          <div className="absolute h-full w-full bg-gradient-to-t z-[5] from-black via-transparent to-black" />
          <Image src={home_banner} className='object-contain h-full -z-10 w-fit' alt='banner' />
        </div>
      </div>
    );
}
