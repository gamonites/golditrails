export type LogisticsCategory = "transport" | "permit" | "lodging" | "booking" | "food" | "info";

export interface LogisticsItem {
  title: string;
  category: LogisticsCategory;
  required: boolean;
  when: string;
  where: string;
  url: string | null;
  notes: string;
}

export interface HikeLogistics {
  slug: string;
  getIn: string;
  getOut: string;
  items: LogisticsItem[];
}

export const LOGISTICS: Record<string, HikeLogistics> = {
  "alta-via-1": {
    "slug": "alta-via-1",
    "getIn": "Fly into Venice Marco Polo (VCE) or Bolzano (BZO); from VCE take the airport bus to Mestre station and a regional bus/Dolomitibus into Val di Fassa to Canazei (~2 h), or from BZO the valley bus/taxi up to Canazei (~1 h 30 m).",
    "getOut": "Finish at Pedavena, a few km north of Feltre; take the local bus or a taxi to Feltre station, then a Trenitalia train to Venezia Santa Lucia/Mestre or Treviso.",
    "items": [
      {
        "title": "Fly into Venice (VCE) or Bolzano (BZO)",
        "category": "transport",
        "required": true,
        "when": "before the trip (buy flights 1-3 months ahead)",
        "where": "Venice Marco Polo / Bolzano airports",
        "url": "https://www.veneziaairport.it/en/",
        "notes": "VCE is the main international hub (~2 h by road to Val di Fassa); BZO (Bolzano) is the closest airport to Canazei. Venice airport link verified; Bolzano airport info is on the Sud Tirol tourist sites."
      },
      {
        "title": "Dolomitibus / regional buses to Canazei",
        "category": "transport",
        "required": true,
        "when": "day of travel; check the summer timetable",
        "where": "Venezia-Mestre / Bolzano to Canazei",
        "url": "https://dolomitibus.it/",
        "notes": "Dolomitibus operates across the central/southern Dolomites (Val di Fassa and the Feltre end). Local South Tyrolean buses run on the Sud Tirol Mobil network (suedtirolmobil.info), which also covers Bolzano-Canazei connections."
      },
      {
        "title": "Sella Ronda valley buses & summer lift pass",
        "category": "transport",
        "required": false,
        "when": "summer; for the Canazei to San Pellegrino (Sella bypass) leg",
        "where": "Val di Fassa / Sella / Alpe Lusia",
        "url": "https://www.dolomitisuperski.com/en/",
        "notes": "Dolomiti Supersummer includes summer lift passes and shuttle buses linking the four Sella valleys (Canazei, Alta Badia, Val Gardena, Val Badia/Fodom) - the Sella bypass leg can be shortened by bus/lift. See 'Lift Passes and Prices for summer' and the 'Mountain huts' service pages."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route",
        "url": null,
        "notes": "Alta Via 1 is a free marked CAI trail; no hiking permit or pass is needed. You only pay for huts, lifts and (if driving) valley parking fees such as the Alpe di Siusi day ticket."
      },
      {
        "title": "Rifugio Puez (2,475 m)",
        "category": "lodging",
        "required": true,
        "when": "book as soon as the season opens (2027 season bookings open around mid-March); June-August fills fast",
        "where": "Puez plateau, Puez-Odle Nature Park",
        "url": "https://www.rifugiopuez.it/",
        "notes": "Site verified live; 2027 bookings open around mid-March, contact info@rifugiopuez.it. First major hut after Canazei; dorm beds plus half-board meals, so book the night early."
      },
      {
        "title": "Rifugio Genova & Rifugio Mulaz",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead for summer dates",
        "where": "Sella (near Passo Poma / Sass de Putia) and Pale di San Martino",
        "url": null,
        "notes": "Genova is a 19th-century DAV-built hut at the Val di Funes/Longiarù-Odle crossroads; Volpi al Mulaz sits under the Pale di San Martino spires near Passo delle Farangole. No official sites could be verified from this network - search 'Rifugio Genova Sella' and 'Rifugio Volpi al Mulaz', or book by phone via the Dolomiti Superski mountain huts list (dolomitisuperski.com, Services > Mountain huts)."
      },
      {
        "title": "Rifugio Rosetta (2,581 m)",
        "category": "lodging",
        "required": true,
        "when": "season 20 Jun - 27 Sep 2026; book 1-3 months ahead",
        "where": "Pale di San Martino plateau",
        "url": "https://www.rifugiorosetta.it/",
        "notes": "Site verified; phones +39 349 5331742 (Oct to mid-June) and +39 0439 68308 (Jun-Sep), info@rifugiorosetta.it. SAT hut; summer 2026 runs 20 June to 27 September with weekend/winter openings in between."
      },
      {
        "title": "Rifugio Cereda & Rifugio Bruno Boz",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead; peak week (July) first-come",
        "where": "Passo Cereda and the Bellunesi mountains",
        "url": "https://www.rifugiocereda.it/",
        "notes": "Rifugiocereda.it is live but returned HTTP 403 to automated access - book by phone/email through the site. Rifugio Bruno Boz's site is rifugiobrunoboz.it (also 403 to bots). Both are remote Bellunesi huts with few nearby alternatives, so secure them first."
      },
      {
        "title": "Rifugio Dal Piaz (route end area)",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead",
        "where": "above Croce d'Aune / Pedavena",
        "url": "https://www.rifugiodalpiaz.it/",
        "notes": "Rifugiodalpiaz.it is live but returned HTTP 403 to automated access - book by phone/email through the site. Last high hut before the descent to Pedavena/Feltre; several AV1/AV2 hikers end the route here."
      },
      {
        "title": "Hotels in Canazei (start) and Feltre (end)",
        "category": "lodging",
        "required": false,
        "when": "book 2-4 months ahead for July-August",
        "where": "Canazei (Val di Fassa) and Feltre (Pedavena)",
        "url": null,
        "notes": "Canazei: named well-known options are Hotel Cristallo and Hotel St. Cristoforo (both in the town centre; hotelcristallo.it is live but blocked automated access, verify details there). Feltre/Pedavena: small village of Pedavena has only B&Bs; Feltre town has several hotels (e.g. Hotel Europa, Hotel Villa dei Fiori - verify current names). Search 'hotel Canazei' / 'hotel Feltre' to get live links."
      },
      {
        "title": "Resupply points",
        "category": "food",
        "required": false,
        "when": "in Canazei before day 1, in Feltre at the end; small shops at San Pellegrino/Passo Rolle",
        "where": "Canazei, San Pellegrino, Feltre",
        "url": null,
        "notes": "Full supermarkets in Canazei and Feltre; only small alpine shops at San Pellegrino (Alpe Lusia) and near Passo Rolle, so carry snacks for the high sections. Rifugios serve breakfast and dinner (half-board) and can pack lunches; some huts prefer cash."
      },
      {
        "title": "Iconic local food",
        "category": "food",
        "required": false,
        "when": "dinners at rifugios and town restaurants",
        "where": "Canazei (South Tyrolean side), Feltre (Veneto side)",
        "url": null,
        "notes": "Canazei is South Tyrolean: canederli (Knödel) and canederli soup, speck, Kassela, grappa. Feltre is Veneto: polenta with butter and speck, fegato alla feltrina, local red wines. Rifugio menus on the Pale di San Martino side (Rosetta) lean Trentino."
      },
      {
        "title": "Book rifugios as one itinerary",
        "category": "booking",
        "required": true,
        "when": "start checking when each hut opens (many open Oct-Jan; Puez 2027 opens ~mid-March); June-August sells out weeks ahead",
        "where": "each rifugio directly (phone/email/website)",
        "url": "https://www.thehiking.club/alta-via-1-dolomites",
        "notes": "Dolomite huts do not share a central system - book each night directly and early; deposits are common in peak season. The Hiking Club's AV1 page (verified) tracks which huts are accepting bookings. A 10-day shared-room AV1 works out around EUR 850/person per their cost guide (huts + meals included)."
      },
      {
        "title": "Official trail info, weather & key practical notes",
        "category": "info",
        "required": false,
        "when": "before and during the hike (check weather each morning)",
        "where": "Dolomiti (dolomiti.org) and South Tyrol meteo",
        "url": "https://cortina.dolomiti.org/en/summer/",
        "notes": "dolomiti.org redirects to the local tourism sites (Cortina page verified). Classic AV1 is ~120 km, 8-10 days, best mid-June to mid-September. Weather: weather.provinz.bz.it (official South Tyrol service, verified link) - afternoon thunderstorms are frequent Jul-Aug, start early. Emergency 112; Aiut Alpin Dolomites +39 0471 797171. The condensed app route uses the Sella bypass via San Pellegrino, so check Sella Ronda bus/lift status for that leg."
      }
    ]
  },
  "alta-via-2": {
    "slug": "alta-via-2",
    "getIn": "Take the train to Bressanone (Brixen) - direct from Innsbruck (~1 h 20 m, via Brenner) or the South Tyrolean Railway from Bolzano; from Venice it is a bus to Mestre plus Trenitalia (~3.5-4 h).",
    "getOut": "The trail ends at Croce d'Aune/Pedavena near Feltre; take the local bus to Feltre station, then Trenitalia to Venezia Santa Lucia (~1 h 10 m) or Treviso, or Dolomitibus into the Agordo valley.",
    "items": [
      {
        "title": "Train to Bressanone (Brixen)",
        "category": "transport",
        "required": true,
        "when": "day 1; book 2-6 weeks ahead for summer weekends",
        "where": "Innsbruck / Bolzano / Venezia to Bressanone",
        "url": "https://www.oebb.at/en/",
        "notes": "Innsbruck to Bressanone is a direct Brenner train of ~1 h 20 m (OBB/THY). From Bolzano the South Tyrolean Railway takes ~1 h 10 m. From Venice: airport bus to Mestre, then Trenitalia ~3.5-4 h."
      },
      {
        "title": "Trenitalia at the Feltre end",
        "category": "transport",
        "required": true,
        "when": "final day; a few services per day",
        "where": "Feltre to Venezia Santa Lucia / Treviso",
        "url": "https://www.trenitalia.com/it.html",
        "notes": "Feltre is a regional Trenitalia stop with a direct service to Venezia Santa Lucia (~1 h 10 m) and Treviso; last connections are early evening, so plan the final descent accordingly or stay a night in Feltre."
      },
      {
        "title": "Valley buses: Sud Tirol Mobil & Dolomitibus",
        "category": "transport",
        "required": false,
        "when": "for stage skips/exit legs; check summer timetables",
        "where": "Eisacktal (Brixen) and southern Dolomites (Agordo, Feltre, San Pellegrino)",
        "url": "https://dolomitibus.it/",
        "notes": "Sud Tirol Mobil (suedtirolmobil.info) is the South Tyrolean train+bus planner for the Brixen approach; Dolomitibus (verified link) runs the southern Dolomites incl. Falcade/Agordo/Feltre and helps at the Croce d'Aune exit. Both links verified on the AV2 logistics guide."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route",
        "url": null,
        "notes": "Alta Via 2 is a free marked CAI trail; no hiking permit is needed. Sections cross protected areas (Puez-Odle, Marmolada, Pale di San Martino, Dolomiti Bellunesi) but hikers walk them without fees; follow hut rules and leave-no-trace."
      },
      {
        "title": "Rifugio Plose (first hut)",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead; opens mid-June",
        "where": "Monte Plose above Bressanone (~1,834 m)",
        "url": null,
        "notes": "First night on the route, reachable from Bressanone with a cable car that shortens the climb. No site could be verified from this network - search 'Rifugio Plose Bressanone' or book by phone via the local Brixen tourist office; the Plose lift timetables are on the Plose/Brixen lift operator pages."
      },
      {
        "title": "Rifugio Genova & Rifugio Puez",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead; Puez 2027 season opens ~mid-March",
        "where": "Sella (near Passo Poma/Sass de Putia) and Puez plateau (2,475 m)",
        "url": "https://www.rifugiopuez.it/",
        "notes": "Puez site verified live (info@rifugiopuez.it; 2027 bookings open around mid-March) - it is isolated with no escape routes, so book early. Genova (19th-c. DAV hut at the Funes/Longiarù crossroads) has no site verified here - search 'Rifugio Genova Sella' and book by phone."
      },
      {
        "title": "Rifugio Volpi al Mulaz",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead; it is the key base before Passo delle Farangole",
        "where": "Pale di San Martino, below the Farangole saddle (~2,330 m)",
        "url": null,
        "notes": "Named after Alpine Club pioneer Giovanni Volpi; dramatic setting under the Pale spires. No site could be verified from this network - search 'Rifugio Volpi al Mulaz' (Pale di San Martino) and book by phone, or via the Dolomiti Superski mountain huts list."
      },
      {
        "title": "Rifugio Rosetta",
        "category": "lodging",
        "required": true,
        "when": "season 20 Jun - 27 Sep 2026; book 1-3 months ahead",
        "where": "Pale di San Martino plateau (2,581 m)",
        "url": "https://www.rifugiorosetta.it/",
        "notes": "Site verified; phones +39 349 5331742 (Oct-mid June), +39 0439 68308 (Jun-Sep), info@rifugiorosetta.it. Summer 2026 runs 20 June to 27 September; SAT-run hut with restaurant, rooms and climbing base."
      },
      {
        "title": "Rifugio Treviso",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead",
        "where": "Canali valley below the Pale (after the '709 south route' bypass)",
        "url": "https://rifugiotreviso.it/",
        "notes": "Rifugiotreviso.it is live but returned HTTP 403 to automated access - book by phone/email through the site. It is the first valley-side stop after the Pale di San Martino high section, so it is a good buffer night."
      },
      {
        "title": "Rifugio Cereda",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead",
        "where": "Passo Cereda, Dolomiti Bellunesi",
        "url": "https://www.rifugiocereda.it/",
        "notes": "Rifugiocereda.it is live but returned HTTP 403 to automated access - book by phone/email through the site. Remote Bellunesi hut with few alternatives nearby; secure it early for July dates."
      },
      {
        "title": "Rifugio Bruno Boz & Rifugio Dal Piaz",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead",
        "where": "Bellunesi mountains and Croce d'Aune / Pedavena",
        "url": "https://www.rifugiobrunoboz.it/",
        "notes": "Rifugiobrunoboz.it is live but returned HTTP 403 to automated access - book by phone/email through the site. Rifugio Dal Piaz (rifugiodalpiaz.it, same 403 situation) sits by the finish above Croce d'Aune/Pedavena; many hikers sleep there the night before dropping to Feltre."
      },
      {
        "title": "Booking window: Oct-Jan main window, some huts open from July",
        "category": "booking",
        "required": true,
        "when": "start building the itinerary now (before October is ideal); most AV2 huts begin accepting bookings Oct-Jan, a few from July-August",
        "where": "each rifugio directly",
        "url": "https://www.thehiking.club/alta-via-2-accommodation",
        "notes": "Verified tracker: 90 AV2 providers monitored; typically only ~20 are bookable before the peak window and July-August nights are 'booked out weeks in advance' with deposits. Reservations are essential on the isolated massifs (Puez, Sella, Pale, Bellunesi)."
      },
      {
        "title": "Resupply: Bressanone and Feltre only",
        "category": "food",
        "required": false,
        "when": "in Bressanone before day 1 and Feltre at the end; small shops near Passo Pordoi / San Pellegrino",
        "where": "Bressanone (start), Feltre (end)",
        "url": null,
        "notes": "Bressanone and Feltre are the only full resupply towns on the standard route; selection elsewhere is limited, so carry several days of snacks. Rifugios serve multi-course dinners, breakfasts and packed lunches; cash is useful at remote huts. Bressanone (start) also has the Tyrolean-style Hotel Zum Goldenen Vlies; Feltre has several town hotels - verify names/links locally."
      },
      {
        "title": "Official AV2 site, season & weather",
        "category": "info",
        "required": false,
        "when": "before and during the hike (check forecast each morning)",
        "where": "Bressanone to Croce d'Aune/Feltre",
        "url": null,
        "notes": "Official site per app data is alta-via-2.it - it could not be fetched from this network (transport error), so use the CAI route pages (dolomiti.it, Dolomiti Bellunesi park page) as alternates. Route: 13 stages, ~160-185 km, high points up to 2,812 m (Passo delle Farangole); best late June to mid-September, huts open mid-June to late September. Weather: weather.provinz.bz.it (official South Tyrol service); emergency 112, Aiut Alpin Dolomites +39 0471 797171."
      }
    ]
  },
  "tour-du-mont-blanc": {
    "slug": "tour-du-mont-blanc",
    "items": [
      {
        "title": "Official TMB booking engine (huts, guesthouses, hotels)",
        "category": "booking",
        "when": "book 2-3 months ahead; hut season roughly mid-June to mid-September depending on hut",
        "url": "https://www.montourdumontblanc.com/en/refuges-and-guesthouses",
        "notes": "Central online booking for all TMB huts and hotels across the three countries. Huts are small (often 20-40 beds) and June-August sell out weeks ahead. Book as soon as dates are fixed, ideally 2-3 months ahead."
      },
      {
        "title": "High-mountain huts per stage (examples)",
        "category": "lodging",
        "when": "book with the other stages; check each hut's opening dates",
        "url": "https://www.montourdumontblanc.com/fr/refuges/refuge-de-la-balme",
        "notes": "Each stage has 1-5 options, e.g. Refuge de la Balme (Les Contamines), Gîte Michel Fagot / Chalet Les Méandres (Les Houches), Rifugio Bertone (Val Ferret), Hotel du Col de la Forclaz / Refuge Le Peuty (Trient), Gîte Mermoud (Vallorcine). Individual pages: montourdumontblanc.com/fr/refuges/<slug>, e.g. /fr/refuges/refuge-de-la-balme, /fr/refuges/gite-michel-fagot, /fr/refuges/hotel-du-col-de-la-forclaz, /fr/refuges/gite-mermoud."
      },
      {
        "title": "Rail access: St-Gervais-Vallorcine line + Mont Blanc Express",
        "category": "transport",
        "when": null,
        "url": "https://en.wikipedia.org/wiki/Chamonix",
        "notes": "TMB commonly starts at Les Houches or Chamonix. Nearest rail: St-Gervais-les-Bains-Vallorcine (SNCF from Paris/Lyon/Annecy) then local bus up the valley; the Mont Blanc Express (TMR) links Vallorcine to Martigny (Switzerland) for the Swiss section."
      },
      {
        "title": "Airports",
        "category": "transport",
        "when": null,
        "url": "https://en.wikipedia.org/wiki/Chamonix",
        "notes": "Geneva (GVA) is the nearest major airport, ~88 km from Chamonix. Sion (CH) is the usual alternative for the Swiss section, Turin (IT) for the Italian section."
      },
      {
        "title": "Official TMB map and stages",
        "category": "transport",
        "when": null,
        "url": "https://umap.openstreetmap.fr/fr/map/tour-du-mont-blanc-ccpmb_1386916#11/45.843390/6.953659",
        "notes": "Interactive map of the TMB with all stages and huts (linked from the official site)."
      },
      {
        "title": "Official TMB website",
        "category": "info",
        "when": null,
        "url": "https://www.autourdumontblanc.com/en/",
        "notes": "Managed by Fondazione Montagna Sicura (Courmayeur): route description (~170 km, 10,000 m of cumulative ascent, ~10 days), accommodations, safety, webcams, trail conditions."
      },
      {
        "title": "2026 diversion in the Swiss sector (Orsières)",
        "category": "info",
        "when": "from 11 July 2026",
        "url": "https://www.autourdumontblanc.com/en/",
        "notes": "Due to rockfall risk, the path between Prayon and Branche (Les Treutsebo) is rerouted from Saturday 11 July 2026; the old route is closed. Follow the new signposted route. Camping and bivouac are strictly prohibited in this area."
      },
      {
        "title": "Casermetta Espace Mont-Blanc (Val Ferret, Courmayeur)",
        "category": "info",
        "when": "25 June - 13 September 2026, daily",
        "url": "https://www.autourdumontblanc.com/en/",
        "notes": "Free information centre for hikers on the TMB: open daily 25 June - 13 September 2026, solar Wi-Fi/phone charging, exhibitions and workshops. Contact: casermetta@fondms.org, +39 0165 897602."
      },
      {
        "title": "Bivouac and wild camping rules (by country)",
        "category": "permit",
        "when": "year-round rules; check before each night",
        "url": "https://www.autourdumontblanc.com/en/accommodations/bivouac",
        "notes": "Aosta Valley: all camping prohibited, bivouac forbidden below 2,500 m (i.e. essentially all of Val Ferret). Canton du Valais: prohibited; one night above the tree line generally tolerated, but banned in Bovernier, Martigny-Combe and Trient; Orsières only in designated areas (La Fouly, Champex-Lac, Relais d'Arpette campsites). France: in Chamonix municipality camping prohibited except high-altitude bivouac sunset to sunrise; tolerated sunset-to-sunrise in Les Houches and Saint-Gervais. Official bivouac area with toilets at Les Chapieux (Bourg-Saint-Maurice)."
      },
      {
        "title": "Reserve bivouac booking (Aiguilles Rouges / Contamines-Montjoie)",
        "category": "permit",
        "when": "1 June - 30 September (leisure park 15 June - 15 September); book before departure",
        "url": "https://reserve-bivouac74.fr/",
        "notes": "In the Aiguilles Rouges and Contamines-Montjoie national nature reserves (prefectural decree 1 June - 30 September), camping is allowed only in designated pitches and booking is compulsory: Les Contamines leisure park (150 pitches, 15 June - 15 September), Giettaz-Pont de la Rollaz and La Balme (7 pm - 9 am). Dogs prohibited in the reserves; no fires, no litter, no swimming. Reserve managed by Asters (CEN Haute-Savoie)."
      },
      {
        "title": "Trail conditions updates",
        "category": "info",
        "when": "check in the week before departure",
        "url": "https://www.autourdumontblanc.com/en/information/trails-conditions",
        "notes": "Official updates on snowfields, diversions and access restrictions around the Mont Blanc massif."
      },
      {
        "title": "Weather (three sectors)",
        "category": "info",
        "when": "check daily",
        "url": "https://chamonix-meteo.com/chamonix-mont-blanc/meteo/prevision/matin/previ_meteo_5_jours.php",
        "notes": "Chamonix 5-day forecast (linked from the official TMB site); Aosta Valley: cf.regione.vda.it; Switzerland: meteosvizzera.admin.ch."
      },
      {
        "title": "Food: huts and valley villages",
        "category": "food",
        "when": null,
        "url": null,
        "notes": "Huts serve lunch and dinner (half-board is common; prices vary by hut and are shown on each hut's booking page). Resupply in the villages: Saint-Gervais, Les Contamines, Courmayeur, La Fouly, Trient, Chamonix (supermarkets, bakeries, restaurants). No single verified restaurant directory was reachable under the corporate proxy (courmayeur.com returned 403), so verify local spots on arrival."
      }
    ],
    "getIn": "Fly into Geneva (GVA, ~88 km) or take a train to St-Gervais-les-Bains-Vallorcine (SNCF from Paris/Lyon/Annecy), then the TMR Mont Blanc Express bus into the Chamonix valley. The loop starts at Les Houches or St-Gervais.",
    "getOut": "Finish at Les Houches (or St-Gervais): valley bus to Chamonix for a car/taxi to GVA, or the TMR train from St-Gervais back to Paris/Lyon."
  },
  "walkers-haute-route": {
    "slug": "walkers-haute-route",
    "getIn": "Chamonix-Mont-Blanc (74400), France - SNCF station, Mont Blanc Express line (French side to St-Gervais-les-Bains-Le Fayet for TGV/Leman Express, Swiss side to Martigny)",
    "getOut": "Zermatt (3920), Switzerland - car-free village, arrival by Mattertal shuttle train from Täsch or taxi",
    "items": [
      {
        "title": "Getting to Chamonix (start)",
        "category": "transport",
        "required": true,
        "when": "Day 1 morning",
        "where": "Chamonix-Mont-Blanc, France",
        "url": "https://en.chamonix.com/usual-information-services/transports/public-transports",
        "notes": "SNCF Mont Blanc Express serves all valley villages: via Les Bossons, Les Houches, Servoz to St-Gervais-les-Bains-Le Fayet (connection to TGV and Leman Express), and via Argentiere, Vallorcine to Martigny (Switzerland). The Servoz-Vallorcine stretch is free for holders of the Carte d'Hote guest card (provided by your lodging). SNCF office: 40 place de la gare, Chamonix."
      },
      {
        "title": "Chamonix valley bus network (Chamonix Mobilite)",
        "category": "transport",
        "required": false,
        "when": "Whole trip",
        "where": "Chamonix valley",
        "url": "https://www.chamonix-mobilite.com",
        "notes": "Bus lines SKIBUS, PROXIBUS and CHAMONUIT; tickets must be validated on every boarding. Mobility Center (info, tickets, concierge, package pickup) at the Chamonix bus station 'Chamonix-Sud' stop. Autumn 2026 timetable guide (Sept 7-Dec 18): https://en.chamonix.com/sites/default/files/media/brochures/Guide-Automne-Chamonix-2026.pdf ; fare schedule effective 1 Jul 2026: https://en.chamonix.com/sites/default/files/media/brochures/Tarifs-Cham-Ete2026.pdf"
      },
      {
        "title": "Book mountain huts (Trient, Arpette, Mont Fort, Prafleuri, Hauderes)",
        "category": "booking",
        "required": true,
        "when": "Book as early as possible - huts fill quickly in July/August",
        "where": "Mont Blanc massif, FR/IT border",
        "url": null,
        "notes": "The former joint hut booking portal (chalets-huts.ch) is offline with no archived copy, and the official haute-route.ch site is also offline (last Wayback capture 15 Jan 2022). Book each hut directly by phone/email through the hut operator or the local alpine club section (CAF for French huts, CAAI for Italian huts). Hut names and contact details are in the archived official site: https://web.archive.org/web/20211205223422/http://haute-route.ch/ . Carry cash and ID; confirm hut opening dates and connections for the final descent to Zermatt."
      },
      {
        "title": "Former official Haute Route website (archived reference)",
        "category": "info",
        "required": false,
        "when": "n/a",
        "where": "n/a",
        "url": "https://web.archive.org/web/20211205223422/http://haute-route.ch/",
        "notes": "haute-route.ch is currently offline; this Dec 2021 Wayback snapshot is the best archived source for the classic Chamonix to Zermatt itinerary, hut list and logistics."
      },
      {
        "title": "Self-guided Haute Route operator reference (Alpenwild)",
        "category": "info",
        "required": false,
        "when": "n/a",
        "where": "n/a",
        "url": "https://www.alpenwild.com/trip/self-guided-haute-route/overview/",
        "notes": "haute-route.com is run by Alpenwild (US tour company), not the original Haute Route organization. Useful as a current self-guided reference; the route content mentions Hotel de Moiry (Lac de Moiry), Hotel Schwarzhorn (Gruben) and Fuchs restaurant in Zermatt as route alternatives."
      },
      {
        "title": "Meals at the huts (dinner + breakfast)",
        "category": "food",
        "required": false,
        "when": "Nights 1-5",
        "where": "Huts along the route",
        "url": null,
        "notes": "Alpine hut menus (simple mountain fare) are usually included in the bed-and-board rate; flag dietary restrictions when booking. Carry snacks for the passes."
      },
      {
        "title": "Getting to Zermatt (finish)",
        "category": "transport",
        "required": true,
        "when": "Final day",
        "where": "Zermatt, Switzerland",
        "url": "https://www.zermatt.ch/en/plan-book/arrival",
        "notes": "Zermatt is car-free: park at Täsch and continue by Mattertal shuttle train or taxi into the village; the official page also lists airport transfer options. Tourist contact: +41 27 966 81 00."
      },
      {
        "title": "Permits / border crossings",
        "category": "permit",
        "required": true,
        "when": "Crossing days",
        "where": "FR-IT-CH border on the route",
        "url": null,
        "notes": "The route crosses the France-Italy-Switzerland borders; carry passport/ID (Schengen area, no routine border controls, but ID is required). No separate permit beyond the hut bookings is needed, but check each hut's rules (some require proof of mountain-rescue membership/insurance)."
      }
    ]
  },
  "tour-of-the-vanoise": {
    "slug": "tour-of-the-vanoise",
    "items": [
      {
        "title": "Vanoise National Park official site",
        "category": "info",
        "when": null,
        "url": "https://www.vanoise-parcnational.fr/",
        "notes": "Park information, regulations and the full list of refuges in and around the park."
      },
      {
        "title": "Park refuges list",
        "category": "info",
        "when": null,
        "url": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite",
        "notes": "Every staffed and unstaffed refuge in/around the park with a detail page (season, contact, booking mode). The 'Tour de la Vanoise' is officially the 'Tour des Glaciers de la Vanoise' loop around the park's ice caps."
      },
      {
        "title": "Refuge de l'Arpont (park refuge, Prarondan side)",
        "category": "lodging",
        "when": "6 June - 18 September 2026; book ahead for July-August",
        "url": "https://refuge-arpont.vanoise.com",
        "notes": "Summer 2026 season: 6 June - 18 September, with a warden on site. Rates: bed 23 EUR, half-board 59 EUR, bivouac 6 EUR. Direct booking via the refuge's own page."
      },
      {
        "title": "Other refuges on the tour",
        "category": "lodging",
        "when": "seasons vary per refuge; check each detail page",
        "url": "https://www.vanoise-parcnational.fr/les-refuges-dans-le-parc-et-proximite/refuge-de-lorgere-pnv",
        "notes": "Refuge de l'Orgère, La Leisse, La Femma, Plan du Lac, Vallonbrun (park refuges), Péclet-Polset, Plan Sec, Les Evettes, Le Chalet de Bonneval sur Arc, Le P'tit Refuge — each with its own detail page; some are unstaffed (key-box access). Slugs under /les-refuges-dans-le-parc-et-proximite/: refuge-de-lorgere-pnv, refuge-de-la-leisse-pnv, refuge-de-la-femma-pnv, refuge-de-plan-du-lac-pnv, refuge-de-vallonbrun-pnv, refuge-de-peclet-polset, refuge-de-plan-sec, refuge-des-evettes."
      },
      {
        "title": "Online payment for unstaffed refuges",
        "category": "booking",
        "when": "before/at arrival per refuge instructions",
        "url": "https://paiementrefugenongardeparcnational.vanoise.com",
        "notes": "Official payment platform for the unstaffed (non-garde) park refuges."
      },
      {
        "title": "Park visitor centres (Maisons du Parc)",
        "category": "info",
        "when": "summer season",
        "url": "https://rando.vanoise.com/service/411",
        "notes": "Visitor centres in Pralognan-la-Vanoise, Val d'Isère and Aussois — route info, maps, refuge opening status. Listed on the Rando Vanoise platform: /service/411 (Pralognan), /service/410 (Val d'Isère), /service/409 (Aussois). Sample trek page: /trek/43053 (Boucle du refuge du Mont Thabor)."
      },
      {
        "title": "Rail access via Modane",
        "category": "transport",
        "when": null,
        "url": "https://en.wikipedia.org/wiki/Modane_station",
        "notes": "Nearest rail head is Modane: TGV Paris-Chambéry-Modane and Paris-Chambéry-Turin-Milan, TER Chambéry-Modane, and Frecciarossa Milan-Paris. From Modane, Pralognan-la-Vanoise is reached by road up the Val de Cère (summer bus connections — check with the Maison du Parc); Aussois and Val d'Isère lie further up the Maurienne."
      },
      {
        "title": "National park regulations",
        "category": "permit",
        "when": "all season",
        "url": "https://www.vanoise-parcnational.fr/",
        "notes": "Overnight stays are centred on the refuges; wild camping is restricted inside Vanoise National Park. Confirm current rules (bivouac, dogs, fires, water extraction) on the park site and with the Maison du Parc before setting out — each refuge detail page lists its own conditions."
      },
      {
        "title": "Refuge meals and village resupply",
        "category": "food",
        "when": null,
        "url": null,
        "notes": "Staffed refuges serve meals (e.g. Arpont half-board 59 EUR). Resupply in the villages: Pralognan-la-Vanoise, Aussois, Val d'Isère, Bonneval-sur-Arc, Saint-Jean-de-Maurienne (shops, bakeries, restaurants). No verified online directory was reachable for these small villages, so confirm on arrival."
      },
      {
        "title": "Weather and trail conditions",
        "category": "info",
        "when": "check daily",
        "url": "https://www.vanoise-parcnational.fr/",
        "notes": "Check conditions with the Maison du Parc or the refuges before each stage; the reliable window is July-September (Arpont: 6 June - 18 September 2026)."
      }
    ],
    "getIn": "Train to Modane: TGV Paris–Chambéry–Modane (and Paris–Milan via Modane) or TER Chambéry–Modane. The loop starts and ends at Modane station.",
    "getOut": "The loop ends back at Modane station — TGV to Paris/Chambéry or Frecciarossa Milan–Paris."
  },
  "grande-traversee-de-la-chartreuse": {
    "slug": "grande-traversee-de-la-chartreuse",
    "items": [
      {
        "title": "Official route page (ALPES ISHERE / Chartreuse)",
        "category": "info",
        "when": "hors neige, mai à octobre (weather permitting)",
        "url": "https://www.alpes-isere.com/itineraire/traversee-de-chartreuse-rando-pedestre-5-jours-7698632/",
        "notes": "Traversée de Chartreuse - Rando pédestre 5 jours: 88 km, 4,803 m D+/D-, level rouge (difficult), start gare de Grenoble, finish gare de Chambery. Stages: 1 Grenoble > Le Sappey (16.9 km, 7 h, +1,324/-560), 2 Sappey > St-Pierre-de-Chartreuse (20.7 km, 7 h, +975/-1,090), 3 > St-Pierre-d'Entremont (20.5 km, 8 h, +1,219/-1,562), 4 > Le Désert d'Entremont (9.5 km, 4 h, +855/-320), 5 > Chambery gare (17.9 km, 5 h30, +440/-1,365). Accessible by public transport (bus, train). Stage detail pages: /itineraire/traversee-de-chartreuse-etape-1-grenoble-sappey-en-chartreuse-7820663/, -etape-2-...-7820664/, -etape-3-...-7820666/."
      },
      {
        "title": "Chartreuse-Tourisme official GTC page",
        "category": "info",
        "when": null,
        "url": "https://www.chartreuse-tourisme.com/a-voir-a-faire/marcher-courir-rouler/balades-randonnees/tours-traversees/la-traversee-de-chartreuse/",
        "notes": "Tours et traversées section of the official Chartreuse tourism site, linked from the route page."
      },
      {
        "title": "GPX track and map downloads",
        "category": "info",
        "when": null,
        "url": "https://static.apidae-tourisme.com/filestore/objets-touristiques/plans/157/38/38348445/traversee-de-chartreuse-28mai24+1.gpx",
        "notes": "Official GPS track (GPX, 437 Ko) and collection map (PNG, 3.2 Mo) downloadable from the route page."
      },
      {
        "title": "Cars Région line T40: Grenoble <-> St-Pierre-de-Chartreuse",
        "category": "transport",
        "when": "year-round; winter timetable from 31 August",
        "url": "https://www.laregionvoustransporte.fr/cars-region/cars-region-de-lisere/ligne/t40-st-pierre-de-chartreuse-grenoble/",
        "notes": "Regional bus linking Grenoble and St-Pierre-de-Chartreuse (stage 2/3 area), stop 'La Correrie' near the Grande Chartreuse museum. Bike rack on board; tickets via the Oura card. Timetable PDF (from 1 September 2026) on the line page; info 04 8000 7000 (Mon-Sat 8h-19h)."
      },
      {
        "title": "Start/finish by train (Grenoble gare / Chambery gare)",
        "category": "transport",
        "when": null,
        "url": "https://www.alpes-isere.com/itineraire/traversee-de-chartreuse-rando-pedestre-5-jours-7698632/",
        "notes": "The route starts at Grenoble train station and ends at Chambery train station; the official page states the whole traverse is doable by public transport (bus + train)."
      },
      {
        "title": "Le Chant de l'eau — Le Sappey-en-Chartreuse (stage 1)",
        "category": "lodging",
        "when": "book ahead; opening dates vary by gîte",
        "url": "https://www.alpes-isere.com/sit/le-chant-de-leau-4834183/",
        "notes": "3-épis gîte d'étape at the end of stage 1; online booking via the listing."
      },
      {
        "title": "Le Petit Skieur — Le Sappey-en-Chartreuse (stage 1)",
        "category": "lodging",
        "when": "book ahead",
        "url": "https://www.alpes-isere.com/sit/le-petit-skieur-appartement-panoramique-5322649/",
        "notes": "Panoramic apartment in Le Sappey; online booking via the listing."
      },
      {
        "title": "Gîte auberge l'Herbe Tendre — St-Pierre-d'Entremont (stage 3)",
        "category": "lodging",
        "when": "book ahead",
        "url": "https://www.alpes-isere.com/sit/gite-auberge-lherbe-tendre-76330/",
        "notes": "Stage gîte/auberge serving meals; from 35 EUR/night; online booking via the listing."
      },
      {
        "title": "Gîte La P'tite Lulu — St-Pierre-d'Entremont (stage 3)",
        "category": "lodging",
        "when": "book ahead",
        "url": "https://www.alpes-isere.com/sejour/gite-la-ptite-lulu-6500018/",
        "notes": "4-person gîte at the end of stage 3; from 75 EUR/night; online booking via the listing."
      },
      {
        "title": "Gîte Le Petit Chartreux — St-Pierre-de-Chartreuse (stage 2)",
        "category": "lodging",
        "when": "book ahead",
        "url": "https://www.alpes-isere.com/sit/gite-le-petit-chartreux-677199/",
        "notes": "2-épis gîte d'étape at the end of stage 2; from 50 EUR/night; online booking via the listing."
      },
      {
        "title": "Book all stage gîtes in advance",
        "category": "booking",
        "when": "as soon as dates are fixed (May-October season)",
        "url": "https://www.alpes-isere.com/itineraire/traversee-de-chartreuse-rando-pedestre-5-jours-7698632/",
        "notes": "Official page: 'Il est très fortement conseillé de réserver les hébergements en amont (attention dates d'ouverture variables selon hébergements)' — and to confirm current trail access with the tourism office before departing."
      },
      {
        "title": "Hauts de Chartreuse réserve — dogs prohibited",
        "category": "permit",
        "when": "all season",
        "url": "https://www.alpes-isere.com/itineraire/traversee-de-chartreuse-rando-pedestre-5-jours-7698632/",
        "notes": "Dogs are not allowed, even on a leash, in the Réserve naturelle nationale des Hauts de Chartreuse, in the Natura 2000 zone of the Charmant Som and in most alpages crossed by the traverse; elsewhere in Chartreuse dogs are accepted only in certain conditions."
      },
      {
        "title": "Season, marking and practical notes",
        "category": "info",
        "when": "May - October",
        "url": "https://www.alpes-isere.com/itineraire/traversee-de-chartreuse-rando-pedestre-5-jours-7698632/",
        "notes": "Recommended period: hors neige (May to October), subject to weather. Marking: GR 9 (white/red) Grenoble > St-Pierre-de-Chartreuse, GR de Pays Tour de Chartreuse (yellow/red) > Epernay (watch for yellow marking between Col de Bellefont and the Alpette de la Dame), then PR (yellow) Epernay > Chambery. Terrain: rock and dirt. Editorial guide: alpes-isere.com/outdoor/trek-et-itinerance/grande-randonnee-traversee-chartreuse/."
      },
      {
        "title": "Food and resupply in the stage villages",
        "category": "food",
        "when": null,
        "url": null,
        "notes": "Each stage ends in a village with shops, bakeries and restaurants: Le Sappey-en-Chartreuse, St-Pierre-de-Chartreuse, St-Pierre-d'Entremont, Le Désert d'Entremont, then Chambery. Stage auberges (e.g. l'Herbe Tendre) also serve meals. No verified online restaurant directory was reachable under the corporate proxy, so confirm locally."
      }
    ],
    "getIn": "SNCF train to Grenoble station (TGV from Paris; ~45 min from Lyon). The route starts at the station; the official page notes the whole traverse is doable by public transport (Cars Région T40 to the Chartreuse side).",
    "getOut": "Finish at Chambéry station — TER to Paris/Lyon/Geneva, or TGV from nearby Aix-les-Bains."
  },
  "kumano-kodo-nakahechi": {
    "slug": "kumano-kodo-nakahechi",
    "getIn": "Kii-Tanabe, Wakayama Prefecture, Japan (JR station; gateway to the Nakahechi route toward the Takijiri-oji trailhead)",
    "getOut": "Kumano Hongu Taisha (Hongu/Fushiogami, Tanabe City, Wakayama Prefecture), Japan",
    "items": [
      {
        "title": "Getting to Kii-Tanabe (train)",
        "category": "transport",
        "required": true,
        "when": "Arrival day",
        "where": "Kii-Tanabe station, Wakayama Prefecture, Japan",
        "url": "https://www.tb-kumano.jp/en/transport/train/",
        "notes": "JR West Kuroshio express: Tennoji to Kii-Tanabe 1 h 45 min, Shin-Osaka to Kii-Tanabe 2 h, Kyoto to Kii-Tanabe 2 h 35 min (some trains terminate at Shirahama). JR West Kansai WIDE Area Pass: https://www.westjr.co.jp/global/en/ticket/pass/kansai_wide/ . From KIX airport, take the Nankai line to Namba (Nankai's main Osaka station) and continue by train to Kii-Tanabe - connections via the official Kumano bureau transport pages. Always search with the 'Kii' prefix (timetable search: http://world.jorudan.co.jp/mln/mlnorikae.cgi )."
      },
      {
        "title": "Kumano local buses (Kii-Tanabe to Takijiri/Takahara/Chikatsuyu/Hongu)",
        "category": "transport",
        "required": true,
        "when": "Trek days",
        "where": "Kii Peninsula, Wakayama Prefecture, Japan",
        "url": "https://www.tb-kumano.jp/en/transport/bus/",
        "notes": "Local buses from Kii-Tanabe station, Shingu and Shirahama serve the isolated trail villages; downloadable bus timetable PDFs on this page. Check the 'Kumano Kodo Additional Public Transport (Fall 2026)' notice: https://www.tb-kumano.jp/en/2026-07-24/17684/"
      },
      {
        "title": "Ryujin Bus 4-day pass",
        "category": "transport",
        "required": false,
        "when": "Trek days (valid 4 consecutive days)",
        "where": "Kii-Tanabe - Yunomine/Kawayu - Hongu, Japan",
        "url": "https://www.ryujinbus.com/en/freeticket/",
        "notes": "4-day pass on the Kumano Hongu Line: adult JPY 5,000 / child JPY 3,500; e-ticket via ryujinbus-ticket.quicktrip.jp or paper at Tanabe Tourist Information Center (1-20 Minato, Tanabe, 9:00-18:00). Separate seasonal service 'Koyasan & Kumano Access Bus': Koyasan to Hongu JPY 5,300 adult / JPY 2,650 child, ~4 h 30 min, operating 2 Apr-30 Nov 2026 and suspended Tue/Wed: https://www.ryujinbus.com/en/route_jyunrei/koya_hongu/ . Phone: 0739-22-2100."
      },
      {
        "title": "KUMANO TRAVEL community reservations (lodging + bus + luggage)",
        "category": "booking",
        "required": true,
        "when": "As soon as dates are set; in November 2026 reservation requests may take 30+ days to confirm",
        "where": "Tanabe City / Kumano region, Japan",
        "url": "https://www.kumano-travel.com/en",
        "notes": "Official community reservation portal of the Tanabe City Kumano Tourism Bureau (English). Books the lodgings below plus luggage shuttle and, where available, buses. Self-guided Nakahechi dynamic packages: 3 days JPY 85,000, 4 days (Takijiri to Hongu) JPY 98,000, 6 days JPY 166,000. Two-step booking: after the request, pay within 48 h. Daily luggage shuttle add-on: https://www.tb-kumano.jp/en/2026-09-15/18036/"
      },
      {
        "title": "Minshuku Chikatsuyu (Chikatsuyu village)",
        "category": "lodging",
        "required": false,
        "when": "Book via KUMANO TRAVEL ahead of time",
        "where": "Chikatsuyu, Hongu area, Wakayama Prefecture, Japan",
        "url": "https://www.kumano-travel.com/en/accommodations/minshuku-chikatsuyu",
        "notes": "Family-run minshuku in Chikatsuyu, a central Nakahechi village; listed on the official Kumano lodging page (https://www.tb-kumano.jp/en/lodging/)."
      },
      {
        "title": "Fujiya Ryokan (Kawayu Onsen)",
        "category": "lodging",
        "required": false,
        "when": "Book via KUMANO TRAVEL ahead of time",
        "where": "Kawayu Onsen, Wakayama Prefecture, Japan",
        "url": "https://www.kumano-travel.com/en/accommodations/fujiya-ryokan",
        "notes": "Ryokan in Kawayu Onsen with Japanese-style rooms and traditional meals; book through the official portal."
      },
      {
        "title": "Kamigoten Ryokan (plus other Kumano lodgings)",
        "category": "lodging",
        "required": false,
        "when": "Book via KUMANO TRAVEL ahead of time",
        "where": "Kumano region, Wakayama Prefecture, Japan",
        "url": "https://www.kumano-travel.com/en/accommodations/kamigoten-ryokan",
        "notes": "Ryokan listed on the official Kumano lodging page. Also: Arafune Resort (kokuminshukusha, Arafune/Yunomine area) and Guesthouse SORA Chikatsuyu (https://www.kumano-travel.com/en/accommodations/chikatsuyu-guesthouse-sora). Full accommodations list: https://www.tb-kumano.jp/en/lodging/list/"
      },
      {
        "title": "Kumano cuisine (Kumano-gobo and more)",
        "category": "food",
        "required": false,
        "when": "Trek days",
        "where": "Hongu/Tanabe region, Japan",
        "url": "https://www.tb-kumano.jp/en/cuisine/",
        "notes": "Official page on local cuisine (e.g. Kumano-gobo, a seven-vegetable dish). Onsen along the route: https://www.tb-kumano.jp/en/onsen/ (Yunomine, Kawayu, Wataze, Ryujin, Totsukawa, Chikatsuyu Hisui-no-Yu); bath etiquette: https://www.tb-kumano.jp/en/onsen/how-to-enjoy-a-japanese-bath/"
      },
      {
        "title": "Nakahechi route guide (sections + maps)",
        "category": "info",
        "required": true,
        "when": "Before the trek",
        "where": "n/a",
        "url": "https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/",
        "notes": "Route sections: Takijiri-oji to Tsugizakura-oji (via Takahara/Chikatsuyu) and Tsugizakura-oji to Kumano Hongu Taisha; overview map PDF: http://www2.tb-kumano.jp/en/kumano-kodo/pdf/Kumano-Kodo-Nakahechi-Route-Maps-Overview.pdf . Tips & safety: https://www.tb-kumano.jp/en/kumano-kodo/tips/ ; UNESCO context: https://www.tb-kumano.jp/en/kumano-kodo/world-heritage/"
      },
      {
        "title": "Luggage shuttle & storage",
        "category": "transport",
        "required": false,
        "when": "Book with the trek reservation",
        "where": "Villages along the Nakahechi, Japan",
        "url": "https://www.tb-kumano.jp/en/resources/luggage-shuttle-storage/",
        "notes": "Official luggage shuttle between villages (can be bundled with a KUMANO TRAVEL booking). Ryujin Bus luggage shuttle option: https://www.kumano-travel.com/en/travel-services/luggage-shuttle-ryujin-bus"
      }
    ]
  },
  "west-highland-way": {
    "slug": "west-highland-way",
    "getIn": "Fly into Glasgow (GLA); the route starts at Milngavie, 20 min by taxi or train from Glasgow Central. Or join mid-route by coach at Inverarnan, Crianlarich, Tyndrum or Bridge of Orchy.",
    "getOut": "Fort William rail station: ScotRail back to Glasgow (~5.5 h) or LNER to London, or CityLink coach to Glasgow.",
    "items": [
      {
        "title": "ScotRail Glasgow Central to Fort William",
        "category": "transport",
        "required": false,
        "when": "day of departure / day of return",
        "where": "Glasgow Central to Fort William (~5.5 h)",
        "url": "https://www.scotrail.co.uk/",
        "notes": "Direct train; the line also passes Inverarnan, Crianlarich, Tyndrum and Bridge of Orchy, all route junction points. Book ahead for cheaper fares."
      },
      {
        "title": "LNER London King's Cross to Fort William",
        "category": "transport",
        "required": false,
        "when": "day of departure / day of return",
        "where": "London King's Cross to Fort William, direct",
        "url": "https://www.lner.co.uk/",
        "notes": "Useful if approaching from England; arrives at the route's northern terminus (Fort William). Advance tickets are significantly cheaper."
      },
      {
        "title": "CityLink coach and mid-route joins",
        "category": "transport",
        "required": false,
        "when": "year-round, several daily",
        "where": "Glasgow to Fort William, stopping at Inverarnan, Crianlarich, Tyndrum, Bridge of Orchy",
        "url": null,
        "notes": "Coach times are listed on the official site's getting-to/from page; the operator's own site (citylink.co.uk) could not be verified from this network. Good way to join or leave mid-route."
      },
      {
        "title": "Baggage transfer - AMS Scotland",
        "category": "transport",
        "required": false,
        "when": "daily 8am-6pm, book a few days ahead",
        "where": "stage to stage across the whole route",
        "url": "https://www.amsscotland.co.uk/",
        "notes": "One of several luggage services listed on the official site (also Highland Transfers highlandtransfers.com, Travel-lite, EasyWays, Macs Adventure). Optional but common on a 7-day crossing."
      },
      {
        "title": "Baggage transfer - Baggage Freedom",
        "category": "transport",
        "required": false,
        "when": "on request",
        "where": "Milngavie to Fort William, full route",
        "url": "https://www.baggagefreedom.com/",
        "notes": "Listed on the official West Highland Way baggage-transfer page; full-route transfer priced at £65."
      },
      {
        "title": "No permit or booking required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route",
        "url": null,
        "notes": "The West Highland Way is an open-access public footpath; no permit, fee or reservation. The only real constraint is accommodation: book popular B&Bs and the hostel ahead for June-August."
      },
      {
        "title": "B&B - Bolziccos, Drymen",
        "category": "lodging",
        "required": false,
        "when": "open March to October",
        "where": "Drymen, Loch Lomond shore (start area)",
        "url": "https://bolziccos.com/",
        "notes": "Listed in the official site's B&B directory; from £30 per person sharing. Convenient for a late start or a final night near the beginning."
      },
      {
        "title": "Hotel - MacDonald Hotel, Inverarnan",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Inverarnan, Loch Lomond (day 3-4 area)",
        "url": "https://macdonaldhotel.co.uk/",
        "notes": "From the official site's hotel directory: rooms from £115, family cabins from £17.50 per person, camping from £10 per person."
      },
      {
        "title": "Inn - Clachan Inn, Drymen",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Drymen, near the route start",
        "url": "https://clachaninndrymen.co.uk/",
        "notes": "Claimed to be Scotland's oldest licensed public house; meals and drink near the start of the walk. Listed on the official site."
      },
      {
        "title": "Youth hostel - Rowardennan Lodge",
        "category": "lodging",
        "required": false,
        "when": "summer season, book ahead",
        "where": "Rowardennan, eastern Loch Lomond (day 2-3)",
        "url": "https://www.hostellingscotland.org.uk/hostels/rowardennan/",
        "notes": "Budget bed after crossing Loch Lomond by waterbus; Hostelling Scotland members get reduced rates."
      },
      {
        "title": "Hotel - Ossian's, Fort William",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Fort William, 5 min from the rail station (final night)",
        "url": "https://www.ossians.com/",
        "notes": "Convenient for the last night and onward trains; listed on the official site's Fort William hotel pages. Alternatives: Guisachan (guisachanguesthouse.co.uk), Ardlui, Kingshouse."
      },
      {
        "title": "Official route site - stage guide and directory",
        "category": "info",
        "required": false,
        "when": "before and during the walk",
        "where": "westhighlandway.org",
        "url": "https://www.westhighlandway.org/",
        "notes": "Official site: stage-by-stage guide, distances, getting-to/from page, and full accommodation directories (hotels, B&B, inns, baggage transfer). Use it to pick overnight stops per stage."
      }
    ]
  },
  "pennine-way": {
    "slug": "pennine-way",
    "getIn": "Fly into Manchester (MAN) (~1 h to Holmfirth) or take a train to Buxton, then Route 62 bus down to Edale where the walk starts.",
    "getOut": "Kirk Yetholm: Route 81 bus to Kelso or Morebattle (Scottish Borders), or Borders Buses via Melrose; drive/train onward from Kelso or Carlisle.",
    "items": [
      {
        "title": "Fly into Manchester (MAN)",
        "category": "transport",
        "required": false,
        "when": "day before or day of start",
        "where": "Manchester Airport to Holmfirth/Buxton, ~1 h by car or coach",
        "url": null,
        "notes": "Manchester is the closest major airport to the northern (Edale) end; manchesterairport.co.uk could not be verified from this network, but it is the standard gateway. Buxton is the alternative rail hub."
      },
      {
        "title": "Train Manchester to Buxton or Holmfirth",
        "category": "transport",
        "required": false,
        "when": "day of start",
        "where": "Manchester to Buxton (for the northern start at Edale) or to Holmfirth (for the southern end near Hebden Bridge)",
        "url": null,
        "notes": "Operated by TransPennine Express (tpeg.co.uk, which could not be verified from this network). From Buxton take the Route 62 bus to Edale; Holmfirth is the gateway for the southern section, with Hebden Bridge the first stage stop."
      },
      {
        "title": "Route 62 bus Buxton-Edale-Castleton",
        "category": "transport",
        "required": false,
        "when": "several per day, less on Sundays",
        "where": "Buxton to Edale (route start)",
        "url": "https://bustimes.org/localities/edale",
        "notes": "The essential connection from Buxton station to Edale; check current times and operator (Dales & Peak / High Peak) on the live-bus-times page, as rural services are sparse."
      },
      {
        "title": "Kirk Yetholm exit - Route 81 and Borders Buses",
        "category": "transport",
        "required": false,
        "when": "day of finish",
        "where": "Kirk Yetholm to Kelso / Morebattle / Melrose",
        "url": "https://www.bordersbuses.co.uk/",
        "notes": "Route 81 (Scottish Borders Council) links Kirk Yetholm with Kelso and Morebattle; Borders Buses serves the surrounding area. Verify times the week before - rural timetables change seasonally."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route",
        "url": null,
        "notes": "The Pennine Way is a National Trail with open access; no permit or fee. It crosses private farmland, so leave gates as you find them and keep to the marked path in sheep season (spring lambing)."
      },
      {
        "title": "Keld Lodge - hotel and restaurant",
        "category": "lodging",
        "required": false,
        "when": "year-round, book ahead in summer",
        "where": "Keld, upper Dales (the only village on the high section)",
        "url": "https://www.keldlodge.com/",
        "notes": "The key overnight stop on the exposed upper stretch; rooms plus restaurant. With no other beds nearby for ~20 km, it books out early in June-August."
      },
      {
        "title": "Tan Hill Inn",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Tan Hill, 528 m (1,732 ft) - highest pub in England",
        "url": "https://tanhillinn.com/",
        "notes": "Rooms and meals at the highest point of the route; a natural mid-section break. The historic site (tanhill.co.uk) could not be reached from this network; tanhillinn.com is the current booking site."
      },
      {
        "title": "Lister Arms, Malham",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Malham, near the Edale start",
        "url": "https://www.listerarms.co.uk/",
        "notes": "Grade II listed 1723 inn, AA 4-star; popular base for the first stages. Also useful if joining via Holmfirth rather than Edale."
      },
      {
        "title": "White Hart Inn, Hawes",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Hawes, Swaledale - classic rest-day stop",
        "url": "https://www.whiteharthawes.co.uk/",
        "notes": "16th-century coaching inn at one of the standard rest days (others: Hebden Bridge, Skipton, Appleby). The Horton Hotel nearby is the other main Hawes option (site unreachable from this network)."
      },
      {
        "title": "Old Nags Head, Edale",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Edale, route start",
        "url": "https://www.the-old-nags-head.co.uk/",
        "notes": "Pub with rooms at the start point - good for a night before or a late start. The Old Town Hall in Edale is the other known option but its site could not be verified."
      },
      {
        "title": "National Trails - Pennine Way official page",
        "category": "info",
        "required": false,
        "when": "before the walk",
        "where": "nationaltrail.co.uk",
        "url": "https://www.nationaltrail.co.uk/en_GB/trails/pennine-way/",
        "notes": "Official route information, maps and planning guidance. The Pennine Way Association's own domain (pennineway.org.uk) currently serves a parked placeholder page, so use National Trails as the reference."
      },
      {
        "title": "Best season and rest days",
        "category": "info",
        "required": false,
        "when": "mid-May to September",
        "where": "whole route (~19 days at a steady pace)",
        "url": null,
        "notes": "Walk mid-May to September to keep the high passes clear of snow; plan rest days at Hebden Bridge, Skipton, Hawes or Appleby-in-Westmorland, all of which have trains or buses."
      }
    ]
  },
  "juliana-trail": {
    "slug": "juliana-trail",
    "getIn": "Fly into Ljubljana (LJU) (Venice, Trieste or Klagenfurt also work) and take a Slovenian Railways train or a direct bus to Kranjska Gora (~2 h from Ljubljana).",
    "getOut": "The loop ends where it starts in Kranjska Gora - train or bus back to Ljubljana; you can also break out via Bovec (bus from Most na Soči, no train) or Tarvisio on the Italian side (train toward Udine/Trieste).",
    "items": [
      {
        "title": "Slovenian Railways trains to trail towns",
        "category": "transport",
        "required": true,
        "when": "day 1 and for stage skips; check the summer timetable",
        "where": "Ljubljana to Kranjska Gora, Jesenice, Bled, Bohinjska Bistrica, Podbrdo, Most na Soči",
        "url": "https://potniski.sz.si/en/",
        "notes": "Slovenian Railways (SŽ) serves all the main stage-end towns except Bovec; the passenger-division site (verified) has timetables and tickets. Note Bovec is bus-only, so plan that leg with Nomago."
      },
      {
        "title": "SiMO journey planner + Arriva/Nomago buses",
        "category": "transport",
        "required": true,
        "when": "plan connections before travelling; buses are few outside summer",
        "where": "all trail towns (Kranjska Gora - Bohinj - Soča valley)",
        "url": "https://www.simo.si/",
        "notes": "SiMO (verified) stitches train+bus connections across Slovenia. Arriva Slovenia runs the Kranjska Gora-Bohinjska Bistrica corridor; Nomago runs Most na Soči-Bovec (nomago.si timetables). Free summer shuttle buses also operate in some destinations."
      },
      {
        "title": "Nomago bus: Most na Soči to Bovec",
        "category": "transport",
        "required": true,
        "when": "for the Kobarid/Bovec stages (no train to Bovec)",
        "where": "Most na Soči - Bovec - Tolmin",
        "url": "https://www.nomago.si/avtobusne-vozovnice/vozni-red",
        "notes": "Verified timetable page. Bovec (Soča valley hub, Stages 13-14) has no railway, so this bus line is the practical connector; services are less frequent in shoulder season, so check the vozni red before committing a stage."
      },
      {
        "title": "No permit; Triglav National Park ticket for side hikes",
        "category": "permit",
        "required": false,
        "when": "buy the TNP ticket only if doing side hikes (e.g. Triglav from Mojstrana)",
        "where": "Juliana Trail + Triglav National Park",
        "url": "https://www.tnp.si",
        "notes": "The Juliana Trail itself needs no permit and is free. If you add peaks from Mojstrana or the Bohinj side you enter Triglav National Park and need a park ticket (verified TNP site). Camping is only allowed at designated campsites, and dogs must be leashed."
      },
      {
        "title": "Hostel Lukna (Mojstrana) & Guest House Ejga (Jesenice)",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead for summer",
        "where": "Mojstrana (Vrata valley, TNP gateway) and Jesenice",
        "url": null,
        "notes": "Lukna is the classic hostel above the Vrata valley for TNP hikers; Ejga is a small family guesthouse in Jesenice. No sites could be verified from this network (proxy blocked them) - search 'Hostel Lukna Mojstrana' and 'Guest House Ejga Jesenice'; Jesenice stays are also listed on turizem.jesenice.si (verified link on the official Juliana FAQ)."
      },
      {
        "title": "Hišar (Podbrdo) & Hiša Brdo (Grahovo)",
        "category": "lodging",
        "required": true,
        "when": "Hišar: book 3-6 months ahead; Hiša Brdo: book FIRST (only ~18-20 beds)",
        "where": "Podbrdo and Grahovo ob Bači (Bača valley)",
        "url": null,
        "notes": "Both are small guesthouses in the quieter Bača corridor and fill early. No sites verified from this network (hisar.si returned 403 to automated access, other domains blocked) - search 'Hišar Podbrdo' and 'Hiša Brdo Grahovo' and call directly; the Julian Alps Booking Center can also reserve them."
      },
      {
        "title": "Hotel Jelka (Pokljuka) & Hotel Majerca (Stara Fužina)",
        "category": "lodging",
        "required": true,
        "when": "Jelka: book as early as possible (bookings essential); Majerca: 2-3 months ahead",
        "where": "Pokljuka plateau (Stage 5-6) and Stara Fužina at Lake Bohinj (Stage 6-7)",
        "url": null,
        "notes": "Pokljuka has very limited accommodation, so Hotel Jelka is the one to secure first; Majerca is the classic Stara Fužina inn at the eastern end of Lake Bohinj. No sites verified from this network - search 'Hotel Jelka Pokljuka' and 'Hotel Majerca Stara Fužina'; Bohinj stays are listed on book.julian-alps.com (verified)."
      },
      {
        "title": "Hostel Soca Rocks (Bovec) & Hotel Hvala (Kobarid)",
        "category": "lodging",
        "required": true,
        "when": "book 2-3 months ahead; Bovec is the most popular Soča-valley base",
        "where": "Bovec and Kobarid",
        "url": null,
        "notes": "Soca Rocks is the social riverfront hostel in Bovec; Hotel Hvala is the well-known Kobarid hotel. No sites verified from this network (both blocked by the proxy) - search 'Hostel Soca Rocks Bovec' and 'Hotel Hvala Kobarid'; Soča valley stays are all listed on soca-valley.com's accommodation pages (verified)."
      },
      {
        "title": "Tarvisio: Hotel Tarvisio / Hotel Edelhof",
        "category": "lodging",
        "required": true,
        "when": "book 2-3 months ahead (Stage 15-16, Italy side)",
        "where": "Tarvisio (Italy), below Predil Pass",
        "url": "http://www.tarvisiano.org/en/18125/ospitality",
        "notes": "Verified Tarvisio tourism hospitality listing for both named hotels. Edelhof sits right at the Predil foot (edelhof.eu is live but blocked automated access). From Tarvisio it is a train back toward Udine/Trieste, or continue to Ratece and into Kranjska Gora."
      },
      {
        "title": "Julian Alps Booking Center (official booking)",
        "category": "booking",
        "required": true,
        "when": "book in advance - before spring; June to mid-September is almost sold out last-minute",
        "where": "Turizem Dolina Soče, Rupa 17, Bovec",
        "url": "https://julian-alps.com/en/p/booking-centre-and-best-deals/41363681/",
        "notes": "Official center (verified link): +386 5 30 29 642 / 643 (Mon-Fri ~8:00-16:00), booking@juliana-trail.si. It can book whole itineraries with luggage transfer, return transfers and a 10-hour emergency line; the FAQ warns many stays are completely booked out for last-minute summer dates."
      },
      {
        "title": "Bled: blejski kremšnita (cream cake) & lake stop",
        "category": "food",
        "required": false,
        "when": "Stage 4-5 rest day",
        "where": "Lake Bled (Bled)",
        "url": "https://www.bled.si/en/accommodation/list-of-accommodations/",
        "notes": "The iconic Bled cream cake (blejski kremšnita) is eaten at the lakeside inns and cafes (famous at Gostilna Pri Zorci and the Toplice area - individual cafe sites unverified from this network). Bled is also a good resupply town and lake-boat/peninsula rowing stop; the verified Bled tourism link lists all town accommodation."
      },
      {
        "title": "Soča valley food: river trout, čompe, štruklji",
        "category": "food",
        "required": false,
        "when": "Stages 11-14 dinners (Kobarid, Bovec)",
        "where": "Kobarid and Bovec",
        "url": "https://www.soca-valley.com/en/activities-presentation/juliana-trail/1000/",
        "notes": "Soča river trout is the signature dish (fishing licences at dovolilnice.dolina-soce.si, verified link); čompe (boiled potatoes with butter and sheep cheese), štruklji and Bovec sheep's-milk cheese round out the menu. Book dinners ahead in small villages; some simple restaurants take cash only."
      },
      {
        "title": "Official trail site, season & free app",
        "category": "info",
        "required": false,
        "when": "before the hike (download the app + GPX)",
        "where": "270 km loop, 16 stages, Kranjska Gora start/finish",
        "url": "https://julian-alps.com/en/p/juliana-trail/42271466/",
        "notes": "Official Julian Alps site (verified via the Soča Valley/Kranjska Gora pages; the site itself sits behind an anti-bot check). 270 km, 16 stages (~17.5 km / 4-5 h each), ~9,500-10,000 m of climbing; best end-March to end-October with spring/autumn most pleasant. Free Juliana Trail app (Outdooractive), guidebook EUR 5 at Bovec/Kobarid/Tolmin TIs; emergency 112."
      },
      {
        "title": "Kobarid WWI museum",
        "category": "info",
        "required": false,
        "when": "Stage 12-13 (Kobarid rest/overnight)",
        "where": "Kobarid (Soča valley)",
        "url": "https://www.soca-valley.com/en/in-search-of-adventure/culture/2020121411554522/kobariski-muzej",
        "notes": "Kobarid is the WWI town of the Isonzo fronts; the museum (verified Soča Valley page) covers the 1915-1917 battles along the Soča. Allow half a day; the town is also a good resupply point with good restaurants."
      }
    ]
  },
  "via-engiadina": {
    "slug": "via-engiadina",
    "getIn": "Start at Vinadi in Italy's Vinschgau: drive (or take the valley bus) up the Vinschger valley from Meran (~40-50 min); fly into Milan or Venice and rent a one-way car or arrange a transfer, because the Engadin is a car-light valley.",
    "getOut": "Finish at the Maloja Pass; Maloja station sits on the UNESCO Bernina line (Chur-Tirano), so take the train from Maloja to Chur (~2 h), Tirano (~1 h 20 m) or St. Moritz, and connect on to Zurich or Milan.",
    "items": [
      {
        "title": "Bernina line train out of Maloja",
        "category": "transport",
        "required": true,
        "when": "final day; reserve seats in July-August",
        "where": "Maloja station (on the Chur-Tirano Bernina line)",
        "url": "https://www.sbb.ch/en",
        "notes": "Verified SBB portal for tickets/timetables. Maloja is the big advantage of this route: it is a railway stop, so you can leave with a light pack by train to Chur (for Zurich), Tirano (for Milan) or St. Moritz - no car needed."
      },
      {
        "title": "Vinschger valley bus from Meran to Vinadi",
        "category": "transport",
        "required": true,
        "when": "day 1 (or use a transfer/taxi if the bus does not suit)",
        "where": "Meran (Merano) up to Vinadi, Vinschgau",
        "url": "https://www.suedtirolmobil.info/de/#/",
        "notes": "Verified Sud Tirol Mobil planner/timetable for the Vinschger valley line from Meran past Schluderns/Sterzing toward the upper valley where Vinadi sits. Buses run a few times daily - outside summer check the vozni red (timetable) in advance, or drive/taxi the ~50 min."
      },
      {
        "title": "PostBus through the Engadin",
        "category": "transport",
        "required": true,
        "when": "throughout; the valley is car-light so plan on the bus",
        "where": "Maloja - Scuol - Zuoz (Vuoz) - Samedan - St. Moritz",
        "url": "https://www.postbus.ch/",
        "notes": "Verified PostAuto/PostBus site: the green PostBus line links every Engadin village and meets the trains at Maloja and Scuol/Zuoz stations. Tickets are valid with SBB tickets (buy via the SBB Mobile app); rural Engadin parking is limited, so bus + train is the intended mode."
      },
      {
        "title": "Samedan-Corviglia cable car ('cheat code' lift)",
        "category": "transport",
        "required": false,
        "when": "on the Samedan stage; seasonal, typically late spring to autumn",
        "where": "Samedan up to Corviglia (route's highest point ~2,557 m)",
        "url": null,
        "notes": "The seasonal Samedan-Corviglia aerial tram saves roughly the full Corviglia climb on that stage - the classic shortcut. The operator site (corviglia.ch) timed out from this network, so confirm the season dates and fares with Engadin tourism (engadin.com) before you bank on it."
      },
      {
        "title": "Motta Naluns funicular",
        "category": "transport",
        "required": false,
        "when": "on the early Engadin stages; seasonal",
        "where": "Motta Naluns high point, above Ardez / toward Scuol",
        "url": null,
        "notes": "A small funicular in the Motta Naluns area can replace part of the climb on the early stages instead of walking the full plateau rise. Its operator site could not be verified from this network - check operation with the Vinschgau/Val Mustair tourist offices (they publish it in the Via Engiadina info)."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route (Vinschgau, Italy to Maloja, Switzerland)",
        "url": null,
        "notes": "The Via Engiadina is a free marked long-distance trail (Schweiz Mobil Route 87); no hiking permit is needed in either country. You cross the Italy-Switzerland border only once at the Maloja end; carry your ID/passport for the crossing."
      },
      {
        "title": "Valley inns & mountain huts",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead; July-August Engadin huts fill early",
        "where": "Tschlin, Sent, Motta Naluns, Ardez, Lavin, Zernez, Zuoz, Samedan",
        "url": null,
        "notes": "The 10-day route alternates valley inns with a few Engadin mountain huts (e.g. near Motta Naluns and Corviglia); individual hut sites could not be verified from this network. Use the official Route 87 stage list (schweizmobil.ch, verified link) which names the huts per stage, and book the remote ones first."
      },
      {
        "title": "Valley hotels: Scuol, Zuoz (Vuoz), Samedan",
        "category": "lodging",
        "required": false,
        "when": "2-3 months ahead for summer rest days",
        "where": "Scuol, Zuoz, Samedan (Engadin)",
        "url": null,
        "notes": "Scuol, Zuoz and Samedan each have several hotels for rest days; Engadin tourism (engadin.com, verified) lists them all with direct links - search 'Scuol'/'Zuoz'/'Samedan' there for live availability. Rest days in Samedan pair well with the Corviglia lift."
      },
      {
        "title": "Schweiz Mobil Route 87 (official route info)",
        "category": "booking",
        "required": false,
        "when": "when planning (stage list + hut list)",
        "where": "Maloja to Vinadi (or reverse, as the app runs Vinadi to Maloja)",
        "url": "https://www.schweizmobil.ch/de/wanderland/routen/route-087.html",
        "notes": "Verified official route page: 160 km, 12 official stages, ~7,800 m up / ~8,500 m down, highest point 2,557 m at Corviglia, lowest 1,087 m at Vinadi. The app's 10-day version is the same route condensed; the page lists stages and overnight options. The app's official domain (via-engiadina.ch) was unreachable from this network - use this page plus engadin.com as the working sources."
      },
      {
        "title": "Resupply & Engadiner food",
        "category": "food",
        "required": false,
        "when": "daily - every Engadin village has a bakery/grocer",
        "where": "Scuol, Zuoz, Samedan, St. Moritz",
        "url": null,
        "notes": "Every valley village resupplies easily (bakeries, Coop/Migros in Scuol and St. Moritz). Iconic Engadiner dishes: capuns (chard rolls), Engadiner barley soup (Gerstensuppe) and local Bundner bread - look for them at the village inns where you sleep."
      },
      {
        "title": "Vinschger food at the start (Italian side)",
        "category": "food",
        "required": false,
        "when": "eve of day 1 in Vinadi/Schluderns/Meran",
        "where": "Vinadi, Schluderns, Meran (South Tyrol)",
        "url": null,
        "notes": "South Tyrolean side: Spätzle, Knödel/canederli, Schnitzel and Vernatsch red wine from the Vinschgau. Vinadi itself is a small wine village - the inns there serve hearty Tyrolean dinners; Meran (15 min away) has the full restaurant choice if you want to stock up."
      },
      {
        "title": "Official route page & Engadin tourism",
        "category": "info",
        "required": false,
        "when": "before the hike",
        "where": "Vinadi to Maloja Pass",
        "url": "https://www.engadin.com/de/touren/87-via-engiadina",
        "notes": "Verified Engadin tourism page for Route 87 (linked from the German Wikipedia article, which is the route's reference source). Season is roughly late June to mid-September for the high stages; lower village stages walkable earlier/later. myswitzerland.com also carries a route page."
      },
      {
        "title": "Weather sources",
        "category": "info",
        "required": false,
        "when": "check each morning",
        "where": "Vinschgau (start) and Engadin (main)",
        "url": "https://weather.provinz.bz.it/",
        "notes": "Official South Tyrol weather service (verified) covers the Vinschger start; for the Swiss Engadin use MeteoSwiss (meteo.ch) or the Engadin webcams (engadin.com). July-August brings afternoon thunderstorms in the upper Engadin - start the Corviglia/Motta stages early."
      },
      {
        "title": "Car-light valley & lift shortcuts (practical notes)",
        "category": "info",
        "required": false,
        "when": "throughout",
        "where": "Engadin villages",
        "url": null,
        "notes": "The Engadin is deliberately car-light: parking is scarce and expensive, so treat PostBus + train as your legs and only rent a car for the one-way Meran-Vinadi approach (or use a transfer). The Samedan-Corviglia lift and Motta Naluns funicular are the main 'cheat codes' - both seasonal, so confirm dates. Some mountain huts are cash-only; carry some CHF cash."
      }
    ]
  },
  "lechweg": {
    "slug": "lechweg",
    "getIn": "Formarinsee (source of the Lech, near Formarin/Bludenz, Vorarlberg, Austria)",
    "getOut": "Füssen, Bavaria, Germany (Lechfall; Neuschwanstein Castle nearby)",
    "items": [
      {
        "title": "Official Lechweg website",
        "category": "info",
        "required": false,
        "when": "Before the trip",
        "where": "n/a",
        "url": "https://www.lechweg.com/",
        "notes": "German site with an English service booklet PDF. Note: the current official lechweg.com route follows the Tyrolean Lech valley (Formarinsee to Lech am Arlberg to Füssen, 15 stages, ~125 km, 7 days), while the app route follows the lower Lech via Bludenz, Feldkirch, Lindau, Kaufbeuren, Pfronten and Neugablonz to Füssen. Use lechweg.com for start/finish access, parking, buses and luggage service."
      },
      {
        "title": "Lechweg English service booklet (PDF)",
        "category": "info",
        "required": false,
        "when": "Before the trip",
        "where": "n/a",
        "url": "http://www.lechweg.com/typo3conf/ext/lechweg2018/Resources/Public/Pdf/serviceheft_EN.pdf",
        "notes": "English-language service information for the Lechweg."
      },
      {
        "title": "Getting to Formarinsee (start)",
        "category": "transport",
        "required": true,
        "when": "Day 1; hiker bus runs mid-June to early October",
        "where": "Lech am Arlberg / Formarinsee, Vorarlberg, Austria",
        "url": "https://www.lechweg.com/de/service/busverbindungen/",
        "notes": "Hiker bus line 707 from Lech am Arlberg-Dorfhus to Formarinsee (~30 min, EUR 26 incl. toll; free for under-14s in a family group). The full route officially opens 18 Jun 2026 (Formarinsee to Füssen). Lech-Zuers Tourism: +43 5583 2161-0. VVT (Vorarlberg) timetables: https://vvt.at , +43 512 561616; a 2026 bus plan PDF is on the lechweg.com page."
      },
      {
        "title": "Buses Füssen / Austrian connections",
        "category": "transport",
        "required": false,
        "when": "Start/end of the trek",
        "where": "Füssen (DE) - Lech am Arlberg (AT)",
        "url": "https://www.lechweg.com/de/service/busverbindungen/",
        "notes": "Füssen to Lech am Arlberg ~3 h, ~EUR 20; line 100 (Reutte-Füssen) and line 110 (Lech am Arlberg-Reutte); line 852 (Dornbirn-Warth, via Schoppernau) for the Austrian side. Check the 2026 bus plan PDF linked on the page."
      },
      {
        "title": "Parking at start and finish",
        "category": "info",
        "required": false,
        "when": "If driving",
        "where": "Lech am Arlberg / Füssen",
        "url": "https://www.lechweg.com/de/service/anreise-parken/",
        "notes": "Lech Anger underground garage EUR 10/day; Füssen P5 10-day ticket EUR 56 (APCOA); Füssen P1 Festplatz EUR 5/day."
      },
      {
        "title": "Luggage transfer (Gepäcktransport)",
        "category": "info",
        "required": false,
        "when": "Book in advance before departure",
        "where": "Along the Lechweg",
        "url": "https://www.lechweg.com/de/service/gepaecktransport/",
        "notes": "Official luggage transport service along the route (German page); book ahead and confirm cut-off times."
      },
      {
        "title": "Lindau - Hotel Restaurant Villino (named hotel)",
        "category": "lodging",
        "required": false,
        "when": "Night in Lindau (mid-route, ~day 2-3)",
        "where": "Lindau (Bodensee), Bavaria, Germany",
        "url": "https://www.lindau.de/addresses/hotel-restaurant-villino/",
        "notes": "Named hotel-restaurant on the Lindau island, listed on the official Lindau tourism site; also one of the island's fine-dining options."
      },
      {
        "title": "Lindau - official booking portal (150+ accommodations)",
        "category": "lodging",
        "required": false,
        "when": "Before the trip",
        "where": "Lindau (Bodensee), Bavaria, Germany",
        "url": "https://booking.lindau-tourismus.de",
        "notes": "Official Lindau tourism booking portal (hotels, gasthof & pensions, hostels, apartments). Hotel list: https://www.lindau.de/unterkuenfte/hotels-in-lindau/ ; youth hostel: https://www.lindau.de/unterkuenfte/hostels-in-lindau/ . Tourist-Information: Alfred-Nobel-Platz 1, 88131 Lindau, +49 8382 8899-900, info@lindau-tourismus.de."
      },
      {
        "title": "Füssen - accommodation search",
        "category": "lodging",
        "required": false,
        "when": "Before the trip",
        "where": "Füssen, Bavaria, Germany",
        "url": "https://fussen.de/",
        "notes": "Official Füssen tourism site ('Anderszeit' brand, English version available); accommodation search/booking under 'Unterkuenfte' (subpages were unreachable from the research network, so book via the homepage or the tourist office directly)."
      },
      {
        "title": "Feldkirch - accommodations",
        "category": "lodging",
        "required": false,
        "when": "Before the trip",
        "where": "Feldkirch, Vorarlberg, Austria",
        "url": "https://feldkirch-leben.at/geniessen/unterkuenfte",
        "notes": "Official Feldkirch tourism accommodation page (German; English: https://feldkirch-leben.at/en/geniessen/accommodation). Tourism- und Kartenbuero Feldkirch: Palais Liechtenstein, Schlossergasse 8, 6800 Feldkirch, +43 5522 9008, tourism@feldkirch.at."
      },
      {
        "title": "Lechweg partner businesses (food & lodging along the route)",
        "category": "food",
        "required": false,
        "when": "Along the trek",
        "where": "Along the Lechweg",
        "url": "https://www.lechweg.com/de/gastgeber/partnerbetriebe/alle-partnerbetriebe/",
        "notes": "Official list of partner businesses (Gastgeber) along the Lechweg; filterable by stage/town."
      },
      {
        "title": "Lindau restaurants",
        "category": "food",
        "required": false,
        "when": "Night in Lindau",
        "where": "Lindau (Bodensee), Germany",
        "url": "https://www.lindau.de/lindau-erleben/genuss-kulinarik/restaurantverzeichnis/",
        "notes": "Full restaurant directory on the official tourism site; named examples: Restaurant KARRisma (https://www.lindau.de/addresses/restaurant-karrisma/), Restaurant Valentin (https://www.lindau.de/addresses/restaurant-valentin/)."
      },
      {
        "title": "Route variant info (official 15-stage route)",
        "category": "info",
        "required": false,
        "when": "Before the trip",
        "where": "n/a",
        "url": "https://www.lechweg.com/de/weg/etappen-varianten/klassische-variante/",
        "notes": "Official stage pages (1 Formarinsee-Lech ... 15 Pflach-Füssen) and variants on lechweg.com; useful for reconciling the app route (via Bludenz/Feldkirch/Lindau) with the official marked route."
      }
    ]
  },
  "cotswold-way": {
    "slug": "cotswold-way",
    "getIn": "Fly into Birmingham (BHX, ~1 h to Bath) or Bristol (BRS, ~45 min), then train to Bath Spa station - a short walk from the route's southern start.",
    "getOut": "Chipping Campden station: Chiltern Railways to London Marylebone (~1 h), or coach back toward the Midlands.",
    "items": [
      {
        "title": "Fly into Birmingham (BHX) or Bristol (BRS)",
        "category": "transport",
        "required": false,
        "when": "day of start",
        "where": "Birmingham ~1 h to Bath; Bristol ~45 min to Bath",
        "url": null,
        "notes": "Both airports are the usual gateways; neither airport site could be verified from this network. If joining mid-route, Cheltenham or Moreton-in-Marsh rail stations also work."
      },
      {
        "title": "Train to Bath Spa (GWR)",
        "category": "transport",
        "required": false,
        "when": "frequent service",
        "where": "Birmingham New Street / Bristol to Bath Spa",
        "url": null,
        "notes": "GWR (gwr.com, not verifiable from this network) serves Bath Spa, which is a short walk from the Way's start. The route then follows the river and ridgeway north."
      },
      {
        "title": "Chipping Campden exit - Chiltern Railways",
        "category": "transport",
        "required": false,
        "when": "day of finish",
        "where": "Chipping Campden station to London Marylebone (~1 h)",
        "url": null,
        "notes": "Chiltern Railways (chilternrailways.co.uk, not verifiable from this network) runs direct to London Marylebone from the route's northern end; useful if flying out of London afterwards."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route",
        "url": null,
        "notes": "Cotswold Way is a National Trail with open access; no permit or fee. Wild camping is not allowed, so plan on the village inns, pubs and B&Bs at each of the 15 official stages."
      },
      {
        "title": "Bath accommodation (start and finish)",
        "category": "lodging",
        "required": false,
        "when": "year-round; book ahead for events (Royal Bath & West Show, July)",
        "where": "Bath, route start",
        "url": "https://cotswoldway.org/staying/bath",
        "notes": "The official site's Bath page lists the standard options: Black Fox, Griffin Inn, Abbey Hotel, Royal Crescent Hotel & Spa, Dukes Bath, Harington's, Roseate Villa, Kennard, Queensberry, Bath YMCA and Bath Backpackers (budget)."
      },
      {
        "title": "Stroud Hotel",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Stroud, between Bath and Winchcombe",
        "url": "https://thestoudhotel.com/",
        "notes": "Convenient stop after the first Bath-side stages; Stroud also has a rail link if you need to drop out."
      },
      {
        "title": "The Lion Inn, Winchcombe",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Winchcombe, mid-route on the ridge",
        "url": "https://butcombe.com/",
        "notes": "15th-century pub with rooms, brewed by Butcombe Brewery; a classic mid-Way base. The Queen's Head in the same village is the other main option (site not verifiable from this network)."
      },
      {
        "title": "The Plaisterers Arms, Winchcombe",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Winchcombe, mid-route",
        "url": "https://plaisterersarms.com/",
        "notes": "Second Winchcombe option if the Lion is full; rooms and pub meals."
      },
      {
        "title": "Kings Arms, Stow-on-the-Wold",
        "category": "lodging",
        "required": false,
        "when": "year-round; especially busy at the Stow Sunday market",
        "where": "Stow-on-the-Wold, upper route",
        "url": "https://kingsarmsstow.co.uk/",
        "notes": "Stow's main listed inn; The Bell at Stow (thebellatstow.com) and the 17th-century Old Stocks Inn (oldstocksinn.com) are the other verified options in town."
      },
      {
        "title": "Red Lion Inn, Chipping Campden",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Chipping Campden, route end - minutes from the station",
        "url": "https://red-lion-inn.igloucestershire.com/",
        "notes": "Final-night choice beside the station, so the morning Chiltern Railways train to London is easy. Listed in the official site's Chipping Campden directory."
      },
      {
        "title": "Local food and drink",
        "category": "food",
        "required": false,
        "when": "daily, village lunch stops",
        "where": "Bath, Stroud, Winchcombe, Stow, Chipping Campden",
        "url": null,
        "notes": "Cotswold specialties: lamb, double Gloucester cheese, cream tea, farm shops at each village. Pub dining rooms are the standard lunch stop - book ahead at weekends, especially Stow on market days."
      },
      {
        "title": "Official route site - stages and directory",
        "category": "info",
        "required": false,
        "when": "before the walk",
        "where": "cotswoldway.org (note: .org, not .org.uk)",
        "url": "https://cotswoldway.org/",
        "notes": "Official site: 15 official stages with distances, staying pages per town, and a luggage-transfer service if you want bags moved between villages. National Trails also carries a page (nationaltrail.co.uk/en_GB/trails/cotswold-way/)."
      }
    ]
  },
  "dingle-way": {
    "slug": "dingle-way",
    "getIn": "Fly into Kerry (KIR, ~55 km / 1 h by car from Dingle) or Cork (ORK, ~150 km / 2 h 15); or train Dublin/Cork to Tralee (~4 h / ~2 h 30) then a 1 h bus into Dingle.",
    "getOut": "Back in Dingle: same connections in reverse - bus to Tralee, then train to Cork/Dublin or drive to Kerry Airport for the flight home.",
    "items": [
      {
        "title": "Fly into Kerry Airport (KIR)",
        "category": "transport",
        "required": false,
        "when": "seasonal (roughly May-October)",
        "where": "Kerry Airport, ~55 km / 1 h by road from Dingle",
        "url": "https://kerryairport.com/",
        "notes": "Ryanair seasonal flights from Dublin, London, Berlin and Frankfurt Hahn. There is no rail or bus link from the airport - you need a car or a pre-arranged taxi; it is ~18 km from Tralee."
      },
      {
        "title": "Fly into Cork (ORK) or Dublin (DUB)",
        "category": "transport",
        "required": false,
        "when": "year-round",
        "where": "Cork ~150 km / 2 h 15, Dublin ~352 km / 4 h 15 by road",
        "url": null,
        "notes": "The bigger year-round airports; rent a car or connect via Tralee by rail/bus. Neither airport site could be verified from this network, but both are the standard connections listed on dingle-peninsula.ie."
      },
      {
        "title": "Bus Eireann into Dingle",
        "category": "transport",
        "required": false,
        "when": "several daily off-peak, more in summer",
        "where": "Tralee to Dingle, ~1 h",
        "url": "https://www.buseireann.ie/",
        "notes": "The standard public route: train to Tralee, then Bus Eireann to Dingle (1 h). Check the current Dingle bus number and times on the site the week before - rural services thin out in winter."
      },
      {
        "title": "Irish Rail to Tralee",
        "category": "transport",
        "required": false,
        "when": "through the day, less frequent in winter",
        "where": "Dublin (Quays) or Cork to Tralee - ~4 h / ~2 h 30",
        "url": "https://www.irishrail.ie/",
        "notes": "Referenced as the main rail link on dingle-peninsula.ie; connect at Tralee for the Dingle bus. Commuter tickets are not valid on this stretch - buy a standard fare."
      },
      {
        "title": "Dublin Coach, direct to Tralee",
        "category": "transport",
        "required": false,
        "when": "daily",
        "where": "Dublin to Tralee, direct",
        "url": "https://dublincoach.ie/",
        "notes": "Daily direct service listed on the peninsula's how-to-get-here page; cheaper than the train but slower. From Tralee, the 1 h bus continues into Dingle."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole loop",
        "url": null,
        "notes": "The Dingle Way is a signed public route; no permit or fee. The constraint is beds: June-August the village B&Bs on the loop fill up, so book the small-hamlet stops first."
      },
      {
        "title": "Dingle town hotels (base nights)",
        "category": "lodging",
        "required": false,
        "when": "year-round; book ahead for June-August",
        "where": "Dingle town",
        "url": "https://www.dingle-peninsula.ie/accommodation-on-the-dingle-peninsula/hotels-dingle-peninsula.html",
        "notes": "The peninsula tourism site lists the main town hotels with contacts: Castlewood House, Dingle Benner's, Dingle Bay, Dingle Skellig & Peninsula Spa, Heaton's, Arden House, BASE Dingle."
      },
      {
        "title": "B&Bs with published rates",
        "category": "booking",
        "required": false,
        "when": "book 4-8 weeks ahead for summer",
        "where": "Dingle and the loop villages",
        "url": "https://www.dingleway.com/accommodation/bed-and-breakfasts.php",
        "notes": "The official Dingle Way B&B page publishes rates: e.g. Lantern Townhouse €37-50 per double (Mar-Jan), Alpine Guesthouse €40-55 (year-round). Same page family covers inns (An Bóthar, Cuas, €70) and self-catering."
      },
      {
        "title": "Loop-village B&Bs (Carrad, Ballyferriter, Annamaria, Dunmore, Farranholts)",
        "category": "lodging",
        "required": false,
        "when": "book as early as possible for summer",
        "where": "the five hamlets on the loop",
        "url": null,
        "notes": "These hamlets have only one or two B&Bs/self-catering each, so summer availability is tight. The village pages on dingle-peninsula.ie returned 404 from this network; use dingleway.com's accommodation pages or phone the B&Bs listed there. O'Connor's (Cloghane) is listed at €30-40 (Mar-Oct)."
      },
      {
        "title": "Seafood - the thing to eat here",
        "category": "food",
        "required": false,
        "when": "daily; catch of the day at lunch",
        "where": "Dingle and the harbour villages",
        "url": null,
        "notes": "Dingle is a working fishing town - scallops, langoustines, cod and crab are the staples. Dingle Seafood Bar and the harbour chowder shops are the usual stops; their own sites could not be verified from this network."
      },
      {
        "title": "Pubs with food, Dingle",
        "category": "food",
        "required": false,
        "when": "daily; kitchens close early",
        "where": "Dingle town",
        "url": "https://www.dingle-peninsula.ie/food-drink/pubs-bars-dingle-peninsula.html",
        "notes": "The peninsula site's pub list: Tomásín's, Paul Geaney's, Ashe's, Dick Mack's, O'Flaherty's, plus Spillanes (Maharees), Murphy's (Brandon) and Nelligans out on the peninsula. Most do a simple hot lunch."
      },
      {
        "title": "Official route site",
        "category": "info",
        "required": false,
        "when": "before the walk",
        "where": "dingleway.com",
        "url": "https://www.dingleway.com/",
        "notes": "Official site for the signed Dingle Way: route description, transport page, and accommodation directories (B&B, inns, self-catering). Note it describes the 179 km loop from Tralee; the 152 km Dingle-based loop covers the same villages."
      },
      {
        "title": "Dingle Peninsula tourism site",
        "category": "info",
        "required": false,
        "when": "before the walk",
        "where": "dingle-peninsula.ie",
        "url": "https://www.dingle-peninsula.ie/",
        "notes": "Tourism board site with how-to-get-here, hotel and B&B listings, and pub list - the most complete single reference for planning the loop's logistics."
      }
    ]
  },
  "gr20": {
    "slug": "gr20",
    "getIn": "Fly into Ajaccio (AJA) or Calvi (CLY); the route starts at Calenzana, ~20 min by road from Calvi (taxi ~€35-40). Trains and buses link both towns via Vizzavona.",
    "getOut": "Vizzavona: SNCF train or Corsica Linea bus back to Ajaccio or Bastia for the flight home; the full GR20 continues from Vizzavona to Conca.",
    "items": [
      {
        "title": "Flights or ferry to Corsica",
        "category": "transport",
        "required": false,
        "when": "book 1-3 months ahead for summer",
        "where": "into Ajaccio (AJA) or Calvi (CLY); ferry from France/Italy",
        "url": "https://gr20-infos.com/en/transportation/corsica-airport/",
        "notes": "Indicative costs from the GR20 budget page: flights ~€200-400 return, ferries ~€70-120. Neither airport's own site could be verified from this network; gr20-infos.com's airport page summarises the connections."
      },
      {
        "title": "Calvi to Calenzana and inter-town links",
        "category": "transport",
        "required": false,
        "when": "day of start / day of finish",
        "where": "Calvi airport to Calenzana (~30 min); Ajaccio-Vizzavona-Bastia rail/bus spine",
        "url": "https://gr20-infos.com/en/transportation",
        "notes": "Taxi Calvi airport to Calenzana ~€35-40. Trains: Ajaccio-Calvi ~€25, Bastia-Calvi ~€17; bus route 8 runs Ajaccio to Vizzavona. The Corsica Linea bus operator's own site could not be verified from this network."
      },
      {
        "title": "Vizzavona to Ajaccio or Bastia",
        "category": "transport",
        "required": false,
        "when": "day of finish",
        "where": "Vizzavona station to Ajaccio or Bastia",
        "url": null,
        "notes": "SNCF trains run via Vizzavona to both Ajaccio and Bastia, and Corsica Linea buses cover the same spine; a few trains a day in high summer. Check the SNCF timetables and the gr20-infos.com transport page the week before."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route (Parc naturel régional de Corse)",
        "url": null,
        "notes": "The GR20 is free to walk - no permit or fee, even inside the regional park. The real gate is shelter: refuges are only staffed roughly June to mid-September, and wild camping is restricted, so a booked refuge (or a tent pitch where allowed) is what you actually need."
      },
      {
        "title": "Refuge booking - Parc naturel régional central",
        "category": "booking",
        "required": true,
        "when": "2-4 months ahead for June-August",
        "where": "all park refuges on the GR20",
        "url": "http://reserver.sitecresa.fr/centraleresa/parcnaturel",
        "notes": "The park's central booking portal, as linked from gr20-infos.com. The site sits behind a browser CAPTCHA (automated access is blocked), so book in a normal browser. This is the single most critical reservation on the route - beds sell out by spring."
      },
      {
        "title": "Refuge budget - what to bring in cash",
        "category": "booking",
        "required": false,
        "when": "before the walk",
        "where": "all refuges",
        "url": "https://gr20-infos.com/en/budget",
        "notes": "Indicative prices: refuge bed €14/night/person, tent pitch €6, hired tent €17 per person (€23 for two), dinner €13-15, breakfast €8-10, lunch €8-10, water 50 cl €6. There are no ATMs on the GR20 - carry enough cash for the whole crossing."
      },
      {
        "title": "Refuge chain Calenzana to Vizzavona",
        "category": "lodging",
        "required": false,
        "when": "staffed roughly June to mid-September",
        "where": "Ortu di u Piobbu, Carrozzu, Tighjettu, Capannelle, Manganu, Vizzavona",
        "url": "https://gr20-infos.com/en/refuges",
        "notes": "Key refuges with bed counts: Ortu di u Piobbu (1520 m, 32 beds), Carrozzu (1270 m, 36), Tighjettu (1683 m, 48), Ciottulu di i Mori (1997 m, 26), Manganu (1600 m, 32), Petra Piana (1842 m, 28), L'Onda (1431 m, 28), Vizzavona (954 m). Book in walking order."
      },
      {
        "title": "Calvi hotels (start or finish buffer)",
        "category": "lodging",
        "required": false,
        "when": "year-round; book ahead for June-September",
        "where": "Calvi, ~20 min from Calenzana",
        "url": "https://calvi-hotel.com/",
        "notes": "Calvi is the natural base next to the start; calvi-hotel.com and hotel-calvi.com were the options found via search. A night here the day before (or after) absorbs flight delays on either end."
      },
      {
        "title": "Hôtel Restaurant Refuge Le Vizzavona",
        "category": "lodging",
        "required": false,
        "when": "year-round (hotel); refuge season as above",
        "where": "Vizzavona, 50 m from the station",
        "url": "https://www.hotel-vizzavona.com/",
        "notes": "A 1901 manor house with 10 hotel rooms plus a refuge annex, right by the station - the easiest exit point: drop the pack, take the train or bus to Ajaccio/Bastia."
      },
      {
        "title": "Ajaccio hotels",
        "category": "lodging",
        "required": false,
        "when": "year-round",
        "where": "Ajaccio, after the walk or if flying out of AJA",
        "url": null,
        "notes": "Largest selection of the two cities; Sofitel Golfe Ajaccio Thalassa Sea & Spa and Mercure Ajaccio Centre were the options seen via a hotels.com listing, but no direct hotel sites could be verified from this network."
      },
      {
        "title": "Corsican food",
        "category": "food",
        "required": false,
        "when": "daily - refuge dinners and village lunch stops",
        "where": "Calvi, Vizzavona, refuge dining rooms",
        "url": null,
        "notes": "Regional staples: brocciu (fresh cheese), coppa and civetta (cured meats), Fajeta (lamb and polenta stew), cantucci biscuits. Refuge dinners (~€13-15) are the practical daily meal; Calvi's old town has proper restaurants for a rest day."
      },
      {
        "title": "le-gr20.fr - official GR20 information",
        "category": "info",
        "required": false,
        "when": "before the walk",
        "where": "le-gr20.fr",
        "url": "https://www.le-gr20.fr/en",
        "notes": "The GR20's own information site, including its refuges page. The older gr20.com domain returned HTTP 403 from this network, so le-gr20.fr is the live reference."
      },
      {
        "title": "gr20-infos.com - practical English guide",
        "category": "info",
        "required": false,
        "when": "before the walk",
        "where": "gr20-infos.com/en",
        "url": "https://gr20-infos.com/en/",
        "notes": "The most detailed English-language GR20 reference found: refuge list with altitudes and bed counts, budget page, transportation page (airports, trains, taxis) and a weather page (gr20-infos.com/en/weather) - check it 48 h before departure."
      }
    ]
  },
  "aiguilles-rouges-traverse": {
    "slug": "aiguilles-rouges-traverse",
    "items": [
      {
        "title": "Tour des Aiguilles Rouges (official OT Chamonix page, 4 days)",
        "category": "info",
        "when": "15 June - 30 September 2026",
        "url": "https://www.chamonix.com/randonnees-en-famille/tour-des-aiguilles-rouges-4-jours",
        "notes": "49.4 km, +4,559 m: Col des Montets (1,461 m) -> Refuge du Lac Blanc (2,350 m) -> Refuge de Bellachat (2,150 m) -> Refuge de Moëde Anterne (1,993 m) -> Col des Montets, crossing 3 nature reserves. Open 15 June - 30 September daily, subject to snow and weather. Free access; bivouac not allowed outside designated pitches. GPX downloadable on the page."
      },
      {
        "title": "Access to the starting point (Col des Montets)",
        "category": "info",
        "when": "shuttle season = summer",
        "url": "https://www.chamonix.com/randonnees-en-famille/tour-des-aiguilles-rouges-4-jours",
        "notes": "By car: from Chamonix take the D1506 toward Switzerland past Argentère; large parking at Col des Montets (1,461 m) next to the reserve chalet. By public transport: in summer the Col des Montets is served by the valley shuttles (navettes) — check with the Chamonix tourist office."
      },
      {
        "title": "Brévent - Flégère cable car",
        "category": "transport",
        "when": "summer season (check daily opening)",
        "url": "https://www.chamonix.com/activites/informations-pratiques-remontees-mecaniques/telepherique-du-brevent",
        "notes": "Flégère (1,913 m) is the classic start/finish portal of the Aiguilles Rouges traverse (direct approach toward Lac Blanc and the Index lift)."
      },
      {
        "title": "Aiguille du Midi cable car",
        "category": "transport",
        "when": "summer season (check daily opening)",
        "url": "https://www.chamonix.com/activites/informations-pratiques-remontees-mecaniques/telepherique-de-l-aiguille-du-midi",
        "notes": "3,842 m station — gateway to the high route, Pointe Helbronner and the Vallée Blanche side of the massif."
      },
      {
        "title": "Index and Parsa lifts",
        "category": "transport",
        "when": "summer season",
        "url": "http://www.compagniedumontblanc.fr/",
        "notes": "Télécabine de l'Index (2,385 m) and téléphérique de la Parsa (2,074 m) are used on the official tour to shortcut stages (times per section on the tour page). Operator: Compagnie du Mont-Blanc (compagniedumontblanc.fr) for the Aiguille du Midi / Pointe Helbronner complex."
      },
      {
        "title": "Rail and airport",
        "category": "transport",
        "when": null,
        "url": "https://en.wikipedia.org/wiki/Chamonix",
        "notes": "St-Gervais-les-Bains-Vallorcine (SNCF) + Mont Blanc Express (TMR) Vallorcine-Martigny; nearest major airport Geneva (GVA), ~88 km."
      },
      {
        "title": "Valley bus network",
        "category": "transport",
        "when": null,
        "url": "https://www.chamonix.com/infos-et-services/transports/se-deplacer",
        "notes": "Timetables, network map and fares for the Chamonix valley buses (Chamonix, Les Houches, Argentère, Vallorcine, Servoz)."
      },
      {
        "title": "Refuge du Lac Blanc (2,350 m)",
        "category": "lodging",
        "when": "summer season; book ahead for July-August",
        "url": null,
        "notes": "Hut on the shore of Lac Blanc (2,352 m), the key overnight stop of the traverse and stage 1 of the official tour. No direct online booking page was found in the verified sources — book through the Chamonix tourist office (+33 4 50 53 11 13) or the valley booking engine; the OT advises checking opening conditions before departure."
      },
      {
        "title": "Gouille Noire hut (2,844 m)",
        "category": "lodging",
        "when": "summer season; book ahead for July-August",
        "url": null,
        "notes": "High hut above Lac Blanc on the classic traverse line toward Col du Passon / Vallée Blanche. No verified online booking page found under the corporate proxy — contact via the Chamonix tourist office or the hut's operator (Chamonix alpine club section)."
      },
      {
        "title": "Réserve naturelle des Aiguilles Rouges — rules",
        "category": "permit",
        "when": "rules enforced in season (bivouac decree 1 June - 30 September)",
        "url": "https://www.chamonix.com/la-vallee/patrimoine-culture/patrimoine-naturel-de-la-vallee-de-chamonix-mont-blanc/reserve-naturelle-des-aiguilles-rouges",
        "notes": "The traverse crosses the national nature reserve: dogs prohibited, no litter, no fires, no picking, no overflight, no swimming, no sound devices; camping and bivouac prohibited except in designated areas."
      },
      {
        "title": "Reserve bivouac pitch booking (1 June - 30 September)",
        "category": "permit",
        "when": "1 June - 30 September; book before departure",
        "url": "https://reserve-bivouac74.fr/",
        "notes": "Compulsory online booking of pitches in the Aiguilles Rouges / Carlaveyron / Vallon de Bérard reserves (designated areas only, 7 pm - 9 am). 2026 prefectural decree PDF: autourdumontblanc.com/d/623/arp_ddt-2026_0472_bivouacrnn_mar_signe.pdf. Reserve managed by Asters (CEN Haute-Savoie, cen-haute-savoie.org/reserves-naturelles/aiguilles-rouges/)."
      },
      {
        "title": "Chamonix restaurants and valley food",
        "category": "food",
        "when": null,
        "url": "https://www.chamonix.com/infos-et-services/restauration/restaurants",
        "notes": "Restaurant directory for the whole valley (Chamonix, Les Houches, Argentère, Vallorcine, Servoz); huts on the route serve meals. Resupply in the villages before the hut nights."
      },
      {
        "title": "Valley accommodation booking engine",
        "category": "booking",
        "when": "book ahead for summer weekends",
        "url": "https://booking.chamonix.com/fr",
        "notes": "Hotels, apartments, chalets and refuges in the Chamonix valley (base nights before/after the traverse), with guaranteed best price."
      },
      {
        "title": "Stage description: Lac Blanc from the Flégère (+ weather)",
        "category": "info",
        "when": "check weather daily",
        "url": "https://www.chamonix.com/randonnees-en-famille/randonnee-au-lac-blanc-depuis-la-flegere",
        "notes": "OT stage page for the Flégère -> Lac Blanc approach (a variant from Col des Montets is also listed). 5-day Chamonix forecast at chamonix-meteo.com. GPX of the full tour on the official tour page."
      }
    ],
    "getIn": "Fly into Geneva (GVA, ~88 km); TMR Mont Blanc Express to Chamonix, valley bus to the valley, then the Brévent–Flégère cable car up to Flégère (1,913 m), the start.",
    "getOut": "Finish at Les Houches: valley bus to Chamonix, then TMR train to St-Gervais (SNCF) or drive to GVA."
  },
  "the-feather-route": {
    "slug": "the-feather-route",
    "getIn": "Take the train to Bressanone (Brixen) - direct from Innsbruck (~1 h 20 m) or from Bolzano on the South Tyrolean Railway; from Venice, bus to Mestre plus Trenitalia (~3.5-4 h).",
    "getOut": "Finish at Croce d'Aune/Pedavena near Feltre; bus to Feltre station, then Trenitalia to Venezia Santa Lucia or Treviso, or Dolomitibus toward Agordo.",
    "items": [
      {
        "title": "Train to Bressanone (Brixen)",
        "category": "transport",
        "required": true,
        "when": "day 1; book 2-6 weeks ahead",
        "where": "Innsbruck / Bolzano / Venezia to Bressanone",
        "url": "https://www.oebb.at/en/",
        "notes": "Innsbruck to Bressanone is a direct Brenner train (~1 h 20 m); from Bolzano the South Tyrolean Railway takes ~1 h 10 m. This is the standard AV2 start and the Feather Route keeps it."
      },
      {
        "title": "Dolomitibus & Sella Ronda shuttles for the bypasses",
        "category": "transport",
        "required": false,
        "when": "summer; for the Sella-plateau bypass to San Pellegrino and the Passo Rolle walk-around legs",
        "where": "Sella valleys, San Pellegrino (Alpe Lusia), Passo Rolle / Primiero",
        "url": "https://dolomitibus.it/",
        "notes": "The Feather Route replaces high passes with documented bypasses (low route under Col d'Etes, Sella plateau to San Pellegrino, Passo Rolle walk-around, '709 south route' to Treviso) that run on valley roads served by Dolomitibus and the Dolomiti Supersummer shuttle buses (dolomitisuperski.com). Check the Sella Ronda bus times so you can skip or shorten legs."
      },
      {
        "title": "No permit required",
        "category": "permit",
        "required": false,
        "when": "n/a",
        "where": "whole route",
        "url": null,
        "notes": "The bypass version follows the same free marked CAI/AV2 trails plus public valley roads; no hiking permit is needed anywhere on the route."
      },
      {
        "title": "Hotels at Passo San Pellegrino (sleep in a hotel, not a hut)",
        "category": "lodging",
        "required": true,
        "when": "book 2-4 months ahead; July-August plateau hotels sell out",
        "where": "San Pellegrino d'Alpe Lusia / Campo Carlo del Prete",
        "url": null,
        "notes": "The named hotel Hotel Sella is the long-standing 3-star at San Pellegrino; other plateau hotels/B&Bs sit at Campo Carlo del Prete (names vary by season). No individual hotel sites could be verified from this network - find live links and prices in the Dolomiti Superski accommodation search (Plan and book > Accommodation) or via the Alpe Lusia/San Pellegrino tourist office, and confirm the hotel offers hiker half-board."
      },
      {
        "title": "Route huts: Puez, Volpi al Mulaz, Rosetta, Treviso",
        "category": "lodging",
        "required": true,
        "when": "book 1-3 months ahead; Puez 2027 opens ~mid-March; Rosetta season 20 Jun-27 Sep 2026",
        "where": "Puez plateau, Pale di San Martino, Canali valley",
        "url": "https://www.rifugiopuez.it/",
        "notes": "Puez (2,475 m) verified: info@rifugiopuez.it, 2027 bookings open ~mid-March. Rosetta verified: +39 349 5331742 (off-season), +39 0439 68308 (summer), info@rifugiorosetta.it. Volpi al Mulaz and Rifugio Treviso (rifugiotreviso.it, 403 to bots) - search by name / book by phone. The bypasses mean you skip the Farangole and high-Sella huts, so nights are fewer but the same ones still book out."
      },
      {
        "title": "Restaurants in San Pellegrino / Campo Carlo del Prete",
        "category": "food",
        "required": false,
        "when": "rest-day dinner on the plateau",
        "where": "San Pellegrino d'Alpe Lusia",
        "url": null,
        "notes": "The plateau's hotels and inns (Campo Carlo del Prete area) run open restaurants serving South Tyrolean food - Spätzle, Knödel/canederli, Schnitzel, local wines - a good rest-day treat between the Sella and Rolle bypasses. Individual restaurant sites could not be verified from this network; ask the hotel to recommend and reserve a table for summer."
      },
      {
        "title": "Resupply: Bressanone, San Pellegrino, Feltre",
        "category": "food",
        "required": false,
        "when": "Bressanone before day 1; small shops at San Pellegrino; Feltre at the end",
        "where": "Bressanone / San Pellegrino / Feltre",
        "url": null,
        "notes": "Full supermarkets only at Bressanone and Feltre; San Pellegrino has small alpine shops, so refill water/snacks there when you reach the plateau. Huts provide breakfast/dinner; carry snacks for the longer bypass days (Sella plateau to San Pellegrino is one of the longest stages)."
      },
      {
        "title": "Book the San Pellegrino hotel early",
        "category": "booking",
        "required": true,
        "when": "2-4 months ahead for summer; the plateau has limited capacity",
        "where": "San Pellegrino d'Alpe Lusia hotels",
        "url": "https://www.dolomitisuperski.com/en/plan-and-book/accommodation",
        "notes": "Verified Dolomiti Superski accommodation search (filter 'Alpe Lusia / San Pellegrino', hotel category). Because the app's route deliberately rests in a hotel here instead of a hut, this is the single most likely booking to fail in peak season."
      },
      {
        "title": "Hut booking window (Oct-Jan main window)",
        "category": "booking",
        "required": true,
        "when": "start before October; most huts open bookings Oct-Jan, some from July",
        "where": "each rifugio directly",
        "url": "https://www.thehiking.club/alta-via-2-accommodation",
        "notes": "Verified tracker of 90 AV2 properties; peak June-August nights book out weeks ahead and deposits are common. Book the Puez/Mulaz/Rosetta/Treviso chain as one block the moment your dates are fixed."
      },
      {
        "title": "Official AV2 site (route basis) & bypass notes",
        "category": "info",
        "required": false,
        "when": "before the hike",
        "where": "Bressanone to Croce d'Aune",
        "url": null,
        "notes": "Official site per app data is alta-via-2.it - unreachable from this network (transport error); use CAI/Dolomiti park route pages as alternates. The Feather Route keeps the AV2 waymarking but with documented low-route bypasses (under Col d'Etes, Sella plateau to San Pellegrino, Passo Rolle walk-around, 709 south route to Treviso), so verify each bypass with the latest guide/season notes before you start."
      },
      {
        "title": "Weather & practical notes",
        "category": "info",
        "required": false,
        "when": "check each morning",
        "where": "Dolomites (Sella/Pale/Bellunesi)",
        "url": "https://weather.provinz.bz.it/",
        "notes": "Official South Tyrol weather service (verified link). The bypasses lower the exposure but summer afternoon thunderstorms still force early starts on the San Pellegrino and Rolle legs; start huts' days by 7:00. Emergency 112; Aiut Alpin Dolomites +39 0471 797171."
      },
      {
        "title": "Train/bus out of Feltre",
        "category": "transport",
        "required": true,
        "when": "final day",
        "where": "Feltre station",
        "url": "https://www.trenitalia.com/it.html",
        "notes": "Feltre has a direct regional to Venezia Santa Lucia (~1 h 10 m) and to Treviso; last evening trains are limited, so budget for a night in Feltre if your flight is late."
      }
    ]
  },
  "the-soft-blanc": {
    "slug": "the-soft-blanc",
    "items": [
      {
        "title": "Official TMB booking engine (huts and hotels on the route)",
        "category": "booking",
        "when": "book 2-3 months ahead; season roughly mid-June to mid-September",
        "url": "https://www.montourdumontblanc.com/en/refuges-and-guesthouses",
        "notes": "Same central booking as the full TMB for every hut used on the soft variant. Book 2-3 months ahead for July-August dates."
      },
      {
        "title": "Courmayeur / Val Ferret hotels and gîtes",
        "category": "lodging",
        "when": "book early; summer and ski-spring weeks fill fast",
        "url": "https://www.montourdumontblanc.com/fr/refuges/hotel-lavachey",
        "notes": "Base options in and around Courmayeur, all bookable through the official TMB engine: Hotel Lavachey, Hotel Funivia, Hotel Chalet Val Ferret (Val Ferret), Gîte Le Randonneur du Mont Blanc and Rifugio Chapy Mont Blanc (Courmayeur). Slugs: /fr/refuges/hotel-lavachey, /fr/refuges/hotel-funivia, /fr/refuges/hotel-chalet-val-ferret, /fr/refuges/gite-le-randonneur-du-mont-blanc, /fr/refuges/rifugio-chapy-mont-blanc."
      },
      {
        "title": "Swiss-section options (La Fouly / Trient)",
        "category": "lodging",
        "when": "check each hut's opening dates; book with the rest of the itinerary",
        "url": "https://www.montourdumontblanc.com/fr/refuges/la-fouly-lodge",
        "notes": "If the soft variant keeps the Swiss arc: Gîte Alpage de la Peule, Hotel du Col de Fenêtre, Gîte La Lechère, Chalet Le Dolent, Auberge Maya-Joie, Auberge des Glaciers, La Fouly Lodge, Hotel Edelweiss (La Fouly); Hotel du Col de la Forclaz, Auberge Mont-Blanc, Auberge la Grande Ourse, Refuge Le Peuty (Trient)."
      },
      {
        "title": "Courmayeur restaurants and shops",
        "category": "food",
        "when": null,
        "url": null,
        "notes": "Courmayeur village and Via Roma have a dense grid of pizzerias, restaurants, bakeries and grocery shops for resupply days. courmayeur.com (local directory) was blocked by the corporate proxy, so no verified links here. The official TMB site links the 'Info Courmayeur' app (autourdumontblanc.com/en/safety/app-info-courmayeur) with local services."
      },
      {
        "title": "Rail access (French side)",
        "category": "transport",
        "when": null,
        "url": "https://en.wikipedia.org/wiki/Chamonix",
        "notes": "St-Gervais-les-Bains-Vallorcine (SNCF from Paris/Lyon/Annecy) is the usual gateway to the Chamonix valley; Mont Blanc Express (TMR) links Vallorcine to Martigny for the Swiss side."
      },
      {
        "title": "Les Houches — finish of the route",
        "category": "transport",
        "when": null,
        "url": "https://www.chamonix.com/la-vallee/les-stations-villages/les-houches",
        "notes": "Village page (accommodation, activities) for the finishing point. Bivouac sunset-to-sunrise is tolerated in Les Houches; camping year-round prohibited on Montagne de Chailloux."
      },
      {
        "title": "Valley bus network",
        "category": "transport",
        "when": null,
        "url": "https://www.chamonix.com/infos-et-services/transports/se-deplacer",
        "notes": "Timetables, network map and fares for the Chamonix valley buses (links Saint-Gervais, Les Houches, Chamonix, Argentère, Vallorcine) — useful for the final transfer after Col du Passon and for train connections."
      },
      {
        "title": "Col du Passon (route exit to Les Arbois)",
        "category": "info",
        "when": null,
        "url": null,
        "notes": "The variant descends from the Aiguilles Rouges over Col du Passon (2,205 m) into the Val d'Arve toward Les Arbois (Col de la Jasse). No dedicated page was found in the verified sources, so confirm the current trail condition with the Chamonix tourist office (+33 4 50 53 11 13). The crossing runs through the Aiguilles Rouges nature reserve: dogs prohibited, reserve rules apply."
      },
      {
        "title": "Aiguilles Rouges reserve rules and bivouac booking",
        "category": "permit",
        "when": "1 June - 30 September; book a pitch before departing",
        "url": "https://www.autourdumontblanc.com/en/accommodations/bivouac",
        "notes": "Prefectural decree 1 June - 30 September: dogs prohibited, no fires, no litter, no swimming, no drones; camping only in designated pitches with compulsory booking at reserve-bivouac74.fr (2026 decree PDF: autourdumontblanc.com/d/623/arp_ddt-2026_0472_bivouacrnn_mar_signe.pdf; reserve managed by Asters, cen-haute-savoie.org)."
      },
      {
        "title": "Trail conditions + 2026 Swiss diversion",
        "category": "info",
        "when": "check in the week before departure",
        "url": "https://www.autourdumontblanc.com/en/information/trails-conditions",
        "notes": "Official condition updates; note the Prayon-Branche (Treutsebo) rerouting in Orsières from 11 July 2026 if the Swiss arc is kept."
      },
      {
        "title": "Weather (three sectors)",
        "category": "info",
        "when": "check daily",
        "url": "https://chamonix-meteo.com/chamonix-mont-blanc/meteo/prevision/matin/previ_meteo_5_jours.php",
        "notes": "Chamonix 5-day forecast; Aosta Valley (cf.regione.vda.it); MeteoSwiss (meteosvizzera.admin.ch) — all linked from the official TMB site."
      },
      {
        "title": "Official TMB website",
        "category": "info",
        "when": null,
        "url": "https://www.autourdumontblanc.com/en/",
        "notes": "Fondazione Montagna Sicura (Courmayeur): route info, safety, webcams, accommodation overview, hikers' diary."
      }
    ],
    "getIn": "Same gateway as the TMB: Geneva (GVA) + TMR Mont Blanc Express, or SNCF to St-Gervais-les-Bains-Vallorcine, then valley bus to Les Houches — the route starts there.",
    "getOut": "Finish at Les Houches: 10-min valley bus to Chamonix (car/taxi to GVA), or TMR train from St-Gervais to Paris/Lyon."
  },
  "the-smooth-haute": {
    "slug": "the-smooth-haute",
    "getIn": "Chamonix-Mont-Blanc (74400), France - SNCF station, Mont Blanc Express line",
    "getOut": "Zermatt (3920), Switzerland - car-free village, arrival by Mattertal shuttle from Täsch",
    "items": [
      {
        "title": "Randa guesthouses (smooth bypass of the high alpine sections)",
        "category": "lodging",
        "required": false,
        "when": "Book early for summer - small village with limited rooms",
        "where": "Randa, Zermatt valley, Switzerland",
        "url": "https://www.zermatt.ch/en/discover-experience/villages/randa",
        "notes": "Randa is a car-free hamlet ~9 km from Zermatt (population ~500) with moderately priced guesthouses/hotels, restaurants and mountain huts; local info at randa.ch. Book directly with the guesthouses."
      },
      {
        "title": "Zermatt hotels",
        "category": "lodging",
        "required": false,
        "when": "Book early for July/August",
        "where": "Zermatt, Switzerland",
        "url": "https://www.zermatt.ch/en/plan-book/accommodations/hotels",
        "notes": "Official Zermatt hotel list; named examples include Hotel Antika, The Omnia and Grand Hotel Zermatterhof. Book via the listing or directly with the hotels."
      },
      {
        "title": "Chamonix fondue & raclette",
        "category": "food",
        "required": false,
        "when": "Pre-trek evening or rest day",
        "where": "Chamonix, France",
        "url": "https://en.chamonix.com/usual-information-services/food-and-drink/restaurants",
        "notes": "Named examples from the official Chamonix list: La Tablee (raclette), Le P'tiot Monchu (fondue), Le Rond Point (fondue); the directory also covers tartiflette and farcotte."
      },
      {
        "title": "Zermatt restaurants",
        "category": "food",
        "required": false,
        "when": "Finish evening",
        "where": "Zermatt, Switzerland",
        "url": null,
        "notes": "e.g. Restaurant Fuchs (known for its 'cholera pie' / Cholera-Pfannkuchen per haute-route.com/Alpenwild route content); the full restaurant list is on zermatt.ch (search 'restaurants' under Plan & Book)."
      },
      {
        "title": "Charles Kuonen Bridge in Randa (optional detour)",
        "category": "info",
        "required": false,
        "when": "On the Randa side",
        "where": "Randa, Zermatt valley, Switzerland",
        "url": "https://www.zermatt.ch/en/p/longest-pedestrian-suspension-bridge-in-the-alps-01tVj000005DqkNIAS",
        "notes": "340 m pedestrian suspension bridge, described by zermatt.ch as the longest in the Alps; a nice optional extension on the Smooth Haute's Randa-side approach."
      },
      {
        "title": "Chamonix valley transport (start)",
        "category": "transport",
        "required": true,
        "when": "Day 1",
        "where": "Chamonix valley, France",
        "url": "https://www.chamonix-mobilite.com",
        "notes": "Bus network plus SNCF Mont Blanc Express (TGV connection at St-Gervais-les-Bains-Le Fayet, Leman Express). See the walkers-haute-route entries for details and timetable PDFs."
      },
      {
        "title": "Getting to Zermatt (finish)",
        "category": "transport",
        "required": true,
        "when": "Final day",
        "where": "Zermatt, Switzerland",
        "url": "https://www.zermatt.ch/en/plan-book/arrival",
        "notes": "Car-free village: shuttle train or taxi from Täsch; airport transfers listed on the same page. Contact: +41 27 966 81 00."
      },
      {
        "title": "Smooth Haute = WHR with bypassed high sections",
        "category": "info",
        "required": false,
        "when": "n/a",
        "where": "n/a",
        "url": "https://www.alpenwild.com/trip/self-guided-haute-route/overview/",
        "notes": "The 'smooth' variant uses lower village routes (e.g. via the Randa/Mattertal side) instead of the highest passes. The current detailed stage plan is in the official Haute Route guide; haute-route.ch is offline (archived snapshot: https://web.archive.org/web/20211205223422/http://haute-route.ch/)."
      }
    ]
  },
  "the-sacred-loop": {
    "slug": "the-sacred-loop",
    "getIn": "Kii-Tanabe / Takijiri-oji, Wakayama Prefecture, Japan (Nakahechi start)",
    "getOut": "Koyasan (Nankai Koyasan station / Danchoji village), Wakayama Prefecture, Japan",
    "items": [
      {
        "title": "Nankai train to Koyasan",
        "category": "transport",
        "required": true,
        "when": "After finishing the Nakahechi at Hongu (via the loop connection below)",
        "where": "Osaka (Namba) to Gokurakubashi, then cable car to Koyasan",
        "url": "https://www.tb-kumano.jp/en/transport/train/",
        "notes": "Nankai runs trains from Osaka (Namba station) to Koyasan; the train stops at Gokurakubashi station, connecting to a short cable car ride up to Koyasan station. NOTE: this is not a JR line, so JR passes cannot be used. (The Nankai Koyasan English site linked from the official Kumano bureau - nankaikoya.jp - is outdated; verify timetables at Namba station or via the official Kumano bureau pages.)"
      },
      {
        "title": "Koyasan village shuttle (Rinkan bus)",
        "category": "transport",
        "required": true,
        "when": "Arrival/departure days in Koyasan",
        "where": "Nankai Koyasan station to the village center, Japan",
        "url": "https://visitwakayama.jp/en/attractions/detail_593.html",
        "notes": "Koya Rinkan Bus from Nankai Koyasan station to 'Senjuin Bashi' and the village center. Koyasan information: +81-736-56-2616 (via Wakayama Prefecture tourism page)."
      },
      {
        "title": "Book a shukubo (temple lodging) - central booking site",
        "category": "booking",
        "required": true,
        "when": "Book ahead, especially for festival dates",
        "where": "Koyasan, Japan",
        "url": "https://koyasan-shukubo.net/en/",
        "notes": "Central English booking site for Koyasan shukubo (51 shukubo temples of 117 temples on the mountain). Meals are shojin ryori (Buddhist vegetarian); early-morning services are optional. Many shukubo do not accept credit cards - bring cash or arrange payment in advance. Official Koyasan lodging overview: https://www.koya.org/lodging/"
      },
      {
        "title": "Shukubo options (bookable via KUMANO TRAVEL)",
        "category": "lodging",
        "required": false,
        "when": "Book via the portal ahead of time",
        "where": "Koyasan, Japan",
        "url": "https://www.kumano-travel.com/en/accommodations/fudo-in-temple",
        "notes": "Named shukubo listed on the official Kumano lodging page: Fudo-in, Nan-in (https://www.kumano-travel.com/en/accommodations/nan-in-temple) and Muryoko-in (https://www.kumano-travel.com/en/accommodations/muryoko-in-temple). English shukubo list: https://eng-shukubo.net/shukubo/ (note: Engyoji and Hasedera are NOT on that list - book them directly by phone/email)."
      },
      {
        "title": "Koyasan guesthouses (non-shukubo alternatives)",
        "category": "lodging",
        "required": false,
        "when": "Book via KUMANO TRAVEL ahead of time",
        "where": "Koyasan, Japan",
        "url": "https://www.kumano-travel.com/en/accommodations/ichie-cafe-and-guesthouse",
        "notes": "Koyasan Guesthouse Kokuu and ICHIE cafe & guesthouse, listed on the official Kumano lodging page (https://www.tb-kumano.jp/en/lodging/); usually cheaper than shukubo and meals not always included."
      },
      {
        "title": "Koyasan <-> Hongu connection (the loop transfer)",
        "category": "transport",
        "required": true,
        "when": "Transition day",
        "where": "Koyasan - Ryujin/Tanabe/Gojo - Hongu, Japan",
        "url": "https://www.tb-kumano.jp/en/transport/routes/hongu-koyasan-access/",
        "notes": "No direct train/bus between Koyasan and Hongu. Options: (1) two buses via Ryujin Onsen and Tanabe, ~5.5 h, ~JPY 6,740 (Koyasan-Ryujin section closed Dec-Mar); (2) train & bus via Wakayama, 6-8 h, ~JPY 6,000-8,000 (good with a JR pass); (3) train & bus via Gojo, ~5.5 h, ~JPY 4,360 (often quickest; combined timetable PDF: http://www2.tb-kumano.jp/en/transport/pdf/Hongu-Koyasan-via-Gojo.pdf ); (4) chartered taxi, ~2.5 h, ~JPY 66,800 for up to 4 people (book: https://www.kumano-travel.com/en/travel-services/meiko-taxi/2221 , jumbo up to 8: https://www.kumano-travel.com/en/travel-services/meiko-taxi/2222 )."
      },
      {
        "title": "Koyasan-Kumano access bus (seasonal limited bus via Ryujin Onsen)",
        "category": "booking",
        "required": false,
        "when": "Seasonal (not in winter); book online before travelling",
        "where": "Koyasan - Ryujin Onsen - Hongu, Japan",
        "url": "https://www.kumano-travel.com/en/travel-services/koyasan-kumano-access-bus",
        "notes": "Seasonal fixed-route bus Koyasan to Kumano Hongu via Ryujin Onsen; check the booking site for current schedules (cancellations possible). Also bookable on Japan Bus Online: https://japanbusonline.com/en/CourseDetail/index/13000050001 ; info site: http://seichijunrei-bus.jp/index_us.html . Alternative: Ryujin Bus 'Koyasan & Kumano Access Bus', ~4 h 30 min, JPY 5,300 adult Koyasan to Hongu, operating 2 Apr-30 Nov 2026, suspended Tue/Wed: https://www.ryujinbus.com/en/route_jyunrei/koya_hongu/"
      },
      {
        "title": "Koyasan official information (access, lodging, tourist services)",
        "category": "info",
        "required": false,
        "when": "Before the trip",
        "where": "n/a",
        "url": "https://www.koya.org/english/",
        "notes": "Koyasan Tourism Association (Koyamachi) official site (English hub; main Japanese site https://www.koya.org/ ). Covers train/car access (https://www.koya.org/access/ ), tourist services (rental cycle JPY 1,000, small EV JPY 3,000/3 h, Wi-Fi), lodging (51 shukubo of 117 temples, shojin ryori) and events. Phone: 0736-56-2468, Koyasan 359-3, Koya-machi."
      },
      {
        "title": "Shukubo Association English list",
        "category": "info",
        "required": false,
        "when": "Before booking",
        "where": "n/a",
        "url": "https://eng-shukubo.net/shukubo/",
        "notes": "English shukubo list with an access page (https://eng-shukubo.net/access/index.html ). Note: this list does not include Engyoji or Hasedera - book those temples directly. Many shukubo do not take credit cards; reference phone via Wakayama Prefecture tourism: +81-736-56-2616."
      }
    ]
  }
};
