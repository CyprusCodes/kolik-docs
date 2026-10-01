---
title: İzin talebi oluşturma
sidebar_position: 8
---

# İzin talebi oluşturma

[İzin Talepleri](https://app.kolik.co/dashboard/leaves) sayfasındaki **İzin Talebi Oluştur** düğmesini kullanın. İsterseniz [talep penceresini doğrudan açan bağlantıyı](https://app.kolik.co/dashboard/leaves?create=true) da kullanabilirsiniz.

![İzin talebi formundaki çalışan, izin türü, bakiye ve tarih alanları](/img/izin-talebi-olustur.png)

1. Yetkiniz varsa talebin yapılacağı **çalışanı** seçin. Normal kullanıcı kendi adına talep oluşturur.
2. **İzin Türü** seçin. Bu liste, seçili çalışan için geçerli izin politikasından gelir.
3. Gösterilen **kullanılabilir bakiyeyi** kontrol edin.
4. **Başlangıç** ve **Bitiş** tarihlerini seçin. Tür saatlik talebe izin veriyorsa aynı gün için saatleri de seçebilirsiniz; izin vermiyorsa saat alanları gizlenir ve yalnızca tam gün talep edilir.
5. Gerekliyse **Not** girin. “Not Gerekli” seçili türlerde not zorunludur.
6. **Düşülecek** süreyi kontrol edip **Gönder** düğmesine basın. Açılan onay penceresinde süreyi yeniden okuyup talebi onaylayın.

:::info Saat ve gün hesabı
“Saatlik Talebe İzin Ver” açık olan türde **aynı gün** için yapılan talep saatlik hesaplanır; birden fazla güne yayılan talep gün bazlıdır. Gösterilen süre ve bakiye, organizasyonun günlük çalışma saati ayarına göre gün/saat biçiminde sunulur.
:::

## Sık karşılaşılan durumlar

| Ekranda görülen durum | Önce neyi kontrol etmeliyim? |
| --- | --- |
| Yeni tür listede yok | Türün çalışanın geçerli politikasına bağlandığını, politikanın aktif olduğunu ve çalışana uygulandığını kontrol edin. |
| **Bakiye bilinmiyor** | Bakiye verisi yüklenememiş veya seçili politika türüne ait bakiye kaydı bulunamamış olabilir. Sayfayı yenileyin; sürerse yöneticiden politika/hak ediş ve API yanıtını kontrol etmesini isteyin. |
| **Kalan bakiyeyi aşıyor** | Kullanılabilir hak, birikmiş miktar ve varsa eksi bakiye kuralını kontrol edin. Sistem son kararı sunucuda doğrular. |
| Saat seçimi görünmüyor | İzin türündeki **Saatlik Talebe İzin Ver** ayarı kapalıdır; türü kontrol edin. |

Talep oluşturulduktan sonra kayıt [İzin Talepleri](https://app.kolik.co/dashboard/leaves) ekranından izlenebilir.
