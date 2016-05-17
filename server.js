/**
 * SkillDepth ScalaJS Bootstrap
 * @author: lawrence.daniels@gmail.com
 */
(function () {
    require("./skilldepth-nodejs-fastopt.js");
    const facade = com.skilldepth.javascript.SkillDepthJSServer();
    facade.startServer({
        "__dirname": __dirname,
        "__filename": __filename,
        "exports": exports,
        "module": module,
        "require": require
    });
})();