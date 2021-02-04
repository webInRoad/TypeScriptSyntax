var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        // private name = '张三' //外部不能访问，只能在walk里访问
        this.name = '张三'; //子类跟内部可以访问
        this.age = 20;
    }
    Person.prototype.walk = function () {
        console.info('我叫' + this.name + ',我今年' + this.age + '多少岁');
    };
    return Person;
}());
var p = new Person();
// p.name //不可以访问
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.callParent = function () {
        console.info(this.name); //访问不了父类private修饰的属性，可以访问protected与public修饰的
    };
    Child.test = function () { }; //静态方法，static修饰之后就可以直接用类名访问，不可以访问this
    return Child;
}(Person));
var child = new Child();
child.callParent();
Child.test();
