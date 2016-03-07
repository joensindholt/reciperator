angular.module('Components').component('uiKitComponent', {
    bindings: {
        componentname: '@'
    },
    template: '<h4 class="ui-kit-component__heading" ng-bind="$ctrl.componentname"></h4>' +
              '<div ng-include="$ctrl.componenturl"></div>' +
              '<div hljs hljs-language="html" hljs-include="$ctrl.componenturl"></div>',
    controller: function() {
        console.log('ui kit component:' + this.componentname);
        this.componenturl = 'partials/ui-kit/' + this.componentname  + '/' + this.componentname + '.html';
    }
});
