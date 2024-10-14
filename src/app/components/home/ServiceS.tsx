import FillBackground from '../../assets/images/fill_background_two_with_shadow.jpeg';
import { motion } from "framer-motion"
import { HeadingOverlay } from '../ui/HeadingOverlay';
import ServicesCarousel from '../ui/ServicesCarousel';
import Image from 'next/image';

export default function ServiceS() {
    return (
        <section className='padding relative section services'>
            <HeadingOverlay label='Our Services' />
            <Image
                src={FillBackground}
                alt='Background'
                sizes='100%'
                className='z-0 object-cover object-center absolute h-full w-full inset-0'
            />
            <div className="h-screen flex items-center justify-center">
                <div className='relative z-10 text-center space-y-4 '>
                    <ServicesCarousel />
                </div>
            </div>
        </section>
    )
}