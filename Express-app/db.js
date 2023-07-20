const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL);

const Tenant = db.define("Tenant", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: Sequelize.STRING,
    ssn: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Pet = db.define("Pet", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: Sequelize.INTEGER,
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const User = db.define("User", {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Unit = db.define("Unit", {
    floor: Sequelize.INTEGER,
    aptNumber: Sequelize.STRING,
    bedrooms: Sequelize.INTEGER,
    area: Sequelize.INTEGER,
});

const Lease = db.define("Lease", {
    beginDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    rent: Sequelize.INTEGER
});


// one to one
Tenant.hasOne(User);
User.belongsTo(Tenant);

// one to many
Tenant.hasMany(Pet);
Pet.hasOne(Tenant);

// many to many
Tenant.belongsToMany(Unit, {through: Lease});
Unit.belongsToMany(Tenant, {through: Lease});

module.exports = {
    Tenant,
    User,
    Pet,
    Unit,
    Lease,
    db
}