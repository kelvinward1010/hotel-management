import { IconMessage2Share, IconPhoneCheck, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const titles_1 = [
    { title: "Our Story" },
    { title: "Get in Touch" },
    { title: "Our Privacy Commitment" },
    { title: "Terms of service" },
    { title: "Customer Assistance" },
]

const titles_2 = [
    { title: "Dining Experience" },
    { title: "Wellness" },
    { title: "Fitness" },
    { title: "Sports" },
    { title: "Events" },
]

function Footer() {
    return (
        <footer className="mt-16">
            <div className="container mx-auto px-4 w-full bg-black py-5">
                <Link href={'/'} className="text-tertiary-light font-semibold text-lg">
                    Kelvin Ward
                </Link>

                <div className="flex flex-wrap gap-16 items-center mt-8 justify-between text-tertiary-light">
                    <div className="flex-1">
                        <p>Ha Noi - Viet Nam</p>
                        <div className="flex items-center py-4">
                            <IconSend />
                            <p className="ml-2">Send us</p>
                        </div>
                        <div className="flex items-center py-4">
                            <IconPhoneCheck />
                            <p className="ml-2">000-000-00</p>
                        </div>
                        <div className="flex items-center py-4">
                            <IconMessage2Share />
                            <p className="ml-2">Message us</p>
                        </div>
                    </div>

                    <div className="flex-1 md:text-right">
                        {titles_1.map((title, idx) => (
                            <p className="pb-4 cursor-pointer hover:-translate-x-3 duration-500" key={idx}>{title.title}</p>
                        ))}
                    </div>

                    <div className="flex-1 md:text-right">
                        {titles_2.map((title, idx) => (
                            <p className="pb-4 cursor-pointer duration-500 hover:-translate-x-3" key={idx}>{title.title}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-10 md:h-[50px] w-full bottom-0 left-0 bg-teal-600"></div>
        </footer>
    );
}

export default Footer;
