---
title: Kullanılmış izinleri toplu içe aktarma
sidebar_position: 10
---

# Geçmişte kullanılmış izinleri CSV ile kaydetme

Bu işlem yeni bir izin **talebi** göndermekten farklıdır: mevcut kullanılmış izin kayıtlarını toplu olarak sisteme aktarmak içindir. [İzin Talepleri](https://kolik.co/dashboard/leaves) sayfasında şirket yöneticisi veya süper yönetici, **İzin Talebi Oluştur** düğmesinin yanındaki ok menüsünden **Bulk Import Used Leave** seçeneğini açabilir.

1. Açılan pencerede **örnek CSV şablonunu indir** seçeneğini kullanın.
2. Her satıra bir çalışan ve izin aralığı yazın. Şablon sütunları `email`, `start_date`, `end_date`, `leave_type`, `notes` şeklindedir. Tarih/saat için şablondaki `YYYY-MM-DD HH:mm:ss` biçimini izleyin. Örnek şablonda türü ve notu boş bırakılmış bir satır vardır; tür boşsa önizleme **Yıllık İzin** gösterir. Hangi türe kaydedileceğini içe aktarmadan önce doğrulayın.
3. CSV dosyasını seçin. Sistem satırları önce **doğrular**; henüz içe aktarmaz.
4. **Tümü / Geçerli / Geçersiz** filtreleriyle satırları ve hata mesajlarını inceleyin. Önizlemede çalışanın mevcut bakiyesi, kullanılacak süre ve tahmini yeni bakiye görünür.
5. Hatalı satırlar varsa dosyayı düzeltip yeniden yükleyin. **Geçerli kayıtları içe aktar** işlemi yalnızca doğrulamadan geçen satırları gönderir; hiç geçerli satır yoksa düğme kullanılamaz.
6. Sonuç ekranında aktarılan ve başarısız/atlanan satır sayılarını kontrol edin. Ardından [çalışan izin bakiyesi ve geçmişini](./calisan-politikasi-bakiye.md) doğrulayın.

:::caution Canlı bakiye etkisi
İçe aktarmadan önce önizlemedeki **yeni bakiye** değerlerini dikkatle kontrol edin. Özellikle geçmişe ait, kısmi gün veya saatlik kayıtlar çalışanın görünen kullanımını değiştirebilir. Aynı izinleri tekrar içe aktarmamaya dikkat edin.
:::
