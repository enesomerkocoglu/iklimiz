<!--
  ╔══════════════════════════════════════════════════════╗
  ║   Bu dosya: iklimiz PROJE README'sidir               ║
  ║   Profil README → enesomerkocoglu/enesomerkocoglu    ║
  ╚══════════════════════════════════════════════════════╝
-->

<div align="center">

# 🌍 İKLİMİZ

### Geleceğin İzini Bugünden Takip Edin

[![Live Demo](https://img.shields.io/badge/🌐%20Canlı%20Demo-İklimiz-1a5c38?style=for-the-badge)](https://enesomerkocoglu.github.io/iklimiz)
[![GitHub](https://img.shields.io/badge/Kaynak%20Kodu-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu/iklimiz)
[![Status](https://img.shields.io/badge/Durum-Aktif%20Geliştirme-success?style=for-the-badge)]()

<br/>

> Küresel veri kaynaklarından beslenen, yüksek performanslı ve erişilebilir iklim takip dashboard'u.
> Dünyanın nereye gittiğini ve dönüşümün ne kadar hızlı ilerlediğini görün.

</div>

---

## 📸 Ekran Görüntüleri

| Anasayfa | Problem |
|:---:|:---:|
| ![Anasayfa](https://github.com/user-attachments/assets/128f7255-91a9-4986-90ce-fd23547ad979) | ![Problem](https://github.com/user-attachments/assets/d3f62b23-79f8-4c92-91a8-f205c9286764) |

| Dönüşüm | Küresel Veri Kaşifi |
|:---:|:---:|
| ![Dönüşüm](https://github.com/user-attachments/assets/c10e97a3-df4f-486e-a180-cc2de412f94c) | ![Analiz](https://github.com/user-attachments/assets/3a748124-9ca6-4af6-a820-b83d83a2eedc) |

---

## 🎯 Projenin Çözdüğü Problem

İklim değişikliğine dair veriler, bilimsel raporlarda sıradan insanlara ulaşmayan bir dilde sunulmaktadır. **İklimiz**, NASA ve Dünya Bankası'nın ham verilerini herkesin anlayabileceği, etkileşimli bir görsel dile dönüştürür.

| Metrik | Değer | Anlam |
|---|---|---|
| Atmosferik CO₂ | **428 ppm** | Sanayi öncesi döneme göre %50 daha yüksek |
| Küresel Isınma | **+1.19°C** | 1880'den bu yana en sıcak dönem |
| Deniz Seviyesi Artışı | **+105 mm** | Son 30 yılda 2 katından fazla hızlandı |
| Yenilenebilir Enerji Payı | **%32** | Küresel enerji karmasında |
| Temiz Enerji Yatırımı | **1.8 Trilyon $** | 2024 küresel sermaye akışı |

---

## 🛠️ Kullanılan Teknolojiler

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript%20ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Global Warming API](https://img.shields.io/badge/Global%20Warming%20API-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)
![World Bank](https://img.shields.io/badge/World%20Bank%20DATA-009FDA?style=for-the-badge&logo=databricks&logoColor=white)

---

## 🏗️ Teknik Mimari

**Neden Vanilla JavaScript?**

React veya Vue gibi bir framework kullanmak yerine Modern JavaScript (ES6+) tercih edildi. DOM manipülasyonu, `fetch()` API ve `async/await` yapısı kullanılarak bir kütüphane bağımlılığına gerek kalmadan tam işlevsel bir dashboard inşa edildi.

```
iklimiz/
├── index.html              → Semantic HTML5 yapısı, SEO meta etiketleri
├── style.css               → CSS Custom Properties, Flexbox & Grid, Responsive
├── script.js               → ES6+ modüler JavaScript, Chart.js entegrasyonu
├── filtered_data.json      → Dünya Bankası ülke verileri (CO₂, CH₄, Sera Gazı)
└── gorsel/
    ├── nasa-logo.png       → NASA logo
    ├── world-logo.png      → Dünya Bankası logo
    ├── github.png          → GitHub ikonu
    ├── linkedin.png        → LinkedIn ikonu
    ├── menu.svg            → Hamburger menü ikonu
    ├── close.svg           → Kapat ikonu
    └── DownArrow.svg       → Aşağı ok ikonu
```

**Canlı Veri Akışı**

```
Global Warming API  ──→  CO₂ Grafiği      (carbongrafik)
Global Warming API  ──→  Sıcaklık Grafiği (ısınmaendeksi)
Manuel Veri         ──→  Deniz Seviyesi   (denizSeviyesiGrafik)
filtered_data.json  ──→  Analiz Grafiği   (grafikGuncelle)
```

---

## ✨ Özellikler

- 🔄 **Dinamik Filtreleme** — CO₂ İzi, CH₄ Etkisi, Sera Gazı arasında anlık geçiş; grafik anında güncellenir
- 🗺️ **Çoklu Ülke Karşılaştırması** — Arama ile ülke seçimi, maksimum 3 ülke eş zamanlı karşılaştırma
- 📡 **Canlı API Verisi** — Global Warming API üzerinden CO₂ ve sıcaklık verileri anlık çekilir
- 💡 **Interaktif Grafik** — 3 farklı grafik türü: çizgi, çubuk ve dolgulu alan grafiği
- 📱 **Responsive Tasarım** — Hamburger menü dahil, mobil uyumlu CSS Grid & Flexbox düzeni
- 📌 **Sabitlenmiş CO₂ Göstergesi** — Tüm sayfa boyunca navbar'da `427 ppm` değeri görünür

---

## 📚 Bu Projeden Öğrendiklerim

**Teknik Kazanımlar**
- **Canlı API entegrasyonu:** `fetch()` ve `async/await` ile dış API'lerden veri çekme, işleme ve hata senaryolarını yönetme pratiği kazandım. Deniz seviyesi API'sinin CORS hatası vermesi, gerçek dünya geliştirme süreçlerinde "her API çalışmaz" gerçeğini erken öğretti.
- **Chart.js özelleştirmesi:** Varsayılan görünümden çıkarak bir tasarım sistemine uygun 3 farklı grafik türü üretmek, kütüphane belgelerini baştan sona okuma alışkanlığı kazandırdı.
- **Dinamik DOM yönetimi:** Ülke seçimi, tag silme ve grafik güncellemeyi senkronize etmek, state'i framework olmadan yönetmenin ne kadar dikkat gerektirdiğini gösterdi.
- **JSON veri modelleme:** Dünya Bankası verilerini `{ülkeKodu: {yıl: {metrik: değer}}}` formatında modellemek, veri yapısı tasarımının grafik performansını doğrudan etkilediğini öğretti.

**Süreç Kazanımları**
- **Mimari karar almak:** "Bu teknoloji neden?" sorusunu sormak ve cevabını belgelemek, kodu yazmak kadar önemli.
- **Kullanıcıyı merkeze almak:** Karmaşık iklim verisini sıradan bir kullanıcıya nasıl aktaracağını düşünmek, empati odaklı geliştirme pratiği kazandırdı.

---

## ⚡ Performans & Kalite

| Metrik | Durum | Notlar |
|---|---|---|
| İlk Yükleme | ✅ Hızlı | Framework yok, yalnızca Chart.js CDN bağımlılığı |
| Responsive | ✅ Tam Uyum | Hamburger menü dahil mobil uyumlu |
| Semantic HTML | ✅ | SEO meta etiketleri, anlamlı etiket yapısı |
| Cross-Browser | ✅ | Chrome, Firefox, Safari, Edge |
| Canlı Veri | ✅ | CO₂ ve sıcaklık verileri API'den anlık çekilir |
| Erişilebilirlik | ✅ | `aria-label`, `aria-expanded`, `tabindex` kullanımı |

---

## 📡 Veri Kaynakları

| Kaynak | Veri Türü | Kullanılan Bölüm |
|---|---|---|
| [Global Warming API](https://global-warming.org/) | CO₂ konsantrasyonu, Küresel sıcaklık anomalisi | Problem |
| [World Bank Data](https://data.worldbank.org/) | Ülke bazlı CO₂, CH₄ ve Sera Gazı emisyonları | Analiz |
| NASA / NOAA (manuel) | Deniz seviyesi yükseliş verileri (1993–2025) | Problem |

> Tüm veriler kamuya açık ve bilimsel kaynaklara dayanmaktadır. Footer bölümünden kaynak sayfalarına doğrudan erişilebilir.

---

## 🗺️ Gelecek Planları

- [ ] Türkiye'ye özel iklim projeksiyonu modülü
- [ ] PDF rapor indirme özelliği
- [ ] Dark / Light tema toggle
- [ ] Deniz seviyesi canlı API entegrasyonu
- [ ] PWA desteği — çevrimdışı erişim

---

## 📬 İletişim

<div align="center">

Proje hakkında soru sormak veya iş birliği yapmak ister misiniz?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enes-ömer-koçoğlu-08447937b)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu)

<br/>

---

<sub>© 2026 Enes Ömer Koçoğlu · İklimiz · Tüm hakları saklıdır.</sub>

</div>
