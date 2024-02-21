var MyNamespace;
(function (MyNamespace) {
    var MyClass = (function () {
        function MyClass(message) {
            this.message = message;
        }
        MyClass.prototype.log = function () {
            console.log(this.message);
        };
        return MyClass;
    }());
    MyNamespace.MyClass = MyClass;
})(MyNamespace || (MyNamespace = {}));
var myClassInstance = new MyNamespace.MyClass("Hello, world!");
myClassInstance.log();
(function (MyNamespace) {
    var MyInnerNamespace;
    (function (MyInnerNamespace) {
        var MyInnerClass = (function () {
            function MyInnerClass(message) {
                this.message = message;
            }
            MyInnerClass.prototype.log = function () {
                console.log(this.message);
            };
            return MyInnerClass;
        }());
        MyInnerNamespace.MyInnerClass = MyInnerClass;
    })(MyInnerNamespace = MyNamespace.MyInnerNamespace || (MyNamespace.MyInnerNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
