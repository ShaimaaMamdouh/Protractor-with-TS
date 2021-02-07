exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['scenario1.js'],


 suites: {
    //Calculator: 'Calculator/spec.js',
    Scenario1: './src/Scenario1.js'
      //['tests/e2e/contact_search/**/*Spec.js',
      //'tests/e2e/venue_search/**/*Spec.js']
},
  directConnect: true,
  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]*/

  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  onPrepare: function(){ //configure junit xml report

    /*var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
       consolidateAll: true,
       filePrefix: 'guitest-xmloutput',
       savePath: 'Reports'
    }));*/

    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
    var HtmlReporter = require('protractor-beautiful-reporter');
		jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Reports/screenshots'
   }).getJasmine2Reporter());

  },
  onComplete() { 
    //global test tear-down goes here 
 }  


};