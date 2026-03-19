<!--
  ╔══════════════════════════════════════════════════════╗
  ║   Bu dosya: iklimiz PROJE README'sidir               ║
  ║   Profil README → enesomerkocoglu/enesomerkocoglu    ║
  ╚══════════════════════════════════════════════════════╝
-->

<div align="center">

# 🌍 İKLİMİZ

### Geleceğin İzini Bugünden Takip Edin

[![Live Demo](https://img.shields.io/badge/🌐%20Canlı%20Demo-iklimiz.vercel.app-1a5c38?style=for-the-badge)](https://enesomerkocoglu.github.io/iklimiz)
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
| ![Anasayfa](https://github.com/user-attachments/assets/128f7255-91a9-4986-90ce-fd23547ad979) | ![Problem](https://github.com/enesomerkocoglu/iklimiz/assets/screenshots/problem_git.png) |

| Dönüşüm | Küresel Veri Kaşifi |
|:---:|:---:|
| ![Dönüşüm](https://github.com/enesomerkocoglu/iklimiz/assets/screenshots/donusum_git.png) | ![Analiz](https://github.com/enesomerkocoglu/iklimiz/assets/screenshots/analiz_git.png) |

> 💡 **Görsel yükleme notu:** Görselleri GitHub Issues'a sürükle-bırak yaparak aldığın CDN linklerini yukarıdaki URL'lerin yerine yapıştır.

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
![NASA API](https://img.shields.io/badge/NASA%20API-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)
![World Bank](https://img.shields.io/badge/World%20Bank%20DATA-009FDA?style=for-the-badge&logo=databricks&logoColor=white)

---

## 🏗️ Teknik Mimari

**Neden Vanilla JavaScript?**

React veya Vue gibi bir framework kullanmak yerine Modern JavaScript (ES6+) tercih edildi. Bir kütüphane bağımlılığına gerek kalmadan — DOM manipülasyonu, Fetch API ve asenkron yapı kullanılarak — dilin kendi gücüyle neler yapılabileceğini kanıtlamak için bilinçli alınan bir karardır.

```
iklimiz/
├── index.html          → Semantic HTML5 yapısı
├── style.css           → CSS Custom Properties, Flexbox & Grid
├── app.js              → ES6+ modüler JavaScript
├── data/
│   ├── nasa_co2.json   → NASA GISS atmosferik veriler
│   └── worldbank.json  → Dünya Bankası ekonomik metrikler
└── assets/
    └── fonts/          → Tipografi varlıkları
```

---

**Mimari Karar Kayıtları (ADR)**

<details>
<summary><strong>ADR-001: Chart.js Seçimi — Neden D3.js değil?</strong></summary>

**Bağlam:** Devasa JSON veri setlerini tarayıcıda render etmek için bir grafik kütüphanesi seçilmesi gerekiyordu.

**Değerlendirilen Alternatifler:**

| Kütüphane | Avantaj | Dezavantaj |
|---|---|---|
| D3.js | Maksimum esneklik | Dik öğrenme eğrisi, yüksek zaman maliyeti |
| Recharts | Kolay kullanım | React bağımlılığı gerektiriyor |
| **Chart.js** | **Sıfır bağımlılık, güçlü özelleştirme** | — |

**Karar:** Chart.js — Projenin "saf JavaScript" felsefesiyle çelişmeden, VIP tasarım temasına (altın sarısı, koyu arka plan, özel tooltipler) tam uyum sağlayacak şekilde özelleştirildi.

**Takas (Trade-off):** D3.js'in sunduğu karmaşık SVG animasyonlarından vazgeçildi. Hedef kitle için en kritik şeyin animasyon değil, anında okunabilir veri olduğu değerlendirildi.

</details>

<details>
<summary><strong>ADR-002: Tek Sayfalık Yapı — Neden çok sayfalı değil?</strong></summary>

**Bağlam:** Problem, Dönüşüm ve Analiz bölümlerinin nasıl organize edileceği kararı.

**Değerlendirilen Alternatifler:**
- Ayrı HTML sayfaları → Her geçişte tam sayfa yenileme, kötü kullanıcı deneyimi
- React Router → Vanilla JS projesi için gereksiz bağımlılık
- **Smooth Scroll + Section tabanlı yapı → En hafif ve doğal çözüm**

**Karar:** Tek HTML sayfasında section'lar arası smooth scroll. Navbar'daki CO₂ değeri (`427 ppm`) tüm bölümlerde sabit kalarak kullanıcıya sürekli bir "bağlam" hissi verir.

**Takas (Trade-off):** Derin linkleme (deep linking) desteği sınırlı kaldı. Proje bir sunum aracı olduğundan bu kabul edilebilir bir takas olarak değerlendirildi.

</details>

<details>
<summary><strong>ADR-003: Tasarım Kararı — Neden "VIP Dashboard" estetiği?</strong></summary>

**Bağlam:** İklim verileri genellikle kuru ve akademik tasarımlarla sunulur; bu durum halk ilgisini azaltır.

**Karar:** Koyu yeşil (`#1a3c2e`) + Altın Sarısı (`#DAA520`) renk paleti seçildi. Bu kombinasyon:
- Finans dünyasında güven ve prestij çağrışımı taşır
- Koyu arka plan, grafik veri noktalarını daha net öne çıkarır
- Sarı vurgu rengi, kritik metrikleri (`428 ppm`, `+1.19°C`) anında fark ettirir

</details>

---

## ✨ Özellikler

- 🔄 **Dinamik Filtreleme** — CO₂ İzi, CH₄ Etkisi, Sera Gazı arasında anlık geçiş
- 🗺️ **Çoklu Ülke Karşılaştırması** — Arama ile ülke seçimi ve eş zamanlı çizgi grafik karşılaştırması
- 💡 **Interaktif Tooltip** — Grafik noktaları üzerinde o yıla ait veriler şık kutucukta görüntülenir
- 📱 **Responsive Tasarım** — Masaüstü, tablet ve mobilde CSS Grid & Flexbox ile kusursuz görüntü
- ⚡ **Performanslı Veri İşleme** — Binlerce satır JSON, sıfır gecikmeyle tarayıcıda filtrelenir
- 📡 **Sabitlenmiş CO₂ Göstergesi** — Navigasyonda `427 ppm` değeri; veriyle sürekli bağlantı

---

## 🔧 Kurulum ve Başlangıç

**Ön Koşullar**

Herhangi bir kurulum gerekmez. Proje saf HTML/CSS/JS ile yazılmıştır.
- Modern bir web tarayıcısı (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Git

**Adımlar**

```bash
# 1. Depoyu klonlayın
git clone https://github.com/enesomerkocoglu/iklimiz.git

# 2. Proje klasörüne girin
cd iklimiz

# 3. Yerel sunucu başlatın (önerilen)
npx serve .
# → Tarayıcıda http://localhost:3000 adresine gidin
```

> ⚠️ **Not:** CORS kısıtlamaları nedeniyle JSON dosyalarının düzgün yüklenmesi için yerel bir sunucu (`npx serve` veya VS Code **Live Server** eklentisi) kullanılması önerilir.

---

## 📚 Bu Projeden Öğrendiklerim

Bu proje benim için hem teknik hem de düşünsel açıdan önemli dersler içerdi:

**Teknik Kazanımlar**
- **Büyük veri setlerini yönetmek:** Binlerce satır JSON verisini tarayıcıda filtrelemek, `Array.filter()` ve `Array.reduce()` gibi ES6+ metodlarını derinlemesine anlamamı sağladı.
- **Chart.js özelleştirmesi:** Varsayılan görünümden çıkarak bir tasarım sistemine uygun grafik üretmek, kütüphane belgelerini baştan sona okuma alışkanlığı kazandırdı.
- **CSS Custom Properties ile tema yönetimi:** Onlarca bileşene tek yerden renk ve tipografi uygulamak, CSS değişkenlerinin gücünü pratikte gösterdi.
- **Asenkron veri akışı:** `fetch()` ve `async/await` ile dış API'lerden veri çekme ve hata yönetimi konusunda sağlam bir temel oluşturdu.

**Süreç Kazanımları**
- **Tasarım kararı almak:** Sadece "çalışıyor mu?" değil, "neden bu şekilde?" sorusunu sormak mühendislik olgunluğunun temeli.
- **Kullanıcıyı merkeze almak:** Karmaşık iklim verilerinin sıradan bir kullanıcıya nasıl anlatılacağını düşünmek, empati odaklı geliştirme pratiği kazandırdı.
- **Dokümantasyonun önemi:** Projeyi oluştururken aldığım kararları belgelemek, hem ileriye dönük hem de başkaları için büyük kolaylık sağlıyor.

---

## ⚡ Performans & Kalite

| Metrik | Durum | Notlar |
|---|---|---|
| İlk Yükleme | ✅ Hızlı | Harici framework yok, minimum bağımlılık |
| Responsive | ✅ Tam Uyum | Mobile-first CSS Grid & Flexbox |
| Semantic HTML | ✅ | Ekran okuyucu uyumlu, anlamlı etiketler |
| Cross-Browser | ✅ | Chrome, Firefox, Safari, Edge |
| Veri Şeffaflığı | ✅ | Tüm kaynaklar footer'da erişilebilir |

---

## 📡 Veri Kaynakları

| Kaynak | Veri Türü | Kullanılan Bölüm |
|---|---|---|
| [NASA GISS](https://data.giss.nasa.gov/) | CO₂ konsantrasyonu, Küresel sıcaklık anomalisi | Problem, Analiz |
| [World Bank Data](https://data.worldbank.org/) | Ülke bazlı CO₂ emisyonu, Enerji karması, Yatırım akışları | Analiz, Dönüşüm |

> Tüm veriler kamuya açık ve bilimsel kaynaklara dayanmaktadır.

---

## 🗺️ Gelecek Planları

- [ ] Türkiye'ye özel iklim projeksiyonu modülü
- [ ] PDF rapor indirme özelliği
- [ ] Dark / Light tema toggle
- [ ] NASA API canlı veri entegrasyonu (statik JSON yerine)
- [ ] PWA desteği — çevrimdışı erişim

---

## 📬 İletişim

<div align="center">

Proje hakkında soru sormak veya iş birliği yapmak ister misiniz?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/enesomerkocoglu)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enesomerkocoglu)

<br/>

---

<sub>© 2026 Enes Ömer Koçoğlu · İklimiz · Tüm hakları saklıdır.</sub>

</div>
