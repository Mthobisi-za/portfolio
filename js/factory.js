module.exports = function Database(pool) {
    async function newproject(obj) {
        var title = obj.title;
        var description = obj.description;
        var skills = obj.Skills;
        var image = obj.resume;
        var link = obj.link;
        await pool.query(`insert into projects
        (title, skills, description, image, link) values($1,$2,$3,$4, $5)`, [title, skills, description, image, link]);
    }
    async function getProjects() {
        var projects = (await pool.query(`select * from projects`)).rows
        return projects
    }
    return {
        newproject,
        getProjects
    }
}