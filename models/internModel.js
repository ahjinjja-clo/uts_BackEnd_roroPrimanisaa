import { DataTypes } from "sequelize";
import db from "../configuration/Connection.js";
import Pembimbing from "./bimbingModel.js";
import Siswa from "./siswaModel.js";

const Intern = db.define(
'Intern',
    {
        NIM: { type:DataTypes.INTEGER,
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE', 
              allowNull: false
        },
        
        desk:{
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        InternStatus:{
            type: DataTypes.STRING,
            allowNull: false
        },
        HireDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        idPembimbing: {
           type: DataTypes.INTEGER,
           allowNull: false
        }
    }, {
        tableName: "Internship"    
    }
);


export default Intern;