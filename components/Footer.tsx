import { IconMessage2Share, IconPhoneCheck, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="mt-16">
            <div className="container mx-auto px-4 w-full bg-black">
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
                        <p className="pb-4">Our Story</p>
                        <p className="pb-4">Get in Touch</p>
                        <p className="pb-4">Our Privacy Commitment</p>
                        <p className="pb-4">Terms of service</p>
                        <p>Customer Assistance</p>
                    </div>

                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Dining Experience</p>
                        <p className="pb-4">Wellness</p>
                        <p className="pb-4">Fitness</p>
                        <p className="pb-4">Sports</p>
                        <p>Events</p>
                    </div>
                </div>
            </div>

            <div className="h-10 md:h-[50px] w-full bottom-0 left-0 bg-teal-600"></div>
        </footer>
    );
}

export default Footer;
