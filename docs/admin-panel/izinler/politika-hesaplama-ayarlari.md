---
title: Politika hesaplama ayarları
sidebar_position: 5
---

# Çalışma takvimi ve izin hesabı

[İzin Politikaları](https://kolik.co/dashboard/admin-panel?tab=leave&sub=policies) içinden ilgili politikayı açıp **Hesaplama Ayarları** sekmesine geçin. Bu ayarlar **seçilen politikaya özeldir**; başka bir politikanın gün/saat düzenini otomatik değiştirmez.

## Çalışma programı

1. Çalışma günlerini işaretleyin. Her seçili günün başlangıç ve bitiş saatini belirleyin.
2. Gün satırındaki **Saat** alanını girin. Bu, o günün tam günlük izin talebinde bakiyeden kaç saat düşeceğini belirler; başlangıç/bitiş saatlerinin farkıyla aynı olmak zorunda değildir.
3. **Çalışma günü başına saat** değerini belirleyin. Bu ayrı değer, türlerin gün cinsinden hak edişlerini saat toplamına çevirir. Örneğin bu değer 8 ise 12 günlük hak, 96 saat olarak hesaplanır.
4. Hafta sonu gibi günlerin talepten düşülmesini istemiyorsanız **Çalışma dışı günleri hariç tut** seçeneğini açın.
5. **Değişiklikleri Kaydet** düğmesine basın.

## Resmî tatiller ve özel izin türleri

- **Resmi tatilleri izin sayımından hariç tut** açıksa seçilen tatiller bakiyeden düşülmez. Tatil seçimi boş bırakılırsa bütün tanımlı resmî tatiller hariç tutulur.
- **Çalışanlar yalnızca sistem varsayılan izin türlerini kullanabilir** açıksa, politikaya bağlanmış özel türler çalışanların talep formunda gizlenir; İK bu türlerde çalışan adına kayıt yapabilir. Yeni bir özel tür çalışan ekranında görünmüyorsa bu seçeneği kontrol edin.

:::caution Mevcut bakiyelere etkisi
Çalışma takvimini değiştirmek mevcut izin bakiyelerini kendiliğinden yeniden hesaplamayabilir; arayüz gerekirse politika için yeniden hesaplama önerisi gösterir. **Çalışma günü başına saat** değiştiğinde ise mevcut hak edişlerin saat bakiyesi yeni orana göre güncellenebilir ve kaç kaydın etkilendiği bildirilir. Kaydetmeden önce etkiyi gözden geçirin.
:::
