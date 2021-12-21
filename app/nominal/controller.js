const Nominal = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')

            const alert = { message: alertMessage, status: alertStatus }
            const nominal = await Nominal.find()

            res.render('admin/nominal/view_nominal', {
                nominal,
                alert,
                name: req.session.user.name,
                title: 'Halaman Nominal'
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
       }
    },

    viewCreate: async(req, res) => {
        try {
            res.render('admin/nominal/create', {
                name: req.session.user.name,
                title: 'Halaman Tambah Nominal'
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    actionCreate: async(req, res) => {
        try {
            const { coinName, coinQuantity, price } = req.body
            
            let nominal =  await Nominal({ coinName, coinQuantity, price })
            await nominal.save()

            req.flash('alertMessage', "Berhasil tambah nominal")
            req.flash('alertStatus', "success")
            res.redirect('/nominal');
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },
    
    viewEdit: async(req, res) => {
        try {
            const { id } = req.params
            const nominal = await Nominal.findOne({_id: id})

            res.render('admin/nominal/edit', {
                nominal,
                name: req.session.user.name,
                title: 'Halaman Ubah Nominal'
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    actionEdit: async(req, res) => {
        try {
            const { id } = req.params
            const { coinName, coinQuantity, price } = req.body

            await Nominal.findOneAndUpdate({
                _id: id
            }, { coinName, coinQuantity, price });

            req.flash('alertMessage', "Berhasil ubah nominal")
            req.flash('alertStatus', "success")

            res.redirect('/nominal')

        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    actionDelete: async(req, res) => {
        try {
            const { id } = req.params

            await Nominal.findOneAndRemove({
                _id: id
            });

            req.flash('alertMessage', "Berhasil hapus nominal")
            req.flash('alertStatus', "success")

            res.redirect('/nominal')

        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    }
}