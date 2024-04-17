import React , {useState} from 'react'
import Image from 'next/image';
import './style.css';

import imageOne from '../../public/Images/tranding-food-1.png';
import imageTwo from '../../public/Images/tranding-food-2.png';
import imageThree from '../../public/Images/tranding-food-3.png';
import imageFour from '../../public/Images/tranding-food-4.png';
import imageFive from '../../public/Images/tranding-food-5.png';
import imageSix from '../../public/Images/tranding-food-6.png';
import prevEnabled from '../../public/svg/previous-enabled.svg';
import prevDisabled from '../../public/svg/previous-disabled.svg';
import nextEnabled from '../../public/svg/next-enabled.svg';
import nextDisabled from '../../public/svg/next-disabled.svg';


const texts = [
    {
        title: "Immersive gaming experience",
        description:
            "adipisicing elit. Iure doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
    },
    {
        title: "On demand support when you need it",
        description:
            "doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
    },
    {
        title: "Accessible and inclusive to all",
        description:
            "Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
    },
];

 export default function () {
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState('next');

    const handleNext =()=>{
        setTransitionDirection('next');
        setActiveIndex(previndex=> previndex===2? previndex : previndex+1);
    }

    const handlePrevious=()=>{
        setTransitionDirection('previous');
        setActiveIndex(previndex=> previndex===0 ? 0 : previndex -1);
    }

    const textVariants={
        hidden:{
            opacity: 0,
            x: transitionDirection ==='next' ? 100 : -100,
            transition: {duration: 0.5, ease: 'easeInOut'}
        },
        visible:{
            opacity: 1,
            x:0,
            transition : {duration: 0.5, ease: 'easeInOut'}

        }
    }

    const textContainerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };
  return (
    <div className='container'>

        <div className='contentContainer'>
            <div className='titleContainer'>
                <h1> {texts[activeIndex].title}</h1>
            </div>
            <div className='descriptionContianer'>
                <p> {texts[activeIndex].description} 

                </p>
            </div>
            <div className='buttonContainer'>
                <button>Learn more</button>
            </div>

        </div>
        <div className='imageContainer' >
            <div className='firstContainer' animate={{
                        opacity:
                            activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                        x:
                            activeIndex === 0
                                ? "0"
                                : activeIndex === 1
                                ? "96px"
                                : "96px",
                        scale:
                            activeIndex === 0
                                ? 1
                                : activeIndex === 1
                                ? 1.2
                                : 1.2,
                    }}
                    transition={{
                        duration: 0.5, // Animation duration in seconds
                        delay: 0, // Delay before the animation starts in seconds
                        ease: "easeInOut", // Easing function for the animation
                    }}>
                <Image className='first' src={imageOne} alt='first image' />
            </div>
            <div className='secondContainer'
                    animate={{
                        opacity:
                            activeIndex === 0
                                ? 0.66
                                : activeIndex === 1
                                ? 1
                                : 0,
                        x:
                            activeIndex === 0
                                ? "-96px"
                                : activeIndex === 1
                                ? "0"
                                : "96px",
                        scale:
                            activeIndex === 0
                                ? 0.8
                                : activeIndex === 1
                                ? 1
                                : 1.2,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut",
                    }} >
                <Image className="second" src={imageTwo} alt='first image' />

            </div>
            <div className='thirdContainer' animate={{
                        opacity:
                            activeIndex === 0
                                ? 0.33
                                : activeIndex === 1
                                ? 0.66
                                : 1,
                        x:
                            activeIndex === 0
                                ? "-192px"
                                : activeIndex === 1
                                ? "-96px"
                                : "0",
                        scale:
                            activeIndex === 0
                                ? 0.6
                                : activeIndex === 1
                                ? 0.8
                                : 1,
                    }}
                    transition={{
                        duration: 0.5, // Animation duration in seconds
                        delay: 0, // Delay before the animation starts in seconds
                        ease: "easeInOut", // Easing function for the animation
                    }}>
                <Image className ="third" src={imageThree} alt='first image' />

            </div>

            <div className='controls'>
            <button className={`${activeIndex === 0 ? 'disabled' : 'previousBtn'}`} onClick={handlePrevious}>
                    <Image src={activeIndex ===0 ? prevDisabled: prevEnabled} alt='previous btn' />
                </button>
                <button className={`${activeIndex ===2? 'disabled': 'nextBtn'}`} onClick={handleNext}>
                    <Image src={activeIndex ===2 ? nextDisabled : nextEnabled} alt='next btn' />
                </button>

            </div>
        </div>
        <h1>this will be heading</h1>
        <p>this will be p tag </p>
        <button>this is a button</button>
        <h1>this will be heading</h1>
        <p>this will be p tag </p>
        <button>this is a button</button>

    </div>
  )
}
