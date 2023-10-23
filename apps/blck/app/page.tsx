import Image from 'next/image'
import blck from '@ui/assets/blck.svg'
import UserSection from '@/components/entities/user'

export default function Home() {
    return (
      <div className='flex items-start w-full h-screen'>
        <header className="w-full py-8 h-fit">
          <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 mx-auto border rounded-lg h-fit border-neutral-700">
            <div className="flex items-center gap-2 w-fit h-fit">
              <Image src={blck} width={32} height={32} alt='blck-logo' />
              <span className='text-2xl font-medium text-neutral-200'>blck</span>
            </div>
            <UserSection />
          </div>
        </header>
      </div>
    )
}
