import selectors from "../selectors";
import ReportTab from "./reportTab";



class AccousticSection {

    accousticLibrary() 
    {
        cy.get(selectors.accousticPanel.accousticExpansion).click();
        cy.get(selectors.accousticPanel.calculationArrow).click();

        return this;
    
    }

  

    accousticCodeSelection(standardSelection)
     {
        cy.get(selectors.accousticPanel.classificationOptions).click()
        cy.get(selectors.accousticPanel.listItemSelect) 
        .should('be.visible')
        .contains(String(standardSelection).trim()) 
        .click(); 
    
        cy.get(selectors.accousticPanel.confirmButton).click();

        return this;
        
    }
    
    computeConfirm(){
        cy.get(selectors.compute.computeButton).click();
        
        return new ReportTab();
    }
    
}

export default AccousticSection;