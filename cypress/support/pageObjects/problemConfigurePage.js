import selectors from "../selectors";
import OperabilitySection from "./operabilitySection";


class ProblemConfigurePage
{
    

physicsType_Acoustic()
{
    cy.get(selectors.problemConfigurePage.physicsType_Acoustic).click();
    
    
    return this;
}
physicsType_Structural()
{
cy.get(selectors.problemConfigurePage.physicsType_Structural).click();
    
return this;

}
productType(){
    cy.get(selectors.problemConfigurePage.productType_Window).click();

    return new OperabilitySection()
}
}

export default ProblemConfigurePage;