const selectors = {
  loginPage: {
    loginButton: '[data-cy="click-login"]',
    usernameInput: '#username',
    passwordInput: '#password',
    loginSubmit: 'button[type="submit"]'
  },
  projectCreationPage: {
    projectInput:'#new-project-name',
    locationInput: '#new-project-location',
    suggestionList: '.pac-container .pac-item',
    createButton: '[data-cy="createProjectButton"]',
    projectSearch: '.bps-table-filter-custom-input',
    projectRow: '.ant-table-selected-row > .bps-fst-column > .ng-star-inserted',
    configuration1_Button: '.ant-table-selected-row > .bps-fst-column > .expandable-table-td-content'

  },
  problemConfigurePage:{
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
    outerframeLibraryButton:'#sps-sightline-input-container > #sps-sightline-dropdown-container > .sps-operability-vent-frame-button-container > .ant-btn',
    article382120: '.bps-table-section > .bps-table-glass_profile > .bps-table > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > :nth-child(2) > .bps-fst-column',
    outerFrameConfirmButton: 'app-outer-table button[class="lp-confirm-btn ant-btn ant-btn-variation-4"]',
    ventFrameLibraryButton: '#sps-operability-vent-frame-container > #sps-sightline-dropdown-container > .sps-operability-vent-frame-button-container > .ant-btn',
    ventFrameArticle: 'app-vent-table.ng-star-inserted > .sps-left-popout > .lp-panel > .lp-panel-top > .bpsTableContent > .bps-table-section > .bps-table-glass_profile > .bps-table > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > :nth-child(2) > .bps-fst-column',
    ventFrameConfirmButton:'app-vent-table button[class="lp-confirm-btn ant-btn ant-btn-variation-4"]',
    
  },
  glasspanel:{
      gpExpandButton: '[data-cy="glass-accordian"] > .ant-collapse-header',
      gpLibraryButton: '[data-cy="glass-library-button"]',
      gpTripleGlass: '[data-cy="triple-glass-tab"]',
      gpcustom_NewGlass: '[data-cy="new-custom-glass-tab"]',
      gpGlassDim :'[data-cy="predefined-glass-list"] > .bps-table-glass_profile > .bps-table > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > :nth-child(2) > .bps-fst-column',
      gpConfirmButton: '[data-cy="confirm-glass"]',
  }
};

export default selectors;
