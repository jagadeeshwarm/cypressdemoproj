
class UnifiedModel {
    // Intercepts the POST request and captures the request payload
    interceptApiRequest() {
        const apiUrl = Cypress.env("unifiedModelEndPoint");
        cy.intercept('POST', apiUrl).as('postApiData');
    }


    // Retrieve the captured payload and extract the Project Name
    getProjectNameFromPayload() {
        cy.wait('@postApiData').then((interception) => {
            // Access the ProblemSetting object in the response
            const problemSetting = interception.response.body.ProblemSetting;
            const projectName = problemSetting.ProjectName;

            // Log the ProjectName to the console for verification
            cy.log('Project Name:', projectName);
        });
    }
}
export default new UnifiedModel();