'use strict';

angular.
    module('phoneEdit').
    component('phoneEdit', {
        templateUrl: 'phone-edit/phone-edit.template.html',
        controller: ['$routeParams', 'Phone', '$window',
            function PhoneEditController($routeParams, Phone, $window) {
                var self = this;

                Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                    self.phoneData = phone;
                });

                this.editPhone = function () {
                    Phone.update({ phoneId: $routeParams.phoneId }, this.phoneData, function () {
                        alert("Phone modified successfully.");
                        $window.location.href = '#!/phones/' + $routeParams.phoneId;
                    })
                };

                this.deletePhone = function () {
                    Phone.remove({ phoneId: $routeParams.phoneId }, function () {
                        alert("Phone removed.");
                        $window.location.href = '#!/phones';
                    })
                };
            }
        ]
});