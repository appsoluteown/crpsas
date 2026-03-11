import { TransportData } from './types';

export const TRANSPORT_DATA: TransportData = {
  "fichier": "Récap transports tarifs.xlsx",
  "description": "Grille tarifaire transport - France",
  "date_extraction": "2026-03-10",
  "feuilles": [
    {
      "nom": "Général - Taut",
      "type": "Taut",
      "info": "TAXE GAZOLE COMPRISE",
      "facteurs_taxe_gazole": {
        "BBL": 1.07,
        "GEODIS": 1.085,
        "KUEHNE": 1.065,
        "LACHAUD24": 1.1,
        "XPO": 1.06,
        "LAVILAINOISE": 1.02,
        "SCHENKER": 1.02,
        "MRCI": 1.06,
        "BETOTRANS": 1
      },
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
            "BBL": 679.45,
            "GEODIS": 641.24,
            "KUEHNE": 585.75,
            "LACHAUD24": 0,
            "XPO": 641.3,
            "LAVILAINOISE": 642.6,
            "SCHENKER": 585.48,
            "MRCI": 673.1,
            "BETOTRANS": 707.0
          }
        },
        {
          "departement": "10 - Aube",
          "prix_par_transporteur": {
            "BBL": 711.55,
            "GEODIS": 818.09,
            "KUEHNE": 681.6,
            "LACHAUD24": 0,
            "XPO": 694.3,
            "LAVILAINOISE": 836.4,
            "SCHENKER": 694.62,
            "MRCI": 721.86,
            "BETOTRANS": 962.0
          }
        },
        {
          "departement": "11 - Aude",
          "prix_par_transporteur": {
            "BBL": 518.95,
            "GEODIS": 488.25,
            "KUEHNE": 660.3,
            "LACHAUD24": 0,
            "XPO": 461.1,
            "LAVILAINOISE": 703.8,
            "SCHENKER": 487.56,
            "MRCI": 520.46,
            "BETOTRANS": 622.0
          }
        },
        {
          "departement": "12 - Aveyron ZONE A",
          "prix_par_transporteur": {
            "BBL": 406.6,
            "GEODIS": 413.38,
            "KUEHNE": 426.0,
            "LACHAUD24": 0,
            "XPO": 466.4,
            "LAVILAINOISE": 418.2,
            "SCHENKER": 426.36,
            "MRCI": 412.34,
            "BETOTRANS": 471.0
          }
        },
        {
          "departement": "12 - Aveyron ZONE B",
          "prix_par_transporteur": {
            "BBL": 406.6,
            "GEODIS": 413.38,
            "KUEHNE": 426.0,
            "LACHAUD24": 0,
            "XPO": 466.4,
            "LAVILAINOISE": 418.2,
            "SCHENKER": 426.36,
            "MRCI": 412.34,
            "BETOTRANS": 471.0
          }
        },
        {
          "departement": "13 - Bouches du Rhone",
          "prix_par_transporteur": {
            "BBL": 802.5,
            "GEODIS": 807.24,
            "KUEHNE": 820.05,
            "LACHAUD24": 0,
            "XPO": 816.2,
            "LAVILAINOISE": 814.98,
            "SCHENKER": 841.5,
            "MRCI": 823.62,
            "BETOTRANS": 896.0
          }
        },
        {
          "departement": "14 - Calvados",
          "prix_par_transporteur": {
            "BBL": 818.55,
            "GEODIS": 818.09,
            "KUEHNE": 777.45,
            "LACHAUD24": 0,
            "XPO": 757.9,
            "LAVILAINOISE": 999.6,
            "SCHENKER": 792.54,
            "MRCI": 823.62,
            "BETOTRANS": 891.0
          }
        },
        {
          "departement": "15 - Cantal ZONE A",
          "prix_par_transporteur": {
            "BBL": 342.4,
            "GEODIS": 272.33,
            "KUEHNE": 266.25,
            "LACHAUD24": 0,
            "XPO": 408.1,
            "LAVILAINOISE": 377.4,
            "SCHENKER": 304.98,
            "MRCI": 365.7,
            "BETOTRANS": 315.0
          }
        },
        {
          "departement": "15 - Cantal ZONE B",
          "prix_par_transporteur": {
            "BBL": 342.4,
            "GEODIS": 272.33,
            "KUEHNE": 266.25,
            "LACHAUD24": 0,
            "XPO": 408.1,
            "LAVILAINOISE": 377.4,
            "SCHENKER": 304.98,
            "MRCI": 365.7,
            "BETOTRANS": 315.0
          }
        },
        {
          "departement": "16 - Charente",
          "prix_par_transporteur": {
            "BBL": 374.5,
            "GEODIS": 326.58,
            "KUEHNE": 468.6,
            "LACHAUD24": 0,
            "XPO": 408.1,
            "LAVILAINOISE": 438.6,
            "SCHENKER": 348.84,
            "MRCI": 400.68,
            "BETOTRANS": 414.0
          }
        },
        {
          "departement": "17 - Charente Maritime",
          "prix_par_transporteur": {
            "BBL": 481.5,
            "GEODIS": 488.25,
            "KUEHNE": 500.55,
            "LACHAUD24": 0,
            "XPO": 524.7,
            "LAVILAINOISE": 561.0,
            "SCHENKER": 536.52,
            "MRCI": 492.9,
            "BETOTRANS": 596.0
          }
        },
        {
          "departement": "18 - Cher",
          "prix_par_transporteur": {
            "BBL": 476.15,
            "GEODIS": 456.78,
            "KUEHNE": 532.5,
            "LACHAUD24": 0,
            "XPO": 478.06,
            "LAVILAINOISE": 428.4,
            "SCHENKER": 463.08,
            "MRCI": 492.9,
            "BETOTRANS": 525.0
          }
        },
        {
          "departement": "19 - Correze ZONE A",
          "prix_par_transporteur": {
            "BBL": 310.3,
            "GEODIS": 270.16,
            "KUEHNE": 266.25,
            "LACHAUD24": 0,
            "XPO": 349.8,
            "LAVILAINOISE": 255.0,
            "SCHENKER": 280.5,
            "MRCI": 0,
            "BETOTRANS": 204.0
          }
        },
        {
          "departement": "19 - Corrèze ZONE B",
          "prix_par_transporteur": {
            "BBL": 310.3,
            "GEODIS": 270.16,
            "KUEHNE": 266.25,
            "LACHAUD24": 0,
            "XPO": 349.8,
            "LAVILAINOISE": 255.0,
            "SCHENKER": 280.5,
            "MRCI": 274.54,
            "BETOTRANS": 204.0
          }
        },
        {
          "departement": "2 - Aisne",
          "prix_par_transporteur": {
            "BBL": 786.45,
            "GEODIS": 899.46,
            "KUEHNE": 883.95,
            "LACHAUD24": 0,
            "XPO": 810.9,
            "LAVILAINOISE": 969.0,
            "SCHENKER": 829.26,
            "MRCI": 797.12,
            "BETOTRANS": 1080.0
          }
        },
        {
          "departement": "21 : Côte d'Or",
          "prix_par_transporteur": {
            "BBL": 759.7,
            "GEODIS": 695.49,
            "KUEHNE": 646.45,
            "LACHAUD24": 0,
            "XPO": 676.28,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 634.44,
            "MRCI": 790.76,
            "BETOTRANS": 792.0
          }
        },
        {
          "departement": "22 - Côtes d'Armor",
          "prix_par_transporteur": {
            "BBL": 1016.5,
            "GEODIS": 911.4,
            "KUEHNE": 820.05,
            "LACHAUD24": 0,
            "XPO": 862.84,
            "LAVILAINOISE": 1173.0,
            "SCHENKER": 901.68,
            "MRCI": 1065.3,
            "BETOTRANS": 1013.0
          }
        },
        {
          "departement": "23 - Creuse",
          "prix_par_transporteur": {
            "BBL": 353.1,
            "GEODIS": 300.55,
            "KUEHNE": 340.8,
            "LACHAUD24": 0,
            "XPO": 452.62,
            "LAVILAINOISE": 326.4,
            "SCHENKER": 341.7,
            "MRCI": 378.42,
            "BETOTRANS": 393.0
          }
        },
        {
          "departement": "24 - Dordogne ZONE A",
          "prix_par_transporteur": {
            "BBL": 321.0,
            "GEODIS": 272.33,
            "KUEHNE": 287.55,
            "LACHAUD24": 0,
            "XPO": 349.8,
            "LAVILAINOISE": 367.2,
            "SCHENKER": 335.58,
            "MRCI": 274.54,
            "BETOTRANS": 322.0
          }
        },
        {
          "departement": "24 - Dordogne ZONE B",
          "prix_par_transporteur": {
            "BBL": 321.0,
            "GEODIS": 272.33,
            "KUEHNE": 287.55,
            "LACHAUD24": 0,
            "XPO": 349.8,
            "LAVILAINOISE": 367.2,
            "SCHENKER": 335.58,
            "MRCI": 274.54,
            "BETOTRANS": 322.0
          }
        },
        {
          "departement": "25 - Doubs",
          "prix_par_transporteur": {
            "BBL": 716.9,
            "GEODIS": 785.54,
            "KUEHNE": 766.8,
            "LACHAUD24": 0,
            "XPO": 734.58,
            "LAVILAINOISE": 734.4,
            "SCHENKER": 706.86,
            "MRCI": 738.82,
            "BETOTRANS": 898.0
          }
        },
        {
          "departement": "26 - Drôme",
          "prix_par_transporteur": {
            "BBL": 716.9,
            "GEODIS": 669.44,
            "KUEHNE": 649.65,
            "LACHAUD24": 0,
            "XPO": 583.0,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 573.24,
            "MRCI": 664.62,
            "BETOTRANS": 925.0
          }
        },
        {
          "departement": "27 - Eure",
          "prix_par_transporteur": {
            "BBL": 775.75,
            "GEODIS": 742.14,
            "KUEHNE": 692.25,
            "LACHAUD24": 715.0,
            "XPO": 722.92,
            "LAVILAINOISE": 765.0,
            "SCHENKER": 694.62,
            "MRCI": 823.62,
            "BETOTRANS": 884.0
          }
        },
        {
          "departement": "28 - Eure et Loire",
          "prix_par_transporteur": {
            "BBL": 631.3,
            "GEODIS": 624.96,
            "KUEHNE": 639.0,
            "LACHAUD24": 649.0,
            "XPO": 641.3,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 670.14,
            "MRCI": 629.64,
            "BETOTRANS": 743.0
          }
        },
        {
          "departement": "29 - Finistère",
          "prix_par_transporteur": {
            "BBL": 1005.8,
            "GEODIS": 942.87,
            "KUEHNE": 947.85,
            "LACHAUD24": 0,
            "XPO": 904.18,
            "LAVILAINOISE": 1213.8,
            "SCHENKER": 944.52,
            "MRCI": 1065.3,
            "BETOTRANS": 1076.0
          }
        },
        {
          "departement": "3 - Allier",
          "prix_par_transporteur": {
            "BBL": 390.55,
            "GEODIS": 403.62,
            "KUEHNE": 362.1,
            "LACHAUD24": 0,
            "XPO": 449.44,
            "LAVILAINOISE": 438.6,
            "SCHENKER": 426.36,
            "MRCI": 386.9,
            "BETOTRANS": 492.0
          }
        },
        {
          "departement": "30 - Gard",
          "prix_par_transporteur": {
            "BBL": 738.3,
            "GEODIS": 711.76,
            "KUEHNE": 745.5,
            "LACHAUD24": 0,
            "XPO": 617.98,
            "LAVILAINOISE": 765.0,
            "SCHENKER": 670.14,
            "MRCI": 686.88,
            "BETOTRANS": 699.0
          }
        },
        {
          "departement": "31 - Haute Garonne",
          "prix_par_transporteur": {
            "BBL": 395.9,
            "GEODIS": 362.39,
            "KUEHNE": 351.45,
            "LACHAUD24": 0,
            "XPO": 524.7,
            "LAVILAINOISE": 489.6,
            "SCHENKER": 393.72,
            "MRCI": 405.98,
            "BETOTRANS": 475.0
          }
        },
        {
          "departement": "32 - Gers",
          "prix_par_transporteur": {
            "BBL": 470.8,
            "GEODIS": 362.39,
            "KUEHNE": 394.05,
            "LACHAUD24": 0,
            "XPO": 542.72,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 536.52,
            "MRCI": 480.18,
            "BETOTRANS": 568.0
          }
        },
        {
          "departement": "33 - Gironde ZONE A",
          "prix_par_transporteur": {
            "BBL": 395.9,
            "GEODIS": 362.39,
            "KUEHNE": 404.7,
            "LACHAUD24": 0,
            "XPO": 408.1,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 393.72,
            "MRCI": 400.68,
            "BETOTRANS": 428.0
          }
        },
        {
          "departement": "33 - Gironde ZONE B",
          "prix_par_transporteur": {
            "BBL": 395.9,
            "GEODIS": 362.39,
            "KUEHNE": 404.7,
            "LACHAUD24": 0,
            "XPO": 408.1,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 393.72,
            "MRCI": 400.68,
            "BETOTRANS": 428.0
          }
        },
        {
          "departement": "34 - Hérault",
          "prix_par_transporteur": {
            "BBL": 674.1,
            "GEODIS": 669.44,
            "KUEHNE": 724.2,
            "LACHAUD24": 0,
            "XPO": 617.98,
            "LAVILAINOISE": 571.2,
            "SCHENKER": 645.66,
            "MRCI": 629.64,
            "BETOTRANS": 607.0
          }
        },
        {
          "departement": "35 - Ille et VIlaine",
          "prix_par_transporteur": {
            "BBL": 823.9,
            "GEODIS": 770.35,
            "KUEHNE": 777.45,
            "LACHAUD24": 0,
            "XPO": 676.28,
            "LAVILAINOISE": 805.8,
            "SCHENKER": 670.14,
            "MRCI": 755.78,
            "BETOTRANS": 843.0
          }
        },
        {
          "departement": "36 - Indre",
          "prix_par_transporteur": {
            "BBL": 411.95,
            "GEODIS": 413.38,
            "KUEHNE": 404.7,
            "LACHAUD24": 473.0,
            "XPO": 524.7,
            "LAVILAINOISE": 408.0,
            "SCHENKER": 393.72,
            "MRCI": 412.34,
            "BETOTRANS": 443.0
          }
        },
        {
          "departement": "37 - Indre et Loire",
          "prix_par_transporteur": {
            "BBL": 535.0,
            "GEODIS": 493.68,
            "KUEHNE": 532.5,
            "LACHAUD24": 495.0,
            "XPO": 519.4,
            "LAVILAINOISE": 642.6,
            "SCHENKER": 524.28,
            "MRCI": 526.82,
            "BETOTRANS": 569.0
          }
        },
        {
          "departement": "38 - Isère",
          "prix_par_transporteur": {
            "BBL": 706.2,
            "GEODIS": 675.95,
            "KUEHNE": 617.7,
            "LACHAUD24": 0,
            "XPO": 617.98,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 585.48,
            "MRCI": 755.78,
            "BETOTRANS": 813.0
          }
        },
        {
          "departement": "39 - Jura",
          "prix_par_transporteur": {
            "BBL": 738.3,
            "GEODIS": 711.76,
            "KUEHNE": 745.5,
            "LACHAUD24": 0,
            "XPO": 641.3,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 609.96,
            "MRCI": 755.78,
            "BETOTRANS": 842.0
          }
        },
        {
          "departement": "4 - Alpes Haute Provence",
          "prix_par_transporteur": {
            "BBL": 1011.15,
            "GEODIS": 1007.96,
            "KUEHNE": 1065.0,
            "LACHAUD24": 0,
            "XPO": 874.5,
            "LAVILAINOISE": 1162.8,
            "SCHENKER": 913.92,
            "MRCI": 1032.44,
            "BETOTRANS": 1047.0
          }
        },
        {
          "departement": "40 - Landes",
          "prix_par_transporteur": {
            "BBL": 556.4,
            "GEODIS": 550.1,
            "KUEHNE": 543.15,
            "LACHAUD24": 0,
            "XPO": 524.7,
            "LAVILAINOISE": 744.6,
            "SCHENKER": 548.76,
            "MRCI": 550.14,
            "BETOTRANS": 639.0
          }
        },
        {
          "departement": "41 - Loir et Cher",
          "prix_par_transporteur": {
            "BBL": 529.65,
            "GEODIS": 493.68,
            "KUEHNE": 532.5,
            "LACHAUD24": 517.0,
            "XPO": 513.04,
            "LAVILAINOISE": 438.6,
            "SCHENKER": 524.28,
            "MRCI": 526.82,
            "BETOTRANS": 570.0
          }
        },
        {
          "departement": "42 - Loire",
          "prix_par_transporteur": {
            "BBL": 481.5,
            "GEODIS": 495.84,
            "KUEHNE": 479.25,
            "LACHAUD24": 0,
            "XPO": 554.38,
            "LAVILAINOISE": 438.6,
            "SCHENKER": 487.56,
            "MRCI": 492.9,
            "BETOTRANS": 471.0
          }
        },
        {
          "departement": "43 - Haute Loire",
          "prix_par_transporteur": {
            "BBL": 476.15,
            "GEODIS": 480.65,
            "KUEHNE": 426.0,
            "LACHAUD24": 0,
            "XPO": 524.7,
            "LAVILAINOISE": 469.2,
            "SCHENKER": 487.56,
            "MRCI": 492.9,
            "BETOTRANS": 479.0
          }
        },
        {
          "departement": "44 - Loire Atlantique",
          "prix_par_transporteur": {
            "BBL": 625.95,
            "GEODIS": 608.68,
            "KUEHNE": 575.1,
            "LACHAUD24": 0,
            "XPO": 641.3,
            "LAVILAINOISE": 591.6,
            "SCHENKER": 657.9,
            "MRCI": 641.3,
            "BETOTRANS": 717.0
          }
        },
        {
          "departement": "45 - Loiret",
          "prix_par_transporteur": {
            "BBL": 556.4,
            "GEODIS": 495.84,
            "KUEHNE": 575.1,
            "LACHAUD24": 594.0,
            "XPO": 554.38,
            "LAVILAINOISE": 581.4,
            "SCHENKER": 536.52,
            "MRCI": 526.82,
            "BETOTRANS": 617.0
          }
        },
        {
          "departement": "46 - Lot ZONE A",
          "prix_par_transporteur": {
            "BBL": 331.7,
            "GEODIS": 272.33,
            "KUEHNE": 266.25,
            "LACHAUD24": 0,
            "XPO": 361.46,
            "LAVILAINOISE": 438.6,
            "SCHENKER": 341.7,
            "MRCI": 343.44,
            "BETOTRANS": 321.0
          }
        },
        {
          "departement": "46 - Lot ZONE B",
          "prix_par_transporteur": {
            "BBL": 331.7,
            "GEODIS": 272.33,
            "KUEHNE": 266.25,
            "LACHAUD24": 0,
            "XPO": 361.46,
            "LAVILAINOISE": 438.6,
            "SCHENKER": 341.7,
            "MRCI": 343.44,
            "BETOTRANS": 321.0
          }
        },
        {
          "departement": "47 - Lot et Garonne",
          "prix_par_transporteur": {
            "BBL": 395.9,
            "GEODIS": 362.39,
            "KUEHNE": 426.0,
            "LACHAUD24": 0,
            "XPO": 443.08,
            "LAVILAINOISE": 561.0,
            "SCHENKER": 426.36,
            "MRCI": 412.34,
            "BETOTRANS": 398.0
          }
        },
        {
          "departement": "48 - Lozère",
          "prix_par_transporteur": {
            "BBL": 529.65,
            "GEODIS": 495.84,
            "KUEHNE": 426.0,
            "LACHAUD24": 0,
            "XPO": 542.72,
            "LAVILAINOISE": 479.4,
            "SCHENKER": 487.56,
            "MRCI": 550.14,
            "BETOTRANS": 462.0
          }
        },
        {
          "departement": "49 - Maine et Loire",
          "prix_par_transporteur": {
            "BBL": 588.5,
            "GEODIS": 608.68,
            "KUEHNE": 543.15,
            "LACHAUD24": 0,
            "XPO": 554.38,
            "LAVILAINOISE": 561.0,
            "SCHENKER": 562.02,
            "MRCI": 526.82,
            "BETOTRANS": 614.0
          }
        },
        {
          "departement": "5 - Hautes Alpes",
          "prix_par_transporteur": {
            "BBL": 1011.15,
            "GEODIS": 903.8,
            "KUEHNE": 1065.0,
            "LACHAUD24": 0,
            "XPO": 869.2,
            "LAVILAINOISE": 1132.2,
            "SCHENKER": 913.92,
            "MRCI": 1032.44,
            "BETOTRANS": 1022.0
          }
        },
        {
          "departement": "50 - Manche",
          "prix_par_transporteur": {
            "BBL": 984.4,
            "GEODIS": 917.91,
            "KUEHNE": 852.0,
            "LACHAUD24": 0,
            "XPO": 897.82,
            "LAVILAINOISE": 1050.6,
            "SCHENKER": 938.4,
            "MRCI": 1052.58,
            "BETOTRANS": 1064.0
          }
        },
        {
          "departement": "51 - Marne",
          "prix_par_transporteur": {
            "BBL": 856.0,
            "GEODIS": 959.14,
            "KUEHNE": 852.0,
            "LACHAUD24": 0,
            "XPO": 827.86,
            "LAVILAINOISE": 867.0,
            "SCHENKER": 792.54,
            "MRCI": 893.58,
            "BETOTRANS": 1105.0
          }
        },
        {
          "departement": "52 - Haute Marne",
          "prix_par_transporteur": {
            "BBL": 791.8,
            "GEODIS": 845.21,
            "KUEHNE": 830.7,
            "LACHAUD24": 0,
            "XPO": 799.24,
            "LAVILAINOISE": 765.0,
            "SCHENKER": 731.34,
            "MRCI": 823.62,
            "BETOTRANS": 967.0
          }
        },
        {
          "departement": "53 - Mayenne",
          "prix_par_transporteur": {
            "BBL": 716.9,
            "GEODIS": 712.85,
            "KUEHNE": 713.55,
            "LACHAUD24": 0,
            "XPO": 641.3,
            "LAVILAINOISE": 816.0,
            "SCHENKER": 670.14,
            "MRCI": 755.78,
            "BETOTRANS": 767.0
          }
        },
        {
          "departement": "54 - Meurthe et Moselle",
          "prix_par_transporteur": {
            "BBL": 898.8,
            "GEODIS": 1002.54,
            "KUEHNE": 937.2,
            "LACHAUD24": 0,
            "XPO": 862.84,
            "LAVILAINOISE": 918.0,
            "SCHENKER": 792.54,
            "MRCI": 938.1,
            "BETOTRANS": 1142.0
          }
        },
        {
          "departement": "55 - Meuse",
          "prix_par_transporteur": {
            "BBL": 898.8,
            "GEODIS": 1024.24,
            "KUEHNE": 894.6,
            "LACHAUD24": 0,
            "XPO": 919.02,
            "LAVILAINOISE": 918.0,
            "SCHENKER": 792.54,
            "MRCI": 938.1,
            "BETOTRANS": 1117.0
          }
        },
        {
          "departement": "56 - Morbihan",
          "prix_par_transporteur": {
            "BBL": 786.45,
            "GEODIS": 768.18,
            "KUEHNE": 809.4,
            "LACHAUD24": 0,
            "XPO": 757.9,
            "LAVILAINOISE": 918.0,
            "SCHENKER": 780.3,
            "MRCI": 823.62,
            "BETOTRANS": 971.0
          }
        },
        {
          "departement": "57 - Moselle",
          "prix_par_transporteur": {
            "BBL": 963.0,
            "GEODIS": 1074.15,
            "KUEHNE": 915.9,
            "LACHAUD24": 0,
            "XPO": 874.5,
            "LAVILAINOISE": 1040.4,
            "SCHENKER": 853.74,
            "MRCI": 1052.58,
            "BETOTRANS": 1234.0
          }
        },
        {
          "departement": "58 - Nièvre",
          "prix_par_transporteur": {
            "BBL": 513.6,
            "GEODIS": 493.68,
            "KUEHNE": 530.37,
            "LACHAUD24": 0,
            "XPO": 524.7,
            "LAVILAINOISE": 892.5,
            "SCHENKER": 487.56,
            "MRCI": 492.9,
            "BETOTRANS": 566.0
          }
        },
        {
          "departement": "59 - Nord",
          "prix_par_transporteur": {
            "BBL": 909.5,
            "GEODIS": 1018.81,
            "KUEHNE": 883.95,
            "LACHAUD24": 0,
            "XPO": 979.44,
            "LAVILAINOISE": 1071.0,
            "SCHENKER": 890.46,
            "MRCI": 962.48,
            "BETOTRANS": 1326.0
          }
        },
        {
          "departement": "6 - Alpes Maritime",
          "prix_par_transporteur": {
            "BBL": 1070.0,
            "GEODIS": 1058.96,
            "KUEHNE": 1065.0,
            "LACHAUD24": 0,
            "XPO": 991.1,
            "LAVILAINOISE": 1402.5,
            "SCHENKER": 1036.32,
            "MRCI": 1144.8,
            "BETOTRANS": 1165.0
          }
        },
        {
          "departement": "60 - Oise",
          "prix_par_transporteur": {
            "BBL": 743.65,
            "GEODIS": 825.68,
            "KUEHNE": 692.25,
            "LACHAUD24": 869.0,
            "XPO": 787.58,
            "LAVILAINOISE": 816.0,
            "SCHENKER": 792.54,
            "MRCI": 790.76,
            "BETOTRANS": 966.0
          }
        },
        {
          "departement": "61 - Orne",
          "prix_par_transporteur": {
            "BBL": 674.1,
            "GEODIS": 665.11,
            "KUEHNE": 713.55,
            "LACHAUD24": 0,
            "XPO": 676.28,
            "LAVILAINOISE": 805.8,
            "SCHENKER": 706.86,
            "MRCI": 721.86,
            "BETOTRANS": 845.0
          }
        },
        {
          "departement": "62 - Pas de Calais",
          "prix_par_transporteur": {
            "BBL": 909.5,
            "GEODIS": 1018.81,
            "KUEHNE": 883.95,
            "LACHAUD24": 0,
            "XPO": 991.1,
            "LAVILAINOISE": 969.0,
            "SCHENKER": 913.92,
            "MRCI": 962.48,
            "BETOTRANS": 1323.0
          }
        },
        {
          "departement": "63 - Puy de Dome",
          "prix_par_transporteur": {
            "BBL": 395.9,
            "GEODIS": 272.33,
            "KUEHNE": 340.8,
            "LACHAUD24": 0,
            "XPO": 408.1,
            "LAVILAINOISE": 326.4,
            "SCHENKER": 366.18,
            "MRCI": 400.68,
            "BETOTRANS": 371.0
          }
        },
        {
          "departement": "64 - Pyrénéés Atlantique",
          "prix_par_transporteur": {
            "BBL": 593.85,
            "GEODIS": 588.07,
            "KUEHNE": 532.5,
            "LACHAUD24": 0,
            "XPO": 571.34,
            "LAVILAINOISE": 867.0,
            "SCHENKER": 597.72,
            "MRCI": 629.64,
            "BETOTRANS": 685.0
          }
        },
        {
          "departement": "65 - Hautes Pyrénées",
          "prix_par_transporteur": {
            "BBL": 620.6,
            "GEODIS": 588.07,
            "KUEHNE": 564.45,
            "LACHAUD24": 0,
            "XPO": 559.68,
            "LAVILAINOISE": 867.0,
            "SCHENKER": 609.96,
            "MRCI": 629.64,
            "BETOTRANS": 656.0
          }
        },
        {
          "departement": "66 - Pyrénées Orientales",
          "prix_par_transporteur": {
            "BBL": 693.36,
            "GEODIS": 588.07,
            "KUEHNE": 692.25,
            "LACHAUD24": 0,
            "XPO": 699.6,
            "LAVILAINOISE": 907.8,
            "SCHENKER": 670.14,
            "MRCI": 721.86,
            "BETOTRANS": 751.0
          }
        },
        {
          "departement": "67 - Bas Rhin",
          "prix_par_transporteur": {
            "BBL": 1005.8,
            "GEODIS": 1130.57,
            "KUEHNE": 947.85,
            "LACHAUD24": 0,
            "XPO": 991.1,
            "LAVILAINOISE": 1071.0,
            "SCHENKER": 913.92,
            "MRCI": 1052.58,
            "BETOTRANS": 1321.0
          }
        },
        {
          "departement": "68 - Haut Rhin",
          "prix_par_transporteur": {
            "BBL": 861.35,
            "GEODIS": 1023.15,
            "KUEHNE": 926.55,
            "LACHAUD24": 0,
            "XPO": 839.52,
            "LAVILAINOISE": 969.0,
            "SCHENKER": 817.02,
            "MRCI": 893.58,
            "BETOTRANS": 1112.0
          }
        },
        {
          "departement": "69 - Rhône",
          "prix_par_transporteur": {
            "BBL": 545.7,
            "GEODIS": 552.26,
            "KUEHNE": 548.48,
            "LACHAUD24": 0,
            "XPO": 569.22,
            "LAVILAINOISE": 408.0,
            "SCHENKER": 499.8,
            "MRCI": 532.12,
            "BETOTRANS": 649.0
          }
        },
        {
          "departement": "7 - Ardèche",
          "prix_par_transporteur": {
            "BBL": 642.0,
            "GEODIS": 724.78,
            "KUEHNE": 649.65,
            "LACHAUD24": 0,
            "XPO": 573.46,
            "LAVILAINOISE": 703.8,
            "SCHENKER": 548.76,
            "MRCI": 659.32,
            "BETOTRANS": 589.0
          }
        },
        {
          "departement": "70 - Haute Saône",
          "prix_par_transporteur": {
            "BBL": 786.45,
            "GEODIS": 840.88,
            "KUEHNE": 820.05,
            "LACHAUD24": 0,
            "XPO": 722.92,
            "LAVILAINOISE": 836.4,
            "SCHENKER": 731.34,
            "MRCI": 823.62,
            "BETOTRANS": 937.0
          }
        },
        {
          "departement": "71 - Saône et Loire",
          "prix_par_transporteur": {
            "BBL": 631.3,
            "GEODIS": 588.07,
            "KUEHNE": 649.65,
            "LACHAUD24": 0,
            "XPO": 571.34,
            "LAVILAINOISE": 448.8,
            "SCHENKER": 463.08,
            "MRCI": 624.34,
            "BETOTRANS": 672.0
          }
        },
        {
          "departement": "72 - Sarthe",
          "prix_par_transporteur": {
            "BBL": 604.55,
            "GEODIS": 712.85,
            "KUEHNE": 660.3,
            "LACHAUD24": 0,
            "XPO": 583.0,
            "LAVILAINOISE": 693.6,
            "SCHENKER": 609.96,
            "MRCI": 634.94,
            "BETOTRANS": 736.0
          }
        },
        {
          "departement": "73 - Savoie",
          "prix_par_transporteur": {
            "BBL": 749.0,
            "GEODIS": 712.85,
            "KUEHNE": 692.25,
            "LACHAUD24": 0,
            "XPO": 722.92,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 670.14,
            "MRCI": 893.58,
            "BETOTRANS": 925.0
          }
        },
        {
          "departement": "74 - Haute Savoie",
          "prix_par_transporteur": {
            "BBL": 749.0,
            "GEODIS": 712.85,
            "KUEHNE": 766.8,
            "LACHAUD24": 0,
            "XPO": 734.58,
            "LAVILAINOISE": 907.8,
            "SCHENKER": 670.14,
            "MRCI": 823.62,
            "BETOTRANS": 865.0
          }
        },
        {
          "departement": "75 - Ile de France",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 0,
            "XPO": 722.92,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 670.54,
            "MRCI": 686.88,
            "BETOTRANS": 826.0
          }
        },
        {
          "departement": "76 - Seine Maritime",
          "prix_par_transporteur": {
            "BBL": 791.8,
            "GEODIS": 903.8,
            "KUEHNE": 830.7,
            "LACHAUD24": 0,
            "XPO": 851.18,
            "LAVILAINOISE": 897.6,
            "SCHENKER": 817.02,
            "MRCI": 823.62,
            "BETOTRANS": 1013.0
          }
        },
        {
          "departement": "77 - Seine et Marne",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 722.92,
            "LAVILAINOISE": 663.0,
            "SCHENKER": 670.14,
            "MRCI": 686.88,
            "BETOTRANS": 860.0
          }
        },
        {
          "departement": "78 - Yvelines",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 722.92,
            "LAVILAINOISE": 693.6,
            "SCHENKER": 670.14,
            "MRCI": 686.88,
            "BETOTRANS": 876.0
          }
        },
        {
          "departement": "79 - Deux Sèvres",
          "prix_par_transporteur": {
            "BBL": 438.7,
            "GEODIS": 488.25,
            "KUEHNE": 479.25,
            "LACHAUD24": 0,
            "XPO": 489.72,
            "LAVILAINOISE": 459.0,
            "SCHENKER": 487.56,
            "MRCI": 412.34,
            "BETOTRANS": 494.0
          }
        },
        {
          "departement": "8 - Ardennes",
          "prix_par_transporteur": {
            "BBL": 946.95,
            "GEODIS": 1029.66,
            "KUEHNE": 905.25,
            "LACHAUD24": 0,
            "XPO": 909.48,
            "LAVILAINOISE": 1111.8,
            "SCHENKER": 913.92,
            "MRCI": 962.48,
            "BETOTRANS": 1207.0
          }
        },
        {
          "departement": "80 - Somme",
          "prix_par_transporteur": {
            "BBL": 829.25,
            "GEODIS": 903.8,
            "KUEHNE": 798.75,
            "LACHAUD24": 0,
            "XPO": 839.52,
            "LAVILAINOISE": 856.8,
            "SCHENKER": 792.54,
            "MRCI": 823.62,
            "BETOTRANS": 1066.0
          }
        },
        {
          "departement": "81 - Tarn",
          "prix_par_transporteur": {
            "BBL": 406.6,
            "GEODIS": 413.38,
            "KUEHNE": 319.5,
            "LACHAUD24": 0,
            "XPO": 501.38,
            "LAVILAINOISE": 540.6,
            "SCHENKER": 463.08,
            "MRCI": 412.34,
            "BETOTRANS": 488.0
          }
        },
        {
          "departement": "82 - Tarn et Garonne",
          "prix_par_transporteur": {
            "BBL": 379.85,
            "GEODIS": 397.11,
            "KUEHNE": 319.5,
            "LACHAUD24": 0,
            "XPO": 443.08,
            "LAVILAINOISE": 418.2,
            "SCHENKER": 348.84,
            "MRCI": 412.34,
            "BETOTRANS": 387.0
          }
        },
        {
          "departement": "83 - Var",
          "prix_par_transporteur": {
            "BBL": 898.8,
            "GEODIS": 969.99,
            "KUEHNE": 926.55,
            "LACHAUD24": 0,
            "XPO": 874.5,
            "LAVILAINOISE": 1173.0,
            "SCHENKER": 913.92,
            "MRCI": 962.48,
            "BETOTRANS": 1003.0
          }
        },
        {
          "departement": "84 - Vaucluse",
          "prix_par_transporteur": {
            "BBL": 749.0,
            "GEODIS": 825.68,
            "KUEHNE": 750.82,
            "LACHAUD24": 0,
            "XPO": 676.28,
            "LAVILAINOISE": 749.7,
            "SCHENKER": 706.86,
            "MRCI": 755.78,
            "BETOTRANS": 777.0
          }
        },
        {
          "departement": "85 - Vendée",
          "prix_par_transporteur": {
            "BBL": 599.2,
            "GEODIS": 695.49,
            "KUEHNE": 553.8,
            "LACHAUD24": 0,
            "XPO": 583.0,
            "LAVILAINOISE": 581.4,
            "SCHENKER": 597.72,
            "MRCI": 594.66,
            "BETOTRANS": 624.0
          }
        },
        {
          "departement": "86 - Vienne",
          "prix_par_transporteur": {
            "BBL": 417.3,
            "GEODIS": 413.38,
            "KUEHNE": 426.0,
            "LACHAUD24": 0,
            "XPO": 419.76,
            "LAVILAINOISE": 428.4,
            "SCHENKER": 401.88,
            "MRCI": 412.34,
            "BETOTRANS": 443.0
          }
        },
        {
          "departement": "87 - Haute Vienne Zone A",
          "prix_par_transporteur": {
            "BBL": 342.4,
            "GEODIS": 272.33,
            "KUEHNE": 308.85,
            "LACHAUD24": 0,
            "XPO": 396.44,
            "LAVILAINOISE": 306.0,
            "SCHENKER": 341.7,
            "MRCI": 412.34,
            "BETOTRANS": 315.0
          }
        },
        {
          "departement": "87 - Haute Vienne Zone B",
          "prix_par_transporteur": {
            "BBL": 342.4,
            "GEODIS": 272.33,
            "KUEHNE": 308.85,
            "LACHAUD24": 0,
            "XPO": 396.44,
            "LAVILAINOISE": 306.0,
            "SCHENKER": 341.7,
            "MRCI": 412.34,
            "BETOTRANS": 315.0
          }
        },
        {
          "departement": "88 - Vosges",
          "prix_par_transporteur": {
            "BBL": 898.8,
            "GEODIS": 968.9,
            "KUEHNE": 883.95,
            "LACHAUD24": 0,
            "XPO": 839.52,
            "LAVILAINOISE": 1122.0,
            "SCHENKER": 792.54,
            "MRCI": 938.1,
            "BETOTRANS": 1137.0
          }
        },
        {
          "departement": "89 - Yonne",
          "prix_par_transporteur": {
            "BBL": 682.66,
            "GEODIS": 604.35,
            "KUEHNE": 585.75,
            "LACHAUD24": 0,
            "XPO": 629.64,
            "LAVILAINOISE": 601.8,
            "SCHENKER": 597.72,
            "MRCI": 721.86,
            "BETOTRANS": 743.0
          }
        },
        {
          "departement": "9 - Ariège",
          "prix_par_transporteur": {
            "BBL": 535.0,
            "GEODIS": 488.25,
            "KUEHNE": 532.5,
            "LACHAUD24": 0,
            "XPO": 524.7,
            "LAVILAINOISE": 703.8,
            "SCHENKER": 524.28,
            "MRCI": 550.14,
            "BETOTRANS": 536.0
          }
        },
        {
          "departement": "90 - Teritoire de Belfort",
          "prix_par_transporteur": {
            "BBL": 909.5,
            "GEODIS": 909.23,
            "KUEHNE": 809.4,
            "LACHAUD24": 0,
            "XPO": 816.2,
            "LAVILAINOISE": 1142.4,
            "SCHENKER": 792.54,
            "MRCI": 962.48,
            "BETOTRANS": 974.0
          }
        },
        {
          "departement": "91 - Essonne",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 722.92,
            "LAVILAINOISE": 652.8,
            "SCHENKER": 682.38,
            "MRCI": 686.88,
            "BETOTRANS": 785.0
          }
        },
        {
          "departement": "92 - Hauts de Seine",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 722.92,
            "LAVILAINOISE": 652.8,
            "SCHENKER": 682.38,
            "MRCI": 686.88,
            "BETOTRANS": 833.0
          }
        },
        {
          "departement": "93 - Seine St Denis",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 722.92,
            "LAVILAINOISE": 678.3,
            "SCHENKER": 682.38,
            "MRCI": 686.88,
            "BETOTRANS": 864.0
          }
        },
        {
          "departement": "94 - Val de Marne",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 722.92,
            "LAVILAINOISE": 652.8,
            "SCHENKER": 682.38,
            "MRCI": 686.88,
            "BETOTRANS": 826.0
          }
        },
        {
          "departement": "95 - Val d'Oise",
          "prix_par_transporteur": {
            "BBL": 652.7,
            "GEODIS": 716.1,
            "KUEHNE": 649.65,
            "LACHAUD24": 676.5,
            "XPO": 757.9,
            "LAVILAINOISE": 714.0,
            "SCHENKER": 682.38,
            "MRCI": 686.88,
            "BETOTRANS": 869.0
          }
        },
        {
          "departement": "BFA",
          "prix_par_transporteur": {
            "BBL": 0,
            "GEODIS": 0,
            "KUEHNE": 0,
            "LACHAUD24": 0,
            "XPO": 0,
            "LAVILAINOISE": 0,
            "SCHENKER": 0,
            "MRCI": 0,
            "BETOTRANS": 0.0
          }
        },
        {
          "departement": "Complément",
          "prix_par_transporteur": {
            "BBL": 0,
            "GEODIS": 0,
            "KUEHNE": 53.25,
            "LACHAUD24": 0,
            "XPO": 53.0,
            "LAVILAINOISE": 0,
            "SCHENKER": 0,
            "MRCI": 53.0,
            "BETOTRANS": 0.0
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
            "CONTE": 726.0,
            "VEYSSET": 670.0,
            "XPO": 666.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 707.0,
            "SCHENKER": 574.0,
            "MRCI": 635.0
          }
        },
        {
          "departement": "10 - Aube",
          "prix_par_transporteur": {
            "CONTE": 1015.0,
            "VEYSSET": 880.0,
            "XPO": 720.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 962.0,
            "SCHENKER": 681.0,
            "MRCI": 681.0
          }
        },
        {
          "departement": "11 - Aude",
          "prix_par_transporteur": {
            "CONTE": 611.0,
            "VEYSSET": 550.0,
            "XPO": 478.0,
            "LACHAUD": 425.0,
            "BETOTRANS": 622.0,
            "SCHENKER": 478.0,
            "MRCI": 491.0
          }
        },
        {
          "departement": "12 - Aveyron ZONE A",
          "prix_par_transporteur": {
            "CONTE": 505.0,
            "VEYSSET": 580.0,
            "XPO": 484.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 471.0,
            "SCHENKER": 418.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "12 - Aveyron ZONE B",
          "prix_par_transporteur": {
            "CONTE": 650.0,
            "VEYSSET": 580.0,
            "XPO": 484.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 471.0,
            "SCHENKER": 418.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "13 - Bouches du Rhone",
          "prix_par_transporteur": {
            "CONTE": 1004.0,
            "VEYSSET": 930.0,
            "XPO": 847.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 896.0,
            "SCHENKER": 825.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "14 - Calvados",
          "prix_par_transporteur": {
            "CONTE": 1026.0,
            "VEYSSET": 880.0,
            "XPO": 787.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 981.0,
            "SCHENKER": 777.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "15 - Cantal ZONE A",
          "prix_par_transporteur": {
            "CONTE": 300.0,
            "VEYSSET": 350.0,
            "XPO": 424.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 315.0,
            "SCHENKER": 299.0,
            "MRCI": 345.0
          }
        },
        {
          "departement": "15 - Cantal ZONE B",
          "prix_par_transporteur": {
            "CONTE": 470.0,
            "VEYSSET": 400.0,
            "XPO": 424.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 315.0,
            "SCHENKER": 299.0,
            "MRCI": 345.0
          }
        },
        {
          "departement": "16 - Charente",
          "prix_par_transporteur": {
            "CONTE": 445.0,
            "VEYSSET": 390.0,
            "XPO": 424.0,
            "LACHAUD": 425.0,
            "BETOTRANS": 414.0,
            "SCHENKER": 342.0,
            "MRCI": 378.0
          }
        },
        {
          "departement": "17 - Charente Maritime",
          "prix_par_transporteur": {
            "CONTE": 505.0,
            "VEYSSET": 520.0,
            "XPO": 545.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 596.0,
            "SCHENKER": 526.0,
            "MRCI": 465.0
          }
        },
        {
          "departement": "18 - Cher",
          "prix_par_transporteur": {
            "CONTE": 530.0,
            "VEYSSET": 540.0,
            "XPO": 496.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 525.0,
            "SCHENKER": 454.0,
            "MRCI": 465.0
          }
        },
        {
          "departement": "19 - Correze ZONE A",
          "prix_par_transporteur": {
            "CONTE": 205.0,
            "VEYSSET": 260.0,
            "XPO": 363.0,
            "LACHAUD": 278.0,
            "BETOTRANS": 204.0,
            "SCHENKER": 275.0,
            "MRCI": 259.0
          }
        },
        {
          "departement": "19 - Corrèze ZONE B",
          "prix_par_transporteur": {
            "CONTE": 310.0,
            "VEYSSET": 360.0,
            "XPO": 363.0,
            "LACHAUD": 278.0,
            "BETOTRANS": 204.0,
            "SCHENKER": 275.0,
            "MRCI": 259.0
          }
        },
        {
          "departement": "2 - Aisne",
          "prix_par_transporteur": {
            "CONTE": 1036.0,
            "VEYSSET": 880.0,
            "XPO": 841.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1080.0,
            "SCHENKER": 813.0,
            "MRCI": 752.0
          }
        },
        {
          "departement": "21 : Côte d'Or",
          "prix_par_transporteur": {
            "CONTE": 851.0,
            "VEYSSET": 770.0,
            "XPO": 702.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 792.0,
            "SCHENKER": 622.0,
            "MRCI": 746.0
          }
        },
        {
          "departement": "22 - Côtes d'Armor",
          "prix_par_transporteur": {
            "CONTE": 1053.0,
            "VEYSSET": 980.0,
            "XPO": 895.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1013.0,
            "SCHENKER": 884.0,
            "MRCI": 1005.0
          }
        },
        {
          "departement": "23 - Creuse",
          "prix_par_transporteur": {
            "CONTE": 415.0,
            "VEYSSET": 410.0,
            "XPO": 469.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 393.0,
            "SCHENKER": 335.0,
            "MRCI": 357.0
          }
        },
        {
          "departement": "24 - Dordogne ZONE A",
          "prix_par_transporteur": {
            "CONTE": 350.0,
            "VEYSSET": 320.0,
            "XPO": 363.0,
            "LACHAUD": 278.0,
            "BETOTRANS": 322.0,
            "SCHENKER": 329.0,
            "MRCI": 259.0
          }
        },
        {
          "departement": "24 - Dordogne ZONE B",
          "prix_par_transporteur": {
            "CONTE": 390.0,
            "VEYSSET": 370.0,
            "XPO": 363.0,
            "LACHAUD": 278.0,
            "BETOTRANS": 322.0,
            "SCHENKER": 329.0,
            "MRCI": 259.0
          }
        },
        {
          "departement": "25 - Doubs",
          "prix_par_transporteur": {
            "CONTE": 982.0,
            "VEYSSET": 820.0,
            "XPO": 762.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 898.0,
            "SCHENKER": 693.0,
            "MRCI": 697.0
          }
        },
        {
          "departement": "26 - Drôme",
          "prix_par_transporteur": {
            "CONTE": 875.0,
            "VEYSSET": 840.0,
            "XPO": 605.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 925.0,
            "SCHENKER": 562.0,
            "MRCI": 627.0
          }
        },
        {
          "departement": "27 - Eure",
          "prix_par_transporteur": {
            "CONTE": 1015.0,
            "VEYSSET": 930.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 884.0,
            "SCHENKER": 681.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "28 - Eure et Loire",
          "prix_par_transporteur": {
            "CONTE": 770.0,
            "VEYSSET": 670.0,
            "XPO": 666.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 743.0,
            "SCHENKER": 657.0,
            "MRCI": 594.0
          }
        },
        {
          "departement": "29 - Finistère",
          "prix_par_transporteur": {
            "CONTE": 1192.0,
            "VEYSSET": 1010.0,
            "XPO": 938.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1076.0,
            "SCHENKER": 926.0,
            "MRCI": 1005.0
          }
        },
        {
          "departement": "3 - Allier",
          "prix_par_transporteur": {
            "CONTE": 484.0,
            "VEYSSET": 450.0,
            "XPO": 466.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 492.0,
            "SCHENKER": 418.0,
            "MRCI": 365.0
          }
        },
        {
          "departement": "30 - Gard",
          "prix_par_transporteur": {
            "CONTE": 879.0,
            "VEYSSET": 820.0,
            "XPO": 641.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 699.0,
            "SCHENKER": 657.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "31 - Haute Garonne",
          "prix_par_transporteur": {
            "CONTE": 435.0,
            "VEYSSET": 390.0,
            "XPO": 545.0,
            "LACHAUD": 341.0,
            "BETOTRANS": 475.0,
            "SCHENKER": 386.0,
            "MRCI": 383.0
          }
        },
        {
          "departement": "32 - Gers",
          "prix_par_transporteur": {
            "CONTE": 515.0,
            "VEYSSET": 490.0,
            "XPO": 563.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 568.0,
            "SCHENKER": 526.0,
            "MRCI": 453.0
          }
        },
        {
          "departement": "33 - Gironde ZONE A",
          "prix_par_transporteur": {
            "CONTE": 410.0,
            "VEYSSET": 390.0,
            "XPO": 424.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 428.0,
            "SCHENKER": 386.0,
            "MRCI": 378.0
          }
        },
        {
          "departement": "33 - Gironde ZONE B",
          "prix_par_transporteur": {
            "CONTE": 510.0,
            "VEYSSET": 390.0,
            "XPO": 424.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 428.0,
            "SCHENKER": 386.0,
            "MRCI": 378.0
          }
        },
        {
          "departement": "34 - Hérault",
          "prix_par_transporteur": {
            "CONTE": 717.0,
            "VEYSSET": 720.0,
            "XPO": 641.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 607.0,
            "SCHENKER": 633.0,
            "MRCI": 594.0
          }
        },
        {
          "departement": "35 - Ille et VIlaine",
          "prix_par_transporteur": {
            "CONTE": 919.0,
            "VEYSSET": 820.0,
            "XPO": 702.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 843.0,
            "SCHENKER": 657.0,
            "MRCI": 713.0
          }
        },
        {
          "departement": "36 - Indre",
          "prix_par_transporteur": {
            "CONTE": 525.0,
            "VEYSSET": 460.0,
            "XPO": 545.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 443.0,
            "SCHENKER": 386.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "37 - Indre et Loire",
          "prix_par_transporteur": {
            "CONTE": 611.0,
            "VEYSSET": 570.0,
            "XPO": 538.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 569.0,
            "SCHENKER": 514.0,
            "MRCI": 497.0
          }
        },
        {
          "departement": "38 - Isère",
          "prix_par_transporteur": {
            "CONTE": 802.0,
            "VEYSSET": 760.0,
            "XPO": 641.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 813.0,
            "SCHENKER": 574.0,
            "MRCI": 713.0
          }
        },
        {
          "departement": "39 - Jura",
          "prix_par_transporteur": {
            "CONTE": 873.0,
            "VEYSSET": 800.0,
            "XPO": 666.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 842.0,
            "SCHENKER": 598.0,
            "MRCI": 713.0
          }
        },
        {
          "departement": "4 - Alpes Haute Provence",
          "prix_par_transporteur": {
            "CONTE": 1086.0,
            "VEYSSET": 1240.0,
            "XPO": 908.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1047.0,
            "SCHENKER": 896.0,
            "MRCI": 974.0
          }
        },
        {
          "departement": "40 - Landes",
          "prix_par_transporteur": {
            "CONTE": 601.0,
            "VEYSSET": 540.0,
            "XPO": 495.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 639.0,
            "SCHENKER": 538.0,
            "MRCI": 519.0
          }
        },
        {
          "departement": "41 - Loir et Cher",
          "prix_par_transporteur": {
            "CONTE": 606.0,
            "VEYSSET": 620.0,
            "XPO": 532.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 570.0,
            "SCHENKER": 514.0,
            "MRCI": 497.0
          }
        },
        {
          "departement": "42 - Loire",
          "prix_par_transporteur": {
            "CONTE": 657.0,
            "VEYSSET": 580.0,
            "XPO": 575.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 516.0,
            "SCHENKER": 478.0,
            "MRCI": 465.0
          }
        },
        {
          "departement": "43 - Haute Loire",
          "prix_par_transporteur": {
            "CONTE": 581.0,
            "VEYSSET": 580.0,
            "XPO": 545.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 479.0,
            "SCHENKER": 478.0,
            "MRCI": 465.0
          }
        },
        {
          "departement": "44 - Loire Atlantique",
          "prix_par_transporteur": {
            "CONTE": 722.0,
            "VEYSSET": 670.0,
            "XPO": 666.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 717.0,
            "SCHENKER": 645.0,
            "MRCI": 605.0
          }
        },
        {
          "departement": "45 - Loiret",
          "prix_par_transporteur": {
            "CONTE": 722.0,
            "VEYSSET": 600.0,
            "XPO": 575.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 617.0,
            "SCHENKER": 526.0,
            "MRCI": 497.0
          }
        },
        {
          "departement": "46 - Lot ZONE A",
          "prix_par_transporteur": {
            "CONTE": 290.0,
            "VEYSSET": 300.0,
            "XPO": 375.0,
            "LACHAUD": 362.0,
            "BETOTRANS": 321.0,
            "SCHENKER": 335.0,
            "MRCI": 324.0
          }
        },
        {
          "departement": "46 - Lot ZONE B",
          "prix_par_transporteur": {
            "CONTE": 380.0,
            "VEYSSET": 360.0,
            "XPO": 375.0,
            "LACHAUD": 362.0,
            "BETOTRANS": 321.0,
            "SCHENKER": 335.0,
            "MRCI": 324.0
          }
        },
        {
          "departement": "47 - Lot et Garonne",
          "prix_par_transporteur": {
            "CONTE": 445.0,
            "VEYSSET": 430.0,
            "XPO": 460.0,
            "LACHAUD": 360.0,
            "BETOTRANS": 398.0,
            "SCHENKER": 418.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "48 - Lozère",
          "prix_par_transporteur": {
            "CONTE": 650.0,
            "VEYSSET": 630.0,
            "XPO": 563.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 462.0,
            "SCHENKER": 478.0,
            "MRCI": 519.0
          }
        },
        {
          "departement": "49 - Maine et Loire",
          "prix_par_transporteur": {
            "CONTE": 660.0,
            "VEYSSET": 620.0,
            "XPO": 575.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 614.0,
            "SCHENKER": 551.0,
            "MRCI": 497.0
          }
        },
        {
          "departement": "5 - Hautes Alpes",
          "prix_par_transporteur": {
            "CONTE": 1015.0,
            "VEYSSET": 1180.0,
            "XPO": 901.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1022.0,
            "SCHENKER": 896.0,
            "MRCI": 974.0
          }
        },
        {
          "departement": "50 - Manche",
          "prix_par_transporteur": {
            "CONTE": 1145.0,
            "VEYSSET": 1030.0,
            "XPO": 932.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1064.0,
            "SCHENKER": 920.0,
            "MRCI": 993.0
          }
        },
        {
          "departement": "51 - Marne",
          "prix_par_transporteur": {
            "CONTE": 1048.0,
            "VEYSSET": 880.0,
            "XPO": 859.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1105.0,
            "SCHENKER": 777.0,
            "MRCI": 843.0
          }
        },
        {
          "departement": "52 - Haute Marne",
          "prix_par_transporteur": {
            "CONTE": 993.0,
            "VEYSSET": 910.0,
            "XPO": 829.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 967.0,
            "SCHENKER": 717.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "53 - Mayenne",
          "prix_par_transporteur": {
            "CONTE": 808.0,
            "VEYSSET": 750.0,
            "XPO": 666.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 767.0,
            "SCHENKER": 657.0,
            "MRCI": 713.0
          }
        },
        {
          "departement": "54 - Meurthe et Moselle",
          "prix_par_transporteur": {
            "CONTE": 1233.0,
            "VEYSSET": 910.0,
            "XPO": 895.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1142.0,
            "SCHENKER": 777.0,
            "MRCI": 885.0
          }
        },
        {
          "departement": "55 - Meuse",
          "prix_par_transporteur": {
            "CONTE": 1254.0,
            "VEYSSET": 960.0,
            "XPO": 953.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1117.0,
            "SCHENKER": 777.0,
            "MRCI": 885.0
          }
        },
        {
          "departement": "56 - Morbihan",
          "prix_par_transporteur": {
            "CONTE": 970.0,
            "VEYSSET": 920.0,
            "XPO": 787.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 971.0,
            "SCHENKER": 765.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "57 - Moselle",
          "prix_par_transporteur": {
            "CONTE": 1299.0,
            "VEYSSET": 980.0,
            "XPO": 908.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1234.0,
            "SCHENKER": 837.0,
            "MRCI": 993.0
          }
        },
        {
          "departement": "58 - Nièvre",
          "prix_par_transporteur": {
            "CONTE": 636.0,
            "VEYSSET": 620.0,
            "XPO": 545.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 566.0,
            "SCHENKER": 478.0,
            "MRCI": 465.0
          }
        },
        {
          "departement": "59 - Nord",
          "prix_par_transporteur": {
            "CONTE": 1252.0,
            "VEYSSET": 980.0,
            "XPO": 1016.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1326.0,
            "SCHENKER": 873.0,
            "MRCI": 908.0
          }
        },
        {
          "departement": "6 - Alpes Maritime",
          "prix_par_transporteur": {
            "CONTE": 1206.0,
            "VEYSSET": 1130.0,
            "XPO": 1029.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1165.0,
            "SCHENKER": 1016.0,
            "MRCI": 1080.0
          }
        },
        {
          "departement": "60 - Oise",
          "prix_par_transporteur": {
            "CONTE": 1036.0,
            "VEYSSET": 770.0,
            "XPO": 817.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 966.0,
            "SCHENKER": 777.0,
            "MRCI": 746.0
          }
        },
        {
          "departement": "61 - Orne",
          "prix_par_transporteur": {
            "CONTE": 917.0,
            "VEYSSET": 810.0,
            "XPO": 702.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 845.0,
            "SCHENKER": 693.0,
            "MRCI": 681.0
          }
        },
        {
          "departement": "62 - Pas de Calais",
          "prix_par_transporteur": {
            "CONTE": 1252.0,
            "VEYSSET": 980.0,
            "XPO": 1029.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1323.0,
            "SCHENKER": 896.0,
            "MRCI": 908.0
          }
        },
        {
          "departement": "63 - Puy de Dome",
          "prix_par_transporteur": {
            "CONTE": 430.0,
            "VEYSSET": 390.0,
            "XPO": 424.0,
            "LACHAUD": 400.0,
            "BETOTRANS": 371.0,
            "SCHENKER": 359.0,
            "MRCI": 378.0
          }
        },
        {
          "departement": "64 - Pyrénéés Atlantique",
          "prix_par_transporteur": {
            "CONTE": 690.0,
            "VEYSSET": 620.0,
            "XPO": 424.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 685.0,
            "SCHENKER": 586.0,
            "MRCI": 594.0
          }
        },
        {
          "departement": "65 - Hautes Pyrénées",
          "prix_par_transporteur": {
            "CONTE": 622.0,
            "VEYSSET": 620.0,
            "XPO": 581.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 656.0,
            "SCHENKER": 598.0,
            "MRCI": 594.0
          }
        },
        {
          "departement": "66 - Pyrénées Orientales",
          "prix_par_transporteur": {
            "CONTE": 750.0,
            "VEYSSET": 620.0,
            "XPO": 726.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 751.0,
            "SCHENKER": 657.0,
            "MRCI": 681.0
          }
        },
        {
          "departement": "67 - Bas Rhin",
          "prix_par_transporteur": {
            "CONTE": 1353.0,
            "VEYSSET": 1030.0,
            "XPO": 1029.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1321.0,
            "SCHENKER": 896.0,
            "MRCI": 993.0
          }
        },
        {
          "departement": "68 - Haut Rhin",
          "prix_par_transporteur": {
            "CONTE": 1200.0,
            "VEYSSET": 960.0,
            "XPO": 871.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1112.0,
            "SCHENKER": 801.0,
            "MRCI": 843.0
          }
        },
        {
          "departement": "69 - Rhône",
          "prix_par_transporteur": {
            "CONTE": 672.0,
            "VEYSSET": 620.0,
            "XPO": 590.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 649.0,
            "SCHENKER": 490.0,
            "MRCI": 502.0
          }
        },
        {
          "departement": "7 - Ardèche",
          "prix_par_transporteur": {
            "CONTE": 764.0,
            "VEYSSET": 840.0,
            "XPO": 595.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 589.0,
            "SCHENKER": 538.0,
            "MRCI": 622.0
          }
        },
        {
          "departement": "70 - Haute Saône",
          "prix_par_transporteur": {
            "CONTE": 1015.0,
            "VEYSSET": 880.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 937.0,
            "SCHENKER": 717.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "71 - Saône et Loire",
          "prix_par_transporteur": {
            "CONTE": 692.0,
            "VEYSSET": 700.0,
            "XPO": 593.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 672.0,
            "SCHENKER": 454.0,
            "MRCI": 589.0
          }
        },
        {
          "departement": "72 - Sarthe",
          "prix_par_transporteur": {
            "CONTE": 780.0,
            "VEYSSET": 670.0,
            "XPO": 605.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 736.0,
            "SCHENKER": 598.0,
            "MRCI": 599.0
          }
        },
        {
          "departement": "73 - Savoie",
          "prix_par_transporteur": {
            "CONTE": 906.0,
            "VEYSSET": 770.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 925.0,
            "SCHENKER": 657.0,
            "MRCI": 843.0
          }
        },
        {
          "departement": "74 - Haute Savoie",
          "prix_par_transporteur": {
            "CONTE": 972.0,
            "VEYSSET": 820.0,
            "XPO": 762.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 865.0,
            "SCHENKER": 657.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "75 - Ile de France",
          "prix_par_transporteur": {
            "CONTE": 982.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 826.0,
            "SCHENKER": 657.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "76 - Seine Maritime",
          "prix_par_transporteur": {
            "CONTE": 1076.0,
            "VEYSSET": 910.0,
            "XPO": 883.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1013.0,
            "SCHENKER": 801.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "77 - Seine et Marne",
          "prix_par_transporteur": {
            "CONTE": 938.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 860.0,
            "SCHENKER": 657.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "78 - Yvelines",
          "prix_par_transporteur": {
            "CONTE": 961.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 876.0,
            "SCHENKER": 657.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "79 - Deux Sèvres",
          "prix_par_transporteur": {
            "CONTE": 550.0,
            "VEYSSET": 580.0,
            "XPO": 508.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 494.0,
            "SCHENKER": 478.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "8 - Ardennes",
          "prix_par_transporteur": {
            "CONTE": 1233.0,
            "VEYSSET": 1080.0,
            "XPO": 944.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1207.0,
            "SCHENKER": 896.0,
            "MRCI": 908.0
          }
        },
        {
          "departement": "80 - Somme",
          "prix_par_transporteur": {
            "CONTE": 1129.0,
            "VEYSSET": 930.0,
            "XPO": 871.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1066.0,
            "SCHENKER": 777.0,
            "MRCI": 777.0
          }
        },
        {
          "departement": "81 - Tarn",
          "prix_par_transporteur": {
            "CONTE": 525.0,
            "VEYSSET": 440.0,
            "XPO": 520.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 488.0,
            "SCHENKER": 454.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "82 - Tarn et Garonne",
          "prix_par_transporteur": {
            "CONTE": 420.0,
            "VEYSSET": 360.0,
            "XPO": 460.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 387.0,
            "SCHENKER": 342.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "83 - Var",
          "prix_par_transporteur": {
            "CONTE": 1091.0,
            "VEYSSET": 1030.0,
            "XPO": 908.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1003.0,
            "SCHENKER": 896.0,
            "MRCI": 908.0
          }
        },
        {
          "departement": "84 - Vaucluse",
          "prix_par_transporteur": {
            "CONTE": 939.0,
            "VEYSSET": 880.0,
            "XPO": 702.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 777.0,
            "SCHENKER": 693.0,
            "MRCI": 713.0
          }
        },
        {
          "departement": "85 - Vendée",
          "prix_par_transporteur": {
            "CONTE": 626.0,
            "VEYSSET": 670.0,
            "XPO": 605.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 624.0,
            "SCHENKER": 586.0,
            "MRCI": 561.0
          }
        },
        {
          "departement": "86 - Vienne",
          "prix_par_transporteur": {
            "CONTE": 505.0,
            "VEYSSET": 490.0,
            "XPO": 436.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 443.0,
            "SCHENKER": 394.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "87 - Haute Vienne Zone A",
          "prix_par_transporteur": {
            "CONTE": 340.0,
            "VEYSSET": 330.0,
            "XPO": 411.0,
            "LACHAUD": 330.0,
            "BETOTRANS": 315.0,
            "SCHENKER": 335.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "87 - Haute Vienne Zone B",
          "prix_par_transporteur": {
            "CONTE": 340.0,
            "VEYSSET": 380.0,
            "XPO": 411.0,
            "LACHAUD": 330.0,
            "BETOTRANS": 315.0,
            "SCHENKER": 335.0,
            "MRCI": 389.0
          }
        },
        {
          "departement": "88 - Vosges",
          "prix_par_transporteur": {
            "CONTE": 1145.0,
            "VEYSSET": 980.0,
            "XPO": 871.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 1137.0,
            "SCHENKER": 777.0,
            "MRCI": 885.0
          }
        },
        {
          "departement": "89 - Yonne",
          "prix_par_transporteur": {
            "CONTE": 788.0,
            "VEYSSET": 820.0,
            "XPO": 653.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 743.0,
            "SCHENKER": 586.0,
            "MRCI": 681.0
          }
        },
        {
          "departement": "9 - Ariège",
          "prix_par_transporteur": {
            "CONTE": 590.0,
            "VEYSSET": 600.0,
            "XPO": 545.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 536.0,
            "SCHENKER": 514.0,
            "MRCI": 519.0
          }
        },
        {
          "departement": "90 - Teritoire de Belfort",
          "prix_par_transporteur": {
            "CONTE": 1058.0,
            "VEYSSET": 910.0,
            "XPO": 847.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 974.0,
            "SCHENKER": 777.0,
            "MRCI": 908.0
          }
        },
        {
          "departement": "91 - Essonne",
          "prix_par_transporteur": {
            "CONTE": 818.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 758.0,
            "SCHENKER": 669.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "92 - Hauts de Seine",
          "prix_par_transporteur": {
            "CONTE": 879.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 833.0,
            "SCHENKER": 669.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "93 - Seine St Denis",
          "prix_par_transporteur": {
            "CONTE": 879.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 864.0,
            "SCHENKER": 669.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "94 - Val de Marne",
          "prix_par_transporteur": {
            "CONTE": 879.0,
            "VEYSSET": 720.0,
            "XPO": 750.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 826.0,
            "SCHENKER": 669.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "95 - Val d'Oise",
          "prix_par_transporteur": {
            "CONTE": 919.0,
            "VEYSSET": 720.0,
            "XPO": 787.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 869.0,
            "SCHENKER": 669.0,
            "MRCI": 648.0
          }
        },
        {
          "departement": "BFA",
          "prix_par_transporteur": {
            "CONTE": 0.0,
            "VEYSSET": 0.0,
            "XPO": 0.0,
            "LACHAUD": 0.0,
            "BETOTRANS": 0.0,
            "SCHENKER": 0.0,
            "MRCI": 0.0
          }
        },
        {
          "departement": "Complément",
          "prix_par_transporteur": {
            "CONTE": 55.0,
            "VEYSSET": 60.0,
            "XPO": 50.0,
            "LACHAUD": 50.0,
            "BETOTRANS": 0.0,
            "SCHENKER": 55.0,
            "MRCI": 50.0
          }
        }
      ]
    }
  ]
};
