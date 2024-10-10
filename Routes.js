// Import Express dan models
import express from 'express';
import Siswa from './models/siswaModel.js';
import Karyawan from './models/karyawanModel.js';
import Pembimbing from './models/bimbingModel.js';
import Lamaran from './models/lamaranModel.js';
import Intern from './models/internModel.js';
import HR from './models/hrModel.js';

const router = express.Router();

// Route Siswa
router.get('/siswa', async (req, res) => {
    try {
        const siswa = await Siswa.findAll();
        res.json(siswa);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/siswa', async (req, res) => {
    try {
        const siswa = await Siswa.create(req.body);
        res.json(siswa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/siswa/:NIM', async (req, res) => {
    try {
        const siswa = await Siswa.update(req.body, {
            where: { NIM: req.params.NIM }
        });
        res.json(siswa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/siswa/:NIM', async (req, res) => {
    try {
        await Siswa.destroy({
            where: { NIM: req.params.NIM }
        });
        res.json({ message: "Siswa deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route Karyawan
router.get('/karyawan', async (req, res) => {
    try {
        const karyawan = await Karyawan.findAll();
        res.json(karyawan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/karyawan', async (req, res) => {
    try {
        const karyawan = await Karyawan.create(req.body);
        res.json(karyawan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/karyawan/:NIP', async (req, res) => {
    try {
        const karyawan = await Karyawan.update(req.body, {
            where: { NIP: req.params.NIP }
        });
        res.json(karyawan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/karyawan/:NIP', async (req, res) => {
    try {
        await Karyawan.destroy({
            where: { NIP: req.params.NIP }
        });
        res.json({ message: "Karyawan deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route Pembimbing
router.get('/pembimbing', async (req, res) => {
    try {
        const pembimbing = await Pembimbing.findAll();
        res.json(pembimbing);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/pembimbing', async (req, res) => {
    try {
        const pembimbing = await Pembimbing.create(req.body);
        res.json(pembimbing);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/pembimbing/:idPembimbing', async (req, res) => {
    try {
        const pembimbing = await Pembimbing.update(req.body, {
            where: { idPembimbing: req.params.idPembimbing }
        });
        res.json(pembimbing);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/pembimbing/:idPembimbing', async (req, res) => {
    try {
        await Pembimbing.destroy({
            where: { idPembimbing: req.params.idPembimbing }
        });
        res.json({ message: "Pembimbing deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Routes Lamaran
router.get('/lamaran', async (req, res) => {
    try {
        const lamaran = await Lamaran.findAll();
        res.json(lamaran);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/lamaran', async (req, res) => {
    try {
        const lamaran = await Lamaran.create(req.body);
        res.json(lamaran);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Routes Intern
router.get('/intern', async (req, res) => {
    try {
        const intern = await Intern.findAll();
        res.json(intern);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/intern', async (req, res) => {
    try {
        const intern = await Intern.create(req.body);
        res.json(intern);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Routes HR
router.get('/hr', async (req, res) => {
    try {
        const hr = await HR.findAll();
        res.json(hr);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/hr', async (req, res) => {
    try {
        const hr = await HR.create(req.body);
        res.json(hr);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
