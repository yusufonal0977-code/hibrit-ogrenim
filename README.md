# Hibrit Öğrenim: Dijital Araçlar

YZ Destekli Hibrit Öğrenme Döngüsü projesinin etkinlik istasyonları için tarayıcıda çalışan araçlar.

| Araç | Etkinlik | Klasör |
|---|---|---|
| Çıkış Bileti (başlangıç prototipi) | 9 | `cikis-bileti/` |
| İnsan mı, Makine mi? | 3 | `etiket-karsilastirma/` |
| Kavram Yanılgısı Atlası | 4 | `atlas/` |
| Etik Pusula | 10 | `etik-pusula/` |
| Münazara Sözlüğü | 8 | `sozluk/` |

- Kurulum gerekmez: düz HTML, CSS ve JavaScript. GitHub Pages ile yayımlanır.
- Hiçbir veri sunucuya gönderilmez; girişler yalnızca kullanıcının tarayıcısında (localStorage) saklanır. Öğrenci adı girilmemelidir.
- Arayüz Türkçe ve İngilizce.
- Ortak veriler: `assets/data.js` (Kavram Yanılgısı Listesi ve çıkış bileti soruları), `assets/cases.js` (etik vaka kartları), `assets/glossary.js` (sözlük).
- Atlas'a okul sonuçları eklemek için `atlas/veri.json` dosyasına şu biçimde kayıt eklenir:

```json
[{ "country": "Türkiye", "school": "TR-01", "n": 28, "k": { "K1": 9, "K2": 12, "K3": 3, "K4": 5, "K5": 7, "K6": 2, "K7": 4, "K8": 1 } }]
```

Lisans: CC BY 4.0
