import selectors from "../selectors";

class PdfPage{
  
    pdfViewer(selectedOption){
        cy.get(selectors.pdfView.reportView)  // Get the iframe
  .invoke("attr", "src")       // Extract the PDF URL
  .then((pdfUrl) => {
    cy.log("PDF URL:", pdfUrl);
    
    // Step 2: Download and Parse the PDF
    cy.task("parsePDF", { filePath: pdfUrl }).then((pdfText) => {
      expect(pdfText).to.include(selectedOption);  // Validate text
    });
  });
}

navigateToConfigurPage(){
  cy.get(selectors.configureTab.ConfigureTabLink).click();
}
}
export default new PdfPage;
