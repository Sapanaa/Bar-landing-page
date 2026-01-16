import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/SplitText.js'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = React.useRef() 
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    useGSAP(() => {
        const split = new SplitText('.title', { type: 'chars, words' })
       const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

        gsap.from(split.chars, {
            yPercent: 100,
            duration: 1,
            stagger: 0.04,
            ease: 'expo.out',
        })
        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            duration: 1,
            stagger: 0.04,
            ease: 'expo.out',
            delay: 0.5
        })


        const startValue = isMobile ? "top 50%" : "center 60%"; //top reaches 50% animation start 
        const endValue = isMobile ? "120% top" : "bottom top"; // top 
        let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};

    }, [])

  return (
    <>
    <section id='hero' className='noisy'>
     <h1  className='title'>Margarita</h1>

        <div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content ">
			<div className="space-y-5 hidden md:block">
			 <p>Cool. Crisp. Classic.</p>
			 <p className="subtitle">
				Sip the Spirit <br /> of Summer
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
			</div>
		 </div>
		</div>
    </section>

     <div className="video absolute inset-0">
		<video
        ref = {videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>
	 </div>
    </>
  )
}

export default Hero
