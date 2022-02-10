import React from 'react'
import Image from "next/image";
import greetingsImg from '../../../public/images/home/Blue-in-Jacket.png';
export default function Hand() {
    return (
        // <div data-aos="fade-up-left"

        //     data-aos-once="true"
        //     data-aos-anchor-placement="top-top"
        //     aos-duration="3000"
        //     className={"greetings-image"}>
        //     <Image src={greetingsImg} alt="Illustration 3D blue hand making the sign of Spok that means long live and prosper" />
        // </div>
        <div className={"greetings-image"}>
            <Image src={greetingsImg} alt="Illustration 3D blue hand making the sign of Spok that means long live and prosper" />
        </div>
    )
}
