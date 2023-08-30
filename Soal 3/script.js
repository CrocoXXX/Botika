const data = [
    { no_nota: 1034, nm_barang: "jaket", harga: 549000, jumlah: 2, total: 1098000 },
    { no_nota: 1046, nm_barang: "celana", harga: 250000, jumlah: 1, total: 250000 },
    { no_nota: 1187, nm_barang: "tas", harga: 300000, jumlah: 4, total: 1200000 },
    { no_nota: 1286, nm_barang: "baju", harga: 120000, jumlah: 3, total: 360000 }
]

// console.log(data[1].nm_barang);

for (const element of data) {
    // console.log((element));
    let diskon = 0

    // Diskon lebih dari 1 juta
    if (element.total > 1000000) {
        diskon = + element.total * (15 / 100)
    }

    // Diskon untuk pembelian lebih dari 2 barang
    if (element.jumlah > 2) {
        diskon += element.total * 0.1
    }

    const totalBayar = element.total - diskon

    // Data dengan jumlah karakter minimal 4 pada kolom nm_barang
    if (element.nm_barang.length >= 4) {
        console.log(`No Nota: ${element.no_nota}`);
        console.log(`Nama Barang: ${element.nm_barang}`);
        console.log(`Harga: ${element.harga}`);
        console.log(`Jumlah: ${element.jumlah}`);
        console.log(`Total: ${element.total}`);
        console.log(`Diskon: ${diskon}`);
        console.log(`Total Setelah Diskon: ${totalBayar}`);
        console.log("-------------------------");
    }
}



