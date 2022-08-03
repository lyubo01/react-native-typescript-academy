"use strict";
function greeter(name) {
    return `Hello ${name} from Typescript!`;
}
// eslint-disable-next-line no-undef
const elem = document.getElementById("results");
if (elem != null) {
    elem.innerHTML = greeter("Lyuboslav");
}
//# sourceMappingURL=greeter.js.map