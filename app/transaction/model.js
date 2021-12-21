const mongoose = require('mongoose');

let transactionSchema = mongoose.Schema({
    historyVoucherTopup: {
        gameName: {
            type: String,
            require: [true, 'Nama game harus diisi']
        },
        category: {
            type: String,
            require: [true, 'Kategori game harus diisi']
        },
        thumbnail: {
            type: String,
        },
        coinName: {
            type: String,
            require: [true, 'Nama koin game harus diisi']
        },
        coinQuantity: {
            type: String,
            require: [true, 'Jumlah koin game harus diisi']
        },
        price: {
            type: Number,
        }
    },

    historyPayment: {
        name: {
            type: String,
            require: [true, 'Name harus diisi']
        },
        type: {
            type: String,
            require: [true, 'Tipe pembayaran harus diisi']
        },
        bankName: {
            type: String,
            require: [true, 'Nama bank pembayaran harus diisi']
        },
        noRekening: {
            type: String,
            require: [true, 'Nomor rekening pembayaran harus diisi']
        },
    },

    name: {
        type: String,
        require: [true, 'Nama harus diisi'],
        maxlength: [225, 'Panjang nama harus antara 3 - 225 karakter'],
        minlength: [3, 'Panjang nama harus antara 3 - 225 karakter']
    },

    accountUser: {
        type: String,
        require: [true, 'Nama akun harus diisi'],
        maxlength: [225, 'Panjang nama harus antara 3 - 225 karakter'],
        minlength: [3, 'Panjang nama harus antara 3 - 225 karakter']
    },

    tax: {
        type: Number,
        default: 0
    },

    value: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },

    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },

    historyUser: {
        name: {
            type: String,
            require: [true, 'Nama player harus diisi']
        },
        phoneNumber: {
            type: Number,
            require: [true, 'Nama akun harus diisi'],
            maxlength: [13, 'Panjang nama harus antara 3 - 13 karakter'],
            minlength: [9, 'Panjang nama harus antara 3 - 13 karakter']
        }
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamp: true })

module.exports = mongoose.model('Transaction', transactionSchema)