module.exports = function Database(pool) {
    async function newproject(obj) {
        var title = obj.title;
        var description = obj.description;
        var skills = obj.skills;
        var image = obj.resume;
        await pool.query(`insert into projects
        (title, skills, description, image) values($1,$2,$3,$4)`, [title, skills, description, image]);
    }
    return {
        newproject
    }
}