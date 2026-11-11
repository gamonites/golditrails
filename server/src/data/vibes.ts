export interface VibesTown {
  name: string;
  vibe: string;
  highlights: string[];
}

export interface VibesPhoto {
  file: string;
  artist: string | null;
  license: string;
  source: string;
  url: string;
  provider: string;
  safeForPublic: boolean;
}

export interface HikeVibes {
  slug: string;
  vibe: string;
  towns: VibesTown[];
  photos: VibesPhoto[];
}

export const VIBES: Record<string, HikeVibes> = {
  "alta-via-1": {
    "slug": "alta-via-1",
    "vibe": "Our condensed Alta Via 1 cuts through three Italys — the Ladin Val di Fassa, the South Tyrolean passes around Sella and Puez, and the Belluno hills of Veneto — and the whole rhythm is set by the rifugios: breakfast in the hut, a ridge-to-ridge day, and a multi-course dinner in a packed wooden dining room. The pink dolomite towers glow rose at sunset (the famous enrosadira), while the valleys mix German-speaking Tyrolean, Italian and old Ladin — in Canazei (Cianacei) and Cortina (Anpezo) you'll hear Ladin in the lanes. It's a high route that feels surprisingly social: shared dorm beds, midday tables full of hikers, and a finish that drops you back into real Italy at Pedavena and Feltre.",
    "towns": [
      {
        "name": "Canazei",
        "vibe": "A Ladin valley town at 1,450 m at the head of Val di Fassa, with the Sas de Putoi cliff rising straight behind the rooftops. The Avisio stream murmurs through the lanes, signs read in Ladin and Italian, and the ski-town buzz of the Sellaronda softens into summer trails and rifugio life. Locals still speak Ladin over espresso, and in early September a folk parade (Gran Festa da d'Istà) takes over the square.",
        "highlights": [
          "Ladin lanes, the Avisio stream",
          "Sellaronda's 42 km ski circuit",
          "Gran Festa da d'Istà folk parade",
          "Midday rifugio lunches, Val di Fassa",
          "Sas de Putoi climbing walls"
        ]
      },
      {
        "name": "Bressanone (Brixen)",
        "vibe": "South Tyrol's oldest town sits on the Eisack river with the Plose plateau behind it, and it reads more Austrian than Italian: German dominates the signs, a Baroque cathedral and the old bishop's Hofburg anchor the cobbled old town, and the White Tower's carillon rings at 11 a.m. Bilingual shopfronts, canederli steam from the trattorias, and strudel waits for afternoon — it's also Reinhold Messner's hometown.",
        "highlights": [
          "Baroque cathedral and Hofburg palace",
          "White Tower carillon, 43 bells",
          "Canederli and Tyrolean strudel",
          "Reinhold Messner's hometown",
          "Eisack promenade, Plose plateau views"
        ]
      },
      {
        "name": "Cortina d'Ampezzo",
        "vibe": "A jet-set resort in the Ladin Ampezzo valley, where the Boite river runs through the car-free cobbled Corso Italia and the Tofane towers rise over the rooftops. An Olympic town twice (1956 and 2026), with a glamorous après-ski and the Dolomites Gold Cup cycling race finishing here — yet it keeps its Ladin soul: timber craft, tiled stoves, village squares. The locals call it Anpezo, and in 2007 the town voted to join South Tyrol.",
        "highlights": [
          "Tofane views over Corso Italia",
          "1956 and 2026 Olympics town",
          "Boite river, car-free cobbled square",
          "Dolomites Gold Cup finish line",
          "Ladin timber craft, tiled stoves"
        ]
      },
      {
        "name": "Feltre",
        "vibe": "The Venetian hill town where the high route hands off to the real world: 15th-century walls, a Palladian town hall around Piazza Maggiore with the Lion of St Mark, and the Dolomites looming to the north. Bombed in 1509 and rebuilt in Renaissance style, the old town feels like Venice set in the mountains. Hut shoes swap for proper Italian shoes — espresso, cicchetti, and the town's famous fritole.",
        "highlights": [
          "15th-century walls, 1489 Imperial Gate",
          "Piazza Maggiore, Lion of St Mark",
          "Giottoesque Vittore e Corona sanctuary",
          "Famous fritole, Venetian cicchetti",
          "Pedavena finish, 13 km by road"
        ]
      }
    ],
    "photos": [
      {
        "file": "alta-via-1-1.jpg",
        "artist": "Svíčková",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Canazei_NW.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-1-2.jpg",
        "artist": "Martin Kunz",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Fassa_valley.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-1-3.jpg",
        "artist": "Ymblanter",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Brixen_Domgasse_from_Domplatz.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-1-4.jpg",
        "artist": "kallerna",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Faloria_Cortina_d%27Ampezzo_10.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-1-5.jpg",
        "artist": "Tor91",
        "license": "Public domain",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Feltre_piazzamaggiore.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-1-6.jpg",
        "artist": "Leonardo Miliani",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Rifugio_Puez.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "alta-via-2": {
    "slug": "alta-via-2",
    "vibe": "\"The Way of Legends\" walks through three different Italys, and the mood shifts as clearly as the landscape. It starts in German-speaking South Tyrol — Bressanone's quiet bishop's lanes and the Plose plateau — then climbs into the Ladin heart of the Dolomites, where Val Gardena's woodcarving craft culture and the Puez-Geisler towers set the pace for days spent in packed wooden rifugios. The high section is real Dolomite drama: exposed cabled ridges near 2,932 m and peaks glowing rose at sunset. At the other end the route drops into Veneto, finishing at Pedavena in a world of espresso, cicchetti and Feltre's famous fritole — a fitting cool-down after 13 days of it.",
    "towns": [
      {
        "name": "Bressanone (Brixen)",
        "vibe": "South Tyrol's oldest town sits at the confluence of the Eisack and Rienz, and it reads more Austrian than Italian — German dominates the signs, the Baroque cathedral and the old bishops' Hofburg anchor the cobbled lanes, and the 72 m White Tower's 43-bell carillon rings at 11 a.m. Canederli and strudel steam from the trattorias, and it's Reinhold Messner's hometown (he was born here in 1944). The Plose plateau rising behind the rooftops is the green, gentle launchpad for the route.",
        "highlights": [
          "Baroque cathedral and Hofburg palace",
          "White Tower carillon, 43 bells",
          "Bilingual lanes, canederli and strudel",
          "Reinhold Messner's hometown",
          "Eisack river, Plose plateau views"
        ]
      },
      {
        "name": "Ortisei (St. Ulrich)",
        "vibe": "The main town of the Ladin Val Gardena, with the Geisler group towering over the rooftops and Ladin spoken in the lanes before Italian is. This is the Dolomites' craft capital — Gröden's woodcarvers have carved altars, sacred figures and wooden toys here for over two centuries, and the sculptor Moroder family is woven into the town's story. A ski town that slows down in summer: Seceda's knife-edged plateau overhead, carved figures in the shop windows, and the Museum Gherdëina keeping the valley's heritage.",
        "highlights": [
          "Gröden woodcarving, 200-year craft",
          "Geisler peaks over the rooftops",
          "Seceda plateau above town",
          "Museum Gherdëina, wooden sculpture",
          "Ladin lanes in Val Gardena"
        ]
      },
      {
        "name": "San Pellegrino (Passo San Pellegrino)",
        "vibe": "A high pass at 1,918 m between Moena and Falcade, among the highest paved roads in Europe and the heart of the Tre Valli ski area. The pass is open, windswept Dolomite country — viewpoints onto Cima Uomo, First World War trenches on the surrounding ridges, and a cluster of hotels where long stage days end with hot showers and big dinners. In summer rock climbers take over the slopes that skiers rule in winter.",
        "highlights": [
          "Passo at 1,918 m, Moena–Falcade",
          "Tre Valli ski area",
          "Cima Uomo viewpoints",
          "WWI trenches on the ridges",
          "High-altitude hotels after long stages"
        ]
      },
      {
        "name": "Feltre",
        "vibe": "The Venetian hill town where the high route hands off to the real world: 15th-century walls from 1499, a Palladian town hall around Piazza Maggiore with the Lion of St Mark, and the Dolomites looming to the north. Bombed in 1509 and rebuilt in Renaissance style, the old town feels like Venice set in the hills. Hut shoes swap for proper Italian shoes — espresso, cicchetti, and the town's famous fritole.",
        "highlights": [
          "1499 Venetian walls, walking path",
          "Piazza Maggiore, Lion of St Mark",
          "Giottoesque Vittore e Corona sanctuary",
          "Famous fritole, Venetian cicchetti",
          "Dolomites view to the north"
        ]
      }
    ],
    "photos": [
      {
        "file": "alta-via-2-1.jpg",
        "artist": "Soluvo",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Brixen_Bressanone_2012_(37).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-2-2.jpg",
        "artist": "Ladislav Luppa",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Brixen_-_Sonnentor_(1).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-2-3.jpg",
        "artist": "Wolfgang Moroder",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Da_Rusina_ju_a_Urtijei.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-2-4.jpg",
        "artist": "Pietro Zanarini",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Vista_sopra_il_Passo_San_Pellegrino_(3166865466).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-2-5.jpg",
        "artist": "BelPatty86",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Mura_veneziane,_Feltre.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "alta-via-2-6.jpg",
        "artist": "Gerda Arendt",
        "license": "CC0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Semmelkn%C3%B6del_and_forest_mushrooms,_Oestrich.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "tour-du-mont-blanc": {
    "slug": "tour-du-mont-blanc",
    "vibe": "Europe's most famous multi-day hike: a 10-day loop of roughly 170 km and 10,000 m of climbing through France, Italy and Switzerland, with a pass and a refuge to sleep in on every single day. In summer, hikers from all over the world converge on the refuges and the big villages, so a dozen languages get spoken over the same breakfast. Mont Blanc hovers over the whole circuit, sometimes in full face, sometimes lost in cloud, while the scenery trades French high villages for Italian pastures and the hush of the Swiss Valais side.",
    "towns": [
      {
        "name": "Chamonix-Mont-Blanc",
        "vibe": "A big valley town that hums with shops, cafés and lift queues, with Mont Blanc towering straight down the valley floor. The air smells of pine and diesel in the mornings; by afternoon the streets are full of international hikers and the cable car to the Aiguille du Midi never idles. Its guiding heritage runs deep: the Compagnie des Guides, founded in 1821, is among the oldest in the Alps, and the whole town is built around the mountain.",
        "highlights": [
          "Aiguille du Midi cable car",
          "Mer de Glace glacier walk",
          "1924 Winter Olympics birthplace",
          "Guides' company since 1821",
          "Valley panorama from La Flégère"
        ]
      },
      {
        "name": "Courmayeur",
        "vibe": "The tour's Italian stop at the foot of Mont Blanc's south face, where the Dora Baltea river cuts through chestnut groves and old stone houses. Expect woodsmoke, fondue and espresso on the balconies, with the massif walling in the valley from below. It's a resort that takes its ease — stylish, a notch slower than Chamonix, and all about eating well after a long day.",
        "highlights": [
          "Skyway Monte Bianco to Pointe Helbronner",
          "Alpine Botanical Garden Saussurea",
          "Fondue after a long day",
          "Dolonne, the old village hamlet",
          "Mont Blanc Tunnel exit"
        ]
      },
      {
        "name": "Saint-Gervais-les-Bains",
        "vibe": "A proper French market and spa town rather than a purpose-built resort, with a year-round population and a core of old stone houses. Thermal baths have drawn visitors here for well over a century, and the narrow-gauge Mont Blanc Express rattles up the valley toward Chamonix from Le Fayet station. From the café terraces you get a postcard of Mont Blanc without the crowds of the big-name valleys.",
        "highlights": [
          "Thermal baths, Les Thermes",
          "Mont Blanc Express narrow-gauge train",
          "Terraces facing Mont Blanc",
          "SNCF station with direct trains to Paris",
          "Gervasius church"
        ]
      },
      {
        "name": "Trient (Swiss side)",
        "vibe": "Around 150 people, a church and a handful of guesthouses — the quietest stop on the circuit, tucked at the edge of the Valais at 1,300 m. The air is still and the loudest things are cowbells, with the Trient Glacier hanging above the hamlet and Mont Blanc behind you as you cross back into France. Most hikers linger for coffee and a warm meal before the next climb.",
        "highlights": [
          "Cowbells in a quiet alpine valley",
          "Border village between Valais and Chamonix",
          "Trient Glacier above the hamlet",
          "Hotel du Col de la Forclaz",
          "Swiss fondue before the French side"
        ]
      }
    ],
    "photos": [
      {
        "file": "tour-du-mont-blanc-1.jpg",
        "artist": "DimiTalen",
        "license": "CC0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Valley_of_Chamonix_towards_the_north_from_Aiguille_du_Midi,_Chamonix-Mont-Blanc,_2007.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-du-mont-blanc-2.jpg",
        "artist": "DimiTalen",
        "license": "CC0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Rue_Joseph_Vallot,_with_Aiguille_du_Go%C3%BBter_in_the_background,_Chamonix-Mont-Blanc,_2007.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-du-mont-blanc-3.jpg",
        "artist": "Daniel Ventura",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Courmayeur_01.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-du-mont-blanc-4.jpg",
        "artist": "Florian Pépellin",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:%C3%89glise_de_Saint-Gervais-les-Bains_vue_du_TMB_(juin_2019).JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-du-mont-blanc-5.jpg",
        "artist": "Nicolas Vigier",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Trient_village.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-du-mont-blanc-6.jpg",
        "artist": "BiiJii",
        "license": "CC0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Fondue_au_fromage.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "walkers-haute-route": {
    "slug": "walkers-haute-route",
    "vibe": "The original alpine big walk: 13-14 hut-to-hut stages from Chamonix to Zermatt, ~200 km and ~14,000 m of climbing over 11 passes, the highest near 3,000 m. You begin in the wild, climbing-hungry Mont Blanc world and finish in the polished, car-free Matterhorn valley — one week that flips France to Switzerland, from French-speaking Savoy to Valais hamlets where raclette, alpine cheese and cowbells are the soundtrack. Nights are in simple cabanes and refuges, days are high passes, glacial lakes and endless granite — and the last descent into Zermatt, the Matterhorn looming over the village, is the Alps' greatest finish line.",
    "towns": [
      {
        "name": "Chamonix-Mont-Blanc",
        "vibe": "The valley floor under Mont Blanc: wet-granite air, chocolate from the Grand-Rue stands, crampons drying on balconies. A hive of climbers, skiers and long-distance hikers, with guide offices, gear shops and cable cars threading up to the Aiguille du Midi. In the evening the busy main street glows beneath the 4,808 m massif — the world's most famous starting gate.",
        "highlights": [
          "Grand-Rue cafés under Mont Blanc",
          "Aiguille du Midi cable car",
          "Mer de Glace ice palace",
          "Climber HQ: guides, gear, stories",
          "Stage 1 stroll out to Argentière"
        ]
      },
      {
        "name": "Champex-Lac",
        "vibe": "A tiny lakeside village at the Franco-Swiss border, 579 m down — the lowest point of the whole route. After the steep boulder climb over the Fenêtre d'Arpette, the lake's cold blue water, the small harbour and the valley's silence are a total reset. Meadows and chalets sit under the Arpette range; the water at the jetty is glacial and sharp.",
        "highlights": [
          "Lakeside harbour below the Arpette",
          "Route's lowest point, 579 m",
          "Cold-water dip at the jetty",
          "Quiet French-speaking border village"
        ]
      },
      {
        "name": "Le Châble",
        "vibe": "A high village at 1,400 m in the Val d'Anniviers, built around its stone church, with the smell of fresh cheese in the air. It is the gateway to the route's wild middle: larch woods, cowbells on the track up to Arolla, and the blue of Lac de Dixence down the valley. Evenings in the village inns mean raclette — this is the Valais at its most itself.",
        "highlights": [
          "1,400 m gateway to the Arolla valley",
          "Valais raclette and local cheese",
          "Stone church, wooden chalets",
          "Lac de Dixence a few km down-valley",
          "Trailhead for the big middle days"
        ]
      },
      {
        "name": "Zermatt",
        "vibe": "The car-free finish line at 1,600 m, with the Matterhorn's 4,478 m pyramidal north face filling the valley all day. Clear, thin air, cobbled streets, grand hotels — and after two weeks of huts, fondue, hot showers and the Matterhorn Glacier Paradise feel like winning. The village's whole identity orbits one mountain, which makes it the perfect last image.",
        "highlights": [
          "Matterhorn towering over the village",
          "Car-free cobbled streets",
          "Gornergrat railway for the classic view",
          "Matterhorn Glacier Paradise cableway",
          "Fondue and a hot shower"
        ]
      }
    ],
    "photos": [
      {
        "file": "walkers-haute-route-1.jpg",
        "artist": "Simo Räsänen (Ximonic)",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons: Chamonix valley and Mont Blanc from la Flégère",
        "url": "https://commons.wikimedia.org/wiki/File:Chamonix%20valley%20from%20la%20Fl%C3%A9g%C3%A8re%2C2010%2007.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "walkers-haute-route-2.jpg",
        "artist": "Barbara Steinemann",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons: Lac de Champex in high summer",
        "url": "https://commons.wikimedia.org/wiki/File:Lac%20de%20Champex%20im%20Hochsommer.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "walkers-haute-route-3.jpg",
        "artist": "Patrick Nouhailler",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons: Le Châble, village in Bagnes, Valais",
        "url": "https://commons.wikimedia.org/wiki/File:Le%20Ch%C3%A2ble%20(32203310744).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "walkers-haute-route-4.jpg",
        "artist": "Andrew Bossi",
        "license": "CC BY-SA 2.5",
        "source": "Wikimedia Commons: Matterhorn from the Church Bridge, Zermatt",
        "url": "https://commons.wikimedia.org/wiki/File:4025%20-%20Zermatt%20-%20Matterhorn%20from%20Kirchebr%C3%BCcke.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "walkers-haute-route-5.jpg",
        "artist": "Raph.zufferey",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons: Raclette at the fire (Valais cheese culture)",
        "url": "https://commons.wikimedia.org/wiki/File:Raclette%20feu.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "walkers-haute-route-6.jpg",
        "artist": "Simon Broccard",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons: Charles Kuonen Suspension Bridge near Randa",
        "url": "https://commons.wikimedia.org/wiki/File:Charles%20Kuonen%20Suspension%20Bridge.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "tour-of-the-vanoise": {
    "slug": "tour-of-the-vanoise",
    "vibe": "A ten-to-eleven-day circuit through France's first national park (created 1963), hugging the Italian frontier beneath the Grande Casse. Days run across wide glacial cirques, scree, and flowered alpine meadows where the loudest things are waterfalls and marmot whistles; nights smell of wood smoke around a refuge stove, with Beaufort — the region's raw-milk signature cheese — and tartiflette on half-board. Down in the valley, Savoyard villages keep their dairy rhythms: hay barns, church bells, and a border-town feel where French and Italian blend at the tunnel mouth.",
    "towns": [
      {
        "name": "Modane",
        "vibe": "A low-lying frontier town at the head of the Maurienne, where the Fréjus tunnel shoves trains straight into Italy. The station buzzes with Paris–Milan TGVs, the centre mixes a 19th-century fort built to guard the tunnel mouth with bakeries and bars carrying a distinct Italian accent. In summer it's the practical base: supermarket runs, train timetables, and pine-needle air from the old stone-pine seed yards.",
        "highlights": [
          "Fréjus tunnel, rail gateway to Italy",
          "Paris–Milan TGV at the station",
          "Fort du Replaton, 1885 border fort",
          "Twinned with Bardonecchia across the pass"
        ]
      },
      {
        "name": "Pralognan-la-Vanoise",
        "vibe": "The park's main gateway: a handful of streets and fewer than 700 residents at the foot of the Grandes Jorasses. The air is cool and thin, lanes are quiet, and hikers appear on the main road with day packs for the refuges. The village square smells of cut hay and warm stone, with park office, mountain paths, and the first cable car at the doorstep.",
        "highlights": [
          "Vanoise National Park headquarters",
          "Grandes Jorasses view over the village",
          "Refuge trailheads at the village edge",
          "1992 Olympic curling at Les Prioux"
        ]
      },
      {
        "name": "Val d'Isère",
        "vibe": "A ski village in summer shift: T-bars idle, pistes reopened as high hiking trails. The air hums with lift cables overhead and après bars turn into midday refuels for hikers heading to Mont Pourri and the Grandes Rousses. Perched at the park's edge, five kilometres from the Italian border, it keeps big-resort café culture at mountain scale.",
        "highlights": [
          "Summer hiking on former pistes",
          "Mont Pourri (3,779 m) over the valley",
          "Five km from the Italian border",
          "Lac de Chevril views"
        ]
      },
      {
        "name": "Bonneval-sur-Arc",
        "vibe": "The first village of Haute-Maurienne, a quiet hamlet where the Arc and Isère rivers meet. Lanes are narrow and shaded, the village church anchors the centre, and the Arc's rush is audible from the street. Vanoise peaks rise at the village edge, and life runs at the pace of the river.",
        "highlights": [
          "Confluence of the Arc and Isère",
          "Notre-Dame-de-l'Assomption church",
          "Vanoise peaks at the village edge",
          "First village of Haute-Maurienne"
        ]
      }
    ],
    "photos": [
      {
        "file": "tour-of-the-vanoise-1.jpg",
        "artist": "Florian Pépellin",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — entrance of the Fréjus road tunnel, French side at Modane",
        "url": "https://commons.wikimedia.org/wiki/File:Entr%C3%A9e_Tunnel_du_Fr%C3%A9jus.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-of-the-vanoise-2.jpg",
        "artist": "Abalg",
        "license": "Public domain",
        "source": "Wikimedia Commons — general view of Pralognan-la-Vanoise",
        "url": "https://commons.wikimedia.org/wiki/File:Pralognan_la_Vanoise.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-of-the-vanoise-3.jpg",
        "artist": "André Payan-Passeron",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — panoramic view of Val d'Isère in summer with Lac de Chevril and Mont Pourri",
        "url": "https://commons.wikimedia.org/wiki/File:RGA_231.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-of-the-vanoise-4.jpg",
        "artist": "Limfjord69",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — village lane and church of Bonneval-sur-Arc towards the Vanoise mountains",
        "url": "https://commons.wikimedia.org/wiki/File:20210817_Bonneval-sur-Arc,_ruelle_et_%C3%A9glise_du_village_(inscrit_MH_partiellement_Base_M%C3%A9rim%C3%A9e_PA00118207).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-of-the-vanoise-5.jpg",
        "artist": "Zubro",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — slice of Beaufort cheese",
        "url": "https://commons.wikimedia.org/wiki/File:Beaufort.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "tour-of-the-vanoise-6.jpg",
        "artist": "Florian Pépellin",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — panorama of Modane from the heights of La Norma",
        "url": "https://commons.wikimedia.org/wiki/File:Modane,_panorama_%282015%29.JPG",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "grande-traversee-de-la-chartreuse": {
    "slug": "grande-traversee-de-la-chartreuse",
    "vibe": "Five days walking across the monks' mountain — the granite, larch-and-beech massif where the Carthusians have kept silence since 1084, and where the trail passes beneath the ramparts of the Grande Chartreuse monastery. It starts in Grenoble, a river city of trams, the old Dauphiné parliament and a post-industrial riverside now given over to green paths, then climbs into the Chartreuse for Col de Bellefont (1,902 m) — the high point of a route you can actually stand on and breathe. Nights are in gîtes d'étape in real villages: wood stoves, big Savoie plates, hikers' chatter, and on day five a descent to Chambéry, the old Savoyard capital, to finish at the station. September, snow-free and larch-gold, is prime time.",
    "towns": [
      {
        "name": "Grenoble",
        "vibe": "A big, bright Alpine capital of about 155,000, where the Drac meets the Isère at the foot of a wall of peaks. Old parliament square, the funicular up to the Bastille's old fort, and a post-industrial riverside that is now green paths and trams. A tech and research city — 'European Silicon Valley' — with the 1968 Winter Olympics written into its history; from the station you head straight north into the Chartreuse.",
        "highlights": [
          "Isère–Drac river confluence",
          "Bastille funicular and old fort",
          "Place Victor Hugo and parliament",
          "1968 Winter Olympics host",
          "Europe's biggest Alpine metro"
        ]
      },
      {
        "name": "Saint-Pierre-de-Chartreuse",
        "vibe": "A former 1930s health-resort village at 900 m where the Chartreuse's green ramparts loom over the main street. The Grande Chartreuse monastery lies in the commune — visitors can't go inside, but you can walk its walls, visit the Carthusian museum two kilometres away, and taste the monks' green liqueur. In July, Jacques Brel's home village fills with the Rencontres Brel festival; in August the Eringer cows duel for the crown.",
        "highlights": [
          "Grande Chartreuse monastery ramparts",
          "Carthusian museum at La Correrie",
          "Green Chartreuse liqueur from monks",
          "Rencontres Brel festival every July",
          "La Scia ski slopes above the village"
        ]
      },
      {
        "name": "Le Désert d'Entremont",
        "vibe": "The 'desert' of this high hamlet (about 1,150 m) is silence. A former ermitage village at the foot of Mont Outheran on the Savoie side of the Chartreuse, it is a tiny ski area in winter and, in summer, a quiet cluster of gîtes d'étape where hikers sleep. Wood smoke, farm cooking, and a view that runs down to the Chambéry basin.",
        "highlights": [
          "Ermitage hamlet at 1,150 m",
          "Gîte d'étape village life",
          "Mont Outheran above the hamlet",
          "Views across to the Chambéry basin",
          "Quietest night on the route"
        ]
      },
      {
        "name": "Chambéry",
        "vibe": "The finish is the old Savoyard capital: a sunny city of about 60,000 in a valley between the Bauges and the Chartreuse, where the Leysse winds through a terracotta old town. Out of the last col and you're at the station; then it's a wander to the Fontaine des Éléphants — four marble elephant heads holding up a column — and the ducal château of the House of Savoy. The Lac du Bourget, France's largest natural lake, lies a short trip north for a last swim.",
        "highlights": [
          "Elephant Fountain in Place Saint-Léger",
          "Château des ducs de Savoie",
          "Lac du Bourget nearby",
          "Chambéry vermouth AOC",
          "Terracotta old town rooftops"
        ]
      }
    ],
    "photos": [
      {
        "file": "grande-traversee-de-la-chartreuse-1.jpg",
        "artist": "Floriel",
        "license": "CC BY 2.5",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:La_Grande_Chartreuse.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "grande-traversee-de-la-chartreuse-2.jpg",
        "artist": "Guerinf",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Chartreuse_en_vitrine.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "grande-traversee-de-la-chartreuse-3.jpg",
        "artist": "Florian Pépellin",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Fontaine_des_éléphants_(été_2015).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "grande-traversee-de-la-chartreuse-4.jpg",
        "artist": "Marcin Białek",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Grenoble_panorama_2012.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "grande-traversee-de-la-chartreuse-5.jpg",
        "artist": "Nitot",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Saint-pierre-de-chartreuse.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "grande-traversee-de-la-chartreuse-6.jpg",
        "artist": "Ghislain38",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Panorama_desert_2.JPG",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "kumano-kodo-nakahechi": {
    "slug": "kumano-kodo-nakahechi",
    "vibe": "Japan's answer to the Camino de Santiago: for over a thousand years pilgrims have climbed these cedar-forest passes in the Kii Mountains, and you can still follow in their footsteps along old stone-paved slopes, past oji shrines with ema plaques and the click of ojime prayer beads. The trail trades hinoki-forest silence for onsen steam, and every day ends at a small minshuku where a kaiseki dinner appears after your long walk. No summit to conquer here — the reward is the walking itself, on a sacred road emperors once trod.",
    "towns": [
      {
        "name": "Yunomine Onsen",
        "vibe": "One of Japan's oldest hot-spring towns, tucked in a narrow, steam-filled valley where pilgrims bathed before walking on to Kumano Hongu for well over a millennium. Sulfur steam drifts over the hot creek past wooden ryokan and the stone-lined Tsuboyu bath, a World Heritage landmark. Evenings smell of cedar, wood smoke and onsen tamago.",
        "highlights": [
          "Tsuboyu stone bath, UNESCO-listed",
          "Sulfur steam over the hot creek",
          "Wooden ryokan in a narrow valley",
          "Onsen tamago boiled in 90-degree water",
          "Pilgrim purification bath before Hongu"
        ]
      },
      {
        "name": "Kumano Hongu",
        "vibe": "The spiritual heart of the Kii Mountains, where Kumano Hongu Taisha stands in mossy cedar forest. The 34-metre Otorii — the world's largest torii — frames the Oyunohara sandbank, the ancient sacred site the shrine was moved from in 1891, while the hinoki halls look grown out of the forest floor. Pilgrim life is still alive here: stamp books, ema plaques, and a spring festival when the deities walk back to the sandbank.",
        "highlights": [
          "Otorii, the world's largest torii",
          "Shrine set in cedar forest",
          "Ema plaques and pilgrim stamp books",
          "Oyunohara sandbank, the old sacred site",
          "Kaiseki dinners at Hongu ryokan"
        ]
      },
      {
        "name": "Takijiri",
        "vibe": "The famous oji post station where the Nakahechi officially begins, a small shrine with stone lanterns marking the formal entry into Kumano's sacred land. It is a cluster of family-run minshuku where pilgrims get their first stamp, and the air is cool, quiet and cedar-scented. The last ordinary moment before the mountain takes over.",
        "highlights": [
          "First oji of the Nakahechi",
          "Shrine and stone lanterns over the village",
          "Kumano Kodo Kan pilgrimage center",
          "First stamp in your pilgrim book",
          "Family-run minshuku with kaiseki dinners"
        ]
      },
      {
        "name": "Kii-Tanabe",
        "vibe": "A relaxed river town at the mouth of the Kumano gorge, where the pilgrimage kicks off with a bus up the green valley. Old port-town streets run along the river, and shops sell ojime beads and pilgrim gear. Pre-dawn, it hums as walkers head for Takijiri; by afternoon it is a base for Koyasan's temple mountain.",
        "highlights": [
          "River town gateway to Kumano",
          "JR Wakayama Line terminus",
          "Ojime beads and pilgrim gear shops",
          "Buses up the valley to Takijiri",
          "Koyasan day trips and shojin ryori"
        ]
      }
    ],
    "photos": [
      {
        "file": "kumano-kodo-nakahechi-1.jpg",
        "artist": "Nekosuki",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons - Tsuboyu stone bath, Yunomine Onsen",
        "url": "https://commons.wikimedia.org/wiki/File:Kumano_Kodo_World_heritage_Yunomine_Onsen_Tsuboyu_%E6%B9%AF%E3%81%AE%E5%B3%B0%E6%B8%A9%E6%B3%89_%E3%81%A4%E3%81%BC%E6%B9%AF69.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "kumano-kodo-nakahechi-2.jpg",
        "artist": "Yanajin33",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons - Otorii at Oyunohara, Kumano Hongu Taisha",
        "url": "https://commons.wikimedia.org/wiki/File:Kumano-hong%C3%BB-taisha_Shrine_-_Torii_at_%C3%94yunohara.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "kumano-kodo-nakahechi-3.jpg",
        "artist": "Tim Notari from Tanabe-Shi Wakayama-Ken, Japan",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons - Kumano Hongu Taisha hall interior",
        "url": "https://commons.wikimedia.org/wiki/File:Inside_the_Kumano_Hongu_Taisha.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "kumano-kodo-nakahechi-4.jpg",
        "artist": "KMR",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons - Takijiri-oji shrine, entry to the sacred area",
        "url": "https://commons.wikimedia.org/wiki/File:Takijiri-oji_shrine_2.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "kumano-kodo-nakahechi-5.jpg",
        "artist": "V travel",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons - Nakahechi trail exit near Hosshinmon-oji",
        "url": "https://commons.wikimedia.org/wiki/File:Kumano_Kodo_8.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "kumano-kodo-nakahechi-6.jpg",
        "artist": "KMR",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons - Kita-Shinmachi signpost, Kii-Tanabe",
        "url": "https://commons.wikimedia.org/wiki/File:Kita-Shinmachi_signpost_%28Tanabe%2C_Wakayama%29.JPG",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "west-highland-way": {
    "slug": "west-highland-way",
    "vibe": "Scotland's first long-distance trail runs from the edge of Glasgow over the Highland Boundary Fault and out into the wild west Highlands, and the mood shifts with it: first the loch-side inns of Loch Lomond, then the road narrows into glens, old military roads and open moorland. Every night ends in a Highland village — a warm pub with a local band, a B&B with a big breakfast, and a bagpipe band or fiddle somewhere in the background. The middle stretch is pure wilderness: Rannoch Moor's bogs under a big sky, the Devil's Staircase plunge out of Glen Coe, and whisky country near Drymen where the Glengoyne distillery sits just off the trail. Expect four seasons in a day, hungry midges north of Rowardennan, and a finishing pint by the 'Sair Feet' statue in Fort William.",
    "towns": [
      {
        "name": "Rowardennan",
        "vibe": "A scatter of inns and chalets at the end of the road on Loch Lomond's east shore, with Ben Lomond's shoulder rising straight behind the village and 23 miles of water running south. On clear mornings the loch shimmers under a sky full of hillwalkers, and the ferry bell across to Tarbet is the village's rhythm. It's the last easy stop before the trail gets wild: gulls, loch wind, campfires and walkers loosening up after a day on the path.",
        "highlights": [
          "Ben Lomond base camp",
          "Loch Lomond ferry to Tarbet",
          "Loch-side inns and B&Bs",
          "End-of-the-road feel"
        ]
      },
      {
        "name": "Tyndrum",
        "vibe": "A crossroads village where the road to Glencoe meets the road to Fort William, split by two small railway stations a mile apart. Rannoch Moor's hills rise directly ahead, and the air smells of heather, diesel and wet wool. It's the threshold of the Highlands — the last proper shop before the 28-mile gap to Kinlochleven and the last easy stop before the moors begin.",
        "highlights": [
          "Crossroads of the Highlands",
          "Two stations, a mile apart",
          "Last shop before the moors",
          "Rannoch Moor on the horizon"
        ]
      },
      {
        "name": "Kinlochleven",
        "vibe": "A fjord-like loch ends here at a village built for an aluminium smelter — the first village in the world where every house had electricity. The Mamores close in on three sides, the tailrace still runs hard past the Tailrace Inn, and the air keeps a mineral edge from the old works. After the Devil's Staircase plunge it feels like another world: a warm pub, hot showers, stags wandering the street.",
        "highlights": [
          "'The Electric Village'",
          "Head of fjord-like Loch Leven",
          "Grey Mare's Tail waterfall",
          "Aluminium smelter story",
          "Tailrace Inn on the river"
        ]
      },
      {
        "name": "Fort William",
        "vibe": "The Way ends on the High Street at a bronze figure of a tired walker with sore feet, Ben Nevis — the UK's highest mountain — looming over town while the loch opens to ferries for the islands. It's a busy, lively Highland town: whisky bars, hillwalkers in the morning and Jacobite ghosts in the old fort. You finish with a celebratory pint and a plan for the mountain.",
        "highlights": [
          "Ben Nevis above town",
          "The 'Sair Feet' finish line",
          "Whisky bars and Highland pubs",
          "Ferries to the islands"
        ]
      }
    ],
    "photos": [
      {
        "file": "west-highland-way-1.jpg",
        "artist": "Steve Partridge",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Rowardennan Lodge, Loch Lomond.jpg",
        "url": "https://commons.wikimedia.org/wiki/Rowardennan_Lodge,_Loch_Lomond.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "west-highland-way-2.jpg",
        "artist": "kevin rothwell",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Tyndrum.jpg",
        "url": "https://commons.wikimedia.org/wiki/Tyndrum.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "west-highland-way-3.jpg",
        "artist": "Peter Smyly",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Kinlochleven at the head of Loch Leven - geograph.org.uk - 1044910.jpg",
        "url": "https://commons.wikimedia.org/wiki/Kinlochleven_at_the_head_of_Loch_Leven_-_geograph.org.uk_-_1044910.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "west-highland-way-4.jpg",
        "artist": "Kyle Macintyre",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — View of Fort William - geograph.org.uk - 508958.jpg",
        "url": "https://commons.wikimedia.org/wiki/View_of_Fort_William_-_geograph.org.uk_-_508958.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "west-highland-way-5.jpg",
        "artist": "Richard Webb",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Rannoch Moor - geograph.org.uk - 1353468.jpg",
        "url": "https://commons.wikimedia.org/wiki/Rannoch_Moor_-_geograph.org.uk_-_1353468.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "west-highland-way-6.jpg",
        "artist": "David Dixon",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Volunteer Arms, Fort William High Street - geograph.org.uk - 3909269.jpg",
        "url": "https://commons.wikimedia.org/wiki/Volunteer_Arms,_Fort_William_High_Street_-_geograph.org.uk_-_3909269.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "pennine-way": {
    "slug": "pennine-way",
    "vibe": "The Pennine Way walks 431 km along the backbone of England, from the gritstone moors of the Peak District to the wilder fells of the Cheviots, ending at Kirk Yetholm just inside the Scottish border. Every stage ends in a village — a real-ale pub, a Dales B&B, a kitchen that knows what sore legs need — and every morning starts on open moorland where sun, rain and drizzle all take their turn within the hour. It is a 19-day commitment: gritstone edges and limestone pavements, long open fell climbs, and Cross Fell at 893 m as the big one. By the second week the weather stops being a nuisance and becomes the whole point of the walk.",
    "towns": [
      {
        "name": "Edale",
        "vibe": "The walk starts at the Old Nag's Head, an old smithy at the mouth of the Vale of Edale, where the River Noe cuts a green cleft through the gritstone. Mam Tor and the dark plateau of Kinder Scout loom over the village, announcing the kind of fells that lie ahead. It is a proper walking village: a stream running through the middle, two real-ale pubs, and the smell of wet stone and heather in the morning air.",
        "highlights": [
          "Official start at the Old Nag's Head",
          "Mam Tor and Kinder Scout skyline",
          "Vale of Edale gritstone country",
          "Two real-ale pubs by the River Noe",
          "Rail link to Sheffield and Manchester"
        ]
      },
      {
        "name": "Malham",
        "vibe": "Malham is the Dales in full voice: dry-stone walls closing in around the village, Malham Beck babbling between flagstones, and the limestone pavement crunching underfoot like a giant flagstone floor. A short climb brings you to Malham Cove, a great curve of bare limestone the river once carved through solid rock. Evenings mean B&B food and a pub, while the weather keeps doing its four-seasons-in-an-hour routine.",
        "highlights": [
          "Malham Cove, a cliff of bare limestone",
          "Limestone pavement, an ancient riverbed",
          "Malham Tarn high on the fell",
          "Gordale Scar and Janet's Foss",
          "Dry Valley, gills without water"
        ]
      },
      {
        "name": "Keld",
        "vibe": "Keld sits at the very top of Swaledale, a scatter of stone cottages and lead-miner's buildings below Great Shunner Fell, where the Pennine Way crosses the Coast to Coast. Its claim to fame is the fell café, where walkers arrive with wrecked legs and a need for the largest pot of tea in England. Waterfalls run through the limestone gorge beside the River Swale, and the air smells of wet grass and heather.",
        "highlights": [
          "Pennine Way meets Coast to Coast",
          "Famous fell café after a big climb",
          "Kisdon Force waterfalls in a gorge",
          "Great Shunner Fell rising above",
          "Lead-mining cottages and old school museum"
        ]
      },
      {
        "name": "Hawes",
        "vibe": "Hawes is the Dales' proper market town at the head of Wensleydale: stone terraces, a Tuesday market running since 1699, and the smell of fresh Wensleydale cheese from the creamery that has made it for centuries. The Pennine Way drops off Dodd Fell into the main street, where tearooms, pubs and the Dales Countryside Museum await. It is the kind of place where walkers refuel on cheese, pies and a second pint before heading back out onto the fells.",
        "highlights": [
          "Tuesday market town since 1699",
          "Wensleydale creamery and its cheese",
          "Dales Countryside Museum",
          "Pubs, tearooms and a hostel",
          "Foot of Dodd Fell's moors"
        ]
      }
    ],
    "photos": [
      {
        "file": "pennine-way-1.jpg",
        "artist": "Glyn Weekes",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Mam Tor and the Vale of Edale, looking up the dale from the Pennine Way",
        "url": "https://commons.wikimedia.org/wiki/File:Mam_Tor_and_the_Vale_of_Edale_-_geograph.org.uk_-_1547661.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "pennine-way-2.jpg",
        "artist": "Dbenbenn (assumed, based on copyright claims)",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — Malham Cove, the limestone cliff above Malham village",
        "url": "https://commons.wikimedia.org/wiki/File:Malham_Cove.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "pennine-way-3.jpg",
        "artist": "Colin Smith",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Malham Cove limestone pavement, the ancient riverbed",
        "url": "https://commons.wikimedia.org/wiki/File:Malham_Cove_-_Limestone_Pavement_-_geograph.org.uk_-_7281749.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "pennine-way-4.jpg",
        "artist": "The joy of all things",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — Keld looking westwards, the fell-side village at the top of Swaledale",
        "url": "https://commons.wikimedia.org/wiki/File:Keld_looking_westwards.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "pennine-way-5.jpg",
        "artist": "Richard Slessor",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Market Day in Hawes, the Wensleydale market town",
        "url": "https://commons.wikimedia.org/wiki/File:Market_Day_in_Hawes_-_geograph.org.uk_-_315120.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "pennine-way-6.jpg",
        "artist": "Dave Kelly",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — The Pennine Way at Cross Fell, the route's high point at 893 m",
        "url": "https://commons.wikimedia.org/wiki/File:The_Pennine_Way_at_Cross_Fell_-_geograph.org.uk_-_7297562.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "juliana-trail": {
    "slug": "juliana-trail",
    "vibe": "A 270 km circuit around the foot of Triglav National Park that never climbs over the top: emerald river valleys, postcard lakes and real villages at the end of every stage. The Soča valley runs on its own water colour — boats, fishing and rafting follow the river from Bovec to Kobarid. In the Kanin region the silence of the WWI Caporetto battlefields underpins the calm, while the Bled–Bohinj side feels like a long summer afternoon: cream cake by the lakeside and pletna boats gliding past a little island church.",
    "towns": [
      {
        "name": "Lake Bled",
        "vibe": "Slovenia's most famous postcard: a small glacial lake ringed by steep slopes, a red-roofed castle on a rocky promontory and a little island where the white church's bell is rung for good luck. The air smells of the kremšnita every café bakes, and the water is warm enough to swim in summer. Arriving along the trail from forested hills, the whole valley feels like a long exhale.",
        "highlights": [
          "Bled cream cake (kremšnita)",
          "Island church and wishing bell",
          "Castle on the lake cliffs",
          "Pletna boat ride to the island",
          "Vintgar Gorge boardwalk"
        ]
      },
      {
        "name": "Bovec",
        "vibe": "Gateway to the Soča valley, where the river's emerald colour is the whole identity — kayaks on the pebble banks, trout in the cold water, rapids audible from the bridge. The old Austro-Hungarian Kluže fortress on the hill above town keeps the Isonzo war memory alive. Evenings are spent on the riverfront promenade, watching the last light on the water.",
        "highlights": [
          "Turquoise Soča river",
          "Kayaks and rafting",
          "Soča river trout",
          "Kluže fortress on the hill",
          "Soča Stories walking routes"
        ]
      },
      {
        "name": "Kobarid",
        "vibe": "A small red-roofed town on the Soča and one of Europe's great WWI places — the Battle of Caporetto nearly destroyed it, and the museum on the square keeps the memory. The old Napoleon Bridge crosses the river with the mountain behind it, and a white Italian ossuary stands above town. The kitchens here are pure Goriška: thick jota, river trout and world-class Hiša Franko.",
        "highlights": [
          "WWI Caporetto museum",
          "Napoleon Bridge over the Soča",
          "Italian ossuary above the town",
          "Jota, the thick porridge",
          "Hiša Franko tasting menu",
          "Koseč Gorge canyons"
        ]
      },
      {
        "name": "Mojstrana",
        "vibe": "A quiet village in the upper Sava valley where the Vrata valley leads straight to the huge north face of Triglav. Its name may tie to the berries of the meadows, and the village feels just that: wild strawberries, a giant walnut tree and a small Alpine museum at the start of many classic routes into the Julian Alps. On a clear day Triglav hangs over the rooftops all afternoon.",
        "highlights": [
          "Triglav's north face",
          "Vrata valley approach",
          "Slovenian Alpine Museum",
          "Peričnik Falls",
          "St. Clement's old church"
        ]
      }
    ],
    "photos": [
      {
        "file": "juliana-trail-1.jpg",
        "artist": "Krzysztof Golik",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — File:Bled Island & Bled Castle (1).jpg (Bled island, church and castle on Lake Bled)",
        "url": "https://commons.wikimedia.org/wiki/File:Bled_Island_%26_Bled_Castle_%281%29.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "juliana-trail-2.jpg",
        "artist": "Bex Walton from London, England",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons — File:Bled cream cake (48700834723).jpg (Bled cream cake slice, lake behind)",
        "url": "https://commons.wikimedia.org/wiki/File:Bled_cream_cake_(48700834723).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "juliana-trail-3.jpg",
        "artist": "MarcusObal",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — File:Soča River.JPG (turquoise Soča with kayaks on a pebble bank)",
        "url": "https://commons.wikimedia.org/wiki/File:So%C4%8Da_River.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "juliana-trail-4.jpg",
        "artist": "Stephen Colebourne from London, UK",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons — File:Kobarid town view.jpg (Kobarid town with church tower, fields and mountains)",
        "url": "https://commons.wikimedia.org/wiki/File:Kobarid_town_view.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "juliana-trail-5.jpg",
        "artist": "Stefano",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — File:WW1 cannon in Kobarid.jpg (WWI field gun on a Kobarid street)",
        "url": "https://commons.wikimedia.org/wiki/File:WW1_cannon_in_Kobarid.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "juliana-trail-6.jpg",
        "artist": "Unknown (no author credit on Commons)",
        "license": "Public domain",
        "source": "Wikimedia Commons — File:Mojstrana.JPG (Mojstrana village with Triglav massif behind)",
        "url": "https://commons.wikimedia.org/wiki/File:Mojstrana.JPG",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "via-engiadina": {
    "slug": "via-engiadina",
    "vibe": "A 100 km-long high valley where the Inn flows above 1,000 m the whole way, the Engadin still feels unhurried: wide alpine meadows, painted sgraffito farmhouses, free-flowing fountains, and a car-light culture where the bus and the red Rhaetian Railways train move you faster than any car. Romansh-speaking villages keep their own traditions alive - the winter Schlittéda sleigh ride, the walnut Bundner Nusstorte on every table. In July the Maloja Music Festival fills the pass village with folk and modern music from Switzerland, Italy and Austria, and hikers finishing the Via Engiadina end with the pass's legendary three-countries tea.",
    "towns": [
      {
        "name": "St. Moritz",
        "vibe": "Switzerland's original grand resort, perched at 1,800 m on the shore of Lake St. Moritz: a wide lakeside promenade, Belle Époque hotels, and the polished ease of a town that hosted the Winter Olympics twice (1928, 1948). In summer the glamour softens into a quiet lakeside town of swimmers, boat rides and long alpine evenings. The village of Samedan, with its broad meadows, is just ten minutes away.",
        "highlights": [
          "Grand Belle Époque lakeside resort",
          "Olympic host of 1928 and 1948",
          "Boat rides on Lake St. Moritz",
          "Samedan's wide alpine meadows"
        ]
      },
      {
        "name": "Scuol",
        "vibe": "The spa and craft town of the Lower Engadin, where the valley narrows between the jagged Engadine Dolomites. Roman baths (Bogn Engiadina) sit beside medieval stone towers wrapped into 1753 farmhouses, and the glassy Swiss Craft Center of Herzog & de Meuron floats right on the Inn's bank. It's the trail's cheat code: climb the Motta Naluns ridge high, then take the gondola down and soak.",
        "highlights": [
          "Swiss Craft Center on the Inn",
          "Castel Corna hilltop castle",
          "Bogn Engiadina thermal baths",
          "Gondola descent from Motta Naluns"
        ]
      },
      {
        "name": "Zernez",
        "vibe": "A car-free village where the valley tightens to a gorge and the Inn runs wild - the oldest settlement in the Engadin, documented since 1131. A short walk up the ridge, the Petra Vorda rock carvings cover a cliff face with figures some 5,000 years old, older than any village in the valley. Free fountains, sgraffito walls, and the Swiss National Park's entrance right on the doorstep.",
        "highlights": [
          "Car-free village on the Inn",
          "Petra Vorda's 5,000-year-old rock carvings",
          "Oldest settlement in the Engadin",
          "Gateway to the Swiss National Park"
        ]
      },
      {
        "name": "Maloja / Grevasalvas",
        "vibe": "The Via Engiadina ends where two countries meet: the Maloja Pass at 1,815 m, source of the Inn, looking down into the green, Italian-speaking Bregaglia. Below the pass, Grevasalvas is a village of chestnut groves and orchards, and up the ridge sits the Pila Monastery, a 12th-century Romanesque church whose monks still brew the famous local beer. Finish with three-countries tea at the pass.",
        "highlights": [
          "Where the Engadin meets the Bernina",
          "Italian-speaking Bregaglia descent",
          "Pila Monastery's Romanesque church",
          "Three-countries tea at the pass"
        ]
      }
    ],
    "photos": [
      {
        "file": "via-engiadina-1.jpg",
        "artist": "Isiwal",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons - Lake St. Moritz with Piz Muragl",
        "url": "https://commons.wikimedia.org/wiki/File:Sankt_Moritz_Lake_Piz_Muragl.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "via-engiadina-2.jpg",
        "artist": "Joachim Kohler",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons - Engadine house and wooden well, Guarda",
        "url": "https://commons.wikimedia.org/wiki/File:Engadinerhaus_und_h%C3%B6lzener_Brunnen_in_Guarda.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "via-engiadina-3.jpg",
        "artist": "paul bica",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons - Maloja Pass, west view",
        "url": "https://commons.wikimedia.org/wiki/File:Malojapass_West_(14319678044).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "via-engiadina-4.jpg",
        "artist": "Adrian Michael",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons - Val Bregaglia",
        "url": "https://commons.wikimedia.org/wiki/File:Val_Bregaglia.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "via-engiadina-5.jpg",
        "artist": "Agnes Monkelbaan",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons - Wooden bridge over the Inn, Scuol",
        "url": "https://commons.wikimedia.org/wiki/File:Scuol,_Holzbr%C3%BCcke_%C3%BCber_den_Inn._11-10-2024._(actm.)_01.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "via-engiadina-6.jpg",
        "artist": "Sandstein",
        "license": "CC BY 3.0",
        "source": "Wikimedia Commons - Engadiner Nusstorte",
        "url": "https://commons.wikimedia.org/wiki/File:Engadiner_Nusstorte.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "lechweg": {
    "slug": "lechweg",
    "vibe": "A lazy, flat river-walk from an alpine source into Bavaria: the Lech flows from its spring near Formarinsee down through Vorarlberg and into the Allgäu, and you follow it the whole way — meadows with cattle, cool side creeks for a dip, and a castle or two on the way past. It's the kind of trail where the effort is the least interesting thing: Vorarlberg and Allgäu food (Bergkäse, white sausage, schnitzel, cold beer) at nearly every stop, a village or town at every stage end, and a finale with two fairy-tale castles looming overhead. Easy, green, and gloriously un-strenuous.",
    "towns": [
      {
        "name": "Bludenz",
        "vibe": "The first real town of the route, tucked where five valleys meet at the edge of the Rhine valley. A compact old town around the 18th-century Gayenhofen castle, a gorge-cut Ill, and strong Alpine Club and ski-country roots give it a lively alpine-sports-town feel. A good place to refill after the descent from the source plateau.",
        "highlights": [
          "Meets at five valleys",
          "Gateway to the Rhine valley",
          "Gayenhofen castle (18th c.)",
          "Alpine Club heritage, est. 1873",
          "Fohrenburger beer brewed since 1881"
        ]
      },
      {
        "name": "Feldkirch",
        "vibe": "Vorarlberg's best-preserved medieval old town, laid out on a tidy grid and unchanged for centuries, with the 12th-century Montfort Schattenburg crowning the roofs above it. Gothic cathedral, timber-framed market street, and a James Joyce story (he worked on Finnegans Wake here in 1932). Right on the Liechtenstein border — Austria's westernmost point sits on the Rhine just outside town.",
        "highlights": [
          "Schattenburg above the old town",
          "Best-preserved medieval grid in Vorarlberg",
          "Gothic St. Nikolaus cathedral",
          "On the Liechtenstein border",
          "James Joyce connection (1932 stay)"
        ]
      },
      {
        "name": "Lindau",
        "vibe": "An island city on Lake Constance — the most 'proper town' stop of the whole walk, reached by a single bridge into a compact old town of half-timbered houses and a lively market square. Yachts and lake ferries fill the harbour; sit on the water's edge with a Weißbier and watch the Austrian and Swiss shores across the water. A lazy lake afternoon is exactly what day 3 calls for.",
        "highlights": [
          "Island city on Lake Constance",
          "Harbour full of yachts and ferries",
          "Half-timbered old town, Marktplatz",
          "Bavarian lion at the harbour mouth",
          "Austria and Switzerland across the lake"
        ]
      },
      {
        "name": "Füssen",
        "vibe": "The finish: a small Bavarian town at the foot of the Ammergau Alps where the Lech tumbles out of a dam into a narrow gorge — the Lechfall — and where the old town's medieval lanes and baroque St. Mang monastery sit beneath the two Ludwig II castles. It's also Germany's violin-making town and the southern end of the Romantic Road. End the week with a cold beer and the roar of the falls.",
        "highlights": [
          "Lechfall rapids at the finish",
          "Neuschwanstein and Hohenschwangau overhead",
          "Baroque St. Mang monastery",
          "Famous violin-making town",
          "Southern end of the Romantic Road"
        ]
      }
    ],
    "photos": [
      {
        "file": "lechweg-1.jpg",
        "artist": "Ximonic, Simo Räsänen (post-processing) & Tauno Räsänen",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Neuschwanstein_Castle_from_Marienbrücke,_2011_May.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "lechweg-2.jpg",
        "artist": "Tuxyso",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Lechfall-Füssen-02-2025.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "lechweg-3.jpg",
        "artist": "gsigsi",
        "license": "CC BY 2.5",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Bludenz_overview.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "lechweg-4.jpg",
        "artist": "Norbert Kaiser",
        "license": "CC BY-SA 3.0 at",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Feldkirch_(Vorarlberg)_-_Marktplatz_(03-2).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "lechweg-5.jpg",
        "artist": "Julian Herzog (Website)",
        "license": "CC BY 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Lindau_Harbor_Lake_Constance_MS_Schwaben_01.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "lechweg-6.jpg",
        "artist": "Silar",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:02018_0271_6th_ECOstyl_Fair,_Baldauf_Käse,_Allgäu.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "cotswold-way": {
    "slug": "cotswold-way",
    "vibe": "England's most famous walk, and it genuinely looks like the postcard: honey-stone villages stacked on quiet hills, sheep drifting between hedgerow fences, and flower-boxed streets at the end of every stage. Days end in pub gardens and cream teas, with an inn or B&B waiting in every village. There is no drama here, just slow, golden England rolling from the Roman city of Bath up to the northern edge of the hills that gave the region its name.",
    "towns": [
      {
        "name": "Bath",
        "vibe": "The trail begins in a Roman bathing city, its pale Georgian terraces glowing in the evening light. The Roman Baths still steam beside the abbey, and covered bridges and canals make the whole place feel like a film set. Grand, but easy to wander out of and onto the hill path.",
        "highlights": [
          "Georgian honey-stone terraces",
          "The Roman Baths",
          "Royal Crescent",
          "Pulteney Bridge over the Avon",
          "UNESCO World Heritage City"
        ]
      },
      {
        "name": "Winchcombe",
        "vibe": "A honey-stone market village tucked against the flank of Cleeve Hill, with the Neolithic long barrow of Belas Knap sleeping in its fields. The high street is a scatter of tea rooms and small shops, and the climb to the route's high point starts at the village edge. Quiet, pastoral, and arguably the most 'Cotswold' village on the trail.",
        "highlights": [
          "At the foot of Cleeve Hill",
          "Belas Knap long barrow",
          "Honey-stone market village",
          "Tea rooms on the high street"
        ]
      },
      {
        "name": "Stow-on-the-Wold",
        "vibe": "The classic Cotswold postcard: a honey-stone market town perched on a hilltop crossroads, its square ringed by flower boxes and tea rooms, open fields rolling away in every direction. The old rhyme calls it 'where the winds blow cold', and on a breezy day you'll believe it. After Cleeve Hill, the walk into the square is the route's most rewarding bit of flat ground.",
        "highlights": [
          "The postcard market square",
          "Hilltop crossroads on the old Fosse Way",
          "Horse fair twice a year",
          "Tea rooms around the square"
        ]
      },
      {
        "name": "Chipping Campden",
        "vibe": "The trail's namesake and its most famous finish: a medieval wool town whose terraced High Street still wears its 14th- to 17th-century honey stone. The 1627 Market Hall, the grand wool church of St James, and the Morris-dancing Cotswold Games all belong here. You end the week exactly where the Cotswolds earned their name.",
        "highlights": [
          "The terraced medieval High Street",
          "The 1627 Market Hall",
          "St James' wool church",
          "The Cotswold Olimpick Games"
        ]
      }
    ],
    "photos": [
      {
        "file": "cotswold-way-1.jpg",
        "artist": "Charlesdrakew",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Stow-on-the-Wold.JPG",
        "provider": "commons",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Stow-on-the-Wold.JPG",
        "safeForPublic": true
      },
      {
        "file": "cotswold-way-2.jpg",
        "artist": "Derek Harper",
        "license": "CC BY-SA 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:High_Street,_Chipping_Campden_-_geograph.org.uk_-_7343235.jpg",
        "provider": "commons",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/High_Street%2C_Chipping_Campden_-_geograph.org.uk_-_7343235.jpg/1920px-High_Street%2C_Chipping_Campden_-_geograph.org.uk_-_7343235.jpg",
        "safeForPublic": true
      },
      {
        "file": "cotswold-way-3.jpg",
        "artist": "Bärbel Miemietz",
        "license": "CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:2023-09-15_Bath_Royal_Crescent_03.jpg",
        "provider": "commons",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/2023-09-15_Bath_Royal_Crescent_03.jpg/1920px-2023-09-15_Bath_Royal_Crescent_03.jpg",
        "safeForPublic": true
      },
      {
        "file": "cotswold-way-4.jpg",
        "artist": "Andy Li",
        "license": "CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Classic_cream_tea_-_Nymans_Garden_Riding_House.jpg",
        "provider": "commons",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Classic_cream_tea_-_Nymans_Garden_Riding_House.jpg/1920px-Classic_cream_tea_-_Nymans_Garden_Riding_House.jpg",
        "safeForPublic": true
      },
      {
        "file": "cotswold-way-5.jpg",
        "artist": "Philip Halling",
        "license": "CC BY-SA 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Rolling_Cotswolds_landscape_-_geograph.org.uk_-_8380559.jpg",
        "provider": "commons",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Rolling_Cotswolds_landscape_-_geograph.org.uk_-_8380559.jpg",
        "safeForPublic": true
      },
      {
        "file": "cotswold-way-6.jpg",
        "artist": "Ian S",
        "license": "CC BY-SA 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Walking_towards_Corndean_Lane_-_geograph.org.uk_-_3428733.jpg",
        "provider": "commons",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/11/Walking_towards_Corndean_Lane_-_geograph.org.uk_-_3428733.jpg",
        "safeForPublic": true
      }
    ]
  },
  "dingle-way": {
    "slug": "dingle-way",
    "vibe": "The Dingle Way walks the whole length of Ireland's most famous 'end of the world' — the Dingle Peninsula, Corca Dhuibhne in Irish, ending at Dunmore Head, the westernmost point of mainland Ireland. It's 152 km of Atlantic fishing-town culture: Dingle's pastel-painted streets, Ballyferriter's surf beaches, quiet Gaeltacht hamlets under the purple ridgeline of Mount Brandon, and high north-coast cliffs above the sweep of Brandon Bay. Every stage ends in a village with a pub, and evenings bring trad sessions in back rooms while the food is sea chowder and the day's catch — scallops, langoustines, cod, local salmon. Grand in scale like the TMB, but at sea level: cliff walks, golden strands, and the Atlantic doing all the theatre.",
    "towns": [
      {
        "name": "Dingle",
        "vibe": "The working fishing town with the peninsula's loudest personality: the harbour full of trawlers and kayaks, and pastel-painted lanes where pubs, record shops and seafood bars sit side by side. Evenings smell of salt and turf smoke, and trad sessions start unprompted in small pubs — fiddle, tin whistle, another round. Sea chowder and the day's catch come straight off Dingle's boats, with the Skelligs sitting out in the bay on a clear day.",
        "highlights": [
          "Fishing harbour, fresh off the boats",
          "Sea chowder and seafood bars",
          "Evening trad sessions in small pubs",
          "Pastel-painted Main Street and Strand Street",
          "Skelligs off the bay"
        ]
      },
      {
        "name": "Ballyferriter",
        "vibe": "A quiet Gaeltacht village at the foot of Croaghmarhin Hill, where the Irish you hear in the street is the real one — most locals speak it daily. In summer it becomes a surfing village: Clogher Beach, a big exposed sandbank off Smerwick Bay, fills with surfers when the Atlantic sends a set. Three pubs, a microbrewery and a summer influx of Irish-language students give it a relaxed, half-holiday feel.",
        "highlights": [
          "Clogher Beach surf",
          "Irish spoken in the street",
          "West Kerry microbrewery",
          "Smerwick Harbour and headland",
          "Three pubs, one hotel"
        ]
      },
      {
        "name": "Dunmore",
        "vibe": "The quiet heart of the north side: stone cottages and one well-used pub under the eastern shoulder of Mount Brandon. It's the village where the loop turns the corner — past the Brandon saddle, the coast opens out towards Dunmore Head, the westernmost point of mainland Ireland, with the Blasket Islands out in the Atlantic. Evenings are slow here: a pint, a pie, and the sea at the foot of the cliffs.",
        "highlights": [
          "Dunmore Head, west tip of Ireland",
          "Blasket Islands off the head",
          "Quiet pub under Mount Brandon",
          "Open farmland and boreens"
        ]
      },
      {
        "name": "Farranholts",
        "vibe": "A tiny cliff-coast hamlet on the R560, where the road makes its famous S-bends between coves and beaches with the Brandon ridge towering overhead. In summer the surf at Fermoyle and Kilcummin can be heard from the road, and the Seven Hogs islets sit off the Magharee on a clear day. Postcard Kerry: stone cottages, a lone B&B, and the Atlantic roaring under the cliffs.",
        "highlights": [
          "North-coast cliffs and S-bends",
          "Fermoyle and Kilcummin beaches",
          "Seven Hogs islets offshore",
          "Brandon ridge looming overhead"
        ]
      }
    ],
    "photos": [
      {
        "file": "dingle-way-1.jpg",
        "artist": "Pam Brophy",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Dingle harbour quayside, trawlers on the quay",
        "url": "https://commons.wikimedia.org/wiki/File:Quayside_view_of_Dingle_Harbour_-_geograph.org.uk_-_16557.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "dingle-way-2.jpg",
        "artist": "David Dixon",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Strand Street, Dingle's main street at the end of the Slea Head Drive",
        "url": "https://commons.wikimedia.org/wiki/File:Strand_Street,_Dingle_-_The_end_of_the_Slea_Head_Drive_-_geograph.org.uk_-_6242820.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "dingle-way-3.jpg",
        "artist": "David Dixon",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Main Street, Ballyferriter village",
        "url": "https://commons.wikimedia.org/wiki/File:Main_Street,_Ballyferriter_Village_-_geograph.org.uk_-_6316859.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "dingle-way-4.jpg",
        "artist": "Ridiculopathy",
        "license": "CC0",
        "source": "Wikimedia Commons — Clogher Beach, the surf beach near Ballyferriter",
        "url": "https://commons.wikimedia.org/wiki/File:Clogher_Beach,_Dingle_Peninsula,_Co_Kerry_01.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "dingle-way-5.jpg",
        "artist": "Maoileann",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — Mount Brandon, crossed over the saddle at Annamaria",
        "url": "https://commons.wikimedia.org/wiki/File:Mount_Brandon-1014040,_Dingle_Peninsula,_Co._Kerry,_Ireland.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "dingle-way-6.jpg",
        "artist": "acediscovery",
        "license": "CC BY 4.0",
        "source": "Wikimedia Commons — Dunmore Head, westernmost point of mainland Ireland",
        "url": "https://commons.wikimedia.org/wiki/File:Dunmore-Head.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "gr20": {
    "slug": "gr20",
    "vibe": "The first half of the GR20 climbs from the Calenzana foothills past Asinu to the 2,600 m exposed granite ridges, with a refuge at every stage: half-board dinners of pasta, brocciu and coppa, local chestnut beer, and long dorm-room evenings. It is the most independent corner of France — maquis gives way to open scree at altitude, mountain villages keep long midday siestas, and the Corsican language still outlives French in auberges and hamlets. Hard underfoot and deeply social: hikers from all over trade scree-and-fog war stories over fiadone at Tighjettu, Manganu or Vizzavona before the next 2,500 m day.",
    "towns": [
      {
        "name": "Calvi",
        "vibe": "The start area sits below a white Genoese citadel that hovers over the bay, with sun-baked cobbles and the smell of salt and drying herbs in the lanes. In the shade of the old town, locals linger over coffee and pastis while the marina fills with creaking boats. Climb the endless steps at sunset and the whole bay lights up — a long, warm evening that ends late.",
        "highlights": [
          "Genoese citadel above the walled old town",
          "Sunset from the citadel walls",
          "Marina tables, pastis and grilled fish",
          "Calvi's infamous summer winds"
        ]
      },
      {
        "name": "Ajaccio",
        "vibe": "Corsica's capital is loud and sun-drenched: a deep natural harbour, a seafront boardwalk where cruise passengers mix with market sellers, and the smell of oranges from the Marcatu. Napoleon was born here in 1769, and his family names the boulevards. Evenings stretch out on the quay with a glass of rosé while the hilltop cathedral watches the bay.",
        "highlights": [
          "Maison Bonaparte, Napoleon's birthplace",
          "Marcatu d'Aiacciu street market",
          "Boulevard du Parmelan seafront boardwalk",
          "Cathedral on the hill above the bay",
          "Musée Fesch: Titian, Raphael, Botticelli"
        ]
      },
      {
        "name": "Vizzavona",
        "vibe": "At 900 m in the green gorge, the two halves of the GR20 meet at the island's single mountain crossroads: the railway junction where the train from Ajaccio or Bastia finally climbs out of the trees. Midday hums with hikers and passengers over espresso and charcuterie boards, then the village quiets under the shadow of Monte d'Oro.",
        "highlights": [
          "GR20 midpoint and train junction",
          "Cascade des Anglais swimming pools",
          "Monte d'Oro looming over the village",
          "Midday siesta under the pines"
        ]
      },
      {
        "name": "Corte",
        "vibe": "The highland capital perches beneath a triple-ringed citadel that locals call the Eagle's Nest. This is where Corsican identity lives: the museum of rural life, Pasquale Paoli's university, and a small slow town where the mountain light sharpens everything. Off the GR20, it is the island's cultural heart — chestnut flour, strong opinions, long lunches.",
        "highlights": [
          "Triple-level citadel, the Eagle's Nest",
          "Museu di a Corsica, rural life",
          "Paoli university in the old town",
          "Fiadone, the chestnut flour cake"
        ]
      }
    ],
    "photos": [
      {
        "file": "gr20-1.jpg",
        "artist": "Dirk Schmidt",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Island_corsica_harbour_and_citadel_Calvi_10_2017.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "gr20-2.jpg",
        "artist": "Jean-Pol GRANDMONT",
        "license": "CC BY 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Ajaccio_Cit%C3%A91JPG.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "gr20-3.jpg",
        "artist": "TeletubAstyanax",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Gare_de_Vizzavona.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "gr20-4.jpg",
        "artist": "Bj.schoenmakers",
        "license": "CC0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Citadelle_de_Corte,_Corte,_Corsica,_France.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "gr20-5.jpg",
        "artist": "Pierre Bona",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Brocciu_passu.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "gr20-6.jpg",
        "artist": "MartinThoma",
        "license": "CC0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Gr-20-tighiettu-ciottulu-di-i-mori-05.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "aiguilles-rouges-traverse": {
    "slug": "aiguilles-rouges-traverse",
    "vibe": "Four days in the world's most famous mountain valley, started the valley's own way — by cable car. The Flégère tram lifts you above the larches into the Aiguilles Rouges reserve, where Lac Blanc and Gouille Noire sit in granite bowls and Mont Blanc country fills every corner of the skyline. Mountain-hut nights, big open air by day, and a finale out onto the Vallée Blanche — the vast glacier beneath the Aiguille du Midi — before dropping down to Les Houches, the quiet village where the Tour du Mont Blanc traditionally ends.",
    "towns": [
      {
        "name": "Chamonix-Mont-Blanc",
        "vibe": "A broad, tree-lined main street runs straight toward Mont Blanc, flanked by cafés, mountaineering shops and the cable-car station. The Aiguille du Midi tram — the highest vertical cable car in the world — hums up to 3,842 m above the rooftops. Busy, international and buzzing: the birthplace of alpinism still carries real guide culture and après-ski energy.",
        "highlights": [
          "Mont Blanc looming over the main street",
          "Aiguille du Midi cable car",
          "Birthplace of alpinism, 1924 Winter Olympics",
          "Guide shops, cafés, après-ski buzz",
          "Vallée Blanche glacier beneath the Aiguille"
        ]
      },
      {
        "name": "Les Houches",
        "vibe": "Six kilometres up the valley and the resort noise fades: timber chalets, a little church, and the Arve running cool and loud through the centre. In summer the ski lifts stand still and the Kandahar World Cup downhill course quiets to a path in the forest. It is the Tour du Mont Blanc's traditional start-and-finish village — postcard calm with real alpine life.",
        "highlights": [
          "Tour du Mont Blanc start and finish",
          "Kandahar World Cup downhill course",
          "Timber chalets and the village church",
          "The valley's famous physics school",
          "Postcard calm above the Arve"
        ]
      },
      {
        "name": "Argentière",
        "vibe": "A hamlet of Chamonix at 1,252 m, where the Arve bends past fields and the Mont Blanc massif hangs right over the rooftops. From the classic Argentière viewpoint the mountain's south face fills the whole frame, and the Aiguilles Rouges guard the valley's head. A short hop up the valley road puts you at the Flégère lift that launches this traverse.",
        "highlights": [
          "Classic south-face view of Mont Blanc",
          "Aiguilles Rouges at the valley's head",
          "Fields, barns and the Arve's bend",
          "Gateway to the Flégère cable car"
        ]
      }
    ],
    "photos": [
      {
        "file": "aiguilles-rouges-traverse-1.jpg",
        "artist": "Rémih",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons – La Flégère @ Chamonix-Mont-Blanc.jpg",
        "url": "https://commons.wikimedia.org/wiki/File:La_Fl%C3%A9g%C3%A8re_%40_Chamonix-Mont-Blanc.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "aiguilles-rouges-traverse-2.jpg",
        "artist": "moi-même (Commons user)",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons – Chamonix (centre-ville).JPG",
        "url": "https://commons.wikimedia.org/wiki/File:Chamonix_(centre-ville).JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "aiguilles-rouges-traverse-3.jpg",
        "artist": "Florival fr",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons – Les Houches.jpg (village centre)",
        "url": "https://commons.wikimedia.org/wiki/File:Les_Houches.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "aiguilles-rouges-traverse-4.jpg",
        "artist": "Tiia Monto",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons – 2019 Argentière.jpg",
        "url": "https://commons.wikimedia.org/wiki/File:2019_Argent%C3%A8re.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "aiguilles-rouges-traverse-5.jpg",
        "artist": "Tiia Monto",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons – Lac Blanc panorama.jpg",
        "url": "https://commons.wikimedia.org/wiki/File:Lac_Blanc_panorama.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "aiguilles-rouges-traverse-6.jpg",
        "artist": "Tiia Monto",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons – Argentière - Aiguilles Rouges.jpg",
        "url": "https://commons.wikimedia.org/wiki/File:Argent%C3%A8re_-_Aiguilles_Rouges.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "the-feather-route": {
    "slug": "the-feather-route",
    "vibe": "Alta Via 2 with the climbing plucked out, so the whole trip feels like the Dolomites minus the gasping: eleven days of pure scenery where every scary ridge has a documented walk-around. The tone is South Tyrolean calm from the start — slow, well-ordered mornings in Bressanone, then Val Gardena's wood-shaving, design-forward craft culture — held together by full-board rifugio life and one proper hotel night on the Passo San Pellegrino plateau. It drops out of the high mountains into a 16th-century Venetian old town, so the finish lands in Feltre's Piazza Maggiore with the Dolomites still looming to the north.",
    "towns": [
      {
        "name": "Bressanone (Brixen)",
        "vibe": "The quiet old capital of South Tyrol, where a 10th-century cathedral and a 72-metre White Tower with its 43-bell carillon rise above cobblestone lanes, Tyrolean shutters and ivy. Everything feels unhurried — the town is the oldest in the province, and you start the hike at the foot of the Plose massif right beside it. A start that is all morning light and cathedral stone, with the mountains as backdrop rather than protagonist.",
        "highlights": [
          "10th-century cathedral, Troger frescoes",
          "White Tower 43-bell carillon",
          "Oldest town in South Tyrol",
          "Cobblestone lanes off the Domplatz",
          "Plose cable car starts day one"
        ]
      },
      {
        "name": "Ortisei (St. Ulrich)",
        "vibe": "The Ladin heart of Val Gardena, a village of larch and stone set in the valley's middle with the Sassolungo and Seceda towering over it. For over two centuries it has been an international centre of alpine woodcarving — sacred sculpture, workshops, an art school — so craft is woven into the whole place. Summer brings alpine meadows and a crisp, design-minded resort polish that no other valley quite matches.",
        "highlights": [
          "Two-century woodcarving tradition",
          "Museum Gherdëina sculpture collection",
          "Sassolungo and Seceda above the village",
          "Ladin-speaking Val Gardena",
          "Bronze Roman legionary by Moroder"
        ]
      },
      {
        "name": "Passo San Pellegrino / Campo Carlo del Prete",
        "vibe": "At 1,918 m the pass is a real crossroads where the Sella Group meets the Fassa and Feltre valleys, and a hotel-ski resort sits right at the top. This is the route's one hotel night: a proper bed and a panorama of Sella, Langkofel and Marmolada instead of a dormitory. In winter it's one of the Dolomites' great ski plateaus; in summer it's a quiet high plateau of larch slopes, pass air and long views.",
        "highlights": [
          "Hotel night at 1,918 m",
          "Sella Ronda loop crossroads",
          "Sella and Marmolada panorama",
          "Campo Carlo del Prete ski plateau",
          "Sella bypass arrives here"
        ]
      },
      {
        "name": "Feltre",
        "vibe": "A brick-and-stone Venetian hill town at the foot of the Dolomites, which Venice took in 1404 and was largely rebuilt after its 1509 destruction. The old town reads as one compact 16th-century ensemble — Piazza Maggiore with its Lion of St. Mark, the Palladian-porticoed Palazzo della Ragione, and the Torre dell'Orologio. The official Alta Via 2 ends 13 km upstream at Croce d'Aune, so Feltre is the natural place to celebrate.",
        "highlights": [
          "Piazza Maggiore, Lion of St. Mark",
          "Palladian Palazzo della Ragione",
          "Torre dell'Orologio clock tower",
          "Venetian town since 1404",
          "Dolomites looming to the north"
        ]
      }
    ],
    "photos": [
      {
        "file": "the-feather-route-1.jpg",
        "artist": "Rolf Kranz",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Brixen,_Panorama_(gro%C3%9F).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-feather-route-2.jpg",
        "artist": "Ymblanter",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Brixen_Domgasse_from_Domplatz.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-feather-route-3.jpg",
        "artist": "Wolfgang Moroder",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Urtij%C3%ABi_dal_pas_de_Pin%C3%ABi.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-feather-route-4.jpg",
        "artist": "Ake1827 (Italian Wikipedia)",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Passo_San_Pellegrino_Monzoni_Trevalli.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-feather-route-5.jpg",
        "artist": "Idéfix~commonswiki (assumed from copyright claims)",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:PassoSella0002.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-feather-route-6.jpg",
        "artist": "Tor91 (Italian Wikipedia)",
        "license": "Public domain",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Feltre_piazzamaggiore.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "the-soft-blanc": {
    "slug": "the-soft-blanc",
    "vibe": "Eight days of village-to-village walking around the Mont Blanc massif — the classic TMB loop of France, Italy and Switzerland, served in a gentler package. The trail climbs out of quiet alpine hamlets, crosses into Italy for a proper food stop in Courmayeur at the foot of the 4,810 m mountain, and still delivers the trip's high point at the Grand Col Ferret before slipping into the Swiss side. The signature move is the ending: instead of the exposed final push up to Le Brévent, you stroll across the lower Col du Passon and follow the valley home through Les Arbois to Les Houches. Same postcard scenery, three countries and one mountain — with the knees and nerves left intact.",
    "towns": [
      {
        "name": "Les Houches",
        "vibe": "A sleepy, postcard-perfect village wedged between the Arve river and the Aiguille du Goûter, where a handful of lanes and a small church are enough, and the Mont Blanc massif simply fills the valley the moment you look up. It is the quiet start and finish of the TMB: river water under the gorges, clean mountain air, and sore legs being rewarded with a glass of Savoyard wine.",
        "highlights": [
          "Start and finish of the TMB",
          "Diosaz gorge walk below the village",
          "Aiguille du Goûter looming over the lanes",
          "Quiet Savoyard lanes by the Arve"
        ]
      },
      {
        "name": "Les Contamines-Montjoie",
        "vibe": "Three valleys meet here — the Val Montjoie, the Vallée Blanche and the Chamonix valley — which is why the village is nicknamed the 'butterfly of the Alps.' Wooden houses cluster in a green bowl below Mont Blanc and the Dents du Midi, and because the TMB runs straight through the lanes, the whole village hums with hikers, mountain air and the smell of fresh bread.",
        "highlights": [
          "'Butterfly of the Alps' valley junction",
          "Village bowl below Mont Blanc",
          "TMB runs straight through the lanes",
          "Larch forests and the Dents du Midi"
        ]
      },
      {
        "name": "Courmayeur",
        "vibe": "The Italian side of Mont Blanc feels like a resort town that has dressed up for dinner: espresso bars and gelaterias line the main street, Aosta Valley plates make the long days worth it, and the 4,810 m mountain's south face stares straight down at the 1,224 m town. After two nights of refuges it hits different — a long meal, a glass of red, and a town that clearly knows how to eat.",
        "highlights": [
          "Mont Blanc's south face over the square",
          "Espresso bars and Aosta Valley tables",
          "The loop's big food and rest stop",
          "Mont Blanc Tunnel link to Chamonix"
        ]
      },
      {
        "name": "La Fouly",
        "vibe": "A tiny Swiss hamlet at 1,600 m in the Val Ferret, part of the Orsières municipality, where the trail creeps in from the Grand Col Ferret and the village is mostly a cluster of houses, a church and a few mountain cafés beneath the walls of Mont Dolent and the Tour Noir. Ultra-runners know it as the UTMB aid station, but for a hiker it feels like a quiet alpine pause — Swiss calm in the middle of the Mont Blanc massif.",
        "highlights": [
          "1,600 m pause in the Val Ferret",
          "Foot of Mont Dolent and Tour Noir",
          "Famous UTMB aid-station stop",
          "Swiss calm below the Mont Blanc massif"
        ]
      }
    ],
    "photos": [
      {
        "file": "the-soft-blanc-1.jpg",
        "artist": "Florival fr",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — Les Houches village, Haute-Savoie",
        "url": "https://commons.wikimedia.org/wiki/File:Les_Houches.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-soft-blanc-2.jpg",
        "artist": "Jean-Pol GRANDMONT",
        "license": "CC BY 3.0",
        "source": "Wikimedia Commons — Les Contamines-Montjoie village",
        "url": "https://commons.wikimedia.org/wiki/File:00_Les-Contamines-Montjoie_-_village.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-soft-blanc-3.jpg",
        "artist": "Francofranco56",
        "license": "Public domain",
        "source": "Wikimedia Commons — Courmayeur from Rifugio Torino",
        "url": "https://commons.wikimedia.org/wiki/File:Courmayeur_001.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-soft-blanc-4.jpg",
        "artist": "Avisadehh",
        "license": "CC0",
        "source": "Wikimedia Commons — Courmayeur street, Aosta Valley",
        "url": "https://commons.wikimedia.org/wiki/File:COURMAYEUR_STREET.%D7%A8%D7%97%D7%95%D7%91_%D7%91%D7%A7%D7%95%D7%A8%D7%9E%D7%90%D7%99%D7%95%D7%A8.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-soft-blanc-5.jpg",
        "artist": "Aaquilino",
        "license": "Public domain",
        "source": "Wikimedia Commons — La Fouly village, Orsières, Valais",
        "url": "https://commons.wikimedia.org/wiki/File:La_Fouly.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-soft-blanc-6.jpg",
        "artist": "Christian David",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — Église Saint-Bernard, Trient, Valais",
        "url": "https://commons.wikimedia.org/wiki/File:%C3%89glise_Saint-Bernard_de_Trient.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "the-smooth-haute": {
    "slug": "the-smooth-haute",
    "vibe": "Fourteen days of classic hut-to-hut alpine walking with the rough edges sanded off: big high-alpine days between cabanes and refuges, but with breather nights in real villages — first the Mont Blanc valley, then the Matterhorn valley. The route crosses the French-Swiss border and the whole character shifts with it, from the guide-town buzz of Chamonix and the wild Trient glaciers to the sun-lean pastures and raclette kitchens of the Valais. The finish is the best part: the Matterhorn rising out of the forest as you drop into Randa, then swinging across the 494-metre Charles Kuonen Bridge down to a car-free Zermatt where the only traffic is electric and the reward is a proper mountain celebration.",
    "towns": [
      {
        "name": "Chamonix-Mont-Blanc",
        "vibe": "The start town at the foot of Mont Blanc, where the air is cool and sharp, pine forest climbs straight off the main street, and the cafés fill early with climbers and hikers. Mont Blanc hovers over the valley end, the Mer de Glace glacier sits just up the road, and the Aiguille du Midi cable car whisks you above the clouds. Day one is easy: a short, flat walk up the valley to Argentière — a warm-up, not a workout.",
        "highlights": [
          "Aiguille du Midi cable car, 3,842 m",
          "First Winter Olympics, hosted 1924",
          "Main street cafés and guide offices",
          "Mer de Glace at the valley's end",
          "Easy first day up to Argentière"
        ]
      },
      {
        "name": "Argentière",
        "vibe": "The 'real' Mont Blanc village: quiet, church-centred and tucked at the head of the valley at 1,252 m, seven kilometres up from Chamonix. No resort bustle — just chalets, a small glacial lake, the Mont-Blanc Express train rattling past on its way over the border, and the Aiguilles hanging above the rooftops. Night one here means a proper village bed instead of a bunk.",
        "highlights": [
          "Head of the valley, 1,252 m",
          "Mont-Blanc Express train stop",
          "Lac d'Argentière at the village edge",
          "Argentière Glacier above the rooftops",
          "Classic TMB and Haute Route start"
        ]
      },
      {
        "name": "Randa",
        "vibe": "A handful of stone chalets and a white church in the middle of the forest, high in the Vispa valley. The Matterhorn dominates the whole view — from the breakfast window it fills the sky. After twelve days on the high route this is the bypass night: a real village bed in a car-free hamlet, with the 494-metre Kuonen Bridge a short walk down the valley.",
        "highlights": [
          "Matterhorn over the village roofline",
          "Car-free Valais hamlet, 425 residents",
          "Stone chalets and a white church",
          "Kuonen Bridge a walk away",
          "Glacier Express line passes through"
        ]
      },
      {
        "name": "Zermatt",
        "vibe": "The finish town: a car-free village at the very end of the Matter valley where the only traffic is silent electric cars and horse carriages, and the Matterhorn rises straight out of the main street. It feels like a celebration — raclette kitchens, mountain beer gardens, and a crowd that has been walking toward this view for two weeks. The famous Matterhorn face is close enough to touch, on the bank of the river.",
        "highlights": [
          "Car-free village, electric cars only",
          "Matterhorn 4,478 m above the village",
          "Raclette tables and Alpine beer gardens",
          "Glacier Express and Gornergrat cog railway",
          "1865 first ascent set off from here"
        ]
      }
    ],
    "photos": [
      {
        "file": "the-smooth-haute-1.jpg",
        "artist": "Robbie Shade",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/Chamonix_valley_and_Mont_Blanc.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-smooth-haute-2.jpg",
        "artist": "Tiia Monto",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/2019_Argenti%C3%A8re.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-smooth-haute-3.jpg",
        "artist": "Gemeinde Randa",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/Randa_im_Sommer.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-smooth-haute-4.jpg",
        "artist": "Alltheswissthings",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/View_of_Matterhorn_from_Zermatt_village%2C_Valais%2C_Switzerland.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-smooth-haute-5.jpg",
        "artist": "Simon Broccard",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/Charles_Kuonen_Suspension_Bridge.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-smooth-haute-6.jpg",
        "artist": "Arnaud 25",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/Raclette_009.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  },
  "the-sacred-loop": {
    "slug": "the-sacred-loop",
    "vibe": "Three days on the Nakahechi, the 'Camino of Japan' — a thousand-year-old pilgrim path threading silent cedar forest past stone ōji way-shrines, from steam-laced Yunomine Onsen to the thousand-shrine cedar cathedral of Kumano Hongū Taisha. The fourth day climbs out of the mist to Kōyasan, Japan's temple mountain: the giant Daimon gate, the otherworldly Okunoin graveyard forest with its tens of thousands of stone monuments, and a night in a shukubō with shōjin-ryōri dinner and the first temple bell before dawn.",
    "towns": [
      {
        "name": "Yunomine Onsen",
        "vibe": "A car-free valley town where sulfur steam curls off 90 °C springs that locals have bathed in — and boiled eggs in — for a millennium. Wooden ryokan and teahouses crowd the river banks, and pilgrims have soaked in the ancient Tsuboyu stone bath to purify before walking on to Kumano for over 1,000 years.",
        "highlights": [
          "Japan's oldest onsen town, by tradition",
          "Car-free river valley of wooden ryokan",
          "Tsuboyu stone bath, a UNESCO site",
          "Eggs boiled in 90 °C spring water"
        ]
      },
      {
        "name": "Kumano Hongū Taisha",
        "vibe": "The heart of the Kumano faith: a grand complex of some 160 shrines lost in dark cedar forest beside the sacred Kumano River. Unpainted wooden halls with cypress-bark roofs seem to melt into the trees, and each April, boys walk the Dainichi-goe over from Yunomine in the old purification rite.",
        "highlights": [
          "Thousand-shrine complex in cedar forest",
          "Otorii, the world's largest torii gate",
          "Unpainted cypress-bark shrine architecture",
          "Spring festival from Yunomine each April"
        ]
      },
      {
        "name": "Kōyasan",
        "vibe": "An 800-metre temple plateau in the clouds, settled by Kūkai in 819 — 120 temples, dawn bells, and Okunoin, Japan's great graveyard: a misty forest of tens of thousands of stone monuments, stone lanterns and moss. You eat shōjin-ryōri, sleep in a shukubō, and join morning sutra before the sun clears the ridges.",
        "highlights": [
          "Daimon gate flanked by Nio guardians",
          "Okunoin's misty forest of stone monuments",
          "Shukubō temple stay with shōjin-ryōri",
          "Chōishi-michi stone-marker road to Okunoin"
        ]
      },
      {
        "name": "Kii-Tanabe",
        "vibe": "The river gateway to Kumano, where the fast, silver Kumano River runs out to the sea and the old Kii Kaido road met the mountain trail. A small boat town of ferries and ryokan — and the bus platform that lifts you off the Kōdō and up toward Kōyasan.",
        "highlights": [
          "River gateway to the Kumano Kōdō",
          "Boat town at the Kumano River mouth",
          "Ryūjin bus link up to Kōyasan"
        ]
      }
    ],
    "photos": [
      {
        "file": "the-sacred-loop-1.jpg",
        "artist": "Nekosuki",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — Kumano Kodo World heritage photo series (Yunomine Onsen Tsuboyu)",
        "url": "https://commons.wikimedia.org/wiki/File:Kumano_Kodo_World_heritage_Yunomine_Onsen_Tsuboyu_%E6%B9%AF%E3%81%AE%E5%B3%B0%E6%B8%A9%E6%B3%89_%E3%81%A4%E3%81%BC%E6%B9%AF32.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-sacred-loop-2.jpg",
        "artist": "Nekosuki",
        "license": "CC BY-SA 4.0",
        "source": "Wikimedia Commons — Kumano Kodo World heritage photo series (Kumano Hongu Taisha)",
        "url": "https://commons.wikimedia.org/wiki/File:Kumano_Kodo_Kumano_Hongu_Taisha_World_heritage_%E7%86%8A%E9%87%8E%E6%9C%AC%E5%AE%AE%E5%A4%A7%E7%A4%BE05.JPG",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-sacred-loop-3.jpg",
        "artist": "KMR (Wikimedia Commons user)",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — Takijiri-oji shrine, Kumano Kodo Nakahechi",
        "url": "https://commons.wikimedia.org/wiki/File:Takijiri-oji_shrine_2.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-sacred-loop-4.jpg",
        "artist": "KENPEI",
        "license": "CC BY-SA 3.0",
        "source": "Wikimedia Commons — Daimon gate, Koyasan",
        "url": "https://commons.wikimedia.org/wiki/File:Koyasan-daimon.jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-sacred-loop-5.jpg",
        "artist": "Adam Jones (Kelowna, BC, Canada)",
        "license": "CC BY-SA 2.0",
        "source": "Wikimedia Commons — Choishi Path, Okunoin Cemetery, Koyasan",
        "url": "https://commons.wikimedia.org/wiki/File:Choishi_Path_-_Okunoin_Cemetery_-_Koyasan_-_Japan_-_18_(47949824357).jpg",
        "provider": "commons",
        "safeForPublic": true
      },
      {
        "file": "the-sacred-loop-6.jpg",
        "artist": "Szabolcs Arany",
        "license": "CC BY 2.0",
        "source": "Wikimedia Commons — shojin-ryori at the shukubo of Kongosanmaiin, Koyasan",
        "url": "https://commons.wikimedia.org/wiki/File:Buddhist_vegetarian_food,_Shukubo_of_Kongosanmaiin_-_May_3,_2011.jpg",
        "provider": "commons",
        "safeForPublic": true
      }
    ]
  }
};
