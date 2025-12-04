import { TransportData } from './types';

export const TRANSPORT_DATA: TransportData = {
  "fichier": "testjean.xlsx",
  "description": "Grille tarifaire transport - France (onglets Général)",
  "feuilles": [
    {
      "nom": "Général - Taut",
      "type": "Taut",
      "info": "Hors taxe Gazole",
      "pays": "France",
      "transporteurs": [
        "BBL",
        "BETOTRANS",
        "GEODIS",
        "KUEHNE",
        "LACHAUD24",
        "LAVILAINOISE",
        "MRCI",
        "SCHENKER",
        "XPO"
      ],
      "nombre_departements": 103,
      "tarifs": [
        {
          "departement": "1 - Ain",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 550,
            "SCHENKER": 574,
            "GEODIS": 591,
            "XPO": 605,
            "LAVILAINOISE": 630,
            "BBL": 635,
            "MRCI": 635,
            "BETOTRANS": 707
          }
        },
        {
          "departement": "2 - Aisne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 735,
            "MRCI": 752,
            "XPO": 765,
            "SCHENKER": 813,
            "GEODIS": 829,
            "KUEHNE": 830,
            "LAVILAINOISE": 950,
            "BETOTRANS": 1080
          }
        },
        {
          "departement": "3 - Allier",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 340,
            "BBL": 365,
            "MRCI": 365,
            "GEODIS": 372,
            "SCHENKER": 418,
            "XPO": 424,
            "LAVILAINOISE": 430,
            "BETOTRANS": 492
          }
        },
        {
          "departement": "4 - Alpes Haute Provence",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 825,
            "SCHENKER": 896,
            "GEODIS": 929,
            "BBL": 945,
            "MRCI": 974,
            "KUEHNE": 1000,
            "BETOTRANS": 1047,
            "LAVILAINOISE": 1140
          }
        },
        {
          "departement": "5 - Hautes Alpes",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 820,
            "GEODIS": 833,
            "SCHENKER": 896,
            "BBL": 945,
            "MRCI": 974,
            "KUEHNE": 1000,
            "BETOTRANS": 1022,
            "LAVILAINOISE": 1110
          }
        },
        {
          "departement": "6 - Alpes Maritime",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 935,
            "GEODIS": 976,
            "BBL": 1000,
            "KUEHNE": 1000,
            "SCHENKER": 1016,
            "MRCI": 1080,
            "BETOTRANS": 1165,
            "LAVILAINOISE": 1375
          }
        },
        {
          "departement": "7 - Ardèche",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 538,
            "XPO": 541,
            "BETOTRANS": 589,
            "BBL": 600,
            "KUEHNE": 610,
            "MRCI": 622,
            "GEODIS": 668,
            "LAVILAINOISE": 690
          }
        },
        {
          "departement": "8 - Ardennes",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 850,
            "XPO": 858,
            "BBL": 885,
            "SCHENKER": 896,
            "MRCI": 908,
            "GEODIS": 949,
            "LAVILAINOISE": 1090,
            "BETOTRANS": 1207
          }
        },
        {
          "departement": "9 - Ariège",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 450,
            "XPO": 495,
            "BBL": 500,
            "KUEHNE": 500,
            "SCHENKER": 514,
            "MRCI": 519,
            "BETOTRANS": 536,
            "LAVILAINOISE": 690
          }
        },
        {
          "departement": "10 - Aube",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 640,
            "XPO": 655,
            "BBL": 665,
            "MRCI": 681,
            "SCHENKER": 681,
            "GEODIS": 754,
            "LAVILAINOISE": 820,
            "BETOTRANS": 962
          }
        },
        {
          "departement": "11 - Aude ",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 435,
            "GEODIS": 450,
            "SCHENKER": 478,
            "BBL": 485,
            "MRCI": 491,
            "KUEHNE": 620,
            "BETOTRANS": 622,
            "LAVILAINOISE": 690
          }
        },
        {
          "departement": "12 - Aveyron ZONE A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 380,
            "GEODIS": 381,
            "MRCI": 389,
            "KUEHNE": 400,
            "LAVILAINOISE": 410,
            "SCHENKER": 418,
            "XPO": 440,
            "BETOTRANS": 471
          }
        },
        {
          "departement": "12 - Aveyron ZONE B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 380,
            "GEODIS": 381,
            "MRCI": 389,
            "KUEHNE": 400,
            "LAVILAINOISE": 410,
            "SCHENKER": 418,
            "XPO": 440,
            "BETOTRANS": 471
          }
        },
        {
          "departement": "13 - Bouches du Rhone",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 744,
            "BBL": 750,
            "KUEHNE": 770,
            "XPO": 770,
            "MRCI": 777,
            "LAVILAINOISE": 799,
            "SCHENKER": 825,
            "BETOTRANS": 896
          }
        },
        {
          "departement": "14 - Calvados",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 715,
            "KUEHNE": 730,
            "GEODIS": 754,
            "BBL": 765,
            "MRCI": 777,
            "SCHENKER": 777,
            "BETOTRANS": 891,
            "LAVILAINOISE": 980
          }
        },
        {
          "departement": "15 - Cantal ZONE A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 250,
            "GEODIS": 251,
            "SCHENKER": 299,
            "BETOTRANS": 315,
            "BBL": 320,
            "MRCI": 345,
            "LAVILAINOISE": 370,
            "XPO": 385
          }
        },
        {
          "departement": "15 - Cantal ZONE B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 250,
            "GEODIS": 251,
            "SCHENKER": 299,
            "BETOTRANS": 315,
            "BBL": 320,
            "MRCI": 345,
            "LAVILAINOISE": 370,
            "XPO": 385
          }
        },
        {
          "departement": "16 - Charente",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 301,
            "SCHENKER": 342,
            "BBL": 350,
            "MRCI": 378,
            "XPO": 385,
            "BETOTRANS": 414,
            "LAVILAINOISE": 430,
            "KUEHNE": 440
          }
        },
        {
          "departement": "17 - Charente Maritime",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 450,
            "GEODIS": 450,
            "MRCI": 465,
            "KUEHNE": 470,
            "XPO": 495,
            "SCHENKER": 526,
            "LAVILAINOISE": 550,
            "BETOTRANS": 596
          }
        },
        {
          "departement": "18 - Cher",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "LAVILAINOISE": 420,
            "GEODIS": 421,
            "BBL": 445,
            "XPO": 451,
            "SCHENKER": 454,
            "MRCI": 465,
            "KUEHNE": 500,
            "BETOTRANS": 525
          }
        },
        {
          "departement": "19 - Correze ZONE A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BETOTRANS": 204,
            "GEODIS": 249,
            "KUEHNE": 250,
            "LAVILAINOISE": 250,
            "MRCI": 259,
            "SCHENKER": 275,
            "BBL": 290,
            "XPO": 330
          }
        },
        {
          "departement": "19 - Corrèze ZONE B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BETOTRANS": 204,
            "GEODIS": 249,
            "KUEHNE": 250,
            "LAVILAINOISE": 250,
            "MRCI": 259,
            "SCHENKER": 275,
            "BBL": 290,
            "XPO": 330
          }
        },
        {
          "departement": "21 : Côte d'Or",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 607,
            "SCHENKER": 622,
            "XPO": 638,
            "GEODIS": 641,
            "LAVILAINOISE": 650,
            "BBL": 710,
            "MRCI": 746,
            "BETOTRANS": 792
          }
        },
        {
          "departement": "22 - Côtes d'Armor",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 770,
            "XPO": 814,
            "GEODIS": 840,
            "SCHENKER": 884,
            "BBL": 950,
            "MRCI": 1005,
            "BETOTRANS": 1013,
            "LAVILAINOISE": 1150
          }
        },
        {
          "departement": "23 - Creuse",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 277,
            "KUEHNE": 320,
            "LAVILAINOISE": 320,
            "BBL": 330,
            "SCHENKER": 335,
            "MRCI": 357,
            "BETOTRANS": 393,
            "XPO": 427
          }
        },
        {
          "departement": "24 - Dordogne ZONE A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 251,
            "MRCI": 259,
            "KUEHNE": 270,
            "BBL": 300,
            "BETOTRANS": 322,
            "SCHENKER": 329,
            "XPO": 330,
            "LAVILAINOISE": 360
          }
        },
        {
          "departement": "24 - Dordogne ZONE B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 251,
            "MRCI": 259,
            "KUEHNE": 270,
            "BBL": 300,
            "BETOTRANS": 322,
            "SCHENKER": 329,
            "XPO": 330,
            "LAVILAINOISE": 360
          }
        },
        {
          "departement": "25 - Doubs",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 670,
            "SCHENKER": 693,
            "XPO": 693,
            "MRCI": 697,
            "KUEHNE": 720,
            "LAVILAINOISE": 720,
            "GEODIS": 724,
            "BETOTRANS": 898
          }
        },
        {
          "departement": "26 - Drôme",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 550,
            "SCHENKER": 562,
            "KUEHNE": 610,
            "GEODIS": 617,
            "MRCI": 627,
            "LAVILAINOISE": 650,
            "BBL": 670,
            "BETOTRANS": 925
          }
        },
        {
          "departement": "27 - Eure",
          "prix_par_transporteur": {
            "KUEHNE": 650,
            "LACHAUD24": 650,
            "SCHENKER": 681,
            "XPO": 682,
            "GEODIS": 684,
            "BBL": 725,
            "LAVILAINOISE": 750,
            "MRCI": 777,
            "BETOTRANS": 884
          }
        },
        {
          "departement": "28 - Eure et Loire",
          "prix_par_transporteur": {
            "GEODIS": 576,
            "BBL": 590,
            "LACHAUD24": 590,
            "MRCI": 594,
            "KUEHNE": 600,
            "XPO": 605,
            "LAVILAINOISE": 650,
            "SCHENKER": 657,
            "BETOTRANS": 743
          }
        },
        {
          "departement": "29 - Finistère",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 853,
            "GEODIS": 869,
            "KUEHNE": 890,
            "SCHENKER": 926,
            "BBL": 940,
            "MRCI": 1005,
            "BETOTRANS": 1076,
            "LAVILAINOISE": 1190
          }
        },
        {
          "departement": "30 - Gard",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 583,
            "MRCI": 648,
            "GEODIS": 656,
            "SCHENKER": 657,
            "BBL": 690,
            "BETOTRANS": 699,
            "KUEHNE": 700,
            "LAVILAINOISE": 750
          }
        },
        {
          "departement": "31 - Haute Garonne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 330,
            "GEODIS": 334,
            "BBL": 370,
            "MRCI": 383,
            "SCHENKER": 386,
            "BETOTRANS": 475,
            "LAVILAINOISE": 480,
            "XPO": 495
          }
        },
        {
          "departement": "32 - Gers",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 334,
            "KUEHNE": 370,
            "BBL": 440,
            "MRCI": 453,
            "XPO": 512,
            "SCHENKER": 526,
            "BETOTRANS": 568,
            "LAVILAINOISE": 650
          }
        },
        {
          "departement": "33 - Gironde ZONE A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 334,
            "BBL": 370,
            "MRCI": 378,
            "KUEHNE": 380,
            "XPO": 385,
            "SCHENKER": 386,
            "BETOTRANS": 428,
            "LAVILAINOISE": 650
          }
        },
        {
          "departement": "33 - Gironde ZONE B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 334,
            "BBL": 370,
            "MRCI": 378,
            "KUEHNE": 380,
            "XPO": 385,
            "SCHENKER": 386,
            "BETOTRANS": 428,
            "LAVILAINOISE": 650
          }
        },
        {
          "departement": "34 - Hérault",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "LAVILAINOISE": 560,
            "XPO": 583,
            "MRCI": 594,
            "BETOTRANS": 607,
            "GEODIS": 617,
            "BBL": 630,
            "SCHENKER": 633,
            "KUEHNE": 680
          }
        },
        {
          "departement": "35 - Ille et VIlaine",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 638,
            "SCHENKER": 657,
            "GEODIS": 710,
            "MRCI": 713,
            "KUEHNE": 730,
            "BBL": 770,
            "LAVILAINOISE": 790,
            "BETOTRANS": 843
          }
        },
        {
          "departement": "36 - Indre",
          "prix_par_transporteur": {
            "KUEHNE": 380,
            "GEODIS": 381,
            "BBL": 385,
            "SCHENKER": 386,
            "MRCI": 389,
            "LAVILAINOISE": 400,
            "LACHAUD24": 430,
            "BETOTRANS": 443,
            "XPO": 495
          }
        },
        {
          "departement": "37 - Indre et Loire",
          "prix_par_transporteur": {
            "LACHAUD24": 450,
            "GEODIS": 455,
            "XPO": 490,
            "MRCI": 497,
            "BBL": 500,
            "KUEHNE": 500,
            "SCHENKER": 514,
            "BETOTRANS": 569,
            "LAVILAINOISE": 630
          }
        },
        {
          "departement": "38 - Isère",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 574,
            "KUEHNE": 580,
            "XPO": 583,
            "GEODIS": 623,
            "LAVILAINOISE": 650,
            "BBL": 660,
            "MRCI": 713,
            "BETOTRANS": 813
          }
        },
        {
          "departement": "39 - Jura",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 598,
            "XPO": 605,
            "LAVILAINOISE": 650,
            "GEODIS": 656,
            "BBL": 690,
            "KUEHNE": 700,
            "MRCI": 713,
            "BETOTRANS": 842
          }
        },
        {
          "departement": "40 - Landes",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 495,
            "GEODIS": 507,
            "KUEHNE": 510,
            "MRCI": 519,
            "BBL": 520,
            "SCHENKER": 538,
            "BETOTRANS": 639,
            "LAVILAINOISE": 730
          }
        },
        {
          "departement": "41 - Loir et Cher",
          "prix_par_transporteur": {
            "LAVILAINOISE": 430,
            "GEODIS": 455,
            "LACHAUD24": 470,
            "XPO": 484,
            "BBL": 495,
            "MRCI": 497,
            "KUEHNE": 500,
            "SCHENKER": 514,
            "BETOTRANS": 570
          }
        },
        {
          "departement": "42 - Loire",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "LAVILAINOISE": 430,
            "BBL": 450,
            "KUEHNE": 450,
            "GEODIS": 457,
            "MRCI": 465,
            "BETOTRANS": 471,
            "SCHENKER": 478,
            "XPO": 523
          }
        },
        {
          "departement": "43 - Haute Loire",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 400,
            "GEODIS": 443,
            "BBL": 445,
            "LAVILAINOISE": 460,
            "MRCI": 465,
            "SCHENKER": 478,
            "BETOTRANS": 479,
            "XPO": 495
          }
        },
        {
          "departement": "44 - Loire Atlantique",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 540,
            "GEODIS": 561,
            "LAVILAINOISE": 580,
            "BBL": 585,
            "MRCI": 605,
            "XPO": 605,
            "SCHENKER": 645,
            "BETOTRANS": 717
          }
        },
        {
          "departement": "45 - Loiret",
          "prix_par_transporteur": {
            "GEODIS": 457,
            "MRCI": 497,
            "BBL": 520,
            "XPO": 523,
            "SCHENKER": 526,
            "KUEHNE": 540,
            "LACHAUD24": 540,
            "LAVILAINOISE": 570,
            "BETOTRANS": 617
          }
        },
        {
          "departement": "46 - Lot ZONE A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 250,
            "GEODIS": 251,
            "BBL": 310,
            "BETOTRANS": 321,
            "MRCI": 324,
            "SCHENKER": 335,
            "XPO": 341,
            "LAVILAINOISE": 430
          }
        },
        {
          "departement": "46 - Lot ZONE B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 250,
            "GEODIS": 251,
            "BBL": 310,
            "BETOTRANS": 321,
            "MRCI": 324,
            "SCHENKER": 335,
            "XPO": 341,
            "LAVILAINOISE": 430
          }
        },
        {
          "departement": "47 - Lot et Garonne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 334,
            "BBL": 370,
            "MRCI": 389,
            "BETOTRANS": 398,
            "KUEHNE": 400,
            "SCHENKER": 418,
            "XPO": 418,
            "LAVILAINOISE": 550
          }
        },
        {
          "departement": "48 - Lozère",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 400,
            "GEODIS": 457,
            "BETOTRANS": 462,
            "LAVILAINOISE": 470,
            "SCHENKER": 478,
            "BBL": 495,
            "XPO": 512,
            "MRCI": 519
          }
        },
        {
          "departement": "49 - Maine et Loire",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "MRCI": 497,
            "KUEHNE": 510,
            "XPO": 523,
            "BBL": 550,
            "LAVILAINOISE": 550,
            "SCHENKER": 551,
            "GEODIS": 561,
            "BETOTRANS": 614
          }
        },
        {
          "departement": "50 - Manche",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 800,
            "GEODIS": 846,
            "XPO": 847,
            "BBL": 920,
            "SCHENKER": 920,
            "MRCI": 993,
            "LAVILAINOISE": 1030,
            "BETOTRANS": 1064
          }
        },
        {
          "departement": "51 - Marne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 777,
            "XPO": 781,
            "BBL": 800,
            "KUEHNE": 800,
            "MRCI": 843,
            "LAVILAINOISE": 850,
            "GEODIS": 884,
            "BETOTRANS": 1105
          }
        },
        {
          "departement": "52 - Haute Marne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 717,
            "BBL": 740,
            "LAVILAINOISE": 750,
            "XPO": 754,
            "MRCI": 777,
            "GEODIS": 779,
            "KUEHNE": 780,
            "BETOTRANS": 967
          }
        },
        {
          "departement": "53 - Mayenne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 605,
            "GEODIS": 657,
            "SCHENKER": 657,
            "BBL": 670,
            "KUEHNE": 670,
            "MRCI": 713,
            "BETOTRANS": 767,
            "LAVILAINOISE": 800
          }
        },
        {
          "departement": "54 - Meurthe et Moselle",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 777,
            "XPO": 814,
            "BBL": 840,
            "KUEHNE": 880,
            "MRCI": 885,
            "LAVILAINOISE": 900,
            "GEODIS": 924,
            "BETOTRANS": 1142
          }
        },
        {
          "departement": "55 - Meuse",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 777,
            "BBL": 840,
            "KUEHNE": 840,
            "XPO": 867,
            "MRCI": 885,
            "LAVILAINOISE": 900,
            "GEODIS": 944,
            "BETOTRANS": 1117
          }
        },
        {
          "departement": "56 - Morbihan",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 708,
            "XPO": 715,
            "BBL": 735,
            "KUEHNE": 760,
            "SCHENKER": 765,
            "MRCI": 777,
            "LAVILAINOISE": 900,
            "BETOTRANS": 971
          }
        },
        {
          "departement": "57 - Moselle",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 825,
            "SCHENKER": 837,
            "KUEHNE": 860,
            "BBL": 900,
            "GEODIS": 990,
            "MRCI": 993,
            "LAVILAINOISE": 1020,
            "BETOTRANS": 1234
          }
        },
        {
          "departement": "58 - Nièvre",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 455,
            "MRCI": 465,
            "SCHENKER": 478,
            "BBL": 480,
            "XPO": 495,
            "KUEHNE": 498,
            "BETOTRANS": 566,
            "LAVILAINOISE": 875
          }
        },
        {
          "departement": "59 - Nord",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 830,
            "BBL": 850,
            "SCHENKER": 873,
            "MRCI": 908,
            "XPO": 924,
            "GEODIS": 939,
            "LAVILAINOISE": 1050,
            "BETOTRANS": 1326
          }
        },
        {
          "departement": "60 - Oise",
          "prix_par_transporteur": {
            "KUEHNE": 650,
            "BBL": 695,
            "XPO": 743,
            "MRCI": 746,
            "GEODIS": 761,
            "SCHENKER": 777,
            "LACHAUD24": 790,
            "LAVILAINOISE": 800,
            "BETOTRANS": 966
          }
        },
        {
          "departement": "61 - Orne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 613,
            "BBL": 630,
            "XPO": 638,
            "KUEHNE": 670,
            "MRCI": 681,
            "SCHENKER": 693,
            "LAVILAINOISE": 790,
            "BETOTRANS": 845
          }
        },
        {
          "departement": "62 - Pas de Calais",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 830,
            "BBL": 850,
            "SCHENKER": 896,
            "MRCI": 908,
            "XPO": 935,
            "GEODIS": 939,
            "LAVILAINOISE": 950,
            "BETOTRANS": 1323
          }
        },
        {
          "departement": "63 - Puy de Dome",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 251,
            "KUEHNE": 320,
            "LAVILAINOISE": 320,
            "SCHENKER": 359,
            "BBL": 370,
            "BETOTRANS": 371,
            "MRCI": 378,
            "XPO": 385
          }
        },
        {
          "departement": "64 - Pyrénéés Atlantique",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 500,
            "XPO": 539,
            "GEODIS": 542,
            "BBL": 555,
            "SCHENKER": 586,
            "MRCI": 594,
            "BETOTRANS": 685,
            "LAVILAINOISE": 850
          }
        },
        {
          "departement": "65 - Hautes Pyrénées",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 528,
            "KUEHNE": 530,
            "GEODIS": 542,
            "BBL": 580,
            "MRCI": 594,
            "SCHENKER": 598,
            "BETOTRANS": 656,
            "LAVILAINOISE": 850
          }
        },
        {
          "departement": "66 - Pyrénées Orientales",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 542,
            "BBL": 648,
            "KUEHNE": 650,
            "SCHENKER": 657,
            "XPO": 660,
            "MRCI": 681,
            "BETOTRANS": 751,
            "LAVILAINOISE": 890
          }
        },
        {
          "departement": "67 - Bas Rhin",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 890,
            "SCHENKER": 896,
            "XPO": 935,
            "BBL": 940,
            "MRCI": 993,
            "GEODIS": 1042,
            "LAVILAINOISE": 1050,
            "BETOTRANS": 1321
          }
        },
        {
          "departement": "68 - Haut Rhin",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 792,
            "SCHENKER": 801,
            "BBL": 805,
            "MRCI": 843,
            "KUEHNE": 870,
            "GEODIS": 943,
            "LAVILAINOISE": 950,
            "BETOTRANS": 1112
          }
        },
        {
          "departement": "69 - Rhône",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "LAVILAINOISE": 400,
            "SCHENKER": 490,
            "MRCI": 502,
            "GEODIS": 509,
            "BBL": 510,
            "KUEHNE": 515,
            "XPO": 537,
            "BETOTRANS": 649
          }
        },
        {
          "departement": "70 - Haute Saône",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 682,
            "SCHENKER": 717,
            "BBL": 735,
            "KUEHNE": 770,
            "GEODIS": 775,
            "MRCI": 777,
            "LAVILAINOISE": 820,
            "BETOTRANS": 937
          }
        },
        {
          "departement": "71 - Saône et Loire",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "LAVILAINOISE": 440,
            "SCHENKER": 454,
            "XPO": 539,
            "GEODIS": 542,
            "MRCI": 589,
            "BBL": 590,
            "KUEHNE": 610,
            "BETOTRANS": 672
          }
        },
        {
          "departement": "72 - Sarthe",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 550,
            "BBL": 565,
            "SCHENKER": 598,
            "MRCI": 599,
            "KUEHNE": 620,
            "GEODIS": 657,
            "LAVILAINOISE": 680,
            "BETOTRANS": 736
          }
        },
        {
          "departement": "73 - Savoie",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 650,
            "LAVILAINOISE": 650,
            "GEODIS": 657,
            "SCHENKER": 657,
            "XPO": 682,
            "BBL": 700,
            "MRCI": 843,
            "BETOTRANS": 925
          }
        },
        {
          "departement": "74 - Haute Savoie",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 657,
            "SCHENKER": 657,
            "XPO": 693,
            "BBL": 700,
            "KUEHNE": 720,
            "MRCI": 777,
            "BETOTRANS": 865,
            "LAVILAINOISE": 890
          }
        },
        {
          "departement": "75 - Ile de France",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 610,
            "KUEHNE": 610,
            "MRCI": 648,
            "LAVILAINOISE": 650,
            "SCHENKER": 657.39,
            "GEODIS": 660,
            "XPO": 682,
            "BETOTRANS": 826
          }
        },
        {
          "departement": "76 - Seine Maritime",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "BBL": 740,
            "MRCI": 777,
            "KUEHNE": 780,
            "SCHENKER": 801,
            "XPO": 803,
            "GEODIS": 833,
            "LAVILAINOISE": 880,
            "BETOTRANS": 1013
          }
        },
        {
          "departement": "77 - Seine et Marne",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "MRCI": 648,
            "LAVILAINOISE": 650,
            "SCHENKER": 657,
            "GEODIS": 660,
            "XPO": 682,
            "BETOTRANS": 860
          }
        },
        {
          "departement": "78 - Yvelines",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "MRCI": 648,
            "SCHENKER": 657,
            "GEODIS": 660,
            "LAVILAINOISE": 680,
            "XPO": 682,
            "BETOTRANS": 876
          }
        },
        {
          "departement": "79 - Deux Sèvres",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "MRCI": 389,
            "BBL": 410,
            "GEODIS": 450,
            "KUEHNE": 450,
            "LAVILAINOISE": 450,
            "XPO": 462,
            "SCHENKER": 478,
            "BETOTRANS": 494
          }
        },
        {
          "departement": "80 - Somme",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 750,
            "BBL": 775,
            "MRCI": 777,
            "SCHENKER": 777,
            "XPO": 792,
            "GEODIS": 833,
            "LAVILAINOISE": 840,
            "BETOTRANS": 1066
          }
        },
        {
          "departement": "81 - Tarn",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 300,
            "BBL": 380,
            "GEODIS": 381,
            "MRCI": 389,
            "SCHENKER": 454,
            "XPO": 473,
            "BETOTRANS": 488,
            "LAVILAINOISE": 530
          }
        },
        {
          "departement": "82 - Tarn et Garonne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 300,
            "SCHENKER": 342,
            "BBL": 355,
            "GEODIS": 366,
            "BETOTRANS": 387,
            "MRCI": 389,
            "LAVILAINOISE": 410,
            "XPO": 418
          }
        },
        {
          "departement": "83 - Var",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 825,
            "BBL": 840,
            "KUEHNE": 870,
            "GEODIS": 894,
            "SCHENKER": 896,
            "MRCI": 908,
            "BETOTRANS": 1003,
            "LAVILAINOISE": 1150
          }
        },
        {
          "departement": "84 - Vaucluse",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "XPO": 638,
            "SCHENKER": 693,
            "BBL": 700,
            "KUEHNE": 705,
            "MRCI": 713,
            "LAVILAINOISE": 735,
            "GEODIS": 761,
            "BETOTRANS": 777
          }
        },
        {
          "departement": "85 - Vendée",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 520,
            "XPO": 550,
            "BBL": 560,
            "MRCI": 561,
            "LAVILAINOISE": 570,
            "SCHENKER": 586,
            "BETOTRANS": 624,
            "GEODIS": 641
          }
        },
        {
          "departement": "86 - Vienne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 381,
            "MRCI": 389,
            "BBL": 390,
            "SCHENKER": 394,
            "XPO": 396,
            "KUEHNE": 400,
            "LAVILAINOISE": 420,
            "BETOTRANS": 443
          }
        },
        {
          "departement": "87 - Haute Vienne Zone A",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 251,
            "KUEHNE": 290,
            "LAVILAINOISE": 300,
            "BETOTRANS": 315,
            "BBL": 320,
            "SCHENKER": 335,
            "XPO": 374,
            "MRCI": 389
          }
        },
        {
          "departement": "87 - Haute Vienne Zone B",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "GEODIS": 251,
            "KUEHNE": 290,
            "LAVILAINOISE": 300,
            "BETOTRANS": 315,
            "BBL": 320,
            "SCHENKER": 335,
            "XPO": 374,
            "MRCI": 389
          }
        },
        {
          "departement": "88 - Vosges",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "SCHENKER": 777,
            "XPO": 792,
            "KUEHNE": 830,
            "BBL": 840,
            "MRCI": 885,
            "GEODIS": 893,
            "LAVILAINOISE": 1100,
            "BETOTRANS": 1137
          }
        },
        {
          "departement": "89 - Yonne",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 550,
            "GEODIS": 557,
            "SCHENKER": 586,
            "LAVILAINOISE": 590,
            "XPO": 594,
            "BBL": 638,
            "MRCI": 681,
            "BETOTRANS": 743
          }
        },
        {
          "departement": "90 - Teritoire de Belfort",
          "prix_par_transporteur": {
            "LACHAUD24": 0,
            "KUEHNE": 760,
            "XPO": 770,
            "SCHENKER": 777,
            "GEODIS": 838,
            "BBL": 850,
            "MRCI": 908,
            "BETOTRANS": 974,
            "LAVILAINOISE": 1120
          }
        },
        {
          "departement": "91 - Essonne",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "LAVILAINOISE": 640,
            "MRCI": 648,
            "GEODIS": 660,
            "SCHENKER": 669,
            "XPO": 682,
            "BETOTRANS": 785
          }
        },
        {
          "departement": "92 - Hauts de Seine",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "LAVILAINOISE": 640,
            "MRCI": 648,
            "GEODIS": 660,
            "SCHENKER": 669,
            "XPO": 682,
            "BETOTRANS": 833
          }
        },
        {
          "departement": "93 - Seine St Denis",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "MRCI": 648,
            "GEODIS": 660,
            "LAVILAINOISE": 665,
            "SCHENKER": 669,
            "XPO": 682,
            "BETOTRANS": 864
          }
        },
        {
          "departement": "94 - Val de Marne",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "LAVILAINOISE": 640,
            "MRCI": 648,
            "GEODIS": 660,
            "SCHENKER": 669,
            "XPO": 682,
            "BETOTRANS": 826
          }
        },
        {
          "departement": "95 - Val d'Oise",
          "prix_par_transporteur": {
            "BBL": 610,
            "KUEHNE": 610,
            "LACHAUD24": 615,
            "MRCI": 648,
            "GEODIS": 660,
            "SCHENKER": 669,
            "LAVILAINOISE": 700,
            "XPO": 715,
            "BETOTRANS": 869
          }
        },
        {
          "departement": "BFA",
          "prix_par_transporteur": {
            "BBL": 0,
            "BETOTRANS": 0,
            "GEODIS": 0,
            "KUEHNE": 0,
            "LACHAUD24": 0,
            "LAVILAINOISE": 0,
            "MRCI": 0,
            "SCHENKER": 0,
            "XPO": 0
          }
        },
        {
          "departement": "Complément",
          "prix_par_transporteur": {
            "BBL": 0,
            "BETOTRANS": 0,
            "GEODIS": 0,
            "LACHAUD24": 0,
            "LAVILAINOISE": 0,
            "SCHENKER": 0,
            "KUEHNE": 50,
            "MRCI": 50,
            "XPO": 50
          }
        }
      ]
    },
    {
      "nom": "Général - plateau",
      "type": "Plateau",
      "info": "Hors taxe Gazole",
      "pays": "France",
      "transporteurs": [
        "BETOTRANS",
        "CONTE",
        "LACHAUD",
        "MRCI",
        "SCHENKER",
        "VEYSSET",
        "XPO"
      ],
      "nombre_departements": 103,
      "tarifs": [
        {
          "departement": "1 - Ain",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 531,
            "MRCI": 635,
            "XPO": 666,
            "VEYSSET": 670,
            "BETOTRANS": 707,
            "CONTE": 719
          }
        },
        {
          "departement": "2 - Aisne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 730,
            "MRCI": 752,
            "XPO": 841,
            "VEYSSET": 880,
            "CONTE": 1026,
            "BETOTRANS": 1080
          }
        },
        {
          "departement": "3 - Allier",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 365,
            "SCHENKER": 388,
            "VEYSSET": 450,
            "XPO": 466,
            "CONTE": 480,
            "BETOTRANS": 492
          }
        },
        {
          "departement": "4 - Alpes Haute Provence",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 788,
            "XPO": 908,
            "MRCI": 974,
            "BETOTRANS": 1047,
            "CONTE": 1075,
            "VEYSSET": 1240
          }
        },
        {
          "departement": "5 - Hautes Alpes",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 782,
            "XPO": 901,
            "MRCI": 974,
            "CONTE": 1005,
            "BETOTRANS": 1022,
            "VEYSSET": 1180
          }
        },
        {
          "departement": "6 - Alpes Maritime",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 893,
            "XPO": 1029,
            "MRCI": 1080,
            "VEYSSET": 1130,
            "BETOTRANS": 1165,
            "CONTE": 1194
          }
        },
        {
          "departement": "7 - Ardèche",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 517,
            "BETOTRANS": 589,
            "XPO": 595,
            "MRCI": 622,
            "CONTE": 756,
            "VEYSSET": 840
          }
        },
        {
          "departement": "8 - Ardennes",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 819,
            "MRCI": 908,
            "XPO": 944,
            "VEYSSET": 1080,
            "BETOTRANS": 1207,
            "CONTE": 1221
          }
        },
        {
          "departement": "9 - Ariège",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 473,
            "MRCI": 519,
            "BETOTRANS": 536,
            "XPO": 545,
            "CONTE": 584,
            "VEYSSET": 600
          }
        },
        {
          "departement": "10 - Aube",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 625,
            "MRCI": 681,
            "XPO": 720,
            "VEYSSET": 880,
            "BETOTRANS": 962,
            "CONTE": 1005
          }
        },
        {
          "departement": "11 - Aude ",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 415,
            "XPO": 478,
            "MRCI": 491,
            "VEYSSET": 550,
            "CONTE": 605,
            "BETOTRANS": 622
          }
        },
        {
          "departement": "12 - Aveyron ZONE A",
          "prix_par_transporteur": {
            "SCHENKER": 386,
            "MRCI": 389,
            "LACHAUD": 400,
            "BETOTRANS": 471,
            "XPO": 484,
            "CONTE": 500,
            "VEYSSET": 580
          }
        },
        {
          "departement": "12 - Aveyron ZONE B",
          "prix_par_transporteur": {
            "SCHENKER": 386,
            "MRCI": 389,
            "LACHAUD": 400,
            "BETOTRANS": 471,
            "XPO": 484,
            "VEYSSET": 580,
            "CONTE": 610
          }
        },
        {
          "departement": "13 - Bouches du Rhone",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 730,
            "MRCI": 777,
            "XPO": 847,
            "BETOTRANS": 896,
            "VEYSSET": 930,
            "CONTE": 994
          }
        },
        {
          "departement": "14 - Calvados",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 683,
            "MRCI": 777,
            "XPO": 787,
            "VEYSSET": 880,
            "BETOTRANS": 981,
            "CONTE": 1016
          }
        },
        {
          "departement": "15 - Cantal ZONE A",
          "prix_par_transporteur": {
            "CONTE": 275,
            "BETOTRANS": 315,
            "SCHENKER": 338,
            "MRCI": 345,
            "VEYSSET": 350,
            "LACHAUD": 400,
            "XPO": 424
          }
        },
        {
          "departement": "15 - Cantal ZONE B",
          "prix_par_transporteur": {
            "BETOTRANS": 315,
            "SCHENKER": 338,
            "MRCI": 345,
            "LACHAUD": 400,
            "VEYSSET": 400,
            "XPO": 424,
            "CONTE": 465
          }
        },
        {
          "departement": "16 - Charente",
          "prix_par_transporteur": {
            "SCHENKER": 338,
            "MRCI": 378,
            "VEYSSET": 390,
            "BETOTRANS": 414,
            "XPO": 424,
            "LACHAUD": 425,
            "CONTE": 440
          }
        },
        {
          "departement": "17 - Charente Maritime",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 465,
            "SCHENKER": 473,
            "CONTE": 500,
            "VEYSSET": 520,
            "XPO": 545,
            "BETOTRANS": 596
          }
        },
        {
          "departement": "18 - Cher",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 413,
            "MRCI": 465,
            "XPO": 496,
            "BETOTRANS": 525,
            "CONTE": 525,
            "VEYSSET": 540
          }
        },
        {
          "departement": "19 - Correze ZONE A",
          "prix_par_transporteur": {
            "CONTE": 200,
            "BETOTRANS": 204,
            "MRCI": 259,
            "VEYSSET": 260,
            "SCHENKER": 266,
            "LACHAUD": 278,
            "XPO": 363
          }
        },
        {
          "departement": "19 - Corrèze ZONE B",
          "prix_par_transporteur": {
            "BETOTRANS": 204,
            "MRCI": 259,
            "SCHENKER": 266,
            "LACHAUD": 278,
            "CONTE": 305,
            "VEYSSET": 360,
            "XPO": 363
          }
        },
        {
          "departement": "21 : Côte d'Or",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 585,
            "XPO": 702,
            "MRCI": 746,
            "VEYSSET": 770,
            "BETOTRANS": 792,
            "CONTE": 843
          }
        },
        {
          "departement": "22 - Côtes d'Armor",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 777,
            "XPO": 895,
            "VEYSSET": 980,
            "MRCI": 1005,
            "BETOTRANS": 1013,
            "CONTE": 1043
          }
        },
        {
          "departement": "23 - Creuse",
          "prix_par_transporteur": {
            "MRCI": 357,
            "SCHENKER": 375,
            "BETOTRANS": 393,
            "LACHAUD": 400,
            "CONTE": 410,
            "VEYSSET": 410,
            "XPO": 469
          }
        },
        {
          "departement": "24 - Dordogne ZONE A",
          "prix_par_transporteur": {
            "MRCI": 259,
            "LACHAUD": 278,
            "SCHENKER": 302,
            "VEYSSET": 320,
            "BETOTRANS": 322,
            "CONTE": 330,
            "XPO": 363
          }
        },
        {
          "departement": "24 - Dordogne ZONE B",
          "prix_par_transporteur": {
            "MRCI": 259,
            "LACHAUD": 278,
            "SCHENKER": 302,
            "BETOTRANS": 322,
            "XPO": 363,
            "VEYSSET": 370,
            "CONTE": 385
          }
        },
        {
          "departement": "25 - Doubs",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 655,
            "MRCI": 697,
            "XPO": 762,
            "VEYSSET": 820,
            "BETOTRANS": 898,
            "CONTE": 972
          }
        },
        {
          "departement": "26 - Drôme",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 525,
            "XPO": 605,
            "MRCI": 627,
            "VEYSSET": 840,
            "CONTE": 864,
            "BETOTRANS": 925
          }
        },
        {
          "departement": "27 - Eure",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 638,
            "XPO": 750,
            "MRCI": 777,
            "BETOTRANS": 884,
            "VEYSSET": 930,
            "CONTE": 1005
          }
        },
        {
          "departement": "28 - Eure et Loire",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 578,
            "MRCI": 594,
            "XPO": 666,
            "VEYSSET": 670,
            "BETOTRANS": 743,
            "CONTE": 762
          }
        },
        {
          "departement": "29 - Finistère",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 814,
            "XPO": 938,
            "MRCI": 1005,
            "VEYSSET": 1010,
            "BETOTRANS": 1076,
            "CONTE": 1180
          }
        },
        {
          "departement": "30 - Gard",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 557,
            "XPO": 641,
            "MRCI": 648,
            "BETOTRANS": 699,
            "VEYSSET": 820,
            "CONTE": 870
          }
        },
        {
          "departement": "31 - Haute Garonne",
          "prix_par_transporteur": {
            "LACHAUD": 341,
            "MRCI": 383,
            "VEYSSET": 390,
            "SCHENKER": 402,
            "CONTE": 430,
            "BETOTRANS": 475,
            "XPO": 545
          }
        },
        {
          "departement": "32 - Gers",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 453,
            "SCHENKER": 474,
            "VEYSSET": 490,
            "CONTE": 510,
            "XPO": 563,
            "BETOTRANS": 568
          }
        },
        {
          "departement": "33 - Gironde ZONE A",
          "prix_par_transporteur": {
            "SCHENKER": 364,
            "MRCI": 378,
            "VEYSSET": 390,
            "CONTE": 400,
            "LACHAUD": 400,
            "XPO": 424,
            "BETOTRANS": 428
          }
        },
        {
          "departement": "33 - Gironde ZONE B",
          "prix_par_transporteur": {
            "SCHENKER": 364,
            "MRCI": 378,
            "VEYSSET": 390,
            "LACHAUD": 400,
            "XPO": 424,
            "BETOTRANS": 428,
            "CONTE": 500
          }
        },
        {
          "departement": "34 - Hérault",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 557,
            "MRCI": 594,
            "BETOTRANS": 607,
            "XPO": 641,
            "CONTE": 710,
            "VEYSSET": 720
          }
        },
        {
          "departement": "35 - Ille et VIlaine",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 609,
            "XPO": 702,
            "MRCI": 713,
            "VEYSSET": 820,
            "BETOTRANS": 843,
            "CONTE": 910
          }
        },
        {
          "departement": "36 - Indre",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 389,
            "SCHENKER": 416,
            "BETOTRANS": 443,
            "VEYSSET": 460,
            "CONTE": 520,
            "XPO": 545
          }
        },
        {
          "departement": "37 - Indre et Loire",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 430,
            "MRCI": 497,
            "XPO": 538,
            "BETOTRANS": 569,
            "VEYSSET": 570,
            "CONTE": 605
          }
        },
        {
          "departement": "38 - Isère",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 545,
            "XPO": 641,
            "MRCI": 713,
            "VEYSSET": 760,
            "CONTE": 794,
            "BETOTRANS": 813
          }
        },
        {
          "departement": "39 - Jura",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 566,
            "XPO": 666,
            "MRCI": 713,
            "VEYSSET": 800,
            "BETOTRANS": 842,
            "CONTE": 864
          }
        },
        {
          "departement": "40 - Landes",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 463,
            "XPO": 495,
            "MRCI": 519,
            "VEYSSET": 540,
            "CONTE": 595,
            "BETOTRANS": 639
          }
        },
        {
          "departement": "41 - Loir et Cher",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 434,
            "MRCI": 497,
            "XPO": 532,
            "BETOTRANS": 570,
            "CONTE": 600,
            "VEYSSET": 620
          }
        },
        {
          "departement": "42 - Loire",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 449,
            "MRCI": 465,
            "BETOTRANS": 516,
            "XPO": 575,
            "VEYSSET": 580,
            "CONTE": 648
          }
        },
        {
          "departement": "43 - Haute Loire",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 444,
            "MRCI": 465,
            "BETOTRANS": 479,
            "XPO": 545,
            "CONTE": 575,
            "VEYSSET": 580
          }
        },
        {
          "departement": "44 - Loire Atlantique",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 578,
            "MRCI": 605,
            "XPO": 666,
            "VEYSSET": 670,
            "CONTE": 715,
            "BETOTRANS": 717
          }
        },
        {
          "departement": "45 - Loiret",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 489,
            "MRCI": 497,
            "XPO": 575,
            "VEYSSET": 600,
            "BETOTRANS": 617,
            "CONTE": 715
          }
        },
        {
          "departement": "46 - Lot ZONE A",
          "prix_par_transporteur": {
            "CONTE": 285,
            "VEYSSET": 300,
            "SCHENKER": 316,
            "BETOTRANS": 321,
            "MRCI": 324,
            "LACHAUD": 362,
            "XPO": 375
          }
        },
        {
          "departement": "46 - Lot ZONE B",
          "prix_par_transporteur": {
            "SCHENKER": 316,
            "BETOTRANS": 321,
            "MRCI": 324,
            "CONTE": 330,
            "VEYSSET": 360,
            "LACHAUD": 362,
            "XPO": 375
          }
        },
        {
          "departement": "47 - Lot et Garonne",
          "prix_par_transporteur": {
            "LACHAUD": 360,
            "MRCI": 389,
            "BETOTRANS": 398,
            "SCHENKER": 399,
            "VEYSSET": 430,
            "CONTE": 440,
            "XPO": 460
          }
        },
        {
          "departement": "48 - Lozère",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "BETOTRANS": 462,
            "SCHENKER": 488,
            "MRCI": 519,
            "XPO": 563,
            "CONTE": 610,
            "VEYSSET": 630
          }
        },
        {
          "departement": "49 - Maine et Loire",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 497,
            "SCHENKER": 499,
            "XPO": 575,
            "BETOTRANS": 614,
            "VEYSSET": 620,
            "CONTE": 650
          }
        },
        {
          "departement": "50 - Manche",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 809,
            "XPO": 932,
            "MRCI": 993,
            "VEYSSET": 1030,
            "BETOTRANS": 1064,
            "CONTE": 1134
          }
        },
        {
          "departement": "51 - Marne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 723,
            "MRCI": 843,
            "XPO": 859,
            "VEYSSET": 880,
            "CONTE": 1037,
            "BETOTRANS": 1105
          }
        },
        {
          "departement": "52 - Haute Marne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 676,
            "MRCI": 777,
            "XPO": 829,
            "VEYSSET": 910,
            "BETOTRANS": 967,
            "CONTE": 983
          }
        },
        {
          "departement": "53 - Mayenne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 578,
            "XPO": 666,
            "MRCI": 713,
            "VEYSSET": 750,
            "BETOTRANS": 767,
            "CONTE": 800
          }
        },
        {
          "departement": "54 - Meurthe et Moselle",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 738,
            "MRCI": 885,
            "XPO": 895,
            "VEYSSET": 910,
            "BETOTRANS": 1142,
            "CONTE": 1221
          }
        },
        {
          "departement": "55 - Meuse",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 761,
            "MRCI": 885,
            "XPO": 953,
            "VEYSSET": 960,
            "BETOTRANS": 1117,
            "CONTE": 1242
          }
        },
        {
          "departement": "56 - Morbihan",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 683,
            "MRCI": 777,
            "XPO": 787,
            "VEYSSET": 920,
            "CONTE": 960,
            "BETOTRANS": 971
          }
        },
        {
          "departement": "57 - Moselle",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 772,
            "XPO": 908,
            "VEYSSET": 980,
            "MRCI": 993,
            "BETOTRANS": 1234,
            "CONTE": 1286
          }
        },
        {
          "departement": "58 - Nièvre",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 465,
            "SCHENKER": 473,
            "XPO": 545,
            "BETOTRANS": 566,
            "VEYSSET": 620,
            "CONTE": 630
          }
        },
        {
          "departement": "59 - Nord",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 829,
            "MRCI": 908,
            "VEYSSET": 980,
            "XPO": 1016,
            "CONTE": 1240,
            "BETOTRANS": 1326
          }
        },
        {
          "departement": "60 - Oise",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 709,
            "MRCI": 746,
            "VEYSSET": 770,
            "XPO": 817,
            "BETOTRANS": 966,
            "CONTE": 1026
          }
        },
        {
          "departement": "61 - Orne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 609,
            "MRCI": 681,
            "XPO": 702,
            "VEYSSET": 810,
            "BETOTRANS": 845,
            "CONTE": 908
          }
        },
        {
          "departement": "62 - Pas de Calais",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 839,
            "MRCI": 908,
            "VEYSSET": 980,
            "XPO": 1029,
            "CONTE": 1240,
            "BETOTRANS": 1323
          }
        },
        {
          "departement": "63 - Puy de Dome",
          "prix_par_transporteur": {
            "SCHENKER": 345,
            "BETOTRANS": 371,
            "MRCI": 378,
            "VEYSSET": 390,
            "LACHAUD": 400,
            "XPO": 424,
            "CONTE": 425
          }
        },
        {
          "departement": "64 - Pyrénéés Atlantique",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "XPO": 424,
            "SCHENKER": 515,
            "MRCI": 594,
            "VEYSSET": 620,
            "CONTE": 681,
            "BETOTRANS": 685
          }
        },
        {
          "departement": "65 - Hautes Pyrénées",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 504,
            "XPO": 581,
            "MRCI": 594,
            "CONTE": 616,
            "VEYSSET": 620,
            "BETOTRANS": 656
          }
        },
        {
          "departement": "66 - Pyrénées Orientales",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 617,
            "VEYSSET": 620,
            "MRCI": 681,
            "XPO": 726,
            "CONTE": 740,
            "BETOTRANS": 751
          }
        },
        {
          "departement": "67 - Bas Rhin",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 839,
            "MRCI": 993,
            "XPO": 1029,
            "VEYSSET": 1030,
            "BETOTRANS": 1321,
            "CONTE": 1340
          }
        },
        {
          "departement": "68 - Haut Rhin",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 756,
            "MRCI": 843,
            "XPO": 871,
            "VEYSSET": 960,
            "BETOTRANS": 1112,
            "CONTE": 1188
          }
        },
        {
          "departement": "69 - Rhône",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 477,
            "MRCI": 502,
            "XPO": 590,
            "VEYSSET": 620,
            "BETOTRANS": 649,
            "CONTE": 665
          }
        },
        {
          "departement": "70 - Haute Saône",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 651,
            "XPO": 750,
            "MRCI": 777,
            "VEYSSET": 880,
            "BETOTRANS": 937,
            "CONTE": 1005
          }
        },
        {
          "departement": "71 - Saône et Loire",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 473,
            "MRCI": 589,
            "XPO": 593,
            "BETOTRANS": 672,
            "CONTE": 685,
            "VEYSSET": 700
          }
        },
        {
          "departement": "72 - Sarthe",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 525,
            "MRCI": 599,
            "XPO": 605,
            "VEYSSET": 670,
            "CONTE": 710,
            "BETOTRANS": 736
          }
        },
        {
          "departement": "73 - Savoie",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 651,
            "XPO": 750,
            "VEYSSET": 770,
            "MRCI": 843,
            "CONTE": 897,
            "BETOTRANS": 925
          }
        },
        {
          "departement": "74 - Haute Savoie",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 662,
            "XPO": 762,
            "MRCI": 777,
            "VEYSSET": 820,
            "BETOTRANS": 865,
            "CONTE": 962
          }
        },
        {
          "departement": "75 - Ile de France",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 618,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 826,
            "CONTE": 972
          }
        },
        {
          "departement": "76 - Seine Maritime",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 744,
            "MRCI": 777,
            "XPO": 883,
            "VEYSSET": 910,
            "BETOTRANS": 1013,
            "CONTE": 1065
          }
        },
        {
          "departement": "77 - Seine et Marne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 860,
            "CONTE": 929
          }
        },
        {
          "departement": "78 - Yvelines",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 876,
            "CONTE": 951
          }
        },
        {
          "departement": "79 - Deux Sèvres",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 389,
            "SCHENKER": 441,
            "BETOTRANS": 494,
            "XPO": 508,
            "CONTE": 545,
            "VEYSSET": 580
          }
        },
        {
          "departement": "80 - Somme",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 733,
            "MRCI": 777,
            "XPO": 871,
            "VEYSSET": 930,
            "BETOTRANS": 1066,
            "CONTE": 1118
          }
        },
        {
          "departement": "81 - Tarn",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "MRCI": 389,
            "SCHENKER": 424,
            "VEYSSET": 440,
            "BETOTRANS": 488,
            "CONTE": 520,
            "XPO": 520
          }
        },
        {
          "departement": "82 - Tarn et Garonne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "VEYSSET": 360,
            "SCHENKER": 367,
            "BETOTRANS": 387,
            "MRCI": 389,
            "CONTE": 411,
            "XPO": 460
          }
        },
        {
          "departement": "83 - Var",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 788,
            "MRCI": 908,
            "XPO": 908,
            "BETOTRANS": 1003,
            "VEYSSET": 1030,
            "CONTE": 1080
          }
        },
        {
          "departement": "84 - Vaucluse",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 609,
            "XPO": 702,
            "MRCI": 713,
            "BETOTRANS": 777,
            "VEYSSET": 880,
            "CONTE": 930
          }
        },
        {
          "departement": "85 - Vendée",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 525,
            "MRCI": 561,
            "XPO": 605,
            "CONTE": 620,
            "BETOTRANS": 624,
            "VEYSSET": 670
          }
        },
        {
          "departement": "86 - Vienne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 378,
            "MRCI": 389,
            "XPO": 436,
            "BETOTRANS": 443,
            "VEYSSET": 490,
            "CONTE": 500
          }
        },
        {
          "departement": "87 - Haute Vienne Zone A",
          "prix_par_transporteur": {
            "BETOTRANS": 315,
            "SCHENKER": 321,
            "LACHAUD": 330,
            "VEYSSET": 330,
            "CONTE": 335,
            "MRCI": 389,
            "XPO": 411
          }
        },
        {
          "departement": "87 - Haute Vienne Zone B",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 0,
            "BETOTRANS": 315,
            "CONTE": 335,
            "VEYSSET": 380,
            "MRCI": 389,
            "XPO": 411
          }
        },
        {
          "departement": "88 - Vosges",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 756,
            "XPO": 871,
            "MRCI": 885,
            "VEYSSET": 980,
            "CONTE": 1134,
            "BETOTRANS": 1137
          }
        },
        {
          "departement": "89 - Yonne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 544,
            "XPO": 653,
            "MRCI": 681,
            "BETOTRANS": 743,
            "CONTE": 780,
            "VEYSSET": 820
          }
        },
        {
          "departement": "90 - Teritoire de Belfort",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 735,
            "XPO": 847,
            "MRCI": 908,
            "VEYSSET": 910,
            "BETOTRANS": 974,
            "CONTE": 1048
          }
        },
        {
          "departement": "91 - Essonne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 758,
            "CONTE": 810
          }
        },
        {
          "departement": "92 - Hauts de Seine",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 833,
            "CONTE": 870
          }
        },
        {
          "departement": "93 - Seine St Denis",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 864,
            "CONTE": 870
          }
        },
        {
          "departement": "94 - Val de Marne",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 750,
            "BETOTRANS": 826,
            "CONTE": 870
          }
        },
        {
          "departement": "95 - Val d'Oise",
          "prix_par_transporteur": {
            "LACHAUD": 0,
            "SCHENKER": 615,
            "MRCI": 648,
            "VEYSSET": 720,
            "XPO": 787,
            "BETOTRANS": 869,
            "CONTE": 910
          }
        },
        {
          "departement": "BFA",
          "prix_par_transporteur": {
            "BETOTRANS": 0,
            "CONTE": 0,
            "LACHAUD": 0,
            "MRCI": 0,
            "SCHENKER": 0,
            "VEYSSET": 0,
            "XPO": 0
          }
        },
        {
          "departement": "Complément",
          "prix_par_transporteur": {
            "BETOTRANS": 0,
            "SCHENKER": 0,
            "LACHAUD": 50,
            "MRCI": 50,
            "XPO": 50,
            "CONTE": 55,
            "VEYSSET": 60
          }
        }
      ]
    }
  ]
};