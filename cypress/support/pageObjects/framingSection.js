import selectors from "../selectors";
import GlasspanelSection from "./glassPanelSection";

class FramingSection
{

    framingExpand(){

        cy.get(selectors.framing.expandButton).click();
        
        
    }
    awsSystemSelection(){
        cy.get(selectors.FramingAWS.aws80Awe).click();
    }
    outerframeLibraryBtn(){
        cy.get(selectors.framing.outerframeLibraryButton).click();
    }
    iterateOuterframeFramingOptions(callback){

        cy.get(selectors.framing.framingOptions)
        .should('be.visible')
        .then(($rows) => {
            cy.log(`Total visible framing options found: ${$rows.length}`);

            // Iterate over each framing option by index
            cy.wrap($rows).each(($row, index) => {
                cy.get(selectors.framing.framingOptions) // Re-fetch the rows each time
                    .eq(index)
                    .should('be.visible')
                    .then(($element) => {
                        // Extract text
                        const selectedOption = $element.text().trim();
                        cy.log(`Executing test for framing option: ${selectedOption}`);

                        // Click the element
                        cy.wrap($element).click();

                        // Wait for the page to update (adjust if necessary)
                        cy.wait(500);

                        // Call the callback with the trimmed value
                        callback(selectedOption);
                });
            });
        });
        
    }

    VentFrameSelection(){ 
        cy.get(selectors.framing.outerFrameConfirmButton).click();
        cy.get(selectors.framing.ventFrameLibraryButton).click();
        cy.get(selectors.framing.ventFrameArticle).click();
        cy.get(selectors.framing.ventFrameConfirmButton).click();

        return new GlasspanelSection()
    }


    }



export default FramingSection