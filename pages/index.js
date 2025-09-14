export {BasePage} from "./BasePage.js";
export {LoginPage} from "./LoginPage.js";  
export {HomePage} from "./HomePage.js";   
// A barrel file is a single module 
// (usually named index.js or index.ts) 
// that re-exports multiple modules from a folder. 
//It lets you import everything from one central place
//  instead of referencing each file individually 
// export { default as BasePage } from './BasePage.js';
// export { default as LoginPage } from './LoginPage.js';
//export { default as DashboardPage } from './DashboardPage.js';
//in test fules we can import like below
//import { BasePage, LoginPage, DashboardPage } from '../pages';

