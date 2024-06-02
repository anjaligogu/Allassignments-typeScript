var Util;
(function (Util) {
    function concatKeysAndValues(obj) {
        var result = "";
        for (var key in obj) {
            if (typeof obj[key] === "string") {
                result += "".concat(key, ": ").concat(obj[key], ", ");
            }
            else {
                result += concatKeysAndValues(obj[key]);
            }
        }
        return result;
    }
    Util.concatKeysAndValues = concatKeysAndValues;
})(Util || (Util = {}));
var Data = {
    name: "Anjali",
    email: "anjali@123",
    city: "Telangana",
    state: "Telangana",
    address: {
        street: "123 Main St",
        zip: "12345",
        country: "india",
    },
};
console.log(Util.concatKeysAndValues(Data));
