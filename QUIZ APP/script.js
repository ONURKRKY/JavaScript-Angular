// let soru = {
// //     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır.",
//     cevapSecenekleri: {
//         a: "NOde.js",
//         b: "Typescript",
//         c: "Npm",
//     },
//     dogruCevap: "c",
//     cevabıKontrolEt: function (cevap) {
//         return cevap===this.dogrucevap
// //     }
// };
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
   
    console.log(this);
};

Soru.prototype.cevabıKontrolEt = function (cevap) {
    return cevap == this.dogruCevap;
}


let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır.", {
    a: "NOde.js",
    b: "Typescript",
    c: "Npm",
}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır.", {
    a: "NOde.js",
    b: "Typescript",
    c: "Nuget",
}, "c");

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır.", {
        a: "NOde.js",
        b: "Typescript",
        c: "Npm",
    }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır.", {
        a: "NOde.js",
        b: "Typescript",
        c: "Npm",
    }, "d")
];

console.log(soru1.cevabıKontrolEt("d"));

