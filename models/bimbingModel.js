import { DataTypes } from "sequelize";
import db from "../configuration/Connection.js";
import Intern from "./internModel.js";
import Karyawan from "./karyawanModel.js";

const Pembimbing = db.define("Pembimbing", {
    idPembimbing: {
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
    departement: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Pembimbing"
});


export default Pembimbing;