//import icon from "./img/service-icon-1.webp";
//import iconTwo from "./img/service-icon-2.webp";
//import iconThree from "./img/service-icon-3.webp";
import React from 'react'
import './Features.css'
import img from "../../asset/brand/img.jpg"
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';
import price from '../../asset/brand/price.png';
import delivery from '../../asset/brand/delivery.png';
import Insurance from '../../asset/brand/Insurance.png';
import legal from '../../asset/brand/legal.png';
import { useRef, useState } from 'react';
import OBJmodel from './Scene/OBJmodelScene';

const Design = () => {
	const languageContext = useContext(LanguageContext);

   return(
  <div className="bg_container">
  <section class="py-5">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-md-6 text-center">
				<div class="pe-lg-5 model-container" >
				<img class="image-container" src= {img}/>
				</div>
			</div>
			<div class="col-md-6" style={{ color: "#fff" }}>
				<div class="ps-lg-5 mt-4 mt-lg-0" >
					<h1 style={{ color: "#fff" }}>{languageContext.dictionary["Features"]}</h1>
					<h2 class="display-6 fw-bold">{languageContext.dictionary["OurFeatures"]}</h2>
					<div class="OurFeatures_body">
					   {languageContext.dictionary["OurFeatures_body"]}
					</div>
					<div class="row">
						
						<div class="col-sm-6 text-center">
							<div class="py-4">
								<div class="text-muted">
								<img width={40} class="bi bi-aspect-ratio" src= {price}/>
								</div>
								<h5 class="mt-3">{languageContext.dictionary["MinimumPrice"]}</h5>
							</div>
						</div>
						<div class="col-sm-6 text-center">
							<div class="py-4">
								<div class="text-muted">
								<img width={40} class="bi bi-aspect-ratio" src= {delivery}/>
								</div>
								<h5 class="mt-3">{languageContext.dictionary["Delivery"]}</h5>
							</div>
						</div>
						<div class="col-sm-6 text-center">
							<div class="py-4">
								<div class="text-muted">
								<img width={40} class="bi bi-aspect-ratio" src= {Insurance}/></div>
								<h5 class="mt-3">{languageContext.dictionary["Insurance"]}</h5>
							</div>
						</div>
						<div class="col-sm-6 text-center">
							<div class="py-4">
								<div class="text-muted">
								<img width={40} class="bi bi-aspect-ratio" src= {legal}/>
								</div>
								<h5 class="mt-3">{languageContext.dictionary["LegalIntity"]}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
);
}


export default Design;
