---
title: Destek talepleri
sidebar_position: 5
---

# Destek talepleri

Sol menüden **[Destek Talepleri](https://kolik.co/dashboard/support-tickets)** sayfasını açın. Kuruluşu seçilmiş kullanıcı **Yeni Talep** oluşturabilir. Çalışan kendi taleplerini, şirket yöneticisi ve süper yönetici kuruluş taleplerinin tamamını görüp yanıtlayabilir. Listede konu, açıklama, kategori, durum, oluşturulma/güncellenme tarihi; yönetici görünümünde ayrıca gönderen ve atanan kişi bulunur.

## Yeni talep oluşturma

1. **Yeni Talep** düğmesine tıklayın.
2. **Konu**, **Kategori** ve **Açıklama** alanlarını doldurun. Kategori listesinde yalnızca etkin kategoriler yer alır.
3. Gerekirse dosya ekleyin; yükleme ilerlemesini izleyin. Yanlış dosyayı göndermeden önce kaldırabilirsiniz.
4. Kaydedin. Yeni talep **Açık** durumunda oluşturulur ve liste yenilenir.

Konu, açıklama veya kategori boşsa form hata gösterir ve gönderim yapılamaz. Kategori listesi boşsa bir yöneticinin etkin kategori tanımlaması gerekir. Kaydetme/yükleme başarısız olursa pencere açık kalır; gösterilen hatayı kontrol edip yeniden deneyin.

## Talebi inceleme, yazışma ve düzenleme

Listede **göz** simgesinden talebi açın. Ayrıntıda açıklama, dosyalar ve yazışma alanı bulunur. Gönderici kendi talebini **düzenleyebilir** ve **silme onayı** ile kaldırabilir. Yönetici ayrıntıdan yanıt yazabilir ve durum güncelleyebilir. Yeni gelen kayıt listede **Yeni** işaretiyle vurgulanabilir.

| Durum | Anlamı |
| --- | --- |
| Açık (`open`) | Talep yeni açıldı. |
| Beklemede (`pending`) | İşlem/yanıt bekliyor. |
| Onay Bekliyor (`pending_approval`) | Onay adımı gerekiyor. |
| İşlemde (`in_progress`) | Üzerinde çalışılıyor. |
| İncelemede (`in_review`) | Sonuç gözden geçiriliyor. |
| Çözüldü (`resolved`) | Çözüm kaydedildi. |
| Reddedildi (`rejected`) | Talep kabul edilmedi. |
| Kapatıldı (`closed`) | Talep kapatıldı. |

Durum seçenekleri yönetici ayrıntı panelindeki **Durum Güncelle** alanından seçilir; bir durumun seçilmesi tek başına mesaj göndermez. Talep silinince normal listeden çıkar. Liste yüklenemiyorsa sayfa hata uyarısı gösterir; kuruluş ve bağlantıyı kontrol edip sayfayı yenileyin.

## Kategori ve özel onay

Şirket yöneticisi veya süper yönetici **Kategorileri Yönet** penceresinden kategori adı, açıklaması ve **aktif/pasif** durumunu düzenler; yeni kategori ekler veya özel kategoriyi siler. Sabit sistem kategorilerinin düzenle/sil işlemi kapalı olabilir.

**Platform Hataları** sekmesi yalnızca belirli kuruluşun şirket yöneticisine gösterilir. Bu kategoride **Onay Bekliyor** durumundaki kayıt için onayla/reddet simgeleri görünür. Dolayısıyla bu sekme veya simgelerin diğer kuruluşlarda bulunmaması normaldir.

:::note Dil notu
Liste durum etiketleri FE kodunda İngilizce sabit metinlerden üretiliyor; Türkçe arayüzde bile `Open` veya `In Progress` görürseniz yukarıdaki Türkçe karşılıklarını esas alın. Bu, talebin kaydedilmediği anlamına gelmez.
:::
