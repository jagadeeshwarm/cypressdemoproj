import selectors from "../selectors";

class ReportTab{

    reportLink(){
        cy.get(selectors.reportTab.reportLink).click();
        
    }
}
export default ReportTab;