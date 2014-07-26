require.config({
    baseUrl : './bower_components',

    paths : {
        'jquery' : 'jquery/dist/jquery',
        'underscore' : 'underscore/underscore',
        'backbone' : 'backbone/backbone',
        'bootstrap' : 'bootstrap/dist/js/bootstrap',
        'initscript' : '../js/scripts',
        'dcjqaccordion': 'jquery-dcjqaccordion/jquery.dcjqaccordion',
        'scrollTo' : 'jquery.scrollTo/jquery.scrollTo',
        'slimscroll' : 'jquery.slimscroll/jquery.slimscroll',
        'nicescroll' : 'jquery.nicescroll/jquery.nicescroll',
        'sparkline' : 'jquery.sparkline/dist/jquery.sparkline',
        'flot' : 'flot.tooltip/js/jquery.flot',
        'flot-tooltip' : 'flot.tooltip/js/jquery.flot.tooltip',
        'flot-pie' : 'flot/jquery.flot.pie',
        'flot-resize' : 'flot/jquery.flot.resize',
        'easypiechart' : 'easypie/dist/easypiechart'
    },
    shim : {
        'backbone' : {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps : ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports : 'Backbone'
        },
        'underscore' : {
            exports : '_'
        },
        'bootstrap' : {
            deps : ['jquery']
        },
        'initscript' : {
            deps : ['jquery']
        },
        'dcjqaccordion' : {
            deps : ['jquery']
        },
        'scrollTo' : {
            deps : ['jquery']
        },
        'slimscroll' : {
            deps : ['jquery']
        },
        'nicescroll' : {
            deps : ['jquery']
        },
        'sparkline' : {
            deps : ['jquery']
        },
        'flot' : {
            deps : ['jquery']
        },
        'flot-tooltip' : {
            deps : ['flot']
        },
        'flot-pie' : {
            deps : ['flot']
        },
        'flot-resize' : {
            deps : ['flot']
        },
        'easypiechart' : {
            deps : ['jquery']
        }
    }
});
// Start the main app logic.
define([
    'jquery',
    'backbone',
    'initscript',
    'dcjqaccordion',
    'bootstrap',
    'scrollTo',
    'slimscroll',
    'nicescroll',
    'sparkline',
    'flot-tooltip',
    'flot-pie',
    'flot-resize',
    'easypiechart',
],
    function ($,Backbone,initscript) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
        var numbers = [10, 5, 100, 2, 1000];

        console.log(_.min(numbers));
});