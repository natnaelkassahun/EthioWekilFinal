import React from 'react'
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';
import icon from '../../asset/brand/right.png';
import information from '../../asset/brand/information.jpg';
import inventory from '../../asset/brand/inventory.jpg';
import order from '../../asset/brand/order.png';
import online from '../../asset/brand/online.jpg';
import './Service.css'
import { useSpring, animated } from '@react-spring/web'
import { Waypoint } from "react-waypoint";


const Design3 = () => {
    //onMouseEnter={() => set(updateHover(true))} onMouseLeave={() => set(updateHover(false))
	const languageContext = useContext(LanguageContext);
	const [props, set] = useSpring(() => ({
		transform: `scale(1)`,
		boxShadow: `0px 5px 15px 0px rgba(0, 0, 0, 0.10)`,
		from: { 
			transform: `scale(1)`,
			boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.10)`,
			borderRadius: `15px`,
		},
		config: { tension: 400, mass: 4, velocity: 2 ,duration: 500}
	}));
	const updateHover = (hovering) => ({
		transform: `scale(${ hovering ? 0.9 : 1})`,
		boxShadow: `0px ${hovering ? '10px 20px' : '5px 15px'} 0px rgba(0, 0, 0, 0.10)`
	})


	return(
		
    <section class="py-5">
		<div class="service__container">
	<div class="container">
		<div class="row justify-content-center text-center mb-3">
			<div class="col-lg-8 col-xl-7">
				<h1> {languageContext.dictionary["ourService_header"]}</h1>
				<p class="text-font">{languageContext.dictionary["ourService_body"]}</p>
			</div>
		</div>
		<div class="row g-4 g-md-5">
			<div class="col-md-6">
			
				<div class="d-flex">
					<div class="text-primary me-4">
						<img width={30} class="bi bi-aspect-ratio" src= {information}/>
					</div>
					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold"> {languageContext.dictionary["ProductInfo"]}</h5>
						<p>{languageContext.dictionary["ProductInfo_body"]}</p>
					</div>
				</div>
				
			</div>
			<div class="col-md-4">
			
				<div class="d-flex">
					<div class="text-primary me-4">
					  <img width={30} class="bi bi-aspect-ratio" src= {order}/>
					</div>
					
					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold">{languageContext.dictionary["OrderManagement"]}</h5>
						<p>{languageContext.dictionary["OrderManagement_body"]}</p>
					</div>
				</div>
							
			</div>
			<div class="col-md-6">
						
			   <div class="d-flex">
					<div class="text-primary me-4">
					     <img width={30} class="bi bi-aspect-ratio" src= {inventory}/>
					</div>
					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold">{languageContext.dictionary["InventoryManagement"]}</h5>
						<p>{languageContext.dictionary["InventoryManagement_body"]}</p>
					</div>
				</div>
			
			  </div>
			
			<div class="col-md-6">
				<div class="d-flex">
					<div class="text-primary me-4">
					<img width={30} class="bi bi-aspect-ratio" src= {online}/>
					</div>

					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold">{languageContext.dictionary["BothOnlineAndOffline"]}</h5>
						<p>{languageContext.dictionary["BothOnlineAndOffline_body"]}</p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	</div>
</section>

	);
}



export default Design3;
