sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'attachment/test/integration/FirstJourney',
		'attachment/test/integration/pages/collegeList',
		'attachment/test/integration/pages/collegeObjectPage'
    ],
    function(JourneyRunner, opaJourney, collegeList, collegeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('attachment') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecollegeList: collegeList,
					onThecollegeObjectPage: collegeObjectPage
                }
            },
            opaJourney.run
        );
    }
);