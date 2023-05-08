const countries = [
  {
    name: "Afghanistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
    iso2: "AF",
    iso3: "AFG"
  },
  {
    name: "Albania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    iso2: "AL",
    iso3: "ALB"
  },
  {
    name: "Algeria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
    iso2: "DZ",
    iso3: "DZA"
  },
  {
    name: "Andorra",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
    iso2: "AD",
    iso3: "AND"
  },
  {
    name: "Angola",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
    iso2: "AO",
    iso3: "AGO"
  },
  {
    name: "Anguilla",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
    iso2: "AI",
    iso3: "AIA"
  },
  {
    name: "Antigua and Barbuda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
    iso2: "AG",
    iso3: "ATG"
  },
  {
    name: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    iso2: "AR",
    iso3: "ARG"
  },
  {
    name: "Armenia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
    iso2: "AM",
    iso3: "ARM"
  },
  {
    name: "Aruba",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
    iso2: "AW",
    iso3: "ABW"
  },
  {
    name: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    iso2: "AU",
    iso3: "AUS"
  },
  {
    name: "Austria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    iso2: "AT",
    iso3: "AUT"
  },
  {
    name: "Azerbaijan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    iso2: "AZ",
    iso3: "AZE"
  },
  {
    name: "Bahamas",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
    iso2: "BS",
    iso3: "BHS"
  },
  {
    name: "Bahrain",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
    iso2: "BH",
    iso3: "BHR"
  },
  {
    name: "Bangladesh",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    iso2: "BD",
    iso3: "BGD"
  },
  {
    name: "Barbados",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
    iso2: "BB",
    iso3: "BRB"
  },
  {
    name: "Belarus",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
    iso2: "BY",
    iso3: "BLR"
  },
  {
    name: "Belgium",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    iso2: "BE",
    iso3: "BEL"
  },
  {
    name: "Belize",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
    iso2: "BZ",
    iso3: "BLZ"
  },
  {
    name: "Benin",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
    iso2: "BJ",
    iso3: "BEN"
  },
  {
    name: "Bermuda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
    iso2: "BM",
    iso3: "BMU"
  },
  {
    name: "Bhutan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
    iso2: "BT",
    iso3: "BTN"
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
    iso2: "BA",
    iso3: "BIH"
  },
  {
    name: "Botswana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
    iso2: "BW",
    iso3: "BWA"
  },
  {
    name: "Bouvet Island",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    iso2: "BV",
    iso3: "BVT"
  },
  {
    name: "Brazil",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    iso2: "BR",
    iso3: "BRA"
  },
  {
    name: "British Indian Ocean Territory",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg",
    iso2: "IO",
    iso3: "IOT"
  },
  {
    name: "Brunei",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
    iso2: "BN",
    iso3: "BRN"
  },
  {
    name: "Bulgaria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
    iso2: "BG",
    iso3: "BGR"
  },
  {
    name: "Burkina Faso",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
    iso2: "BF",
    iso3: "BFA"
  },
  {
    name: "Burundi",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
    iso2: "BI",
    iso3: "BDI"
  },
  {
    name: "Cambodia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
    iso2: "KH",
    iso3: "KHM"
  },
  {
    name: "Cameroon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
    iso2: "CM",
    iso3: "CMR"
  },
  {
    name: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    iso2: "CA",
    iso3: "CAN"
  },
  {
    name: "Cape Verde",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
    iso2: "CV",
    iso3: "CPV"
  },
  {
    name: "Cayman Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg",
    iso2: "KY",
    iso3: "CYM"
  },
  {
    name: "Central African Republic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",
    iso2: "CF",
    iso3: "CAF"
  },
  {
    name: "Chad",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
    iso2: "TD",
    iso3: "TCD"
  },
  {
    name: "Chile",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
    iso2: "CL",
    iso3: "CHL"
  },
  {
    name: "China",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    iso2: "CN",
    iso3: "CHN"
  },
  {
    name: "Christmas Island",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg",
    iso2: "CX",
    iso3: "CXR"
  },
  {
    name: "Cocos (Keeling) Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg",
    iso2: "CC",
    iso3: "CCK"
  },
  {
    name: "Colombia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
    iso2: "CO",
    iso3: "COL"
  },
  {
    name: "Comoros",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
    iso2: "KM",
    iso3: "COM"
  },
  {
    name: "Congo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
    iso2: "CG",
    iso3: "COG"
  },
  {
    name: "Cook Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
    iso2: "CK",
    iso3: "COK"
  },
  {
    name: "Costa Rica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg",
    iso2: "CR",
    iso3: "CRI"
  },
  {
    name: "Croatia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
    iso2: "HR",
    iso3: "HRV"
  },
  {
    name: "Cuba",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
    iso2: "CU",
    iso3: "CUB"
  },
  {
    name: "Cyprus",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
    iso2: "CY",
    iso3: "CYP"
  },
  {
    name: "Czech Republic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
    iso2: "CZ",
    iso3: "CZE"
  },
  {
    name: "Denmark",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    iso2: "DK",
    iso3: "DNK"
  },
  {
    name: "Djibouti",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
    iso2: "DJ",
    iso3: "DJI"
  },
  {
    name: "Dominica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
    iso2: "DM",
    iso3: "DMA"
  },
  {
    name: "Dominican Republic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
    iso2: "DO",
    iso3: "DOM"
  },
  {
    name: "Ecuador",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
    iso2: "EC",
    iso3: "ECU"
  },
  {
    name: "Egypt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    iso2: "EG",
    iso3: "EGY"
  },
  {
    name: "El Salvador",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
    iso2: "SV",
    iso3: "SLV"
  },
  {
    name: "Equatorial Guinea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
    iso2: "GQ",
    iso3: "GNQ"
  },
  {
    name: "Eritrea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
    iso2: "ER",
    iso3: "ERI"
  },
  {
    name: "Estonia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
    iso2: "EE",
    iso3: "EST"
  },
  {
    name: "Ethiopia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
    iso2: "ET",
    iso3: "ETH"
  },
  {
    name: "Falkland Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg",
    iso2: "FK",
    iso3: "FLK"
  },
  {
    name: "Faroe Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
    iso2: "FO",
    iso3: "FRO"
  },
  {
    name: "Fiji",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
    iso2: "FJ",
    iso3: "FJI"
  },
  {
    name: "Finland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    iso2: "FI",
    iso3: "FIN"
  },
  {
    name: "France",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    iso2: "FR",
    iso3: "FRA"
  },
  {
    name: "French Polynesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg",
    iso2: "PF",
    iso3: "PYF"
  },
  {
    name: "Gabon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
    iso2: "GA",
    iso3: "GAB"
  },
  {
    name: "Gambia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
    iso2: "GM",
    iso3: "GMB"
  },
  {
    name: "Georgia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
    iso2: "GE",
    iso3: "GEO"
  },
  {
    name: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    iso2: "DE",
    iso3: "DEU"
  },
  {
    name: "Ghana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
    iso2: "GH",
    iso3: "GHA"
  },
  {
    name: "Gibraltar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
    iso2: "GI",
    iso3: "GIB"
  },
  {
    name: "Greece",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    iso2: "GR",
    iso3: "GRC"
  },
  {
    name: "Greenland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
    iso2: "GL",
    iso3: "GRL"
  },
  {
    name: "Grenada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
    iso2: "GD",
    iso3: "GRD"
  },
  {
    name: "Guadeloupe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Guadeloupe_%28local%29_variant.svg",
    iso2: "GP",
    iso3: "GLP"
  },
  {
    name: "Guam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
    iso2: "GU",
    iso3: "GUM"
  },
  {
    name: "Guatemala",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
    iso2: "GT",
    iso3: "GTM"
  },
  {
    name: "Guernsey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg",
    iso2: "GG",
    iso3: "GGY"
  },
  {
    name: "Guinea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
    iso2: "GN",
    iso3: "GIN"
  },
  {
    name: "Guinea-Bissau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
    iso2: "GW",
    iso3: "GNB"
  },
  {
    name: "Guyana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
    iso2: "GY",
    iso3: "GUY"
  },
  {
    name: "Haiti",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
    iso2: "HT",
    iso3: "HTI"
  },
  {
    name: "Heard Island and McDonald Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    iso2: "HM",
    iso3: "HMD"
  },
  {
    name: "Vatican City State (Holy See)",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
    iso2: "VA",
    iso3: "VAT"
  },
  {
    name: "Honduras",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Naval_Ensign_of_Honduras.svg",
    iso2: "HN",
    iso3: "HND"
  },
  {
    name: "Hong Kong",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
    iso2: "HK",
    iso3: "HKG"
  },
  {
    name: "Hungary",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    iso2: "HU",
    iso3: "HUN"
  },
  {
    name: "Iceland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
    iso2: "IS",
    iso3: "ISL"
  },
  {
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    iso2: "IN",
    iso3: "IND"
  },
  {
    name: "Indonesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    iso2: "ID",
    iso3: "IDN"
  },
  {
    name: "Iran",
    flag: " https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
    iso2: "IR",
    iso3: "IRN"
  },
  {
    name: "Iraq",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
    iso2: "IQ",
    iso3: "IRQ"
  },
  {
    name: "Ireland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
    iso2: "IE",
    iso3: "IRL"
  },
  {
    name: "Isle of Man",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg",
    iso2: "IM",
    iso3: "IMN"
  },
  {
    name: "Israel",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
    iso2: "IL",
    iso3: "ISR"
  },
  {
    name: "Italy",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    iso2: "IT",
    iso3: "ITA"
  },
  {
    name: "Jamaica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
    iso2: "JM",
    iso3: "JAM"
  },
  {
    name: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    iso2: "JP",
    iso3: "JPN"
  },
  {
    name: "Jersey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg",
    iso2: "JE",
    iso3: "JEY"
  },
  {
    name: "Jordan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
    iso2: "JO",
    iso3: "JOR"
  },
  {
    name: "Kazakhstan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
    iso2: "KZ",
    iso3: "KAZ"
  },
  {
    name: "Kenya",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    iso2: "KE",
    iso3: "KEN"
  },
  {
    name: "Kiribati",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
    iso2: "KI",
    iso3: "KIR"
  },
  {
    name: "Kuwait",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
    iso2: "KW",
    iso3: "KWT"
  },
  {
    name: "Kyrgyzstan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
    iso2: "KG",
    iso3: "KGZ"
  },
  {
    name: "Laos",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
    iso2: "LA",
    iso3: "LAO"
  },
  {
    name: "Latvia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    iso2: "LV",
    iso3: "LVA"
  },
  {
    name: "Lebanon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
    iso2: "LB",
    iso3: "LBN"
  },
  {
    name: "Lesotho",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
    iso2: "LS",
    iso3: "LSO"
  },
  {
    name: "Liberia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
    iso2: "LR",
    iso3: "LBR"
  },
  {
    name: "Liechtenstein",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
    iso2: "LI",
    iso3: "LIE"
  },
  {
    name: "Lithuania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
    iso2: "LT",
    iso3: "LTU"
  },
  {
    name: "Luxembourg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
    iso2: "LU",
    iso3: "LUX"
  },
  {
    name: "Macau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
    iso2: "MO",
    iso3: "MAC"
  },
  {
    name: "Madagascar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
    iso2: "MG",
    iso3: "MDG"
  },
  {
    name: "Malawi",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
    iso2: "MW",
    iso3: "MWI"
  },
  {
    name: "Malaysia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
    iso2: "MY",
    iso3: "MYS"
  },
  {
    name: "Maldives",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
    iso2: "MV",
    iso3: "MDV"
  },
  {
    name: "Mali",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
    iso2: "ML",
    iso3: "MLI"
  },
  {
    name: "Malta",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
    iso2: "MT",
    iso3: "MLT"
  },
  {
    name: "Marshall Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
    iso2: "MH",
    iso3: "MHL"
  },
  {
    name: "Martinique",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Snake_Flag_of_Martinique.svg",
    iso2: "MQ",
    iso3: "MTQ"
  },
  {
    name: "Mauritania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
    iso2: "MR",
    iso3: "MRT"
  },
  {
    name: "Mauritius",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
    iso2: "MU",
    iso3: "MUS"
  },
  {
    name: "Mayotte",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    iso2: "YT",
    iso3: "MYT"
  },
  {
    name: "Mexico",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    iso2: "MX",
    iso3: "MEX"
  },
  {
    name: "Monaco",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
    iso2: "MC",
    iso3: "MCO"
  },
  {
    name: "Mongolia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
    iso2: "MN",
    iso3: "MNG"
  },
  {
    name: "Montenegro",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
    iso2: "ME",
    iso3: "MNE"
  },
  {
    name: "Montserrat",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
    iso2: "MS",
    iso3: "MSR"
  },
  {
    name: "Morocco",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    iso2: "MA",
    iso3: "MAR"
  },
  {
    name: "Mozambique",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
    iso2: "MZ",
    iso3: "MOZ"
  },
  {
    name: "Myanmar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
    iso2: "MM",
    iso3: "MMR"
  },
  {
    name: "Namibia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
    iso2: "NA",
    iso3: "NAM"
  },
  {
    name: "Nauru",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
    iso2: "NR",
    iso3: "NRU"
  },
  {
    name: "Nepal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
    iso2: "NP",
    iso3: "NPL"
  },
  {
    name: "Netherlands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    iso2: "NL",
    iso3: "NLD"
  },
  {
    name: "New Caledonia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flags_of_New_Caledonia.svg",
    iso2: "NC",
    iso3: "NCL"
  },
  {
    name: "New Zealand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    iso2: "NZ",
    iso3: "NZL"
  },
  {
    name: "Nicaragua",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
    iso2: "NI",
    iso3: "NIC"
  },
  {
    name: "Niger",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
    iso2: "NE",
    iso3: "NER"
  },
  {
    name: "Nigeria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    iso2: "NG",
    iso3: "NGA"
  },
  {
    name: "Niue",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
    iso2: "NU",
    iso3: "NIU"
  },
  {
    name: "Norfolk Island",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",
    iso2: "NF",
    iso3: "NFK"
  },
  {
    name: "Northern Mariana Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg",
    iso2: "MP",
    iso3: "MNP"
  },
  {
    name: "Norway",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    iso2: "NO",
    iso3: "NOR"
  },
  {
    name: "Oman",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
    iso2: "OM",
    iso3: "OMN"
  },
  {
    name: "Pakistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    iso2: "PK",
    iso3: "PAK"
  },
  {
    name: "Palau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
    iso2: "PW",
    iso3: "PLW"
  },
  {
    name: "Panama",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
    iso2: "PA",
    iso3: "PAN"
  },
  {
    name: "Papua New Guinea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
    iso2: "PG",
    iso3: "PNG"
  },
  {
    name: "Paraguay",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
    iso2: "PY",
    iso3: "PRY"
  },
  {
    name: "Peru",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
    iso2: "PE",
    iso3: "PER"
  },
  {
    name: "Philippines",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    iso2: "PH",
    iso3: "PHL"
  },
  {
    name: "Pitcairn",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",
    iso2: "PN",
    iso3: "PCN"
  },
  {
    name: "Poland",
    flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    iso2: "PL",
    iso3: "POL"
  },
  {
    name: "Portugal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    iso2: "PT",
    iso3: "PRT"
  },
  {
    name: "Puerto Rico",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
    iso2: "PR",
    iso3: "PRI"
  },
  {
    name: "Qatar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
    iso2: "QA",
    iso3: "QAT"
  },
  {
    name: "Réunion",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    iso2: "RE",
    iso3: "REU"
  },
  {
    name: "Romania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    iso2: "RO",
    iso3: "ROU"
  },
  {
    name: "Rwanda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
    iso2: "RW",
    iso3: "RWA"
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
    iso2: "KN",
    iso3: "KNA"
  },
  {
    name: "Saint Lucia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
    iso2: "LC",
    iso3: "LCA"
  },
  {
    name: "Saint Pierre and Miquelon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg",
    iso2: "PM",
    iso3: "SPM"
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
    iso2: "VC",
    iso3: "VCT"
  },
  {
    name: "Samoa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
    iso2: "WS",
    iso3: "WSM"
  },
  {
    name: "San Marino",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
    iso2: "SM",
    iso3: "SMR"
  },
  {
    name: "Sao Tome and Principe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
    iso2: "ST",
    iso3: "STP"
  },
  {
    name: "Saudi Arabia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    iso2: "SA",
    iso3: "SAU"
  },
  {
    name: "Senegal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
    iso2: "SN",
    iso3: "SEN"
  },
  {
    name: "Serbia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    iso2: "RS",
    iso3: "SRB"
  },
  {
    name: "Seychelles",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
    iso2: "SC",
    iso3: "SYC"
  },
  {
    name: "Sierra Leone",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
    iso2: "SL",
    iso3: "SLE"
  },
  {
    name: "Singapore",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    iso2: "SG",
    iso3: "SGP"
  },
  {
    name: "Slovakia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
    iso2: "SK",
    iso3: "SVK"
  },
  {
    name: "Slovenia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
    iso2: "SI",
    iso3: "SVN"
  },
  {
    name: "Solomon Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
    iso2: "SB",
    iso3: "SLB"
  },
  {
    name: "Somalia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
    iso2: "SO",
    iso3: "SOM"
  },
  {
    name: "South Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    iso2: "ZA",
    iso3: "ZAF"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg",
    iso2: "GS",
    iso3: "SGS"
  },
  {
    name: "Spain",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    iso2: "ES",
    iso3: "ESP"
  },
  {
    name: "Sri Lanka",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    iso2: "LK",
    iso3: "LKA"
  },
  {
    name: "Sudan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
    iso2: "SD",
    iso3: "SDN"
  },
  {
    name: "Suriname",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
    iso2: "SR",
    iso3: "SUR"
  },
  {
    name: "Swaziland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg",
    iso2: "SZ",
    iso3: "SWZ"
  },
  {
    name: "Sweden",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    iso2: "SE",
    iso3: "SWE"
  },
  {
    name: "Switzerland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
    iso2: "CH",
    iso3: "CHE"
  },
  {
    name: "Syria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
    iso2: "SY",
    iso3: "SYR"
  },
  {
    name: "Taiwan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
    iso2: "TW",
    iso3: "TWN"
  },
  {
    name: "Tajikistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
    iso2: "TJ",
    iso3: "TJK"
  },
  {
    name: "Thailand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    iso2: "TH",
    iso3: "THA"
  },
  {
    name: "Timor-Leste",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
    iso2: "TL",
    iso3: "TLS"
  },
  {
    name: "Togo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
    iso2: "TG",
    iso3: "TGO"
  },
  {
    name: "Tokelau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg",
    iso2: "TK",
    iso3: "TKL"
  },
  {
    name: "Tonga",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
    iso2: "TO",
    iso3: "TON"
  },
  {
    name: "Trinidad and Tobago",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
    iso2: "TT",
    iso3: "TTO"
  },
  {
    name: "Tunisia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
    iso2: "TN",
    iso3: "TUN"
  },
  {
    name: "Turkey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    iso2: "TR",
    iso3: "TUR"
  },
  {
    name: "Turkmenistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
    iso2: "TM",
    iso3: "TKM"
  },
  {
    name: "Turks and Caicos Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
    iso2: "TC",
    iso3: "TCA"
  },
  {
    name: "Tuvalu",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
    iso2: "TV",
    iso3: "TUV"
  },
  {
    name: "Uganda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
    iso2: "UG",
    iso3: "UGA"
  },
  {
    name: "Ukraine",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
    iso2: "UA",
    iso3: "UKR"
  },
  {
    name: "United Arab Emirates",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    iso2: "AE",
    iso3: "ARE"
  },
  {
    name: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    iso2: "GB",
    iso3: "GBR"
  },
  {
    name: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    iso2: "US",
    iso3: "USA"
  },
  {
    name: "United States Minor Outlying Islands",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    iso2: "UM",
    iso3: "UMI"
  },
  {
    name: "Uruguay",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
    iso2: "UY",
    iso3: "URY"
  },
  {
    name: "Uzbekistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
    iso2: "UZ",
    iso3: "UZB"
  },
  {
    name: "Vanuatu",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",
    iso2: "VU",
    iso3: "VUT"
  },
  {
    name: "Vietnam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    iso2: "VN",
    iso3: "VNM"
  },
  {
    name: "Wallis and Futuna",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg",
    iso2: "WF",
    iso3: "WLF"
  },
  {
    name: "Yemen",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
    iso2: "YE",
    iso3: "YEM"
  },
  {
    name: "Zambia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
    iso2: "ZM",
    iso3: "ZMB"
  },
  {
    name: "Zimbabwe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
    iso2: "ZW",
    iso3: "ZWE"
  }
];

export default countries;
