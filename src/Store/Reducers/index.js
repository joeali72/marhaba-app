import { combineReducers } from "redux";
import { bannerData } from "./bannerData";
import { introData } from './introductionData';
import { aboutData } from './aboutData';
import { whyData } from "./whyData";
import { productsData } from './productsData';
import { testiData } from "./testimonialsData";
import { contactData } from "./contactUsData";
import { reviewData } from './rebiewData';
import { addCart } from './addCart';
import { checkoutData } from "./checkout";

export default combineReducers({
    bannerData: bannerData,
    introData: introData,
    aboutData: aboutData,
    whyData: whyData,
    productsData: productsData,
    testiData: testiData,
    contactData: contactData,
    reviewData: reviewData,
    addCart: addCart,
    checkoutData: checkoutData,
});