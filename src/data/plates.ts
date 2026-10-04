import imgJasmineCluster from '../assets/images/jasmine_cluster_rain_1791097686736.jpg';
import imgHibiscusInPalm from '../assets/images/hibiscus_in_palm_1791097699214.jpg';
import imgBloomingStar from '../assets/images/blooming_jasmine_star_1791097710719.jpg';
import imgMonsoonScooter from '../assets/images/monsoon_scooter_pov_1791097721721.jpg';
import imgTwilightStreet from '../assets/images/twilight_suburb_street_1791097733173.jpg';
import imgGreatBanyan from '../assets/images/great_banyan_roots_1791097763459.jpg';
import imgTexturedBark from '../assets/images/textured_tree_bark_1791097776837.jpg';
import imgDevasSculptures from '../assets/images/devas_sacred_sculptures_1791097787797.jpg';
import imgTempleGopuram from '../assets/images/temple_gopuram_tower_1791097799790.jpg';
import imgPhotographerAvatar from '../assets/images/photographer_avatar_1791097810708.jpg';

export { imgPhotographerAvatar };

export interface Plate {
  id: string;
  plateNumber: string;
  seriesId: 'flora' | 'monsoon' | 'woodlands' | 'heritage';
  category: 'FLORA & BOTANICALS' | 'MONSOON SOLITUDE' | 'ANCIENT WOODLANDS' | 'HERITAGE & GOPURAM';
  seriesTitleKicker: string;
  seriesHeading: string;
  seriesMeta: string;
  tag: string;
  technical: string;
  title: string;
  caption: string;
  descriptionExtended: string;
  footerLeft: string;
  actionText: string;
  image: string;
  aspectRatio?: '4:3' | '16:9' | '1:1';
  exif: {
    camera: string;
    lens: string;
    shutter: string;
    iso: string;
    aperture: string;
    focalLength: string;
  };
  location: string;
  coordinates: string;
  edition: string;
  printPrice: number;
  year: string;
}

export const ARCHIVE_PLATES: Plate[] = [
  {
    id: '001',
    plateNumber: 'PLATE 001',
    seriesId: 'flora',
    category: 'FLORA & BOTANICALS',
    seriesTitleKicker: '01 • MONSOON GARDEN MACRO SERIES',
    seriesHeading: 'Flora & Dewdrop Botanicals',
    seriesMeta: '3 EXHIBITED PLATES • RAIN-KISSED PETALS',
    tag: 'MACRO FLORA',
    technical: 'f/2.8 • ISO 100',
    title: 'Fresh Jasmine Cluster in Rain',
    caption: 'Delicate white petals kissed by fresh summer rain, capturing the gentle awakening of morning...',
    descriptionExtended:
      'Documented during the initial breaks of the South-West Monsoon in rural Thanjavur gardens. Captured using high-magnification macro optics with natural diffused sky illumination. The glistening water tension on pristine white petals underscores the ephemeral freshness of the dawn shower.',
    footerLeft: 'Handheld • Natural Light',
    actionText: 'VIEW →',
    image: imgJasmineCluster,
    aspectRatio: '4:3',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 120mm f/3.5 Macro',
      shutter: '1/320s',
      iso: 'ISO 100',
      aperture: 'f/2.8',
      focalLength: '120mm',
    },
    location: 'Thanjavur Botanical Gardens, Tamil Nadu',
    coordinates: '10.7870° N, 79.1378° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 420,
    year: '2024',
  },
  {
    id: '002',
    plateNumber: 'PLATE 002',
    seriesId: 'flora',
    category: 'FLORA & BOTANICALS',
    seriesTitleKicker: '01 • MONSOON GARDEN MACRO SERIES',
    seriesHeading: 'Flora & Dewdrop Botanicals',
    seriesMeta: '3 EXHIBITED PLATES • RAIN-KISSED PETALS',
    tag: 'BOTANICAL STUDY',
    technical: 'f/1.8 • ISO 80',
    title: 'Crimson Hibiscus in Palm',
    caption: 'Rich scarlet petals held gently, highlighting the raw textures and vibrancy of native flora.',
    descriptionExtended:
      'A deeply tactile study in Kerala village courtyards. Hand-held with quiet reverence against rain-washed veranda eaves. The saturation of native red pigments contrasts with the calm overcast luminance.',
    footerLeft: 'Tactile Flora • Ambient Glow',
    actionText: 'VIEW →',
    image: imgHibiscusInPalm,
    aspectRatio: '4:3',
    exif: {
      camera: 'Leica M11',
      lens: 'Summilux-M 50mm f/1.4 ASPH',
      shutter: '1/500s',
      iso: 'ISO 80',
      aperture: 'f/1.8',
      focalLength: '50mm',
    },
    location: 'Palakkad Heritage Courtyard, Kerala',
    coordinates: '10.7867° N, 76.6548° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 420,
    year: '2024',
  },
  {
    id: '003',
    plateNumber: 'PLATE 003',
    seriesId: 'flora',
    category: 'FLORA & BOTANICALS',
    seriesTitleKicker: '01 • MONSOON GARDEN MACRO SERIES',
    seriesHeading: 'Flora & Dewdrop Botanicals',
    seriesMeta: '3 EXHIBITED PLATES • RAIN-KISSED PETALS',
    tag: 'PETAL SYMPHONY',
    technical: 'f/2.4 • ISO 100',
    title: 'Blooming Jasmine Star',
    caption: 'Symmetrical white blossom with fresh moisture droplets nestled in deep garden greens.',
    descriptionExtended:
      'Star-form geometric symmetry rendered with razor-sharp focal plane falloff. Each bead of rain acts as a natural convex lens, refracting surrounding dark foliage.',
    footerLeft: 'Dewdrop Series • Prismatic',
    actionText: 'VIEW →',
    image: imgBloomingStar,
    aspectRatio: '4:3',
    exif: {
      camera: 'Leica Q3',
      lens: 'Summilux 28mm f/1.7 ASPH (Macro Mode)',
      shutter: '1/400s',
      iso: 'ISO 100',
      aperture: 'f/2.4',
      focalLength: '28mm',
    },
    location: 'Madurai Temple Gardens, Tamil Nadu',
    coordinates: '9.9195° N, 78.1194° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 420,
    year: '2024',
  },
  {
    id: '004',
    plateNumber: 'PLATE 004',
    seriesId: 'monsoon',
    category: 'MONSOON SOLITUDE',
    seriesTitleKicker: '02 • TWILIGHT STREET & RAIN SERIES',
    seriesHeading: 'Monsoon & Urban Solitude',
    seriesMeta: '2 EXHIBITED PLATES • ASPHALT NOCTURNES',
    tag: 'URBAN POV',
    technical: 'Dusky Dawn Ride',
    title: 'Monsoon Ride — Wet Asphalt POV',
    caption: 'The contemplative calm of a morning commute on damp roads under an overcast sky.',
    descriptionExtended:
      'An intimate first-person point-of-view captured from the handlebars during an early morning ride across Coimbatore. The wet asphalt acts as a dark mirror, doubling the deep indigo saturation of the monsoon skies.',
    footerLeft: 'Speedometer Cockpit • Rain-Slicked Tarmac',
    actionText: 'EXPAND →',
    image: imgMonsoonScooter,
    aspectRatio: '4:3',
    exif: {
      camera: 'Leica Q3',
      lens: 'Summilux 28mm f/1.7',
      shutter: '1/160s',
      iso: 'ISO 400',
      aperture: 'f/2.0',
      focalLength: '28mm',
    },
    location: 'Coimbatore Outskirts, Tamil Nadu',
    coordinates: '11.0168° N, 76.9558° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 480,
    year: '2024',
  },
  {
    id: '005',
    plateNumber: 'PLATE 005',
    seriesId: 'monsoon',
    category: 'MONSOON SOLITUDE',
    seriesTitleKicker: '02 • TWILIGHT STREET & RAIN SERIES',
    seriesHeading: 'Monsoon & Urban Solitude',
    seriesMeta: '2 EXHIBITED PLATES • ASPHALT NOCTURNES',
    tag: 'NOCTURNE',
    technical: 'Overcast Dusk',
    title: 'Twilight Avenue & Streetlamp Glow',
    caption: 'Evening settles over the rain-soaked residential road as dusk paints the horizon in cool slate tones.',
    descriptionExtended:
      'A study in quiet suburban solitude. The lone sodium-warm streetlamp casts golden ripples across the freshly wetted tarmac, contrasting against the quiet slate and charcoal blue horizon.',
    footerLeft: 'Streetlamp Reflection • Quiet Suburb',
    actionText: 'EXPAND →',
    image: imgTwilightStreet,
    aspectRatio: '4:3',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 38mm f/2.5 V',
      shutter: '1/60s',
      iso: 'ISO 800',
      aperture: 'f/2.5',
      focalLength: '38mm',
    },
    location: 'Mysuru Heritage Cantonment, Karnataka',
    coordinates: '12.2958° N, 76.6394° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 480,
    year: '2024',
  },
  {
    id: '006',
    plateNumber: 'PLATE 006',
    seriesId: 'woodlands',
    category: 'ANCIENT WOODLANDS',
    seriesTitleKicker: '03 • BOTANICAL SANCTUARIES',
    seriesHeading: 'Ancient Woodlands & Living Canopies',
    seriesMeta: '2 EXHIBITED PLATES • ARBOREAL CATHEDRALS',
    tag: 'ARBOREAL MARVEL',
    technical: 'Century-Old Specimen',
    title: 'The Great Banyan with Hanging Prop Roots',
    caption: 'A magnificent century-old Banyan extending its aerial roots toward the earth, standing as a living cathedral.',
    descriptionExtended:
      'Spanning over two centuries of botanical evolution, this sacred Banyan stands with hundreds of columnar prop roots descending from horizontal branches. Captured with wide-angle medium format optics to retain every strand of moss and bark striation.',
    footerLeft: 'Botanical Garden • Descending Aerial Roots',
    actionText: 'EXPAND →',
    image: imgGreatBanyan,
    aspectRatio: '16:9',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 21mm f/4',
      shutter: '1/125s',
      iso: 'ISO 64',
      aperture: 'f/5.6',
      focalLength: '21mm',
    },
    location: 'Adyar Botanical Sanctuary, Chennai, Tamil Nadu',
    coordinates: '13.0067° N, 80.2570° E',
    edition: 'Edition of 12 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 560,
    year: '2024',
  },
  {
    id: '007',
    plateNumber: 'PLATE 007',
    seriesId: 'woodlands',
    category: 'ANCIENT WOODLANDS',
    seriesTitleKicker: '03 • BOTANICAL SANCTUARIES',
    seriesHeading: 'Ancient Woodlands & Living Canopies',
    seriesMeta: '2 EXHIBITED PLATES • ARBOREAL CATHEDRALS',
    tag: 'TRUNK ANATOMY',
    technical: 'Weathered Core',
    title: 'Textured Bark & Sunlit Canopy',
    caption: 'Rugged patterns carved by years of weather, nestled within dense subtropical greenery.',
    descriptionExtended:
      'Deep within the damp evergreen rain-forests of the Western Ghats. Sunbeams filter through multiple layers of canopy foliage, highlighting the lichen colonies and structural fissures in ancient timber.',
    footerLeft: 'Deep Woodland • Subtropical Foliage',
    actionText: 'EXPAND →',
    image: imgTexturedBark,
    aspectRatio: '4:3',
    exif: {
      camera: 'Leica M11 Monochrom',
      lens: 'APO-Summicron-M 35mm f/2 ASPH',
      shutter: '1/250s',
      iso: 'ISO 125',
      aperture: 'f/2.8',
      focalLength: '35mm',
    },
    location: 'Wayanad Rainforest Sanctuary, Kerala',
    coordinates: '11.6854° N, 76.1320° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 450,
    year: '2024',
  },
  {
    id: '008',
    plateNumber: 'PLATE 008',
    seriesId: 'heritage',
    category: 'HERITAGE & GOPURAM',
    seriesTitleKicker: '04 • TEMPLE ARCHITECTURE & ICONOGRAPHY',
    seriesHeading: 'Heritage Architecture & Sacred Sculptures',
    seriesMeta: '2 EXHIBITED PLATES • DRAVIDIAN MASTERWORKS',
    tag: 'DIVINE SCULPTURES',
    technical: 'Pigment Artistry',
    title: 'Devas & Sacred Iconography',
    caption: 'Sculptural frieze capturing traditional deities in vibrant ceremonial attire under a dramatic monsoon sky.',
    descriptionExtended:
      'Polychromatic stucco sculptures preserved along the tiered sanctum parapet. Natural mineral pigments depict episodes from classical Dravidian mythology, their vivid ochres and cerulean hues standing out against the leaden monsoon atmosphere.',
    footerLeft: 'Vibrant Pigments • Storm Sky',
    actionText: 'EXPAND →',
    image: imgDevasSculptures,
    aspectRatio: '4:3',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5 V',
      shutter: '1/640s',
      iso: 'ISO 100',
      aperture: 'f/4.0',
      focalLength: '55mm',
    },
    location: 'Meenakshi Temple Complex, Madurai, Tamil Nadu',
    coordinates: '9.9195° N, 78.1193° E',
    edition: 'Edition of 15 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 520,
    year: '2024',
  },
  {
    id: '009',
    plateNumber: 'PLATE 009',
    seriesId: 'heritage',
    category: 'HERITAGE & GOPURAM',
    seriesTitleKicker: '04 • TEMPLE ARCHITECTURE & ICONOGRAPHY',
    seriesHeading: 'Heritage Architecture & Sacred Sculptures',
    seriesMeta: '2 EXHIBITED PLATES • DRAVIDIAN MASTERWORKS',
    tag: 'DRAVIDIAN ARCHITECTURE',
    technical: 'Monumental Tier',
    title: 'Grand Temple Gopuram Tower',
    caption: 'The awe-inspiring multi-tiered gopuram reaching into stormy skies, crowned with centuries of mythical sculpting.',
    descriptionExtended:
      'Rising majestically above the temple tank and bustling agrahara streets, the monumental Dravidian gopuram stands as an architectural nexus between earthly stone and stormy celestial skies. Guarded by ferocious Yali sentinels and Kalasam spires.',
    footerLeft: 'Multi-Tiered Shikhara • Temple Gateway',
    actionText: 'EXPAND →',
    image: imgTempleGopuram,
    aspectRatio: '4:3',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 38mm f/2.5 V',
      shutter: '1/400s',
      iso: 'ISO 100',
      aperture: 'f/5.6',
      focalLength: '38mm',
    },
    location: 'Kapaleeshwarar Temple, Mylapore, Chennai',
    coordinates: '13.0336° N, 80.2699° E',
    edition: 'Edition of 12 • Archival Pigment on Hahnemühle Photo Rag',
    printPrice: 560,
    year: '2024',
  },
];

export const FILTER_CATEGORIES = [
  { id: 'ALL', label: 'ALL ARCHIVE PLATES', count: 9 },
  { id: 'FLORA & BOTANICALS', label: 'FLORA & BOTANICALS', count: 3 },
  { id: 'MONSOON SOLITUDE', label: 'MONSOON SOLITUDE', count: 2 },
  { id: 'ANCIENT WOODLANDS', label: 'ANCIENT WOODLANDS', count: 2 },
  { id: 'HERITAGE & GOPURAM', label: 'HERITAGE & GOPURAM', count: 2 },
] as const;

export const EXHIBITION_SERIES = [
  {
    id: 'flora',
    kicker: '01 • MONSOON GARDEN MACRO SERIES',
    title: 'Flora & Dewdrop Botanicals',
    meta: '3 EXHIBITED PLATES • RAIN-KISSED PETALS',
    plateIds: ['001', '002', '003'],
    layout: 'grid-3',
  },
  {
    id: 'monsoon',
    kicker: '02 • TWILIGHT STREET & RAIN SERIES',
    title: 'Monsoon & Urban Solitude',
    meta: '2 EXHIBITED PLATES • ASPHALT NOCTURNES',
    plateIds: ['004', '005'],
    layout: 'grid-2-equal',
  },
  {
    id: 'woodlands',
    kicker: '03 • BOTANICAL SANCTUARIES',
    title: 'Ancient Woodlands & Living Canopies',
    meta: '2 EXHIBITED PLATES • ARBOREAL CATHEDRALS',
    plateIds: ['006', '007'],
    layout: 'grid-2-asymmetric', // wide left, regular right
  },
  {
    id: 'heritage',
    kicker: '04 • TEMPLE ARCHITECTURE & ICONOGRAPHY',
    title: 'Heritage Architecture & Sacred Sculptures',
    meta: '2 EXHIBITED PLATES • DRAVIDIAN MASTERWORKS',
    plateIds: ['008', '009'],
    layout: 'grid-2-equal',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    plateId: '001',
    image: imgJasmineCluster,
    likes: 1842,
    comments: 64,
    caption:
      'First monsoon showers over Thanjavur. The delicate jasmine retains raindrops with remarkable surface tension. Hasselblad X2D 100C + 120mm macro. What flowers signal the start of monsoon in your hometown?',
    date: '2 DAYS AGO',
    location: 'Thanjavur, Tamil Nadu',
  },
  {
    id: 'ig-2',
    plateId: '006',
    image: imgGreatBanyan,
    likes: 3120,
    comments: 119,
    caption:
      'The sacred Banyan. More than a tree—an entire self-contained ecosystem and spiritual haven. Walking beneath these hanging prop roots feels like stepping into a prehistoric sanctuary.',
    date: '5 DAYS AGO',
    location: 'Adyar Botanical Gardens',
  },
  {
    id: 'ig-3',
    plateId: '009',
    image: imgTempleGopuram,
    likes: 2490,
    comments: 88,
    caption:
      'Storm clouds gathering behind the Kapaleeshwarar Gopuram right before the evening cloudburst. Stood in the courtyard for 45 minutes waiting for this exact light balance.',
    date: '1 WEEK AGO',
    location: 'Mylapore, Chennai',
  },
  {
    id: 'ig-4',
    plateId: '004',
    image: imgMonsoonScooter,
    likes: 1980,
    comments: 52,
    caption:
      '6:15 AM wet tarmac commute. There is a deep, tranquil rhythm to cruising damp village roads under an unbroken slate-grey sky.',
    date: '2 WEEKS AGO',
    location: 'Western Ghats Foothills',
  },
  {
    id: 'ig-5',
    plateId: '002',
    image: imgHibiscusInPalm,
    likes: 1650,
    comments: 41,
    caption:
      'Crimson hibiscus picked after the downpour. Gentle palm support. Uncompressed raw tones straight from the Leica M11 sensor.',
    date: '3 WEEKS AGO',
    location: 'Palakkad, Kerala',
  },
  {
    id: 'ig-6',
    plateId: '008',
    image: imgDevasSculptures,
    likes: 2890,
    comments: 97,
    caption:
      'Centuries of organic mineral dyes and stucco craftsmanship standing defiant against tempest winds. Madurai, Tamil Nadu.',
    date: '1 MONTH AGO',
    location: 'Madurai Temple Sanctum',
  },
];
