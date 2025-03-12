import selectors from "../selectors";
import AccousticSection from "./accousiticSection";


class GlasspanelSection{

    gpSelection(gpBlockInputValue){
        cy.get(selectors.glasspanel.gpExpandButton).click();
        cy.get(selectors.glasspanel.gpLibraryButton).click();
        cy.get(selectors.glasspanel.gpTripleGlass).click();
        cy.get(selectors.glasspanel.gpGlassDim).click();
        cy.viewport(1920, 1080);
        cy.get(selectors.glasspanel.gpConfirmButton).scrollIntoView().should('be.visible').click();
        cy.get(selectors.glasspanel.gpBlock).clear();
        cy.get(selectors.glasspanel.gpBlock).type(gpBlockInputValue);

        return new AccousticSection();

    }
}
export default GlasspanelSection;