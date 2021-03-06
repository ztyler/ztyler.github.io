System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var templ, ConnectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            templ = "\n<div class=\"ui container\">\n    <h2 style=\"margin-top: 15px\" class=\"ui center aligned icon header\">\n        <i class=\"{{pageIcon}}\"></i>\n        {{pageTitle}}\n    </h2>\n</div>\n";
            ConnectComponent = (function () {
                function ConnectComponent() {
                    this.pageTitle = 'Connect Component';
                    this.pageIcon = 'circular user add icon';
                    this.cards_DEBUG = [
                        {
                            "header": "A Cute Kitten",
                            "img": "https://placekitten.com/1000/1000"
                        },
                        {
                            "header": "Another Cute Kitten",
                            "img": "https://placekitten.com/600/600"
                        },
                        {
                            "header": "And Another!",
                            "img": "https://placekitten.com/700/700"
                        },
                        {
                            "header": "Kittens Everywhere!",
                            "img": "https://placekitten.com/800/800"
                        }
                    ];
                }
                ConnectComponent = __decorate([
                    core_1.Component({
                        template: templ
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConnectComponent);
                return ConnectComponent;
            }());
            exports_1("ConnectComponent", ConnectComponent);
        }
    }
});
//# sourceMappingURL=connect.component.js.map