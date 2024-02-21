define("components/frame", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    class Header {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
    }
    exports.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
    }
    exports.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
    }
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components/frame"], function (require, exports, frame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home;
    (function (Home) {
        class Page {
            constructor() {
                new frame_1.Header();
                new frame_1.Content();
                new frame_1.Footer();
            }
        }
        Home.Page = Page;
    })(Home || (Home = {}));
});
