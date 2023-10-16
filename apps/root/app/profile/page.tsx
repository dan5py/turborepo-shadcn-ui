import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { PiUsersFourBold } from 'react-icons/pi';

const ProfilePage = () => {
    return (
        <>
            <article className="flex flex-col w-full gap-4 h-fit ">
                <h2 className='text-2xl font-bold text-neutral-200'>Данные</h2>
                <section className="grid w-full grid-cols-6 grid-rows-1 gap-4 md:h-36 h-28">
                    <Link href='/profile/personal' className="relative w-full h-full col-span-2 p-4 rounded-2xl bg-neutral-900">
                        <h2 className='text-lg font-semibold text-neutral-300'>Мои данные</h2>
                        <div className="absolute hidden p-4 md:inline right-4 bottom-4 rounded-2xl bg-neutral-800">
                            <BiUser width={52} height={52} />
                        </div>
                    </Link>
                    <Link href='/profile/session' className="relative w-full h-full col-span-2 p-4 rounded-2xl bg-neutral-900">
                        <h2 className='text-lg font-semibold text-neutral-300'>Сессии</h2>
                        <div className="absolute hidden p-4 md:inline right-4 bottom-4 rounded-2xl bg-neutral-800">
                            <PiUsersFourBold width={52} height={52} />
                        </div>
                    </Link>
                </section>
            </article>
        </>
    );
};

export default ProfilePage;
