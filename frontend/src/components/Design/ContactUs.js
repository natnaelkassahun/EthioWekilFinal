import React from 'react'
import gps from "../../asset/brand/map.PNG"
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';
import './ContactUs.css'



const Design2 = () => {
	const languageContext = useContext(LanguageContext);
	return(
    <section class="py-5">
	<div class="container">
		<div class="row justify-content-center text-center mb-3 mb-lg-5">
			<div class="col-lg-8 col-xxl-7">
				
				<h1 >{languageContext.dictionary["ContactUs"]}</h1>
				
				<span class="text-muted">{languageContext.dictionary["ContactUs_body"]}</span>
            </div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<form>
					<div class="row">
						<div class="col-12">
							<div class="mb-3">
								<input class="form-control bg-light" placeholder={languageContext.dictionary["FullName"]} type="text"/>
							</div>
						</div>
						<div class="col-12">
							<div class="mb-3">
								<input class="form-control bg-light" placeholder={languageContext.dictionary["EmailAddress"]} type="email"/>
							</div>
						</div>
						<div class="col-12">
							<div class="mb-3">
								<textarea class="form-control bg-light" placeholder={languageContext.dictionary["YourMessage"]} rows="5"></textarea>
							</div>
						</div>
						<div class="col-4">
							<div class="d-grid">
								<button class="btn btn-primary" type="submit">{languageContext.dictionary["SendMessage"]}</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-md-6">
				<div class="mt-4 mt-md-0"><img alt="Map" class="img-fluid" src= {gps} /></div>
				<div class="mt-3">
					<button class="gps-button" ><a  href="https://www.google.com/maps/place/SIDAMO+TERA+%231+BUILDING+%E1%88%B2%E1%8B%B3%E1%88%9E+%E1%89%B0%E1%88%AB+%E1%89%81%E1%8C%A5%E1%88%AD+1+%E1%88%85%E1%8A%95%E1%8D%83/@9.0298849,38.7391516,18.08z/data=!4m6!3m5!1s0x164b85f616c0ea29:0x98059d376113176f!8m2!3d9.0299391!4d38.7403158!16s%2Fg%2F11j383ppzh!5m2!1e4!1e1?entry=ttu">{languageContext.dictionary["GPSLocation"]}</a></button>
				    <p>{languageContext.dictionary["GPSLocation_body"]}</p>
				</div>
			</div>
		</div>
	</div>
</section>
);
}



export default Design2;
