import { DataTypes, Sequelize } from "sequelize";
import db from "../configuration/Connection.js";
import Hrd from "./hrModel.js";
// import Pembimbing from "./bimbingModel.js";
// const Hrd = require("./hrModel.js");
const Karyawan = db.define(
    "Karyawan",
    {
        NIP:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jabatan:{
            type:DataTypes.STRING,
            allowNull: false
        },
        group: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        departement: {
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
    },
    {
        tableName: "Karyawan"
    }
);


export default Karyawan;