import home_banner from '@ui/assets/other/dm-home-banner.png'
import Image from 'next/image';
export default function Page() {
    return (
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-4 p-12 wrapper_under_header">
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 -top-48 w-fit h-fit">
          <h1 className='text-3xl font-bold text-center lg:text-9xl md:text-6xl text-neutral-200'>DarkMaterial</h1>
        </div>
        <Image src={home_banner} className='absolute left-0 top-0 w-full md:aspect-[4/2] aspect-[2/4]' alt='banner' />
      </div>
    );
}
