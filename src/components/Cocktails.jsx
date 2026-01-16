import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Cocktails = () => {
    useGSAP(() => {
        const parallexTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                scrub: true,
                pin: true,
                start: "top 30%",
                end: "bottom 80%",
                
            }
        })

        parallexTimeline.fromTo('#c-left-leaf', { xPercent: -30 }, { xPercent: 30 })
        parallexTimeline.fromTo('#c-right-leaf', { xPercent: 30 }, { xPercent: -30 })
    })


  return (
    <div id = 'cocktails' className='noisy'>
        <div className='list'>
            <div className='popular'>
                		 <h2>Most popular cocktails:</h2>
                <ul>
                    {cocktailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className='md:me-28'>
                                <h3>{name} </h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
    
        
      <div className="loved">
		 <h2>Most loved mocktails:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
	 </div>
        </div>

  )
}

export default Cocktails
