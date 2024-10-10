import { DataTypes } from "sequelize";
import db from "../configuration/Connection.js";
import Siswa from "./siswaModel.js";

const Lamaran = db.define(
    "Lamaran",
    {
        idLamaran:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        hireDate:{
           type: DataTypes.DATE,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "Lamaran"
    }
);


export default Lamaran;