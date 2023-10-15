import home_banner from '@ui/assets/other/dm-home-banner.svg'
import Image from 'next/image';
export default function Page() {
    return (
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-4 p-12 wrapper_under_header">
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 -top-48 w-fit h-fit">
          <h1 className='text-3xl font-bold text-center lg:text-9xl md:text-6xl text-neutral-200'>DarkMaterial</h1>
        </div>
        <div className="absolute h-full w-fit">
          <div className="absolute h-full w-full bg-gradient-to-r z-[5] from-black via-transparent to-black" />
          <div className="absolute h-full w-full bg-gradient-to-t z-[5] from-black via-transparent to-black" />
          <Image src={home_banner} className='object-contain h-full -z-10 w-fit' alt='banner' />
        </div>
      </div>
    );
}
