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
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır.", {
        a: "NOde.js",
        b: "Typescript",
        c: "Npm",
    }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır.", {
        a: "NOde.js",
        b: "Typescript",
        c: "Npm",
    }, "d"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır.", {
        a: "NOde.js",
        b: "Typescript",
        c: "Npm",
    }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır.", {
        a: "NOde.js",
        b: "Typescript",
        c: "Npm",
    }, "d")
];



function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}



Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);


document.querySelector(".btn-start").addEventListener("click",function(){
    if(quiz.sorular.length!=quiz.soruIndex)
    {
        console.log(quiz.soruGetir());
      quiz.soruIndex+=1;
    }else
    {
        console.log("Quiz bitti");

    }
})
