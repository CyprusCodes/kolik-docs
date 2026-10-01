---
title: İzinler
sidebar_position: 4
---

# İzinler

Sol menüden **[İzinler](https://app.kolik.co/dashboard/leaves)** sayfasını açın. **Tüm İzinler** ve **İzin Taleplerim** sekmeleri bulunur. Tablo görünümünde kayıtları inceleyin; şirket yöneticisi ve İK gibi yetkili kullanıcılar **Tüm İzinler** bölümünü takvim görünümüne de alabilir.

## Yeni izin talebi

**İzin Talebi Oluştur**'u seçin; yetkiniz varsa çalışanı, izin türünü, tarihleri ve gerekiyorsa saatleri seçin. Form, çalışanın politikasını, kullanılabilir bakiyesini ve düşülecek süreyi gösterir. Tür **yalnızca tam gün** izin veriyorsa saat seçimi açılmaz. Not zorunluysa not girin. **Talep Oluştur** sonrası onay penceresindeki süreyi kontrol edip gönderin. Ayrıntılı adımlar [izin talebi rehberinde](../admin-panel/izinler/izin-talebi-olusturma) bulunur.

Şirket yöneticisinde düğmenin yanındaki menüden **kullanılmış izinleri toplu içe aktarma** işlemi de açılabilir; bu, yeni izin talebi göndermekten farklıdır.

Yöneticiyseniz bu işlemin CSV şablonu, önizleme ve bakiye etkisi için [toplu içe aktarma rehberine](../admin-panel/izinler/kullanilmis-izinleri-ice-aktarma) bakın.

## Talebi inceleme ve sonuçlandırma

Bir satırın **Görüntüle** işlemi tarih, tür, not ve varsa onay adımlarını açar. Bekleyen talep, izin ve iş akışı kurallarına göre düzenlenebilir veya iptal edilebilir. Yetkili onaylayıcı **Onayla/Reddet** işlemlerini kullanır; her kullanıcı bütün talepleri onaylayamaz. Görünen temel durumlar **Beklemede**, **Onaylandı**, **Reddedildi** ve **İptal Edildi**'dir.

Bekleyen kendi talebinizi **Düzenle** ile değiştirip ayrıntı penceresinden iptal edebilirsiniz. Yetkili yöneticilerin inceleme, gerekçeli istisna ve başlamamış onayı geri alma adımları için [talep takibi ve onay rehberine](../admin-panel/izinler/talep-takibi-ve-onay) bakın. Çalışanın tür bazlı hakkı ve izin geçmişi [çalışan profili → İzinler](../admin-panel/izinler/calisan-politikasi-bakiye) bölümünde bulunur.

:::warning Bakiye veya gönderim hatası
Talep türü seçildiğinde bakiye **Bilinmiyor** görünürse çalışanın politikasında o izin türünün tanımlı ve hak edişinin oluşmuş olduğunu kontrol edin. Yetersiz bakiye, zorunlu not veya geçersiz tarih/saat formda ya da gönderim sırasında hata gösterebilir. İş akışlı talepleri durumu elle değiştirerek değil, onay akışındaki ilgili düğmeyle sonuçlandırın.
:::
