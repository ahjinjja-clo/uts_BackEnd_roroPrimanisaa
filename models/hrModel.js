import { DataTypes } from "sequelize";
import db from "../configuration/Connection.js";


const Hrd = db.define(
    "Hrd", {
        NIP: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jabatan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notelp: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        tableName: "Hrd"
    }
);

Hrd.sync({ force: true }).then(() => {
    console.log('Table Hrd created');
});

export default Hrd;