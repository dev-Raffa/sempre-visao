import './styles.scss'
import image1 from '../../../../../../../public/WhatsApp-Image-2025-03-13-at-18.07.02-_1_.webp'
import image2 from '../../../../../../../public/WhatsApp-Image-2025-03-13-at-18.07.03-_1_.webp'
import image3 from '../../../../../../../public/WhatsApp-Image-2025-03-13-at-18.06.36.webp'
import image4 from '../../../../../../../public/WhatsApp-Image-2025-03-13-at-18.07.03-_2_.webp'
import image5 from '../../../../../../../public/WhatsApp-Image-2025-03-13-at-18.07.03-_3_.webp'
import image6 from '../../../../../../../public/WhatsApp-Image-2025-03-13-at-18.06.36-_4_.webp'
import { ReactNode } from "react"
import Image from "next/image"


export const StructureCarousel = ()=>{
    return(
        <ul className="structure">
            <figure key={`carousel-structure-item-1`} className="carousel-item">
                <Image src={image1.src} alt="" fill></Image>
            </figure>
            <figure key={`carousel-structure-item-2`} className="carousel-item">
                <Image src={image2.src} alt="" fill></Image>
            </figure>
            <figure key={`carousel-structure-item-3`} className="carousel-item">
                <Image src={image3.src} alt="" fill></Image>
            </figure>
            <figure key={`carousel-structure-item-4`} className="carousel-item">
                <Image src={image4.src} alt="" fill></Image>
            </figure>
            <figure key={`carousel-structure-item-5`} className="carousel-item">
                <Image src={image5.src} alt="" fill></Image>
            </figure>
            <figure key={`carousel-structure-item-6`} className="carousel-item">
                <Image src={image6.src} alt="" fill></Image>
            </figure>
        </ul>
    )
}