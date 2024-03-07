# prodemy-23.11-zahrotul

Repository for submitting tasks

# Content

- [Git](#git)
- [VsCode](#visual-studio-code)
- [HTML](#html)
- [CSS](#css)
- [Tailwind](#tailwind)
- [Javascript](#javascript)
- [NPM](#npm)
- [React](#react)

<a name="git"></a>

# GIT

- [Apa itu GIT ?](#git)
- [Tentang Github](#github)

<a name="git"></a>

## Apa itu Git ?

Software version control untuk mencatat perubahan pada layanan cloud yang menyimpan dan mengelola project (repository).

<a name="github"></a>

## Kegunaan Github

Github merupakan layanan yang berguna bagi para developer untuk saling berkolaborasi dalam mengembangkan suatu project. Developer dapat bekerja secara paralel dan menggabungkan update untuk dijadikan produk yang utuh. Github juga berguna untuk tracking catatan history dari perubahan yang dilakukan sehingga dapat dilakukan review lebih lanjut.

## Istilah dalam Github

- Repository = folder project
- Clone = remote repository dari device
- Commit = menyimpan perubahan yang telah dilakukan
- Push = Mengirim commit ke repository
- Pull = Mengammbil perubahan terbaru pada repository yang diremote
- Branch = Cabang untuk menghubungkan antar fitur atau personal
- Fork = Menyalin repository
- .gitignore = Mengabaikan perubahan pada file yang tertulis dalam .gitignore

## Command Pada Github

- git remote add [nama-remote] [url-repository] = Remote repository
- git add [path] = Menambahkan perubahan terakhir pada path
- git add. = Menambahkan semua perubahan terakhir
- git commit -m ["keterangan"] = Menambahkan keterangan pada perubahan yang di-stages
- git push -u [nama-remote] [branch] = Push perubahan
- git pull [branch] = Pull perubahan
- git checkout -b [branch] = Membuat branch
- git checkout [branch] = Berpindah branch
- git merge [branch] = Merge branch ke branch sekarang

<a name="vscode"></a>

# Visual Studio Code

Link download : [download](https://code.visualstudio.com/download)
Link shortcut windows : [shortcut](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

<a name="html"></a>

# HTML

- [Apa itu HTML ?](#html-desc)
- [Apa Saja yang Ada di HTML ?](#inside)
- [Lebih Banyak](#lebih-banyak)

<a name="html-desc"></a>

## Apa itu HTML ?

HTML merupakan standar yang digunakan secara luas untuk menampilkan halaman web. Kegunaanya sendiri adalah untuk menambahkan isi atau konten dari website yang dibuat.

<a name="inside"></a>

## Apa Saja yang Ada di HTML ?

- [Struktur](#struktur)
- [Elemen Semantic](#elemen-semantic)
- [Elemen](#elemen)
- [Panulisan Text](#penulisan-text)
- [Tag Link dan Embedding Media](#tag-link-dan-embedding-media)
- [Form](#form)
- [Tabel](#tabel)

### Struktur

| Tag       | Fungsi                                 |
| --------- | -------------------------------------- |
| `<html>`  | Elemen Root HTML                       |
| `<head>`  | Informasi Meta tentang Dokumen         |
| `<title>` | Judul Dokumen yang Muncul pada Browser |
| `<body>`  | Konten Web Page                        |

### Elemen Semantic

Elemen yang menyatakan fungsi dari elemen.
| Tag | Fungsi |
| --- | --- |
| `<header>` | Konten pengantar dari halaman web, contoh: logo, elemen heading (judul), navigasi|
| `<section>` | Konten dokumen. Memiliki heading/judul |
| `<article>` | Konten independen tidak terikat elemen lain. Digunakan pada postingan blog, komentar blog, postingan forum, review item tertentu |
| `<aside>` | Konten pada bagian aside. Biasanya di samping. |
| `<footer>` | Terletak di bagian bawah berisi informasi tambahan, tautan ke halaman penting, hak cipta, dan lainnya |

### Elemen

| Tag     | Fungsi                         |
| ------- | ------------------------------ |
| `<div>` | Elemen Pembungkus Suatu Bagian |
| `<ol>`  | Membuat List Berurutan         |
| `<ul>`  | Membuat List Tidak Berurutan   |
| `<li>`  | List Item                      |
| `<br>`  | Menambahkan Enter              |

### Penulisan Text

| Tag             | Fungsi                                   |
| --------------- | ---------------------------------------- |
| `<h1>` - `<h6>` | Merupakan Teks Heading Terbesar-Terkecil |
| `<p>`           | Merupakan Teks Paragraf                  |
| `<strong>`      | Membuat Teks Tebal                       |
| `<em>`          | Membuat Teks Miring                      |
| `<s>`           | Membuat Teks Tercoret                    |

### Tag Link dan Embedding Media

| Tag                    | Fungsi                            |
| ---------------------- | --------------------------------- |
| `<a href = [link]>`    | Mengarah ke Link                  |
| `<image src = [link]>` | Menambahkan Gambar                |
| `<video src = [link]>` | Menambahkan Video                 |
| `<audio src = [link]>` | Implemen Audio                    |
| `<embed src = [link]>` | Implemen Media dengan Tipe Apapun |

### Form

| Tag                         | Fungsi                                      |
| --------------------------- | ------------------------------------------- |
| `<form>` (elemen)           | Membuat Form pada HTML                      |
| `<textarea>` (elemen)       | Membuat Input Teks Panjang                  |
| `<select>` (elemen)         | Membuat Input Pilihan Berupa Dropdown       |
| `<datalist>` (elemen)       | Membuat Tabel pada HTML                     |
| `<label>` (elemen)          | Membuat Labeling dari ID Input yang Sama    |
| `<input>` `name` (elemen)   | Merupakan Kata Kunci dengan Value = Input   |
| `<input>` tipe : `text`     | Input Berupa Text                           |
| `<input>` tipe : `checkbox` | Input Berupa Checkbox                       |
| `<input>` tipe : `number`   | Input Berupa Angka                          |
| `<input>` tipe : `range`    | Input Berupa Range                          |
| `<input>` tipe : `radio`    | Input Berupa Pilihan Berbentuk Radio Button |
| `<input>` tipe : `password` | Input Berupa Password (hidden)              |

Selain itu, berikut atribut yang biasa digunakan dalam form : <br>
| Atribut | Fungsi |
| --- | --- |
| `max` | Parameter Maksimal dari Input |
| `min` | Parameter Minimal dari Input |
| `maxlength` | Panjang Maksimal dari Input |
| `minlength` | Panjang Minimal dari Input |
| `pattern` | Syarat Pattern agar Input Tervalidasi |
| `required` | Harus Diisi |

### Tabel

| Tag / Atribut       | Fungsi                                      |
| ------------------- | ------------------------------------------- |
| `<table>`           | Membuat Tabel pada HTML                     |
| `<thead>`           | Heading dari kolom yang dibuat dengan row   |
| `<tbody>`           | Memuat data tabel selain heading dan footer |
| `<th>`              | Menandakan judul kepada baris/kolom         |
| `<tr>`              | Manandakan Baris                            |
| `<td>`              | Menandakan Kolom                            |
| `<tfoot>`           | Membuat Konten Footer                       |
| `rowspan` (atribut) | Span Baris                                  |
| `colspan` (atribut) | Span Kolom                                  |

### Lebih Banyak

Jika ingin tahu lebih banyak mengenai HTML beserta contohnya dapat mengakses link berikut :

- https://www.codecademy.com/learn/learn-html
- https://www.w3schools.com/html/
- https://www.tutorialspoint.com/html/index.htm
- https://www.petanikode.com/tutorial/html/

<a name="css"></a>

# CSS

- [Apa Itu CSS ?](#css-desc)
- [3 Cara menambahkan CSS](#metode)
- [Syntax pada CSS](#syntax)

<a name="css-desc"></a>

## Apa Itu CSS

CSS (Cascading Style Sheet) digunakan untuk styling pada website. Kita dapat menghias website dengan mengubah warna, ukuran, font, background. panjang, lebar, dll. Selian itu kita juga dapat mengatur peletakan suatu komponen dengan float, align, display, position, dll.

<a name="metode"></a>

## 3 Cara menambahkan CSS

### 1. External CSS

Pada External CSS, CSS diletakkan pada file lain berekstensi .css. Lalu supaya CSS dapat terapply pada website, harus menambahkan syntax `<link rel="stylesheet" href="[namafile].css">`pada bagian `<head>` file HTML.

### 2. Internal CSS

Pada Internal CSS, CSS dapat diletakkan pada file HTML baik di dalam `<head>` maupun `<body>`. Syntax CSS akan dibungkus dengan `<style>`.

```html
<style>
  body {
    background-color: #19355f;
  }
  h1 {
    color: #f47523;
    margin-left: 40px;
  }
</style>
```

### 3. Inline CSS

Pada Inline CSS, CSS dapat diletakkan pada suatu elemen tunggal dalam file HTML. Metode ini diprioritaskan untuk menerapkan style yang unik pada elemen tersebut.

```html
<h1 style="”color:" #19355f;”>Hello World</h1>
```

<a name="syntax"></a>

## Syntax pada CSS

- [Syntax Umum](#1-syntax-umum)
- [Internal CSS](#2-internal-css)
- [Grouping](#3-grouping)
- [Fonts](#4-css-fonts)
- [Margin n Padding](#5-css-margin-dan-padding)
- [Background](#6-css-background)
- [Link](#7-css-link)
- [Display](#8-css-display)
- [Mengatur Ukuran](#9-mengatur-ukuran)
- [Pseudo Element](#10-pseudo-element)
- [Pseudo Class](#11-pseudo-class)
- [Flex Box](#12-flex-box)
- [Shadow](#13-shadow)
- [Transform](#14-transform)
- [Transition](#15-transition)
- [Media Query](#16-media-query)

<a name="1-umum"></a>

### 1. Syntax Umum

Contoh : <br>

````css
.komponen1 {
  background-color: beige;
  color: #000;
}
```

Pada syntax di atas dapat didefinisikan :
- `.komponen1` merupakan **class**
- Syntax di dalam tanda kurung merupakan **deklarasi**
- `background color` dan color` merupakan **property**
- `beige`, `#000` merupakan **value**

<a name="2-selector"></a>
### 2. CSS Selector
- ID(#)
ID dapat digunakan pada elemen yang unik dan setiap elemen hanya memiliki satu tag ID
- Class(.)
Class dapat dipakai berulang-ulang pada halaman yang sama dan satu elemen boleh memiliki lebih dari satu class.

<a name="3-grouping"></a>
### 3. CSS Grouping
Satu bundle styling, dapat digunakan oleh lebih dari satu id/class.
```css
.menu,
.list {
  background-color: brown;
  color: #fff;
}
````

<a name="4-fonts"></a>

### 4. CSS Fonts

| Syntax        | Fungsi                                              |
| ------------- | --------------------------------------------------- |
| `font`        | Menetapkan semua property font dalam satu deklarasi |
| `font-family` | Menentukan kelompok font teks                       |
| `font-size`   | Menentukan ukuran font teks                         |
| `<body>`      | Konten Web Page                                     |
| `font-size`   | Menentukan ukuran font teks                         |
| `font-weight` | Menentukan ketebalan font teks                      |
| `font-style`  | Menentukan kemiringan font teks                     |

<a name="5-margin-padding"></a>

### 5. CSS Margin dan Padding

Amati gambar berikut untuk memahami mengenai margin dan padding <br>
![mp](https://user-images.githubusercontent.com/72771774/156723382-2364fbf2-ab50-4301-9111-b514a48d63e4.PNG)

<a name="6-background"></a>

### 6. CSS Background

| Syntax                | Fungsi                                         |
| --------------------- | ---------------------------------------------- |
| `background-color`    | Menetapkan warna background pada suatu elemen  |
| `background-image`    | Menentukan gambar background pada suatu elemen |
| `background-repeat`   | Menentukan gambar background untuk di ulang    |
| `background-size`     | Menentukan ukuran gambar untuk background      |
| `background-position` | Mengatur posisi awal gambar background         |

<a name="7-link"></a>

### 7. CSS Link

- `:hover` merupakan kondisi ketika pointer berada di atas suatu elemen
- `:active` merupakan kondisi ketika elemen diklik
- `:visited` merupakan kondisi ketika suatu elemen link telah dikunjungi

<a name="8-display"></a>

### 8. CSS Display

| Syntax         | Fungsi                                                                     |
| -------------- | -------------------------------------------------------------------------- |
| `block`        | Elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan). |
| `inline-block` | Elemen inline-block membutuhkan lebar sesuai yang diperlukan               |
| `none`         | Elemen tidak tampil                                                        |

<a name="9-ukuran"></a>

### 9. Mengatur Ukuran

#### - Fixed

Mengatur ukuran dengan ukuran pasti dengan `px, pt, cm, mm``

#### - Relative

Mengatur ukuran relatif terhadap elemen di sekitarnya, contoh: `em, rem, vw`

<a name="10-pseudo-element"></a>

### 10. Pseudo Element

Styling bagian tertentu dengan elemen yang tidak tertulis di html.

```
selector::pseudo-element {
    property: value;
  }
```

- `::before` : Digunakan untuk memasukkan suatu konten sebelum konten dari elemen yang dipilih.

- `::after` : Digunakan untuk memasukkan suatu konten sesudah konten dari elemen yang dipilih.

<a name="11-pseudo-class"></a>

### 11. Pseudo Class

| Syntax     | Fungsi                                      |
| ---------- | ------------------------------------------- |
| `:active`  | Styling elemen saat diarahkan               |
| `:focus`   | Styling elemen focus contohnya pada `input` |
| `:active`  | Styling elemen yang sedang aktif            |
| `:visited` | Styling elemen yang telah dikunjungi        |

<a name="12-flex"></a>

### 12. Flex Box

Layout untuk mengatur elemen atau container seisinya.

```container {
  display: flex;
}
```

#### Flex Direction

| Syntax         | Arah          |
| -------------- | ------------- |
| `row(default)` | Kiri ke kanan |
| `row-reverse`  | Kanan ke kiri |
| `col`          | Atas ke bawah |
| `col-reverse`  | Bawah ke atas |

#### Justify Content

Posisi dalam 1 baris
| Syntax | Susunan |
| --- | --- |
| `flex-start` | Awal |
| `flex-end` | Akhir |
| `center` | Tengah |
| `space-between` | Spasi merata di antara komponen |
| `space-around` | Spasi di sebelum, antara, dan sesudah komponen |
| `space-around` | Spasi merata di sebelum, antara, dan sesudah komponen |

#### Align Items

Posisi dalam 1 kolom
| Syntax | Susunan |
| --- | --- |
| `flex-start` | Awal container |
| `flex-end` | Akhir container |
| `center` | Tengah |
| `sretch` | Ditarik sebesar container |

<a name="13-shadow"></a>

### 13. Shadow

Menerapkan bayangan menggunakan `text-shadow` untuk teks dan `box-shadow` untuk div.

<a name="14-transform"></a>

### 14. Transform

Digunakan untuk mengubah posisi, ukuran, rotasi, dan kemiringan elemen HTML.

- Translate
  Memindahkan elemen dari posisinya saat ini pada sumbu x dan sumbu y.

````css
div {
  transform: translate(25px 10px);
}
``` - Rotate Memutar objek di bidang 2 dimensi ```css div {
  transform: rotate(90deg);
}
```

<a name="15-transition"></a>
### 15. Transition
Memberikan waktu saat terjadi perubahan sehingga perubahan bergerak secara mulus.
Contoh : 
```css
.teks {
  transition: color 0.3s ease;
}
.teks {
  color: #fff;
}
````

<a name="16-media-query"></a>

### 16. Media Query

Responsive design pada tailwind
| Breakpoint prefix | Minimum width | CSS |
| --- | --- | --- |
| `sm` | 640px | @media (min-width: 640px) { ... } |
| `md` | 768px | @media (min-width: 768px) { ... } |
| `lg` | 1024px | @media (min-width: 1024px) { ... } |
| `xl` | 1280px | @media (min-width: 1280px) { ... } |
| `2xl` | 1536px | @media (min-width: 1536px) { ... } |

## More Info

- https://www.w3schools.com/css/
- https://www.w3schools.com/cssref/playdemo.php?filename=playcss_accent-color

<a name="tailwind"></a>

# Tailwind

- [Apa itu Tailwind?](#apa-itu-tailwind)
- [Instalasi Tailwind](#instalasi-tailwind)
- [Penggunaan Tailwind](#penggunaan-tailwind)
  - [Typography](#typography)
  - [Color](#color)
  - [Box Model](#box-model)
  - [Flex](#flex)
  - [Pseudo Element dan Pseudo Class](#pseudo-element-dan-pseudo-class)
  - [Responsive](#responsive)
  - [Arbitrary Values](#arbitrary-values)
- [Dokumentasi](#dokumentasi)

<a name="apaitutailwind"></a>

## Apa Itu Tailwind ?

Suatu framework CSS yang bersifat utility-first untuk membangun tampilan website.

<a name="instalasi-tailwind"></a>

## Instalasi Tailwind

### Dengan CDN

Masukkan `<script src="https://cdn.tailwindcss.com"></script>` ke dalam `<head>` HTML.

### Dengan NPM

Install

```
npm install -D tailwindcss
npx tailwindcss init
```

Konfigurasi `tailwing.config.js`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Menambahkan tailwind ke `src/index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Build tailwind di terminal

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Menambahkan CSS yang telah dibuild pada `<head>` di file html

```
<link href="./output.css" rel="stylesheet">
```

## Penggunaan Tailwind

### Typography

- Font size menggunakan `text-[size]`. Size menggunakan xs, sm, base, lg, xl, xxl, dst
- Font weight menggunakan `font-[weight]`. Weight menggunakan light, medium, semibold, bold, dst

### Color

- Text color menggunakan `text-{color}-{intensity}`. Contoh `text-blue-400`
- Background color menggunakan `bg-{color}-{intensity}`. Contoh `bg-blue-400`

### Box Model

- Padding menggunakan `p-[ukuran]`. Ukuran menggunakan 2, 4, dst (yang ada pada dokumentasi). Padding pada satu sisi menggunakan `pt`, `pb`, `pl`, `pr`. Padding 2 sisi x dan y menggunakan `px` dan `py`
- Margin menggunakan `m-[ukuran]`. Ukuran menggunakan 2, 4, dst (yang ada pada dokumentasi). Margin pada satu sisi menggunakan `mt`, `mb`, `ml`, `mr`. Margin 2 sisi x dan y menggunakan `mx` dan `my`
- Height menggunakan `h-[ukuran]`. Ukuran menggunakan 2, 4, dst (yang ada pada dokumentasi). Height juga dapat menggunakan `h-full`, `h-1/2`, dll
- Width menggunakan `w-[ukuran]`. Ukuran menggunakan 2, 4, dst (yang ada pada dokumentasi). Width juga dapat menggunakan `w-full`, `w-1/2`, dll

### Flex

- Menggunakan `flex`
- Menentukan arah menggunakan `flex-[direction]`. Contoh `flex-col`, `flex-row`, `flex-row-reverse`, `flex-col-reverse`

### Pseudo Element dan Pseudo Class

- Pseudo element menggunakan `before:-[content]-[elemen]` dan `after:-[content]-[elemen]`
- Pseudo class menggunakan `hover:[content]-[setting]`, `focus:[content]-[setting]`, `active:[content]-[setting]`, `visited:[content]-[setting]`, dll

### Responsive

| Breakpoint prefix | Minimum width | CSS                                |
| ----------------- | ------------- | ---------------------------------- |
| `sm`              | 640px         | @media (min-width: 640px) { ... }  |
| `md`              | 768px         | @media (min-width: 768px) { ... }  |
| `lg`              | 1024px        | @media (min-width: 1024px) { ... } |
| `xl`              | 1280px        | @media (min-width: 1280px) { ... } |
| `2xl`             | 1536px        | @media (min-width: 1536px) { ... } |

### Arbitrary Values

Custom value/ ukuran. Contoh penggunaan : `w-[50%]`, `p-[20px]`

## Dokumentasi

[Dokumentasi tailwind](https://tailwindcss.com/)

# (8) Javascript

- [Apa Itu Javascript ?](#pengertian)
- [In Javacript](#in-javascript)
  - [Perbedaan Var, Let dan Const](#perbedaan)
  - [Values and References](#values-and-references)
  - [Spread](#spread)
  - [Destructuring](#destructuring)
  - [Perbedaan Values dan References](#perbedaan-values-dan-references)
  - [Method](#method)
  - [Control Flow](#control-flow)
  - [Function](#function)
  - [Class](#class)
  - [Document Object Model](#dom)
- [Referensi](#referensi)

<a name="pengertian"></a>

## Apa Itu Javascript ?

<img alt="HTML" width="25px" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" />[Javascript](https://en.wikipedia.org/wiki/JavaScript) merupakan bahasa pemrograman populer untuk membangun web yang **high level** (yang dapat dibaca oleh manusia), scripting, untyped, dan intrepeted.

## In Javascript

<a name="perbedaan"></a>

### Perbedaan Var, Let dan Const

| Jenis | Declaration | Redeclaration | Reassignment | Hoisting |
| ----- | ----------- | ------------- | ------------ | -------- | --- |
| Var   | V           | V             | V            | V        | V   |
| Let   | V           |               | V            |          |
| Const |             |               |              |          |

- Pada declaration, kita harus memberikan value pada `const`. Deklarasi sendiri merupakan proses pembuatan variabel untuk menyimpan data. Contoh `var num`, `let name`
- Hanya `var` yang dapat dideclare ulang.
- Reasignment merupakan proses mengganti value. `const` tidak dapat diganti valuenya, dengan kata lain akan selalu sama valuenya sampai akhir.
- Hoisted merupakan pemanggilan sebelum deklarasi. Yang dapat menerapkan hoisted adalah `var` dan `function`

### Values and References

Nilai primitif (string, boolean, number, bigint, undefined, null, dan symbol) dapat diteruskan atau dipassing nilainya antar variabel. Sedangkan nilai reference hanya dapat dipakai oleh satu variabel.

### Spread

Spread digunakan ketika **semua elemen** dalam array atau object perlu dimasukkan ke dalam daftar.<br>
Note : ketika menyalin lebih dari satu object, dan saat property object ada yang sama, maka diambil yang terakhir.

```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// untuk menggabungkan memakai spread
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);
```

Hasil

```
[ 1, 2, 3, 4, 5, 6 ]
```

### Destructuring

Fungsi dari destructuring adalah untuk **menyalin nilai array atau properti objek** ke dalam variabel yang berbeda.
Catatan : menggunakan const ketika nilai kosong atau undefined tidak akan error.<br>
Contoh :

```js
const foo = ["Budi", "Sita", "Ayu"];
const [A, B, C] = foo;

console.log("a adalah " + A);
console.log("b adalah " + B);
console.log("c adalah " + C);
```

Hasil

```
a adalah Budi
b adalah Sita
c adalah Ayu
```

### Perbedaan Values dan References

Object cat1

```js
const cat1 = {
  name: "oreo",
  age: 5,
};
```

Copy Value

```js
// by value
console.log("=======Value=======");
const cat2 = cat1;
cat2.name = "chip";
console.log("cat 1:", cat1);
console.log("cat 2:", cat2);
```

Hasil

```
=======Value=======
cat 1: { name: 'chip', age: 5 }
cat 2: { name: 'chip', age: 5 }
```

Copy References

```js
console.log("=======References=======");
const cat2 = { ...cat1 };
cat2.age = 10;
console.log("cat1 (after changing):", cat1);
console.log("cat2 (after changing):", cat2);
```

Hasil

```
=======References=======
cat1 (after changing): { name: 'oreo', age: 5 }
cat2 (after changing): { name: 'oreo', age: 10 }
```

### Method

Merupakan sebuah fungsi yang terkait dengan object yang memiliki kegunaan tertentu.

- Concat = Menggabungkan 2 atau lebih array
- Map = Membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array
- Foreach = Memanggil fungsi untuk setiap elemen array
- Slice = Memilih bagian array dan mengembalikan array baru berisi yang dipilih
- Splice = Memilih bagian array dan mengembalikan array baru selain yang dipilih
- Filter = Membuat array baru dengan suatu syarat
- Substring mirip dengan slice, untuk mengambil bagian dari string
- Replace mengganti value tertentu dengan value lain dalam sebuah string
- toUpperCase() mengubah string menjadi upper case (huruf kapital)
- toLowerCase() mengubah string menjadi lower case (huruf kecil)
- Split membagi string menjadi substring dalam bentuk array

### Control Flow

- Loop/Iterasi contohnya : for, while, do while
- Percabangan contohnya : if else, switch, block, try, catch, throw, break, continue

### Function

Function merupakan sebuah objek yang memiliki properti dan method. Fungsi melakukan serangkaian prosedur yang dapat digunakan berulang kali hanya degan memanggilnya setiap dibutuhkan. Function dapat digantikan dengan arrow (=>).<br>
Contoh :

```js
let bdays = ["10-17", "05-19", "20-19"];
console.log("Nilai bdays adalah : " + bdays);

let bdaysMod = bdays.map((x) => x.replace("-", "/"));
console.log("Nilai bdays setelah dimodifikasi adalah : " + bdaysMod);
```

Hasil

```
Nilai bdays adalah : 10-17,05-19,20-19
Nilai bdays setelah dimodifikasi adalah : 10/17,05/19,20/19
```

### Class

Prototype dari suatu objek yang akan dibuat. Class memiliki nama, constructor, attributes, dan method.

- Constructor = Method di dalam class yang akan terpanggil pertama kali saat membuat object
- Method = Fungsi yang berada dalam class
- Attributes = Kumpulan variabel yang membentuk object pada class
- Extends = Membuat class anak. Class anak akan mewarisi semua atribut dan method class induk

<a name="dom"></a>

### Document Object Model (DOM)

API untuk HTML yang merepresentasikan webpage pada dokumen menjadi object

#### DOM Selection

- getElementById()
- getElementsBtTagName()
- getElementsByClassName()
- querySelector()
- querySelectorAll()

#### DOM Manipulation

| Event                      | Kegunaan                                             |
| -------------------------- | ---------------------------------------------------- |
| element.innerHTML          | Merubah isi dari tag yang sudah diseleksi            |
| element.style<propertyCSS> | Merubah style dari tag yang sudah diseleksi          |
| element.setAttribute()     | Mengelola/memanipulasi attribut yang sudah diseleksi |
| element.classList.add()    | Mengelola/memanipulasi class yang sudah diseleksi    |

#### DOM Event

| Event       | Kegunaan                                               |
| ----------- | ------------------------------------------------------ |
| onclick     | Ketika diklik                                          |
| onchange    | Digunakan dalam kombinasi dengan validasi bidang input |
| onblur      | Ketika meninggalkan kolom input                        |
| onmouseover | Ketika hover                                           |
| onmouseout  | Ketika mengarahkan mouse keluar object                 |
| oncopy      | Ketika mengcopy object                                 |

## Referensi

- https://www.w3schools.com/js/
- https://www.w3schools.com/js/js_htmldom.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

# NPM

pengelola package JavaScript bawaan Node.js. Nodejs adalah sebuah platform untuk mengeksekusi program Javascript di luar browser.

## Inisialisasi dan Instalasi

`npm init` untuk inisialisasi
`npm install [nama package]` untuk install package/library

## Export dan Import

`export [content]`
`import [content] from [letak]`
`import [content] from [package]`

<a name="git"></a>

# React

- [Mengenal React](#mengenal-react)
- [Kelebihan React](#kelebihan-react)
- [DOM dan VDOM](#dom-dan-vdom)
- [Instalasi React](#instalasi-react)
- [React Component](#react-component)
- [React Lifecycle](#react=lifecycle)
- [More About Rendering](#more-about-rendering)
- [State & Event](#state--event)

## Mengenal React

Library javascript untuk membuat UI yang interaktif dan cepat baik pada web maupun mobile.

## Kelebihan React

1. React bersifat deklaratif, yakni berfokus kepada apa tujuannya.
2. React berasis kepada komponen, setiap komponen memiliki tugas yang spesifik masing-masing.
3. React merupakan library yang populer dan konsep penggunaannya mirip dengan ios dan android sehingga layak untuk dipelajari.

## DOM dan VDOM

Manipulasi dom merupakan kunci dari web yg modern dan interaktif. Namun, manipulasi DOM secara manual memiliki kekurangan seperti berikut :

1. Manipulasi dom manual dapat membuat kode berantakan
2. Sulit mengigat DOM state sebelumnya
3. Jauh lebih lambat daripada operasi JS pada umumya
   Maka dari itu, digunakan VDOM yang merupakan representasi dari UI yang berbentuk Javascript Object yang tersimpan di dalam memori.

## Instalasi React

- React Default `npx create-react-app my-app`
- React Vite (Suatu build tools untuk membuat aplikasi front-end dengan cepat dan efisien) `npm create vite@latest my-react-app -- --template react`

## JSX : Javascript XML

Ciri-ciri JSX

1. HTML dan Javascript berada dalam satu file
2. HTML code harus diwrap dalam satu element.
3. Elemen HTML wajib memakai closing tag. contoh `<img src="" />`
4. Menggunakan atribut className

## Conditional & Array Usage

- If else hanya dapat digunakan di luar render
- Pada saat render dapat menggunakan ternary operator ( condition ? true : false) atau logical operator (condition && component)
- Ketika fetch data, wajib menggunakan key untuk atribut komponen yang berulang

## Javascript XML

JSX merupakan ekstensi dalam javascript dengan dasar fakta bahwa logika rendering terikat dengan logic dasi UI.

## React Component

Komponen react merupakan bagian kode yang digunakan untuk menentukan suatu tampilan, behavior, ataupun state dalam UI.
Dalam satu page website dapat dibagi menjadi dalam beberapa komponen, misalnya ada header, footer, title, dan description.
Component dapat diterapkan dengan fungsi maupun class. PAssing value antar komponen dapat dilakukan menggunakan props dan callback.

## React Lifecycle

- render() = merupakan lifecycle method yang digunakan di seluruh class react karena render() merupakan metode yang diperlukan dalam komponen class pada react.
- componentDidMount() = Dipanggil ketika komponen sudah dirender untuk pertama kali
- componentDidUpdate() = Dipanggil ketika terjadi update baik di props maupun state
- componentWillUnmount() = Dipanggil ketika komponen akan dihancurkan

Pada functional component, kita bisa menggunakan useEffect() untuk menambahkan side effect.
Side effect adalah function yang dieksekusi setelah render.

## More About Rendering

### Render Bersyarat

Dengan ini, kita dapat merender sebagian kode berdasarkan state. Penggunaannya biasanya menggunakan if else, ternary operator, dll. Kita juga dapat mencegah komponen untuk dirender dengan mengembalikan nilai null.
Contoh :

```jsx
export default function MainPage({ lists }) {
  return (
    <>
      {lists.map((list) => (
        <TodoList key={list.id} list={list} />
      ))}
    </>
  );
}
```

### Render List

Kita dapat merender item pada setiap list dengan menggunakan tanda kurung kurawal {}. Penerapannya adalah dengan menggunakan map.
Contoh :

```jsx
export default function TodoList({list}){
    const isCompleted  = list.completed;
    return(
        <div className="task">{
            isCompleted ?
            <s>{list.title}</s> : {list.title}
        }
        </div>
    )
}
```

## State & Event

- [Apa Itu State?](#apa-itu-state?)
- [Statefull VS Stateless](#statefull-vs-stateless)
- [Event Handling](#event-handling)

### Apa Itu State?

State merupakan suatu data pada sebuah komponen yang bersifat private sehingga tidak bisa diakses pada komponen lainnya. Modifikasi state dapat menggunakan `setState`. Setiap terjadi modifikasi, komponne akan dirender ulang. `const [state, setState] = useState('');`

### Statefull VS Stateless

Statefull component adalah komponen yang memiliki state, sedangkan stateless component tidak memiliki state.
Statefull component digunakan saat ada interaksi data dalam suatu komponen dimana akan ada data yang dapat dimodifikasi pada komponen tersebut, sedangkan stateless component tidak menerapkan interaksi data yang tujuannya memang untuk visualisasi.

### Event Handling

Event handling akan terjadi ketika pengguna memberikan aksi pada suatu komponen. Adapun contoh dari event handling adalah sebagai berikut :

- Clipboard Events = ketika promise terpenuhi
- Form Events = onChange, onSubmit
- Mouse Events = onClick, onDoubleClick, onMouseOver
- GenericEvents = onError, onLoad

## Routing

### React Router ?

React Router adalah sebuah library yang digunakan dalam aplikasi React untuk membuat routing dan navigasi antar halaman.
Dapat diinstall menggunakan command `npm install react-router-dom`

### Konfigurasi Route

#### Menggunakan Object

```jsx
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);
```

setelah itu, objek2 di atas dimasukkan ke RouterProvider di App

```jsx
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
```

#### Menggunakan JSX

Pada App

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

```jsx
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import CharacterPage from "./pages/CharacterPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/characters" element={<CharacterPage />} />
      </Routes>
    </Layout>
```

### Navigasi Antar Route

#### Menggunakan Link

`<Link to="/">Home</Link>`

#### Menggunakan `useNavigate()`

```jsx
const navigate = useNavigate();
...
navigate("/home");
```

### Dynamic Route

Digunakan ketika membutuhkan 1 route untuk komponen yang beratribut sama.

- Menambahkan `:id` pada path router `<Route path="/character/:id" element={<DetailPage />} />`
- Menambahkan `${id}` pada navigasi `navigate("/detail${id}");`

### Redirect

```jsx
<Route path="/" element={<Navigate to="/home" />} />
<Route path="/home" element={<LandingPage />} />
```

### Passing Data

#### Menggunakan search param

Cara kirim

```jsx
const onClickCard = (id, name) => {
  navigate({
    pathname: `/character/${id}`,
    search: createSearchParams({
      name: name,
    }).toString(),
  });
};
```

URL : http://localhost:5173/character/1?name=Pikachu

Cara Ambil

```jsx
const [searchParams] = useSearchParams();
console.log(searchParams);
```

#### Menggunakan state

Cara kirim

```jsx
navigate(`/character/${id}`, {
  state: {
    name: name,
  },
});
```

Cara Ambil

```jsx
const location = useLocation();
console.log("location", location.state.name);
```

## Javascript Asynchronous

### Tentang Promise

Object yang merepresentasikan keberhasilan/kegagalan sebuah event asynchronous.

- Pending : Dalam keadaan awal, tidak terpenuhi atau tidak ditolak
- Fulfilled : Artinya terpenuhi atau sukses
- Rejected : Artinya tidak terpenuhi atau gagal
  Contoh

```jsx
axios
  .get(data)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### aync await

Contoh

```jsx
const get = async () => {
  try {
    const res = await axios.get(data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
```

## JSON dan Rest API

### JSON (Javascript Object Notation)

Sebuah format yang digunakan untuk menyimpan, membaca, serta menukar informasi dari web server sehingga dapat dibaca oleh para pengguna.
Ciri-ciri json:

1. JSON selalu dibuka dan ditutup dengan tanda {} atau kurung kurawal
2. Terdiri dari key dan value, dipisahkan oleh titik dua
3. Key dan value selalu dibuka dan ditutup dengan tanda kutip ganda (“”)
4. Tiap pasang key dan value dipisah dengan koma
5. Di key dan value terakhir tidak boleh ada tanda koma

```json
{
  "name": "jojo",
  "city": "surabaya"
}
```

Utility JSON

- `JSON.parse(txt);` mengubah JSON menjadi object
- `JSON.stringify(obj);` mengubah object ke JSON

### API (Application Programming Interface)

Sebagai perantara bagi beberapa aplikasi atau klien dan server, baik pada satu platform yang sama maupun lintas platform, agar bisa saling berkomunikasi.

#### Rest API

Representational State Transfer: Ketentuan yang diikuti developer saat mereka membuat API.

#### Metode Request API

1. GET, berfungsi untuk membaca data/resource dari REST server
2. POST, berfungsi untuk membuat sebuah data/resource baru di REST server
3. PUT, berfungsi untuk memperbaharui data/resource di REST server
4. DELETE, berfungsi untuk menghapus data/resource dari REST server

#### Axios

Library javascript berbasis promise untuk membuat HTTP request

## Data Fetching

### JSON Server

JSON Server adalah sebuah package yang dapat digunakan untuk membuat sebuah RESTful API (Application Programming Interface) sederhana dengan menggunakan data dalam format JSON.
`npm install -g json-server`
`json-server --watch db.json`

### Membuat HTTP Request

#### Menggunakan Fetch

Contoh fetch

```jsx
const onClickGetData = () => {
  fetch("http://localhost:3000/pokemon")
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    })
    .catch((error) => console.log(error));
};
```

Contoh Post/add

```jsx
const onClickPostData = () => {
  const payload = {
    name: "Hypno",
    type: "Psychic",
    description:
      "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
  };

  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => alert("New pokemon added!"));
};
```

#### Menggunakan Axios

```jsx
const getData = async () => {
  try {
    const res = await axios.get(data);
    setData(res);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getData();
}, []);
```

```jsx
axios
  .post(data, payload)
  .then(() => {
    console.log("add success");
    getData();
  })
  .catch((err) => console.log(err));
```

### SWR

Merupakan React library untuk data fetching. Library ini mampu mengoptimisasi data fetching menggunakan cache dan dapat menghindari request yang berulang. React SWR bukan untuk menggantikan fetch atau axios, tapi digunakan bersama fetch atau axios.
`npm install swr`
`import useSWR from "swr";`

```jsx
//   use react swr to fetch data
const getProducts = (url) => axios.get(url).then((response) => response.data);

const { data, isLoading, error, mutate } = useSWR(
  "http://localhost:3000/product",
  getProducts
  // {
  //     onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
  // }
);

if (error) return alert(JSON.stringify(erroroccured));
```

## Form Handling

# (15) React Form

- [Form](#form)
- [Controlled Component vs Uncontrolled Component](#controlled-component-vs-uncontrolled-component)
- [Basic Validation](#basic-validation)

## Form

Saat kita mengembangkan aplikasi website yang interaktif, peran form sangat diperlukan. Form dapat menghandle inputan yang diberikan oleh user. Contoh yang sering kita jumpai adalah form registrasi/login.

## Controlled Component vs Uncontrolled Component

## Basic Validation

### Manfaat validasi

- Menyaring input data yang benar agar aplikasi berjalan dengan lancar
- Melindungi akun user, contohnya pada pembuatan password
- Melindungi sistem aplikasi

### Tipe Validasi

#### 1. Client-side

Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan saat data belum dikirim ke server, sehingga pengguna tidak perlu menunggu respon dari server.

#### 2. Server-side

Validasi yang dilakukan pada sisi server. Setelah user submit inputannya, server memvalidasi inputan dari user sebelum dikirim ke database, setelah itu baru mengirim respon ke user.

### Built-in Form Validation

- type = menentukan bentuk data
- required = harus diisi
- min & max = batasan untuk input tipe number
- minlength & maxlength = batasan untuk input tipe text
- pattern = batasan yang mendefinisikan pola data yang boleh dimasukkan

### Menggunakan Javascript

- onChange = validasi akan dilakukan setiap ada perubahan
- onSubmit = validasi dilakukan setiap submit inputan

### React Hook Form

Merupakan suatu library yang dapat digunakan untuk handle form dan validasi form.
`npm install react-hook-form`
`import { useForm } from "react-hook-form";`
`const {register} = useForm()`
`{...register("name")}`

Handle Submit

```jsx
const { register, handleSubmit } = useForm();

<form
  className="flex flex-col gap-4 mt-4"
  onSubmit={handleSubmit(onSubmitForm)}
></form>;
```

```jsx
const onSubmitForm = (data) => {
  console.log(data);
};
```

### YUP

YUP adalah sebuah pembuat skema JavaScript untuk parsing dan validasi suatu value.
`npm install yup`
`npm install @hookform/resolvers`
`import { yupResolver } from "@hookform/resolvers/yup";`
Contoh skema

```jsx
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
});
```

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});
```

```jsx
<p className="error">{errors.email?.message}</p>
```

### Sweet Alert 2

Untuk stylyng alert
`npm install sweetalert2`
Contoh

```jsx
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`http://localhost:3000/product/${id}`).then(() => mutate());
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
  }
});
```

## Global State Management

### Context

Context adalah fitur dalam React yang menyediakan cara untuk membagikan data ke seluruh rantai komponen tanpa perlu meneruskan props secara manual melalui setiap komponen di tengah-tengah.

#### Pemakaian

`import { createContext } from 'react';`
`export const CheckoutContext = createContext();`

```jsx
import { useContext } from "react";
.
.
.
const onClickBuyNow = () => {
    setDataCheckout(data);
    navigate("/checkout");
  }
```

```jsx
const { dataCheckout } = useContext(CheckoutContext);
.
.
.
<img
   src={dataCheckout.img}
   alt="foto"
   className="w-16"
/>
<h3 className="font-bold">{dataCheckout.name}</h3>
```

### Redux

Redux adalah salah satu library state management.
`npm install redux react-redux`

#### Kapan Menggunakan Redux ?

1. Banyak state yang tersebar ke banyak tempat
2. State sering berubah
3. Logic perubahan state kompleks
4. Ukuran codebase yang menengah keatasdan sedang dikerjakan oleh banyak orang
5. Perlu mengetahui bagaimana state diubah seiring waktu

#### Komponen Redux

1. Actions = Memberikan informasi dari aplikasi ke store
2. Reducer = Fungsi javascript yang mengambil input berupa state saat ini dan action objek dan output state baru
3. Store = Objek sentral yang menyimpan state pada aplikasi

#### Pemakaian

Menggunakan Hooks `useSelector` untuk mengambil data dan `useDispatch` untuk set data

#### Redux Toolkit

Redux Toolkit adalah sebuah library yang mempermudah proses pengelolaan state menggunakan Redux.
`npm install @reduxjs/toolkit react-redux`

##### Komponen Redux Toolkit

1. Store = Tempat dimana global state disimpan.
2. Slice = Slice adalah sebuah object yang memiliki tiga bagian utama, yaitu initial state, function reducer dan nama dari slice sebagai identifikasi.

## React Authentication

### JSON server auth

Middleware authentication untuk JSON server.
`npm install -g json-server-auth`

### Steps

#### Membuat Collection users pada db.json

```js
{
  "users": []
}
```

#### Start server

json-server-auth db.json

#### Buat Register

Register

```jsx
const onSubmitForm = (data) => {
  console.log("submit ", data);
  const payload = {
    email: data.email,
    name: data.name,
    password: data.password,
    role: data.role,
  };
  axios
    .post("http://localhost:3000/register", payload)
    .then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Registered!",
        icon: "success",
      });
      navigate("/login");
      reset();
    })
    .catch((error) => console.log(error));
};
```

#### Buat auth slice

```jsx
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: "",
  user: {
    id: "",
    email: "",
    name: "",
    role: "",
  },
};

function getStoredAuthState() {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  if (token) {
    // set header global
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    return {
      token,
      user: JSON.parse(userString),
    };
  }

  return { ...initialState };
}

const authSlice = createSlice({
  name: "auth",
  // initialState: { ...initialState },
  initialState: getStoredAuthState(),
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
      localStorage.setItem("token", token);
      // set header global
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    },
    setUser(state, action) {
      const { id, email, name, role } = action.payload;
      state.user.id = id;
      state.user.email = email;
      state.user.name = name;
      state.user.role = role;
      localStorage.setItem("user", JSON.stringify({ id, email, name, role }));
    },
    resetAuthData() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // set header global
      //   delete axios.defaults.headers.common["Authorization"];
      return { ...initialState };
    },
  },
});

export const { setToken, setUser, resetAuthData } = authSlice.actions;
export default authSlice.reducer;
```

Penjelasan tambahan :

- Local storage : fitur dalam browser web yang memungkinkan kita untuk menyimpan data secara persisten di sisi klien (client-side). Tidak hilang saat direfresh.

```jsx
// inisiasi local storage
const token = localStorage.getItem("token");
const userString = localStorage.getItem("user");

// saat logout, localstorage akan dihapus
localStorage.removeItem("token");
localStorage.removeItem("user");
```

- Setting token
  Contoh memakai 660: user yang login dapat melakukan write atau read, sedangkan user yang tidak login tidak boleh melakukan keduanya.

```jsx
// set header global
axios.defaults.headers.common["Authorization"] = "Bearer " + token;
```

Pada halaman awal

```jsx
//   use react swr to fetch data
const getProducts = (url) => axios.get(url).then((response) => response.data);

const { data, isLoading, error, mutate } = useSWR(
  "http://localhost:3000/660/product",
  getProducts
);
```

#### Buat Login

Login

```jsx
const onSubmitForm = (data) => {
  console.log("submit ", data);

  const payload = {
    email: data.email,
    password: data.password,
  };
  axios
    .post("http://localhost:3000/login", payload)
    .then((res) => {
      const { accessToken, user } = res.data;
      dispatch(setToken(accessToken));
      dispatch(setUser(user));
      console.log(user.role);
      if (user.role === "admin") navigate("/productlist");
      else navigate("/");
      reset();
      Swal.fire({
        title: "Good job!",
        text: "Data added!",
        icon: "success",
      });
      reset();
    })
    .catch((error) => console.log(error));
};
```
