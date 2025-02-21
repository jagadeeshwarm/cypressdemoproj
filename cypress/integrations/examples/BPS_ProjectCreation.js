import selectors from "../../support/selectors"
import { login } from "../../support/BPS_Login"



describe('project Creation', function () {
    beforeEach(function () {

        // Load credentials from fixtures before each test
        cy.fixture('credentials').then((data) => {
            this.credentials = data;
        })

    })

    it('My FirstTest case', function () {
        login();

        cy.generateProjectName().then((projectName) => {
            cy.wrap(projectName).as('projectName') //here wrap is written so that project name can be used in further steps
            cy.get(selectors.projectCreationPage.projectInput).type(projectName);
            cy.log('Generated Project Name:', projectName);
        })
        //uncomment when the scenario is ready and remove project search and related code
        // cy.get(selectors.projectCreationPage.locationInput).type('Hyderbad');
        // cy.get(selectors.projectCreationPage.suggestionList).first().click();
        // cy.get(selectors.projectCreationPage.createButton).click();
        cy.get(selectors.projectCreationPage.projectSearch).type('PY_cytest_d7kvw');
        cy.get(selectors.projectCreationPage.projectRow).click();
        cy.get(selectors.projectCreationPage.configuration1_Button).dblclick();
        cy.get(selectors.problemConfigurePage.physicsType_Acoustic).click();
        cy.get(selectors.problemConfigurePage.productType_Window).click();
        cy.get(selectors.problemConfigurePage.operabilityExpand_Button).click();
        cy.get(selectors.problemConfigurePage.operabilityAdd_button).click();
        cy.get(selectors.operabilityType.inward_Select).should('be.visible').click();
        cy.get(selectors.operabilityType.turnTiltButton).click();
        cy.clickOnCanvas(453, 411);
        cy.get(selectors.operabilityType.applyButton).click();
        cy.get(selectors.framing.expandButton).click();
        cy.get(selectors.framing.outerframeLibraryButton).click();
        cy.get(selectors.framing.article382120).click();
        cy.get(selectors.framing.outerFrameConfirmButton).click();
        cy.get(selectors.framing.ventFrameLibraryButton).click();
        cy.get(selectors.framing.ventFrameArticle).click();
        cy.get(selectors.framing.ventFrameConfirmButton).click();
        cy.get(selectors.glasspanel.gpExpandButton).click();
        cy.get(selectors.glasspanel.gpLibraryButton).click();
        cy.get(selectors.glasspanel.gpTripleGlass).click();
        cy.get(selectors.glasspanel.gpGlassDim).click();
        cy.get(selectors.glasspanel.gpConfirmButton).scrollIntoView().should('be.visible').click();











    })

})
