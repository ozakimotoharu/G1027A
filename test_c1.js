var CTIClient = /** @class */ (function () {
    function CTIClient() {
        var _this = this;
        this.login = function (id, pw) {
            _this.onLoggedIn_root(id, pw);
        };
        this.onLoggedIn_root = function (id, pw) {
            var e = { "id": id, "pw": pw };
            _this.id = id;
            _this.LoggedInAgent.AgentState;
            _this.onLoggedIn(e);
        };
        this.onLoggedIn = function (e) { };
    }
    CTIClient.prototype.callup = function (telNo, attMessage, attUserData, callbackTag, groupAs, dialinAs) {
        if (telNo === void 0) { telNo = ""; }
        if (attMessage === void 0) { attMessage = ""; }
        if (attUserData === void 0) { attUserData = ""; }
        if (callbackTag === void 0) { callbackTag = ""; }
        if (groupAs === void 0) { groupAs = ""; }
        if (dialinAs === void 0) { dialinAs = ""; }
        return { telNo: telNo, 'attMessage': attMessage, 'attUserData': attUserData, 'callbackTag': callbackTag, 'groupAs': groupAs, 'dialinAs': dialinAs };
    };
    CTIClient.prototype.calluptoacdgroup = function (acdgroupid, attachment, callbackTag) {
    };
    return CTIClient;
}());
function A() {
    var c1 = new CTIClient();
    c1.login("iii", "oooo");
}
