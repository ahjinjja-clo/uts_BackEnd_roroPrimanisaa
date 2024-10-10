import db from "../configuration/Connection.js";
import Hrd from './hrModel.js';
import Pembimbing from './bimbingModel.js';
import Intern from './internModel.js';
import Karyawan from './karyawanModel.js';
import Lamaran from './lamaranModel.js';
import Siswa from './siswaModel.js';

await Hrd.sync();
await Pembimbing.sync();
await Intern.sync();
await Karyawan.sync();
await Lamaran.sync();
await Siswa.sync();

const syncDatabase = async () => {
    try {
      await db.sync({ force: true }); // Gunakan { force: true } hanya saat pengembangan (ini akan menghapus tabel setiap kali aplikasi dijalankan)
      console.log("Database synced successfully.");
    } catch (error) {
      console.error("Failed to sync database:", error);
    }
  };
  
  syncDatabase();

