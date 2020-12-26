// CODE TENTANG ITEMS/CARDS
const app        = document.getElementById("app");
const templates  = document.getElementById("card-temp");
const topCartNum = document.getElementById("top-cart-num");
const btmCartNum = document.getElementById("bottom-cart-num");

let items = [
    {
          id: 888
        , nama: 'KUU Laptop Yoga 11.6"Inch 1920*1080 FHD IPS Screen Intel Apollo Lake/Gemini Lake 8G DDR4 RAM 256G SSD ROM Intel Core Graphics 178° wide viewing angle 360 hinge design Windows 10 Yoga Laptop'
        , foto: "assets/prod0.jpg"
        , harga: 214000
        , diskon: 0.000009246
        , terjual: 634
        , asal: "Kabupaten Serang"
    }
    , {
          id: 999
        , nama: '[Gratis Mouse&Mouse pad] laptop terbaru 2020 Belajar Online Teclast F15S / 15.6 Inch Notebook/ 8GB RAM 128GB SSD/ Windows 10 OS/ 1920x1080 DDR4/ Intel Apollo Lake HDMI / Garansi 1 Tahun'
        , foto: "assets/prod1.jpg"
        , harga: 214000
        , terjual: 134
        , asal: "Kota Tangsel"
    }
    , {
          id: 666
        , nama: "[Local Warranty] MAIBENBEN Laptop XIAOMAI 6 Pro E5100 15.6 inch ADS Anti-Glare / 10th GEN Intel CPU / MX350 2GB / DDR4 RAM / PCI-E SSD + HDD / Genuine Windows 10 / 720P HD Webcam / Silver Free Shipping"
        , foto: "assets/prod2.jpg"
        , harga: 11985000
        , diskon: 0.31
        , terjual: 32
        , asal: "Tiongkok"
    }
    , {
          id: 912
        , nama: "2020 Baru Resmi 14.1-inch Laptop HD Tipis Dan Ringan 6 + 128G SSD Lapbook Laptop Intel 64-bit Core 1.92GHz Windows 10 2Mp Kamera Depan Pembelajaran Online Komputer PC"
        , foto: "assets/prod3.jpg"
        , harga: 7557000
        , diskon: 0.38
        , terjual: 634
        , asal: "Kota Jaksel"
    }
    , {
          id: 321
        , nama: "[Lokal Warranty] MAIBENBEN Laptop MaiBook M543 15.6 Inch ADS Screen / AMD Ryzen 3 4300U / AMD Radeon Graphics / DDR4 RAM / PCI-E SSD + HDD / Asli Windows 10 Laptop Baru 2020 Gratis Ongkir"
        , foto: "assets/prod4.jpg"
        , harga: 11288000
        , diskon: 0.1
        , terjual: 634
        , asal: "Kota Makassar"
    }
    , {
          id: 231
        , nama: "TDD-10.1 Netbook PC, 10.1 Inch, 1GB + 8GB, Android 5.1 ATM7059 Quad Core 1.6GHz, BT, WiFi, HDMI, SD, RJ45"
        , foto: "assets/prod5.jpg"
        , harga: 20000000
        , diskon: 0.1
        , terjual: 111
        , asal: "Kota Depok"
    }
    , {
          id: 827
        , nama: "MAIBENBEN Laptop XIAOMAI 6C Plus Layar Iklan 17.3 Inci, Laptop Intel Gold 5405U/Grafik UHD 610 / DDR4 RAM / PCI-E SSD + HDD/Laptop Asli Windows 10, Gratis Pengiriman untuk Laptop Hiburan Rumah"
        , foto: "assets/prod6.jpg"
        , harga: 11035000
        , diskon: 0.23
        , terjual: 2
        , asal: "Shenzen"
    }
    , {
          id: 331
        , nama: "MAIBENBEN Laptop XIAOMAI, Laptop 5 15.6 Inci FHD Layar Anti-silau/Intel Pentium 4415U / NVIDIA GeForce 940MX 1G / DDR4 RAM / Sata SSD + HDD/Asli Windows 10 Gamimg At pengiriman Gratis Rumah"
        , foto: "assets/prod7.jpg"
        , harga: 9187000
        , diskon: 0.23
        , terjual: 34
        , asal: "Kota Tangsel"
    }
];

let keranjang = [];

items.forEach( o => {

  let card = templates.content.firstElementChild.cloneNode(true);
  let tcl = topCartNum.classList, bcl = btmCartNum.classList;
  card.id = `card-${o.id}`;

  let btnTambah = card.querySelector(".btn.btn-lazada");
  btnTambah.addEventListener("click", function() {
    // Tampilan tombolnya
    let tmbhContainer = this.parentElement;
    let hpusContainer = tmbhContainer.nextElementSibling;
    tmbhContainer.classList.replace("d-flex", "d-none");
    hpusContainer.classList.replace("d-none", "d-flex");
    // Code utk tambahkan obj ke keranjang
    keranjang.push({id:o.id, nama:o.nama, jml:1});
    // Code utk notif keranjang muncul
    let kl = keranjang.length;
    topCartNum.innerHTML = kl;
    btmCartNum.innerHTML = kl;
    inputVal.value = kl;
    kl === 0 ? ( tcl.add("d-none"), bcl.add("d-none") ) : ( tcl.remove("d-none"), bcl.remove("d-none") );
  });
  
  let btnHapus = card.querySelector(".btn.btn-danger");
  btnHapus.addEventListener("click", function() {
    let yakinHapus = confirm(`Anda yakin menghapus ${o.nama}?`);
    if(yakinHapus) {
      // Tampilan tombolnya
      let hpusContainer = btnHapus.parentElement;
      let tmbhContainer = hpusContainer.previousElementSibling;
      hpusContainer.classList.replace("d-flex", "d-none");
      tmbhContainer.classList.replace("d-none", "d-flex");
      // Code utk hapus obj dari keranjang
      let idx = keranjang.findIndex( k => k.id === o.id );
      keranjang.splice(idx, 1);
      // Code utk notif keranjang muncul
      let kl = keranjang.length;
      topCartNum.innerHTML = kl;
      btmCartNum.innerHTML = kl;
      kl === 0 ? ( tcl.add("d-none"), bcl.add("d-none") ) : ( tcl.remove("d-none"), bcl.remove("d-none") );
    }
  });

  let btnPlus  = card.querySelector(".input-group").firstElementChild.nextElementSibling.nextElementSibling;
  let inputVal = card.querySelector(".input-group").firstElementChild.nextElementSibling;
  let btnMinus = card.querySelector(".input-group").firstElementChild;

  btnPlus.addEventListener("click", function() {
    let brg = keranjang.find( k => k.id === o.id );
    brg.jml++;
    brg.jml > 1 ? btnMinus.classList.remove("disabled") : '' ;
    inputVal.value = brg.jml;
  });

  btnMinus.classList.add("disabled");
  btnMinus.addEventListener("click", function() {
    let brg = keranjang.find( k => k.id === o.id );
    brg.jml--
    brg.jml > 1 ? '' : this.classList.add("disabled");
    inputVal.value = brg.jml;
  });

  let staticTemp = `
  <p class="card-text mb-1 mt-2 my-truncate lh-sm" style="font-size: 0.9rem;">${o.nama}</p>
  <div class="d-flex align-items-end">
    <p class="${o.diskon ? '' : 'd-none '}card-title mt-0 me-1 text-decoration-line-through" style="font-size: 0.9rem;">
        Rp${(o.harga.toLocaleString('id'))}
    <p>
    <h5 class="card-title mt-0" style="color: #ee4d2d;">
      <span style="font-size: 0.9rem;">Rp</span>${( o.diskon ? o.harga*(1-o.diskon) : o.harga).toLocaleString('id', {maximumFractionDigits: 0})}
    </h5>
    </div>
    <div class="d-flex justify-content-end flex-nowrap mt-1" style="height: 1rem; font-size: 0.7rem;">
      <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="" style=" fill: #ffce3d;">
        <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
      </svg>
      <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="" style=" fill: #ffce3d;">
        <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
      </svg>
      <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="" style=" fill: #ffce3d;">
        <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
      </svg>
      <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="" style=" fill: #ffce3d;">
        <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
      </svg>
      <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="" style=" fill: #ffce3d;">
        <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
      </svg>
      <span class="ms-2">${o.terjual} Terjual</span>
  </div>
  <p class="text-end mt-0 mb-2" style="font-size: 0.7rem;">${o.asal}</p>
  `;
  card.querySelector(".card-img-top").src = o.foto;
  card.querySelector("#static-content").innerHTML = staticTemp;
  app.appendChild(card);

});


// CODE TENTANG TOP NAVBAR DAN BOTTOM NAVBAR
const searchField = document.getElementById("search-utama");
const searchRes   = document.getElementById("search-res");
const cartBtn     = document.getElementById("cart-btn");

let searchBgOverlay = document.createElement("div");
searchBgOverlay.className = "modal d-none";
searchBgOverlay.style.backgroundColor = "black";
searchBgOverlay.style.opacity = "0.4";
app.appendChild(searchBgOverlay);

searchField.addEventListener("keyup", e => {
    searchRes.classList.remove("invisible");
    searchBgOverlay.classList.replace("d-none", "d-block");
    searchRes.innerHTML = ``;
    items.filter(itm => {
      return new RegExp(e.target.value).test(itm.nama.toLowerCase());
    }).forEach(res => {
        searchRes.innerHTML +=
        `<a href="#card-${res.id}" class="list-group-item list-group-item-action"">
          ${res.nama}
        </a>`;
    });
});

searchField.addEventListener("blur", () => {
  setTimeout(() => {
    searchRes.classList.add("invisible");
    searchBgOverlay.classList.replace("d-block", "d-none");
  }, 200);
});

let jmlBrgDiCart = 0, brgDiCart = [];

let popover = new bootstrap.Popover(cartBtn, {
      animation: false
    , placement: 'bottom'
    , trigger: 'hover focus'
    , content: 's'
    , template: '<div class="popover" role="tooltip">aselole</div>'
});

// CODE TENTANG CAROUSEL
let carouselItems = [
    {
        img: "assets/car0.jpg"
      , bg: "#ef7da1"
    }
    , {
        img: "assets/car1.jpg"
      , bg: "#78bdff"
    }
    , {
        img: "assets/car2.jpg"
      , bg: "#fe7ac6"
    }
    , {
        img: "assets/car3.jpg"
      , bg: "#469c7f"
    }
    , {
        img: "assets/car4.jpg"
      , bg: "#1e6ffc"
    }
    , {
        img: "assets/car5.jpg"
      , bg: "#35d1bc"
    }
];

const myCarousel = document.getElementById("carousel-utama");
const myCarouselIndicators = document.getElementById("carousel-indicators");
const myCarouselInner = document.getElementById("carousel-inner");

carouselItems.forEach( (itm, idx) => {
    let list = document.createElement("li");
    list.setAttribute('data-bs-target', "#carousel-utama");
    list.setAttribute('data-bs-slide-to', idx);
    idx === 0 ? list.classList.add("active") : "";
    myCarouselIndicators.appendChild(list);

    let img = document.createElement("img")
    img.classList.add("w-100");
    img.src = itm.img;

    let div = document.createElement("div");
    div.className = idx === 0 ? "carousel-item active" : "carousel-item";
    div.appendChild(img);
    myCarouselInner.appendChild(div);
});

const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000
  , wrap: true
  , touch: true
  , slide: "carousel"
  , pause: "hover"
});

myCarousel
.parentElement
.parentElement
.style
.backgroundColor = carouselItems[0].bg;

myCarousel.addEventListener('slide.bs.carousel', function(ev) {
    let el = this.parentElement.parentElement;
    el.style.backgroundColor = carouselItems[ev.to].bg;
});
