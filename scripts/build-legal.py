"""One-off: carry the old site's legal copy (MyGrowth-Website, archived) into
content/legal/<locale>.json, with the 3.0.0 changes: Sagomak name, the
Purchases section (RevenueCat and Apple), statements that RevenueCat makes
untrue, and the new date. Kept in the repo as the record of what changed.
Usage: python3 scripts/build-legal.py <path to archived messages dir>
After the first run the JSON files are the source of truth (privacy meta
descriptions were then edited there by hand); do not rerun over them."""
import json, sys, pathlib

src = pathlib.Path(sys.argv[1])
out = pathlib.Path(__file__).resolve().parent.parent / "content" / "legal"

CHANGES = {
  "en": {
    "date": "Last updated: November 20, 2026",
    "intro": "MyGrowth (\"the App\") is made by Sagomak and is committed to protecting your privacy. This policy explains how we handle your data.",
    "short": "We don't collect your habit data. Everything you track stays on your device.",
    "notSent": "No habits, logs or notes are ever transmitted to any server",
    "thirdParty": "The App contains no analytics tools, ad networks or cloud services. Its only third-party SDK is RevenueCat, used to check in-app purchases (see Purchases below).",
    "purchases": {"title": "Purchases", "body": [
      "MyGrowth Pro is sold through Apple's App Store. Apple processes every payment; we never see your name, Apple ID or payment details.",
      "To know which purchases are active, the App uses RevenueCat, Inc. (revenuecat.com), a subscription service that processes this data on our behalf. When the App starts, and when you buy or restore a purchase, RevenueCat receives a random anonymous ID created by the App, your purchase and subscription history from Apple's receipt, and basic technical details: device type, operating system, locale and currency.",
      "RevenueCat receives none of your habits, logs or notes, and no name, email or account details. This data is not used for tracking or advertising. See RevenueCat's privacy policy at revenuecat.com/privacy and Apple's at apple.com/legal/privacy."]},
    "termsItem2": "We do not collect, transmit, or have access to your habits, logs or notes",
    "iapAppend": " The App checks your purchase status through RevenueCat, as described in the <link>Privacy Policy</link>.",
    "ipFrom": "of its developer", "ipTo": "of its developer, Sagomak",
  },
  "it": {
    "date": "Ultimo aggiornamento: 20 novembre 2026",
    "intro": "MyGrowth (\"l'App\") è realizzata da Sagomak ed è impegnata a proteggere la tua privacy. Questa informativa spiega come gestiamo i tuoi dati.",
    "short": "Non raccogliamo i dati delle tue abitudini. Tutto ciò che registri resta sul tuo dispositivo.",
    "notSent": "Abitudini, registrazioni e note non vengono mai trasmesse ad alcun server",
    "thirdParty": "L'App non contiene strumenti di analisi, reti pubblicitarie o servizi cloud. L'unico SDK di terze parti è RevenueCat, usato per verificare gli acquisti in-app (vedi Acquisti più sotto).",
    "purchases": {"title": "Acquisti", "body": [
      "MyGrowth Pro è venduto tramite l'App Store di Apple. Apple gestisce ogni pagamento; non vediamo mai il tuo nome, il tuo ID Apple o i tuoi dati di pagamento.",
      "Per sapere quali acquisti sono attivi, l'App usa RevenueCat, Inc. (revenuecat.com), un servizio di abbonamenti che tratta questi dati per nostro conto. All'avvio dell'App, e quando acquisti o ripristini un acquisto, RevenueCat riceve un ID anonimo casuale creato dall'App, la cronologia di acquisti e abbonamenti dalla ricevuta Apple e alcuni dati tecnici di base: tipo di dispositivo, sistema operativo, lingua e valuta.",
      "RevenueCat non riceve nessuna delle tue abitudini, registrazioni o note, né nome, email o dati di un account. Questi dati non sono usati per tracciamento o pubblicità. Consulta l'informativa sulla privacy di RevenueCat su revenuecat.com/privacy e quella di Apple su apple.com/legal/privacy."]},
    "termsItem2": "Non raccogliamo, trasmettiamo né abbiamo accesso alle tue abitudini, registrazioni o note",
    "iapAppend": " L'App verifica lo stato dei tuoi acquisti tramite RevenueCat, come descritto nell'<link>Informativa sulla privacy</link>.",
    "ipFrom": "del suo sviluppatore", "ipTo": "del suo sviluppatore, Sagomak",
  },
  "es": {
    "date": "Última actualización: 20 de noviembre de 2026",
    "intro": "MyGrowth (\"la App\") está hecha por Sagomak y se compromete a proteger tu privacidad. Esta política explica cómo tratamos tus datos.",
    "short": "No recopilamos los datos de tus hábitos. Todo lo que registras se queda en tu dispositivo.",
    "notSent": "Tus hábitos, registros y notas nunca se transmiten a ningún servidor",
    "thirdParty": "La App no contiene herramientas de análisis, redes publicitarias ni servicios en la nube. Su único SDK de terceros es RevenueCat, que se usa para comprobar las compras dentro de la app (consulta Compras más abajo).",
    "purchases": {"title": "Compras", "body": [
      "MyGrowth Pro se vende a través del App Store de Apple. Apple procesa cada pago; nunca vemos tu nombre, tu ID de Apple ni tus datos de pago.",
      "Para saber qué compras están activas, la App usa RevenueCat, Inc. (revenuecat.com), un servicio de suscripciones que trata estos datos en nuestro nombre. Cuando se abre la App, y cuando compras o restauras una compra, RevenueCat recibe un ID anónimo aleatorio creado por la App, tu historial de compras y suscripciones del recibo de Apple y algunos datos técnicos básicos: tipo de dispositivo, sistema operativo, idioma y moneda.",
      "RevenueCat no recibe ninguno de tus hábitos, registros o notas, ni tu nombre, correo o datos de una cuenta. Estos datos no se usan para seguimiento ni publicidad. Consulta la política de privacidad de RevenueCat en revenuecat.com/privacy y la de Apple en apple.com/legal/privacy."]},
    "termsItem2": "No recopilamos, transmitimos ni tenemos acceso a tus hábitos, registros o notas",
    "iapAppend": " La App comprueba el estado de tus compras a través de RevenueCat, como se describe en la <link>Política de privacidad</link>.",
    "ipFrom": "de su desarrollador", "ipTo": "de su desarrollador, Sagomak",
  },
  "de": {
    "date": "Zuletzt aktualisiert: 20. November 2026",
    "intro": "MyGrowth (\"die App\") wird von Sagomak entwickelt und setzt sich für den Schutz deiner Privatsphäre ein. Diese Richtlinie erklärt, wie wir mit deinen Daten umgehen.",
    "short": "Wir erheben keine Daten zu deinen Gewohnheiten. Alles, was du erfasst, bleibt auf deinem Gerät.",
    "notSent": "Gewohnheiten, Einträge und Notizen werden nie an einen Server übertragen",
    "thirdParty": "Die App enthält keine Analyse-Tools, Werbenetzwerke oder Cloud-Dienste. Das einzige Drittanbieter-SDK ist RevenueCat, das In-App-Käufe prüft (siehe Käufe weiter unten).",
    "purchases": {"title": "Käufe", "body": [
      "MyGrowth Pro wird über den App Store von Apple verkauft. Apple wickelt jede Zahlung ab; wir sehen nie deinen Namen, deine Apple-ID oder deine Zahlungsdaten.",
      "Um zu wissen, welche Käufe aktiv sind, nutzt die App RevenueCat, Inc. (revenuecat.com), einen Abo-Dienst, der diese Daten in unserem Auftrag verarbeitet. Beim Start der App sowie beim Kaufen oder Wiederherstellen eines Kaufs erhält RevenueCat eine zufällige anonyme ID, die die App erstellt, deinen Kauf- und Abo-Verlauf aus dem Apple-Beleg sowie grundlegende technische Angaben: Gerätetyp, Betriebssystem, Sprache und Währung.",
      "RevenueCat erhält keine deiner Gewohnheiten, Einträge oder Notizen und weder Namen, E-Mail noch Kontodaten. Diese Daten werden nicht für Tracking oder Werbung verwendet. Siehe die Datenschutzrichtlinie von RevenueCat unter revenuecat.com/privacy und die von Apple unter apple.com/legal/privacy."]},
    "termsItem2": "Wir erheben, übertragen oder haben keinen Zugriff auf deine Gewohnheiten, Einträge oder Notizen",
    "iapAppend": " Die App prüft deinen Kaufstatus über RevenueCat, wie in der <link>Datenschutzrichtlinie</link> beschrieben.",
    "ipFrom": "seines Entwicklers", "ipTo": "seines Entwicklers, Sagomak",
  },
}

for loc, c in CHANGES.items():
    m = json.loads((src / f"{loc}.json").read_text())
    P, T = m["Privacy"], m["Terms"]
    P["lastUpdated"] = c["date"]; T["lastUpdated"] = c["date"]
    P["intro"] = c["intro"]
    P["short"]["body"] = c["short"]
    P["notCollect"]["items"][4] = c["notSent"]
    P["thirdParty"]["body"] = c["thirdParty"]
    P["purchases"] = c["purchases"]
    T["dataPrivacy"]["item2"] = c["termsItem2"]
    T["iap"]["body"] += c["iapAppend"]
    assert c["ipFrom"] in T["ip"]["body"], loc
    T["ip"]["body"] = T["ip"]["body"].replace(c["ipFrom"], c["ipTo"], 1)
    data = {
        "locale": loc,
        "meta": {"privacy": m["Metadata"]["privacy"], "terms": m["Metadata"]["terms"]},
        "chrome": {"backHome": m["Common"]["backHome"], "privacy": m["Footer"]["privacy"],
                   "terms": m["Footer"]["terms"], "support": m["Footer"]["support"]},
        "privacy": P, "terms": T,
    }
    (out / f"{loc}.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print("wrote", loc)
