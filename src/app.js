// data makanan
document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Indomie Nyemek",
        img: "makanan/indomie-nyemek.jpg",
        price: 15000,
      },
      {
        id: 2,
        name: "Lontong Rendang",
        img: "makanan/lontong-rendang.jpg",
        price: 25000,
      },
      { id: 3, name: "Lupis", img: "makanan/lupis.jpg", price: 10000 },
      {
        id: 4,
        name: "Nasi Goreng",
        img: "makanan/nasi-goreng.jpg",
        price: 15000,
      },
      {
        id: 5,
        name: "Nasi Gurih Ayam",
        img: "makanan/nasi-gurih-ayam.jpg",
        price: 23000,
      },
      {
        id: 6,
        name: "Nasi Gurih Rendang",
        img: "makanan/nasi-gurih-rendang.jpg",
        price: 25000,
      },
      {
        id: 7,
        name: "Nasi Gurih Telur",
        img: "makanan/nasi-gurih-telur.jpg",
        price: 18000,
      },
      {
        id: 8,
        name: "Nasi Gurih",
        img: "makanan/nasi-gurih.jpg",
        price: 13000,
      },
      {
        id: 9,
        name: "Soto Medan",
        img: "makanan/soto-medan.jpg",
        price: 15000,
      },
    ],
  }));
});

// data minuman
document.addEventListener("alpine:init", () => {
  Alpine.data("products2", () => ({
    items2: [
      { id: 10, name: "Affogato", img: "minum/afogato.jpg", price: 15000 },
      {
        id: 11,
        name: "Blueberry Yakult",
        img: "minum/blueberry-yakult.jpg",
        price: 13000,
      },
      {
        id: 12,
        name: "Caramel Macchiato",
        img: "minum/caramel-maciato.jpg",
        price: 20000,
      },
      {
        id: 13,
        name: "Coffee Latte",
        img: "minum/coffee-latte.jpg",
        price: 15000,
      },
      {
        id: 14,
        name: "Es Americano",
        img: "minum/es-americano.jpg",
        price: 10000,
      },
      { id: 15, name: "Es Coklat", img: "minum/es-coklat.jpg", price: 13000 },
      { id: 16, name: "Es Markisa", img: "minum/es-markisa.jpg", price: 10000 },
      { id: 17, name: "Es Markul", img: "minum/es-markul.jpg", price: 13000 },
      { id: 18, name: "Es Timun", img: "minum/es-timun.jpg", price: 10000 },
      {
        id: 19,
        name: "Happy Squash",
        img: "minum/happy-squash.jpg",
        price: 15000,
      },
      { id: 20, name: "Happy Tea", img: "minum/happy-tea.jpg", price: 10000 },
      {
        id: 21,
        name: "Hot Red Velvet",
        img: "minum/hot-red-velvet.jpg",
        price: 15000,
      },
      { id: 22, name: "Kopi Tarik", img: "minum/kopi-tarik.jpg", price: 15000 },
      { id: 23, name: "Kopsuren", img: "minum/kopsuren.jpg", price: 15000 },
      { id: 24, name: "Red Velvet", img: "minum/red-velvet.jpg", price: 15000 },
      {
        id: 25,
        name: "Salted Caramel",
        img: "minum/salted-caramel.jpg",
        price: 15000,
      },
      { id: 26, name: "Sunrise", img: "minum/sunrise.jpg", price: 15000 },
    ],
  }));
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// form validation
const checkoutButton = document.querySelector(".checkout-button");
const namaInput = document.querySelector(".nama-input");
const emailInput = document.querySelector(".email-input");
const phoneInput = document.querySelector(".phone-input");

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  if (
    namaInput.value.length !== 0 &&
    emailInput.value.length !== 0 &&
    phoneInput.value.length !== 0
  ) {
    checkoutButton.disabled = false;
    checkoutButton.classList.remove("disabled");
  } else if (
    namaInput.value.length == 0 ||
    emailInput.value.length == 0 ||
    phoneInput.value.length == 0
  ) {
    checkoutButton.disabled = true;
    checkoutButton.classList.add("disabled");
  } else {
    return false;
  }
});

// kirim data ketika tombol checkout diklik
checkoutButton.addEventListener("click", function (e) {
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open("http://wa.me/628976488886?text=" + encodeURIComponent(message));
});

// format pesan whatsapp
const formatMessage = (obj) => {
  return ` Data Pelanggan
  ===========================
  Nama : ${obj.name}
  Email : ${obj.email}
  No Hp : ${obj.phone}
  ===========================

  Data Pesanan
  ===========================
  ${JSON.parse(obj.items).map(
    (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
  )}
  ===========================
  TOTAL : ${rupiah(obj.total)}
  Terima Kasih.`;
};

// form pesan dan masukan
const button = document.querySelector(".btn");
const formPesan = document.querySelector("#formPesan");
button.addEventListener("click", function (e) {
  const formData = new FormData(formPesan);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage2(objData);
  window.open("http://wa.me/628976488886?text=" + encodeURIComponent(message));
});

// format pesan dan masukan whatsapp
const formatMessage2 = (obj) => {
  return ` Data Pelanggan
  ===========================
  Nama : ${obj.name2}
  Email : ${obj.email2}
  No Hp : ${obj.phone2}
  ===========================
  Pesan yang disampaikan :
  ${obj.pesan2}`;
};

document.addEventListener("alpine:init", () => {
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah barang ada yng sama
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barng sudah ada, cek apakah barang beda atau sama dengan yang sudah ada
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau di remove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          // jika bukan barang yabg diklik
          if (item.id != id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});
