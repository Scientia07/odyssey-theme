# Builder.io Setup - Anleitung

## 🎨 Visueller Page Builder für LunoLabs!

Mit Builder.io kannst du (und deine Frau) **direkt im Browser** die Website bearbeiten:
- ✅ Texte direkt auf der Seite ändern
- ✅ Bilder per Drag & Drop austauschen
- ✅ Neue Sections hinzufügen
- ✅ Live-Vorschau beim Bearbeiten

---

## 🚀 Schritt 1: Builder.io Account erstellen

1. **Gehe zu:** https://builder.io/signup
2. **Sign up** mit Email oder GitHub
3. **Kostenloser Plan** ist völlig ausreichend!
4. **Create Organization:** z.B. "LunoLabs"

---

## 🔑 Schritt 2: API Key holen

1. In Builder.io Dashboard: Klick auf dein **Profil** (oben rechts)
2. **Account Settings** → **Organization**
3. Kopiere den **Public API Key**
4. Füge ihn in die `.env` Datei ein:
   ```
   PUBLIC_BUILDER_API_KEY=dein_key_hier
   ```

---

## 📄 Schritt 3: Erste Seite in Builder erstellen

1. In Builder.io Dashboard: **"+ New"** → **"Page"**
2. **Name:** "Homepage" oder "Landing"
3. **URL:** `/`
4. **Jetzt kannst du loslegen!**

### Visueller Editor:
- **Drag & Drop** Components von links
- **Click to Edit** direkt auf der Seite
- **Live Preview** während du arbeitest
- **Publish** wenn fertig

---

## 👥 Schritt 4: Deine Frau einladen

1. In Builder.io: **Settings** → **Team**
2. **Invite Team Member**
3. Email eingeben
4. **Role:** "Editor" (kann alles bearbeiten, aber keine Einstellungen ändern)

---

## 🖼️ Bilder hochladen

1. In Builder Editor: **Assets** (linke Sidebar)
2. **Upload** → Bilder auswählen
3. Per Drag & Drop in die Seite ziehen

---

## 📱 Responsive Design

Builder.io zeigt automatisch:
- 🖥️ Desktop
- 💻 Tablet
- 📱 Mobile

Du kannst für jedes Format separat bearbeiten!

---

## ⚡ Live-Änderungen

Änderungen in Builder.io sind **sofort live** nach "Publish"!
- Kein Git Push nötig
- Kein Deployment warten
- Einfach **Publish** → Live!

---

## 🆘 Wichtig

**Für Vercel Deployment:**

Füge in Vercel Environment Variables hinzu:
```
PUBLIC_BUILDER_API_KEY=dein_key
```

---

## 🎓 Learning Resources

**Builder.io Tutorials:**
- https://www.builder.io/c/docs/tutorials
- Video: "Getting Started" (5 Min)

**Typische Workflows:**
1. Text ändern: Click → Edit → Save
2. Bild ändern: Click auf Bild → Upload new
3. Section hinzufügen: Drag from left sidebar
4. Publish: Button oben rechts

---

**Viel Spaß beim Gestalten! 🚀**

Bei Fragen: https://forum.builder.io/
