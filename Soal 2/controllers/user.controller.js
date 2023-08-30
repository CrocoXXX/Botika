const { User } = require('../models')

class Controller {
    // Get User
    static async getUser(req, res) {
        try {
            const result = await User.findAll({
                order: [["id", "ASC"]]
            })

            res.status(200).json({ data: result })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch User'
            })
        }
    }

    // Create User
    static async createUser(req, res) {
        try {
            const { nama, no_telp, token_user } = req.body

            const user = await User.create({
                nama, no_telp, token_user
            })

            res.status(200).json({
                message: `New User with id ${user.id} created.`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch User'
            })
        }
    }

    // Update User
    static async updateUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id)

            if (!user) {
                res.status(404).json({
                    error: 'User not found.'
                })
            }

            const { nama, no_telp, token_user } = req.body

            await User.update({ nama, no_telp, token_user }, { where: { id: req.params.id } })

            res.status(200).json({ message: `User with id ${user.id} updated` });

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch User'
            })
        }
    }

    // Delete User
    static async deleteUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id)

            if (!user) {
                res.status(404).json({
                    error: 'User not found'
                })
            }

            await User.destroy({
                where: { id: req.params.id }
            })

            res.status(200).json({
                message: `User with id ${user.id} deleted`
            })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch User'
            })
        }
    }
}

module.exports = Controller