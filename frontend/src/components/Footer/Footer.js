import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React from 'react'
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';
import { colors } from '@mui/material';

const Footer = () => {
    const languageContext = useContext(LanguageContext);
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h4>{languageContext.dictionary["Help"]}</h4>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link" >
                                {languageContext.dictionary["Shipping"]}
                            </li>
                            <li className="help__link">
                                {languageContext.dictionary["Refund"]}
                            </li>
                            <li className="help__link">
                                {languageContext.dictionary["FQA"]}
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h4>{languageContext.dictionary["ContactUs"]}</h4>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+251911268571</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>ethiowekil@gmail.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>{languageContext.dictionary["AddisAbabaEthiopia"]}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h4>{languageContext.dictionary["StayConnected"]}</h4>
                        </div>
                    <ul className="footer__social__links">
                            <li className="social__link">
                                <TwitterIcon />
                            </li>
                            <li className="social__link">
                                <InstagramIcon />
                            </li>
                            <li className="social__link">
                                <YouTubeIcon />
                            </li>
                            <li className="social__link">
                                <TelegramIcon />
                            </li>
                            <li className="social__link">
                                <PinterestIcon />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">{languageContext.dictionary["©2023EthioWekil"]}</li>
                        <li className="footer__terms__condition">{languageContext.dictionary["developedBy"]}</li>
                    </ul>
                     </div>
            </div>
        </footer>
     );
}
 
export default Footer;