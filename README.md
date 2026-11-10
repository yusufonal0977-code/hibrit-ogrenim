# Hibrit Öğrenim: Dijital Araçlar

YZ Destekli Hibrit Öğrenme Döngüsü projesinin etkinlik istasyonları için tarayıcıda çalışan araçlar.

Oyun kurgusu: **Kayıp Mantık Ajansı**. Öğrenciler dedektif takımlarıdır, her istasyon bir görevdir.

| Araç | Görev | Klasör |
|---|---|---|
| Ajans Puan Tablosu (takımlar, damgalar, rozetler, ödül töreni) | tümü | `puan-tablosu/` |
| Makineye Karşı: Sınıf vs YZ | 3 | `etiket-karsilastirma/` |
| Dünya Turu: Kavram Yanılgısı Atlası ve "Hangi ülke?" | 4 | `atlas/` |
| Kelime Düellosu ve Münazara Sözlüğü | 8 | `sozluk/` |
| Çıkış Bileti (başlangıç prototipi, geri sayımlı) | 9 | `cikis-bileti/` |
| Etik Çarkı | 10 | `etik-pusula/` |

- Kurulum gerekmez: düz HTML, CSS ve JavaScript. GitHub Pages ile yayımlanır.
- Hiçbir veri sunucuya gönderilmez; girişler yalnızca kullanıcının tarayıcısında (localStorage) saklanır. Öğrenci adı girilmemelidir.
- Arayüz Türkçe ve İngilizce.
- Ortak veriler: `assets/data.js` (Kavram Yanılgısı Listesi ve çıkış bileti soruları), `assets/cases.js` (etik vaka kartları), `assets/glossary.js` (sözlük), `assets/game.js` (görevler ve rozetler).
- Atlas'a okul sonuçları eklemek için `atlas/veri.json` dosyasına şu biçimde kayıt eklenir:

```json
[{ "country": "Türkiye", "school": "TR-01", "n": 28, "k": { "K1": 9, "K2": 12, "K3": 3, "K4": 5, "K5": 7, "K6": 2, "K7": 4, "K8": 1 } }]
```

Lisans: CC BY 4.0
