---
title: İzin türü oluşturma
sidebar_position: 2
---

# Yeni izin türü oluşturma

Örneğin “Mazeret İzni” veya “Saatlik İzin” gibi özel bir türü [Yönetici Paneli → İzinler → İzin Türleri](https://kolik.co/dashboard/admin-panel?tab=leave&sub=leave-types) sayfasından oluşturun.

![Yeni izin türü formundaki ad, not ve saatlik talep seçenekleri](/img/admin/leave-type-form.svg)

*Formu açıklamak için hazırlanmış temsili görsel; gerçek ekran görüntüsü değildir.*

1. **İzin Türü Ekle** düğmesine basın.
2. **İzin Türü Adı** alanına çalışanların anlayacağı bir ad yazın.
3. Gerekiyorsa **Not Gerekli** kutusunu işaretleyin. Bu durumda çalışan talep gönderirken notu boş bırakamaz.
4. **Saatlik Talebe İzin Ver** seçeneğini ihtiyacınıza göre ayarlayın.
5. **Ekle** düğmesiyle kaydedin. Oluşturulan tür listede **Özel** olarak görünür.

## “Saatlik Talebe İzin Ver” ne demek?

- **Açık:** Çalışan aynı gün içinde başlangıç ve bitiş saatini seçerek saatlik izin talep edebilir. Çok günlü talepler gün üzerinden hesaplanır.
- **Kapalı:** Talep formunda saat seçimi gösterilmez; bu tür yalnızca tam gün olarak talep edilir.

Bu seçenek **izin hakkı miktarını belirlemez**. Örneğin “12 gün/yıl” hakkını, türü politikaya bağladıktan sonra o türün **Hak Ediş** kuralında ayarlarsınız. Ayrıca saatlik talebe izin vermek, her talebin saatlik olmasını zorunlu kılmaz.

:::tip Yeni tür talep ekranında görünmüyorsa
Önce [ilgili politikaya bağlandığını](./politika-ve-haklar.md) kontrol edin. Talep formu yalnızca çalışan için geçerli politikadaki izin türlerini listeler.
:::

Ekranın üstündeki **Tümü / Varsayılan / Özel** filtreleri yalnızca tabloyu süzer. **Çalışan İzin Türü Ayarı** anahtarı ise varsayılan veya organizasyona özel türlerin kullanılmasına ilişkin tercihtir; filtreyle aynı şey değildir. Sistem varsayılan türleri bu ekrandan silinemez. Özel bir türü silmeden önce mevcut politika ve talepler üzerindeki etkisini değerlendirin.

:::note Sonradan düzenleme
Bu tabloda mevcut türün adını, **Not Gerekli** veya **Saatlik Talebe İzin Ver** seçimini değiştirecek bir düzenleme düğmesi yoktur. Bunlar oluşturma sırasında seçilir. Yanlış tanımlanmış özel bir türü silip yenisini oluşturmayı düşünmeden önce bağlı politikaları ve geçmiş talepleri kontrol edin.
:::
