const db = require('./factory');
module.exports = function Routes(pool) {
    const useDb = db(pool);

    function home(req, res) {
        res.render('index', { title: 'Home' })
    }

    function logInPost(req, res) {
        var username = (req.body.username).toLocaleUpperCase();
        var password = (req.body.password).toLocaleUpperCase();
        var checkerName = process.env.USER_NAME;
        var checkerPass = process.env.USER_PASS;
        if (username === checkerName & password === checkerPass) {
            res.redirect('/admin/' + username);
        } else {
            res.redirect('/');
        }
    }

    function admin(req, res) {
        var username = req.params.username;
        /*if (username === process.env.USER_NAME) {*/
        res.render('admin', { username, title: 'Admin Panel' });
        /*} else {
        res.redirect('/');
    }*/
    }

    async function newProject(req, res) {
        var obj = req.body;
        console.log(obj);
        await useDb.newproject(obj);
        res.redirect('/');
    }
    return {
        home,
        logInPost,
        admin,
        newProject
    }
}