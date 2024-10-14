
import { motion } from "framer-motion"
import VideoPlayer from "../ui/VideoPlayer"

export default function VideoS() {
    return (
        <section className='flex-row padding text-center section video'>
            <div className="absolute z-10 -top-1 inset-x-0 mix-blend-overlay bg-blend-overlay">
                <h5 className='xl:text-[92px] text-center leading-none whitespace-nowrap tracking-[0.10em]'>SPOTLIGHT ON CREELE ANIMATION STUDIOS</h5>
            </div>
            <div className="relative z-10">
                <div className="h-screen xl:pb-12 flex flex-col justify-center xl:justify-end items-center">

                    <VideoPlayer />

                    <motion.p
                        initial={{
                            translateY: 10,
                            opacity: 0
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: .5,
                        }}
                        className='text-sm max-w-xs md:max-w-md md:text-base text-pretty mx-auto'>Channels Television Spotlight On Creele Studios Animated Film Based On Yoruba Mythology, ’The Satchel’ </motion.p>
                </div>
            </div>
        </section>
    )
}
