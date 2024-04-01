"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode,
    className?: string,
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();

    const handleLogout = () => {

    };

    return (
        <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-pink-800
        p-6
        `,
            className)}>
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between
            ">
                <div className="
                hidden
                md:flex
                gap-x-2
                items-center
                ">
                    <button
                        onClick={() => router.back()}
                        className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:bg-pink-500
                    transition
                    ">
                        <RxCaretLeft size={35} className="text-white" />
                    </button>

                    <button
                        onClick={() => router.forward()}
                        className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:bg-pink-500
                    transition
                    ">
                        <RxCaretRight size={35} className="text-white" />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="
                    rounded-full
                    p-2
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:bg-pink-500
                    transition
                    ">
                        <HiHome className="text-white" size={20} />
                    </button>

                    <button className="
                    rounded-full
                    p-2
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:bg-pink-500
                    transition
                    ">
                        <BiSearch className="text-white" size={20} />
                    </button>
                </div>
                <div
                    className="
                flex
                justify-between
                items-center
                gap-x-4
                ">
                    <>
                        <div>
                            <Button
                                onClick={() => { }}
                            >
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => { }}
                                className="
                            bg-white
                            text-black
                            font-bold
                            ">
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div >
    );
};

export default Header;