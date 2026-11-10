// Pilot konu: 9. sınıf matematik, cebirsel ifadeler ve birinci dereceden denklemler.
// Kavram Yanılgısı Listesi (raporun Ek A bölümüyle aynıdır).
window.MISC = [
  { code: 'K1', tr: 'Eksi işaretini paranteze dağıtmama', en: 'Not distributing the minus sign over brackets', ex: '−(x − 3) = −x − 3' },
  { code: 'K2', tr: 'Toplamın karesini terimlerin karelerinin toplamı sanma', en: 'Squaring a sum term by term', ex: '(x + 2)² = x² + 4' },
  { code: 'K3', tr: 'Terimi karşıya geçirirken işaretini değiştirmeme', en: 'Not changing the sign when moving a term', ex: 'x + 5 = 12 → x = 12 + 5' },
  { code: 'K4', tr: 'Benzer olmayan terimleri toplama', en: 'Adding unlike terms', ex: '2x + 3 = 5x' },
  { code: 'K5', tr: 'Kesirde yalnızca bir terimi sadeleştirme', en: 'Cancelling only one term in a fraction', ex: '(x + 3) / 3 = x' },
  { code: 'K6', tr: 'İşlem önceliğine uymama', en: 'Ignoring the order of operations', ex: '2 + 3 · 4 = 20' },
  { code: 'K7', tr: 'Bölme ve çarpmada işaret kuralı hatası', en: 'Sign rule error in multiplication/division', ex: '(−12) / (−3) = −4' },
  { code: 'K8', tr: 'Katsayıya bölmek yerine katsayıyı çıkarma', en: 'Subtracting the coefficient instead of dividing', ex: '3x = 12 → x = 9' }
];

// Çıkış bileti soru bankası. Her yanlış seçenek bir kavram yanılgısına bağlıdır.
window.QUESTIONS = [
  { id: 1, q: '5 − (x − 3) = ?', opts: [['8 − x', null], ['2 − x', 'K1'], ['7x', 'K4'], ['2 + x', 'K1']] },
  { id: 2, q: '(x + 2)² = ?', opts: [['x² + 4', 'K2'], ['x² + 4x + 4', null], ['2x + 4', 'K2'], ['x² + 2x + 4', 'K2']] },
  { id: 3, q: 'x + 5 = 12 → x = ?', opts: [['17', 'K3'], ['12/5', 'K8'], ['7', null], ['−7', 'K7']] },
  { id: 4, q: '3x = 12 → x = ?', opts: [['9', 'K8'], ['4', null], ['36', 'K3'], ['15', 'K3']] },
  { id: 5, q: '2 + 3 · 4 = ?', opts: [['20', 'K6'], ['24', 'K6'], ['14', null], ['9', 'K4']] },
  { id: 6, q: '(x + 3) / 3 = ?', opts: [['x', 'K5'], ['x + 1', 'K5'], ['x/3 + 1', null], ['x + 3/3x', 'K5']] },
  { id: 7, q: '(−12) / (−3) = ?', opts: [['−4', 'K7'], ['4', null], ['−9', 'K7'], ['36', 'K6']] },
  { id: 8, q: '2x + 3x = ?', opts: [['5x²', 'K4'], ['6x', 'K4'], ['5x', null], ['5', 'K4']] },
  { id: 9, q: '2x + 3 = ?  (sadeleştir / simplify)', opts: [['5x', 'K4'], ['Sadeleşmez / cannot be simplified', null], ['5', 'K4'], ['6x', 'K4']] },
  { id: 10, q: '−2(x − 4) = ?', opts: [['−2x − 8', 'K1'], ['−2x + 8', null], ['−2x − 4', 'K1'], ['2x − 8', 'K7']] }
];

// Ek B hata kartlarının cevap anahtarı (Görev 1 ve 3).
window.ERROR_KEY = [
  { card: 1, step: 1, code: 'K1' }, { card: 2, step: 1, code: 'K2' }, { card: 3, step: 1, code: 'K3' },
  { card: 4, step: 1, code: 'K8' }, { card: 5, step: 2, code: 'K4' }, { card: 6, step: 1, code: 'K5' },
  { card: 7, step: 2, code: 'K6' }, { card: 8, step: 1, code: 'K1' }, { card: 9, step: 2, code: 'K7' },
  { card: 10, step: 2, code: 'K3' }
];
