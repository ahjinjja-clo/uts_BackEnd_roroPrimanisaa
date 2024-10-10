import Siswa from "./siswaModel.js";
import Lamaran from "./lamaranModel.js";
import Karyawan from "./karyawanModel.js";
import Intern from "./internModel.js";
import Hrd from "./hrModel.js";
import Pembimbing from "./bimbingModel.js";

const associateModels = () =>{

    const SiswaModel = () =>{
        Siswa.hasOne(Intern, { 
            foreignKey: 'NIM', 
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Intern.belongsTo(Siswa, { 
            foreignKey: 'NIM',
            onDelete: "CASCADE",
            onUpdate: "CASCADE" 
        });

    }

        const internModel = () =>{
       
        Intern.hasOne(Pembimbing, { 
            foreignKey: 'idPembimbing',
            onDelete: "CASCADE",
            onUpdate: "CASCADE" 
        });

        Pembimbing.belongsTo(Intern, { 
            foreignKey: 'idPembimbing',
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        const hrd = () =>{
            Hrd.hasMany(Karyawan, { 
                foreignKey: 'NIP', 
                onDelete: 'CASCADE', 
                onUpdate: 'CASCADE' 
            });
            Karyawan.belongsTo(Hrd, { 
                foreignKey: 'NIP', 
                onDelete: 'CASCADE', 
                onUpdate: 'CASCADE' 
            });

        }
    };

    

    const bimbingModel = ()=>{
       
        Pembimbing.hasMany(Karyawan, { 
            foreignKey: 'idPembimbing', 
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
            });
        Karyawan.belongsTo(Pembimbing, { 
            foreignKey: 'idPembimbing', 
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
            });
    };
};

export default associateModels;