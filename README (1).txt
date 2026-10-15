CLETUSON ELECTRONIC ANALYSIS – Online App Package (v8)

This version is ONLINE-FIRST. Users need internet for the latest content and updates.
Admin tab is hidden from normal users. Only the owner can unlock it.

==================================================
1. HOST THE FILES (required for online use)
==================================================
Upload ALL files in this folder together:

  index.html
  manifest.json
  sw.js
  icon-192.png
  icon-512.png

Easy free options:
  A) Netlify Drop
     - Go to https://app.netlify.com/drop
     - Drag the whole folder
     - You get a free HTTPS link (e.g. https://something.netlify.app)
  B) GitHub Pages
     - Create a GitHub repo, upload the files, turn on Pages in Settings
  C) Your own domain (recommended later)
     - Buy a domain (e.g. cletuson.com)
     - Point it to Netlify or any host that supports HTTPS
     - Upload the same files

After hosting, open the link on a phone and install:
  Android Chrome → menu → Install app / Add to Home screen
  iPhone Safari → Share → Add to Home Screen

==================================================
2. ADMIN ACCESS (only you)
==================================================
The Admin tab is completely hidden from other users.

To unlock as owner (local mode):
  - Sign up / log in with your own phone number or email that matches the list in the code, OR
  - Use the secret admin PIN that is set inside the code (change it before public release)

Default secrets (CHANGE THESE before you publish):
  ADMIN_SECRET_PIN = cletusonosinunoonyedika
  ADMIN_PHONE_OR_EMAIL = 07015064204 and cletuson16@gmail.com

Open index.html, search for ADMIN_SECRET_PIN and change both values to ones only you know.

==================================================
3. REAL FIREBASE + FULL MULTI-USER ADMIN (later)
==================================================
The current package already has the structure for Firebase (members, access, news, parts, activity).
When you are ready I will guide you step-by-step to:

  1. Create a free Firebase project
  2. Enable Authentication + Firestore
  3. Connect the app so you can:
     - Approve / block users
     - See every user’s activity and searches
     - Push messages and new parts to all users
     - Keep the Admin tab visible only to you

==================================================
4. UPDATES
==================================================
Because the app is online-first, when you upload a new version of the files, users will receive the update automatically (network-first service worker). They will also see an “Update now” bar when a new version is detected.

==================================================
5. PHOTOS
==================================================
Component cards support photos. Realistic photos of MOSFETs, batteries and inverters are prepared. You can replace them with your own real product photos later.

==================================================
6. CLETUS AI
==================================================
Built-in knowledge base answers common inverter, MOSFET, battery and solar questions correctly.
For fully free-form answers on any topic, a paid AI API key can be connected later.

Created by Cletus Onyedika Group / Noni Tech Solar Shop.
WhatsApp support: 07015064204
