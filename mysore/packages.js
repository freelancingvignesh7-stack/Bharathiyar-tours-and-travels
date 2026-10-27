// Mysore package routes and day-by-day plans. Prices belong in rates.js.
window.MYSORE_VEHICLES = {
  "sedan": {
    "name": "SEDAN",
    "type": "Etios / Dzire — 4 passengers"
  },
  "ertiga": {
    "name": "ERTIGA",
    "type": "6 passengers"
  },
  "innova": {
    "name": "INNOVA",
    "type": "7 passengers"
  },
  "crysta": {
    "name": "INNOVA CRYSTA",
    "type": "6 / 7 passengers, confirmed at booking"
  },
  "tt14": {
    "name": "TEMPO TRAVELLER 14",
    "type": "12–14 passengers"
  },
  "tt18": {
    "name": "TEMPO TRAVELLER 18",
    "type": "16–18 passengers"
  },
  "urbania": {
    "name": "URBANIA",
    "type": "12–17 passengers, confirmed at booking"
  },
  "coach": {
    "name": "COACH",
    "type": "21 passengers"
  }
};
window.MYSORE_PACKAGES = {
  "1D": {
    "title": "One Day Tour Packages",
    "subtitle": "Private round trips with pickup and return in Mysore",
    "destinations": {
      "Mysore Local Sightseeing": {
        "hash": "mysore-local-sightseeing-1d",
        "rateKey": "mysore-local-sightseeing",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Mysore Palace, Chamundi Hills and selected city sights; choose Mysore Zoo or Brindavan Gardens according to opening hours and available time. Return and drop in Mysore."
          }
        ]
      },
      "Srirangapatna – Ranganathittu": {
        "hash": "srirangapatna-ranganathittu-1d",
        "rateKey": "srirangapatna-ranganathittu",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Ranganathaswamy Temple, Dariya Daulat Bagh, Gumbaz and Ranganathittu Bird Sanctuary; boating subject to operation. Return and drop in Mysore."
          }
        ]
      },
      "Srirangapatna – Brindavan Gardens": {
        "hash": "srirangapatna-brindavan-gardens-1d",
        "rateKey": "srirangapatna-brindavan-gardens",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Ranganathaswamy Temple and selected Srirangapatna heritage sights, followed by Brindavan Gardens. Return and drop in Mysore."
          }
        ]
      },
      "Somanathapura – Talakadu": {
        "hash": "somanathapura-talakadu-1d",
        "rateKey": "somanathapura-talakadu",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Chennakeshava Temple at Somanathapura and selected Talakadu temples. Return and drop in Mysore."
          }
        ]
      },
      "Talakadu – Shivanasamudra": {
        "hash": "talakadu-shivanasamudra-1d",
        "rateKey": "talakadu-shivanasamudra",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Selected Talakadu temples and Gaganachukki / Bharachukki waterfall viewpoints, subject to access and weather. Return and drop in Mysore."
          }
        ]
      },
      "Nanjangud – Chamundi Hills": {
        "hash": "nanjangud-chamundi-hills-1d",
        "rateKey": "nanjangud-chamundi-hills",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Srikanteshwara Temple at Nanjangud and Chamundeshwari Temple at Chamundi Hills. Return and drop in Mysore."
          }
        ]
      },
      "Melukote – Srirangapatna": {
        "hash": "melukote-srirangapatna-1d",
        "rateKey": "melukote-srirangapatna",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Cheluvanarayana Swamy Temple and Yoga Narasimha Temple at Melukote, followed by Ranganathaswamy Temple. Return and drop in Mysore."
          }
        ]
      },
      "Nanjangud – Talakadu": {
        "hash": "nanjangud-talakadu-1d",
        "rateKey": "nanjangud-talakadu",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Srikanteshwara Temple at Nanjangud and selected Talakadu temples. Return and drop in Mysore."
          }
        ]
      },
      "BR Hills": {
        "hash": "br-hills-1d",
        "rateKey": "br-hills",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Biligiri Ranganathaswamy Temple and accessible BR Hills viewpoints; forest activities only with separate permission. Return and drop in Mysore."
          }
        ]
      },
      "Himavad Gopalaswamy Betta": {
        "hash": "himavad-gopalaswamy-betta-1d",
        "rateKey": "himavad-gopalaswamy-betta",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Gopalaswamy Temple and hill views; use the authorised local transfer where required. Return and drop in Mysore."
          }
        ]
      },
      "Bandipur": {
        "hash": "bandipur-1d",
        "rateKey": "bandipur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Drive to Bandipur for a pre-booked safari or permitted nature activities; wildlife sightings are not guaranteed. Return and drop in Mysore."
          }
        ]
      },
      "Kabini": {
        "hash": "kabini-1d",
        "rateKey": "kabini",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Drive to Kabini for a pre-booked safari, resort day visit or permitted reservoir-side activity. Return and drop in Mysore."
          }
        ]
      },
      "Nagarhole": {
        "hash": "nagarhole-1d",
        "rateKey": "nagarhole",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Drive to the selected Nagarhole entrance for a pre-booked safari; timing and entry gate confirmed before departure. Return and drop in Mysore."
          }
        ]
      },
      "Shravanabelagola": {
        "hash": "shravanabelagola-1d",
        "rateKey": "shravanabelagola",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Gomateshwara at Vindhyagiri and selected Jain heritage sites; hill climb according to guest fitness. Return and drop in Mysore."
          }
        ]
      }
    }
  },
  "2D": {
    "title": "Two Day Tour Packages",
    "subtitle": "Private round trips with pickup and return in Mysore",
    "destinations": {
      "Coorg": {
        "hash": "coorg-2d",
        "rateKey": "coorg",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Bylakuppe Golden Temple, Nisargadhama and travel to Madikeri. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Abbey Falls, Raja’s Seat and selected Madikeri sights. Return and drop in Mysore."
          }
        ]
      },
      "Ooty": {
        "hash": "ooty-2d",
        "rateKey": "ooty",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Ooty and visit Ooty Lake or Botanical Garden according to arrival time. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Selected Ooty sights and a Pykara stop if time permits. Return and drop in Mysore."
          }
        ]
      },
      "Ooty – Coonoor": {
        "hash": "ooty-coonoor-2d",
        "rateKey": "ooty-coonoor",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Ooty; Botanical Garden and Ooty Lake according to arrival time. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Early Coonoor visit with Sim’s Park or a tea viewpoint, followed by the return drive. Return and drop in Mysore."
          }
        ]
      },
      "Wayanad": {
        "hash": "wayanad-2d",
        "rateKey": "wayanad",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel via the permitted forest route to Sulthan Bathery; selected local sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Edakkal Caves or a nearby heritage/nature circuit, allowing time for the return drive. Return and drop in Mysore."
          }
        ]
      },
      "Chikmagalur": {
        "hash": "chikmagalur-2d",
        "rateKey": "chikmagalur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Chikmagalur and selected town / coffee-country sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Mullayanagiri area viewpoints, subject to access and authorised local transport. Return and drop in Mysore."
          }
        ]
      },
      "Sakleshpur": {
        "hash": "sakleshpur-2d",
        "rateKey": "sakleshpur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Sakleshpur; Manjarabad Fort and coffee-country scenery. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Selected nearby viewpoints or a plantation visit before returning. Return and drop in Mysore."
          }
        ]
      },
      "Bangalore": {
        "hash": "bangalore-2d",
        "rateKey": "bangalore",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Bangalore; Lalbagh and selected central city sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Choose Bangalore Palace or ISKCON Temple and allow for city traffic on the return. Return and drop in Mysore."
          }
        ]
      },
      "Mysore – Srirangapatna Extended Sightseeing": {
        "hash": "mysore-srirangapatna-extended-sightseeing-2d",
        "rateKey": "mysore-srirangapatna-extended-sightseeing",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Mysore Palace, Chamundi Hills and selected city sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Srirangapatna heritage sights, Ranganathittu or Brindavan Gardens according to guest preference. Return and drop in Mysore."
          }
        ]
      },
      "Bandipur Stay": {
        "hash": "bandipur-stay-2d",
        "rateKey": "bandipur-stay",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Bandipur; check in and take a pre-booked afternoon safari if available. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Pre-booked morning activity or leisure and return. Return and drop in Mysore."
          }
        ]
      },
      "Kabini Stay": {
        "hash": "kabini-stay-2d",
        "rateKey": "kabini-stay",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to the chosen Kabini resort; check in and pre-booked afternoon activity. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Morning wildlife activity if reserved, followed by check-out and return. Return and drop in Mysore."
          }
        ]
      },
      "Nagarhole Stay": {
        "hash": "nagarhole-stay-2d",
        "rateKey": "nagarhole-stay",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to the selected Nagarhole-area stay and take a pre-booked safari if available. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Morning nature activity or leisure, followed by check-out and return. Return and drop in Mysore."
          }
        ]
      },
      "Belur – Halebidu – Shravanabelagola": {
        "hash": "belur-halebidu-shravanabelagola-2d",
        "rateKey": "belur-halebidu-shravanabelagola",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Shravanabelagola and travel to Hassan / Belur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Chennakeshava Temple at Belur and Hoysaleswara Temple at Halebidu. Return and drop in Mysore."
          }
        ]
      },
      "Kukke Subramanya – Dharmasthala": {
        "hash": "kukke-subramanya-dharmasthala-2d",
        "rateKey": "kukke-subramanya-dharmasthala",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kukke Subramanya and darshan, subject to temple timings. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Dharmasthala Manjunatha Temple darshan, followed by the return journey. Return and drop in Mysore."
          }
        ]
      },
      "Coorg – Talacauvery – Bhagamandala": {
        "hash": "coorg-talacauvery-bhagamandala-2d",
        "rateKey": "coorg-talacauvery-bhagamandala",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Coorg; Bhagamandala and Talacauvery according to arrival and temple timings. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Selected Madikeri sights and return. Return and drop in Mysore."
          }
        ]
      }
    }
  },
  "3D": {
    "title": "Three Day Tour Packages",
    "subtitle": "Private round trips with pickup and return in Mysore",
    "destinations": {
      "Coorg Extended Tour": {
        "hash": "coorg-extended-tour-3d",
        "rateKey": "coorg-extended-tour",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Bylakuppe Golden Temple and Nisargadhama; travel to Madikeri. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Abbey Falls, Raja’s Seat and selected Madikeri sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Bhagamandala and Talacauvery with an early start, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Ooty – Coonoor – Pykara": {
        "hash": "ooty-coonoor-pykara-3d",
        "rateKey": "ooty-coonoor-pykara",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Ooty; lake or garden visit according to arrival. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Coonoor: Sim’s Park and selected tea-country viewpoints. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Pykara lake / falls area if accessible, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Wayanad Extended Tour": {
        "hash": "wayanad-extended-tour-3d",
        "rateKey": "wayanad-extended-tour",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Sulthan Bathery and selected local sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Choose an Edakkal Caves / heritage circuit or a Kalpetta nature circuit. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Selected sights near the return route and drive back. Return and drop in Mysore."
          }
        ]
      },
      "Chikmagalur – Belur – Halebidu": {
        "hash": "chikmagalur-belur-halebidu-3d",
        "rateKey": "chikmagalur-belur-halebidu",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Belur and Halebidu temple visits; continue to Chikmagalur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Mullayanagiri area and coffee-country viewpoints. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Leisure or a plantation visit, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Sakleshpur – Coorg": {
        "hash": "sakleshpur-coorg-3d",
        "rateKey": "sakleshpur-coorg",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Sakleshpur; Manjarabad Fort. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Scenic transfer to Coorg and Madikeri sightseeing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Selected Coorg sights near the return route. Return and drop in Mysore."
          }
        ]
      },
      "Coorg – Nagarhole": {
        "hash": "coorg-nagarhole-3d",
        "rateKey": "coorg-nagarhole",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Coorg via Bylakuppe and Nisargadhama. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Madikeri sightseeing and transfer towards the selected Nagarhole-area stay. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Pre-booked safari if available, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Ooty – Bandipur": {
        "hash": "ooty-bandipur-3d",
        "rateKey": "ooty-bandipur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Ooty and selected town sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Ooty sightseeing followed by daytime transfer to Bandipur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Pre-booked Bandipur safari or leisure, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Wayanad – Kabini": {
        "hash": "wayanad-kabini-3d",
        "rateKey": "wayanad-kabini",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Wayanad; Sulthan Bathery-area sightseeing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Selected Wayanad sights, then daytime transfer to Kabini. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Pre-booked wildlife activity or resort leisure, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Mangalore – Udupi": {
        "hash": "mangalore-udupi-3d",
        "rateKey": "mangalore-udupi",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Mangalore and selected city / temple sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Transfer to Udupi; Sri Krishna Temple and Malpe beach. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Early return journey with only short en-route stops. Return and drop in Mysore."
          }
        ]
      },
      "Hampi": {
        "hash": "hampi-3d",
        "rateKey": "hampi",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Hampi / Hospet; check in and rest. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Hampi heritage sightseeing including Virupaksha Temple and selected monument groups. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Kukke Subramanya – Dharmasthala – Mangalore": {
        "hash": "kukke-subramanya-dharmasthala-mangalore-3d",
        "rateKey": "kukke-subramanya-dharmasthala-mangalore",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kukke Subramanya and darshan. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Dharmasthala darshan; continue to Mangalore. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Selected Mangalore temple visit if time permits, then return. Return and drop in Mysore."
          }
        ]
      },
      "Sringeri – Horanadu – Kalasa": {
        "hash": "sringeri-horanadu-kalasa-3d",
        "rateKey": "sringeri-horanadu-kalasa",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kalasa and Horanadu; darshan subject to arrival. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Sringeri Sharada Peetham and Vidyashankara Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Return journey with limited en-route stops. Return and drop in Mysore."
          }
        ]
      },
      "Udupi – Kollur": {
        "hash": "udupi-kollur-3d",
        "rateKey": "udupi-kollur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Udupi; Sri Krishna Temple if time permits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Kollur Mookambika Temple and return towards Udupi. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Tirupati – Tiruchanur": {
        "hash": "tirupati-tiruchanur-3d",
        "rateKey": "tirupati-tiruchanur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Tirupati; check in and rest. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Tirumala darshan only with confirmed tickets / arrangements; Tiruchanur if time permits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Tiruvannamalai – Vellore Golden Temple": {
        "hash": "tiruvannamalai-vellore-golden-temple-3d",
        "rateKey": "tiruvannamalai-vellore-golden-temple",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Tiruvannamalai; Arunachaleswarar Temple subject to arrival. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Morning temple visit or planned Girivalam; transfer to Vellore and Golden Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Isha – Marudhamalai – Palani": {
        "hash": "isha-marudhamalai-palani-3d",
        "rateKey": "isha-marudhamalai-palani",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Isha Yoga Center and selected local spiritual sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Marudhamalai Temple and transfer to Palani. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Palani Murugan Temple darshan, followed by return. Return and drop in Mysore."
          }
        ]
      }
    }
  },
  "4D": {
    "title": "Four Day Tour Packages",
    "subtitle": "Private round trips with pickup and return in Mysore",
    "destinations": {
      "Coorg – Wayanad": {
        "hash": "coorg-wayanad-4d",
        "rateKey": "coorg-wayanad",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Coorg via Bylakuppe and Nisargadhama. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Madikeri sightseeing, then daytime transfer towards Wayanad. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "One focused Wayanad sightseeing circuit. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Selected sights near the return route and return. Return and drop in Mysore."
          }
        ]
      },
      "Coorg – Chikmagalur": {
        "hash": "coorg-chikmagalur-4d",
        "rateKey": "coorg-chikmagalur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Coorg; selected Madikeri sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Coorg sightseeing and transfer towards Chikmagalur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Chikmagalur hill viewpoints / coffee-country sightseeing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Belur or Halebidu stop, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Ooty – Coonoor – Pykara – Mudumalai": {
        "hash": "ooty-coonoor-pykara-mudumalai-4d",
        "rateKey": "ooty-coonoor-pykara-mudumalai",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Ooty and selected town sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Coonoor sightseeing and tea-country views. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Pykara sightseeing and daytime transfer to a Mudumalai-area stay. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Pre-booked safari if available, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Wayanad – Ooty": {
        "hash": "wayanad-ooty-4d",
        "rateKey": "wayanad-ooty",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Wayanad; Sulthan Bathery-area sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Focused Wayanad sightseeing circuit. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Daytime transfer to Ooty and selected town sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Ooty sightseeing near the return route and drive back. Return and drop in Mysore."
          }
        ]
      },
      "Chikmagalur – Sakleshpur – Belur – Halebidu": {
        "hash": "chikmagalur-sakleshpur-belur-halebidu-4d",
        "rateKey": "chikmagalur-sakleshpur-belur-halebidu",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel via Shravanabelagola if time permits to Hassan / Belur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Belur and Halebidu temples; continue to Chikmagalur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Chikmagalur viewpoints and transfer towards Sakleshpur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Manjarabad Fort or a plantation visit, followed by return. Return and drop in Mysore."
          }
        ]
      },
      "Mangalore – Udupi – Murudeshwar": {
        "hash": "mangalore-udupi-murudeshwar-4d",
        "rateKey": "mangalore-udupi-murudeshwar",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Mangalore and selected city sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Udupi Sri Krishna Temple and Malpe beach. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Murudeshwar Temple and coast; return towards Udupi / Mangalore. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Gokarna – Murudeshwar": {
        "hash": "gokarna-murudeshwar-4d",
        "rateKey": "gokarna-murudeshwar",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Murudeshwar and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Murudeshwar Temple; continue to Gokarna. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Mahabaleshwar Temple and selected beaches. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Hampi – Badami – Aihole – Pattadakal": {
        "hash": "hampi-badami-aihole-pattadakal-4d",
        "rateKey": "hampi-badami-aihole-pattadakal",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Hampi / Hospet. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Hampi heritage circuit. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Early transfer to Badami; selected Badami, Aihole and Pattadakal monuments according to time. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Kodaikanal": {
        "hash": "kodaikanal-4d",
        "rateKey": "kodaikanal",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kodaikanal and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Lake, Coaker’s Walk and Bryant Park. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Selected viewpoints, pine forest and permitted sightseeing stops. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Munnar": {
        "hash": "munnar-4d",
        "rateKey": "munnar",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Munnar and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Mattupetty Dam, Echo Point and tea-country sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Tea Museum and selected nature sights, subject to opening and entry arrangements. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Kukke Subramanya – Dharmasthala – Udupi – Kollur": {
        "hash": "kukke-subramanya-dharmasthala-udupi-kollur-4d",
        "rateKey": "kukke-subramanya-dharmasthala-udupi-kollur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kukke Subramanya and darshan. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Dharmasthala darshan; continue to Udupi. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Udupi Sri Krishna Temple and Kollur Mookambika Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Sringeri – Horanadu – Udupi – Kollur": {
        "hash": "sringeri-horanadu-udupi-kollur-4d",
        "rateKey": "sringeri-horanadu-udupi-kollur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kalasa and Horanadu for darshan. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Sringeri temple visits; continue towards Udupi. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Udupi Sri Krishna Temple and Kollur Mookambika Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Tirupati – Tiruchanur – Srikalahasti": {
        "hash": "tirupati-tiruchanur-srikalahasti-4d",
        "rateKey": "tirupati-tiruchanur-srikalahasti",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Tirupati and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Tirumala darshan with confirmed tickets / arrangements. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Tiruchanur and Srikalahasti temple visits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Tiruvannamalai – Vellore – Kanchipuram": {
        "hash": "tiruvannamalai-vellore-kanchipuram-4d",
        "rateKey": "tiruvannamalai-vellore-kanchipuram",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Tiruvannamalai; temple visit if time permits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Arunachaleswarar Temple and transfer to Vellore Golden Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer to Kanchipuram; selected temple visits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Palani – Madurai": {
        "hash": "palani-madurai-4d",
        "rateKey": "palani-madurai",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Palani; check in and darshan according to timing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Palani temple visit if pending, then transfer to Madurai. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Meenakshi Amman Temple and selected Madurai sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Guruvayur – Thrissur": {
        "hash": "guruvayur-thrissur-4d",
        "rateKey": "guruvayur-thrissur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Guruvayur and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Guruvayur Temple darshan and nearby temples according to access rules. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Thrissur temple / cultural sights and return to stay. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      }
    }
  },
  "5D": {
    "title": "Five Day Tour Packages",
    "subtitle": "Private round trips with pickup and return in Mysore",
    "destinations": {
      "Coorg – Wayanad – Ooty": {
        "hash": "coorg-wayanad-ooty-5d",
        "rateKey": "coorg-wayanad-ooty",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Coorg via Bylakuppe and selected sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Madikeri sightseeing and daytime transfer to Wayanad. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Focused Wayanad sightseeing circuit. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Daytime transfer to Ooty and selected town sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Ooty sightseeing near the return route and drive back. Return and drop in Mysore."
          }
        ]
      },
      "Coorg – Chikmagalur – Sakleshpur": {
        "hash": "coorg-chikmagalur-sakleshpur-5d",
        "rateKey": "coorg-chikmagalur-sakleshpur",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Coorg; selected Madikeri sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Coorg sightseeing including a focused Talacauvery circuit if desired. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer to Chikmagalur via selected heritage stops. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Chikmagalur sightseeing and transfer towards Sakleshpur. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Manjarabad Fort or plantation visit and return. Return and drop in Mysore."
          }
        ]
      },
      "Ooty – Kodaikanal": {
        "hash": "ooty-kodaikanal-5d",
        "rateKey": "ooty-kodaikanal",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Ooty and selected town sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Ooty / Coonoor sightseeing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer from Ooty to Kodaikanal; check in and rest. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Kodaikanal lake, garden and selected viewpoints. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Munnar – Thekkady": {
        "hash": "munnar-thekkady-5d",
        "rateKey": "munnar-thekkady",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Munnar and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Munnar tea-country and dam / lake sightseeing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer to Thekkady; spice plantation visit if time permits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Pre-booked Periyar boating or selected local activities. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Kochi – Alleppey": {
        "hash": "kochi-alleppey-5d",
        "rateKey": "kochi-alleppey",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kochi and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Fort Kochi, Mattancherry and selected waterfront sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer to Alleppey; separately arranged backwater cruise or leisure. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Alleppey local sightseeing / leisure and prepare for return. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Mangalore – Udupi – Murudeshwar – Gokarna": {
        "hash": "mangalore-udupi-murudeshwar-gokarna-5d",
        "rateKey": "mangalore-udupi-murudeshwar-gokarna",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Mangalore and selected city sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Udupi Sri Krishna Temple and Malpe beach. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Murudeshwar Temple and transfer to Gokarna. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Gokarna temple / beach visits; transfer south to reduce the final return drive. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Gokarna – Karwar – Dandeli": {
        "hash": "gokarna-karwar-dandeli-5d",
        "rateKey": "gokarna-karwar-dandeli",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Gokarna and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Gokarna temple / beach visits and transfer to Karwar. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Karwar sightseeing and transfer to Dandeli. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Pre-booked Dandeli activities; rafting subject to conditions and operation. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Hampi – Badami – Aihole – Pattadakal Extended Tour": {
        "hash": "hampi-badami-aihole-pattadakal-extended-tour-5d",
        "rateKey": "hampi-badami-aihole-pattadakal-extended-tour",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Hampi / Hospet. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Hampi sacred centre and selected heritage monuments. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Hampi royal centre and transfer to Badami. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Badami caves, Aihole and Pattadakal according to opening hours. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Kukke Subramanya – Dharmasthala – Sringeri – Horanadu": {
        "hash": "kukke-subramanya-dharmasthala-sringeri-horanadu-5d",
        "rateKey": "kukke-subramanya-dharmasthala-sringeri-horanadu",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kukke Subramanya and darshan. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Dharmasthala Manjunatha Temple darshan. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Travel to Sringeri and visit Sharada Peetham. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Horanadu Annapoorneshwari Temple and Kalasa temple visits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Return journey after breakfast. Return and drop in Mysore."
          }
        ]
      },
      "Kukke Subramanya – Dharmasthala – Udupi – Kollur – Murudeshwar": {
        "hash": "kukke-subramanya-dharmasthala-udupi-kollur-murudeshwar-5d",
        "rateKey": "kukke-subramanya-dharmasthala-udupi-kollur-murudeshwar",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kukke Subramanya and darshan. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Dharmasthala darshan; continue to Udupi. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Udupi Sri Krishna Temple and Kollur Mookambika Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Murudeshwar Temple and travel south towards Udupi / Mangalore. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Udupi – Kollur – Murudeshwar – Gokarna": {
        "hash": "udupi-kollur-murudeshwar-gokarna-5d",
        "rateKey": "udupi-kollur-murudeshwar-gokarna",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Udupi and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Udupi Sri Krishna Temple and Kollur Mookambika Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Murudeshwar Temple; continue to Gokarna. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Gokarna Mahabaleshwar Temple and transfer south towards Udupi / Mangalore. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Madurai – Rameswaram – Dhanushkodi": {
        "hash": "madurai-rameswaram-dhanushkodi-5d",
        "rateKey": "madurai-rameswaram-dhanushkodi",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Madurai and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Meenakshi Amman Temple and selected Madurai sights. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer to Rameswaram; temple visit according to arrival. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Ramanathaswamy Temple and Dhanushkodi subject to access; return towards Madurai. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Palani – Madurai – Rameswaram": {
        "hash": "palani-madurai-rameswaram-5d",
        "rateKey": "palani-madurai-rameswaram",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Palani and darshan according to arrival. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Transfer to Madurai; Meenakshi Amman Temple. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Transfer to Rameswaram; Ramanathaswamy Temple according to timing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Complete Rameswaram visits and transfer towards Madurai. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Trichy – Thanjavur – Kumbakonam": {
        "hash": "trichy-thanjavur-kumbakonam-5d",
        "rateKey": "trichy-thanjavur-kumbakonam",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Trichy and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Srirangam and selected Trichy temples. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Thanjavur Brihadeeswarar Temple; continue to Kumbakonam. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Selected Kumbakonam-area temples, with a manageable darshan schedule. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Kumbakonam – Navagraha Temples": {
        "hash": "kumbakonam-navagraha-temples-5d",
        "rateKey": "kumbakonam-navagraha-temples",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Kumbakonam and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Suriyanar Koil, Kanjanur and Vaitheeswaran Koil, subject to temple hours. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Thiruvenkadu, Keezhaperumpallam and Thirunallar. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Thingalur, Alangudi and Thirunageswaram. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Tiruvannamalai – Chidambaram – Kumbakonam": {
        "hash": "tiruvannamalai-chidambaram-kumbakonam-5d",
        "rateKey": "tiruvannamalai-chidambaram-kumbakonam",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Tiruvannamalai and temple visit if time permits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Arunachaleswarar Temple; continue towards Chidambaram. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Nataraja Temple; transfer to Kumbakonam. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Selected Kumbakonam-area temples according to darshan timings. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Guruvayur – Thrissur – Kochi": {
        "hash": "guruvayur-thrissur-kochi-5d",
        "rateKey": "guruvayur-thrissur-kochi",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel to Guruvayur and check in. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Guruvayur Temple and nearby temple visits. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Thrissur temple / cultural sights and transfer to Kochi. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Selected Fort Kochi / Mattancherry sightseeing. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Early return journey to Mysore. Return and drop in Mysore."
          }
        ]
      },
      "Sabarimala": {
        "hash": "sabarimala-5d",
        "rateKey": "sabarimala",
        "itinerary": [
          {
            "day": "Day 1",
            "text": "Start from Mysore. Travel towards the confirmed Kerala base town; check in and rest. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 2",
            "text": "Continue to the authorised base / Nilakkal area according to confirmed arrangements. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 3",
            "text": "Sabarimala pilgrimage according to booked entry, temple opening and guest fitness; local transfers / trek separately arranged. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 4",
            "text": "Complete pilgrimage and return to the base town; rest before onward travel. Overnight stay at the selected stop on this route; accommodation is included only when explicitly quoted."
          },
          {
            "day": "Day 5",
            "text": "Return journey to Mysore. Return and drop in Mysore."
          }
        ]
      }
    }
  }
};
