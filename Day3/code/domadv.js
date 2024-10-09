"use strict";
const $i = (id) => document.getElementById(id);
window.onload = () => {
    const navigate = (element, out) => {
        var _a;
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element.nodeName + ': ' + ((_a = element.nodeValue) === null || _a === void 0 ? void 0 : _a.replaceAll('\n', '//'))));
        const inner = document.createElement("ul");
        element.childNodes.forEach(i => navigate(i, inner));
        li.appendChild(inner);
        out.appendChild(li);
    };
    navigate(document, $i("sample"));
};
