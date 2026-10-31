import { DiceSkin, RuleDetail, TabScreenInfo } from '../types/game';

export const APK_DOWNLOAD_URL = "https://www.dropbox.com/scl/fi/hc3rc0dsxwdf7hol6uk88/mystery_dice.apk?rlkey=lo4s5n360jhobhw0g9ksqgrvm&st=fsgcapl5&dl=1";
export const APK_FILE_NAME = "mystery_dice.apk";
export const APP_VERSION = "v1.2.0";
export const ANDROID_REQUIREMENT = "Android 7.0+";
export const APK_SIZE = "10.1 MB";

export const STANDARD_RULES: RuleDetail[] = [
  {
    dot: 1,
    title: "2X Multiplier",
    tagline: "Boost & Instant Reroll",
    type: "Reward",
    description: "You get an immediate free reroll! A glowing golden 2X Multiplier banner activates. Whatever you roll on your subsequent roll is doubled.",
    action: "Roll immediately without passing device.",
    stakes: "Double Dices currency (+20 instead of +10) and minigame rewards are doubled."
  },
  {
    dot: 2,
    title: "Free Reroll",
    tagline: "Lucky Turn",
    type: "Benefit",
    description: "Fortune smiles on you. You immediately get another dice roll without ending your turn or passing the device to the next player.",
    action: "Keep the momentum going with an immediate second throw.",
    stakes: "Stack your points and keep control of the table."
  },
  {
    dot: 3,
    title: "Skip a Player",
    tagline: "Tactical Sabotage",
    type: "Sabotage",
    description: "A target selector modal opens displaying all opposing table players. You pick any opponent at the table.",
    action: "Select an opponent to freeze with a Skip badge.",
    stakes: "When their turn arrives, the game buzzes, consumes the penalty, and skips them!"
  },
  {
    dot: 4,
    title: "Minigame Duel",
    tagline: "Live Showdown",
    type: "Minigame",
    description: "A duel modal opens. The active player picks an opponent and battles in one of three interactive party minigames: Rock-Paper-Scissors, Tic-Tac-Toe, or Speed Reflex.",
    action: "Battle face-to-face in high-stakes tactile minigames.",
    stakes: "WIN: +20 bonus Dices & free reroll! LOSE: Your next upcoming turn is skipped!",
    sampleItems: [
      "Rock-Paper-Scissors: Fist, Hand, Scissors with 3-second tension timer",
      "Tic-Tac-Toe: 3x3 tactile grid showdown with instant victory detection",
      "Speed Reflex Duel: Screen flashes neon green; tap under 380ms to triumph"
    ]
  },
  {
    dot: 5,
    title: "Jinxed Tag Chase",
    tagline: "Physical Room Chase & 3-Min Silence",
    type: "Physical Challenge",
    description: "The roller is the Runner. Pick an opponent sitting at the table as Chaser. A 5-second audible headstart ticks while the Runner sprints out of range, followed by a 10-second frantic chase!",
    action: "If Runner escapes: Chaser is JINXED for 3 minutes (0 words allowed!). If caught: Runner performs a penalty.",
    stakes: "Jinxed players cannot speak for 180 seconds. Any sound triggers an instant dare!",
    sampleItems: [
      "Sing a nursery rhyme with dramatic operatic vibrato",
      "Perform 10 jumping jacks chanting 'I am the dice champion!'",
      "Hold an ice cube in hand for 45 seconds straight",
      "Speak only in rhyming couplets until your next turn"
    ]
  },
  {
    dot: 6,
    title: "??? Mystery Dice Mode Shift",
    tagline: "The Table Anomaly",
    type: "Anomaly",
    description: "Confetti bursts and the entire table enters the mystery zone! All subsequent rolls warp into unpredictable party challenges until someone rolls a 5 to switch back.",
    action: "Flips the entire rulebook into Dares, Truths, Riddles, and Console challenges.",
    stakes: "Higher stakes, wilder laughter, and +25 Dices per completed trial!"
  }
];

export const MYSTERY_RULES: RuleDetail[] = [
  {
    dot: 1,
    title: "Party Dare",
    tagline: "Courage & Chaos",
    type: "Challenge",
    description: "The active player draws a Dare card from the live deck (or opponents can issue a consensus dare). Complete it to claim glory and in-game gold.",
    action: "Perform the dare within 60 seconds.",
    stakes: "Complete: +25 Dices. Refuse: Suffer a severe penalty punishment from the deck.",
    sampleItems: [
      "Walk a dramatic high-fashion runway catwalk across the room",
      "Give your best 30-second dramatic celebrity or animal impression",
      "Hold a solid plank while reciting the alphabet backwards",
      "Eat a pinch of salt or hot sauce with a deadpan straight face"
    ]
  },
  {
    dot: 2,
    title: "Honest Truth",
    tagline: "No Secrets Spared",
    type: "Social",
    description: "The table demands absolute honesty. Answer the drawn question truthfully in front of everyone.",
    action: "Read the prompt aloud and answer candidly.",
    stakes: "Complete: +25 Dices. Lie detected or refuse: Draw an instant forfeit card.",
    sampleItems: [
      "What is the most embarrassing thing currently in your browser search history?",
      "If you had to trade lives with one person in this room, who and why?",
      "What is a bizarre secret talent or habit you have never told anyone?",
      "What is the worst fashion or style mistake you ever made in public?"
    ]
  },
  {
    dot: 3,
    title: "Party Riddle",
    tagline: "30-Second Brainteaser",
    type: "Intellect",
    description: "An interactive riddle appears with a hidden solution and a ticking 30-second countdown.",
    action: "Guess the answer before the buzzer sounds, then tap Reveal.",
    stakes: "Correct: +25 Dices. Incorrect or timeout: Suffer a mini-punishment.",
    sampleItems: [
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? (A Map)",
      "What gets wetter the more it dries? (A Towel)",
      "What has to be broken before you can use it? (An Egg)",
      "What comes once in a minute, twice in a moment, but never in a thousand years? (The letter M)"
    ]
  },
  {
    dot: 4,
    title: "Physical Showdown",
    tagline: "Face-to-Face Duel",
    type: "Duel",
    description: "The active player chooses an opponent from the table and challenges them to a real-life showdown.",
    action: "Compete head-to-head right at the table.",
    stakes: "Winner takes +25 Dices and bragging rights; loser skips next turn.",
    sampleItems: [
      "High-tension staring contest (first person to blink or laugh loses)",
      "3-round thumb wrestling grand prix",
      "One-legged balance test with both eyes closed (first foot down loses)",
      "Rapid-fire tongue twister: 5 repetitions without a slip"
    ]
  },
  {
    dot: 5,
    title: "Switch Back to Normal",
    tagline: "Reality Restored",
    type: "Reset",
    description: "The mystery anomaly ends! Celebratory chimes ring out, and the game automatically transitions back to Standard Dice Rules.",
    action: "Resets the table back to standard dot powers.",
    stakes: "Awards the roller +15 Dices bonus for breaking the curse."
  },
  {
    dot: 6,
    title: "Video Game Feat",
    tagline: "Gamer Challenge",
    type: "Gaming",
    description: "Issues a live gaming feat to an opponent or team on console, mobile, or PC gaming setup.",
    action: "Challenge an opponent to execute a ridiculous gaming milestone.",
    stakes: "Massive +35 Dices bounty upon successful video proof or live stream.",
    sampleItems: [
      "FPS / Shooter: Get 15 kills in a single match without using a sniper rifle",
      "Mobile Arena: Win 2 consecutive ranked ladder matches with a completely randomized deck",
      "Subway Surfers / Endless Runner: Score 250,000 points without jumping once",
      "Mario Kart: Place 1st on 150cc using tilt gyro steering only"
    ]
  }
];

export const SKINS_DATA: DiceSkin[] = [
  {
    id: "classic_ivory",
    name: "Classic Ivory",
    price: "Starter / Free",
    rarity: "Starter",
    description: "Polished ivory ceramic with rounded obsidian pips. The iconic tabletop standard.",
    bodyColor: "#f3f4f6",
    pipColor: "#111827",
    roughness: 0.25,
    metalness: 0.1
  },
  {
    id: "mystery_cube",
    name: "??? Mystery Cube",
    price: "150 Dices",
    rarity: "Iconic",
    description: "Matte black cube with glowing white question marks on every face. The official emblem skin.",
    bodyColor: "#050608",
    pipColor: "#ffffff",
    roughness: 0.35,
    metalness: 0.15,
    isMysteryCube: true
  },
  {
    id: "cyberpunk_neon",
    name: "Cyberpunk Neon",
    price: "200 Dices",
    rarity: "Rare",
    description: "Dark slate chassis with radiant cyber cyan glowing pips. Electrified midnight vibe.",
    bodyColor: "#0f172a",
    pipColor: "#06b6d4",
    roughness: 0.3,
    metalness: 0.5
  },
  {
    id: "glacial_frost",
    name: "Glacial Frost",
    price: "250 Dices",
    rarity: "Rare",
    description: "Translucent arctic crystal infused with cobalt frost dots and refractive light dispersion.",
    bodyColor: "#0284c7",
    pipColor: "#e0f2fe",
    roughness: 0.15,
    metalness: 0.3
  },
  {
    id: "crimson_magma",
    name: "Crimson Magma",
    price: "300 Dices",
    rarity: "Epic",
    description: "Volcanic basalt rock textured with glowing molten ember dots fresh from the core.",
    bodyColor: "#1c1917",
    pipColor: "#ef4444",
    roughness: 0.6,
    metalness: 0.4
  },
  {
    id: "golden_high_roller",
    name: "Golden High Roller",
    price: "350 Dices",
    rarity: "Epic",
    description: "Solid 24-karat burnished gold body with embedded ruby pips and mirror-finish metallic sheen.",
    bodyColor: "#d97706",
    pipColor: "#991b1b",
    roughness: 0.12,
    metalness: 0.85
  },
  {
    id: "imperial_jade",
    name: "Imperial Jade",
    price: "400 Dices",
    rarity: "Epic",
    description: "Royal green carved jade stone with polished gold leaf pips fit for emperor tables.",
    bodyColor: "#065f46",
    pipColor: "#fbbf24",
    roughness: 0.2,
    metalness: 0.35
  },
  {
    id: "cosmic_galaxy",
    name: "Cosmic Galaxy",
    price: "500 Dices",
    rarity: "Legendary",
    description: "Deep interstellar nebula violet dusted with shimmering starlight dots and void energy.",
    bodyColor: "#3b0764",
    pipColor: "#c084fc",
    roughness: 0.18,
    metalness: 0.65
  }
];

export const APP_TABS: TabScreenInfo[] = [
  {
    id: "play",
    name: "Play Arena",
    badge: "Center Hero",
    headline: "The Heart of the Match",
    summary: "Starts in the stylized Lobby with the 3D Mystery Dice, and transitions into the live table match with 2 to 8 players.",
    features: [
      "Custom vector player badges & 8 distinct color themes",
      "Real-time turn tracking with dynamic indicator",
      "Physics toss or direct finger flick interaction",
      "Automatic dot rule resolution and modal triggers"
    ]
  },
  {
    id: "rank",
    name: "Rank",
    badge: "Hall of Fame",
    headline: "Verified Google Leaderboards",
    summary: "Live Hall of Fame displaying the Top 25 Most Dices and Top 25 Most Time Spent Playing for real, authenticated players.",
    features: [
      "Zero bot guarantee: 100% verified Firebase Google accounts",
      "Top 25 Most Dices accumulated across matches",
      "Top 25 Time Spent Playing tracked automatically",
      "Real-time rank updates synced to Cloud Firestore"
    ]
  },
  {
    id: "shop",
    name: "Shop Vault",
    badge: "3D Skins",
    headline: "Custom 3D Procedural Materials",
    summary: "Unlock and equip 8 procedural 3D dice materials using your earned in-game currency (Dices).",
    features: [
      "Inspect materials with 360-degree interactive rotation",
      "PBR shaders: metalness, roughness, emission, and pips",
      "Instant skin swap across all game screens",
      "Earn coins by rolling, winning duels, and solving riddles"
    ]
  },
  {
    id: "rules",
    name: "Rules",
    badge: "Quick Reference",
    headline: "Interactive Table Rulebook",
    summary: "Complete interactive reference explaining every dot power for both Standard and ??? Mystery modes.",
    features: [
      "Instant toggle between Standard Mode and Mystery Mode",
      "Step-by-step minigame and tag chase guides",
      "Deck preview of live dares, truths, and brainteasers",
      "Fast lookup during active games with zero delay"
    ]
  },
  {
    id: "settings",
    name: "Settings",
    badge: "Audio & Display",
    headline: "Customize Your Setup",
    summary: "Fine-tune procedural audio synthesizers, toggle themes, and control haptic vibrations.",
    features: [
      "Procedural Web Audio lo-fi background music generator",
      "Independent SFX & music volume sliders (0% to 100%)",
      "OLED Dark mode (#0c0d12) and crisp Light mode toggle",
      "Tactile haptic phone vibration on toss & dice impact"
    ]
  }
];

export const PLAYER_ICONS = [
  "Crown", "Lightning", "Flame", "Shield", "Star", "Gemstone",
  "Target", "Ghost", "Rocket", "Sparkles", "Swords", "Compass"
];

export const PLAYER_COLORS = [
  { name: "Amber", hex: "#f59e0b" },
  { name: "Blue", hex: "#3b82f6" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Pink", hex: "#ec4899" },
  { name: "Purple", hex: "#8b5cf6" },
  { name: "Cyan", hex: "#06b6d4" },
  { name: "Orange", hex: "#f97316" },
  { name: "Rose", hex: "#f43f5e" }
];

export const FAQS = [
  {
    q: "Why is Mystery Dice distributed as an APK file?",
    a: "Mystery Dice is distributed as an Android Package (.apk) so you can download and install it directly on your Android phone or tablet without waiting for third-party store approvals. It contains the complete game, offline pass-and-play logic, 3D graphics, procedural audio, and optional Google Sign-in."
  },
  {
    q: "How do I install this APK on my Android phone?",
    a: "1. Tap 'Download Mystery Dice APK' to get the file.\n2. Once downloaded, tap the notification or open your Files / Downloads folder.\n3. If prompted with 'For your security, your phone is not allowed to install unknown apps', tap Settings and toggle 'Allow from this source'.\n4. Tap Install, open the app, and gather your friends around the table!"
  },
  {
    q: "Is the APK safe to install on my device?",
    a: "Yes, 100%. Mystery Dice does not request intrusive device permissions (no contact access, no microphone snooping, no background tracking). The standard Android 'File might be harmful' warning is shown automatically for all APKs downloaded outside the Google Play Store."
  },
  {
    q: "Do other players need to install the app on their phones?",
    a: "No! Mystery Dice is designed around a single shared device. You place one phone, tablet, or device in the middle of the table, enter 2 to 8 player names, and pass the device around when rolling or dueling."
  },
  {
    q: "Does the app require an internet connection?",
    a: "Local party matches and pass-and-play work completely offline! An internet connection is only needed if you want to sign in with your Google account to sync your unlocked skins and compete on the global Top 25 leaderboards."
  },
  {
    q: "What happens if a player breaks the 3-minute silence rule in Jinxed?",
    a: "In the 5-dot Jinxed challenge, if the Runner escapes, the Chaser is jinxed for 180 seconds. If they make a single vocal sound before the timer expires, the group can immediately issue an instant party dare from the punishment deck!"
  }
];
