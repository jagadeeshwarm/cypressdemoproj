import selectors from "../selectors";
import FramingSection from "./framingSection";

class OperabilitySection{

    operabilitySelection(iframe,canvas)
    {
        cy.get(selectors.problemConfigurePage.operabilityExpand_Button).click();
        cy.get(selectors.problemConfigurePage.operabilityAdd_button).click();
        cy.get(selectors.operabilityType.inward_Select).should('be.visible').click();
        cy.get(selectors.operabilityType.turnTiltButton).click();
       // cy.clickOnCanvas(453, 411);
        //cy.get('canvas').realClick({ position: 'center' }); // Clicks at the center
        cy.clickCanvasCenter('iframe', 'canvas')
          
        cy.get(selectors.operabilityType.applyButton).click();

        return new FramingSection()
    }
  
}
export default OperabilitySection;