# Decap CMS - Anleitung

## 🎉 Du kannst jetzt deine Website im Browser bearbeiten!

### Lokal testen (auf deinem Computer):

1. **Server starten:**
   ```bash
   npm run dev
   ```

2. **CMS öffnen:**
   - Öffne: `http://localhost:4321/admin`
   - Das CMS läuft im "Local Backend" Modus
   - Keine Anmeldung nötig!

3. **Inhalte bearbeiten:**
   - **Homepage**: Titel, Texte, Hero-Bild ändern
   - **Über uns**: Gründer-Info, Texte anpassen
   - **Kontakt**: Email, Social Media Links
   - **Einstellungen**: Logo, Calendly-Link, Launch-Datum
   - **Seiten**: Neue Seiten erstellen (z.B. FAQ, Preise)

4. **Änderungen speichern:**
   - Klicke auf "Publish" im CMS
   - Änderungen werden sofort gespeichert
   - Git Commit wird automatisch erstellt

---

## 🚀 Auf Vercel (Live Website):

**Wichtig:** Für die Live-Website brauchst du noch **GitHub OAuth** oder **Netlify Identity**.

### Option 1: GitHub OAuth (empfohlen für Vercel)

1. **GitHub OAuth App erstellen:**
   - Gehe zu: https://github.com/settings/developers
   - "New OAuth App"
   - Homepage URL: `https://lunolabs.ch`
   - Callback URL: `https://api.netlify.com/auth/done`

2. **Vercel Environment Variables hinzufügen:**
   ```
   OAUTH_CLIENT_ID=deine_client_id
   OAUTH_CLIENT_SECRET=dein_client_secret
   ```

3. **Netlify Identity aktivieren** (kostenlos):
   - Erstelle Account auf netlify.com
   - Aktiviere "Identity" für dein Projekt
   - Verknüpfe mit GitHub Repo

### Option 2: Einfacher (für den Anfang)

Bearbeite die Files direkt auf GitHub:
- `src/content/homepage.json`
- `src/content/about.json`
- `src/content/contact.json`
- `src/content/settings.json`

Vercel deployt automatisch nach jedem Git Push!

---

## 📝 Was kannst du bearbeiten?

### Homepage (`/admin` → Homepage)
- ✅ Titel & Untertitel
- ✅ Beschreibung
- ✅ Tagline
- ✅ Hero-Bild
- ✅ SEO-Titel & Description

### Über uns (`/admin` → Über uns)
- ✅ Intro-Text
- ✅ Vision
- ✅ Gründer: Name, Titel, Bio, Foto, Zitat

### Kontakt (`/admin` → Kontakt)
- ✅ Email
- ✅ Standort
- ✅ Instagram & LinkedIn

### Einstellungen (`/admin` → Einstellungen)
- ✅ Logo & Favicon
- ✅ Launch-Datum
- ✅ Calendly-Link
- ✅ Site Name & Description

---

## 🖼️ Bilder hochladen

1. Im CMS auf "Media" klicken
2. Bilder hochladen (werden in `/public/assets/images/` gespeichert)
3. Bild auswählen in Feldern mit Bild-Icon

---

## ⚠️ Wichtig

- **Änderungen werden sofort gespeichert** (kein "Entwurf")
- **Git Commits** werden automatisch erstellt
- **Vercel deployt** nach jedem Commit automatisch
- **Local Backend**: Änderungen bleiben auf deinem Computer bis zum Git Push

---

## 🆘 Probleme?

1. **CMS lädt nicht:** Server neustarten (`npm run dev`)
2. **Änderungen nicht sichtbar:** Browser-Cache leeren
3. **Login auf Vercel klappt nicht:** GitHub OAuth prüfen

---

**Viel Spass beim Bearbeiten! 🚀**
