---
title: Uygulama kataloğu ve erişim
sidebar_position: 2
---

# Uygulama kataloğu ve erişim

**[Uygulamalar sayfasını](https://kolik.co/dashboard/apps)** açın. Kartlarda uygulamanın adı, açıklaması, kategorisi ve varsa **Beta** etiketi bulunur. Sıralama katalogdaki görüntüleme sırasına göredir. Bu sayfaya şirket yöneticisi veya süper yönetici erişebilir.

## Mevcut uygulamayı açma veya kapatma

1. İlgili uygulama kartını bulun.
2. Karttaki anahtarı **açık** konuma getirerek uygulamayı kuruluşta etkinleştirin; **kapalı** konuma getirerek devre dışı bırakın.
3. İşlem tamamlandığında uygulama listesi yenilenir. Etkin modül için paneldeki uygulama değiştiriciyi veya kuruluşunuza özel **Uygulamalar** sol menüsünü kullanın.

Anahtar yalnızca kuruluşun erişimini değiştirir. Örneğin yeni bir envanter kaydı veya yeni bir araç oluşturmaz. Erişim değişikliği diğer kullanıcıların modül menüsüne de yansır; daha önce açılmış sayfalarda yenileme gerekebilir.

## Yeni katalog uygulaması oluşturma

Bu bölüm yalnızca **süper yönetici** içindir. Sağ üstteki **Yeni uygulama** düğmesini açın; **slug**, **ad**, **açıklama**, **ikon anahtarı**, **kategori**, **kenar çubuğu rotası**, **görüntüleme sırası** ve **Beta** alanlarını doldurup kaydedin. `sidebarRoute` mevcut bir FE sayfasına işaret etmelidir. Kayıt oluşturulduktan sonra kuruluş için ayrıca etkinleştirilmesi gerekir.

:::warning Önemli ayrım
Yeni katalog kaydı, yeni bir işlevsel modül geliştirmekle aynı şey değildir. Slug/rota/ikon alanlarını değiştirmek mevcut gezinmeyi etkileyebilir. Bunları değiştirmeden önce ilgili FE ekranının ve modül menüsünün bulunduğunu doğrulayın.
:::

## Katalog uygulamasını düzenleme veya silme

Süper yönetici karttaki **düzenle** simgesinden aynı formu açıp alanları güncelleyebilir. **Sil** simgesi onay penceresi açar; uygulama kaydını kaldırma işlemini yalnızca gerçekten kullanılmayan bir kayıt için yapın. Şirket yöneticisi bu simgeleri görmez; mevcut uygulamayı yalnızca açıp kapatabilir.

## Modül nerede görünür?

Etkin ve rotası tanımlı modüller uygulama değiştiricide gösterilir; **Ana uygulama** kutusu ayrıca bulunur. Bazı özel kuruluşlarda değiştirici yerine sol menüde uygulama bağlantıları görünür. Kullanıcı rolüne göre ek filtreler vardır: örneğin **Performans** ve **Zaman çizelgeleri** yönetici olmayanlara uygulama değiştiricide gösterilmez. Modül içindeki ekranlar ayrıca kendi yetki denetimlerini yapabilir.
