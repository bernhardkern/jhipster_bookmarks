(function () {
    'use strict';

    angular
        .module('jhipsterBookmarksApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
