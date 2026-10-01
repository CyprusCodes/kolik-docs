---
title: Departmanlar ve izin varsayılanları
sidebar_position: 1
---

# Departman ayarları

[Yönetici Paneli → Organizasyon Yapısı → Departmanlar](https://kolik.co/dashboard/admin-panel?tab=organization-structure&subTab=departments) sayfasında **Departman Ekle** ile yeni kayıt açabilir, mevcut bir departmanı düzenleyebilir veya adına/**Görüntüle** düğmesine tıklayarak detayına gidebilirsiniz.

Detayda iki etkin sekme bulunur: **Kişiler** ve **İzin varsayılanları**. Kişiler sekmesi çalışan adı, pozisyonu ve işe giriş tarihini listeler. Departman bazlı **Onay akışı** sekmesi kodda mevcut olsa da şu anda gizlidir; organizasyonun [Onay Akışları](../izinler/onay-akisi.md) ekranıyla karıştırmayın.

![Departman varsayılanı ile mevcut çalışanların ayrı işlemler olduğunu gösteren şema](/img/admin/department-leave-defaults.svg)

*Temsili akış görseli; gerçek ekran görüntüsü değildir.*

## Yeni işe alımlar için izin politikası

1. Departman detayındaki **İzin varsayılanları** sekmesini açın.
2. **Yeni işe alımlar için varsayılan politika** bölümünde yayınlanmış/aktif bir politika seçin. Taslak politikalar listelenmez.
3. **Şu tarihten itibaren işe alınanlara uygulanır** tarihini belirleyip **Değişiklikleri Kaydet** deyin.

Bu değişiklik **yalnızca gelecekteki işe alımları** etkiler; departmandaki mevcut çalışanları otomatik olarak yeni politikaya taşımaz.

## Mevcut çalışanları yeniden atama

**Mevcut çalışanları yeniden ata** bölümünde kaç kişinin farklı politikada olduğu ve politikalarının dağılımı gösterilir. Taşımak istiyorsanız çalışan sayısını gösteren **… çalışanı yeniden ata** düğmesine basın, **Geçerlilik başlangıcı** tarihini seçin ve uyarıyı okuyarak işlemi onaylayın. Pencere, taşınacak aday sayısını sunucudan ayrıca kontrol eder.

:::caution Toplu işlem
Yeniden atama tek seferlik toplu işlemdir ve topluca geri alma düğmesi yoktur. Mevcut bakiyeler korunur; seçilen geçerlilik tarihinden itibaren uygulanacak politika kuralları değişir. Onaylamadan önce çalışan sayısını, hedef politikayı ve tarihi kontrol edin.
:::

Politikaya bağlı izin türü ve hak ediş kurallarını düzenlemek için [Politika ve izin hakları](../izinler/politika-ve-haklar.md) rehberine bakın.
