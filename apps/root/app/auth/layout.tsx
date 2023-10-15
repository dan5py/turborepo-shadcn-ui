import Image from 'next/image'
import React from 'react'
type Props = {
    children: React.ReactNode
}
const AuthLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-8 wrapper_under_header md:px-0">
            <div className="flex items-center w-full max-w-2xl overflow-hidden border md:h-96 h-1/2 rounded-xl border-neutral-700">
                <div className="flex-col hidden w-full h-full gap-4 p-8 md:w-1/2 bg-neutral-900 md:flex">
                    {/* <div className="flex items-center gap-2 px-2 py-1 border w-fit h-fit rounded-xl bg-neutral-800 border-neutral-700">
                        <Image src='/ID.svg' width={36} height={36} alt='id-logo' />
                        <span className='text-2xl font-extrabold'>ID</span>
                    </div>
                    <div className="grid w-full h-full gap-2 grid_template">
                        <Image src='/DarkMaterial.svg' width={36} height={36} alt='id-logo' />
                        <Image src='/Account.svg' width={36} height={36} alt='account-logo' />
                        <Image src='/Calendar.svg' width={36} height={36} alt='account-logo' />
                        <Image src='/Notes.svg' width={36} height={36} alt='account-logo' />
                        <Image src='/Ideas&Plans.svg' width={36} height={36} alt='account-logo' />
                        <Image src='/Dey.svg' width={36} height={36} alt='account-logo' />
                    </div> */}
                </div>
                <div className="flex flex-col w-full h-full gap-4 p-8 md:w-1/2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout