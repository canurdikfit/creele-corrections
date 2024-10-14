'use client'
import Navbar from '../components/Navbar'
import ReactFullpage from '@fullpage/react-fullpage'
import ContactC from '../components/contact/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';


export default function Contact() {

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
                            <ContactC page={true} />
                            <Footer />
                        </ReactFullpage.Wrapper>
                    )
                }
                }
            />
        </>

    )
}
