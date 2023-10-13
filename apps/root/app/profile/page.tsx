import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';

const ProfilePage = () => {
    return (
        <>
            <article className="flex flex-col w-full gap-4 h-fit ">
                <h2 className='text-2xl font-bold text-neutral-200'>Данные</h2>
                <section className="grid w-full grid-cols-6 grid-rows-1 gap-4 md:h-36 h-28">
                    <Link href='/profile/personal' className="relative w-full h-full col-span-2 p-4 rounded-2xl bg-neutral-900">
                        <h2 className='text-lg font-semibold text-neutral-300'>Мои данные</h2>
                        <div className="absolute hidden md:inline p-4 right-4 bottom-4 rounded-2xl bg-neutral-800">
                            <BiUser width={48} height={48} />
                        </div>
                    </Link>
                    {/* <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div> */}
                    {/* <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div> */}
                </section>
                {/* <section className="grid w-full h-64 grid-cols-3 grid-rows-2 gap-4 md:h-36 md:grid-cols-6 md:grid-rows-1">
                    <div className="w-full h-full rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full rounded-2xl bg-neutral-900"></div>
                </section> */}
            </article>
            {/* <article className="flex flex-col w-full gap-4 h-fit ">
                <h2 className='text-2xl font-bold text-neutral-200'>Dark Material Pay</h2>
                <section className="grid w-full h-64 grid-cols-3 grid-rows-2 gap-4 md:h-36 md:grid-cols-6 md:grid-rows-1">
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full col-span-1 rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full col-span-1 rounded-2xl bg-neutral-900"></div>
                </section>
            </article>
            <article className="flex flex-col w-full gap-4 h-fit ">
                <h2 className='text-2xl font-bold text-neutral-200'>Команда</h2>
                <section className="grid w-full grid-cols-6 grid-rows-1 gap-4 md:h-36 h-28">
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                </section>
            </article>
            <article className="flex flex-col w-full gap-4 h-fit ">
                <h2 className='text-2xl font-bold text-neutral-200'>Подписки</h2>
                <section className="grid w-full grid-cols-6 grid-rows-1 gap-4 md:h-36 h-28">
                    <div className="w-full h-full col-span-2 rounded-2xl bg-neutral-900"></div>
                </section>
            </article> */}
        </>
    );
};

export default ProfilePage;
