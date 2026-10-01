---
title: İzin türü kuralları
sidebar_position: 4
---

# Politikadaki izin türünün kurallarını düzenleme

[İzin Politikaları](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=policies) sayfasında politikayı açın. **İzin Türleri** sekmesinde ilgili türün satırına veya **Kuralları düzenle** düğmesine tıklayın. Örnek `/leave-policies/1/types/8` adresi, 1 numaralı politikanın 8 numaralı **bağlı tür kuralı** sayfasıdır; bu `8`, katalogdaki izin türünün kimliği olmak zorunda değildir. Bu numaralar kuruluşa göre değiştiği için kendi politikanızın sayfasından ilerleyin.

Her türün kuralları, bağlı olduğu politika içinde ayrı tutulur. Katalogda tür oluştururken işaretlenen **Saatlik Talebe İzin Ver** ve **Not Gerekli** seçenekleri ise bu sayfadaki hak ediş ayarları değildir.

![Politika, bağlı izin türü ve kural sekmeleri arasındaki ilişki](/img/admin/leave-policy-rules.svg)

*Temsili akış görseli; gerçek ekran görüntüsü değildir.*

## Kural sekmeleri

| Sekme | Burada ne ayarlanır? |
| --- | --- |
| **Genel** | Katalogdan gelen tür adını gösterir; görüntü rengi, açıklama, uygulanacak cinsiyet ve dahili kod burada ayarlanır. |
| **Hak Ediş** | Ücretli/ücretsiz, hak sınırı, temel gün hakkı, tek talep üst sınırı, eksi bakiye ve isteğe bağlı yaş istisnası. |
| **Birikim** | Yıllık hakkın peşin, günlük veya aylık verilmesi; izin yılı başlangıcı ve gerekiyorsa bekleme süresi. |
| **Devir** | Kullanılmayan günlerin yıl sonunda sıfırlanması, devredilmesi, sınırlandırılması veya ödenmesi. |
| **Kıdem** | Belirli hizmet yıllarından sonra eklenecek gün kademeleri. |

**Talep Kuralları** sekmesinin kodu bulunuyor ancak şu anda özellik bayrağıyla gizli; aktif ekranda görünmez. Aşağıdaki adımlar, erişilebilir beş sekmeyi anlatır.

## Genel

- **Tür adı** katalogdan gelir ve burada değiştirilemez. [İzin Türleri](./izin-turu-olusturma) ekranında da mevcut tür için ad düzenleme işlemi bulunmaz; yeni ad gerekiyorsa mevcut politika bağlantılarını ve geçmiş talepleri dikkate alarak yeni tür oluşturulmasını değerlendirin.
- **Görüntü rengi** için hazır renklerden birini veya **Renk yok** seçeneğini kullanın. **Açıklama** ve **Dahili kod** isteğe bağlı alanlardır; dahili kod türü başka sistemlerle eşleştirmek içindir.
- **Uygulanacak cinsiyet** alanında **Herkes**, **Yalnızca erkek** veya **Yalnızca kadın** seçilir. Arayüz açıklamasına göre kayıtlı cinsiyeti olmayan çalışanlar türü yine görür.

## Hak Ediş

**Ödeme → Ücretli izin** anahtarı, bu türde kullanılan günlerin ücretli olup olmadığını belirler.

### Limit türü ve temel hak

| Seçenek | Anlamı | Temel hak alanı |
| --- | --- | --- |
| *Limited per year* | Yıllık sınırlı hak. | **Yıllık temel gün** |
| *Limited per month* | Her takvim ayında verilen, ay başında yenilenen hak. Kullanılmayan günler devredilmez. | **Aylık temel gün sayısı** |
| *Limited per event* | Her olay gerçekleştiğinde tanımlanan hak. | **Olay başına gün** |
| *Unlimited* | Bakiye sınırı ve bakiye takibi yoktur. | Gün girişi yapılmaz. |

Örneğin **Limited per year + Yıllık temel gün: 12**, yıllık temel hakkı 12 gün olarak tanımlar. Türün “saatlik” olması tek başına 12 gün veya başka bir bakiye yaratmaz. **Günlük saat** alanı salt okunurdur; bu politikanın [Hesaplama Ayarları](./politika-hesaplama-ayarlari) sekmesinden gelir ve ekrandaki toplam saat önizlemesinde kullanılır.

### Diğer hak ediş sınırları

- **Maksimum İzin Süresi**: Tek bir talepte kullanılabilecek azami gün sınırını **Sınırlı** ile açıp **Talep başına gün** alanına yazın. **Sınırsız** seçimi, bu ek talep sınırını kaldırır; hak bakiyesinin kendisini sınırsız yapmaz.
- **Negatif bakiye**: Hak edilmemiş iznin istenip istenemeyeceğini **Not allowed / Unlimited / Limited to a maximum** seçenekleriyle belirleyin. Sonuncusunda **Azami negatif gün** girilir. *Unlimited* limit türünde bakiye takip edilmediği için negatif bakiye ayarı uygulanmaz.
- **Yaş istisnası**: İsterseniz **18 yaş altı** ve **50 yaş ve üzeri** için ayrı gün sayıları girin. Bu sayı ilgili yaş grubunun temel hakkının **yerine geçer**; kıdem ek günleri daha sonra bunun üzerine eklenir. Temel günden daha düşük bir sayı girerseniz o grubun hakkı azalır.

## Birikim

Bu sekme yalnızca **yıllık sınırlı** haklarda çalışır. **Birikim sıklığı** için günlük, aylık veya yıllık/peşin (*Yearly*) seçeneklerinden birini belirleyin. Yıllık/peşin seçiminde tüm hak başlangıçta verilir. **Monthly** seçiminde ayrıca **Birikim günü** (ayın 1–28'i veya son günü) ve **Yuvarlama** (*No rounding*, yarım gün, tam gün) seçilir.

**İzin yılı başlangıcı** takvim yılı (*Calendar year*) veya çalışanın işe giriş yıl dönümü (*Employment anniversary*) olabilir. Günlük/aylık birikimde **İzindeyken birikime devam et** anahtarı bulunur. **Yeni işe alımlar için bekleme süresi** açılırsa **Bekleme süresi (ay)** girilir; kapalıysa çalışan izni ilk günden kullanabilir.

## Devir

Yıllık sınırlı hakkın izin yılı sonunda kalan günlerine ne olacağını belirleyin:

| Seçenek | Etki / ek alan |
| --- | --- |
| *Reset to zero* | Kullanılmayan günler sıfırlanır. |
| *Carry over everything* | Kalan günlerin tamamı devredilir. |
| *Carry over up to a maximum* | En çok **Devredilen azami gün** kadar devir yapılır. |
| *Carry over up to a maximum, with an expiry date* | Azami gün ve **Sona erme tarihi** girilir. |
| *Cap the standing balance* | Toplam birikmiş bakiye **Azami birikmiş bakiye** değerini aşamaz; yalnızca yıl sonunda değil, sürekli sınır uygulanır. |
| *Pay out unused days, then reset* | Kullanılmayan günler ödenip bakiye sıfırlanacak seçenek. |

Alttaki **Devir karar tarihi**, bakiyenin değerlendirileceği gün/ayı belirler. Yıllık sınırlı olmayan türlerde devir uygulanmaz.

## Kıdem

**Hizmet yılına göre ek günler** seçeneğini açıp **Kademe ekle** düğmesine basın. Her satırda **Şu hizmet yılından sonra** ve **Ek gün** değerlerini girin. Ekranda temel hak ve kademelerin oluşturduğu örnek toplam gösterilir. Olay başına haklarda da kıdem kullanılabilir; sınırsız türlerde kullanılamaz.

## Kaydetme ve dikkat edilmesi gerekenler

Üstteki **İzin türünü kaydet** düğmesiyle değişiklikleri kaydedin. Sekmelerde hata işareti görünürse o sekmedeki alanı düzeltin; sayfadan kaydetmeden ayrılırsanız değişiklik uyarısı gösterilir.

:::note Aylık limitte sekmeler
**Limited per month** seçilirse **Birikim** ve **Devir** sekmeleri devre dışı kalır; aylık hak her ay yenilenir. Olay başına veya sınırsız türlerde bu sekmeler görünür olsa bile ilgili ayarlar uygulanmaz.
:::
