const { Buku } = require('../models')

class Controller {
    // Get Buku
    static async getBuku(req, res) {
        try {
            const result = await Buku.findAll({
                order: [["id", "ASC"]]
            })

            res.status(200).json({ data: result })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Buku'
            })
        }
    }

    // Create Buku
    static async createBuku(req, res) {
        try {
            const { no_buku, nama_buku, penerbit, penulis } = req.body

            const buku = await Buku.create({
                no_buku, nama_buku, penerbit, penulis
            })

            res.status(200).json({
                message: `New Buku with id ${buku.id} created.`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Buku'
            })
        }
    }

    // Update Buku
    static async updateBuku(req, res) {
        try {
            const buku = await Buku.findByPk(req.params.id)

            if (!buku) {
                res.status(404).json({
                    error: 'Buku not found.'
                })
            }

            const { no_buku, nama_buku, penerbit, penulis } = req.body

            await Buku.update({ no_buku, nama_buku, penerbit, penulis }, { where: { id: req.params.id } })

            res.status(200).json({ message: `Buku with id ${buku.id} updated` });

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Buku'
            })
        }
    }

    // Delete Buku
    static async deleteBuku(req, res) {
        try {
            const buku = await Buku.findByPk(req.params.id)

            if (!buku) {
                res.status(404).json({
                    error: 'Buku not found'
                })
            }

            await Buku.destroy({
                where: { id: req.params.id }
            })

            res.status(200).json({
                message: `Buku with id ${buku.id} deleted`
            })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Buku'
            })
        }
    }
}

module.exports = Controller