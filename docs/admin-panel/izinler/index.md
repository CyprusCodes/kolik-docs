---
title: "İzinler: yönetici rehberi"
sidebar_position: 1
---

# İzinleri yönetmeye başlayın

Bu rehber, bir izin türünü tanımlamaktan çalışanın izin talebi göndermesine kadar izlenecek yolu anlatır. **Yönetici Paneli → İzinler** ekranında üç sekme bulunur: **Politikalar**, **İzin Türleri** ve **Onay Akışları**.

![İzin türünden talebe uzanan dört aşamalı kurulum akışı](/img/admin/leave-setup-flow.svg)

*Temsili akış görseli; gerçek ekran görüntüsü değildir.*

## Hangi işlemi nerede yaparım?

| İşlem | Kolik ekranı | Rehber |
| --- | --- | --- |
| “Yıllık izin”, “Saatlik izin” gibi bir ad tanımlama | [Yönetici Paneli → İzinler → İzin Türleri](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=leave-types) | [İzin türü oluşturma](./izin-turu-olusturma) |
| Türün hak edişini, ücretli/ücretsiz oluşunu ve birikimini belirleme | [Yönetici Paneli → İzinler → Politikalar](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=policies) | [Politika ve haklar](./politika-ve-haklar) |
| Politika içindeki bir türün ayrıntılı kurallarını ayarlama | Politika → **İzin Türleri** → **Kuralları düzenle** | [İzin türü kuralları](./izin-turu-kurallari) |
| Çalışma günlerini, saatleri ve tatil sayımını ayarlama | Politika → **Hesaplama Ayarları** | [Hesaplama ayarları](./politika-hesaplama-ayarlari) |
| Yeni işe alımlar için departman varsayılanını belirleme | [Organizasyon Yapısı → Departmanlar](https://app.kolik.co/dashboard/admin-panel?tab=organization-structure&subTab=departments) | [Departmanlar](../organizasyon/departmanlar) |
| Onaylayacak kişilerin sırasını belirleme | [Yönetici Paneli → İzinler → Onay Akışları](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=approval-workflows) | [Onay akışı](./onay-akisi) |
| Çalışanın politikasını atama, bakiyesini ve geçmişini inceleme | [Çalışanlar](https://app.kolik.co/dashboard/employees) → çalışan profili → **İzinler** | [Çalışan politikası, bakiye ve geçmiş](./calisan-politikasi-bakiye) |
| Çalışan adına veya kendiniz için talep gönderme | [İzin Talepleri](https://app.kolik.co/dashboard/leaves) | [İzin talebi oluşturma](./izin-talebi-olusturma) |
| Talebi görüntüleme, düzenleme, iptal etme veya onaylama | [İzin Talepleri](https://app.kolik.co/dashboard/leaves) | [Talep takibi ve onay](./talep-takibi-ve-onay) |
| Geçmişte kullanılmış izinleri CSV ile kaydetme | [İzin Talepleri](https://app.kolik.co/dashboard/leaves) → oluşturma düğmesinin yanındaki menü | [Kullanılmış izinleri toplu içe aktarma](./kullanilmis-izinleri-ice-aktarma) |

:::important İzin türü tek başına hak vermez
Yeni türü oluşturduğunuzda yalnızca katalogda bir kayıt açılır. Çalışanın talep formunda kullanılabilmesi için türü çalışanın geçerli **izin politikasına bağlayın** ve o türün hak ediş kurallarını kaydedin. Çalışanın talep ekranı organizasyondaki bütün türleri değil, kendisine uygulanan politikadaki türleri gösterir.
:::

Yönetici Paneli'ni yalnızca organizasyon yöneticisi veya süper yönetici açabilir. Talep oluşturma ekranı farklı roller için de kullanılabilir; başkası adına talep seçimi yetkiye bağlıdır.

## Kurulumdan günlük kullanıma kontrol listesi

1. İzin türünü oluşturun veya sistem türlerinden birini seçin. Saatlik talep ve zorunlu not seçeneklerini tür düzeyinde belirleyin.
2. Türü kullanılacak politikaya bağlayın; hak ediş, birikim, devir, kıdem ve gerekirse yaş istisnası kurallarını kaydedin.
3. Politikanın çalışma saatlerini, iş günlerini ve resmî tatil sayımını kontrol edin. Yeni politika taslaksa kullanıma hazır olduğunda yayınlayın.
4. Politikanın çalışana doğrudan, departman varsayılanından veya organizasyon varsayılanından uygulandığını **Çalışanlar → İzinler** ekranında doğrulayın. Tür bazlı hak ediş ve kalan bakiyeyi inceleyin.
5. Organizasyonun onay sırasını kurun; yalnızca farklı bir sıra gerekiyorsa çalışana özel onay akışı tanımlayın.
6. Bir deneme talebi oluşturup düşülecek süreyi, not zorunluluğunu ve yetkili onaylayıcının gördüğü işlemleri kontrol edin.

:::tip Yeni tür görünmüyor veya bakiye bilinmiyorsa
Yalnızca türü oluşturmak yeterli değildir. Önce türün **çalışanın geçerli politikasına** bağlandığını, kuralının ve hak edişinin kaydedildiğini, politikanın aktif olduğunu ve özel türlerin çalışanlara açık olduğunu kontrol edin. Çalışan profilindeki tür bazlı bakiye tablosu, talep formundan önce yapılacak en iyi kontroldür.
:::
