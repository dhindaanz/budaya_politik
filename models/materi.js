module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        judul_materi : {
            type :Sequelize.TEXT,
        },
        materi: {
            type: Sequelize.TEXT,
        },
        categoryId: {
            type: Sequelize.INTEGER,
        }
    });
    return Materi;
}