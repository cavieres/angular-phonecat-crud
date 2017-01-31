'use strict';

angular.
    module('phoneNew').
    component('phoneNew', {
        templateUrl: 'phone-new/phone-new.template.html',
        controller: ['Phone',
            function PhoneNewController(Phone) {
                this.addPhone = function () {
                    Phone.save(this.phoneData, function () {
                        alert('Phone created successfully!');
                    });
                };
            }

        ]
    });