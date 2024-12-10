import hero from './components/hero';
import setupMegaMenu from "./components/setupMegaMenu";
import toggleMenuVisibility from "./components/toggleMenuVisibility";


document.addEventListener("DOMContentLoaded", function() {
    hero();
    setupMegaMenu();
    toggleMenuVisibility();
});