'use client'
import Studio from '../components/about/Studio'
import Vision from '../components/about/Vision'
import Navbar from '../components/Navbar'
import ReactFullpage from '@fullpage/react-fullpage'
import SoundDesignVid from '../assets/images/sound-design.png';
import AnimationVid from '../assets/motion_graphics/Animation.gif'
import StoryVid from '../assets/motion_graphics/book2.gif'
import OurServices from '../components/about/OurServices'
import ServiceImage from '../assets/artifacts/services.png';
import Career from '../components/about/Career'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function About() {

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.fullpage_api) {
                window.fullpage_api.moveTo(1);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <Navbar />
            <ReactFullpage
                navigation
                credits={{
                    enabled: false
                }}  
                touchSensitivity={5}
                scrollingSpeed={1000}
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Studio />
                            <Vision />
                            {
                                ServicesContent.map((item, idx) => {
                                    return (
                                        <OurServices
                                            key={idx}
                                            heading={item.heading}
                                            content={item.content}
                                            image={ServiceImage}
                                            video={item.video}
                                        />
                                    )
                                })
                            }
                            <Career />
                            <Footer />
                        </ReactFullpage.Wrapper>
                    )
                }
                }
            />
        </>

    )
}




const ServicesContent = [
    {
        heading: '⁠Animation, Storytelling, Character Development',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.',
        video: AnimationVid
    },
    {
        heading: 'Sound design',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.',
        video: SoundDesignVid
    },
    {
        heading: 'Storybooks and Comics',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit Lorem ipsum dolor sit amet consectetur.',
        video: StoryVid
    },
]