---
title: Türkçe Terim Sözlüğü ve Sık Sorulan Sorular
audience: assistant
topics: [turkce, turkish, sss, faq, terminoloji, kvkk]
last_reviewed: 2026-08-03
---

# Kullanım notu

Ziyaretçi Türkçe yazdığında Türkçe cevap ver. Ürün terimlerini **İngilizce
bırak** (guardrail, policy, PRE_LLM, POST_LLM, evidence pack), yanına parantez
içinde Türkçe karşılığını ver. Bunun nedeni ürün arayüzünün ve dokümantasyonun
İngilizce olması — terimleri çevirirsen müşteri ürüne baktığında karşılığını
bulamaz.

Bu dosyadaki tüm bilgiler diğer dosyalardaki İngilizce içerikle **aynı**
kaynağa dayanır. Burada yeni bir iddia yok; sadece dil karşılığı var.

# Terim karşılıkları

| İngilizce | Türkçe karşılık / açıklama |
|---|---|
| Guardrail | Guardrail — çalışma zamanı koruma paketi |
| Policy | Policy — tekil kural |
| Policy Library | Hazır politika kütüphanesi |
| PRE_LLM | Model çağrısından **önce** yapılan denetim |
| POST_LLM | Model yanıtı kullanıcıya dönmeden **önce** yapılan denetim |
| MONITOR mode | İzleme modu — kayıt tutar, engellemez |
| ENFORCE mode | Uygulama modu — engeller veya içeriği değiştirir |
| Heuristic policy | Örüntü tabanlı politika (desen eşleşmesi) |
| Context-aware policy | Bağlam duyarlı politika (model muhakemesi gerektirir) |
| Decision | Karar — action, severity, gerekçe ve tetikleyen policy |
| Action: ALLOW / WARN / REDACT / BLOCK / FLAG | İzin ver / uyar / maskele / engelle / işaretle |
| Audit ledger | Denetim defteri — hash zincirli, değişiklik belli eden kayıt |
| Evidence pack | Kanıt paketi — denetim için dışa aktarılabilir dosya |
| Evaluation run | Değerlendirme koşusu — veri kümesiyle ölçüm |
| Step-up approval | Yükseltilmiş onay — insan onayı gerektiren adım |
| Organization / Environment / Project | Organizasyon / Ortam / Proje hiyerarşisi |
| API key | Proje kapsamlı çalışma zamanı anahtarı |
| Sovereign deployment | Egemen kurulum — on-prem, özel bulut, air-gapped |
| Shadow AI | Gölge AI — onaysız/kayıt dışı yapay zeka kullanımı |
| Prompt injection | Prompt enjeksiyonu — sistem talimatını ezmeye çalışan girdi |
| Excessive agency | Aşırı yetki — ajanın işin gerektirdiğinden fazla yetkiye sahip olması |
| Tamper-evident | Değiştirildiği anlaşılabilir (kurcalama belli eden) |

# UMAI nedir? (tek paragraf)

UMAI, kurumsal yapay zeka yönetişimi ve çalışma zamanı denetim platformudur.
Kurum, guardrail'leri bir kez tanımlar; bunlar versiyonlanmış çalışma zamanı
paketleri olarak yayımlanır ve uygulamalarda, AI ajanlarında ve tarayıcı
üzerinden yapılan yapay zeka kullanımında tutarlı şekilde uygulanır. Her karar
hash zincirli bir denetim defterine yazılır ve uyum kanıtı olarak dışa
aktarılabilir. Platformun tamamı müşterinin kendi altyapısında çalışabilir.

# Sık sorulan sorular

**UMAI tam olarak ne yapıyor?**
Model çağrısından önce (PRE_LLM) ve model yanıtı dönmeden önce (POST_LLM)
istek yolunda devreye girer; politikaları değerlendirir ve bir karar döner:
izin ver, uyar, maskele, engelle veya insan onayına yükselt. Aynı anda her
kararın denetlenebilir kaydını üretir.

**Verilerimiz yurt dışına çıkar mı?**
Egemen (sovereign) kurulumda çıkmaz. Control Center, Service ve Engine
müşterinin kendi altyapısında container olarak çalışır; veritabanı, Redis,
dizin (LDAP/AD) ve model uç noktası da müşterinin kendi sistemleridir.
On-prem, özel bulut, müşteri VPC'si, on-prem Kubernetes ve air-gapped kurulum
desteklenir. Sözleşmesel veri işleme dili için ekiple görüşmek gerekir.

**KVKK kapsamında ne sunuyorsunuz?**
KVKK paketinde **30 hazır politika** var. Kapsam: Türk kimlik verileri (TCKN,
IBAN, telefon, e-posta, adres) doğrulama ve maskeleme ile; Madde 6 özel nitelikli
kişisel verilerin tamamı; yurt dışına aktarım, standart sözleşme ve
"eğitimde kullanılmasın" yönlendirme kontrolleri; 72 saatlik ihlal bildirimi,
saklama/imha ve denetim izi kanıtı. Dayanak: 6698 sayılı Kanun ve 7499 sayılı
Kanun ile gelen değişiklikler; Kurul'un Yapay Zeka Tavsiyeleri (2025), Üretken
Yapay Zeka Rehberi (Kasım 2025), işyerinde üretken yapay zeka duyurusu (Mart
2026) ve Agentic AI dokümanı (2026).

**Bizi KVKK'ya / EU AI Act'e uyumlu yapar mı?**
Hiçbir ürün tek başına uyumluluk sağlamaz. UMAI kontrolü uygular, kontrolün
hangi maddeye karşılık geldiğini gösterir ve çalıştığına dair kanıtı üretir.
Uyumluluk değerlendirmesini kurumun hukuk ve uyum birimi yapar.

**Çalışanların ChatGPT kullanımını nasıl kontrol ediyorsunuz?**
UMAI Browser Extension ile. Yönetilen tarayıcı politikasıyla (managed Chrome
veya Edge) kurulur; içerik tarayıcıdan çıkmadan **yerel olarak** değerlendirilir
ve site bazında izin ver / uyar / engelle / maskele / gerekçe iste aksiyonları
uygulanır. Olaylar aynı UMAI denetim düzlemine akar. Bu gizli bir izleme aracı
değildir — IT tarafından açıkça yönetilen kurumsal bir kontroldür.

**Gecikme (latency) ne kadar?**
Yayımlanmış bir milisaniye taahhüdü yok. Örüntü tabanlı (heuristic) politikalar
hızlıdır; bağlam duyarlı politikalar bir model uç noktasına çağrı yaptığı için
daha maliyetlidir. Gerçek bütçe politika karışımına bağlı — ölçüm için ekiple
görüşmek gerekir.

**Fiyatlandırma nasıl?**
Fiyatlandırma yayımlanmıyor. `/contact` üzerinden veya
contact@umaisolutions.com adresinden ekibe ulaşabilirsiniz; bir iş günü içinde
dönüş yapılıyor.

**Mevcut DLP'mizin yerine mi geçiyor?**
Hayır. Klasik DLP ve çevre güvenliği araçları konuşma temelli yapay zeka
akışları, prompt semantiği, model çıktısı ve ajan araç kullanımı için
tasarlanmadı. UMAI bunları tamamlar, yerine geçmez.

**Hangi model sağlayıcılarıyla çalışıyor?**
UMAI modelin önünde durur, modelin yerine geçmez. OpenAI, Azure OpenAI,
Anthropic ve Vertex AI entegrasyon hedefleri olarak belirtiliyor. Bağlam duyarlı
politika değerlendirmesi için **OpenAI uyumlu** bir model uç noktası gerekir; bu
müşterinin kendi iç uç noktası olabilir.

**Türkçe saldırıları yakalıyor mu?**
Yerelleştirilmiş değerlendirme UMAI'nin öne çıkardığı farklardan biri:
PRE_LLM ve POST_LLM denetimi ana dil bağlamında yapılır, İngilizce tespitin
çevirisi olarak değil. Türkçe bir prompt enjeksiyonu, İngilizce bir saldırının
çevirisi değildir.

**Önce izleyip sonra engelleyebilir miyiz?**
Evet, önerilen yol bu. Guardrail'i `MONITOR` modunda başlatın, kanıt toplayın,
yanlış pozitifleri değerlendirme (evaluation) koşularıyla ayarlayın, sonra en
yüksek güvenli politikaları `ENFORCE` moduna alın. Guardrail'ler versiyonlu
olduğu için geri alınabilir.

**Politikayı değiştirdim ama davranış değişmedi?**
Politikayı düzenlemek tek başına çalışma zamanını değiştirmez. Yeni bir
**guardrail versiyonu** oluşturulup **yayımlanması** gerekir. En sık karşılaşılan
durum budur.

**Nereden başlamalıyız?**
Üç giriş noktası var, hepsi `/contact` üzerinden: (1) mevcut AI
entegrasyonlarınızın değerlendirilmesi, (2) bir uzmanla mimari ve kontrol
planlaması, (3) kendi trafiğiniz üzerinde günler içinde çalışan bir PoC.

# Türkçe cevaplarda dikkat

- Müşteri adı verme, doğrulama veya ima etme.
- Fiyat, tarih, sertifika, SLA veya performans rakamı verme.
- Hukuki görüş verme; "hukuk ve uyum biriminiz karar verir" ile bitir.
- Bilmediğin şeyi uydurma: *"Bu bilgi bende yok; ekip doğrudan yanıtlayabilir —
  contact@umaisolutions.com."*
