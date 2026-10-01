---
title: Politika ve izin hakları
sidebar_position: 3
---

# İzin türünü politikaya bağlama

Bir izin türünü oluşturmak ile çalışana o türden izin hakkı vermek farklı işlemlerdir. [Yönetici Paneli → İzinler → Politikalar](https://kolik.co/dashboard/admin-panel?tab=leave&sub=policies) sayfasında önce mevcut politikayı açın veya **Politika Oluştur** ile yeni bir politika oluşturun.

## Mevcut politikaya tür ekleme

1. Politika satırına tıklayın.
2. Politikanın **İzin Türleri** sekmesini açın.
3. **İzin türlerini bağla** düğmesine basın, kullanmak istediğiniz türü seçin ve **Değişiklikleri Kaydet** deyin.
4. Türün satırındaki **Kuralları Düzenle** bölümüne girin.
5. **Hak Ediş** sekmesinde ücretli/ücretsiz oluşunu, limit türünü ve temel gün hakkını belirleyin. Diğer sekmelerin açıklaması için [İzin türü kuralları](./izin-turu-kurallari.md) rehberine bakın ve değişiklikleri kaydedin.
6. Yeni bir taslak politika oluşturduysanız, çalışanlara uygulanabilmesi için hazır olduğunda **Yayınla** düğmesini kullanın.

**Örnek:** “Saatlik İzin” türüne saatlik talep izni vermek, otomatik olarak 12 günlük bakiye oluşturmaz. Politika kuralında **yıllık 12 gün** hak ediş tanımlarsanız miktar oradan gelir. Saat/gün dönüşümünde kullanılan **günlük çalışma saati** ise bu politikanın [Hesaplama Ayarları](./politika-hesaplama-ayarlari.md) bölümünden gelir.

:::note Politika bağlantısını kontrol edin
Politikanın **Özet** sekmesinde o politikaya bağlı çalışanları ve atama yolunu (**Doğrudan**, **Departman varsayılanı** veya **Organizasyon varsayılanı**) görebilirsiniz. Çalışan satırı, profilindeki **İzinler** sekmesini açar. Bir çalışanın talep formunda yeni tür yoksa, önce çalışana uygulanan politikayı ve türün bu politikaya bağlanıp bağlanmadığını kontrol edin. Özel türler için **Hesaplama Ayarları → Çalışanlar yalnızca sistem varsayılan izin türlerini kullanabilir** anahtarını da kontrol edin: açıksa özel türler çalışan talep formunda gizlenir.
:::

## Yeni politika oluştururken

**Politika Oluştur** penceresinde ad ve isteğe bağlı açıklama yazın. Mevcut bir politikanın kurallarını kopyalayabilir veya sıfırdan başlayabilirsiniz. **Taslak olarak başlat** seçeneği ilk açılışta işaretlidir; kapatırsanız politika aktif oluşturulur. Taslaklar çalışan atama ekranlarında sunulmaz. Kurallar hazır olduğunda taslağı yayınlayın.

Politika ekranındaki üç sekme farklı amaçlara hizmet eder:

| Sekme | Ne için kullanılır? |
| --- | --- |
| **Özet** | Politika adını değiştirir; hangi çalışanların bu politikada olduğunu ve atama yolunu gösterir. |
| **İzin Türleri** | Katalogdaki türleri bu politikaya bağlar ve her türün kural sayfasını açar. Buradan çıkarılan tür katalogdan silinmez; geçmiş izinler geçerli kalır. |
| **Hesaplama Ayarları** | Bu politikanın çalışma günleri/saatleri, tatil sayımı ve özel tür görünürlüğünü ayarlar. |

Bir politikanın departmana yeni işe alımlar için varsayılan olarak atanması, [Departmanlar rehberinde](../organizasyon/departmanlar.md) anlatılır. Mevcut çalışanlar bu seçimle kendiliğinden taşınmaz.

## Politika listesi ve silme

Politika listesinde her kaydın bağlı tür sayısı, atanmış çalışan sayısı ve son güncelleme tarihi görünür. Satıra tıklayarak **Özet**, **İzin Türleri** ve **Hesaplama Ayarları** sekmelerine geçin. **Özet** sekmesinde adı değiştirebilir ve hangi çalışana hangi kaynaktan uygulandığını görebilirsiniz.

Listede varsayılan politika silinemez. Diğer politikalar için silme onayı istenir; politika hâlâ çalışanlara atanmışsa sunucu silmeyi reddedebilir. Önce çalışan atamalarını başka bir aktif politikaya taşıyın ve işlemin mevcut haklara etkisini değerlendirin. [Çalışan politikasını değiştirme](./calisan-politikasi-bakiye.md) adımlarına bakın.
