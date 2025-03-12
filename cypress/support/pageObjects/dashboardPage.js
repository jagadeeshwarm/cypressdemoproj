import selectors from "../selectors";
import ProblemConfigurePage from "./problemConfigurePage";
class DashboardPage{

    projectCreation(){

        cy.generateProjectName().then((projectName) => {
            cy.wrap(projectName).as('projectName') //here wrap is written so that project name can be used in further steps
            cy.get(selectors.projectCreationPage.projectInput).type(projectName);
            cy.log('Generated Project Name:', projectName);
        })

        cy.get(selectors.projectCreationPage.locationInput).type('Hyderbad');
        cy.get(selectors.projectCreationPage.suggestionList).first().click();
        cy.get(selectors.projectCreationPage.createButton).click();
        console.log("projectname is :", projectName);
    }

    clickFeatureButtonIfExists() {
      cy.document().then(doc => {
        const element = doc.querySelector(selectors.featureUpdateButton.featureOkButton);
        if (element) {
          cy.get(selectors.featureUpdateButton.featureOkButton, { timeout: 0 }).click();
        } else {
          cy.log('Element not found, skipping...');
        }
      });
    }

searchProject(projectName){
   // cy.get(selectors.featureUpdateButton.featureOkButton).click();
    cy.get(selectors.projectCreationPage.projectSearch).type(projectName);
    cy.get(selectors.projectCreationPage.projectRow).click();
    //cy.get(selectors.projectCreationPage.configuration1_Button).dblclick();
    
    
}

configurationSelect(){
    // Get the initial count of configuration items inside the wrapper
    cy.get(selectors.configSeleElements.newConfig)
.click();
cy.get(selectors.projectCreationPage.projectRow).dblclick();
cy.wait(2000);
cy.get(selectors.configSeleElements.configList)
.find(selectors.configSeleElements.configElement)
.then(($listItems) => {
const initialItemCount = $listItems.length;

// Wait for the new item to appear in the list and verify that the count increased by 1
cy.get(selectors.configSeleElements.configList)
.find(selectors.configSeleElements.configElement)
.should('have.length', initialItemCount) // Ensure the count has increased
.last() // Get the last added item
.should('contain.text', `Configuration ${initialItemCount}`).dblclick(); // Check the name of the new configuration


});
return new ProblemConfigurePage()
}

}
export default DashboardPage;