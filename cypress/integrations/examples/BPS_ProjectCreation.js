import selectors from "../../support/selectors"
import { login } from "../../support/BPS_Login"
import HomePage from "../../support/pageObjects/homePage"
import UnifiedModel from "../../support/pageObjects/unifiedApi"
import unifiedApi from "../../support/pageObjects/unifiedApi"
import PdfPage from "../../support/pageObjects/pdf"


describe('Acoustic Product Creation', function () {
    beforeEach(function () {

        // Load credentials from fixtures before each test
        cy.fixture('credentials').then((data) => {
            this.data = data;
            this.homePage = new HomePage()
            cy.viewport(1920, 1080);


        })

    })

    it('Acoustic Product Creation with Triple glass', function () {

        const { username, password } = this.data;
        console.log('Username:', username);
        console.log('Password:', password);
        this.homePage.goToBpsSite()
        const dashboardPage = this.homePage.login(username, password);
        cy.wait(4000);
        dashboardPage.clickFeatureButtonIfExists();
        dashboardPage.searchProject(this.data.projectName);
        const problemConfigurePage = dashboardPage.configurationSelect();
        problemConfigurePage.physicsType_Structural();
        const operabilityType = problemConfigurePage.productType();
        const framingType = operabilityType.operabilitySelection();
        framingType.framingExpand();
        cy.wait(2000);
        framingType.awsSystemSelection();
        framingType.outerframeLibraryBtn();

        framingType.iterateOuterframeFramingOptions((selectedOption) => {
            cy.log(`Starting full test execution for: ${selectedOption}`)
            cy.trimValue(selectedOption).then((trimmedValue) => {
                cy.wrap(trimmedValue).as("trimmedOption");
                cy.log(`Extracted value: ${trimmedValue}`);
            })
                const gpType = framingType.VentFrameSelection();

                const accousticSection = gpType.gpSelection(this.data.gpBlockInputValue);
                // accousticSection.accousticLibrary();
                //accousticSection.accousticCodeSelection(this.data.standardSelection);
                cy.wait(5000);
                const reportTab = accousticSection.computeConfirm();
                unifiedApi.interceptApiRequest();
                unifiedApi.getProjectNameFromPayload();
                reportTab.reportLink();
                cy.get("@trimmedOption").then((articleName) => {
                    PdfPage.pdfViewer(articleName); // Pass trimmed value dynamically
                });
                PdfPage.navigateToConfigurPage();
                framingType.framingExpand();
                framingType.outerframeLibraryBtn();

                cy.log(`Test execution completed for: ${selectedOption}`);




            });

        });

    })


