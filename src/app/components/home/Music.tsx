
import { HeadingOverlay } from '../ui/HeadingOverlay';
import MusicCarousel from '../ui/MusicCarousel';
import MusisPick from '../../assets/images/music-pick.png';
import Image from 'next/image';

export default function Music() {
    return (
        <section className='padding items-center music h-screen section'>
            <HeadingOverlay label='Our Music' />

            <div className='relative z-10 text-center'>
                <MusicCarousel />
            </div>

            <Image src={MusisPick} alt="Art" className='absolute w-40 md:w-96 xl:w-[450px] left-0 bottom-0 xl:-bottom-16' />
        </section>
    )
}
