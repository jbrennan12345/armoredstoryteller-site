/*
  Customer Favorites - the bundles shown on favorites.html.

  To add or change a bundle, edit the BUNDLES list below:
    name      - the bundle's title
    pitch     - one or two sentences shown under the title
    products  - which books are in it (use the short names from PRODUCTS)
    link      - the DriveThruRPG bundle page. Leave it as "" until the bundle
                exists; the page then links to each book on its own instead.

  Keep the quotes and commas exactly as they are.
*/

var PRODUCTS = {
  "las-vegas-by-night": {
    title: "Las Vegas By Night",
    cover: "images/cover-las-vegas-by-night.jpg",
    link: "https://site.storytellersvault.com/product/589470/Las-Vegas-By-Night"
  },
  "embers-of-horncrest": {
    title: "Embers of Horncrest",
    cover: "images/cover-embers-of-horncrest.jpg",
    link: "https://www.drivethrurpg.com/en/product/478391/embers-of-horncrest"
  },
  "drowned-king": {
    title: "The Drowned King",
    cover: "images/cover-drowned-king.jpg",
    link: "https://www.drivethrurpg.com/product/424022/The-Drowned-King"
  },
  "winters-woe": {
    title: "Winter's Woe",
    cover: "images/cover-winters-woe.jpg",
    link: "https://www.drivethrurpg.com/product/429504/Winters-Woe-An-Adventure-for-Forbidden-Lands"
  },
  "book-of-mog": {
    title: "The Book of Mog",
    cover: "images/cover-book-of-mog.jpg",
    link: "https://www.drivethrurpg.com/product/435858/The-Book-of-Mog"
  },
  "horsemen-of-reinhorn": {
    title: "The Horsemen of Reinhorn",
    cover: "images/cover-horsemen-of-reinhorn.jpg",
    link: "https://www.drivethrurpg.com/product/420869/The-Horsemen-of-Reinhorn"
  },
  "dead-men-walking": {
    title: "Dead Men Walking",
    cover: "images/cover-dead-men-walking.jpg",
    link: "https://www.drivethrurpg.com/product/413932/Dead-Men-Walking-Genre-Rules-for-Modern-Zombie-Apocalypse-Horror-Survival-and-Adventure"
  },
  "lair-of-amanitus": {
    title: "The Lair of Amanitus",
    cover: "images/cover-lair-of-amanitus.jpg",
    link: "https://www.drivethrurpg.com/product/424995/The-Lair-of-Amanitus-Campaign-Drop-Dragon-Lair-A1"
  },
  "tomb-of-the-baboon-king": {
    title: "The Tomb of the Baboon King",
    cover: "images/cover-tomb-of-the-baboon-king.jpg",
    link: "https://www.drivethrurpg.com/product/443056/The-Tomb-of-the-Baboon-King-Campaign-Drop-A2"
  }
};

var BUNDLES = [
  {
    name: "Forbidden Lands Collection",
    pitch: "Four adventures and a grimoire for Free League's Forbidden Lands: a wendigo on the Morma Glacier, a drowned king's vengeance, a mad sorcerer in the Firelands, and a compendium of demon lore.",
    products: ["winters-woe", "drowned-king", "embers-of-horncrest", "book-of-mog"],
    link: ""
  },
  {
    name: "OSE Campaign Drops",
    pitch: "Two ready-to-drop lairs for Old-School Essentials: a fungal green dragon for levels 5 to 10, and a trap-filled tomb for levels 8 and up.",
    products: ["lair-of-amanitus", "tomb-of-the-baboon-king"],
    link: ""
  },
  {
    name: "Old-School Horror",
    pitch: "Horror for OSE tables: a Grimm-fairy-tale adventure in cursed Reinhorn, and genre rules for surviving a modern zombie apocalypse.",
    products: ["horsemen-of-reinhorn", "dead-men-walking"],
    link: ""
  }
];
