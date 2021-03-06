/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('form.wizard',
        {
          url: '/wizard',
          templateUrl: 'app/pages/form/wizard/wizard.html',
            controller:'WizardCtrl',
            title: 'Network',
            sidebarMeta: {
                order: 0,
            }
        })
        .state('form.wizard1',
            {
                url: '/wizard1',
                templateUrl: 'app/pages/form/wizard1/wizard.html',
                controller:'WizardCtrl',
                title: 'Network',
                sidebarMeta: {
                    order: 0,
                }
            });
  }
})();
