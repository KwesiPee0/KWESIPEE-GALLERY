/**
 * ═══════════════════════════════════════════════════════
 *  KWESI PEE — GALLERY CONFIGURATION
 *  Edit this file to update ALL text and artwork data.
 *  ───────────────────────────────────────────────────────
 *  HOW TO ADD NEW ARTWORK:
 *  1. Upload your photo to your Google Drive folder
 *  2. Right-click the image → "Get link" → set to "Anyone with link"
 *  3. Copy the file ID from the link (the long string between /d/ and /view)
 *  4. Add a new entry to the correct room's `artworks` array below
 *  5. Save this file — the gallery updates automatically
 * ═══════════════════════════════════════════════════════
 */

window.GALLERY_CONFIG = {

  /* ── SITE IDENTITY ───────────────────────────────── */
  site: {
    artistName:   "Kwesi Pee",
    exhibitionTitle: "Lines of Life & Imagination",
    tagline:      "Exploring reality, memory, and imagination through lines and form",
    location:     "Accra, Ghana",
    year:         "2025–2026",
    availability: "Open for commissions",
    responseTime: "Within 48 hours",
  },

  /* ── HERO SECTION ────────────────────────────────── */
  hero: {
    eyebrow:   "Digital Exhibition · Ghana · 2025–2026",
    title:     "Kwesi Pee",
    titleItalic: "Lines of Life & Imagination",
    subtitle:  "Exploring reality, memory, and imagination through lines and form",
    ctaText:   "Enter Exhibition",
  },

  /* ── ABOUT SECTION ───────────────────────────────── */
  about: {
    name:      "Kwesi Pee",
    role:      "Visual Artist & Illustrator",
    bio: [
      "Kwesi Pee is a self-taught artist whose work lives at the intersection of imagination and lived experience. Drawing from the worlds of anime, gaming culture, and everyday observation, Kwesi brings characters to life with raw, energetic lines that pulse with personality and motion.",
      "Every piece is a conversation between the hand, the page, and the moment — unfiltered, bold, and deeply personal. Kwesi's practice spans pencil sketches, pen work, and vibrant marker illustrations, each medium chosen to match the intensity of the subject.",
      "Based in Ghana, Kwesi Pee continues to evolve a unique visual language that honours both the discipline of traditional drawing and the freedom of pure expression."
    ],
    stats: [
      { number: "64+", label: "Works" },
      { number: "IV",  label: "Rooms" },
      { number: "GH",  label: "Origin" }
    ]
  },

  /* ── CONTACT SECTION ─────────────────────────────── */
  contact: {
    heading:     "Commission & Collaborate",
    subheading:  "Interested in a custom portrait, collaboration, or simply want to connect? Every commission begins with a conversation.",
    commissionTypes: [
      "Portrait Commission",
      "Character Illustration",
      "Fan Art Commission",
      "Collaboration",
      "General Inquiry"
    ]
  },

  /* ── EXHIBITION ROOMS ────────────────────────────── */
  rooms: [
    {
      id:    "life-roots",
      roman: "I",
      title: "Life & Roots",
      desc:  "Pencil studies, nature, and the quiet beauty of observation. Works grounded in memory and the everyday.",
      cardDesc: "A study in line and form, rendered with quiet confidence and careful observation.",
      artworks: [
        /* ── HOW TO ADD AN IMAGE ──────────────────────────────────────────
         *  {
         *    driveId:  "1aBcDeFgHiJkLmNoPqRsTuV",   ← Google Drive file ID
         *    title:    "My New Drawing",
         *    medium:   "Pencil",
         *    year:     "2026"
         *  }
         * ──────────────────────────────────────────────────────────────── */
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Energy Reach",      medium: "Pencil & Crayon", year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Character Studies", medium: "Pen",             year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Dynamic Pose",      medium: "Pencil",          year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Head Study",        medium: "Pencil",          year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Portrait Sketch",   medium: "Pencil",          year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Sky 2 — Sunrise",   medium: "Pencil & Crayon", year: "2026" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Landscape Study",   medium: "Pencil & Crayon", year: "2026" },
      ]
    },
    {
      id:    "pop-culture",
      roman: "II",
      title: "Pop Culture & Influence",
      desc:  "Anime, video games, iconic characters — reimagined through kinetic line work charged with energy and attitude.",
      cardDesc: "Bold, kinetic lines capture the speed and intensity of iconic characters.",
      artworks: [
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Super Sonic Rage",     medium: "Pencil & Crayon", year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Shadow the Hedgehog",  medium: "Pen & Marker",    year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Sonic — Clean Lines",  medium: "Pen",             year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Chaos Energy",         medium: "Pencil & Marker", year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Triple Threat",        medium: "Pen & Marker",    year: "2026" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Battle Ready",         medium: "Pen",             year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Surge the Tenrec",     medium: "Pen",             year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Rival Encounter",      medium: "Pen & Marker",    year: "2025" },
      ]
    },
    {
      id:    "imagination",
      roman: "III",
      title: "Imagination",
      desc:  "Pure creative vision. Original forms, dramatic compositions, and explorations beyond the familiar.",
      cardDesc: "Original vision given shape through expressive, fearless mark-making.",
      artworks: [
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Dark Phantom",    medium: "Marker",       year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Blue Aura",       medium: "Marker",       year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Neon Striker",    medium: "Marker",       year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Into The Void",   medium: "Pencil & Crayon", year: "2026" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Dreamscape",      medium: "Pencil & Crayon", year: "2026" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Horizon Burst",   medium: "Pencil & Color",  year: "2026" },
      ]
    },
    {
      id:    "sketches",
      roman: "IV",
      title: "Sketches & Studies",
      desc:  "The raw material of artistry — gesture drawings, quick studies, and the honest documentation of a growing practice.",
      cardDesc: "A candid look at the creative process — unfiltered and alive.",
      artworks: [
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Pose Study I",      medium: "Pencil", year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Pose Study II",     medium: "Pencil", year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Character Lineup",  medium: "Pen",    year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Quick Studies",     medium: "Pen",    year: "2025" },
        { driveId: "PASTE_DRIVE_ID_HERE", title: "Expression Grid",   medium: "Pen",    year: "2026" },
      ]
    }
  ]

}; // end GALLERY_CONFIG
