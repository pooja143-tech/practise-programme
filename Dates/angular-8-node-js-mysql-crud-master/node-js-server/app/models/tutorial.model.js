module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
        //   createdAt: {
        //      type: Sequelize.DATE
        //      }

        //  updatedAt: { 
        // type: Sequelize.DATE
        //  }
    });

    return Tutorial;
};