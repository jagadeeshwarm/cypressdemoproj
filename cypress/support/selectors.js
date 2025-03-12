const selectors = {
  loginPage: {
    loginButton: '[data-cy="click-login"]',
    usernameInput: '#username',
    passwordInput: '#password',
    loginSubmit: 'button[type="submit"]'
  },
  featureUpdateButton:{
    featureOkButton:'[data-cy="featureButton"]'
  },
  projectCreationPage: {
    projectInput:'#new-project-name',
    locationInput: '#new-project-location',
    suggestionList: '.pac-container .pac-item',
    createButton: '[data-cy="createProjectButton"]',
    projectSearch: '.bps-table-filter-custom-input',
    projectsTable:'.ant-table-body',
    projectRow: '.ant-table-row-expand-icon',
    configuration1_Button: '.expandable-panel-list-item-title-text',
    

  },

  configSeleElements:{
    newConfig: '[src="/assets/Images/icons/sps_round_icon_newconfiguration_white.svg"]',
    configList:'.expandable-panel-table-wrapper',
    configElement:'.expandable-panel-list-item-title-text',

  },
  problemConfigurePage:{
    physicsType_Structural: '[data-cy="structural-physics-type"] > .ant-checkbox > .ant-checkbox-input',
    physicsType_Acoustic: '[data-cy="acoustic-physics-type"] > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input',
    productType_Window: '[data-cy="window-product-type"]',
    operabilityExpand_Button: '[data-cy="operability-accordian"] > .ant-collapse-header',
    operabilityAdd_button: '[data-cy="operability-picker"]',
  },
  operabilityType:{
    inward_Select: '[data-cy="inward"] > .bps-custom-content-radio',
    turnTiltButton: '[data-cy="turn-tilt"] > .ng-star-inserted',
    sideHungButton: '[data-cy="side-hung"] > .ng-star-inserted',
    bottomHungButton: '[data-cy="bottom-hung"]',
    doubleVentButton:'[data-cy="double-vent"]',
    applyButton: '[data-cy="operability-apply-btn"]'
  },
  iframe:{
    iframeSelection: '[data-cy="iframe"]',
  },
  framing:{
    expandButton:'[data-cy="framing-accordian"] > .ant-collapse-header',
    outerframeLibraryButton:':nth-child(4) > .pl-side-panel-section-item > .pl-side-panel-section-item-content > .pl-side-panel-btn',
    //article481790: '.bps-table-section > .bps-table-glass_profile > .bps-table > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > :nth-child(2) > .bps-fst-column',
    outerFrameConfirmButton: 'app-outer-table button[class="lp-confirm-btn ant-btn ant-btn-variation-4"]',
    ventFrameLibraryButton: '.pl-side-panel-section-wrapper.ng-star-inserted > .pl-side-panel-section-item > .pl-side-panel-section-item-content > .pl-side-panel-btn',
    ventFrameArticle: 'app-vent-table.ng-star-inserted > .sps-left-popout > .lp-panel > .lp-panel-top > .bpsTableContent > .bps-table-section > .bps-table-glass_profile > .bps-table > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > :nth-child(2) > .bps-fst-column',
    ventFrameConfirmButton:'app-vent-table button[class="lp-confirm-btn ant-btn ant-btn-variation-4"]',
    framingOptions: '.bps-table-section .bps-table-glass_profile .bps-table tbody tr:visible'
    
  },
  glasspanel:{
      gpExpandButton: '[data-cy="glass-accordian"] > .ant-collapse-header',
      gpLibraryButton: '[data-cy="glass-library-button"]',
      gpTripleGlass: '[data-cy="triple-glass-tab"]',
      gpcustom_NewGlass: '[data-cy="new-custom-glass-tab"]',
      gpGlassDim :'[data-cy="predefined-glass-list"] > .bps-table-glass_profile > .bps-table > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > :nth-child(2) > .bps-fst-column',
      gpConfirmButton: '[data-cy="confirm-glass"]',
      gpBlock: '#sps-psi-value-input-box',
  },
  accousticPanel:{
    accousticExpansion: '[data-cy="acoustic-accordian"] > .ant-collapse-header',
    calculationArrow: '[data-cy="calculation-method-arrow"]',
    classificationOptions:'[data-cy="classification-options"] > .ant-select-selection',
    listItemSelect: '.ant-select-dropdown-menu',
    confirmButton: '[data-cy="classification-container-confirm"]'

  },
  wallPerimeterEffect:{
    switchOn: '[data-cy="wall-perimeter-switch"] > .ant-switch',
    dropdown: '[data-cy="wall-type"] > .ant-select-selection',
    dropdownList:'.ant-select-dropdown-menu',
    wallType3:'.ant-select-dropdown-menu > :nth-child(3)',
    heightInput:'[data-cy="wall-perimeter-height"]',
    widthInput: '[data-cy="wall-perimeter-width"]',
    roomAreaInput:'[data-cy="wall-perimeter-room-area"]'
  },
  compute:{
    computeButton:'[data-cy="compute-button"]'
  },

  resultTab:{

  },
  reportTab:{
    reportLink: '#nav-right-a > :nth-child(2) > .nav-button-text > a',
    
  },
  downloadPdf:{
    downloadButton: '[data-cy="download-button"]',
 
  },
  pdfView:{
    reportView:'#sps-report-viewer',
  },

  FramingAWS:{
      aws80Awe: '[data-cy="AWS 80 AWE"] > p',
      aws75BSSIplus: '[data-cy="AWS 75 BS.SI+"] > p',
  },
  configureTab:{
    ConfigureTabLink:'[data-cy="configure-tab"]',
  }

};

export default selectors;
