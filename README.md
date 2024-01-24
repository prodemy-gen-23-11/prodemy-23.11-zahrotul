# prodemy-23.11-zahrotul
Repository for submitting tasks

# Content
- [Git](#git)
- [VsCode](#visual-studio-code)
- [HTML](#html)
- [CSS](#css)

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
| Tag | Fungsi |
| --- | --- |
| `<html>` | Elemen Root HTML |
| `<head>` | Informasi Meta tentang Dokumen |
| `<title>` | Judul Dokumen yang Muncul pada Browser |
| `<body>` | Konten Web Page |

### Elemen Semantic
Elemen yang menyatakan fungsi dari elemen.
| Tag | Fungsi |
| --- | --- |
| `<header>` | Konten pengantar dari halaman web, contoh: logo, elemen heading (judul), navigasi|
| `<section>` | Konten dokumen. Memiliki heading/judul |
| `<article>` | Konten independen tidak terikat elemen lain. Digunakan pada postingan blog, komentar blog, postingan forum,  review item tertentu |
| `<aside>` | Konten pada bagian aside. Biasanya di samping. |
| `<footer>` | Terletak di bagian bawah berisi informasi tambahan, tautan ke halaman penting, hak cipta, dan lainnya |

### Elemen
| Tag | Fungsi |
| --- | --- |
| `<div>` | Elemen Pembungkus Suatu Bagian |
| `<ol>` | Membuat List Berurutan |
| `<ul>` | Membuat List Tidak Berurutan |
| `<li>` | List Item |
| `<br>` | Menambahkan Enter |

### Penulisan Text
| Tag | Fungsi |
| --- | --- |
| `<h1>` - `<h6>` | Merupakan Teks Heading Terbesar-Terkecil |
| `<p>` | Merupakan Teks Paragraf |
| `<strong>` | Membuat Teks Tebal |
| `<em>` | Membuat Teks Miring |
| `<s>` | Membuat Teks Tercoret |

### Tag Link dan Embedding Media
| Tag | Fungsi |
| --- | --- |
| `<a href = [link]>` | Mengarah ke Link |
| `<image src = [link]>` | Menambahkan Gambar |
| `<video src = [link]>` | Menambahkan Video |
| `<audio src = [link]>` | Implemen Audio |
| `<embed src = [link]>` | Implemen Media dengan Tipe Apapun |

### Form
| Tag | Fungsi |
| --- | --- |
| `<form>` (elemen) | Membuat Form pada HTML |
| `<textarea>` (elemen) | Membuat Input Teks Panjang |
| `<select>` (elemen) | Membuat Input Pilihan Berupa Dropdown |
| `<datalist>` (elemen) | Membuat Tabel pada HTML |
| `<label>` (elemen) | Membuat Labeling dari ID Input yang Sama |
| `<input>` `name` (elemen) | Merupakan Kata Kunci dengan Value = Input |
| `<input>` tipe : `text` | Input Berupa Text |
| `<input>` tipe : `checkbox` | Input Berupa Checkbox |
| `<input>` tipe : `number` | Input Berupa Angka |
| `<input>` tipe : `range` | Input Berupa Range |
| `<input>` tipe : `radio` | Input Berupa Pilihan Berbentuk Radio Button |
| `<input>` tipe : `password` | Input Berupa Password (hidden) |

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
| Tag / Atribut | Fungsi |
| --- | --- |
| `<table>` | Membuat Tabel pada HTML |
| `<thead>` | Heading dari kolom yang dibuat dengan row |
| `<tbody>` | Memuat data tabel selain heading dan footer |
| `<th>` | Menandakan judul kepada baris/kolom |
| `<tr>` | Manandakan Baris |
| `<td>` | Menandakan Kolom |
| `<tfoot>` | Membuat Konten Footer |
| `rowspan` (atribut) | Span Baris |
| `colspan` (atribut) | Span Kolom |

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
Pada Internal CSS, CSS dapat diletakkan pada file HTML baik di dalam `<head>` maupun `<body>`. Syntax CSS akan dibungkus dengan `<style>.
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
<h1 style=”color: #19355f;”>Hello World</h1>
``` 
<a name="syntax"></a>
## Syntax pada CSS
-[Syntax Umum](#1-syntax-umum)
-[Internal CSS](#2-internal-css)
-[Grouping](#3-grouping)
-[Fonts](#4-css-fonts)
-[Margin n Padding](#5-css-margin-dan-padding)
-[Background](#6-css-background)
-[Link](#7-css-link)
-[Display](#8-css-display)
-[Mengatur Ukuran](#9-mengatur-ukuran)
-[Pseudo Element](#10-pseudo-element)
-[Pseudo Class](#11-pseudo-class)
-[Flex Box](#12-flex-box)
-[Shadow](#13-shadow)
-[Transform](#14-transform)
-[Transition](#15-transition)
-[Media Query](#16-media-query)

<a name="1-umum"></a>
### 1. Syntax Umum
Contoh : <br>
```css
.komponen1{
    background-color:beige;
    color: #000;
}```
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
.list{ 
    background-color: brown;
    color: #fff;
}
```
<a name="4-fonts"></a>
### 4. CSS Fonts
| Syntax | Fungsi |
| --- | --- |
| `font` | Menetapkan semua property font dalam satu deklarasi |
| `font-family` | Menentukan kelompok font teks |
| `font-size` | Menentukan ukuran font teks |
| `<body>` | Konten Web Page |
| `font-size` | Menentukan ukuran font teks |
| `font-weight` | Menentukan ketebalan font teks |
| `font-style` | Menentukan kemiringan font teks |

<a name="5-margin-padding"></a>
### 5. CSS Margin dan Padding 
Amati gambar berikut untuk memahami mengenai margin dan padding <br>
![mp](https://user-images.githubusercontent.com/72771774/156723382-2364fbf2-ab50-4301-9111-b514a48d63e4.PNG)

<a name="6-background"></a>
### 6. CSS Background
| Syntax | Fungsi |
| --- | --- |
| `background-color` | Menetapkan warna background pada suatu elemen |
| `background-image` | Menentukan gambar background pada suatu elemen |
| `background-repeat` | Menentukan gambar background untuk di ulang |
| `background-size` | Menentukan ukuran gambar untuk background |
| `background-position` | Mengatur posisi awal gambar background |

<a name="7-link"></a>
### 7. CSS Link
- `:hover` merupakan kondisi ketika pointer berada di atas suatu elemen
- `:active` merupakan kondisi ketika elemen diklik
- `:visited` merupakan kondisi ketika suatu elemen link telah dikunjungi

<a name="8-display"></a>
### 8. CSS Display 
| Syntax | Fungsi |
| --- | --- |
| `block` | Elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan). |
| `inline-block` | Elemen inline-block membutuhkan lebar sesuai yang diperlukan |
| `none` | Elemen tidak tampil |

<a name="9-ukuran"></a>
### 9. Mengatur Ukuran 
#### - Fixed
Mengatur ukuran dengan ukuran pasti dengan `px, pt, cm, mm``
#### - Relative
Mengatur ukuran relatif terhadap elemen di sekitarnya, contoh: `em, rem, vw`

<a name="10-pseudo-element"></a>
### 10. Pseudo Element
Styling bagian tertentu dengan elemen yang tidak tertulis di html.
```selector::pseudo-element {
    property: value;
  }
```
- `::before` : Digunakan untuk memasukkan suatu konten sebelum konten dari elemen yang dipilih.

- `::after` : Digunakan untuk memasukkan suatu konten sesudah konten dari elemen yang dipilih.

<a name="11-pseudo-class"></a>
### 11. Pseudo Class
| Syntax | Fungsi |
| --- | --- |
| `:active` | Styling elemen saat diarahkan |
| `:focus` | Styling elemen focus contohnya pada `input` |
| `:active` | Styling elemen yang sedang aktif |
| `:visited` | Styling elemen yang telah dikunjungi |

<a name="12-flex"></a>
### 12. Flex Box
Layout untuk mengatur elemen atau container seisinya.
```container {
  display: flex;
}
```
#### Flex Direction
| Syntax | Arah |
| --- | --- |
| `row(default)` | Kiri ke kanan |
| `row-reverse` | Kanan ke kiri |
| `col` | Atas ke bawah |
| `col-reverse` | Bawah ke atas |

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
```div {
transform: translate(25px 10px);
}
```
- Rotate
Memutar objek di bidang 2 dimensi
```div {
transform: rotate(90deg);
}```

<a name="15-transition"></a>
### 15. Transition
Memberikan waktu saat terjadi perubahan sehingga perubahan bergerak secara mulus.
Contoh : 
```css
.teks{
    transition: color 0.3s ease;
}
.teks{
    color: #fff;
}
```
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

