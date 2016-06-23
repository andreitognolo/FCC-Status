/*global $:false */
/*jshint quotmark: false */
/*jshint loopfunc: true */
/*jslint latedef:false*/
/*jslint browser:true */
/*jshint maxparams: 5 */
/*global $:false, define, console*/


define([], function () {
    'use strict';


    return {
        getPoints: function (uname, cb) {


            if (uname.length !== 0) {
                var points = 0;
                var url = 'https://www.freecodecamp.com/api/users/about?username=' + uname.toLowerCase();

                console.log("\n**** URL " + url);


                $.ajax({
                    type: 'GET',
                    url: url,
                    //data:data,
                    dataType: 'json',
                    success: function (data) {
                        //Do stuff with the JSON data
                        if (typeof (data) !== 'undefined') {
                            points = data.about.browniePoints;
                            cb(points);
                        }
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.error("AJAX error in request: " + JSON.stringify(xhr, null, 2));
                        console.error("responseText", xhr.responseText);
                        console.error("errorThrown: ", errorThrown);

                        cb(0);
                    }
                });

            } else {
                return cb(0);
            }

        }
    };

});
