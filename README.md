# Soregg Server

## Datasets MERN2021

### User

- email
- name
- username
- password
- status [Y, N]
- role [admin, user]
- phoneNumber
- avatar
- category [favorite]

### Category (done)

- name (mobile, pc, dll)

### Voucher topup

- name
- category
- isFeatured
- status [Y, N]
- thumbnail
- gallery_screenshots (game) //remove
- user

### Nominal (done)

- coin_quantity
- coin_name (diamonds, jewel, dll)
- price

### Bank

- bank_name
- no_rekening
- name
- logo

### Payment Method

- type
- bank
- status [Y, N]

### checkout

- history_voucher_topup
- account_user (account user id)
- name
- tax
- status [pending, prosess, success, reject]
- value (price - tax)
- voucher_topup
- user

### history Voucher topup

- game_name
- category [name]
- thumbnail
- coin_name (diamonds, jewel, dll)
- coin_quantit

## Dokumentasi Postman API Store GG

- [Documentasi API](https://documenter.getpostman.com/view/10749611/UVJihZu2)
