export interface ParkingEntry {
  title: string;
  where: string;
  url: string | null;
  notes: string;
}

export interface StageCamping {
  day: number;
  camping: string;
  campingUrl: string | null;
  wild: "allowed" | "tolerated" | "not allowed";
  notes: string;
}

export interface HikeCamping {
  slug: string;
  parking: ParkingEntry[];
  wildCampingRule: string;
  stages: StageCamping[];
}

export const CAMPING: Record<string, HikeCamping> = {
  "alta-via-1": {
    "slug": "alta-via-1",
    "parking": [
      {
        "title": "P4 car park, Lago di Braies (stage 1 start)",
        "where": "At the lake, Prags/St. Veit, Dobbiaco (South Tyrol)",
        "url": "https://www.pragsparking.com/en",
        "notes": "Paid: day ticket EUR 18 (car/motorcycle), EUR 38 Food & Park combo. From Jul 10 to Sep 10, 9:30-16:00, you may only drive to the lake with an online reservation; otherwise park at the valley entrance and take the paid bus (line 442) up to the lake. Fills up fast in Jul-Aug - arrive before 9:30 or book; hotel guests park free."
      },
      {
        "title": "Dobbiaco (Toblach) + Braies valley-mouth P&R (day-1 alternative)",
        "where": "Dobbiaco (South Tyrol), ~8 km below the lake",
        "url": null,
        "notes": "Municipal parking in Dobbiaco and at the Braies valley entrance (price approx., unverified; cheaper than the lake lot). From there to the stage 1 start: paid bus line 442 or a 40-60 min uphill walk along the valley. Best 'park once' option: sleep in Dobbiaco the night before and start before the morning access gate opens."
      },
      {
        "title": "Canazei centro & Pecol lots (mid-route hub, days 4-5)",
        "where": "Canazei, Val di Fassa (Trentino), below Rifugio Nuvolau and Rifugio Citta di Fiume",
        "url": null,
        "notes": "Paid municipal lots around the town centre and along the Passo Pordoi road (Pecol); prices approx. (typical ~EUR 1-2/h in summer, unverified). Full in Jul-Aug, easier early morning. From Canazei to the trail: Marmolada-area cable car or ~1.5-2 h uphill walk. Nearest designated campsites are in Pozza di Fassa (~15 min by car)."
      },
      {
        "title": "Belluno station area - Lambioi & Ex-Moi lots (stage 11 finish)",
        "where": "Belluno (Veneto), Viale dei Dendrofori (Lambioi) and Via Feltre (Ex-Moi), beside the train station",
        "url": null,
        "notes": "Paid municipal parking; prices unverified. The route officially ends in Belluno by bus from La Pissa (Val Vescova) to the station, so the station area is the natural finish point. Strategy: start (Braies) and finish (Belluno) are ~120 km apart, so most hikers either follow the car daily (the route runs valley to valley, roads open) or park once at the start and take a train/transfer at the end."
      }
    ],
    "wildCampingRule": "Wild camping (tent, awning or camping furniture) is prohibited in the Dolomites, and both South Tyrol and Trentino enforce it - especially inside the protected parks the route crosses (Tre Cime di Lavaredo, Fanes-Sennes-Prags, Puez-Odle, Dolomiti Bellunesi). Fines for setting up outside a designated site run roughly EUR 100-500, and campervan/van crackdowns have tightened in 2025-26. What is occasionally tolerated is an emergency bivouac: no tent, dusk to dawn, high up and away from huts and settlements - not actual camping. In practice, the norm on this route is a booked rifugio every night (all 11 days) or, on the lower valley days, one of the few designated campsites.",
    "stages": [
      {
        "day": 1,
        "camping": "none - sleep at Rifugio Biella",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Hut at 2,155 m with dorm beds and full board - book ahead for Jul-Aug. No tent options anywhere nearby; nearest designated camp is Alpen Natur Camping near Dobbiaco/Toblach (~20 km by road from the lake)."
      },
      {
        "day": 2,
        "camping": "Camping Al Plan (St. Vigil in Enneberg)",
        "campingUrl": "https://www.campingalplan.com/",
        "wild": "not allowed",
        "notes": "No campsite in Val di Funes itself - the norm is sleeping at Rifugio Fanes (1,901 m). Al Plan is the nearest designated camp, ~20 min by car via Brunico, right at the Fanes-Sennes-Prags park entrance; 3-star, paid tent pitches."
      },
      {
        "day": 3,
        "camping": "none - sleep at Rifugio Lagazuoi",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Highest point of the route (2,752 m) - a hut, not a campsite; zero tent options and fast-changing weather. A no-tent dusk-to-dawn bivouac above ~2,000 m is occasionally tolerated but do not plan on it."
      },
      {
        "day": 4,
        "camping": "none - sleep at Rifugio Nuvolau",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Hut at ~2,500 m above Canazei. Canazei (~40 min down) has parking but no campsite; nearest designated camps are in Pozza di Fassa (~15 min by car). Wild camping is strictly policed in this park-adjacent zone."
      },
      {
        "day": 5,
        "camping": "none - sleep at Rifugio Citta di Fiume",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Marmolada/Cinque Torri area - no wild camping at all. Canazei below is the car and resupply hub; nearest campsite is Vidor Resort in Pozza di Fassa (~20 min by car)."
      },
      {
        "day": 6,
        "camping": "Club del Sole Val di Fiemme Easy Camping Village (Bellamonte, Predazzo)",
        "campingUrl": "https://www.clubdelsole.com/it/destinazioni/trentino-alto-adige-val-di-fiemme-e-valsugana/val-di-fiemme-easy-camping-village",
        "wild": "not allowed",
        "notes": "Rifugio Palafavera (1,917 m) is the norm; Moena itself has no campsite, the two Bellamonte sites are ~10-15 min by car down-valley. 3-star, paid, tents and cabins."
      },
      {
        "day": 7,
        "camping": "Camping Valle Verde (Loc. Sotto Sassa, Bellamonte, Predazzo)",
        "campingUrl": "https://www.campingvalleverde.it/",
        "wild": "not allowed",
        "notes": "Rifugio Vazzoler (1,714 m) is the norm; Valle Verde is a small paid campsite ~20 min by car, opens late April (25 Apr 2026). Tents, caravans, motorhomes."
      },
      {
        "day": 8,
        "camping": "Club del Sole Val di Fiemme Easy Camping Village (Bellamonte, Predazzo)",
        "campingUrl": "https://www.clubdelsole.com/it/destinazioni/trentino-alto-adige-val-di-fiemme-e-valsugana/val-di-fiemme-easy-camping-village",
        "wild": "not allowed",
        "notes": "Rifugio Carestiato (2,200 m, Passo Campolongo) is the norm; the Bellamonte campsites sit ~10-15 min by car below Moena. Paid tent pitches available."
      },
      {
        "day": 9,
        "camping": "Camping Catinaccio Rosengarten (Pozza di Fassa)",
        "campingUrl": "https://www.catinacciorosengarten.com/",
        "wild": "not allowed",
        "notes": "Rifugio Pramperet (2,050 m) is the norm; Campitello di Fassa has no campsite. Rosengarten is at 1,320 m in Pozza, 200 m from the village centre, ~20 min by car; family-run, accepts tents."
      },
      {
        "day": 10,
        "camping": "Vidor Resort (Pozza di Fassa)",
        "campingUrl": "https://www.campingvidor.it/",
        "wild": "not allowed",
        "notes": "Rifugio 7 Alpini (1,942 m, above Campitello) is the norm; Vidor is a 5-star resort in Pozza with tent pitches, ~20 min by car. Long Sernau/Croda da Lago day - no camping at all in the high Marmolada sector."
      },
      {
        "day": 11,
        "camping": "Park Camping Nevegal (Nevegal, Belluno)",
        "campingUrl": "https://parkcampingnevegal.com/",
        "wild": "not allowed",
        "notes": "The stage ends in Belluno (bus from La Pissa, Val Vescova, to the station). Nevegal is at 1,018 m, 11 km SE of the centre, open year-round, 80+ pitches with tent and camper areas."
      }
    ]
  },
  "alta-via-2": {
    "slug": "alta-via-2",
    "parking": [
      {
        "title": "Bressanone (Brixen) station car park — P+R Bahnhof / Mobilitätszentrum",
        "where": "Viale Stazione, Bressanone — start town, stage 1",
        "url": "https://www.suedtirolmobil.info/en/my-journey/park-ride",
        "notes": "Paid: without a Südtirol Pass EUR 1.30/h (7:00-19:00), EUR 0.60/h (19:00-7:00), first 30 min free; with a Südtirol Pass max EUR 6/day, EUR 3 with same-day regional train/bus, EUR 0 with a return journey. Commuter-oriented, fills weekday mornings; fine for hikers arriving by train. Stage 1: walk in town, then bus (~20 min) or 7 km drive up the mountain road to the Plose gondola valley station at St. Andrä."
      },
      {
        "title": "Parkhaus Brixen (Parkplatz 2)",
        "where": "Hauptstraße, Bressanone — central town garage, 5 min walk to the old town",
        "url": "https://www.brixen.org/de/urlaub-brixen-suedtirol/pois/detail?oid=9129C5CAD29720BD5B993E7F0C107CAD",
        "notes": "Paid: EUR 2.00/h, night rate 20:00-7:00 EUR 1.00/h, open 24 h. Full on summer weekends and event days. Stage 1 trailhead is in town; for the optional Plose cable car take the bus or drive ~7 km to St. Andrä."
      },
      {
        "title": "Plose gondola valley station car park (St. Andrä)",
        "where": "Seilbahnstr. 17, St. Andrä/Brixen — 7 km up from Bressanone",
        "url": "https://www.plose.org/en/faq-frequently-asked-questions",
        "notes": "Free for gondola guests (day parking only; Plose FAQ: areas not equipped for camping or overnight stays). Fills on weekends/holidays — the FAQ recommends arriving early or taking the bus from Bressanone. Stage 1: the optional cable car saves ~1,000 m of the climb toward Rifugio Plose."
      },
      {
        "title": "Passo San Pellegrino car parks (stage 6/7 hub)",
        "where": "SS346 at the pass (1,918 m) plus Falcade — mid-route car-shuttle drop/pick point",
        "url": "https://www.skiresort.com/en/ski-resort/passo-san-pellegrino-falcade/test-result/arrival-parking/",
        "notes": "Moena/Costabella side (Trentino): free gravel parking, 'enough available'; Falcade side (Veneto): limited, tarmac+gravel, for a fee (amount unverified, approx.). Fills summer afternoons (hike + ski season). Stage 6 finishes here (hotels), stage 7 starts here; shuttle drivers typically leave the car at the pass or Falcade and rejoin at the Feltre end."
      },
      {
        "title": "Feltre (finish end) — getting the car back",
        "where": "Feltre (BL) — 13 km by road from Pedavena/Croce d'Aune",
        "url": "https://moveo.telepass.com/strisce-blu-feltre-orari-tariffe-parcheggio/",
        "notes": "Blue zones incl. the station park at Viale del Piave: EUR 1.00/h, min EUR 0.50, 8:30-12:30 + 15:00-19:00 Mon-Sat; free lots at Piazzale S. Guarnieri, Via Zuecca 6, Salita Villabruna, Via Tofana Prima 13, Prà del Moro, Campo Mosto. Finish plan: leave the car in Feltre, take Dolomitibus Line 16 (Servo di Sovramonte–Croce d'Aune–Pedavena–Feltre, summer 2026 08/06-09/09, ~4 runs/day, ~30 min, from ~EUR 3) from the trail end to Feltre, then collect the car or take Trenitalia to Venezia (~1 h 10)."
      }
    ],
    "wildCampingRule": "Wild camping is generally prohibited on both sides of the route: South Tyrol bans camping outside registered campsites (bivouacking only occasionally tolerated), and Veneto's regional law 40/1984 imposes a total ban on camping outside campsites, with fines from EUR 100 up to EUR 500-1,000 in protected areas. In the Dolomiti Bellunesi National Park (final stages) free camping and bivouacs are explicitly forbidden by art. 20 of the park regulation (fines EUR 100-1,000); only 'proved emergencies' are permitted, and a bivouac on a rock wall during climbing counts as an emergency. In practice the rifugio/campsite culture dominates — one-night hiker bivys in the high valleys are often overlooked, but that is tolerance, not a right; there are 45+ official campsites in the valley towns along the route.",
    "stages": [
      {
        "day": 1,
        "camping": "Camping Brixen (Bressanone town, ~1.5 km from the stage-1 start)",
        "campingUrl": "https://www.camping-brixen.com",
        "wild": "not allowed",
        "notes": "Year-round, family-run 7 ha site (site blocks bots, 403 — book via site/phone). Optional Plose cable car (free valley-station park) saves ~1,000 m of the climb; sleep at Rifugio Plose (book ahead)."
      },
      {
        "day": 2,
        "camping": "none — sleep at Rifugio Genova",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Genova is the 19th-c. DAV hut at the Sella/Longiarù crossroads (~2,200 m); no campsite within car range. Reserve early — few alternatives nearby."
      },
      {
        "day": 3,
        "camping": "none — sleep at Rifugio Puez",
        "campingUrl": "https://www.rifugiopuez.it/",
        "wild": "not allowed",
        "notes": "Puez plateau (2,475 m) inside Puez-Odle nature park — isolated, no escape routes, no camping; the route's most exposed night. Book the moment the site opens (next season ~mid-March per the hut)."
      },
      {
        "day": 4,
        "camping": "none — sleep at Rifugio Pisciadù",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Pisciadù (2,525 m) above Val Setus; hard day with the Ferrata Tridentina. If taking the Feather Route Sella bypass, nearest campsite is Camping Marmolada (Canazei)."
      },
      {
        "day": 5,
        "camping": "Camping Marmolada, Canazei (~15 km by car down from Pordoi); at altitude: Bivacco Boè (unmanned)",
        "campingUrl": "https://www.campingmarmolada.com",
        "wild": "not allowed",
        "notes": "Camping Marmolada (Strèda de Parèda 60, Canazei, +39 0462 601660) open 29/05-26/09 — car option only. Hikers sleeping high at Boè/Forcella Pordoi use Rifugio Boè or the unstaffed Bivacco Boè (bring supplies)."
      },
      {
        "day": 6,
        "camping": "Camping Eden Falcade (Via Pecol 2, Falcade, ~5 km from the pass)",
        "campingUrl": "https://www.campingedenfalcade.com",
        "wild": "not allowed",
        "notes": "21 km day; the pass itself has hotels/apartments and free parking. Camping Eden (1,200 m, 140 pitches, summer + winter, +39 0437 599138) sits at the Falcade–Le Buse gondola foot — good base if a car is shuttled to the pass."
      },
      {
        "day": 7,
        "camping": "none — sleep at Rifugio Volpi al Mulaz",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Mulaz (2,330 m) is the classic pre-Farangole base under the Pale di San Martino spires; no campsite nearby, no services. Short recovery day after stage 6 — book early."
      },
      {
        "day": 8,
        "camping": "none — sleep at Rifugio Rosetta",
        "campingUrl": "https://www.rifugiorosetta.it/",
        "wild": "not allowed",
        "notes": "Rosetta (2,581 m) after the Sentiero delle Farangole (2,932 m) crux; isolated on the Pale plateau, no camping. SAT-run; in season +39 0439 68308, info@rifugiorosetta.it."
      },
      {
        "day": 9,
        "camping": "Camping Alleghe (Loc. Masarè, Alleghe, ~10 km down via the 709 south route into Canali valley)",
        "campingUrl": "https://campingalleghe.it/en",
        "wild": "not allowed",
        "notes": "Rifugio Treviso sits in the Canali valley — a buffer night after the Pale; Camping Alleghe (500 m from Lake Alleghe, +39 0437 723737) is the nearest campsite, closes 27 September."
      },
      {
        "day": 10,
        "camping": "Camping Vincheto, Feltre (Via Cincina 2, ~15 km down the Stua/Lago d'Alpago side); Camping Agordo (~15 km down the Agordo side, no verified URL)",
        "campingUrl": "https://www.campingvincheto.it/en",
        "wild": "not allowed",
        "notes": "Bivacco Feltre (W. Bodo) is an unstaffed bivouac (sheet-metal huts, a few beds) near Rifugio Dal Piaz — bring supplies; no water refill after Boz, carry 2-3 L. Feltre is the route's resupply town and open all year."
      },
      {
        "day": 11,
        "camping": "none — sleep at Rifugio Bruno Boz",
        "campingUrl": "https://www.rifugiobrunoboz.it/",
        "wild": "not allowed",
        "notes": "Comedon cabled gully + Troi dei Caserín (~10-15 min on cable, no bypass); remote Bellunesi hut with few alternatives — book early. No campsite within ~15 km by car."
      },
      {
        "day": 12,
        "camping": "none — sleep at Rifugio Dal Piaz",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Steps/wire cables under Zoccarè (~10-20 min, no bypass). Dal Piaz sits by Lago della Stua just above the finish; most hikers sleep here and drop to Pedavena the next morning."
      },
      {
        "day": 13,
        "camping": "Camping Vincheto, Feltre (~13 km by road from Croce d'Aune/Pedavena)",
        "campingUrl": "https://www.campingvincheto.it/en",
        "wild": "not allowed",
        "notes": "Official end at Croce d'Aune. Car back: Dolomitibus Line 16 Croce d'Aune–Pedavena–Feltre (summer 2026: 08/06-09/09, ~4 runs/day, ~30 min, from ~EUR 3), then Trenitalia from Feltre to Venezia Santa Lucia (~1 h 10)."
      }
    ]
  },
  "tour-du-mont-blanc": {
    "slug": "tour-du-mont-blanc",
    "parking": [
      {
        "title": "Les Houches — Parking des Chavants (the \"Parking Tour du Mont Blanc\")",
        "where": "Les Houches (loop start/finish), south end of the village",
        "url": "https://leshouches.fr/ma-vie-locale/se-deplacer",
        "notes": "The only paid car park: 178 spaces + 4 PMR + 6 EV chargers, camera-controlled entry. June to late September: 10-day pass 100 € with unlimited in/out — the classic TMB \"leave the car for the whole loop\" strategy. Rest of the village: blue-zone 2 h (parking disc); above the mairie max 12 h, 1 June – 31 August; station car park open to camping-cars/vans max 7 days, no sleeping. ~10–15 min walk from the centre to the GR 20 start; expect it to be very full in July–August (inference, no official occupancy data)."
      },
      {
        "title": "Chamonix — P+R Centre Ville (Grépon) + covered garages",
        "where": "Chamonix (for the Chamonix-side variant / Argentière–Vallorcine day trip)",
        "url": "https://www.chamonix.com/infos-et-services/transports/parkings-tous",
        "notes": "Official 2026 rates: P+R 18 €/24 h (800 summer spaces), weekly pass 50,75–56,75 €, <1 h free; covered underground garages (Saint-Michel, Mont-Blanc, Entrèves) 22,50 €/24 h; enclosed surface lots 19,90 €/24 h; centre short-term 46,70 €/24 h. Official advice: park at the P+R on arrival and cross to the centre by the Mulet minibus. Very expensive and the centre lots fill first in high summer."
      },
      {
        "title": "Saint-Gervais-Le Fayet — car + rail alternative",
        "where": "Saint-Gervais-Vallorcine / Le Fayet (SNCF junction station)",
        "url": "https://www.chamonix.com/infos-et-services/transports/se-deplacer",
        "notes": "The Mont-Blanc Express links Chamonix ↔ Saint-Gervais-Le Fayet ↔ Argentière/Vallorcine; Le Fayet is the TGV/TER/Léman Express junction, and the valley's \"carte d'hôte\" includes a free Servoz–Vallorcine rail pass. Typical plan: park at the station (paid, approx. — no verified parking page found, official tourism site blocks access) and take the train to Vallorcine for day-1's finish (or the reverse from Les Houches at the end of the loop). High-summer fullness unverified."
      },
      {
        "title": "Courmayeur — P1/P2 centre lots + Val Ferret/Val Veny multi-day option",
        "where": "Courmayeur (Italian-side start)",
        "url": "https://www.courmayeurmontblanc.it/come-muoversi/",
        "notes": "Official rates: P1 Piazzale Monte Bianco 1 h free, 22 €/24 h high season (1 July – 20 Sept) / 15 € low season; P2 Viale Monte Bianco 30 min free, 26 € / 20 € per 24 h; street metered parking 2,00 €/h high season. Street parking in Val Ferret/Val Veny: 15 €/day, 8 € for 2 days, 5 €/day from day 3 (high season) — the cheap multi-day option for hikers; local buses run up both valleys and a cross-border bus links to Chamonix. Centre is a restricted-traffic zone; arrive early morning in high summer."
      }
    ],
    "wildCampingRule": "Since the 2016 environmental-code reform (L.324-1), free camping on public land is technically prohibited throughout France (unobtrusive overnight stops are often tolerated outside built-up areas), but the TMB valleys add explicit local rules: Chamonix has banned all camping outside designated sites by municipal decree since 1992 (only high-altitude bivouac, dusk to dawn), Vallorcine has banned wild camping and fires day and night since 2024 (above 1,700 m it is allowed by default, 19 h–9 h), Les Houches and Saint-Gervais tolerate a one-night dusk-to-dawn bivouac, and Les Contamines-Montjoie allows only bookable designated areas (in the reserve, camping is banned below 2,500 m except Giettaz and La Balme, booked for 19 h–9 h). In Italy (Valle d'Aosta) all parking and camping is prohibited even for less than 24 h, and bivouac is prohibited below 2,500 m — which covers the entire Courmayeur–Val Ferret section. In Switzerland (Valais) bivouac/wild camping is prohibited; a single night above the tree line, alone and outside protected areas, is generally tolerated, and in Orsières and Trient only the designated sites apply (La Fouly, Champex-Lac and Relais d'Arpette campsites; Arpille campsite and the Peuty/Stand rest areas). Because refuges, gîtes and hotels exist in every village and at every pass on the TMB, camping is rarely necessary — book ahead in July–August.",
    "stages": [
      {
        "day": 1,
        "camping": "none — sleep at the Auberge de Bionnassay or in Vallorcine village; nearest campsite Camping des Montets, Vallorcine (2 stars).",
        "campingUrl": "https://www.chamonix.com/hebergements-handicap/camping-des-montets",
        "wild": "not allowed",
        "notes": "Vallorcine has strictly banned wild camping day and night since 2024 (Arrêté 34/2024) below 1,700 m and on private land; above 1,700 m it is allowed by default 19 h–9 h, but the normal overnight is the auberge or a village gîte."
      },
      {
        "day": 2,
        "camping": "designated area only — bookable comfort-bivouac area at the Parc des Loisirs, Contamines-Montjoie (150 pitches, 19 h–9 h, booking required); no campsite in the village, otherwise gîte/hotel in Les Contamines.",
        "campingUrl": "https://reserve-bivouac74.fr/",
        "wild": "allowed",
        "notes": "Only the bookable designated area is legal; in the Contamines-Montjoie Nature Reserve camping is prohibited below 2,500 m except at Giettaz–Pont de la Rollaz and La Balme (19 h–9 h, booked). The Parc des Loisirs area sits at the valley floor, ~10 min walk from the village."
      },
      {
        "day": 3,
        "camping": "designated area only — official bivouac area at Les Chapieux (toilets + waste collection); no campsite, sleep at the Refuge de la Balme (1,706 m) or in Les Chapieux.",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/bivouac",
        "wild": "allowed",
        "notes": "Designated area only: the rest of the Vallée des Glaciers is alpine meadow/private land, so bivouac is prohibited. Nearest real campsite: the bookable Parc des Loisirs area at Contamines (day 2)."
      },
      {
        "day": 4,
        "camping": "Campeggio Monte Bianco \"La Sorgente\", Val Veny (1,507 m, eco-campsite, TMB stage) — or sleep at the Rifugio Elisabetta / in Courmayeur.",
        "campingUrl": "https://www.courmayeurmontblanc.it/campeggi/",
        "wild": "not allowed",
        "notes": "Valle d'Aosta: all camping prohibited even for less than 24 h, bivouac prohibited below 2,500 m — the whole Italian section is a no-go. La Sorgente is ~5 km below central Courmayeur in Val Veny; the Rif. Elisabetta (1,508 m, near the valley head) is the classic overnight."
      },
      {
        "day": 5,
        "camping": "La Fouly campsite, Orsières (also referred to as the \"Glaciers campsite\" on the official TMB site) — or sleep at the Rifugio Bonatti / in La Fouly.",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/bivouac",
        "wild": "not allowed",
        "notes": "Orsières bans wild camping; camping is possible only at the La Fouly, Champex-Lac and Relais d'Arpette campsites. The campsite's own website could not be independently verified (Swiss .ch domain unfindable) — the TMB official page is the verified source. La Fouly is a small hamlet at 1,472 m; expect to book ahead in July–August."
      },
      {
        "day": 6,
        "camping": "Campsite l'Arpille at the Col de la Forclaz (just above Trient) + rest areas at Peuty and Stand; no campsite in Trient village — sleep at a gîte/hotel in Trient.",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/bivouac",
        "wild": "not allowed",
        "notes": "Trient prohibits bivouac; camping only at the designated sites. The Arpille campsite sits at the Col de la Forclaz, which you pass at the end of day 6 (2,284 m) — a detour back is needed, so the practical overnight is a Trient gîte. The campsite's own website could not be independently verified."
      },
      {
        "day": 7,
        "camping": "none — sleep at Tré-le-Champ / La Flégère (gîte/hotel); nearest campsite Camping Glacier d'Argentière, Argentière (~6 km down-valley).",
        "campingUrl": "https://www.chamonix.com/planifier-mon-sejour/hebergements/campings/camping-glacier-d-argentiere",
        "wild": "not allowed",
        "notes": "Chamonix-Mont-Blanc has banned camping outside designated sites by municipal decree since 1992; only high-altitude bivouac, dusk to dawn, is permitted. Tré-le-Champ itself has no camping."
      },
      {
        "day": 8,
        "camping": "Camping Bellevue, Les Houches (2 stars — the only campsite in the village); or sleep at a gîte/hotel in Les Houches.",
        "campingUrl": "https://www.chamonix.com/hebergements-handicap/camping-bellevue",
        "wild": "tolerated",
        "notes": "In Les Houches a one-night dusk-to-dawn bivouac is tolerated (no specific decree), except on Montagne de Chailloux which is strictly banned. Loop ends here — collect the car from the Parking des Chavants (10-day pass 100 €) or take the Mont-Blanc Express train to Chamonix/Saint-Gervais."
      }
    ]
  },
  "walkers-haute-route": {
    "slug": "walkers-haute-route",
    "parking": [
      {
        "title": "Chamonix - Parking du Centre Ville (Grépon) Park-and-Ride",
        "where": "Chamonix-Mont-Blanc, France (route start). P+R at the entrance to town, 800 spaces in summer (500 in winter) + 200 winter 'Grépon Bus' spaces.",
        "url": "https://en.chamonix.com/usual-information-services/transports/car-park",
        "notes": "Official 2026 rates: first hour free, then from €1.30, €18/24h, weekly pass €54.25 (€50.75 with Carte d'Hôte guest card). 'Le Mulet' minibus or 5-min walk to downtown; start of the route is a 10-15 min walk. City car parks fill up in high summer (July-August) - use this P+R and the free Carte d'Hôte transport. Official guide PDF: https://static.apidae-tourisme.com/filestore/objets-touristiques/documents/193/153/37001665/Parc+Auto+Stationnement+Chamonix+brochure+A4_2026_SPREADS_BD.pdf"
      },
      {
        "title": "Chamonix - underground car parks (Saint-Michel / Mont-Blanc / Entrèves)",
        "where": "Chamonix-Mont-Blanc centre, France. 686 covered spaces total (308/239/139).",
        "url": "https://en.chamonix.com/usual-information-services/transports/car-park",
        "notes": "Official 2026 rates: first hour free, then from €2.50/15min, €22.50/24h, weekly pass €56.75 (€50.75 with Carte d'Hôte). Closest to the trailhead in downtown Chamonix (5-10 min walk), but fills up first in peak summer - arrive early. Motorhomes (>2.20 m): dedicated area 'Parking Camping car du Cry' at the Chamonix entrance, ~€25.50 first day (new RV parking restrictions in force May 1-Oct 31, mayor's order). 41 car parks listed for the valley (22 in Chamonix, 5 in Argentière, 9 in Les Houches)."
      },
      {
        "title": "Zermatt - park at Täsch (car-free village)",
        "where": "Täsch, Switzerland (route finish - 5 km before car-free Zermatt). Matterhorn Terminal Täsch: 2,100 covered spaces; 1,000+ more with private providers (taxi firms, hotels).",
        "url": "https://www.zermatt.ch/en/plan-book/arrival",
        "notes": "CRITICAL: private cars are only allowed as far as Täsch; driving on into Zermatt without authorisation carries large fines. From Täsch: Matterhorn Gotthard Bahn shuttle train to Zermatt in 12 min, every ~20 min (fare approx. CHF 9 one way - unverified, check MGB), or taxi. Verified local example: Parkplatz Matterhorn-Inn (35 spaces, next to Täsch station) CHF 10.00/24h; Parking Schaller (vehicles up to 3 m, 14 EV chargers); Parking Elite (underground). Parking + taxi transfer packages bookable online. Full overview: https://www.zermatt.ch/en/plan-book/arrival/car-parks-taesch and https://www.matterhorngotthardbahn.ch/en/stories/parking-matterhorn-terminal-taesch . Matterhorn Terminal price not published on the page (booking only) - treat as approx. ~CHF 30/week for long stays. Gets very full in high summer - book online."
      },
      {
        "title": "Visp - station car parks (low-cost long-stay option)",
        "where": "Visp, Switzerland (Valais, entrance to the Matter valley; note the Gornergrat railway itself starts in Zermatt, not Visp).",
        "url": "https://www.visp.ch/en/life-amp-home/mobility/parking-garages-and-parking-spaces",
        "notes": "Official rates: Train Station Parking Garage (Bahnhof): 406 spaces, 24/7, 15 min free, CHF 1.00 for hours 1-2 then CHF 1.50/h, CHF 14/24h. Also La Poste garage and Müra garage (192 spaces), CHF 14/24h; SBB lot next to station (max 3 h). From Visp station take the direct regional train toward Zermatt/Täsch (approx. 50 min - unverified). Good if you want to leave the car at the valley end and finish in Zermatt by rail; cheaper than Täsch long-stay parking."
      }
    ],
    "wildCampingRule": "France: wild camping is not generally permitted - it is prohibited in nature reserves, on roads/public ways, within 200 m of protected water intakes, in classified landscape sites, and in zones banned by municipal or prefectural orders (French Environment Code); a light one-night bivouac without a vehicle is informally tolerated in the high alpine zones, but it is never a legal right, and the Chamonix valley enforces strict parking rules (a mayor's order restricting RV/campervan parking is in force May 1-Oct 31). Switzerland: there is no federal wild-camping ban, but cantonal and communal rules restrict it - on the Valais side of this route camping outside designated sites is prohibited (e.g. banned throughout the municipality of Evolène, which includes Arolla and Les Haudères, and fined around CHF 300 in the Zermatt/Täsch region per local operators). In practice it rarely matters: every stage of the Walker's Haute Route ends in a hut (cabane/refuge) or village accommodation, so a tent is almost never needed.",
    "stages": [
      {
        "day": 1,
        "camping": "none - no campsite in Argentière; sleep at the hut/gîte in Argentière (per route spec 'Cabane, Argentière'). The only official RV areas in the whole Chamonix valley are in Chamonix (du Cry and Grépon).",
        "campingUrl": "https://www.chamonix.com/hebergements/aires-camping-cars",
        "wild": "not allowed",
        "notes": "No campground in or near Argentière (74400). If you must camp with a vehicle, the official motorhome areas are in Chamonix (route start): 'Parking Camping car du Cry' at the village entrance (~25.50 EUR first day) and the Grépon P+R area. Valley bottom is strictly policed; pitch only in high-mountain bivouac terrain and never overnight in the village."
      },
      {
        "day": 2,
        "camping": "Camping Les Rocailles, Champex-Lac (CH-1938 Champex, 1,480 m) - about 15 km past Trient down the valley. Hiker package CHF 22/person (pitch + showers + phone charge + wifi, incl. tourist tax), kids 6-12 CHF 10, dog CHF 4, car CHF 4.50. No reservations; tel +41 27 783 19 79.",
        "campingUrl": "https://champex-camping.ch/index.php/tarifs-randonneur",
        "wild": "not allowed",
        "notes": "Trient itself (stage end, Cabane du Trient area) has no campsite - the nearest designated option is Camping Les Rocailles at Champex-Lac, which you reach on stage 3 anyway. Swiss-side rule: canton/municipality restrictions apply; camping off-site in Valais is prohibited and fined."
      },
      {
        "day": 3,
        "camping": "Camping Les Rocailles, Champex-Lac - right at the stage end (village of Champex/Champêche, 1,480 m). CHF 22/person all-inclusive hiker rate (shower, wifi, phone charge), car CHF 4.50, no reservations.",
        "campingUrl": "https://champex-camping.ch",
        "wild": "not allowed",
        "notes": "Stage 3 (Fenêtre d'Arpette 2,667 m) is the hard one; end in the village with a proper bed. The campsite is grass-terraced pitches with reception, drinks bar and dogs on lead - a rare 'real campsite' day on this route. If you prefer a bed: gîtes/hotels in Champex-Lac (spec: 'Cabane, Champex-Lac')."
      },
      {
        "day": 4,
        "camping": "none in Le Châble - nearest: Camping Molignon, Les Haudères (CH-1984, ~15 km down-valley, open year-round) or Camping Les Rocailles, Champex-Lac (~20 km up-valley).",
        "campingUrl": "https://www.camping-molignon.ch",
        "wild": "not allowed",
        "notes": "Easy breather day in the Val d'Herens. No campsite in Le Châble village - book a gîte/hotel there (spec: 'Cabane, Le Châble'), or continue ~15 km to the year-round 4-star Camping Molignon in Les Haudères (restaurant in season, pool, shop, bakery)."
      },
      {
        "day": 5,
        "camping": "none - sleep at Cabane du Mont Fort (2,270 m). No campsite anywhere nearby; nearest designated camping is Camping Molignon, Les Haudères (~25 km by road).",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Remote high-alpine hut - beds only, book ahead (former joint booking portal chalets-huts.ch is offline; book the hut directly via its operator/alpine club). Big wall-climb day to 2,455 m. No water or services once above the valley; carry cash and ID for the hut."
      },
      {
        "day": 6,
        "camping": "none - sleep at Cabane du Prafleuri. No campsite anywhere nearby; nearest designated camping is Camping Molignon, Les Haudères or Camping Arolla (both ~30 km by road).",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "The route's highest point (Col de Prafleuri 2,987 m) is on this stage - fully exposed remote scree, no water stops. Hut bed is mandatory in bad weather; the bad-weather alternative descends via the La Barmaz valley toward Arolla."
      },
      {
        "day": 7,
        "camping": "Camping Arolla (1,950 m) - ORIGINAL SITE CLOSED PERMANENTLY since 13 Jul 2025 (natural-hazard order). 2026: temporary campsite at Route de Tsallion 1, 1986 Arolla, 19 Jun-27 Sep 2026, CHF 20/night per vehicle, CHF 15/night per tent (+CHF 1.10 tourist tax/adult), no reservations. New permanent site planned ~summer 2027. Fallback: Camping Molignon, Les Haudères.",
        "campingUrl": "https://en.camping-arolla.ch",
        "wild": "not allowed",
        "notes": "Wild camping is explicitly prohibited throughout the municipality of Evolène (includes Arolla) per the campsite's own notice. Book a bed in Arolla village (hotels, spec: 'Arolla') rather than rely on the temporary pitch; if the 2026 temporary site is closed when you arrive (seasonal), Molignon in Les Haudères is the year-round alternative ~15 km away."
      },
      {
        "day": 8,
        "camping": "Camping Molignon, CH-1984 Les Haudères - right at the stage end. 4-star, open year-round: tent/caravan/motorhome pitches, chalets, bungalows, pods; restaurant (Jun-Sep), pool, shop, bakery, laundry. Tel +41 27 283 12 40, info@molignon.ch.",
        "campingUrl": "https://www.camping-molignon.ch",
        "wild": "not allowed",
        "notes": "Les Haudères is a small hamlet - a pitch at Molignon is the easiest real camping night in the middle of the route, or a bed in the hamlet (spec: 'Refuge, Les Haudères'). Valais rule: no camping off-site (Evolène municipality ban); stick to the campsite."
      },
      {
        "day": 9,
        "camping": "none - sleep at Refuge de la Moiry / Hôtel de Moiry at Lac de Moiry. No campsite nearby; nearest designated camping is Camping Molignon, Les Haudères (~20 km by road) or the Camping Arolla temporary site.",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Lac de Moiry is remote alpine - the lake-side hotel (Hôtel de Moiry) takes walk-in guests and is a practical alternative to the refuge bed after the long Col du Tsaté (2,868 m) day. No services in the Moiry valley; water and snacks at the lake."
      },
      {
        "day": 10,
        "camping": "Camping Les Rousses, 3961 Zinal (1,672 m) - at the stage end. +41 27 475 20 22, info@camping-zinal.ch, www.camping-zinal.ch (site not reachable from this research session - verify before relying on it). Zinal also has a year-round motorhome pitch in the village centre, 100 m from the cable-car base (power, water, waste).",
        "campingUrl": "https://campingsearch.ch/en/camping/camping-les-rousses",
        "wild": "not allowed",
        "notes": "Zinal is the big resupply village of the second half (grocery, bakery, bank). Camp at Les Rousses or, as the spec notes, a bed in Zinal (gîtes/hotels - 'Hut, Zinal'). Valais: off-site camping prohibited."
      },
      {
        "day": 11,
        "camping": "none in Gruben - sleep in a bed in the village (e.g. Hotel Schwarzhorn, per route logistics). Nearest campsite: Camping Matterhorn, Spisstrasse 17, 3920 Zermatt (~6 km), the only campsite in car-free Zermatt.",
        "campingUrl": "https://campingsearch.ch/en/camping/camping-matterhorn",
        "wild": "not allowed",
        "notes": "Gruben is a car village at the end of the Matter valley - no campsite, hotels and B&Bs only. Forgetting to book a Zermatt/Gruben bed in August is the classic mistake on this route. Wild camping is strictly banned in the Zermatt region (local operators cite CHF 300 fines)."
      },
      {
        "day": 12,
        "camping": "no campsite in St. Niklaus - nearest: Camping & Schwimmbad Mühleye, Mühleye 7, 3930 Visp (~7 km, CHF-friendly; open 22 Mar-31 Oct; +41 27 946 20 84, info@camping-visp.ch, camping-visp.ch).",
        "campingUrl": "https://www.camping-visp.ch",
        "wild": "not allowed",
        "notes": "Stage end is St. Niklaus (3425) in town - book a bed/B&B there (spec: 'St. Niklaus (town)'). If you want a pitch, it is Camping Mühleye in Visp, ~10 min by bus or a short drive; Visp is also your cheapest car-parking + train junction for the Zermatt end."
      },
      {
        "day": 13,
        "camping": "none - sleep at Europahütte (2,275 m). No campsite anywhere nearby; nearest designated camping is in St. Niklaus/Visp (~40 km by road).",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Remote hut on the final ascent - book ahead. Note the high Grat-Galenburg section is permanently closed (2021 rockfall); the current route is valley + steep forest climb, or the St. Niklaus-Randa-Charles Kuonen Bridge alternative. Last water/food stop before Zermatt is St. Niklaus."
      },
      {
        "day": 14,
        "camping": "Camping Matterhorn, Spisstrasse 17, 3920 Zermatt - the only campsite in the car-free finish village (small, tent-oriented; +41 27 967 39 21, info@zermatt.ch). For vehicles/motorhomes: park at the Matterhorn Terminal Täsch (2,100 covered spaces) and shuttle in.",
        "campingUrl": "https://campingsearch.ch/en/camping/camping-matterhorn",
        "wild": "not allowed",
        "notes": "Zermatt is car-free - no car camping, no motorhome area in the village; motorhomes go to Täsch. Wild camping is strictly prohibited in the region (CHF 300 fines cited by local operators). The old listed web address for Camping Matterhorn (campingzermatt.ipeak.ch) is dead - confirm status/season by phone before relying on a tent night in Zermatt."
      }
    ]
  },
  "tour-of-the-vanoise": {
    "slug": "tour-of-the-vanoise",
    "parking": [
      {
        "title": "Modane station car parks (start AND finish)",
        "where": "Modane — car parks at and around the gare (Place Sommeiller), incl. Avenue Jean Jaurès and Route de Bardonnèche within ~5 min walk",
        "url": "https://fr.wikipedia.org/wiki/Gare_de_Modane",
        "notes": "A car park is laid out at the station (per the station's reference article); several more municipal lots sit within a short walk (OSM: Av. Jean Jaurès, Route de Bardonnèche next to Camping Les Combes, Rue Jules Ferry). Price unverified — municipal lots, typically free or cheap; check signs on arrival. Leave the car at the station for the whole loop: the route starts and ends at the gare, and the summer bus from Modane reaches the Orgère valley, Bellecombe (Plan du Lac) and Bonneval-sur-Arc if you ever need a lift back."
      },
      {
        "title": "Parking des Fontanettes, Pralognan-la-Vanoise",
        "where": "Les Fontanettes hamlet, upper Val de Cère — the GR55 departure toward Col de la Vanoise",
        "url": "https://www.pralognan.com/prestataire/parking-des-fontanettes-614873/",
        "notes": "Seasonal (summer only, access by municipal order). 2 h free, 3rd hour 3 €, full day 10 € (car) / 25 € (camper, max 2 days), 6 consecutive days 44 €, season 120 €. Each Fontanettes lot issues a separate ticket; parking is strictly forbidden along the road. Free summer navettes run from the village up to Les Prioux / Les Fontanettes (https://www.pralognan.com/infos-pratiques/navettes-ete/), so you can base the car in village lots instead."
      },
      {
        "title": "Val d'Isère — paid parking in winter, FREE in summer + free navettes",
        "where": "Val d'Isère — covered lots P0 Centre, P1 Face de Bellevarde, P2 La Daille, P3 Crêt, plus open-air lots (Laisinant, Manchet, Plaine de La Daille) in the lower valley",
        "url": "https://www.valdisere.com/guide-du-village/parkings/",
        "notes": "During the hiking season (summer) all village parking is free; in winter it is paid and bookable in advance. The village is car-free in its core — use the free navettes (year-round, winter and summer, https://www.valdisere.com/guide-du-village/circuler-sur-place/navettes-gratuites/) between the valley-bottom lots (La Daille / Pont Saint-Charles) and the village. A camper/van lot (P4) with fast chargers also exists. Free Altibus bus links Val d'Isère to Bourg-Saint-Maurice station."
      },
      {
        "title": "Parking de l'Écot, Bonneval-sur-Arc",
        "where": "L'Écot hamlet, 3.5 km above the village of Bonneval-sur-Arc — the Arc-valley side gate of the park",
        "url": "https://www.bonneval-sur-arc.com/commerce-et-service/parking-de-lecot-bonneval-sur-arc/",
        "notes": "Paid 15 June – 15 September (ticket at the barrier at the Pierre Fendue lot at the road's start, pay on exit): 6 h = 6 €, 24 h = 10 €. Access road restricted and weather-dependent; light vehicles and 2-wheelers only — no campers or heavy vehicles. The village centre has its own municipal lots (price unverified) which are the practical choice for the gîte night."
      }
    ],
    "wildCampingRule": "In France, wild camping outside designated areas is technically prohibited, though it is often tolerated in practice in open countryside — never in built-up areas, and it can be banned by prefectural decree (especially in dry season). Inside Vanoise National Park the rule is stricter and verified: in the park core, bivouac is allowed in summer only and only immediately next to certain staffed refuges (période de gardiennage), with a booking required through the refuge; elsewhere it is prohibited and fined. Every stage of this tour ends in a refuge or a village gîte, so wild camping is not needed (see https://www.vanoise-parcnational.fr/votre-visite/preparer-sa-visite/refuges-et-bivouac/le-bivouac-en-vanoise).",
    "stages": [
      {
        "day": 1,
        "camping": "none — sleep at Refuge de l'Orgère (key-box park refuge)",
        "campingUrl": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-lorgere-pnv",
        "wild": "not allowed",
        "notes": "Route climbs the Arc valley straight into the park core — no bivouac except designated summer areas at staffed refuges. Short 5.8 km day, so a late start from Modane station is fine. Nearest campsite: Camping Les Combes in Modane (at the loop start/finish)."
      },
      {
        "day": 2,
        "camping": "none — sleep at Refuge du Plan Sec",
        "campingUrl": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-plan-sec",
        "wild": "not allowed",
        "notes": "High park refuge (~2,540 m); book ahead in July–August, many park refuges are cash-only. Check whether a designated summer bivouac area is listed on the park's bivouac map for this refuge."
      },
      {
        "day": 3,
        "camping": "none — sleep at Refuge d'Arpont (2,647 m)",
        "campingUrl": "https://refuge-arpont.vanoise.com",
        "wild": "not allowed",
        "notes": "Staffed park refuge — 2026 season 6 June–18 September: bed 23 €, half-board 59 €, and a paid bivouac pitch (6 €) as the 'camping' option with use of the refuge's facilities. Book via the refuge's own page."
      },
      {
        "day": 4,
        "camping": "none — sleep at Refuge de Plan du Lac (2,160 m)",
        "campingUrl": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-plan-du-lac-pnv",
        "wild": "not allowed",
        "notes": "Plateau de Plan du Lac on the west side of the circuit, deep park core — bivouac only at designated refuge-adjacent areas. Practical escape route: summer bus from Modane reaches the Bellecombe parking (approach to Plan du Lac)."
      },
      {
        "day": 5,
        "camping": "none — sleep at Refuge de Vallonbrun",
        "campingUrl": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-vallonbrun-pnv",
        "wild": "not allowed",
        "notes": "Longest high day — crosses the circuit's highest point (2,956 m) on the east side. No campsite in the high Vallonbrun/Lanslevillard area (none verified); the refuge is the only practical bed. Refill water before the pass."
      },
      {
        "day": 6,
        "camping": "none — no campsite in the village; sleep at a gîte/hôtel in Bonneval-sur-Arc",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "The high part of the stage (Vallonbrun–Aussois) is park core (no bivouac); once in the village, ordinary French rules apply — but there is no campsite there, so use a gîte/hôtel. Nearest campsites: Les Richardes (Val d'Isère) or Les Combes (Modane). Resupply in the village; Parking de l'Écot is paid in summer if you drive up."
      },
      {
        "day": 7,
        "camping": "Camping Les Richardes, Val d'Isère (Le Laisinant, lower valley) — nearest classified campsite; or gîte/hôtel in the village",
        "campingUrl": "http://campinglesrichardes.free.fr/",
        "wild": "tolerated",
        "notes": "Val d'Isère is a car-free village at the park's western gate (stage crosses Col de l'Iseran 2,764 m). Park free (summer) in the valley-bottom lots and take the free navette up. Camping Les Richardes: 06 95 36 20 40, campinglesrichardes@free.fr (classified, C73-046578-001)."
      },
      {
        "day": 8,
        "camping": "none — sleep at Refuge de la Leisse (2,487 m)",
        "campingUrl": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-la-leisse-pnv",
        "wild": "not allowed",
        "notes": "Longest stage of the tour (19.6 km) up the upper Isère valley; park core throughout — no wild camping. Park refuge, book ahead; cash-only common."
      },
      {
        "day": 9,
        "camping": "none — no campsite in the village; sleep at a gîte/hôtel in Pralognan-la-Vanoise",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Descent from La Leisse (via Col de la Vanoise/Aussois) is park core until the valley floor; in the village, ordinary French rules apply. No campsite in Pralognan (verified: none in OSM); nearest is Camping Les Combes in Modane (~30 km). Free summer navettes link the village with Les Prioux and Les Fontanettes — key resupply point."
      },
      {
        "day": 10,
        "camping": "none — sleep at Refuge Péclet-Polset (2,450 m)",
        "campingUrl": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-peclet-polset",
        "wild": "not allowed",
        "notes": "Steep 1,100 m climb up the Cère valley via Les Fontanettes; deep park core, no bivouac. Park refuge — staffed season varies by year; if unstaffed it is key-box access with payment via the park's online platform (paiementrefugenongardeparcnational.vanoise.com)."
      },
      {
        "day": 11,
        "camping": "Camping Les Combes, Modane (830 Route de Bardonnèche, 07 57 56 44 40) — the classified campsite at the loop's end; or a hotel by the station",
        "campingUrl": "https://trailhuts.com/huts/gp-zatQGusU-camping-les-combes-a-modane",
        "wild": "tolerated",
        "notes": "Col de Chavière (2,796 m) is still park territory until the Arc valley; the final ~9 km descent to Modane station is outside the core, where ordinary French countryside tolerance applies — but the loop ends at the gare, so the campsite (open year-round, showers) or a station hotel are the sensible choices. Pick up the car at the station car park and take the TGV/Frecciarossa home."
      }
    ]
  },
  "grande-traversee-de-la-chartreuse": {
    "slug": "grande-traversee-de-la-chartreuse",
    "parking": [
      {
        "title": "Parking Gare de Grenoble (route start)",
        "where": "Gare de Grenoble — Parking Gares Europole (548 places, ~3 min walk) or Parking Gares Palais de Justice (396 places, ~2 min walk)",
        "url": "https://osmopark.fr/grenoble/parking-gare",
        "notes": "Paid station parking: approx. 2 €/h, cap 21.80 €/day (osmopark, checked 2026). Free P+R exist but are far from the station (P+R Grand Sablon ~3.2 km, P+R Alpexpo). No live occupancy data; the station lots are large and usually fine, tight on summer weekends/holidays. Best no-car option: arrive by train at Grenoble station (TGV from Paris ~2 h, from Lyon ~1 h 30 m) — the route starts at the station and the official page says the whole traverse is doable by public transport (TER + bus T40)."
      },
      {
        "title": "Le Sappey village car parks (stage 1 end / stage 2 start)",
        "where": "Le Sappey-en-Chartreuse (38700) — free village lots, incl. the 'Parking du Fort' at Fort Saint-Eynard (Le Saint-Eynard) and lots around the village centre / Chem. des Charmettes (Parking Jacobine)",
        "url": null,
        "notes": "Free, no published tariff (typical village parking; listed as 'Parking du Fort' / 'Parking Jacobine' in parking directories). Lots are small (several small arranged lots); can fill on summer weekends. From Grenoble ~16 km via D923 (Col de Porte) or via La Tronche/D512 (the local campsite advises the latter for large vehicles). Walkable to the stage gîtes (Le Chant de l'Eau, Le Petit Skieur) and Camping La Virette."
      },
      {
        "title": "Saint-Pierre-de-Chartreuse car parks (stage 2 end / stage 3 start)",
        "where": "Saint-Pierre-de-Chartreuse (38380) — 8 village lots, 7 free: Plan de Ville (centre), Pont des Cottaves (5 min to centre), la Correrie (10 min from trailheads / T40 bus stop), Valombré, Randonneur, Chalets de Charmant Som, Pont des Allemands",
        "url": "https://osmopark.fr/saint-pierre-de-chartreuse",
        "notes": "Free, no time limits (osmopark, checked 2026). No occupancy data; fills on summer weekends — arrive early. Parking de la Correrie is closest to the stage 3 trailhead (abbey / Grande Chartreuse side)."
      },
      {
        "title": "P+R Gare de Chambéry (route finish)",
        "where": "Parking gare de Chambéry – EFFIA, 90 av. de la Boisse, 73000 Chambéry (gare de Chambéry – Challes-les-Eaux)",
        "url": "https://www.effia.com/parking/parking-gare-de-chambery-effia",
        "notes": "Covered, open 24/7, 1.80 m height limit. Verified tariff: 2.20 €/h, 13.30 €/12 h, 20.50 €/24 h, +16.50 € per extra 24 h; reserve online for multi-day stays. No live occupancy data. Alternative: Q-Park Cassine Gare, a few minutes' walk. Less than 1 min on foot to the platforms — stage 5 finishes at the station, so this is also the car-recovery point."
      }
    ],
    "wildCampingRule": "Since 2016, free camping off designated sites ('camping à la sauvette') is technically prohibited in France and fined (typically around 135 €, up to ~1,500 € in protected areas), though a discreet one-night bivouac (light gear, set up at dusk and struck at dawn) is generally tolerated in countryside and mountain areas away from built-up zones, roads, water intakes (200 m) and classified sites. The Chartreuse is a protected massif — Parc naturel régional de la Chartreuse, with the Réserve naturelle nationale des Hauts de Chartreuse at altitude, which the GTC crosses at La Scia and Col de Bellefont: camping is forbidden in the reserve, and tented bivouac is banned there by prefectural decree in July–August (tent-free bivouac only, one night). In practice this is moot: every stage ends in a village gîte with beds and meals, so nobody needs to sleep on the mountain.",
    "stages": [
      {
        "day": 1,
        "camping": "Camping municipal La Virette, Le Sappey-en-Chartreuse — otherwise none — sleep at gîte Le Chant de l'Eau or Le Petit Skieur",
        "campingUrl": "https://www.camping-gite-chartreuse.fr",
        "wild": "tolerated",
        "notes": "Village campsite, 25 pitches, open year-round at 1,000 m: 11 €/night per adult + 5–10 € electricity (2025 tariff), 1–2 min walk to village shops. Stage 1 gîtes (Le Chant de l'Eau, Le Petit Skieur) are in the village centre. Discreet one-night bivouac tolerated in the open countryside around the village, not in the village itself."
      },
      {
        "day": 2,
        "camping": "Camping de Martinière***, Saint-Pierre-de-Chartreuse — otherwise none — sleep at gîte Le Petit Chartreux",
        "campingUrl": "https://camping-de-martiniere.com",
        "wild": "tolerated",
        "notes": "3-star campsite, 1941 route du Col de Porte, ~5 min by car from the village centre; pitches from ~20.50 €/night for 2 (verified on site); open 8 May – 13 September, so plan around that window. Stage 2 gîte Le Petit Chartreux from ~50 €/night."
      },
      {
        "day": 3,
        "camping": "Camping de l'Ourson, Entremont-le-Vieux / Épernay (nearest campsite, ~8 km down the Entremont valley) — otherwise none — sleep at gîte l'Herbe Tendre or La P'tite Lulu, St-Pierre-d'Entremont",
        "campingUrl": "https://www.campingourson.com",
        "wild": "tolerated",
        "notes": "21 pitches + 4 chalets, open year-round; pitch tariff not published online (chalets ~480–530 €/week; 04 79 26 05 63). Stage gîtes: l'Herbe Tendre from ~35 €, La P'tite Lulu from ~75 €. Big day (20.5 km, +1,219 m, no restaurants — carry food): the high section crosses the Réserve naturelle des Hauts de Chartreuse where camping is forbidden and tented bivouac is banned July–August."
      },
      {
        "day": 4,
        "camping": "Camping de l'Ourson, Entremont-le-Vieux / Épernay (~4–5 km down the valley) — otherwise none — sleep at gîte l'Escale du Désert, Le Désert d'Entremont",
        "campingUrl": "https://www.campingourson.com",
        "wild": "tolerated",
        "notes": "Nearest designated camping is l'Ourson at Épernay (21 pitches, year-round); none in Le Désert itself. Stage 4 gîte l'Escale du Désert (84/73 route du col du Mollard, ~1,200 m) takes half-board from ~55 €/person. Short stage (9.5 km): the Le Désert plateau is a small ski resort in winter; discreet bivouac tolerated on the open plateau outside July–August reserve rules."
      },
      {
        "day": 5,
        "camping": "none — finish at Chambéry station (train home); nearest campsite Family's Camping le Savoy****, Challes-les-Eaux (~7 km from Chambéry)",
        "campingUrl": "https://www.family-camping-le-savoy.com",
        "wild": "not allowed",
        "notes": "Stage 5 ends at the gare de Chambéry – Challes-les-Eaux: TER/TGV home, or collect a car at the EFFIA station parking (20.50 €/24 h). If staying: le Savoy is 4-star, 99 pitches, ~15 min by car or bus line C from the station, open April–October. No wild camping — Chambéry is a town."
      }
    ]
  },
  "kumano-kodo-nakahechi": {
    "slug": "kumano-kodo-nakahechi",
    "parking": [
      {
        "title": "Kii-Tanabe Eki-mae Daini Chuo (Kii-Tanabe Station Front No. 2 car park)",
        "where": "Kii-Tanabe, beside JR Kii-Tanabe Station; Kumano Kodo buses leave from Bus Stop No. 2 directly in front of the station",
        "url": "https://www.tanabe-kanko.jp/access/parking",
        "notes": "95 spaces; first 30 min free, then 100 yen per 30 min; open 24 h year-round. Main park-and-ride option for Nakahechi bus users. Fullness in peak (spring/autumn) season unverified - a 95-space station lot can fill on busy weekends (approx.)."
      },
      {
        "title": "Kii-Tanabe Eki-mae Chuo (Kii-Tanabe Station Front car park)",
        "where": "Kii-Tanabe, immediately by JR Kii-Tanabe Station (adjacent to the Tanabe Tourist Information Center)",
        "url": "https://www.tanabe-kanko.jp/access/parking",
        "notes": "Only 10 spaces (1 disabled bay); first 30 min free, then 100 yen per 30 min; open 24 h year-round. Very small - likely full early in peak season (approx.). JR once ran a free 48 h park-and-ride offer for through Kuroshio express tickets, but it ended 2022-03-31."
      },
      {
        "title": "Yunomine Onsen town car park",
        "where": "Yunomine Onsen, at the southern entrance to the village, next to Minshuku Takayoshi",
        "url": "https://www.tb-kumano.jp/places/yunomine/",
        "notes": "Free; 46 spaces for all vehicles. The only car park in the onsen village; likely to fill on weekends and during cherry-blossom season (approx. fullness)."
      },
      {
        "title": "Public car park near Kumano Hongu Taisha / Oyunohara",
        "where": "Hongu, near the approach to the Oyunohara old-shrine site with Japan's largest torii gate (just north of the Dainichi-goe trailhead)",
        "url": "https://www.tb-kumano.jp/en/places/hongu/",
        "notes": "Official site lists a public car park (with toilets) near the Oyunohara access. Price unverified (approx.). Crowded on weekends and during the April Hongu spring festival (approx. fullness)."
      }
    ],
    "wildCampingRule": "In Japan wild camping is effectively prohibited: most mountain land is privately owned, open fires are banned in forest areas, and shrine and town rules forbid pitching tents along the route. On the Kumano Kodo the official guidance (Tanabe City Kumano Tourism Bureau) states that camping can damage the sacred sites and that much of the mountainside is private land, so camping outside official campgrounds is not allowed, and no open campfires are permitted under any circumstances. Designated campgrounds exist in Chikatsuyu, Kawayu Onsen, Wataze (Watarase) Onsen and Koguchi, but on the Nakahechi the norm is to sleep in ryokan, minshuku or oji lodging, which are few in number and must be booked in advance.",
    "stages": [
      {
        "day": 1,
        "camping": "None - sleep at a ryokan/minshuku in Hongu or Fushiogami; nearest campsite: Tanabe Kawayu Campground (Kawayu, just downstream of Kawayu Onsen, ~4 km from Hongu)",
        "campingUrl": "https://www.tb-kumano.jp/en/lodging/campgrounds-bungalows/",
        "wild": "not allowed",
        "notes": "Short acclimatisation day over Dainichi-goe; soak in the Hongu public onsen in the evening. No campsite on the trail itself - book the Hongu/Fushiogami minshuku 2-4 weeks ahead (KUMANO TRAVEL)."
      },
      {
        "day": 2,
        "camping": "None - sleep at a minshuku in Chikatsuyu (or Nonaka/Tsugizakura); nearest campsite: Iris Park Auto Campground (Iris Park, Chikatsuyu, just off the Nakahechi)",
        "campingUrl": "https://www.tb-kumano.jp/en/lodging/campgrounds-bungalows/",
        "wild": "not allowed",
        "notes": "Longest day (9-12 h) via Mikoshi-toge, Waraji-toge and Kobiro-toge; no restaurants between Hongu and Chikatsuyu, so carry food. Split at Tsugizakura-oji or shortcut by bus if needed; Chikatsuyu has almost no shops, so book the minshuku and meals well ahead."
      },
      {
        "day": 3,
        "camping": "None - sleep at a minshuku in Takijiri or Chikatsuyu; nearest campsites: Sam's Camp (Kawai, along the Tonda-gawa river just north of Kurisugawa on Hwy 311) or Iris Park Auto Campground (Chikatsuyu)",
        "campingUrl": "https://www.tb-kumano.jp/en/lodging/campgrounds-bungalows/",
        "wild": "not allowed",
        "notes": "Via Takahara and Gyuba-doji-guchi to Takijiri-oji; no campsite in the Takijiri/Takahara area itself. Minshuku near Takijiri-oji is the norm - book ahead; use the luggage shuttle to lighten the pack."
      },
      {
        "day": 4,
        "camping": "None - sleep at a hotel in Kii-Tanabe; nearest official campsite: Koguchi Campground (Koguchi, on the Kohechi route, about an hour's drive towards Shingu)",
        "campingUrl": "https://www.tb-kumano.jp/en/lodging/campgrounds-bungalows/",
        "wild": "not allowed",
        "notes": "Bus transfer day only (~30-40 min down the valley road); no camping needed. Kii-Tanabe is the base for the Koyasan day (direct Koyasan & Kumano Access bus); drivers use the station-front city car parks."
      }
    ]
  },
  "west-highland-way": {
    "slug": "west-highland-way",
    "parking": [
      {
        "title": "Milngavie (route start) - free parking outside station/police station",
        "where": "Outside Milngavie railway station (G62 8PG) or outside the police station, Milngavie, north Glasgow",
        "url": "https://www.westhighlandway.org/getting-to--from-the-route/",
        "notes": "Most hikers don't drive: regular trains from Glasgow to Milngavie, and a direct train back to Glasgow from Fort William at the end. There is no dedicated car park at either end of the walk; parking outside Milngavie station is currently free with CCTV but can be busy at peak times, and the official advice is to park outside the police station and give them your registration and an emergency contact. A81 runs direct from Glasgow city centre; long-stay options in Glasgow itself are unverified (approx. GBP 10-25/day for long-stay lots - check before you go)."
      },
      {
        "title": "Blanefield / Ardoch House - 7-14 day car parking + baggage transfer at the start",
        "where": "Ardoch House, Blanefield G63 9AW, just south of the Milngavie start (start of the WHW)",
        "url": "https://www.westhighlandway.org/places/west-highland-way-hotel-campsite/",
        "notes": "The classic 'park at the start, transfer bags' setup: WHW Hotels & Campsites offers 7-14 day car parking plus hotel rooms, shepherds' huts, cabins, safari tents and tent pitches, with baggage transfers (13 baggage-transfer operators are listed in the official WHW directory). Price not published (approx. - phone 07488 261730, open 24/7)."
      },
      {
        "title": "Drymen (day 1) - Drymen Camping",
        "where": "Gartness Road, Drymen G63 0DN, just over a mile from the village, directly on the WHW",
        "url": "https://www.westhighlandway.org/places/drymen-camping/",
        "notes": "Campsite with car and small-campervan parking, operating seasonally mid-March to mid-October; tent pitches from GBP 10ppn (toilets, hot showers, charging, Wi-Fi included), and most WHW baggage-transfer companies deliver/pick up here. Small free village parking on the A811 also exists (size/price unverified, can be busy in peak)."
      },
      {
        "title": "Rowardennan (day 2)",
        "where": "Rowardennan car park, A82 (Ben Lomond start), Rowardennan",
        "url": "https://www.westhighlandway.org/drymen-to-rowardennan/",
        "notes": "Small lochside car park where the A82 ends at the furthest north-east-shore road access to Loch Lomond; it is the start for Ben Lomond and the Ardess trail. Fills up in summer peak (May is the busiest month, avoid Saturday starts); price unverified (approx.)."
      },
      {
        "title": "Fort William (route finish)",
        "where": "Town-centre car parks (High Street / Cameron Street) and B&B/hotel parking, Fort William",
        "url": "https://www.parkopedia.co.uk/parking/highland/fort-william/",
        "notes": "No dedicated car park at the finish (Gordon Square statue). Town-centre metered car parks are hourly-priced, typically capped around GBP 10-15/day (approx. - verify on Parkopedia, page content is JS-rendered). Several Fort William B&Bs/hotels will let you leave your vehicle overnight, sometimes for a fee or a donation - arrange in advance (per the official WHW site)."
      }
    ],
    "wildCampingRule": "In Scotland, wild camping is a legal access right on most unenclosed land under the Land Reform (Scotland) Act 2003 (2003 asp 2), exercised only in a responsible manner per the Scottish Outdoor Access Code: small groups (under 20), no open fires (stoves preferred - the WHW says use a stove wherever possible), stay well away from buildings, roads, enclosed fields and historic structures, and leave no trace. On the West Highland Way, B&Bs, pubs and bunkhouses are the norm at every stage end, and Rannoch Moor (day 6) is the classic open-moor camping ground. Important caveat: the east shore of Loch Lomond (days 2-3) has a Camping Management Zone byelaw from 1 March to 30 September, when camping is permitted only in campsites and designated permit areas.",
    "stages": [
      {
        "day": 1,
        "camping": "Drymen Camping (Gartness Road, just over a mile from Drymen village, on the WHW)",
        "campingUrl": "https://www.westhighlandway.org/places/drymen-camping/",
        "wild": "allowed",
        "notes": "From GBP 10ppn incl. toilets/showers/Wi-Fi; seasonal mid-March to mid-October; most baggage-transfer firms pick up here, and the site sits just before the National Park Camping Management Zone starts. Access Code applies at the Drymen end of the day (small group, no fires)."
      },
      {
        "day": 2,
        "camping": "Cashel Campsite (directly on the route ~1.5 km north of Rowardennan, between Balmaha and Rowardennan); The Mar Huts (Milton of Buchanan, at the foot of Conic Hill) as a luxury alternative",
        "campingUrl": "https://www.westhighlandway.org/places/cashel-campsite/",
        "wild": "not allowed",
        "notes": "Byelaws 1 Mar-30 Sep: inside the Loch Lomond Camping Management Zone camping is only permitted in campsites - the official section lists Cashel, Milarrochy and Sallochy along this stretch (plus Inchcailloch island). Rowardennan itself has a hotel and a youth hostel (Rowardennan Lodge YHA) but no campsite in the village."
      },
      {
        "day": 3,
        "camping": "Beinglas Campsite (west shore near Inveruglas, reached by waterbus from Inversnaid/Tarbet) or Inversnaid Bunkhouse + campsite (east shore, 800 m from the route at Inversnaid)",
        "campingUrl": "https://www.westhighlandway.org/places/beinglas-campsite/",
        "wild": "not allowed",
        "notes": "Same Mar-Sep camping byelaws cover this section of north Loch Lomond. Inverarnan has no campsite - the stage ends in pubs (the renowned Drovers Inn is the traditional stop); Ardlui has B&Bs on the west shore."
      },
      {
        "day": 4,
        "camping": "Tyndrum Holiday Park (formerly Pine Trees Caravan Park; hiker pods and glamping pods) in Tyndrum",
        "campingUrl": "https://www.westhighlandway.org/places/tyndrum-holiday-park/",
        "wild": "allowed",
        "notes": "Crianlarich (the halfway point) has B&Bs, shops and accommodation via a short spur path into the village. Tyndrum is still inside the National Park but outside the Loch Lomond byelaw zone, so open-ground camping is fine under the Access Code. Bookings: 01838 400 349 (price not listed)."
      },
      {
        "day": 5,
        "camping": "None in Inveroran - sleep at a B&B/pub in Inveroran; nearest campsites are Glencoe Mountain Resort at Kingshouse (mid-route) or Tyndrum Holiday Park (15 km back)",
        "campingUrl": "https://www.westhighlandway.org/places/glencoe-mountain-resort/",
        "wild": "allowed",
        "notes": "Tyndrum is the last chance to stock up - no shops until Kinlochleven 28 miles further. Remote glens (Beinn Dorain, Loch Tulla) with no byelaws; small low-impact camps on open ground are tolerated under the Access Code. Refreshments at Tyndrum, Bridge of Orchy and Inveroran."
      },
      {
        "day": 6,
        "camping": "Glamping Pods & Campsite adjacent to Blackwater Hostel, Kinlochleven",
        "campingUrl": "https://www.westhighlandway.org/places/glamping-pods-campsite/",
        "wild": "allowed",
        "notes": "Camping from GBP 10pppn, pods/lodges GBP 50-75. This is the wilderness heart - Rannoch Moor and the Devil's Staircase (550 m) descent to Kinlochleven; Rannoch is the route's classic wild-camping ground, but the moor is very exposed in bad weather and there is no shelter between Inveroran and the Glencoe Ski Centre/Kingshouse."
      },
      {
        "day": 7,
        "camping": "None - finish in Fort William: B&B/hotel on the High Street (several take hikers' cars, arrange in advance); Black Isle Bar is the pub at the official finish",
        "campingUrl": null,
        "wild": "allowed",
        "notes": "Over the Lairigmor, down Glen Nevis into the Ben Nevis valley; the Way ends at the bronze walker statue in Gordon Square. A last night under canvas in the Glen Nevis/Ben Nevis valley is fine under the Access Code, but it's a celebration town - most hikers take a room for the finishing pint."
      }
    ]
  },
  "pennine-way": {
    "slug": "pennine-way",
    "parking": [
      {
        "title": "Edale village car park (start)",
        "where": "Bottom of Edale village, Derbyshire — pay & display, operated by High Peak Borough Council; the traditional Pennine Way start beside the Moorland Centre.",
        "url": "https://www.peakdistrict.gov.uk/visiting/visitor-centres/edale",
        "notes": "Small car park with limited spots that fills up early in the day (PDNPA warns several car parks 'fill up early' in peak season), so on a July weekend arrive before ~8-9am. Price: pay & display, fee unverified. Public-transport alternative: direct Hope Valley Line trains from Manchester Piccadilly (~45 min) or Sheffield (~35 min) stop at Edale station ~10 min walk from the start; PDNPA car parks prohibit overnight parking/camping."
      },
      {
        "title": "Kirk Yetholm village car parks (finish)",
        "where": "Village of Kirk Yetholm, Scottish Borders (just inside Scotland) — the Pennine Way officially ends at the Border Hotel on The Green.",
        "url": "https://en.wikivoyage.org/wiki/Kirk_Yetholm",
        "notes": "Only small village parking areas; price unverified. Getting a car back: the walk ends in the village centre, so a car left in Kirk Yetholm is a short walk from the finish (or take the Border Hotel pint, per Wainwright). Public transport into the village: Borders Bus 81 Kelso–Kirk/Town Yetholm 3-4x daily Mon-Sat, none Sundays — a car is effectively needed."
      },
      {
        "title": "Malham car park, Chapel Gate (en-route hub)",
        "where": "Chapel Gate, south end of Malham village, North Yorkshire — main car park and visitor information centre, next to the Buck Inn bus stop.",
        "url": "https://en.wikivoyage.org/wiki/Malham",
        "notes": "Paid in summer, fee unverified; one of the Dales' busiest car parks, so expect it full on summer weekends — arrive early or use Bus 210/211 from Skipton. Handy for a mid-walk resupply or car-recovery stop (stage 6 end)."
      },
      {
        "title": "Hawes village car parks (en-route hub)",
        "where": "Hawes, Wensleydale, North Yorkshire (A684) — village pay & display car parks along the A684.",
        "url": "https://en.wikivoyage.org/wiki/Hawes",
        "notes": "Price unverified; usually more space than Malham but fills on Tuesday market day and summer weekends. Best resupply hub on the route (general store, Spar, fuel at Dalehead Garage) — typical car-recovery point around day 8."
      }
    ],
    "wildCampingRule": "There is no right to wild camp in England: the Countryside and Rights of Way Act 2000 gives access to open country but no right to pitch, so camping without the landowner's permission is trespass. The Peak District National Park Authority states there is no provision for camping on open access land and that it does not allow wild camping on any land it owns, and the same close farmed logic applies in the Yorkshire Dales, where unauthorised camping is generally not tolerated. The norm along the Pennine Way is B&Bs, pubs and farm B&Bs at every stage end (book ahead in summer), with a handful of licensed campsites at Edale, Malham, Horton, Hawes, Keld, Byrness and Kirk Yetholm.",
    "stages": [
      {
        "day": 1,
        "camping": "None — sleep at pub/B&B in Crowden",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "First village after 25.7 km across Kinder Scout and Bleaklow; small settlement with few rooms, book ahead. Nearest legal camping is behind you at Fieldhead Campsite, Edale (approx. £5-6.50/adult, unverified)."
      },
      {
        "day": 2,
        "camping": "None — sleep at B&B in Brun Clough",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Tiny hamlet on the Longdendale side of Black Hill; a handful of B&Bs and pub rooms, book ahead. No campsites in this area."
      },
      {
        "day": 3,
        "camping": "None — sleep at B&B in Charlestown (Walsden)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Small West Yorkshire village after crossing Black Hill; accommodation is limited, reserve early for summer. No campsites."
      },
      {
        "day": 4,
        "camping": "None — sleep at B&B in Ponden",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Ponden is a tiny hamlet with very few rooms — the tightest booking bottleneck on the route, so book first. Passes the Top Withens ruins."
      },
      {
        "day": 5,
        "camping": "None — sleep at B&B in Thornton-in-Craven",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Short stage over Pinhaw Beacon; Thornton has several B&Bs and the canal-side is pleasant. No campsites in this stretch of the South Pennines."
      },
      {
        "day": 6,
        "camping": "Riverside Campsite (Cove Rd, Malham) — or YHA Malham (April-Oct)",
        "campingUrl": "https://en.wikivoyage.org/wiki/Malham",
        "wild": "not allowed",
        "notes": "Into the Dales; Malham has many B&Bs (approx. £120-160/double), a campsite and a hostel, but it's the busiest Dales stage end — book well ahead. See Malham Cove and the limestone pavement next morning."
      },
      {
        "day": 7,
        "camping": "Holme Farm Campsite (grass pitches, tents/motorhomes, no caravans) or Cragg Hill Farm Camping (May-Sep)",
        "campingUrl": "https://en.wikivoyage.org/wiki/Horton-in-Ribblesdale",
        "wild": "not allowed",
        "notes": "Long day over Pen-y-Ghent; Horton is a small village (Crown Hotel is the main pub/rooms) plus two small campsites. Trains from Leeds via the Settle–Carlisle line stop at Horton as a backup."
      },
      {
        "day": 8,
        "camping": "Hawes Caravan & Motorhome Club Campsite (Brunt Acres Rd), pitch approx. £22 — or YHA Hawes (tent approx. £33)",
        "campingUrl": "https://en.wikivoyage.org/wiki/Hawes",
        "wild": "not allowed",
        "notes": "Hawes is a proper village with multiple B&Bs (approx. £120-150/double), a hostel and a campsite. Good resupply stop: shops, fuel and Wensleydale cheese at the Gayle creamery."
      },
      {
        "day": 9,
        "camping": "Rukin's Campsite (Keld Lane), April-Sep, approx. £12/adult, no bookings — or Keld Bunk Barn & Yurts",
        "campingUrl": "https://en.wikivoyage.org/wiki/Keld",
        "wild": "not allowed",
        "notes": "Over Great Shunner Fell; Keld has B&Bs, a hostel and a small campsite but the village is tiny and books out in summer. No mobile signal in Swaledale — paper map."
      },
      {
        "day": 10,
        "camping": "None — sleep at B&B in God's Bridge",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Crosses the C2C and passes the Tan Hill Inn (524 m, England's highest pub) which has rooms if you want to break the stage. God's Bridge is a very small settlement — book ahead."
      },
      {
        "day": 11,
        "camping": "None — sleep at the pub in Forest-in-Teesdale",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Long moorland stage across the North Pennines; Forest-in-Teesdale is a remote hamlet with minimal facilities and no campsite found along the Teesdale stretch. Carry food in — the next shops are Middleton-in-Teesdale or Barnard Castle off-route."
      },
      {
        "day": 12,
        "camping": "None — sleep at B&B in Dufton",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Follows the Tees past High Force and Cauldron Snout (short detours worth doing); Dufton has a few B&Bs and a pub. No campsites on this stretch."
      },
      {
        "day": 13,
        "camping": "None — sleep at B&B in Alston (e.g. Cumberland Hotel, Alston House) or YHA Alston (approx. £20.50-25/bunk)",
        "campingUrl": "https://en.wikivoyage.org/wiki/Alston",
        "wild": "not allowed",
        "notes": "Cross Fell (893 m) — the route's high point and the coldest, windiest stage. Alston is the highest market town in England with several B&Bs/hotels and a YHA; no campsite."
      },
      {
        "day": 14,
        "camping": "None — sleep at B&B in Greenhead",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Down the South Tyne past Whitley Castle Roman fort; Greenhead is a small village on the A69 with a handful of B&Bs. No campsite found."
      },
      {
        "day": 15,
        "camping": "Hostel in Once Brewed (book ahead)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Short stage onto Hadrian's Wall; the hostel at Once Brewed is the main base for this stretch, so reserve early. No campsite."
      },
      {
        "day": 16,
        "camping": "None — sleep at B&B in Bellingham",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Along the wall (Housesteads detour optional) through Wark Forest; Bellingham is a substantial village with several B&Bs and shops. No campsites."
      },
      {
        "day": 17,
        "camping": "Campsite at Byrness (per Wikipedia) — or Forest View Inn (pub with rooms)",
        "campingUrl": "https://en.wikipedia.org/wiki/Byrness",
        "wild": "not allowed",
        "notes": "Byrness is the last village before the Cheviot fells: an inn (Forest View), a campsite and other accommodation. Base logistics here — the next 21.7 km (day 18) is open fell with no habitation."
      },
      {
        "day": 18,
        "camping": "None — sleep at B&B in Clennel Street",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Over Cairn Hill (the Cheviot ridge) and down to a tiny hamlet with very limited accommodation — book early. No campsites."
      },
      {
        "day": 19,
        "camping": "Kirkfield Caravan Park (Grafton Rd, Town Yetholm), April-Oct, small tent £10 / hook-up £23.50 — or Border Hotel / Friends of Nature House hostel",
        "campingUrl": "https://en.wikivoyage.org/wiki/Kirk_Yetholm",
        "wild": "tolerated",
        "notes": "The walk enters Scotland near Ogre Hill, where small-scale wild camping is tolerated under the Scottish Outdoor Access Code — but the finish is the Border Hotel in Kirk Yetholm, so book the last night. Collect your car in the village."
      }
    ]
  },
  "juliana-trail": {
    "slug": "juliana-trail",
    "parking": [
      {
        "title": "Kranjska Gora car parks (park once for the whole loop)",
        "where": "Multiple lots: Obcina, Dvorana Vitranc, P+R 'Za policijo', Borovska cesta, Rute, Dovje; live free-space counters on the municipal portal",
        "url": "https://parking.kranjska-gora.si/en/",
        "notes": "Strategy: leave the car here on day 1 and collect it on day 16 — the loop finishes where it starts. Prices not verified (price list is JS-rendered). During the Julian Alps Trail Run (until 21 Sep 2026) the Obcina and Dvorana Vitranc lots are closed; guests with a GOST permit park free in the remaining lots. P+R Na Prodih (Mojstrana) covers days 1-2."
      },
      {
        "title": "Bovec central parking",
        "where": "Lots in town centre / by the Soča and tourist info (Rupa 17, 5230 Bovec)",
        "url": null,
        "notes": "Prices not verified. Gets full early in summer (rafting/kayak shuttles). Bovec hop-on-hop-off e-van to Log pod Mangartom runs from the town (5 EUR, book via ToyotaGO app)."
      },
      {
        "title": "Bled — Seliše RV/camper parking + central lot",
        "where": "Seliše RV parking near Mercator, Kajuhova cesta; central town lot (EasyPark); Blejski grad 2 lot (16 RV spots)",
        "url": "https://www.bled.si/en/information/how-to-get-to-bled/20190920131933/by-rv-or-camper-van",
        "notes": "Seliše: 24 h = 20/25 EUR, 40 EUR in Jul-Aug, cash only, tourist tax separate. Central lot approx 3 EUR/h, RVs 08:00-20:00 (15 spots). Very crowded in peak summer — arrive early or use the Seliše lot."
      },
      {
        "title": "Kobarid central parking",
        "where": "Lots by the river in town centre / near the Kobarid Museum",
        "url": null,
        "notes": "Prices not verified. Much quieter than Bovec in summer. Free Kobarid hop-on-hop-off shuttle buses run Jul-Aug (2026 season confirmed)."
      },
      {
        "title": "Tarvisio (IT) town parking",
        "where": "Municipal lots in the centre / near the train station",
        "url": null,
        "notes": "Italian parking rules apply; prices not verified (tarvisiano.org hospitality page no longer resolves). Useful only as a day 15/16 transfer point."
      }
    ],
    "wildCampingRule": "Wild camping (pitching a tent outside designated areas) is prohibited in Slovenia and fined (amounts not verified). Inside Triglav National Park — which covers the Soča valley and parts of the Bohinj section of this route — the park code of conduct explicitly forbids sleeping out and tent pitching outside designated spots. Use the official campsites listed per stage, or the huts and guesthouses on the route. Day 15 is in Tarvisio (Italy), where unaccompanied wild camping is generally not allowed either.",
    "stages": [
      {
        "day": 1,
        "camping": "Kamp Spik (Spik, a few km off the valley road)",
        "campingUrl": "https://kranjska-gora.si/en/accommodation/category/camps",
        "wild": "not allowed",
        "notes": "Kamp Spik is the nearest campsite (listed in the official KRG camps category). P+R Na Prodih at Mojstrana is reachable by car. Overnight: Hostel Lukna, Mojstrana."
      },
      {
        "day": 2,
        "camping": "none — sleep at Guest House Ejga (Jesenice)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "No campsite in the KRG–Jesenice corridor; nearest are Camping Bled (ahead) or Kamp Spik (behind)."
      },
      {
        "day": 3,
        "camping": "none — sleep at Gostisce Draga (Begunje)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "High stage over the Baca valley; no camp options. Basca Gora huts offer mountain-hut bunks as a fallback."
      },
      {
        "day": 4,
        "camping": "Camping Bled (Kidriceva cesta 10c, 4260 Bled)",
        "campingUrl": "https://www.bled.si/en/accommodation/list-of-accommodations/2022022414303127/camping-bled",
        "wild": "not allowed",
        "notes": "About 100 pitches + 16 glamping tents, ~100 m from the lake, Sava Camping operator. Bled is busy in summer — book ahead."
      },
      {
        "day": 5,
        "camping": "none — sleep at Hotel Jelka (Pokljuka)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Open plateau with no campsites; overnighting out is enforced strictly (TNP zone)."
      },
      {
        "day": 6,
        "camping": "none — sleep at Hotel Majerca (Stara Fuzina)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Campsite options exist at the head of Lake Bohinj but are off-route; Majerca sits on the trail."
      },
      {
        "day": 7,
        "camping": "none — sleep at Sunrose 7 (Bohinjska Bistrica)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Nearest camping is at the end of Lake Bohinj. The Bohinj Railway runs through Podbrdo/BB with a motorail car-load service (vehicle up to 3 m high)."
      },
      {
        "day": 8,
        "camping": "none — sleep at Hikers Hut Hisar (Podbrdo)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Hisar is a small hikers' hut; no camp nearby. Motorail train at Podbrdo station can carry the car if needed."
      },
      {
        "day": 9,
        "camping": "Kamp Sorli Koritnica (Koritnica 61a, 5242 Grahovo ob Baci)",
        "campingUrl": "https://www.soca-valley.com/sl/nastanitve/?type=2024011211050554",
        "wild": "not allowed",
        "notes": "Official Soča valley campsite listing (soca-valley.com); closest camp to the Grahovo stage. Overnight: Hisa Brdo."
      },
      {
        "day": 10,
        "camping": "Sotorisce Senca (Modrejce 2g, 5216 Most na Soci)",
        "campingUrl": "https://www.soca-valley.com/sl/nastanitve/2024011711341814/sotorisce-senca/",
        "wild": "not allowed",
        "notes": "Campsite by the Soča in Most na Soci. Overnight: Penzion Sterk. Railway station in town."
      },
      {
        "day": 11,
        "camping": "Kamp Gabrje (Gabrje 29, 5220 Tolmin)",
        "campingUrl": "https://www.soca-valley.com/sl/nastanitve/2024070110433293/kamp-gabrje/",
        "wild": "not allowed",
        "notes": "River campsite at Gabrje, a few km short of Tolmin — the most popular camping stop on the Soča side."
      },
      {
        "day": 12,
        "camping": "Kamp Koren Kobarid (Ladra 1b, 5222 Kobarid)",
        "campingUrl": "https://www.soca-valley.com/sl/nastanitve/2024011613030698/kamp-koren-kobarid/",
        "wild": "not allowed",
        "notes": "Campsite at the southern edge of Kobarid (Kamp Rut Svino is the other). Overnight: Hotel Hvala / hostel. WWI trails start in town."
      },
      {
        "day": 13,
        "camping": "Kamp Polovnik (Ledina 8, 5230 Bovec)",
        "campingUrl": "https://www.soca-valley.com/sl/nastanitve/2024011614545956/kamp-polovnik/",
        "wild": "not allowed",
        "notes": "Campsite just outside Bovec (Kamp Liza and Kamp Vodenca also in town). Bovec is the valley's activity hub — expect early-morning rafting/kayak shuttles."
      },
      {
        "day": 14,
        "camping": "none — sleep at Hisa Uriska / Hostel Kronotop (Log pod Mangartom)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "No campsite in Log. Bovec hop-on-hop-off e-van (5 EUR, ToyotaGO app booking) runs to the parking by the last tunnel of the Mangart road."
      },
      {
        "day": 15,
        "camping": "none — sleep at Hotel Tarvisio / Edelhof (Tarvisio, IT)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "First Italian stage; no campsite verified there. Cross-border Predel pass bus Bovec–Tarvisio–Kranjska Gora runs in the summer season."
      },
      {
        "day": 16,
        "camping": "Kamp Spik (Spik) or return to Kranjska Gora",
        "campingUrl": "https://kranjska-gora.si/en/accommodation/category/camps",
        "wild": "not allowed",
        "notes": "Loop closes in Kranjska Gora — collect the car parked on day 1. Overnight: Skipass Superior / Mountain Melody."
      }
    ]
  },
  "via-engiadina": {
    "slug": "via-engiadina",
    "parking": [
      {
        "title": "Vinadi - valley road car park (route start)",
        "where": "Vinadi (commune Valsot), Vinschger valley road (Via Samignun), approached from Meran, Italy (~45 min by car)",
        "url": null,
        "notes": "OSM-verified parking area at the valley-road edge (Via Samignun); no published fee - free or negligible village parking (approx., unverified). Small village, limited spots, can fill in summer; the marked trail starts ~500 m uphill from the 'Vinadi' bus stop on the main road. Vinadi itself has no lodging (former Restaurant Weinberg closed, per wandersite.ch) - pre-night in Martina i.E. (Chasa Engiadina Garni / Pension Rezia) or in Tschlin."
      },
      {
        "title": "Scuol - village parking + Motta Naluns lift drop-off",
        "where": "Scuol village centre (Vulpera, San Jon) and TCS Camping Scuol (Gurlaina, 7550 Scuol)",
        "url": "https://camping.tcs.ch/en/campsites/tcs-camping-scuol/",
        "notes": "Several OSM-verified village car parks (Via da Ftan, Stradun, Via da la Dmura, Chant da Gurlaina); village-zone street fees unverified (Engadin village centres charge small fees - approx. CHF 2-3/h, verify on site). TCS Camping Scuol: parking included on the pitch (verified), 190 pitches so rarely full; the Motta Naluns gondola base station (Vulpera) is a short walk or bus ride from the village - the stage-3 'cheat code' drop-off. Scuol is on the Bernina line (train) and the PostBus network, a good place to pre-position the car; the campsite guest card covers bus + lifts (verified)."
      },
      {
        "title": "Samedan - Engadin hub parking",
        "where": "Samedan village/station area; Camping Gravatscha (Plazza Aviatica 27, 7503 Samedan); TCS Camping Samedan (Via da Bernina 2, 7503 Samedan)",
        "url": "https://www.camping-gravatscha.ch/",
        "notes": "OSM-verified lots around the village centre (Cho d'Punt, Plazzet, Cristansains, San Bastiaun); street fees unverified (approx. CHF 2-3/h, verify on site). Camping Gravatscha: free parking (verified), large lot, easy; TCS Camping Samedan: parking on the pitch (verified). Car-light context: the Engadin is a deliberately car-light valley - centre parking is scarce, so the intended setup is a car left at Maloja or Scuol plus PostBus/train/lifts. Samedan is a station village on the Chur-Tirano line and base of the Samedan-Corviglia gondola, the natural mid-route car park."
      },
      {
        "title": "Maloja - finish at the Maloja Pass (critical)",
        "where": "Maloja village (Maloja Posta) and the Maloja Pass; Camping Maloja (Plan Curtinac, Isola 8, 7516 Maloja)",
        "url": "https://www.camping-maloja.ch/",
        "notes": "OSM-verified car parks along the Strada Cantonale at Maloja Posta/Orden/Pila, right by the station and ~1-2 km from the pass; fees unverified (pass-area lots fill on summer weekends - arrive early). Camping Maloja: car CHF 3/night (verified, 2026), season 1 June-30 Sep, no reservations (first-come first-served), 'a small to medium tent almost always fits' (verified). Train option: Maloja station is on the UNESCO Bernina line (Chur-Tirano) - take the train to Tirano, Chur or St. Moritz instead of pre-positioning the car (sbb.ch, previously verified portal); a driver from Meran needs ~3.5-4 h via the main road to bring the car to the pass."
      }
    ],
    "wildCampingRule": "In Switzerland, camping outside designated sites is generally not allowed in valley and village areas: cantonal and municipal rules (Grisons, all Engadin villages) restrict it - the SAC-linked bivouac-prohibition list records whole-municipality bans for Pontresina and Val Müstair, the Swiss National Park (Val Müstair) bans all camping, and the Bernina-Albris hunting-ban zone is a no-bivouac area - while a single, quiet night of a small group above the tree line is usually tolerated if done considerately (SAC guideline, verified). On the Italian approach side (South Tyrolean Vinschgau) wild camping is prohibited with fines of approx. EUR 100-500, strictly enforced in tourist areas (verified). The Engadin is a car-light, village-oriented valley, and designated options cover the route: five verified campsites (Strada/Tschlin, Scuol, Zernez, Samedan x2, Maloja) plus mountain huts, alpine inns and village B&Bs at every stage end.",
    "stages": [
      {
        "day": 1,
        "camping": "Camping Arina, Strada (Foppa Lunga 153, 7558 Strada/Tschlin) - nearest designated campsite, ~1-2 km from Tschlin village; no campsite in Tschlin itself",
        "campingUrl": "http://campingarina.ch/",
        "wild": "not allowed",
        "notes": "May-Oct season, fee, showers/toilets/power, dogs allowed, cash accepted; operator Georg Häfner, +41 79 622 93 17. In Tschlin: B&B rooms (Ute Börner, Chasa 69, +41 81 860 10 42) and Hotel Macun by the bus stop (per wandersite.ch). No lodging in Vinadi - pre-night in Martina i.E. (Chasa Engiadina Garni / Pension Rezia)."
      },
      {
        "day": 2,
        "camping": "none - no campsite in Sent; sleep at Hotel Rezia, Sent (village)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Sent is a small village on the valley road: Hotel Rezia (+41 81 864 12 92, village list at sent-online.ch). En-route fallbacks: Pension Arina (Vnà) and Hotel Val Sinestra / Berggasthaus Hof Zuort in the Val Sinestra side valley (all per wandersite.ch); bus Sent-Scuol for an escape."
      },
      {
        "day": 3,
        "camping": "Motta Naluns has no overnight hut (mountain-station restaurant only) - take the Motta Naluns gondola down to Vulpera/Scuol and sleep at TCS Camping Scuol (Gurlaina, 7550 Scuol) or a Scuol hotel",
        "campingUrl": "https://camping.tcs.ch/en/campsites/tcs-camping-scuol/",
        "wild": "tolerated",
        "notes": "The Motta Naluns plateau (~2,150 m) is above the tree line - a single quiet night is generally tolerated per SAC guidelines, but there is no shelter or food at the top once the restaurant closes, so the lift-down to Scuol is the standard option. TCS Camping Scuol: 190 pitches, cafe/mini-shop, e-bike charging, open year-round (self check-in in winter), check-in from 14:00, guest card = free bus + lifts."
      },
      {
        "day": 4,
        "camping": "none - no campsite in Ardez; sleep at Hotel Alvetern (hiking hotel) or village B&B rooms",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Ardez: Hotel Alvetern (+41 81 862 21 44) and private rooms (e.g. Barbüda, +41 81 862 23 79, per wandersite.ch); village is a 15-min walk down from the trail end. Long high day via Alp Laret (2,206 m) - lunch at Alp Laret or the Prui mountain restaurant; nearest campsite is TCS Camping Scuol (~7 km)."
      },
      {
        "day": 5,
        "camping": "none - no campsite in Lavin; sleep at Wanderhotel Piz Linard, Lavin",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Lavin: Wanderhotel Piz Linard (+41 81 862 26 26, per wandersite.ch); alternative: overnight in Guarda on the lower valley variant (Hotel Piz Buin / Hotel Meisser). No camping between Ardez and Lavin - nearest site is TCS Camping Scuol (~7 km east)."
      },
      {
        "day": 6,
        "camping": "Camping Cul Zernez (Madinas s/n, 7530 Zernez) - on the Inn meander at the Swiss National Park gate, 5-min walk to Zernez centre and station",
        "campingUrl": "https://www.camping-cul.com",
        "wild": "not allowed",
        "notes": "Family-run since 1953; summer season ~1 May-17 Oct (bookings open each January via booking.camping.care); kiosk, bistro, laundry, playground; +41 81 856 14 62. Alternative: Hotel Bär-Post Zernez (baer-post.ch). Short breather day along the Inn valley floor; the National Park museum (Cluozza) is in Zernez."
      },
      {
        "day": 7,
        "camping": "none - no campsite in Zuoz; sleep at a Zuoz hotel (e.g. historic Cruisch Alva)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Zuoz (1,716 m): several hotels incl. Cruisch Alva (+41 81 854 13 19, village list at zuoz.ch, per wandersite.ch); alternative: overnight in Brail on the route (B&B Hotel Post / Hotel Veduta). Nearest campsites: Camping Cul Zernez (~8 km) or TCS Camping Samedan (~15 km)."
      },
      {
        "day": 8,
        "camping": "TCS Camping Samedan (Via da Bernina 2, 7503 Samedan) ~600 m from the station; alternative: Camping Gravatscha (Plazza Aviatica 27) with 9 bungalows",
        "campingUrl": "https://camping.tcs.ch/en/campsites/tcs-camping-samedan/",
        "wild": "not allowed",
        "notes": "TCS Camping Samedan: 60 pitches, 3-star, by the Flazbach river - currently closed for refurbishment, reopening only for winter 2026/27 windows, so confirm the 2027 summer season before relying on it. Camping Gravatscha: open year-round (2026: 13 Apr-8 Nov), free parking/WiFi, restaurant Piste 21, +41 76 253 77 36 (camping-gravatscha.ch, verified)."
      },
      {
        "day": 9,
        "camping": "none - no overnight hut at Corviglia (mountain station + self-service restaurant only); take the Samedan-Corviglia gondola or the Signalbahn down to Celerina/St. Moritz-Bad and sleep there",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "The Corviglia ridge (route high point 2,557 m) is above the tree line - a single quiet night is generally tolerated per SAC guidelines, but keep clear of the ski area and the huts, and avoid the nearby Bernina-Albris hunting-ban zone (bivouac prohibited). The big day (+1,110 m): the Samedan-Corviglia gondola is the cheat code; the Marguns alp hut/restaurant (self-service) is the only mountain stop en route."
      },
      {
        "day": 10,
        "camping": "Camping Maloja (Plan Curtinac, Isola 8, 7516 Maloja) - by the Silvaplana shore at the foot of Piz Margna, ~2 km from the Maloja Pass",
        "campingUrl": "https://www.camping-maloja.ch/",
        "wild": "not allowed",
        "notes": "Season 1 Jun-30 Sep, no reservations (first-come first-served); 2026 rates: CHF 13/person + pitch CHF 12-22 + car CHF 3; +41 81 824 31 81. Alternative: Hotel Schweizerhaus Maloja (+41 81 838 28 28). Finish: Maloja station on the UNESCO Bernina line - train to Tirano/Chur/St. Moritz (sbb.ch, verified) if the car is not pre-positioned at the pass."
      }
    ]
  },
  "lechweg": {
    "slug": "lechweg",
    "parking": [
      {
        "title": "Formarinsee start - Lech am Arlberg (Anger Tiefgarage)",
        "where": "Lech am Arlberg (Vorarlberg), base of the Lechweg start at the Formarinsee (~1,793 m, near Dalaas/Bludenz)",
        "url": "https://www.lechweg.com/de/service/anreise-parken/",
        "notes": "Official Lechweg access: park in Lech am Arlberg - Anger Tiefgarage, open 24h, EUR 10/day, right at the bus stop for the seasonal hike bus to the Formarinsee start (runs mid-June to October). No verified car road to the lake itself; final stretch on foot/via bus. Access road is the Flexenpass (Lechtalstrasse), not winter-safe - closed in winter. You may leave the car for the whole hike at the start OR at the finish (Füssen); train connections to Lech run from Dornbirn/Bregenz (summarized on the same page)."
      },
      {
        "title": "Bludenz (center zones, V-Parking / EasyPark / Parkster)",
        "where": "Bludenz (Vorarlberg), end of day 1",
        "url": "https://www.v-parking.at/bludenz/",
        "notes": "Town center has paid parking zones, ticketless payment via EasyPark/Parkster apps (V-Parking, the official operator linked from bludenz.at); exact rate table not published online - see the city's zone overview map on bludenz.at. S-Bahn Vorarlberg stops at Bludenz (toward Bregenz/Dornbirn), so you can also park near the station and move by train. For a week-long hike, Bludenz works as the 'leave the car at the start' end."
      },
      {
        "title": "Feldkirch (zones 1-3, garages, P+R Prenn)",
        "where": "Feldkirch (Vorarlberg), end of day 2",
        "url": "https://www.feldkirch.at/leben-in-feldkirch/mobilitaet/parken-in-feldkirch",
        "notes": "~1,650 public spaces incl. 7 underground garages. Zone 1 (old town): EUR 1.70/h, Mon-Fri 8-12 and 13-18, Sat 8-12. Zone 2: EUR 1.10/h, day ticket EUR 6.40 (no consecutive day tickets - after one day ticket each further hour is billed separately, so multi-day parking is pricey). Zone 3 (Wildpark): EUR 2/h, EUR 8/day. Underground garages: EUR 8/started hour, EUR 47.60/started 12 h. P+R Prenn-Parkplatz (Wichnergasse) at the station: EUR 1.10/h, EUR 6.40/day. Fulls up most on weekend afternoons in the old town."
      },
      {
        "title": "Füssen finish - long-term P1/P5 + Neuschwanstein car-park context",
        "where": "Füssen, Bavaria (finish at the Lechfall, end of day 7)",
        "url": "https://www.fuessen.de/service/vor-deinem-urlaub/anreise/",
        "notes": "Official long-term parking for hikers: Festplatz (P1) up to 2 weeks, EUR 5 per 24 h (ask the Tourist Info first whether a large event blocks it), ~25 min walk to old town; Tiefgarage City Sparkassenhaus (P5, APCOA) up to 10 days, ~EUR 56 (convert the ticket to a 10-day pass right after entry); P3 Morisse monthly rates from EUR 35. Parkster app works on all municipal lots. Neuschwanstein context: the castle's own lots P1-P4 in Hohenschwangau charge EUR 12 for 6 h, EUR 1/h more, EUR 16 max, the drive-up road to the castle is closed (park, then shuttle bus on demand), and in high summer these fill up early - cheaper to park at P1/P5 in Füssen and take bus 78 (free with guest card) or the short train to Hohenschwangau. Füssen is the southern end of the A7 and a strong 'park at the finish, rail back (Füssen - Munich / via Lindau - Bregenz - Bludenz) or rail to the start' hub."
      },
      {
        "title": "Kaufbeuren and Lindau (mid-route hubs)",
        "where": "Kaufbeuren incl. Neugablonz (day 4/6) and Lindau (day 3), Bavaria",
        "url": "https://www.kaufbeuren-tourismus.de/parken",
        "notes": "Kaufbeuren: Sparkassen-Parkhaus-Sued (494 spaces) EUR 0.50/30 min, max EUR 7/day, EUR 2.50 max overnight (19-7 h); Parkhaus am Kunsthaus (530) EUR 1/started h, free Sat 8-20. In the Neugablonz district: time-limited public lots at Neuen Markt and Burgerplatz. Lindau (lindau.de park page): P1 Blauwiese EUR 5/day max 4 days, P2 Bleicheweg EUR 7/day max 4 days, Parkhaus Inselhalle P4 EUR 2/h (24 h), Reutiner Bahnhof EUR 7/day or EUR 35/5-day ticket (max 5 days), Hartplatz Zech EUR 3/day with 32 motorhome spaces EUR 20/day max 14 days; city bus to the island free with Echt Bodensee Card. Both are small-town hubs with ample long-stay options."
      }
    ],
    "wildCampingRule": "Austria (Vorarlberg, days 1-2): wild camping is prohibited in principle - all forest land, including forest roads, is off-limits without the owner's consent under federal forest law (sec. 33 Forstgesetz), and camping is only allowed on designated sites; outside forests Vorarlberg has no state-wide ban, but municipalities may prohibit it (sec. 14 Campingplatzgesetz) and only limited rural tolerance remains with the landowner's permission. Germany (days 3-7 are all Bavaria; Baden-Wurttemberg rules would be the same): overnight tent/camper stays outside designated sites are not permitted under state and municipal rules - Bavaria is not one of the three federal states that allow a one-night wild camp for non-motorised travellers - and violations are fined. In practice this is a non-issue: every stage ends in a real town (Bludenz, Feldkirch, Lindau, Kaufbeuren, Pfronten, Neugablonz, Füssen) with plenty of hotels and B&Bs, and designated campsites exist at Feldkirch (Waldcamping), Lindau (Park-Camping), Pfronten (Camping Pfronten) and Füssen/Hopfen am See (Camping Hopfensee, Campingplatz Haus Guggemos).",
    "stages": [
      {
        "day": 1,
        "camping": "none - sleep at Bludenz (hotels/B&B)",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "No campsite in Bludenz itself. The alpine start area (Formarinsee plateau) is remote but the stage ends in town; in rural Vorarlberg a short stay outside forests is only tolerated with the landowner's OK (forests strictly forbidden). Nearest designated camping is Waldcamping in Feldkirch, ~20 km away (day 2's town)."
      },
      {
        "day": 2,
        "camping": "Waldcamping Feldkirch (municipal forest campsite, seasonal)",
        "campingUrl": "https://www.freizeitbetriebe-feldkirch.at/betriebe/waldcamping",
        "wild": "not allowed",
        "notes": "Small idyllic campsite run by the city's leisure operator (Freizeitbetriebe Feldkirch), open in summer only - check season dates before booking. Feldkirch is a proper town; in built-up areas wild camping is effectively banned, so book the campsite or a hotel."
      },
      {
        "day": 3,
        "camping": "Park-Camping Lindau (mainland side, 88131 Lindau (Bodensee))",
        "campingUrl": "https://www.park-camping.de/",
        "wild": "not allowed",
        "notes": "Designated campsite with tent meadows and pitches, tel. +49 8382 8899-999, listed on the city's official camping page (lindau.de). You are now in Bavaria: wild camping is prohibited and fined. The Lindau island center is a short city-bus ride (free with Echt Bodensee Card) or a walk across from the mainland lot."
      },
      {
        "day": 4,
        "camping": "none - sleep at Kaufbeuren (hotels/B&B)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "No tent campsite in the city; the only designated overnight option is the municipal motorhome site at Buronstrasse (12 spaces, EUR 8/24 h + service fee, max 3 days, 24 h access, water connection) - vans only. Nearest real tent campsites: Camping Pfronten (~15 km) and Camping Hopfensee near Füssen (~15 km)."
      },
      {
        "day": 5,
        "camping": "Camping Pfronten (family-run, 87459 Pfronten)",
        "campingUrl": "https://www.camping-pfronten.de/",
        "wild": "not allowed",
        "notes": "Real campsite in Pfronten ('mitten in der Natur'), referenced from the town's tourism page (pfronten.de/camping-allgaeu); the town also runs a separate motorhome site (Wohnmobilstellplatz). Allgäu/Bavaria: wild camping not allowed - stick to the campsite or the many Pfronten inns (13 villages, all with lodging)."
      },
      {
        "day": 6,
        "camping": "none - sleep at Neugablonz/Kaufbeuren (hotels/B&B)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Neugablonz is the largest district of the city of Kaufbeuren - no campsite there. Time-limited public parking at Neuen Markt/Buergerplatz for drop-off. Nearest designated campsites: Camping Pfronten (~12 km back along the route) or Camping Hopfensee near Füssen (~15 km ahead). Bavaria: no wild camping."
      },
      {
        "day": 7,
        "camping": "Camping Hopfensee (Hopfen am See, Füssen district, ~3 km from the finish)",
        "campingUrl": "https://www.camping-hopfensee.com",
        "wild": "not allowed",
        "notes": "Two tent campsites in Hopfen am See, a Füssen suburb: Camping Hopfensee (right on the lake) and Campingplatz Haus Guggemos (new building, all pitches with power, haus-guggemos.de), plus motorhome sites in Füssen (Wohnmobilstellplatz Füssen, Fussen Mobil, Wohnmobilpark). Finish at the Lechfall in Füssen; Neuschwanstein Castle is ~6 km away, reachable by bus 78 (free with guest card) from Füssen."
      }
    ]
  },
  "cotswold-way": {
    "slug": "cotswold-way",
    "parking": [
      {
        "title": "Bath Park & Ride (Newbridge, Odd Down or Lansdown)",
        "where": "Bath - walk start (Day 1)",
        "url": "https://visitbath.co.uk/plan-your-visit/travel-information/parking",
        "notes": "Recommended way in: free when you take the bus into town (10 min, at least every 15 min, 7 days). City-centre council car parks are pricier, charge emission-based rates (diesel pays more, since Sept 2023) and fill up at weekends. Lansdown Park & Ride has no height barrier (Newbridge 6ft 6in, Odd Down 7ft 2in) - useful if you drive in with gear. Cheaper alternative: skip the car and take the train from London Paddington to Bath Spa."
      },
      {
        "title": "Cheapside car park (Bath Place, Stroud GL5 3BP)",
        "where": "Stroud - Day 2 finish",
        "url": "https://www.stroud.gov.uk/streets-travel/parking-and-permits/car-parks-and-charges-in-the-district/",
        "notes": "193 spaces in the town centre: 1h 0.90 / 2h 1.50 / 3h 2.00 / 4h 2.20 / 7h 3.00 / 24h 3.60; free Sundays and bank holidays. For longer stays use London Road MSCP (335 spaces, up to 23h, 3.00 for 4+ h). No overnight camping in council car parks."
      },
      {
        "title": "Gloucester city car parks (16 council car parks)",
        "where": "Gloucester / Brockworth - Day 3 finish",
        "url": "https://www.gloucester.gov.uk/parking-transport-and-streets/parking/gloucester-city-car-parks/",
        "notes": "~2,549 spaces city-wide; The Forum is open and charged 24/7, most others close in the evening (Castlemeads locks at 7pm). Charges were updated Oct 2025 - exact per-hour rates are in the council's tariff-change notice (Word doc) and are unverified here; expect standard council rates (approx. 1-2 per hour). No overnight camping in council car parks. Brockworth itself has no verified long-stay park."
      },
      {
        "title": "Chipping Campden station car park (Chiltern Railways)",
        "where": "Chipping Campden - Day 7 finish",
        "url": "https://www.chilternrailways.co.uk/parking",
        "notes": "Rail-linked car park at the station; new tariff from 27 July 2026, exact prices in the tariff PDF on that page (image-based, unverified here - approx. 5-10 per day). Handy for the finish: leave the car and take Chiltern Railways from Chipping Campden to London Marylebone (about 1h)."
      }
    ],
    "wildCampingRule": "There is no right to wild camp in England: sleeping overnight in a tent is not permitted without the landowner's permission, and the Cotswold Way's official site states that wild camping is 'not generally permitted' along the route. The walk runs through the Cotswolds AONB, where it is actively not tolerated. The norm is B&Bs, pubs, and the handful of designated campsites listed below.",
    "stages": [
      {
        "day": 1,
        "camping": "none - sleep at a B&B or pub in Chew Magna",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Chew Magna is a small village with B&Bs and pubs but no campsite; the nearest designated camping is near Winchcombe on Day 4. Book ahead in walking season."
      },
      {
        "day": 2,
        "camping": "none - sleep at a pub or B&B in Stroud",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Stroud is a market town with plenty of pubs and B&Bs but no campsite on the route. Nearest designated camping is Hayles Fruit Farm, near Winchcombe (Day 4)."
      },
      {
        "day": 3,
        "camping": "none - sleep at a pub or B&B in Gloucester (or Brockworth)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Day 3 ends at Brockworth/Gloucester on the Severn side; no campsite nearby. Gloucester has plenty of pubs and B&Bs. Wild camping is not tolerated on AONB farmland."
      },
      {
        "day": 4,
        "camping": "Hayles Fruit Farm Campsite - in Winchcombe, right on the trail",
        "campingUrl": "https://haylesfruitfarm.co.uk/campsite",
        "wild": "not allowed",
        "notes": "Listed by the official Cotswold Way site as 'right on the trail'; tent section plus hardstanding with electric hook-up for caravans/motorhomes. Approx. 12 per person/night (per cotswoldway.org; 2026 price list on the site). Easiest camping day of the walk."
      },
      {
        "day": 5,
        "camping": "Colgate Farm Campsite - on Cleeve Hill near Dowdeswell Woods, on the route",
        "campingUrl": "https://colgatefarm.co.uk/",
        "wild": "not allowed",
        "notes": "About 200 m off the path on Cleeve Hill between Winchcombe and Stow-on-the-Wold; hot showers and kitchen access. Approx. 15 per person/night (per cotswoldway.org). If not camping, sleep at a B&B or pub in Stow-on-the-Wold."
      },
      {
        "day": 6,
        "camping": "none - sleep at a B&B or pub in Northleach",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Northleach is a small village with B&Bs and pubs but no campsite; nearest designated camping is Colgate Farm on Cleeve Hill (passed on Day 5) or Hayles Fruit Farm near Winchcombe."
      },
      {
        "day": 7,
        "camping": "none - sleep at a B&B or pub in Chipping Campden (e.g. Volunteer Inn, at the trailhead)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "The official Cotswold Way directory lists good B&Bs, inns and pubs for Chipping Campden but no campsite. Book ahead in walking season; the station links to London Marylebone via Chiltern Railways (about 1h)."
      }
    ]
  },
  "dingle-way": {
    "slug": "dingle-way",
    "parking": [
      {
        "title": "Dingle town car parks (start/finish)",
        "where": "Dingle (Daingean Uí Chuis) — the harbour car park by Strand St/marina and the Holyground car park (east side of town, farmers' market), plus on-site parking at some hotels",
        "url": "https://en.wikivoyage.org/wiki/Dingle",
        "notes": "The loop means you park only once. Dingle is small (~1,700 people) with limited car parks, and the summer months are 'the most popular and busiest' (Dingle Peninsula Tourism Alliance) — town car parks fill up by midday on summer weekends, so arrive early. Some hotels give on-site parking (e.g. Castlewood House free; Benner's limited; Dingle Marina Lodge has 6 spots, otherwise use the harbour car park). Prices not verified from these sources."
      },
      {
        "title": "Ballyferriter village car park",
        "where": "Ballyferriter (Baile an Fheirtéaraigh), Slea Head",
        "url": "https://en.wikivoyage.org/wiki/Dingle",
        "notes": "Small free car park in the village by the harbour/West Kerry Museum (size not verified) — fine for day-2 drop-off or a base while walking the Slea Head stages; overflow at the Dingle Links (Ceann Sibéal) golf course 2 km northwest. Quiet outside summer weekends."
      },
      {
        "title": "Dunmore area (no formal car park)",
        "where": "Dunmore, west flank of Mount Brandon (Derrynane–Dunquin–Feohanagh area)",
        "url": null,
        "notes": "No verified car park — the route here is minor rural road with occasional lay-bys only; park on hard stands clear of gates and livestock. Nearest proper car parks are Dingle (~15 km south) and Castlegregory (~15 km east). Could not verify details from this network."
      },
      {
        "title": "Castlegregory & Sandy Bay (north shore, en-route for day 5)",
        "where": "Castlegregory (Caisleán Ghriaire) and Sandy Bay, Magharee Peninsula, Brandon Bay",
        "url": "https://en.wikivoyage.org/wiki/Cloghane",
        "notes": "Largest north-shore village — post office, filling station, pharmacy and the nearest ATM to Cloghane/Brandon; the most practical en-route stop for the Farranholts stage (approx. 12–15 km east of Farranfore). Village parking is small; the Sandy Bay caravan site (camping and caravans on both shores of the Magharee Peninsula) takes campervans."
      }
    ],
    "wildCampingRule": "There is no legal right to wild camp in Ireland, and camping on public land or overnight roadside parking is prohibited — police fine and move people on for it. In the countryside it is generally tolerated in practice if you ask the landowner's permission and stay unobtrusive (never in a field with livestock). On the Dingle Peninsula in summer the tourism board points walkers to the peninsula's few official campsites rather than wild pitches, so treat a permission-free pitch as a risk and expect the strictest attention in built-up areas like Dingle town.",
    "stages": [
      {
        "day": 1,
        "camping": "none — no lodging or campsite verified in Carrad; sleep in Ballyferriter (~7 km ahead: Ceann Sibéal Hotel, Ferriter's Cove B&B or Tig Bhric pub) or return to Dingle",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Carrad Point is a tiny coastal hamlet on the Slea Head stretch; the two official campsites sit back in Dingle/Gallarus, so most hikers keep walking to Ballyferriter. Any wild pitch on the cliff path is only with landowner permission — no facilities at all."
      },
      {
        "day": 2,
        "camping": "none — sleep in Ballyferriter: Ceann Sibéal Hotel (doubles approx. €50–80, Mar–Nov), Ferriter's Cove B&B, or Tig Bhric pub (West Kerry Brewery, has rooms and food)",
        "campingUrl": "https://www.dingleway.com/accommodation/ballyferriter.php",
        "wild": "tolerated",
        "notes": "No campsite in Ballyferriter — the peninsula's 4 official campsites are all at Dingle/Gallarus (Rainbow, Teach an Aragail) and Castlegregory/Aughacasla (Anchor, Green Acres). Nearest real campsite is Campáil Teach an Aragail, Gallarus, approx. 17 km east. Book beds early for June–August; Galf Chumann Ceann Sibéal and Tig Bhric both do food."
      },
      {
        "day": 3,
        "camping": "none — sleep in Cuas/Feohanagh: An Bóthar guesthouse (Cuas, doubles approx. €70, all year), An Riasc or Coill an Róis B&B (Feohanagh, approx. €40–80)",
        "campingUrl": "https://www.dingleway.com/accommodation/cuas.php",
        "wild": "tolerated",
        "notes": "Annamaria is a tiny settlement on the west flank of Mount Brandon; the nearest verified guesthouses are in Cuas and Feohanagh a few km away. No campsite in this zone — nearest official site is Teach an Aragail (Gallarus), approx. 15 km. The stage climbs the Brandon flanks (the loop's biggest ascent), so keep a bus/taxi escape plan for bad weather on the mountain."
      },
      {
        "day": 4,
        "camping": "none — sleep in the Dunquin/Cuas area: St Brendan's Voyage or Gleann Loic Farmhouse (Dunquin), An Bóthar guesthouse (Cuas)",
        "campingUrl": "https://www.dingleway.com/accommodation/cuas.php",
        "wild": "tolerated",
        "notes": "Dunmore is a rural townland on the west side of the Brandon ridge — no lodging, campsite or car park verified for the village itself; nearest beds are Dunquin (approx. 5 km; Kruger's Bar, where CAMRA was founded, does food) or the Cuas/Feohanagh cluster. Nearest official campsites approx. 15 km away (Gallarus/Dingle or Castlegregory)."
      },
      {
        "day": 5,
        "camping": "none — B&B/self-catering in Farranore (Farranholts, by Kerry Airport); no listings verified online, so book early or fall back to O'Connor's Guesthouse (Cloghane) or Spillane's (Castlegregory)",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Farranore is a small north-shore village; it does not appear in the peninsula tourism directory's B&B list, so verify your booking by phone. Nearest campsite: Sandy Bay caravan site or Anchor Caravan Park (Castlegregory), approx. 12–15 km east. The stage follows the north coast cliffs, beaches and the 'S' bends of Brandon Bay."
      },
      {
        "day": 6,
        "camping": "none — sleep in Ballydavid (~4 km): The Old Pier guesthouse (doubles approx. €45, all year) or Imeall na Mara (Seashore House) B&B; Tigh TP pub for food",
        "campingUrl": "https://www.dingleway.com/accommodation/ballydavid.php",
        "wild": "tolerated",
        "notes": "Inniskillern is a hamlet between Ballydavid and Clogh with no verified lodging of its own — Ballydavid is the practical stop. Nearest campsite is Campáil Teach an Aragail (Gallarus), approx. 8 km south; Gallarus Oratory and castle are worth the detour."
      },
      {
        "day": 7,
        "camping": "O'Connor's Guesthouse or Mount Brandon Hostel, Cloghane (~4 km ahead) — both have camping facilities; or sleep at O'Connor's bar & guesthouse, Mount Brandon Lodge B&B (doubles approx. €40, Apr–Sep) or Mount Brandon Hostel (dorms from approx. €27.50, all year)",
        "campingUrl": "https://www.dingleway.com/accommodation/cloghane.php",
        "wild": "tolerated",
        "notes": "Clogh village itself is tiny; the full facility set sits in Cloghane a few km on (O'Connor's: bar, rooms, cottages and camping; Mount Brandon Hostel: dorms, private rooms, self-catering and camping, open Mar–Jan). This is the loop's most practical camping stage. No campsite in Clogh itself."
      },
      {
        "day": 8,
        "camping": "Campáil Teach an Aragail (Gallarus, on the route — 2-person tent or campervan €30, open year-round) or Rainbow Hostel & Camping (Ballinaboula, 2 km from Dingle — camping €20 ppn, Apr–Oct); or sleep in a Dingle pub (Dick Mack's, Murphy's, Ashe's, O'Flaherty's) or one of the town's many B&Bs",
        "campingUrl": "https://www.dingle-peninsula.ie/stay-accommodation-on-the-dingle-peninsula/caravans-camping/item/teach-an-aragail-campsite.html",
        "wild": "not allowed",
        "notes": "The loop's best camping stage: the two official campsites sit on/just before the final 6 km into Dingle. Wild camping is not allowed in Dingle town — overnight roadside parking there is prohibited and fined — so use the campsites or town beds. Finish where the route intends: a pub with live trad music."
      }
    ]
  },
  "gr20": {
    "slug": "gr20",
    "parking": [
      {
        "title": "Calenzana village car parks (GR20 start)",
        "where": "Calenzana, village centre / around the Gîte municipal, 280 m",
        "url": null,
        "notes": "Small free municipal and roadside parking around the village and the gîte municipal (fee unverified, commonly reported as free). It is a tiny village: in July/August the village centre fills by early afternoon, so park early. Strategy: park here once for the whole first half — walk Calenzana → Vizzavona over 6 days, take the train back to Calvi (via Ponte Leccia), then a short bus/taxi (12 km) back to your car. Calvi–Calenzana bus is ~€8 and runs 2x/day only in high summer."
      },
      {
        "title": "Calvi town and port car parks",
        "where": "Calvi, 12 km / 15 min by car from Calenzana",
        "url": null,
        "notes": "Nearest big town to the start. Several paid lots around the port, citadel and old town, plus free spots outside the old town; rates approx. €1-2/h with a daily cap in high season (unverified from this network). Calvi is a major summer tourist town — July/August lots fill from midday and the old town gets crowded. From Calvi to Calenzana: bus ~€8 (2x/day July–early Sept) or taxi ~€30-40."
      },
      {
        "title": "Ajaccio–Bastia airport (AJA) car park",
        "where": "Ajaccio airport, 170 km / ~2h45 from Calenzana",
        "url": "https://gr20-infos.com/en/transportation",
        "notes": "Fly-in option. The airport has on-site short-stay and long-stay (parking relais) lots; long-stay rates approx. €10-20/day (unverified — aerodecorse.com was unreachable from this network, check the airport site). Ajaccio is well served by flights but far from both ends: from the terminal take the train via Ponte Leccia to Calvi (for the start) or the train/bus to Vizzavona (for the finish)."
      },
      {
        "title": "Vizzavona station car park (finish of first half)",
        "where": "Vizzavona, small lot beside the TER station, 910 m",
        "url": "https://fr.wikipedia.org/wiki/Vizzavona",
        "notes": "Small municipal car park right by the station (usually free, unverified). Fills in July/August afternoons — day-trippers come by train for the Cascade des Anglais. This is the natural drop-off: hike Manganu → Vizzavona, then take the train back (Vizzavona–Bastia ~2h45, ~€14.60 in 2026; to Ajaccio via the same central line). A designated bivouac zone sits at the station for hikers."
      },
      {
        "title": "Conca village car parks",
        "where": "Conca, village, 910 m (GR20 southern end, 20 km north of Porto-Vecchio)",
        "url": "https://fr.wikipedia.org/wiki/Conca",
        "notes": "Free parking in the village around the church, Gîte de la Tonnelle and Hotel San Pasquale (unverified). The GR20 ends in the village and summer is busy with finishing hikers, but the village is small so space is usually available. Road access via D82 from Sainte-Lucie-de-Porto-Vecchio (6 km); no train. If you drove the full first half, the Tonnelle's shuttle to Sainte-Lucie has been suspended since 2024 — plan a taxi or walk (~1h15 downhill)."
      }
    ],
    "wildCampingRule": "In Corsica, unauthorised camping (camping sauvage) is strictly prohibited, and the GR20 corridor is among the strictest zones in France: the trail crosses the Parc Naturel Régional de Corse, where bivouac is allowed only in specific designated areas near the refuges (plus at the foot of Monte Incudine on the Prati plateau) — you must pay for a refuge pitch even if you bring your own tent. The park actively enforces the camping ban, and unauthorised campers face fines (amount not verifiable from reachable sources). In practice the GR20 is auberge-only: almost every stage ends at an auberge, several of which (Asinau, Capanelle, U Vallone) sell a handful of tent pitches, and Vizzavona station has one designated bivouac zone.",
    "stages": [
      {
        "day": 1,
        "camping": "None — sleep at Auberge de l'Asinau (1,536 m)",
        "campingUrl": "https://en.wikivoyage.org/wiki/GR_20",
        "wild": "not allowed",
        "notes": "The original Asinau refuge burned down in 2016 but the auberge still offers camping pitches plus food, so a tent pitch is bookable here (28 beds otherwise). Refuges fill 2-4 months ahead in July/August — book the bed or pitch early via the PNRC portal."
      },
      {
        "day": 2,
        "camping": "None — sleep at Auberge du Tighjettu (1,685 m)",
        "campingUrl": "https://en.wikivoyage.org/wiki/GR_20",
        "wild": "not allowed",
        "notes": "48 beds; dinner ~€23, breakfast ~€10, no phone signal at the refuge. If Tighjettu is full, book Auberge U Vallone (Bergerie de Ballone), 30 min south: camping €8.50/person or rented tent €12.50/person, cash only."
      },
      {
        "day": 3,
        "camping": "None — sleep at Auberge de Capannelle (1,642 m) / Bergeries de E Capanelle",
        "campingUrl": "https://en.wikivoyage.org/wiki/GR_20",
        "wild": "not allowed",
        "notes": "Small auberge (~15 beds). Gîte U Fugone at E Capanelle offers half-board ~€49, camping pitches and tent rental — cash only, no card. Book the pitch if you cannot get a bed."
      },
      {
        "day": 4,
        "camping": "None — sleep at Auberge de Manganu (1,600 m)",
        "campingUrl": "https://en.wikivoyage.org/wiki/GR_20",
        "wild": "not allowed",
        "notes": "32 beds, dinner ~€19, breakfast ~€8, no phone reception or charging. This stage crosses Pointe des Éboulis (2,607 m), the route's high point — leave early. Book well ahead; Manganu is a firm favourite with hikers."
      },
      {
        "day": 5,
        "camping": "None — sleep in Vizzavona village (910 m)",
        "campingUrl": "https://fr.wikipedia.org/wiki/GR_20",
        "wild": "allowed",
        "notes": "No refuge in Vizzavona: stay at gîte 'Le Refuge' by the station, a hotel-restaurant, or Camping La Halte du Prince (campsite with tent pitches) near the station. A designated bivouac zone sits at the station, the only official wild-sleep option on the first half. Then catch the train back to Ajaccio or Bastia."
      },
      {
        "day": 6,
        "camping": "Gîte de la Tonnelle, Conca — camping pitches + half-board ~€55",
        "campingUrl": "https://en.wikivoyage.org/wiki/GR_20",
        "wild": "not allowed",
        "notes": "The Tonnelle (gîte étape) is the nearest designated campsite to Conca — no larger classified campsite exists in the village. Dorms, meals, camping pitches and laundry; half-board ~€55 (2024), shuttle to Sainte-Lucie suspended since 2024. Hotel San Pasquale is the alternative in the village."
      }
    ]
  },
  "aiguilles-rouges-traverse": {
    "slug": "aiguilles-rouges-traverse",
    "parking": [
      {
        "title": "P+R Centre Ville (ex-Grépon), Chamonix — main start option",
        "where": "200 chemin à Batioret, entrance of Chamonix, ~10 min walk to the centre",
        "url": "https://www.chamonix.com/planifier-mon-sejour/infos-et-services/transports/bornes-recharges-electriques/parking-du-centre-ville-grepon",
        "notes": "800 summer spaces; <1 h free, 24 h = 18 €, week pass 54,25 € (50,75 € with carte d'hôte); monthly 106,50 €. 10 min walk to the Brévent–Flégère cable-car station or 2 min by the Mulet minibus (line 4, every 30 min); bus lines 1/2/3/21 nearby. Fills up in July–August (passes grant no priority when full — check real-time space counts in the Chamonix app); arrive early or buy the 7-day pass."
      },
      {
        "title": "Chamonix covered garages — Saint-Michel / Mont-Blanc / Entrèves",
        "where": "Chamonix town centre (686 spaces combined)",
        "url": "https://www.chamonix.fr/demarches/voirie-et-espace-public/stationnement/",
        "notes": "Closer to the Brévent–Flégère station (5–10 min walk) but pricier: <1 h free, 24 h = 22,50 €, week pass 56,75 € (50,75 € with carte d'hôte). Higher ceilings in the P+R (2,20 m vs 2,00 m); the garages fill first in peak summer."
      },
      {
        "title": "Parking de la Gare, Les Houches — finish",
        "where": "Route de la Gare, in front of the Les Houches train station (route end)",
        "url": "https://www.chamonix.com/planifier-mon-sejour/infos-et-services/transports/parkings-tous/parking-de-la-gare-1",
        "notes": "Free but 24 h maximum; the free 7-day numbered spaces (1 July – 14 Sept 2026) are reserved to camping-cars/vans ≤ 3,5 t. Parking de la Mairie is the other free option (1 h, parking disc). Not a viable 4-day car park — leave the car in Chamonix and cross back by train or bus."
      },
      {
        "title": "Car strategy — leave the car at the start, cross by train/bus (or train from Saint-Gervais)",
        "where": "Chamonix (start) → Les Houches (finish)",
        "url": "https://www.chamonix.com/infos-et-services/transports/se-deplacer",
        "notes": "The traverse starts with the Brévent–Flégère cable car in Chamonix and ends in Les Houches: park the car at the P+R Centre Ville, then take the Mont Blanc Express train (Les Houches → Chamonix, ~10 min) or a valley bus back for it. Car-free alternative: TGV/SNCF to Saint-Gervais-les-Bains-Vallorcine + Mont Blanc Express to Chamonix. Camping Bellevue in Les Houches also offers long-term parking to guests (per night)."
      }
    ],
    "wildCampingRule": "In France, free camping (camping sauvage) has technically been prohibited since 2016: camping is only practicable outside roads and public ways, with the land-holder's consent, and is banned in nature reserves, classified or listed sites, within 200 m of drinking-water intakes and on private land without permission, while a one-night light bivouac (dusk to dawn) is generally tolerated. The Aiguilles Rouges is a national nature reserve (Réserve Naturelle Nationale, created 1974) where camping is strictly prohibited and even bivouac is allowed only in designated pitches, with compulsory booking in season (1 June – 30 September, via reserve-bivouac74.fr). Because the traverse ends every day in a refuge (or a glacier camp), wild camping is rarely needed — book the refuges well in advance.",
    "stages": [
      {
        "day": 1,
        "camping": "none — sleep at Refuge du Lac Blanc (2,320 m). Closest campsite: Camping les Verneys, Chamonix (180 route des Tissières, at the Bossons glacier, 3 km from the centre).",
        "campingUrl": "https://www.chamonix.com/hebergements-handicap/camping-les-verneys",
        "wild": "not allowed",
        "notes": "Start by the Brévent–Flégère cable car from Chamonix centre (one-way adult 31 €). The Col du Montet / Lac Blanc basin lies inside the Aiguilles Rouges reserve: camping prohibited, bivouac only on booked pitches. Camping les Verneys: 23,50 €/day for 2 adults + car + tent, open mid-June to mid-September."
      },
      {
        "day": 2,
        "camping": "none — sleep at Refuge de Gouille Noire (2,694 m). Closest campsite: Camping Bellevue, Les Houches.",
        "campingUrl": "https://www.chamonix.com/hebergements-handicap/camping-bellevue",
        "wild": "not allowed",
        "notes": "The killer day (Brévent 2,525 m, Col des Posettes 3,005 m) runs along the reserve's crest — no legal or practical camping at altitude. Gouille Noire books out in July–August; book via the Chamonix tourist office (no online booking page found)."
      },
      {
        "day": 3,
        "camping": "camping option — bivouac on the Vallée Blanche glacier (per the plan) or Refuge de la Moëde Anterne (2,002 m). Closest campsite: Camping Bellevue, Les Houches.",
        "campingUrl": "https://www.chamonix.com/hebergements-handicap/camping-bellevue",
        "wild": "tolerated",
        "notes": "A one-night bivouac on the glacier (outside the reserve) is tolerated under general French rules: light tent, dusk to dawn, no services, crevasses on approach. The Moëde Anterne side sits inside the reserve (camping prohibited) — take a refuge bed if the ice is poor or weather turns."
      },
      {
        "day": 4,
        "camping": "Camping Bellevue, Les Houches (136 rte du Nant Jorland) — the only designated campsite in the finish village.",
        "campingUrl": "https://www.chamonix.com/hebergements-handicap/camping-bellevue",
        "wild": "not allowed",
        "notes": "Finish in Les Houches: free station car park (24 h limit), Mont Blanc Express train to Saint-Gervais, or valley bus to Chamonix if the car is there. Camping Bellevue (summer season): tent 4–5,50 €/day + car 3 €/day, long-term parking for guests only (per night)."
      }
    ]
  },
  "the-feather-route": {
    "slug": "the-feather-route",
    "parking": [
      {
        "title": "Parkgarage Brixen/Bressanone (central garages, start)",
        "where": "Bressanone/Brixen, 5 min from the old town, open 24 h",
        "url": "https://www.brixen.org/en/my-holiday/arrival-brixen",
        "notes": "Brixen has plenty of paid and free car parks; the central 24-h garages charge approx. 2.00 EUR/h, night tariff 20:00-07:00 approx. 1.00 EUR/h. Station is a few minutes' walk from the old town, so park once for the whole trip and start day 1 on foot. Expect to fill up on summer market days and during Christmas."
      },
      {
        "title": "Parking Stufels, Bressanone (budget alternative)",
        "where": "Bressanone/Brixen, approx. 2 min from the old town center",
        "url": "https://www.brixen-suedtirol.com/en/info",
        "notes": "Day tariff 07:00-20:00 approx. 1.50 EUR/h, night tariff 20:00-07:00 approx. 0.60 EUR/h; monthly approx. 60 EUR. Cheaper option if you need a car for the Plose cable-car leg."
      },
      {
        "title": "Passo San Pellegrino pass parking (key hub, day 4)",
        "where": "Passo San Pellegrino (1,918 m), SS346, between Canazei and Moena",
        "url": "https://en.parkopedia.com/parking/san_pellegrino",
        "notes": "Several car parks along SS346 at the pass: the large 'Chiesetta' lot is paid (approx. 4 EUR per full day per 2023 reviews) and free lots also exist (e.g. flat lot opposite Hotel San Marco). Some lots are day-use only (no overnight). Useful if you drive the car up to the pass before or after the plateau day; note the day-4 night itself is a hotel, not a camp."
      },
      {
        "title": "Feltre car parks (car-back at the finish)",
        "where": "Feltre, approx. 13 km by road from Pedavena/Croce d'Aune",
        "url": "https://comune.feltre.bl.it/argomento/parcheggi",
        "notes": "Municipal car parks include Pra del Moro and Pra del Vescovo, plus metered zones paid via app (Abaco); the Cittadella historic core is ZTL/ZTPP, so park outside it. Car-back strategy: finish at Pedavena, take the direct line 14 bus to Feltre (approx. 12 min, several services a day, approx. 1-3 EUR) and collect the car at the Feltre car park, then train out (Feltre has direct regionals to Venezia Santa Lucia)."
      }
    ],
    "wildCampingRule": "Wild camping is generally prohibited on both sides of the route: South Tyrolean provincial officials state that camping on public ground is forbidden and only allowed on licensed campsites and motorhome areas, with municipalities (Selva di Val Gardena first, 2025/26) adding explicit bans, fines and tow-away for car-and-tent overnights, and in Veneto tourist camping outside authorized campsites is likewise forbidden - especially strict inside the Paneveggio and Dolomiti Bellunesi national parks the route crosses. The local culture is rifugio/hotel/campsite: every stage ends in a booked hut, the day-4 hotel, or a valley campsite, and any tent night would require explicit local permission. On day 4 the group sleeps in a hotel at Passo San Pellegrino, so there is no camping option at all that night.",
    "stages": [
      {
        "day": 1,
        "camping": "None - sleep at Rifugio Plose; nearest campsite Camping Loewenhof (Bressanone/Varna)",
        "campingUrl": "https://www.loewenhof.it/en/camping",
        "wild": "not allowed",
        "notes": "Rifugio Plose (2,300 m) is a booked hut on the Plose plateau; no campsites on the plateau itself. Camping Loewenhof (via Brennero 60, Varna, 39040) sits at the Plose foot approx. 30 min by car - a base for the optional Plose cable-car shortcut that cuts the day's climb to about 900 m."
      },
      {
        "day": 2,
        "camping": "None - sleep at Rifugio Genova; nearest campsite Camping Miravalle (Campitello di Fassa)",
        "campingUrl": "https://www.campingmiravalle.it",
        "wild": "not allowed",
        "notes": "Rifugio Genova sits on the ridge between Plose and Sella (route high point 2,602 m); nearest valley campsite is Camping Miravalle in Campitello di Fassa (Val di Fassa), a short drive down the valley. No camping anywhere on the ridge."
      },
      {
        "day": 3,
        "camping": "Camping Ortisei (Ortisei, Val Gardena)",
        "campingUrl": "https://www.jetcamp.com/bolzano/ortisei",
        "wild": "not allowed",
        "notes": "Sleep at Rifugio Puez (2,475 m, below the Cime di Puez); the Ortisei campsites in Val Gardena are approx. 30 min by car (several listed, JetCamp shows 16 in and around Ortisei). Summer shuttle buses connect the valley to the Puez lifts."
      },
      {
        "day": 4,
        "camping": "Hotel night at Passo San Pellegrino (Alpe Lusia plateau), e.g. Hotel Stella; nearest campsite Camping Marmolada (Canazei)",
        "campingUrl": "https://www.campingmarmolada.com",
        "wild": "not allowed",
        "notes": "By design this is the hotel night instead of a hut - no camping that night. Plateau hotels at San Pellegrino/Campo Carlo del Prete sell out in July-August (book via Dolomiti Superski accommodation search); Camping Marmolada in Canazei is approx. 11 km downhill in Val di Fassa."
      },
      {
        "day": 5,
        "camping": "None - sleep at Rifugio Mulaz (Volpi al Mulaz); nearest campsite Camping Marmolada (Canazei)",
        "campingUrl": "https://www.campingmarmolada.com",
        "wild": "not allowed",
        "notes": "Rifugio Mulaz (2,571 m) is a booked hut above Val di Fassa; Canazei is the valley base approx. 40 min by car. This day keeps the short unavoidable hand-cable on AV2, so book the hut well ahead."
      },
      {
        "day": 6,
        "camping": "None - sleep at Rifugio Rosetta (Passo Rolle); nearest campsite in Mezzocorona (Feriendorf Mezzocorona)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Rifugio Rosetta (approx. 1,800 m) is on the Passo Rolle bypass (replaces the Farangole ferrata ridge); Mezzocorona (Trentino side) is the nearest valley village with campsites, about 10 km by car - no verified site URL found, book by phone. Rosetta season roughly 20 June-27 September."
      },
      {
        "day": 7,
        "camping": "Camping Castelpietra (Tonadico, San Martino di Castrozza)",
        "campingUrl": "https://www.castelpietra.it",
        "wild": "not allowed",
        "notes": "Sleep at Rifugio Treviso (approx. 1,631 m, Val Canali, Pale di San Martino), reached on the '709' south route; Camping Castelpietra in Tonadico is the standard Val Canali approach campsite (approx. 30 min by car), with pitches and bungalows."
      },
      {
        "day": 8,
        "camping": "Camping Castelpietra (Tonadico, San Martino di Castrozza)",
        "campingUrl": "https://www.castelpietra.it",
        "wild": "not allowed",
        "notes": "Rifugio Cereda (1,369 m, Passo Cereda) is an inn-style AV2 hut with 17 rooms and dormitories - no campsite on the ridge. Short rest-feel day crossing the Vette Feltrine (Veneto side); last easy resupply before the upper Vette Feltrine stretch."
      },
      {
        "day": 9,
        "camping": "Camping Castelpietra (Tonadico, San Martino di Castrozza)",
        "campingUrl": "https://www.castelpietra.it",
        "wild": "not allowed",
        "notes": "Sleep at Rifugio Bruno Boz (approx. 2,137 m) on the Vette Feltrine; nearest campsite is again the Tonadico/San Martino side, about 30-40 min by car. Big day (+1,532 m, cabled gully) - no water refill after Boz, carry 2-3 L."
      },
      {
        "day": 10,
        "camping": "Camping Vincheto (Feltre)",
        "campingUrl": "https://www.campingvincheto.it",
        "wild": "not allowed",
        "notes": "Sleep at Rifugio Dal Piaz (Giorgio Dal Piaz, 1,993 m, Sovramonte) inside Dolomiti Bellunesi National Park - camping is banned in the park except at designated sites, so the only option is the booked hut. Feltre's Camping Vincheto (1-star, open year-round, at the park's foot) is approx. 13 km by car for pre/post-trip nights."
      },
      {
        "day": 11,
        "camping": "Camping Vincheto (Feltre); no campsite in Pedavena",
        "campingUrl": "https://www.campingvincheto.it",
        "wild": "not allowed",
        "notes": "Gentle finish to Pedavena/Croce d'Aune (official AV2 end); the village itself has no campsite, so sleep in Feltre or collect the car: line 14 bus Pedavena-Feltre (approx. 12 min, several services a day, approx. 1-3 EUR), then Trenitalia from Feltre station."
      }
    ]
  },
  "the-soft-blanc": {
    "slug": "the-soft-blanc",
    "parking": [
      {
        "title": "Les Houches — Parking du Prarion (official TMB car park)",
        "where": "Les Houches, Ch. du Vernay du Fouilly, at the foot of the Bellevue/Prarion ski area; ~10-15 min walk up to the TMB start arch in the village centre",
        "url": "https://www.chamonix.net/english/transport/parking",
        "notes": "The 'park once' loop strategy: this is the official Tour du Mont-Blanc car park and holds a car for up to 15 days (verified on chamonix.net); tmbtrailguide.com calls it free long-term parking (price unverified — confirm locally). Park it, start day 1 and finish day 8 in the same village. Summer: arrive early morning in Jul-Aug; other village lots (Route de la Gare, town hall Chemin du Closet, Nant-Jorlant/Le Fouilly) are short-stay only, and the Bellevue lot (Place de la Fruitière) is reserved for the cable car, 1 day max. If camping instead, Camping Bellevue (100 m from the trailhead) also accepts TMB hikers leaving their car for the trek."
      },
      {
        "title": "Chamonix (expensive alternative)",
        "where": "Chamonix town centre (Saint-Michel, Mont-Blanc, Entrèves) + long-stay lots around the town",
        "url": "https://www.chamonix.net/english/transport/parking",
        "notes": "Verified rates: long-stay Parking Relais Centre Ville (800 spaces in summer) €18/24 h, first hour free; enclosed medium-stay lots €19.90/24 h; underground lots €22.50/24 h; short-stay lots (Outa, Gare, Poilu, Courmayeur) up to €46.70/24 h. Parking in the centre is 'very difficult, especially in Chamonix Sud' during tourist periods (verbatim). 8-10 min valley bus or ~2 km walk to Les Houches — a fine base if you'd rather stay in Chamonix, but it is the wrong end of the loop."
      },
      {
        "title": "Courmayeur (Italian side)",
        "where": "Courmayeur — P1 Piazzale Monte Bianco (Via Roma, 800+ spaces), P2 Viale Monte Bianco, P3 Tzan de Blà (Loc. Dolonne)",
        "url": "https://www.courmayeurmontblanc.it/come-arrivare",
        "notes": "Official town rates (verified): P1 first hour free, €1.50-3.00/h, max €15/24 h; P2 first 30 min free, €1.00-2.00/h, max €20/24 h; P3 at Dolonne (halfway up Val Ferret, cheaper) €1.00/h, max €8/24 h. P1 typically fills in Jul-Aug. Note: Courmayeur is a mid-route town on this loop (day 4) — useful only if you restructure the itinerary to start/end there."
      },
      {
        "title": "Trient & La Fouly (Swiss side)",
        "where": "La Fouly: car park at the exit of the village, in front of the cable car; Trient: village parking incl. at Refuge Le Peuty at the village end",
        "url": "https://www.autourdumontblanc.com/en/routes/all-routes/la-fouly-ring",
        "notes": "Official TMB route info names the La Fouly car park at the village exit in front of the cable car (verified). Refuge Le Peuty in Trient is explicitly reachable by car with parking available (montourdumontblanc.com). Rates unverified (approx. CHF 1-2/h typical for valley car parks — confirm locally). Both are one-way entry points, not loop parking: on The Soft Blanc the car stays in Les Houches."
      }
    ],
    "wildCampingRule": "France: wild camping is technically prohibited and fined, but one-night high-altitude bivouac (sunset to sunrise) is generally tolerated — on this route only designated areas are legal, and inside the Aiguilles Rouges and Contamines-Montjoie nature reserves a pitch must be booked via reserve-bivouac74.fr (1 June-30 September), with strict no-camping zones at Lac Blanc, the Vallée des Glaciers (except the free official bivouac area at Les Chapieux) and the Montagne de Chailloux. Italy (Aosta Valley): all forms of camping are prohibited even for under 24 h, and bivouac is forbidden below 2,500 m — i.e. essentially the entire Courmayeur/Val Veny/Val Ferret section (official TMB site, verified). Switzerland (Canton Valais): bivouac and wild camping are prohibited; a single night above the tree line is tolerated, but in the TMB communes (Orsières, Trient, Bovernier, Martigny-Combe) only designated sites are legal — Camping des Glaciers (La Fouly), Champex-Lac and Relais d'Arpette, Le Peuty/Stand (Trient) and L'Arpille (Col de la Forclaz). Practically, every stage of The Soft Blanc ends in a refuge, gîte or village, so the per-stage campsites below are the legal options.",
    "stages": [
      {
        "day": 1,
        "camping": "Camping des Montets (Vallorcine) — the only campsite in Vallorcine, ~50 unmarked tent pitches, open 1 June-15 September",
        "campingUrl": "https://camping-montets.com",
        "wild": "tolerated",
        "notes": "Default night: Vallorcine village or Auberge de Bionnassay. Camping des Montets sits at Le Montet on the valley road just before Vallorcine centre (TMB site lists it as being on a TMB variant, the Le Buet line). Vallorcine order 34/2024: wild camping/campfires strictly prohibited; one night 19:00-09:00 only with landowner permission below 1,700 m, tolerated above 1,700 m."
      },
      {
        "day": 2,
        "camping": "Camping Le Pontet (Les Contamines-Montjoie) — 3-star campsite on the valley road at the village edge, the standard TMB camping stop",
        "campingUrl": "https://www.campinglepontet.fr",
        "wild": "not allowed",
        "notes": "No camping in Les Contamines village itself. In the Contamines-Montjoie reserve, camping is strictly prohibited below 2,500 m except at two bookable sites (Giettaz-Pont de la Rollaz, La Balme) plus the ~150-pitch free leisure-park campsite (19:00-09:00, booking compulsory 15 June-15 September via reserve-bivouac74.fr). Tents otherwise: Camping Le Pontet."
      },
      {
        "day": 3,
        "camping": "Les Chapieux free public camp area (adjacent to the tourist office) — or bookable bivouac pitch at Refuge de la Balme if you stay by Lac Blanc",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/bivouac",
        "wild": "tolerated",
        "notes": "Standard night: Refuge de la Balme or Les Chapieux auberges (Croix du Bonhomme closed to 2029). Les Chapieux has an official free bivouac area with toilets and waste collection (small donation suggested). The whole Vallée des Glaciers is private alpine pasture — bivouac not permitted there; the La Balme pitch is one of the two official reserve sites, booking compulsory via reserve-bivouac74.fr."
      },
      {
        "day": 4,
        "camping": "None in Courmayeur — nearest legal sites are the Val Veny campgrounds (Hobo, Aiguille Noire, Monte Bianco La Sorgente) or Val Ferret (Tronchey, Grandes Jorasses), both off-route (bus detour)",
        "campingUrl": "https://tmbtrailguide.com/tour-du-mont-blanc-camping",
        "wild": "not allowed",
        "notes": "No campgrounds in Courmayeur itself (verified); Aosta Valley law bans all camping even under 24 h. Campers descend to La Visaille or Arp Nouvaz and bus down to the campgrounds. Realistic default: sleep in Courmayeur town or a refuge (Rif. Elisabetta/Combal area en route); use the big shops and pizzerias as the resupply day."
      },
      {
        "day": 5,
        "camping": "Camping des Glaciers (La Fouly) — large TMB campsite across the river from the village, ~1,600 m, open ~8 May-4 October",
        "campingUrl": "https://www.camping-glaciers.ch",
        "wild": "not allowed",
        "notes": "The stage ends at La Fouly after Grand Col Ferret (2,537 m) — the campsite is right there, so no detour. Orsières (Switzerland) prohibits wild camping; designated sites only (La Fouly, Champex-Lac, Relais d'Arpette). Heads-up: in 2026 the campsite opened only partially due to a cantonal hydrological-hazard restriction — book ahead if you plan to camp."
      },
      {
        "day": 6,
        "camping": "Camping Le Peuty (Trient) — basic camp field beside Refuge Le Peuty at the end of the village, on the TMB route",
        "campingUrl": "https://refugelepeuty.ch",
        "wild": "not allowed",
        "notes": "Le Peuty camp is basic (portable toilets, covered eating area) with good food at the adjacent refuge — the classic TMB tent stop in Trient. Trient bans bivouac; camping is only legal at the Peuty and Stand rest areas or L'Arpille campsite (Col de la Forclaz). The refuge is reachable by car, with parking, if you drive to the Swiss section."
      },
      {
        "day": 7,
        "camping": "Auberge la Boerne (Tré-le-Champ) — camping beside the gîte, half-board required — or the Refuge de la Flégère bivouac if you end up high",
        "campingUrl": "https://la-boerne.fr",
        "wild": "tolerated",
        "notes": "Auberge la Boerne sits just off the TMB above Argentière (parking by the RN506); camping is permitted next to the gîte but only with half-board and limited space — contact ahead (31 beds, hard to book). If you finish at La Flégère instead: bivouac by the small lakes is allowed sunset-to-sunrise with services in the cable-car station. Chamonix municipal rule: high-altitude bivouac only, sunset to sunrise."
      },
      {
        "day": 8,
        "camping": "Camping Bellevue (Les Houches) — ~100 m from the TMB start/finish, ~50 unmarked tent pitches, open ~15 May-30 September",
        "campingUrl": "https://www.autourdumontblanc.com/camping-bellevue",
        "wild": "tolerated",
        "notes": "Finish the loop where you started: Camping Bellevue (route du Nant-Jorland) also lets TMB hikers leave their car there for the whole trek — a 'park once' option if you camp. Bivouac tolerated sunset-to-sunrise, one night, except the Montagne de Chailloux (prohibited all year). Note: the classic Refuge de Bellachat bivouac (10 pitches) is on the Brévent variant, not on this Passon/Les Arbois bypass."
      }
    ]
  },
  "the-smooth-haute": {
    "slug": "the-smooth-haute",
    "parking": [
      {
        "title": "Chamonix paid parking (start point)",
        "where": "Chamonix-Mont-Blanc, France",
        "url": "https://www.seechamonix.com/parking",
        "notes": "~4,000 spaces town-wide. Summer-friendliest: Grépon Centre Ville (800 spaces, best for a long stay, first 30-60 min free); indoor Saint-Michel (308) / Place du Mont-Blanc (239) / Entrèves (139); Grands Montets and Le Tour (230). Free: Parking Biollay (Avenue Cachat le Géant), behind the station (Rue Helbronner), Route du Bouchet. Fills fast in summer, especially UTMB week (late Aug). Rates approx. (no prices published on the page)."
      },
      {
        "title": "Zermatt is car-free - park at Täsch (Matterhorn Terminal) or Visp",
        "where": "Täsch / Zermatt, Switzerland",
        "url": "https://www.zermatt.ch/en/plan-book/arrival",
        "notes": "Zermatt is car-free. Park at the Matterhorn Terminal in Täsch: 2,100 covered spaces (131 with EV charging), tickets bookable online or bought at the lot (rate approx.), then the 12-min shuttle runs every 20 min; luggage trolleys available on the train. Day 14 needs no car at all: walk the Charles Kuonen Bridge from Randa down to Täsch and catch the shuttle. Alternative: park in Visp and train up (approx. 1h25)."
      },
      {
        "title": "Visp (Matterhorn Gotthard Bahn) - alternative to Täsch",
        "where": "Visp, Valais, Switzerland",
        "url": "https://www.matterhorngotthardbahn.ch/en/stories/railway-stations-matterhorn-gotthard-bahn",
        "notes": "Visp is the western terminus of the 144 km Zermatt-Disentis line; Visp to Zermatt by train approx. 1h25. There is a park-and-ride at the station, but its name/capacity/rate are unverified (approx.). Täsch is closer to the route end, so Visp only makes sense if the Täsch lots are full."
      },
      {
        "title": "Randa car park (day 13/14 base)",
        "where": "Randa, 9 km below Zermatt, Switzerland",
        "url": "https://www.zermatt.ch/en/plan-book/arrival/car-parks-taesch",
        "notes": "88-space multistorey garage plus 12 spaces by the church. Randa is the last road-accessible village before the car-free zone and the launch point for the Charles Kuonen Bridge crossing (2-2.5 h on foot to the bridge; 494 m span, 85 m above the Graben, free, May-Oct, avoid in thunderstorms, closed in winter)."
      }
    ],
    "wildCampingRule": "In France, camping is prohibited in the Chamonix commune (since 1992); only a high-altitude bivouac of one night, sunset to sunrise, with no fire and no trace, is tolerated. In Switzerland bivouac and wild camping are formally prohibited but generally tolerated for one night, non-group, above the tree line; in Valais it is stricter: Trient prohibits bivouac (rest areas Peuty/Stand and Camping de l'Arpille are the OK spots), Orsières allows only designated sites (Camping des Glaciers La Fouly, Champex-Lac campsite, Relais d'Arpette), and Bovernier and Martigny-Combe prohibit it outright.",
    "stages": [
      {
        "day": 1,
        "camping": "Camping du Glacier d'Argentière",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/list-of-accommodation/camping-du-glacier-d-argentiere",
        "wild": "tolerated",
        "notes": "Sleeping at Cabane de l'Argentière (book ahead). Campsite: 161 Chemin des Chosalets, Chamonix-Mont-Blanc (Argentière side); open 13 May - 30 Sep 2026; 120 pitches; www.campingchamonix.com. Wild: high-altitude bivouac only, one night sunset-sunrise, no fire."
      },
      {
        "day": 2,
        "camping": "Camping de l'Arpille (nearest, La Forclaz)",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/list-of-accommodation/camping-de-l-arpille",
        "wild": "not allowed",
        "notes": "Sleeping at Cabane de Trient. Official guidance: bivouac is prohibited in Trient; camping only at the Peuty/Stand rest areas or Camping de l'Arpille (La Forclaz 2, 1929 Trient; open 15 Jun - 30 Sep; 45 pers.; no tent bookings; valleedutrient.ch)."
      },
      {
        "day": 3,
        "camping": "Camping des Rocailles, Champex-Lac",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/list-of-accommodation/camping-des-rocailles",
        "wild": "not allowed",
        "notes": "Sleeping at Cabane de Champex-Lac after the Bovine lower-route bypass. Campsite: Route du Lac 134, 1938 Champex-Lac; open 1 Jun - 30 Sep; unmarked pitches; 80 pers.; no bookings; www.champex-camping.ch. Orsières allows only designated sites - no wild camping."
      },
      {
        "day": 4,
        "camping": "Camping des Glaciers, La Fouly (nearest)",
        "campingUrl": "https://www.autourdumontblanc.com/en/accomodations/list-of-accommodation/camping-des-glaciers",
        "wild": "not allowed",
        "notes": "Sleeping at Cabane de Le Châble. No verified campsite in Le Châble itself; nearest is Camping des Glaciers, La Fouly (Rte de Tsamodet 36, 1944 La Fouly; open 8 May - 4 Oct; 120 pers.; partial closure summer 2026; www.camping-glaciers.ch). Village is below the tree line - not tolerated."
      },
      {
        "day": 5,
        "camping": "none - sleep at Cabane du Mont Fort",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Hut at 2,270 m, above the tree line - a one-night bivouac away from the hut is generally tolerated in Valais (non-group, no trace). Nearest designated sites: Camping des Glaciers, La Fouly, or the Champex-Lac campsite in the valley below Le Châble."
      },
      {
        "day": 6,
        "camping": "none - sleep at Cabane du Prafleuri",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Remote hut at the Col de Prafleuri (2,987 m) crossing; high-alpine bivouac above the tree line generally tolerated for one night. Keep the La Barmaz valley escape route in mind for bad weather. No campsite nearby - nearest designated sites are in the Bagnes valley."
      },
      {
        "day": 7,
        "camping": "none - Arolla village B&B",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "No verified campsite in Arolla (1,843 m) - stay in a village B&B/guesthouse (no specific hotel name verified). Nearest designated sites: Camping des Rocailles, Champex-Lac, or Camping des Glaciers, La Fouly. Below the tree line - not tolerated."
      },
      {
        "day": 8,
        "camping": "none - sleep at Refuge de Les Haudères",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Refuge around 2,145 m, above the tree line - one-night bivouac generally tolerated (non-group, no trace). No campsite nearby; nearest designated sites are in the Bagnes valley (Camping des Glaciers, La Fouly)."
      },
      {
        "day": 9,
        "camping": "none - sleep at Refuge de la Moiry",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Refuge de la Moiry around 2,340 m, lakeside above the tree line - one-night bivouac generally tolerated. No campsite on the reservoir area; nearest designated sites are in the Bagnes valley."
      },
      {
        "day": 10,
        "camping": "none - Zinal village lodging",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Sleeping in a Zinal hut/guesthouse. No verified campsite in Zinal (municipal site is bot-blocked, so existence unconfirmed). Nearest designated site: Camping des Glaciers, La Fouly (Bagnes valley, some km away). Village below the tree line - not tolerated."
      },
      {
        "day": 11,
        "camping": "none - sleep at Cabane de Gruben",
        "campingUrl": null,
        "wild": "tolerated",
        "notes": "Hut around 2,600 m, above the tree line - one-night bivouac generally tolerated. No campsite nearby; nearest village lodging is Zinal below (Hotel Schwarzhorn is listed for the area)."
      },
      {
        "day": 12,
        "camping": "none - St. Niklaus (Visp) town lodging",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Last high pass (Augstbordpass 2,894 m), then valley descent to St. Niklaus (437 m). No verified campsite (municipal site has no camping listing) - hotel/B&B in town. Valley floor, below the tree line - not tolerated."
      },
      {
        "day": 13,
        "camping": "none - Randa village B&B/guesthouse",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Randa (car-free hamlet, 500 inhabitants, 9 km below Zermatt) has reasonably priced B&Bs/guesthouses (listed on zermatt.ch; randa.ch has a Hotels/Ferienwohnungen section) but no campsite (its 'Camping' page is empty). Car park: 88-space multistorey garage + 12 by the church - handy if driving the Viseu valley."
      },
      {
        "day": 14,
        "camping": "none - Zermatt hotel (celebrate)",
        "campingUrl": null,
        "wild": "not allowed",
        "notes": "Walk from Randa to the Charles Kuonen Bridge (2-2.5 h; 494 m span, 85 m above the Graben, 65 cm wide, free, May-Oct, avoid in thunderstorms, closed in winter), descend to Täsch, 12-min shuttle to car-free Zermatt. No camping; 81 hotels listed on zermatt.ch (e.g. Alex Alpine Resort, Mont Cervin Palace, Hotel Bristol). Car-free village - not tolerated."
      }
    ]
  },
  "the-sacred-loop": {
    "slug": "the-sacred-loop",
    "parking": [
      {
        "title": "Kii-Tanabe Station Front (Second) Parking — main park-and-ride for the Kumano buses",
        "where": "Tanabe City (Kii-Tanabe), beside JR Kii-Tanabe Station and the station bus terminal",
        "url": "https://www.tanabe-kanko.jp/access/parking/",
        "notes": "City lot, 95 cars, open 24 h; first 30 min free, then ¥100/30 min — no daily maximum is listed on the official page, so a 4-day hike can get expensive; ask Tanabe City about multi-day hiker rates. Cheaper nearby alternates: Tanabe City Hall parking (47 cars, first hour free then ¥100/h) and the Citizen General Center lot (~90 cars, same rate). Luggage storage is at the Tanabe Tourist Information Center next to the station — handy if you park and walk."
      },
      {
        "title": "Yunomine Onsen village car park",
        "where": "Southern entrance of Yunomine Onsen village, Hongu-cho, Tanabe City",
        "url": "https://www.tb-kumano.jp/en/places/yunomine/",
        "notes": "The official Kumano bureau says all vehicles use the single car park at the southern entrance of the village, a short walk to the town and the Tsuboyu. Price unverified — no fee is published on the official page, so expect a small daily charge; the lot can fill on onsen weekends and spring festival days."
      },
      {
        "title": "Kumano Hongu Taisha free parking",
        "where": "Hongu, Tanabe City — beside Zuiho-den and on the Kumano River banks",
        "url": "http://www.hongutaisha.jp/parking/",
        "notes": "Free per the shrine's official page: a lot beside Zuiho-den, a large riverside lot (effectively unlimited space, but can be full on festival weekends), and a barrier-free lot near the main hall. No booking needed."
      },
      {
        "title": "Koyasan mountain parking (by car via Gojo / Route 480)",
        "where": "Koyasan (Koya-machi), reached from the Gojo / Katsuragi West IC side",
        "url": "https://www.koyasan.or.jp/access/",
        "notes": "No large car park at the Gokurakubashi rail/cable-car base itself; by car the standard approach is up Route 480 from the Gojo/Katsuragi West side, parking in the free temple lots on the mountain: Nakanohashi (186 cars, closest to the Okunoin approach), Kongobuji-mae 1 (39) / 2 (72, small cars), Nakamon-mae (18, beside Danjo Garan), plus Daimon South and Otsusujizo — 900+ cars on weekends/holidays. The only paid lot is Ichinohashi (8 cars, ¥400 first hour, then ¥150/30 min). Lots fill by ~9:00 on busy days — arrive before 8:30; leaf season, Golden Week and Obon are worst. Kongobuji announced a move to paid parking during 2026 (Mainichi, Sep 2026), so re-check current status."
      }
    ],
    "wildCampingRule": "In Japan wild camping is effectively prohibited: almost all of the Kii mountain forest is private land (shrine, temple or individual owners), open campfires are banned, and shrine towns and World Heritage sites do not allow overnighting outside designated facilities — the official Kumano Kodo guidance states camping is 'frowned upon outside of official camping areas' and 'no open campfires'. Official campsites exist at Chikatsuyu, Kawayu Onsen, Watarase Onsen and Koguchi, and the norm on the Nakahechi is booked ryokan, minshuku, oji or temple lodging (walk-up is not common). Remote, high, unused spots are sometimes tolerated with discretion (leave no trace, no fire, ask locals), but that is a grey area, not a right — plan on designated lodging.",
    "stages": [
      {
        "day": 1,
        "camping": "none — sleep at ryokan/minshuku in Hongu (onsen town)",
        "campingUrl": "https://hongu-otonashi.com/",
        "wild": "not allowed",
        "notes": "Nearest designated campsite: Otonashi-no-Sato (WATAZE OUTDOOR) at Watarase Onsen, ~5 km north of Hongu — camp + cottages + day-use onsen, closed Tue/Wed (book ahead). Alternative: Tanabe Kawayu Camp downstream of Kawayu Onsen (5-min walk to the onsen; direct campfires banned inside it from 1 Feb 2027). Hongu has several ryokan/minshuku with onsen — book ahead."
      },
      {
        "day": 2,
        "camping": "none — sleep at minshuku in Chikatsuyu",
        "campingUrl": "https://irispark.jp/",
        "wild": "not allowed",
        "notes": "Nearest designated campsite: Iris Park Auto Campground (Oku-Kumano Onsen Megami-no-Yu), in Chikatsuyu on the route itself by the Hinokawa river — tent sites are reservation-based, direct fires prohibited, check-in 12:00–19:00. Longest day (9–12 h): carry bento or use a bus shortcut from Tsugizakura-oji if splitting the stage."
      },
      {
        "day": 3,
        "camping": "none — sleep at minshuku in Takijiri/Chikatsuyu",
        "campingUrl": "https://irispark.jp/",
        "wild": "not allowed",
        "notes": "No campsite in Takijiri — the nearest designated one is Iris Park Auto Campground back in Chikatsuyu (~10 km up the route you just walked). Takijiri-ōji has a handful of minshuku in a very small village — book your bed well ahead."
      },
      {
        "day": 4,
        "camping": "none — sleep at a Koyasan shukubo (temple lodging) with shojin-ryori dinner",
        "campingUrl": "https://koyasan-shukubo.net/en/",
        "wild": "not allowed",
        "notes": "Book the shukubo 2–4 weeks ahead via the Koyasan Shukubo Association site (instant online booking now at several temples, e.g. Fudo-in, Kodai-in, Eko-in; many shukubo don't take cards — bring cash). No campsite on the mountain; the nearest official camps are in the Ryujin area ~1 h by car north (Forest Park Ni-I Yamasemi-no-Sato, Miyashiro Auto Campground)."
      }
    ]
  }
};
