import { DataTypes } from "sequelize";
import db from "../configuration/Connection.js";

const Siswa = db.define(
    "Siswa",
    {
        NIM: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Jurusan:{
            type: DataTypes.STRING,
            allowNull: false
        },
        univ:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        notelp: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "Siswa"
    }
);


export default Siswa;