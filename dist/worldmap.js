(() => {
  // src/countries-db.js
  var COUNTRIES = {
    "AD": { alpha2: "AD", alpha3: "AND", numeric: "020", name: "Andorra", region: "Europe", subregion: "Southern Europe", independent: false },
    "AE": { alpha2: "AE", alpha3: "ARE", numeric: "784", name: "United Arab Emirates", region: "Asia", subregion: "Western Asia", independent: false },
    "AF": { alpha2: "AF", alpha3: "AFG", numeric: "004", name: "Afghanistan", region: "Asia", subregion: "Southern Asia", independent: false },
    "AG": { alpha2: "AG", alpha3: "ATG", numeric: "028", name: "Antigua and Barbuda", region: "Americas", subregion: "Caribbean", independent: false },
    "AI": { alpha2: "AI", alpha3: "AIA", numeric: "660", name: "Anguilla", region: "Americas", subregion: "Caribbean", independent: false },
    "AL": { alpha2: "AL", alpha3: "ALB", numeric: "008", name: "Albania", region: "Europe", subregion: "Southeast Europe", independent: false },
    "AM": { alpha2: "AM", alpha3: "ARM", numeric: "051", name: "Armenia", region: "Asia", subregion: "Western Asia", independent: false },
    "AO": { alpha2: "AO", alpha3: "AGO", numeric: "024", name: "Angola", region: "Africa", subregion: "Middle Africa", independent: false },
    "AQ": { alpha2: "AQ", alpha3: "ATA", numeric: "010", name: "Antarctica", region: "Antarctic", subregion: null, independent: false },
    "AR": { alpha2: "AR", alpha3: "ARG", numeric: "032", name: "Argentina", region: "Americas", subregion: "South America", independent: false },
    "AS": { alpha2: "AS", alpha3: "ASM", numeric: "016", name: "American Samoa", region: "Oceania", subregion: "Polynesia", independent: false },
    "AT": { alpha2: "AT", alpha3: "AUT", numeric: "040", name: "Austria", region: "Europe", subregion: "Central Europe", independent: false },
    "AU": { alpha2: "AU", alpha3: "AUS", numeric: "036", name: "Australia", region: "Oceania", subregion: "Australia and New Zealand", independent: false },
    "AW": { alpha2: "AW", alpha3: "ABW", numeric: "533", name: "Aruba", region: "Americas", subregion: "Caribbean", independent: false },
    "AX": { alpha2: "AX", alpha3: "ALA", numeric: "248", name: "\xC5land Islands", region: "Europe", subregion: "Northern Europe", independent: false },
    "AZ": { alpha2: "AZ", alpha3: "AZE", numeric: "031", name: "Azerbaijan", region: "Asia", subregion: "Western Asia", independent: false },
    "BA": { alpha2: "BA", alpha3: "BIH", numeric: "070", name: "Bosnia and Herzegovina", region: "Europe", subregion: "Southeast Europe", independent: false },
    "BB": { alpha2: "BB", alpha3: "BRB", numeric: "052", name: "Barbados", region: "Americas", subregion: "Caribbean", independent: false },
    "BD": { alpha2: "BD", alpha3: "BGD", numeric: "050", name: "Bangladesh", region: "Asia", subregion: "Southern Asia", independent: false },
    "BE": { alpha2: "BE", alpha3: "BEL", numeric: "056", name: "Belgium", region: "Europe", subregion: "Western Europe", independent: false },
    "BF": { alpha2: "BF", alpha3: "BFA", numeric: "854", name: "Burkina Faso", region: "Africa", subregion: "Western Africa", independent: false },
    "BG": { alpha2: "BG", alpha3: "BGR", numeric: "100", name: "Bulgaria", region: "Europe", subregion: "Southeast Europe", independent: false },
    "BH": { alpha2: "BH", alpha3: "BHR", numeric: "048", name: "Bahrain", region: "Asia", subregion: "Western Asia", independent: false },
    "BI": { alpha2: "BI", alpha3: "BDI", numeric: "108", name: "Burundi", region: "Africa", subregion: "Eastern Africa", independent: false },
    "BJ": { alpha2: "BJ", alpha3: "BEN", numeric: "204", name: "Benin", region: "Africa", subregion: "Western Africa", independent: false },
    "BL": { alpha2: "BL", alpha3: "BLM", numeric: "652", name: "Saint Barth\xE9lemy", region: "Americas", subregion: "Caribbean", independent: false },
    "BM": { alpha2: "BM", alpha3: "BMU", numeric: "060", name: "Bermuda", region: "Americas", subregion: "North America", independent: false },
    "BN": { alpha2: "BN", alpha3: "BRN", numeric: "096", name: "Brunei", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "BO": { alpha2: "BO", alpha3: "BOL", numeric: "068", name: "Bolivia", region: "Americas", subregion: "South America", independent: false },
    "BQ": { alpha2: "BQ", alpha3: "BES", numeric: "535", name: "Caribbean Netherlands", region: "Americas", subregion: "Caribbean", independent: false },
    "BR": { alpha2: "BR", alpha3: "BRA", numeric: "076", name: "Brazil", region: "Americas", subregion: "South America", independent: false },
    "BS": { alpha2: "BS", alpha3: "BHS", numeric: "044", name: "Bahamas", region: "Americas", subregion: "Caribbean", independent: false },
    "BT": { alpha2: "BT", alpha3: "BTN", numeric: "064", name: "Bhutan", region: "Asia", subregion: "Southern Asia", independent: false },
    "BV": { alpha2: "BV", alpha3: "BVT", numeric: "074", name: "Bouvet Island", region: "Antarctic", subregion: null, independent: false },
    "BW": { alpha2: "BW", alpha3: "BWA", numeric: "072", name: "Botswana", region: "Africa", subregion: "Southern Africa", independent: false },
    "BY": { alpha2: "BY", alpha3: "BLR", numeric: "112", name: "Belarus", region: "Europe", subregion: "Eastern Europe", independent: false },
    "BZ": { alpha2: "BZ", alpha3: "BLZ", numeric: "084", name: "Belize", region: "Americas", subregion: "Central America", independent: false },
    "CA": { alpha2: "CA", alpha3: "CAN", numeric: "124", name: "Canada", region: "Americas", subregion: "North America", independent: false },
    "CC": { alpha2: "CC", alpha3: "CCK", numeric: "166", name: "Cocos (Keeling) Islands", region: "Oceania", subregion: "Australia and New Zealand", independent: false },
    "CD": { alpha2: "CD", alpha3: "COD", numeric: "180", name: "DR Congo", region: "Africa", subregion: "Middle Africa", independent: false },
    "CF": { alpha2: "CF", alpha3: "CAF", numeric: "140", name: "Central African Republic", region: "Africa", subregion: "Middle Africa", independent: false },
    "CG": { alpha2: "CG", alpha3: "COG", numeric: "178", name: "Republic of the Congo", region: "Africa", subregion: "Middle Africa", independent: false },
    "CH": { alpha2: "CH", alpha3: "CHE", numeric: "756", name: "Switzerland", region: "Europe", subregion: "Western Europe", independent: false },
    "CI": { alpha2: "CI", alpha3: "CIV", numeric: "384", name: "Ivory Coast", region: "Africa", subregion: "Western Africa", independent: false },
    "CK": { alpha2: "CK", alpha3: "COK", numeric: "184", name: "Cook Islands", region: "Oceania", subregion: "Polynesia", independent: false },
    "CL": { alpha2: "CL", alpha3: "CHL", numeric: "152", name: "Chile", region: "Americas", subregion: "South America", independent: false },
    "CM": { alpha2: "CM", alpha3: "CMR", numeric: "120", name: "Cameroon", region: "Africa", subregion: "Middle Africa", independent: false },
    "CN": { alpha2: "CN", alpha3: "CHN", numeric: "156", name: "China", region: "Asia", subregion: "Eastern Asia", independent: false },
    "CO": { alpha2: "CO", alpha3: "COL", numeric: "170", name: "Colombia", region: "Americas", subregion: "South America", independent: false },
    "CR": { alpha2: "CR", alpha3: "CRI", numeric: "188", name: "Costa Rica", region: "Americas", subregion: "Central America", independent: false },
    "CU": { alpha2: "CU", alpha3: "CUB", numeric: "192", name: "Cuba", region: "Americas", subregion: "Caribbean", independent: false },
    "CV": { alpha2: "CV", alpha3: "CPV", numeric: "132", name: "Cape Verde", region: "Africa", subregion: "Western Africa", independent: false },
    "CW": { alpha2: "CW", alpha3: "CUW", numeric: "531", name: "Cura\xE7ao", region: "Americas", subregion: "Caribbean", independent: false },
    "CX": { alpha2: "CX", alpha3: "CXR", numeric: "162", name: "Christmas Island", region: "Oceania", subregion: "Australia and New Zealand", independent: false },
    "CY": { alpha2: "CY", alpha3: "CYP", numeric: "196", name: "Cyprus", region: "Europe", subregion: "Southern Europe", independent: false },
    "CZ": { alpha2: "CZ", alpha3: "CZE", numeric: "203", name: "Czechia", region: "Europe", subregion: "Central Europe", independent: false },
    "DE": { alpha2: "DE", alpha3: "DEU", numeric: "276", name: "Germany", region: "Europe", subregion: "Western Europe", independent: false },
    "DJ": { alpha2: "DJ", alpha3: "DJI", numeric: "262", name: "Djibouti", region: "Africa", subregion: "Eastern Africa", independent: false },
    "DK": { alpha2: "DK", alpha3: "DNK", numeric: "208", name: "Denmark", region: "Europe", subregion: "Northern Europe", independent: false },
    "DM": { alpha2: "DM", alpha3: "DMA", numeric: "212", name: "Dominica", region: "Americas", subregion: "Caribbean", independent: false },
    "DO": { alpha2: "DO", alpha3: "DOM", numeric: "214", name: "Dominican Republic", region: "Americas", subregion: "Caribbean", independent: false },
    "DZ": { alpha2: "DZ", alpha3: "DZA", numeric: "012", name: "Algeria", region: "Africa", subregion: "Northern Africa", independent: false },
    "EC": { alpha2: "EC", alpha3: "ECU", numeric: "218", name: "Ecuador", region: "Americas", subregion: "South America", independent: false },
    "EE": { alpha2: "EE", alpha3: "EST", numeric: "233", name: "Estonia", region: "Europe", subregion: "Northern Europe", independent: false },
    "EG": { alpha2: "EG", alpha3: "EGY", numeric: "818", name: "Egypt", region: "Africa", subregion: "Northern Africa", independent: false },
    "EH": { alpha2: "EH", alpha3: "ESH", numeric: "732", name: "Western Sahara", region: "Africa", subregion: "Northern Africa", independent: false },
    "ER": { alpha2: "ER", alpha3: "ERI", numeric: "232", name: "Eritrea", region: "Africa", subregion: "Eastern Africa", independent: false },
    "ES": { alpha2: "ES", alpha3: "ESP", numeric: "724", name: "Spain", region: "Europe", subregion: "Southern Europe", independent: false },
    "ET": { alpha2: "ET", alpha3: "ETH", numeric: "231", name: "Ethiopia", region: "Africa", subregion: "Eastern Africa", independent: false },
    "FI": { alpha2: "FI", alpha3: "FIN", numeric: "246", name: "Finland", region: "Europe", subregion: "Northern Europe", independent: false },
    "FJ": { alpha2: "FJ", alpha3: "FJI", numeric: "242", name: "Fiji", region: "Oceania", subregion: "Melanesia", independent: false },
    "FK": { alpha2: "FK", alpha3: "FLK", numeric: "238", name: "Falkland Islands", region: "Americas", subregion: "South America", independent: false },
    "FM": { alpha2: "FM", alpha3: "FSM", numeric: "583", name: "Micronesia", region: "Oceania", subregion: "Micronesia", independent: false },
    "FO": { alpha2: "FO", alpha3: "FRO", numeric: "234", name: "Faroe Islands", region: "Europe", subregion: "Northern Europe", independent: false },
    "FR": { alpha2: "FR", alpha3: "FRA", numeric: "250", name: "France", region: "Europe", subregion: "Western Europe", independent: false },
    "GA": { alpha2: "GA", alpha3: "GAB", numeric: "266", name: "Gabon", region: "Africa", subregion: "Middle Africa", independent: false },
    "GB": { alpha2: "GB", alpha3: "GBR", numeric: "826", name: "United Kingdom", region: "Europe", subregion: "Northern Europe", independent: false },
    "GD": { alpha2: "GD", alpha3: "GRD", numeric: "308", name: "Grenada", region: "Americas", subregion: "Caribbean", independent: false },
    "GE": { alpha2: "GE", alpha3: "GEO", numeric: "268", name: "Georgia", region: "Asia", subregion: "Western Asia", independent: false },
    "GF": { alpha2: "GF", alpha3: "GUF", numeric: "254", name: "French Guiana", region: "Americas", subregion: "South America", independent: false },
    "GG": { alpha2: "GG", alpha3: "GGY", numeric: "831", name: "Guernsey", region: "Europe", subregion: "Northern Europe", independent: false },
    "GH": { alpha2: "GH", alpha3: "GHA", numeric: "288", name: "Ghana", region: "Africa", subregion: "Western Africa", independent: false },
    "GI": { alpha2: "GI", alpha3: "GIB", numeric: "292", name: "Gibraltar", region: "Europe", subregion: "Southern Europe", independent: false },
    "GL": { alpha2: "GL", alpha3: "GRL", numeric: "304", name: "Greenland", region: "Americas", subregion: "North America", independent: false },
    "GM": { alpha2: "GM", alpha3: "GMB", numeric: "270", name: "Gambia", region: "Africa", subregion: "Western Africa", independent: false },
    "GN": { alpha2: "GN", alpha3: "GIN", numeric: "324", name: "Guinea", region: "Africa", subregion: "Western Africa", independent: false },
    "GP": { alpha2: "GP", alpha3: "GLP", numeric: "312", name: "Guadeloupe", region: "Americas", subregion: "Caribbean", independent: false },
    "GQ": { alpha2: "GQ", alpha3: "GNQ", numeric: "226", name: "Equatorial Guinea", region: "Africa", subregion: "Middle Africa", independent: false },
    "GR": { alpha2: "GR", alpha3: "GRC", numeric: "300", name: "Greece", region: "Europe", subregion: "Southern Europe", independent: false },
    "GS": { alpha2: "GS", alpha3: "SGS", numeric: "239", name: "South Georgia", region: "Antarctic", subregion: null, independent: false },
    "GT": { alpha2: "GT", alpha3: "GTM", numeric: "320", name: "Guatemala", region: "Americas", subregion: "Central America", independent: false },
    "GU": { alpha2: "GU", alpha3: "GUM", numeric: "316", name: "Guam", region: "Oceania", subregion: "Micronesia", independent: false },
    "GW": { alpha2: "GW", alpha3: "GNB", numeric: "624", name: "Guinea-Bissau", region: "Africa", subregion: "Western Africa", independent: false },
    "GY": { alpha2: "GY", alpha3: "GUY", numeric: "328", name: "Guyana", region: "Americas", subregion: "South America", independent: false },
    "HK": { alpha2: "HK", alpha3: "HKG", numeric: "344", name: "Hong Kong", region: "Asia", subregion: "Eastern Asia", independent: false },
    "HM": { alpha2: "HM", alpha3: "HMD", numeric: "334", name: "Heard Island and McDonald Islands", region: "Antarctic", subregion: null, independent: false },
    "HN": { alpha2: "HN", alpha3: "HND", numeric: "340", name: "Honduras", region: "Americas", subregion: "Central America", independent: false },
    "HR": { alpha2: "HR", alpha3: "HRV", numeric: "191", name: "Croatia", region: "Europe", subregion: "Southeast Europe", independent: false },
    "HT": { alpha2: "HT", alpha3: "HTI", numeric: "332", name: "Haiti", region: "Americas", subregion: "Caribbean", independent: false },
    "HU": { alpha2: "HU", alpha3: "HUN", numeric: "348", name: "Hungary", region: "Europe", subregion: "Central Europe", independent: false },
    "ID": { alpha2: "ID", alpha3: "IDN", numeric: "360", name: "Indonesia", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "IE": { alpha2: "IE", alpha3: "IRL", numeric: "372", name: "Ireland", region: "Europe", subregion: "Northern Europe", independent: false },
    "IL": { alpha2: "IL", alpha3: "ISR", numeric: "376", name: "Israel", region: "Asia", subregion: "Western Asia", independent: false },
    "IM": { alpha2: "IM", alpha3: "IMN", numeric: "833", name: "Isle of Man", region: "Europe", subregion: "Northern Europe", independent: false },
    "IN": { alpha2: "IN", alpha3: "IND", numeric: "356", name: "India", region: "Asia", subregion: "Southern Asia", independent: false },
    "IO": { alpha2: "IO", alpha3: "IOT", numeric: "086", name: "British Indian Ocean Territory", region: "Africa", subregion: "Eastern Africa", independent: false },
    "IQ": { alpha2: "IQ", alpha3: "IRQ", numeric: "368", name: "Iraq", region: "Asia", subregion: "Western Asia", independent: false },
    "IR": { alpha2: "IR", alpha3: "IRN", numeric: "364", name: "Iran", region: "Asia", subregion: "Southern Asia", independent: false },
    "IS": { alpha2: "IS", alpha3: "ISL", numeric: "352", name: "Iceland", region: "Europe", subregion: "Northern Europe", independent: false },
    "IT": { alpha2: "IT", alpha3: "ITA", numeric: "380", name: "Italy", region: "Europe", subregion: "Southern Europe", independent: false },
    "JE": { alpha2: "JE", alpha3: "JEY", numeric: "832", name: "Jersey", region: "Europe", subregion: "Northern Europe", independent: false },
    "JM": { alpha2: "JM", alpha3: "JAM", numeric: "388", name: "Jamaica", region: "Americas", subregion: "Caribbean", independent: false },
    "JO": { alpha2: "JO", alpha3: "JOR", numeric: "400", name: "Jordan", region: "Asia", subregion: "Western Asia", independent: false },
    "JP": { alpha2: "JP", alpha3: "JPN", numeric: "392", name: "Japan", region: "Asia", subregion: "Eastern Asia", independent: false },
    "KE": { alpha2: "KE", alpha3: "KEN", numeric: "404", name: "Kenya", region: "Africa", subregion: "Eastern Africa", independent: false },
    "KG": { alpha2: "KG", alpha3: "KGZ", numeric: "417", name: "Kyrgyzstan", region: "Asia", subregion: "Central Asia", independent: false },
    "KH": { alpha2: "KH", alpha3: "KHM", numeric: "116", name: "Cambodia", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "KI": { alpha2: "KI", alpha3: "KIR", numeric: "296", name: "Kiribati", region: "Oceania", subregion: "Micronesia", independent: false },
    "KM": { alpha2: "KM", alpha3: "COM", numeric: "174", name: "Comoros", region: "Africa", subregion: "Eastern Africa", independent: false },
    "KN": { alpha2: "KN", alpha3: "KNA", numeric: "659", name: "Saint Kitts and Nevis", region: "Americas", subregion: "Caribbean", independent: false },
    "KP": { alpha2: "KP", alpha3: "PRK", numeric: "408", name: "North Korea", region: "Asia", subregion: "Eastern Asia", independent: false },
    "KR": { alpha2: "KR", alpha3: "KOR", numeric: "410", name: "South Korea", region: "Asia", subregion: "Eastern Asia", independent: false },
    "KW": { alpha2: "KW", alpha3: "KWT", numeric: "414", name: "Kuwait", region: "Asia", subregion: "Western Asia", independent: false },
    "KY": { alpha2: "KY", alpha3: "CYM", numeric: "136", name: "Cayman Islands", region: "Americas", subregion: "Caribbean", independent: false },
    "KZ": { alpha2: "KZ", alpha3: "KAZ", numeric: "398", name: "Kazakhstan", region: "Asia", subregion: "Central Asia", independent: false },
    "LA": { alpha2: "LA", alpha3: "LAO", numeric: "418", name: "Laos", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "LB": { alpha2: "LB", alpha3: "LBN", numeric: "422", name: "Lebanon", region: "Asia", subregion: "Western Asia", independent: false },
    "LC": { alpha2: "LC", alpha3: "LCA", numeric: "662", name: "Saint Lucia", region: "Americas", subregion: "Caribbean", independent: false },
    "LI": { alpha2: "LI", alpha3: "LIE", numeric: "438", name: "Liechtenstein", region: "Europe", subregion: "Western Europe", independent: false },
    "LK": { alpha2: "LK", alpha3: "LKA", numeric: "144", name: "Sri Lanka", region: "Asia", subregion: "Southern Asia", independent: false },
    "LR": { alpha2: "LR", alpha3: "LBR", numeric: "430", name: "Liberia", region: "Africa", subregion: "Western Africa", independent: false },
    "LS": { alpha2: "LS", alpha3: "LSO", numeric: "426", name: "Lesotho", region: "Africa", subregion: "Southern Africa", independent: false },
    "LT": { alpha2: "LT", alpha3: "LTU", numeric: "440", name: "Lithuania", region: "Europe", subregion: "Northern Europe", independent: false },
    "LU": { alpha2: "LU", alpha3: "LUX", numeric: "442", name: "Luxembourg", region: "Europe", subregion: "Western Europe", independent: false },
    "LV": { alpha2: "LV", alpha3: "LVA", numeric: "428", name: "Latvia", region: "Europe", subregion: "Northern Europe", independent: false },
    "LY": { alpha2: "LY", alpha3: "LBY", numeric: "434", name: "Libya", region: "Africa", subregion: "Northern Africa", independent: false },
    "MA": { alpha2: "MA", alpha3: "MAR", numeric: "504", name: "Morocco", region: "Africa", subregion: "Northern Africa", independent: false },
    "MC": { alpha2: "MC", alpha3: "MCO", numeric: "492", name: "Monaco", region: "Europe", subregion: "Western Europe", independent: false },
    "MD": { alpha2: "MD", alpha3: "MDA", numeric: "498", name: "Moldova", region: "Europe", subregion: "Eastern Europe", independent: false },
    "ME": { alpha2: "ME", alpha3: "MNE", numeric: "499", name: "Montenegro", region: "Europe", subregion: "Southeast Europe", independent: false },
    "MF": { alpha2: "MF", alpha3: "MAF", numeric: "663", name: "Saint Martin", region: "Americas", subregion: "Caribbean", independent: false },
    "MG": { alpha2: "MG", alpha3: "MDG", numeric: "450", name: "Madagascar", region: "Africa", subregion: "Eastern Africa", independent: false },
    "MH": { alpha2: "MH", alpha3: "MHL", numeric: "584", name: "Marshall Islands", region: "Oceania", subregion: "Micronesia", independent: false },
    "MK": { alpha2: "MK", alpha3: "MKD", numeric: "807", name: "North Macedonia", region: "Europe", subregion: "Southeast Europe", independent: false },
    "ML": { alpha2: "ML", alpha3: "MLI", numeric: "466", name: "Mali", region: "Africa", subregion: "Western Africa", independent: false },
    "MM": { alpha2: "MM", alpha3: "MMR", numeric: "104", name: "Myanmar", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "MN": { alpha2: "MN", alpha3: "MNG", numeric: "496", name: "Mongolia", region: "Asia", subregion: "Eastern Asia", independent: false },
    "MO": { alpha2: "MO", alpha3: "MAC", numeric: "446", name: "Macau", region: "Asia", subregion: "Eastern Asia", independent: false },
    "MP": { alpha2: "MP", alpha3: "MNP", numeric: "580", name: "Northern Mariana Islands", region: "Oceania", subregion: "Micronesia", independent: false },
    "MQ": { alpha2: "MQ", alpha3: "MTQ", numeric: "474", name: "Martinique", region: "Americas", subregion: "Caribbean", independent: false },
    "MR": { alpha2: "MR", alpha3: "MRT", numeric: "478", name: "Mauritania", region: "Africa", subregion: "Western Africa", independent: false },
    "MS": { alpha2: "MS", alpha3: "MSR", numeric: "500", name: "Montserrat", region: "Americas", subregion: "Caribbean", independent: false },
    "MT": { alpha2: "MT", alpha3: "MLT", numeric: "470", name: "Malta", region: "Europe", subregion: "Southern Europe", independent: false },
    "MU": { alpha2: "MU", alpha3: "MUS", numeric: "480", name: "Mauritius", region: "Africa", subregion: "Eastern Africa", independent: false },
    "MV": { alpha2: "MV", alpha3: "MDV", numeric: "462", name: "Maldives", region: "Asia", subregion: "Southern Asia", independent: false },
    "MW": { alpha2: "MW", alpha3: "MWI", numeric: "454", name: "Malawi", region: "Africa", subregion: "Eastern Africa", independent: false },
    "MX": { alpha2: "MX", alpha3: "MEX", numeric: "484", name: "Mexico", region: "Americas", subregion: "North America", independent: false },
    "MY": { alpha2: "MY", alpha3: "MYS", numeric: "458", name: "Malaysia", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "MZ": { alpha2: "MZ", alpha3: "MOZ", numeric: "508", name: "Mozambique", region: "Africa", subregion: "Eastern Africa", independent: false },
    "NA": { alpha2: "NA", alpha3: "NAM", numeric: "516", name: "Namibia", region: "Africa", subregion: "Southern Africa", independent: false },
    "NC": { alpha2: "NC", alpha3: "NCL", numeric: "540", name: "New Caledonia", region: "Oceania", subregion: "Melanesia", independent: false },
    "NE": { alpha2: "NE", alpha3: "NER", numeric: "562", name: "Niger", region: "Africa", subregion: "Western Africa", independent: false },
    "NF": { alpha2: "NF", alpha3: "NFK", numeric: "574", name: "Norfolk Island", region: "Oceania", subregion: "Australia and New Zealand", independent: false },
    "NG": { alpha2: "NG", alpha3: "NGA", numeric: "566", name: "Nigeria", region: "Africa", subregion: "Western Africa", independent: false },
    "NI": { alpha2: "NI", alpha3: "NIC", numeric: "558", name: "Nicaragua", region: "Americas", subregion: "Central America", independent: false },
    "NL": { alpha2: "NL", alpha3: "NLD", numeric: "528", name: "Netherlands", region: "Europe", subregion: "Western Europe", independent: false },
    "NO": { alpha2: "NO", alpha3: "NOR", numeric: "578", name: "Norway", region: "Europe", subregion: "Northern Europe", independent: false },
    "NP": { alpha2: "NP", alpha3: "NPL", numeric: "524", name: "Nepal", region: "Asia", subregion: "Southern Asia", independent: false },
    "NR": { alpha2: "NR", alpha3: "NRU", numeric: "520", name: "Nauru", region: "Oceania", subregion: "Micronesia", independent: false },
    "NU": { alpha2: "NU", alpha3: "NIU", numeric: "570", name: "Niue", region: "Oceania", subregion: "Polynesia", independent: false },
    "NZ": { alpha2: "NZ", alpha3: "NZL", numeric: "554", name: "New Zealand", region: "Oceania", subregion: "Australia and New Zealand", independent: false },
    "OM": { alpha2: "OM", alpha3: "OMN", numeric: "512", name: "Oman", region: "Asia", subregion: "Western Asia", independent: false },
    "PA": { alpha2: "PA", alpha3: "PAN", numeric: "591", name: "Panama", region: "Americas", subregion: "Central America", independent: false },
    "PE": { alpha2: "PE", alpha3: "PER", numeric: "604", name: "Peru", region: "Americas", subregion: "South America", independent: false },
    "PF": { alpha2: "PF", alpha3: "PYF", numeric: "258", name: "French Polynesia", region: "Oceania", subregion: "Polynesia", independent: false },
    "PG": { alpha2: "PG", alpha3: "PNG", numeric: "598", name: "Papua New Guinea", region: "Oceania", subregion: "Melanesia", independent: false },
    "PH": { alpha2: "PH", alpha3: "PHL", numeric: "608", name: "Philippines", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "PK": { alpha2: "PK", alpha3: "PAK", numeric: "586", name: "Pakistan", region: "Asia", subregion: "Southern Asia", independent: false },
    "PL": { alpha2: "PL", alpha3: "POL", numeric: "616", name: "Poland", region: "Europe", subregion: "Central Europe", independent: false },
    "PM": { alpha2: "PM", alpha3: "SPM", numeric: "666", name: "Saint Pierre and Miquelon", region: "Americas", subregion: "North America", independent: false },
    "PN": { alpha2: "PN", alpha3: "PCN", numeric: "612", name: "Pitcairn Islands", region: "Oceania", subregion: "Polynesia", independent: false },
    "PR": { alpha2: "PR", alpha3: "PRI", numeric: "630", name: "Puerto Rico", region: "Americas", subregion: "Caribbean", independent: false },
    "PS": { alpha2: "PS", alpha3: "PSE", numeric: "275", name: "Palestine", region: "Asia", subregion: "Western Asia", independent: false },
    "PT": { alpha2: "PT", alpha3: "PRT", numeric: "620", name: "Portugal", region: "Europe", subregion: "Southern Europe", independent: false },
    "PW": { alpha2: "PW", alpha3: "PLW", numeric: "585", name: "Palau", region: "Oceania", subregion: "Micronesia", independent: false },
    "PY": { alpha2: "PY", alpha3: "PRY", numeric: "600", name: "Paraguay", region: "Americas", subregion: "South America", independent: false },
    "QA": { alpha2: "QA", alpha3: "QAT", numeric: "634", name: "Qatar", region: "Asia", subregion: "Western Asia", independent: false },
    "RE": { alpha2: "RE", alpha3: "REU", numeric: "638", name: "R\xE9union", region: "Africa", subregion: "Eastern Africa", independent: false },
    "RO": { alpha2: "RO", alpha3: "ROU", numeric: "642", name: "Romania", region: "Europe", subregion: "Southeast Europe", independent: false },
    "RS": { alpha2: "RS", alpha3: "SRB", numeric: "688", name: "Serbia", region: "Europe", subregion: "Southeast Europe", independent: false },
    "RU": { alpha2: "RU", alpha3: "RUS", numeric: "643", name: "Russia", region: "Europe", subregion: "Eastern Europe", independent: false },
    "RW": { alpha2: "RW", alpha3: "RWA", numeric: "646", name: "Rwanda", region: "Africa", subregion: "Eastern Africa", independent: false },
    "SA": { alpha2: "SA", alpha3: "SAU", numeric: "682", name: "Saudi Arabia", region: "Asia", subregion: "Western Asia", independent: false },
    "SB": { alpha2: "SB", alpha3: "SLB", numeric: "090", name: "Solomon Islands", region: "Oceania", subregion: "Melanesia", independent: false },
    "SC": { alpha2: "SC", alpha3: "SYC", numeric: "690", name: "Seychelles", region: "Africa", subregion: "Eastern Africa", independent: false },
    "SD": { alpha2: "SD", alpha3: "SDN", numeric: "729", name: "Sudan", region: "Africa", subregion: "Northern Africa", independent: false },
    "SE": { alpha2: "SE", alpha3: "SWE", numeric: "752", name: "Sweden", region: "Europe", subregion: "Northern Europe", independent: false },
    "SG": { alpha2: "SG", alpha3: "SGP", numeric: "702", name: "Singapore", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "SH": { alpha2: "SH", alpha3: "SHN", numeric: "654", name: "Saint Helena, Ascension and Tristan da Cunha", region: "Africa", subregion: "Western Africa", independent: false },
    "SI": { alpha2: "SI", alpha3: "SVN", numeric: "705", name: "Slovenia", region: "Europe", subregion: "Central Europe", independent: false },
    "SJ": { alpha2: "SJ", alpha3: "SJM", numeric: "744", name: "Svalbard and Jan Mayen", region: "Europe", subregion: "Northern Europe", independent: false },
    "SK": { alpha2: "SK", alpha3: "SVK", numeric: "703", name: "Slovakia", region: "Europe", subregion: "Central Europe", independent: false },
    "SL": { alpha2: "SL", alpha3: "SLE", numeric: "694", name: "Sierra Leone", region: "Africa", subregion: "Western Africa", independent: false },
    "SM": { alpha2: "SM", alpha3: "SMR", numeric: "674", name: "San Marino", region: "Europe", subregion: "Southern Europe", independent: false },
    "SN": { alpha2: "SN", alpha3: "SEN", numeric: "686", name: "Senegal", region: "Africa", subregion: "Western Africa", independent: false },
    "SO": { alpha2: "SO", alpha3: "SOM", numeric: "706", name: "Somalia", region: "Africa", subregion: "Eastern Africa", independent: false },
    "SR": { alpha2: "SR", alpha3: "SUR", numeric: "740", name: "Suriname", region: "Americas", subregion: "South America", independent: false },
    "SS": { alpha2: "SS", alpha3: "SSD", numeric: "728", name: "South Sudan", region: "Africa", subregion: "Middle Africa", independent: false },
    "ST": { alpha2: "ST", alpha3: "STP", numeric: "678", name: "S\xE3o Tom\xE9 and Pr\xEDncipe", region: "Africa", subregion: "Middle Africa", independent: false },
    "SV": { alpha2: "SV", alpha3: "SLV", numeric: "222", name: "El Salvador", region: "Americas", subregion: "Central America", independent: false },
    "SX": { alpha2: "SX", alpha3: "SXM", numeric: "534", name: "Sint Maarten", region: "Americas", subregion: "Caribbean", independent: false },
    "SY": { alpha2: "SY", alpha3: "SYR", numeric: "760", name: "Syria", region: "Asia", subregion: "Western Asia", independent: false },
    "SZ": { alpha2: "SZ", alpha3: "SWZ", numeric: "748", name: "Eswatini", region: "Africa", subregion: "Southern Africa", independent: false },
    "TC": { alpha2: "TC", alpha3: "TCA", numeric: "796", name: "Turks and Caicos Islands", region: "Americas", subregion: "Caribbean", independent: false },
    "TD": { alpha2: "TD", alpha3: "TCD", numeric: "148", name: "Chad", region: "Africa", subregion: "Middle Africa", independent: false },
    "TF": { alpha2: "TF", alpha3: "ATF", numeric: "260", name: "French Southern and Antarctic Lands", region: "Antarctic", subregion: null, independent: false },
    "TG": { alpha2: "TG", alpha3: "TGO", numeric: "768", name: "Togo", region: "Africa", subregion: "Western Africa", independent: false },
    "TH": { alpha2: "TH", alpha3: "THA", numeric: "764", name: "Thailand", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "TJ": { alpha2: "TJ", alpha3: "TJK", numeric: "762", name: "Tajikistan", region: "Asia", subregion: "Central Asia", independent: false },
    "TK": { alpha2: "TK", alpha3: "TKL", numeric: "772", name: "Tokelau", region: "Oceania", subregion: "Polynesia", independent: false },
    "TL": { alpha2: "TL", alpha3: "TLS", numeric: "626", name: "Timor-Leste", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "TM": { alpha2: "TM", alpha3: "TKM", numeric: "795", name: "Turkmenistan", region: "Asia", subregion: "Central Asia", independent: false },
    "TN": { alpha2: "TN", alpha3: "TUN", numeric: "788", name: "Tunisia", region: "Africa", subregion: "Northern Africa", independent: false },
    "TO": { alpha2: "TO", alpha3: "TON", numeric: "776", name: "Tonga", region: "Oceania", subregion: "Polynesia", independent: false },
    "TR": { alpha2: "TR", alpha3: "TUR", numeric: "792", name: "T\xFCrkiye", region: "Asia", subregion: "Western Asia", independent: false },
    "TT": { alpha2: "TT", alpha3: "TTO", numeric: "780", name: "Trinidad and Tobago", region: "Americas", subregion: "Caribbean", independent: false },
    "TV": { alpha2: "TV", alpha3: "TUV", numeric: "798", name: "Tuvalu", region: "Oceania", subregion: "Polynesia", independent: false },
    "TW": { alpha2: "TW", alpha3: "TWN", numeric: "158", name: "Taiwan", region: "Asia", subregion: "Eastern Asia", independent: false },
    "TZ": { alpha2: "TZ", alpha3: "TZA", numeric: "834", name: "Tanzania", region: "Africa", subregion: "Eastern Africa", independent: false },
    "UA": { alpha2: "UA", alpha3: "UKR", numeric: "804", name: "Ukraine", region: "Europe", subregion: "Eastern Europe", independent: false },
    "UG": { alpha2: "UG", alpha3: "UGA", numeric: "800", name: "Uganda", region: "Africa", subregion: "Eastern Africa", independent: false },
    "UM": { alpha2: "UM", alpha3: "UMI", numeric: "581", name: "United States Minor Outlying Islands", region: "Americas", subregion: "North America", independent: false },
    "US": { alpha2: "US", alpha3: "USA", numeric: "840", name: "United States", region: "Americas", subregion: "North America", independent: false },
    "UY": { alpha2: "UY", alpha3: "URY", numeric: "858", name: "Uruguay", region: "Americas", subregion: "South America", independent: false },
    "UZ": { alpha2: "UZ", alpha3: "UZB", numeric: "860", name: "Uzbekistan", region: "Asia", subregion: "Central Asia", independent: false },
    "VA": { alpha2: "VA", alpha3: "VAT", numeric: "336", name: "Vatican City", region: "Europe", subregion: "Southern Europe", independent: false },
    "VC": { alpha2: "VC", alpha3: "VCT", numeric: "670", name: "Saint Vincent and the Grenadines", region: "Americas", subregion: "Caribbean", independent: false },
    "VE": { alpha2: "VE", alpha3: "VEN", numeric: "862", name: "Venezuela", region: "Americas", subregion: "South America", independent: false },
    "VG": { alpha2: "VG", alpha3: "VGB", numeric: "092", name: "British Virgin Islands", region: "Americas", subregion: "Caribbean", independent: false },
    "VI": { alpha2: "VI", alpha3: "VIR", numeric: "850", name: "United States Virgin Islands", region: "Americas", subregion: "Caribbean", independent: false },
    "VN": { alpha2: "VN", alpha3: "VNM", numeric: "704", name: "Vietnam", region: "Asia", subregion: "South-Eastern Asia", independent: false },
    "VU": { alpha2: "VU", alpha3: "VUT", numeric: "548", name: "Vanuatu", region: "Oceania", subregion: "Melanesia", independent: false },
    "WF": { alpha2: "WF", alpha3: "WLF", numeric: "876", name: "Wallis and Futuna", region: "Oceania", subregion: "Polynesia", independent: false },
    "WS": { alpha2: "WS", alpha3: "WSM", numeric: "882", name: "Samoa", region: "Oceania", subregion: "Polynesia", independent: false },
    "XK": { alpha2: "XK", alpha3: "UNK", numeric: null, name: "Kosovo", region: "Europe", subregion: "Southeast Europe", independent: false },
    "YE": { alpha2: "YE", alpha3: "YEM", numeric: "887", name: "Yemen", region: "Asia", subregion: "Western Asia", independent: false },
    "YT": { alpha2: "YT", alpha3: "MYT", numeric: "175", name: "Mayotte", region: "Africa", subregion: "Eastern Africa", independent: false },
    "ZA": { alpha2: "ZA", alpha3: "ZAF", numeric: "710", name: "South Africa", region: "Africa", subregion: "Southern Africa", independent: false },
    "ZM": { alpha2: "ZM", alpha3: "ZMB", numeric: "894", name: "Zambia", region: "Africa", subregion: "Eastern Africa", independent: false },
    "ZW": { alpha2: "ZW", alpha3: "ZWE", numeric: "716", name: "Zimbabwe", region: "Africa", subregion: "Eastern Africa", independent: false }
  };
  var BY_ALPHA3 = Object.fromEntries(
    Object.values(COUNTRIES).map((c) => [c.alpha3, c.alpha2])
  );
  var REGIONS = [...new Set(Object.values(COUNTRIES).map((c) => c.region).filter(Boolean))].sort();
  function normalizeCode(code) {
    if (typeof code !== "string") return null;
    const c = code.trim().toUpperCase();
    if (c in COUNTRIES) return c;
    if (c in BY_ALPHA3) return BY_ALPHA3[c];
    return null;
  }
  function isValidCode(code) {
    return normalizeCode(code) !== null;
  }
  function countryName(code) {
    const c = normalizeCode(code);
    return c ? COUNTRIES[c].name : null;
  }
  function listCountries({ region, text } = {}) {
    let list = Object.values(COUNTRIES);
    if (region) list = list.filter((c) => c.region === region);
    if (text) {
      const q = String(text).trim().toLowerCase();
      if (q) {
        list = list.filter(
          (c) => c.name.toLowerCase().includes(q) || c.alpha2.toLowerCase().startsWith(q) || c.alpha3.toLowerCase().startsWith(q)
        );
      }
    }
    return list;
  }

  // src/country-store.js
  var CountryStore = class {
    /**
     * @param {object} [options]
     * @param {{read: () => object|null, write: (data: object) => void}} [options.storage]
     *   Persistence adapter. Data on disk always wins over `initialData`.
     * @param {object} [options.initialData]  Seed records: { "US": {...}, ... }
     */
    constructor({ storage = null, initialData = null } = {}) {
      this._data = {};
      this._listeners = /* @__PURE__ */ new Set();
      this._storage = storage || null;
      const persisted = this._storage ? this._storage.read() : null;
      if (persisted && typeof persisted === "object") {
        this._data = { ...persisted };
      }
      if (initialData) {
        for (const [code, record] of Object.entries(initialData)) {
          const c = normalizeCode(code);
          if (c) this._data[c] = record;
        }
      }
    }
    /** Number of records. */
    get size() {
      return Object.keys(this._data).length;
    }
    /** All codes that have a record, sorted. */
    codes() {
      return Object.keys(this._data).sort();
    }
    /** The record for a country, or undefined. */
    get(code) {
      const c = normalizeCode(code);
      return c ? this._data[c] : void 0;
    }
    /** True if the country has a record. */
    has(code) {
      return this.get(code) !== void 0;
    }
    /**
     * Create or replace the record for a country.
     * @param {string} code  ISO alpha-2 or alpha-3.
     * @param {*} record     Any JSON-serializable value (object, array, string, number…).
     */
    set(code, record) {
      const c = normalizeCode(code);
      if (!c) throw new Error(`Unknown country code: ${JSON.stringify(code)}`);
      this._data[c] = record;
      this._persist();
      this._emit({ type: "set", code: c });
      return this;
    }
    /** Shallow-merge `patch` into an existing (or empty) record. */
    update(code, patch) {
      const c = normalizeCode(code);
      if (!c) throw new Error(`Unknown country code: ${JSON.stringify(code)}`);
      const prev = this._data[c];
      const next = prev && typeof prev === "object" && !Array.isArray(prev) ? { ...prev, ...patch && typeof patch === "object" ? patch : { value: patch } } : patch;
      return this.set(c, next);
    }
    /** Delete a record. Returns true if something was deleted. */
    delete(code) {
      const c = normalizeCode(code);
      if (!c || !(c in this._data)) return false;
      delete this._data[c];
      this._persist();
      this._emit({ type: "delete", code: c });
      return true;
    }
    /** Delete every record. */
    clear() {
      this._data = {};
      this._persist();
      this._emit({ type: "clear" });
      return this;
    }
    /** [[code, record], ...] sorted by code. */
    entries() {
      return this.codes().map((c) => [c, this._data[c]]);
    }
    /**
     * Find records.
     * @param {object} [filter]
     * @param {string} [filter.text]    Matches code, country name or the record's JSON.
     * @param {string} [filter.region]  ISO region name, e.g. "Europe".
     * @returns {Array<{code: string, name: string, region: string|null, record: *}>}
     */
    query({ text, region } = {}) {
      const q = text ? String(text).trim().toLowerCase() : "";
      return this.entries().map(([code, record]) => {
        const meta = COUNTRIES[code] || {};
        return { code, name: meta.name || code, region: meta.region || null, record };
      }).filter(
        (r) => (!region || r.region === region) && (!q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q) || JSON.stringify(r.record).toLowerCase().includes(q))
      );
    }
    /**
     * Replace (or merge into) the store from parsed JSON.
     * Accepts either the module's own export format `{ records: { US: {...} } }`
     * or a bare `{ "US": {...} }` map.
     */
    importJSON(json, { merge = false } = {}) {
      const source = json && typeof json === "object" && json.records && typeof json.records === "object" ? json.records : json;
      if (!source || typeof source !== "object" || Array.isArray(source)) {
        throw new Error("Import expects an object mapping country codes to records.");
      }
      if (!merge) this._data = {};
      let imported = 0;
      for (const [code, record] of Object.entries(source)) {
        const c = normalizeCode(code);
        if (!c) continue;
        this._data[c] = record;
        imported++;
      }
      this._persist();
      this._emit({ type: "import", imported });
      return imported;
    }
    /** Export the whole store: { version, exportedAt, records }. */
    exportJSON() {
      return {
        version: 1,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        records: { ...this._data }
      };
    }
    /** Subscribe to changes. Returns an unsubscribe function. */
    subscribe(fn) {
      this._listeners.add(fn);
      return () => this._listeners.delete(fn);
    }
    _persist() {
      if (this._storage) this._storage.write({ ...this._data });
    }
    _emit(event) {
      for (const fn of [...this._listeners]) fn(event, this);
    }
  };
  function localStorageAdapter(key = "worldmap-module:data") {
    return {
      read() {
        try {
          const raw = localStorage.getItem(key);
          return raw ? JSON.parse(raw) : null;
        } catch {
          return null;
        }
      },
      write(data) {
        try {
          localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
          console.warn("[worldmap-module] Could not persist data:", e);
        }
      }
    };
  }
  function memoryAdapter(initial = null) {
    let data = initial;
    return {
      read: () => data,
      write: (d) => {
        data = d;
      }
    };
  }

  // assets/world-paths.js
  var MAP_WIDTH = 960;
  var MAP_HEIGHT = 481;
  var WORLD_PATHS = [
    { code: "AE", d: "M617.5 239.9L618.1 240.5L620.2 240.1L622.4 240.2L624 240.2L625.8 238.3L627.8 236.5L629.5 234.8L630 235.7L630.4 238L629 238L628.8 239.8L628.1 240.8L628.1 241.9L627.3 243.1L627.2 244.2L626.7 244.8L618.7 243.4L617.7 240.6L617.5 239.9Z", bbox: [617.5, 234.8, 630.4, 244.8] },
    { code: "AF", d: "M657.4 201.3L658.9 201.4L660.9 202L661.7 202.4L663.6 201.4L664.5 202L665.4 200.6L667 200.6L667.7 198.9L668.8 197.9L670.3 198.6L670 199.5L670.8 199.7L670.5 202.2L671.6 203.3L672.5 202.6L673.7 202.3L675.4 200.9L677.2 201.2L679.9 201.2L680.4 202L678.9 202.4L677.5 203L674.5 203.3L671.6 203.9L670 205.3L670.7 206.6L671 208.1L669.6 209.3L669.8 210.5L669 211.6L666.5 211.5L667.5 213.5L665.8 214.2L664.7 216L664.8 217.8L663.8 218.6L662.8 218.3L660.8 218.7L660.5 219.6L658.5 219.6L657 221.2L656.9 223.7L653.5 224.9L651.6 224.7L649.5 224.9L646.8 225.4L642.3 223.9L644.8 221.2L644.5 219.3L642.5 218.8L642.3 217L641.4 214.6L642.6 213L641.4 212.5L642.1 210.3L643.2 206.6L646 207.7L648 207.3L648.5 205.9L650.6 205.5L652.1 204.6L652.7 202.1L654.9 201.5L655.3 200.4L656.6 201.2L657.4 201.3Z", bbox: [641.4, 197.9, 680.4, 225.4] },
    { code: "AL", d: "M536.1 190.5L536 191.3L535.1 191.8L535 192.8L533.7 194.3L533.2 193.4L531.7 192.3L531.5 190.8L531.7 188.7L532.1 187.7L531.5 186.2L532.6 184.6L533.5 184.9L534.1 185.8L534.7 186.1L534.9 187.3L534.6 188.3L534.9 189.7L536.1 190.5Z", bbox: [531.5, 184.6, 536.1, 194.3] },
    { code: "AM", d: "M604 197L603 197.1L602 195.3L600.8 194.8L600 194L598.4 193.1L596.4 192.3L596.7 190.8L596.2 189.7L599.9 189.2L600.5 190L601.5 190.6L601 191.4L602.4 192.4L601.6 193.5L602.8 194.3L604 194.8L604 197Z", bbox: [596.2, 189.2, 604, 197.1] },
    { code: "AO", d: "M514.7 318.6L513.7 319.1L513.2 319.8L513.2 321L512.5 321.3L511.8 319.3L512.8 318.1L513.7 317.7L514.7 318.6ZM512.9 322.1L514 321.8L514.7 321.8L515.7 321.5L523.5 321.5L524.2 323.5L525 325.1L525.6 326L526.6 327.4L528.4 327.2L529.2 326.8L530.7 327.2L531.1 326.5L531.8 324.9L533.4 324.8L534.9 324.4L534.7 325.3L537.9 325.3L538 327L538.5 328L538.1 329.6L538.3 331.3L539.2 332.3L539.1 335.5L539.7 335.3L540.9 335.3L542.5 334.9L543.8 335.1L544 335.9L543.7 337.2L544.2 338.5L543.8 339.5L544 340.4L538.5 340.4L538.4 349.1L540.2 351.3L541.9 353L537 354.1L530.5 353.8L528.7 352.4L517.9 352.6L515.9 351.5L514.2 351.4L512.6 351.9L511.3 352.4L511 350.7L511.4 348.3L512.3 345.8L512.5 344.6L513.3 342.2L514 341.1L515.5 339.3L516.4 338.1L516.6 336.1L516.5 334.5L515.7 333.6L515 332L514.3 330.3L515.3 328.7L514.5 326.1L513.9 324.3L512.6 322.6Z", bbox: [511, 317.7, 544.2, 354.1] },
    { code: "AR", d: "M297 460.9L298 462.5L299.3 465.2L302.8 467.5L306.5 468.4L305.3 470.2L302.8 470.4L301.4 469.1L299.8 469L297 469L297 460.9ZM326.3 388.9L325.7 391.3L325 394.3L325 397.2L324.4 397.9L324.2 399.8L324 401.4L327.4 404L327 406.1L328.7 407.4L328.6 408.9L326 412.8L322 414.5L316.7 415.2L313.8 414.8L314.3 416.7L313.8 419.1L314.3 420.6L312.7 421.8L309.9 422.2L307.4 421L306.3 421.9L306.7 425L308.5 426L310 425L310.8 426.7L308.3 427.7L306.2 429.7L305.8 433L305.2 434.7L302.6 434.7L300.6 436.4L299.8 438.9L302.4 441.4L305 442.1L304 445.1L300.9 447L299.2 451.1L296.7 452.5L295.6 454.1L296.5 457.8L298.3 459.8L297.1 459.6L294.7 459.1L288.2 458.6L287.1 456.5L287.2 453.9L285.4 454.1L284.5 452.8L284.2 449.2L286.3 447.7L287.1 445.5L286.8 443.8L288.2 440.9L289.2 436.5L288.9 434.5L290.1 433.9L289.8 432.7L288.6 432L289.4 430.6L288.2 429.4L287.6 425.7L288.7 425L288.2 421.1L288.8 417.9L289.6 415.1L291.2 414L290.4 411L290.3 408.2L292.4 406.2L292.3 403.6L293.8 400.7L293.8 397.9L293.1 397.4L291.9 392.3L293.6 389.3L293.3 386.4L294.3 383.8L296 381.1L297.9 379.3L297.1 378.2L297.6 377.3L297.6 372.5L300.5 371.1L301.4 368.2L301 367.5L303.3 365L306.8 365.6L308.3 367.7L309.4 365.4L312.4 365.5L312.8 366.1L317.7 370.7L319.9 371.1L323.2 373.2L325.9 374.3L326.3 375.6L323.7 380L326.4 380.7L329.4 381.2L331.5 380.7L333.9 378.5L334.3 376L335.7 375.4L337 377.1L336.9 379.4L334.7 381L332.9 382.1L329.9 384.9L326.3 388.9Z", bbox: [284.2, 365, 337, 470.4] },
    { code: "AT", d: "M525.3 166.6L525.1 168L523.6 168L524.1 168.7L523.2 170.9L520.4 171.5L519 172.3L516.8 172L513 171.2L512.4 170L509.8 170.6L509.5 171.2L507.8 170.7L506.5 170.7L505.3 170L505.7 169.2L506.4 168.4L507.7 169.4L508.1 168.5L510.5 168.6L512.4 168L513.7 168.1L514.5 168.8L514.4 166L515.3 165.6L516.3 164L518.2 165.1L519.7 163.7L520.7 163.4L522.7 164.5L524 164.3L525.2 165L525.3 166.6Z", bbox: [505.3, 163.4, 525.3, 172.3] },
    { code: "AU", d: "M873.8 421.1L875.4 421.3L875.6 425.1L874.7 426.2L874.4 428.8L873.5 427.9L871.7 430.1L869.5 429.9L867.8 427.1L867.5 425L865.9 422.2L866 420.7L867.7 421L870.3 422.1L871.8 421.7L873.8 421.1ZM816.4 394.8L813.6 396.3L811.3 397L810.7 398.6L809.8 399.8L807.5 399.8L805.8 400.1L803.5 399.6L801.6 399.9L799.7 400L798.1 401.6L797.4 401.5L796 402.4L794.7 403.3L792.8 403.2L791 403.2L788.2 401.3L786.7 400.7L786.8 399L788.1 398.6L788.6 397.9L788.5 396.8L788.8 394.8L788.5 393L787.1 390L786.7 388.4L786.8 386.7L785.7 384.8L785.6 384L784.5 382.8L784.1 380.6L782.6 378.3L782.2 377.1L783.4 378.3L782.5 375.7L783.8 376.5L784.6 377.6L784.6 376.1L783.3 373.9L783 373L782.4 372.1L782.7 370.5L783.2 369.8L783.6 368.4L783.3 366.8L784.4 364.8L784.6 366.9L785.7 365L787.9 364L789.2 362.8L791.2 361.8L792.4 361.6L793.2 361.9L795.3 360.9L796.9 360.6L797.3 360L798 359.7L799.5 359.8L802.3 359L803.7 357.8L804.4 356.3L806 354.9L806.1 353.8L806.2 352.3L808 350L809.2 352.3L810.3 351.8L809.3 350.5L810.2 349.2L811.4 349.7L811.7 347.7L813.1 346.3L813.8 345.3L815.1 344.8L815.2 344L816.3 344.3L816.4 343.7L817.6 343.3L818.8 342.9L820.8 344.1L822.3 345.8L824 345.8L825.7 346L825.1 344.5L826.4 342.4L827.6 341.7L827.2 341L828.3 339.4L829.9 338.5L831.3 338.8L833.5 338.3L833.5 336.9L831.5 336L833 335.6L834.7 336.3L836.1 337.4L838.4 338.1L839.1 337.8L840.8 338.6L842.4 337.9L843.4 338.1L845.2 338.9L844.5 340.4L843.5 341.5L842.6 341.6L842.9 342.6L842.1 344L841.1 345.3L841.3 346.1L843.5 347.6L845.5 348.5L846.9 349.4L848.8 351.1L849.6 351.1L851 351.8L851.4 352.6L853.9 353.5L855.7 352.6L856.2 351.1L856.7 349.9L857.1 348.4L857.9 346.2L857.5 344.9L857.7 344.1L857.4 342.6L857.7 340.5L857.8 339.1L858.5 337.6L859 336.2L859 335.4L860 334.4L860.8 335.7L861 337.4L861.6 337.7L861.8 338.9L862.7 340.2L862.9 341.8L862.8 342.8L863.8 344.9L865.5 343.9L866.4 345L867.7 346.1L867.4 347.3L868 349.6L868.4 351L869 351.3L869.8 353.7L869.5 355.1L870.4 357L873.3 358.4L875.1 359.7L876.9 361L876.6 361.6L878.1 363.4L879.1 366.4L880.2 365.8L881.3 367L881.9 366.6L882.4 369.5L884.3 371.3L885.5 372.4L887.6 374.6L888.4 376.9L888.4 378.6L888.2 380.3L889.5 382.8L889.4 385.3L888.9 386.7L888.2 389.3L888.2 391L887.7 393.1L886.5 395.8L884.6 397.2L883.6 399.6L882.7 401L881.9 403.6L880.9 405.1L880.2 407.4L879.9 409.5L880 410.5L878.5 411.6L875.5 411.7L873 413L871.8 414.2L870.2 415.5L868 414.1L866.3 413.6L866.8 412L865.3 412.5L863 414.8L860.7 413.9L859.1 413.5L857.6 413.2L855 412.3L853.3 410.4L852.8 408.1L852.2 406.6L850.9 405.3L848.3 405L849.2 403.5L848.6 401.3L847.2 403.3L844.9 403.9L846.3 402.2L846.7 400.5L847.7 399L847.5 396.8L845.3 399.4L843.7 400.4L842.6 402.8L840.6 401.5L840.6 399.9L839 397.8L837.6 396.7L838.1 396L834.6 394.2L832.8 394.1L830.2 392.7L825.4 392.9L822 394L818.9 395L816.4 394.8Z", bbox: [782.2, 334.4, 889.5, 430.1] },
    { code: "AZ", d: "M603.8 187.2L604.5 187.3L606.3 189.3L607.5 189.5L608 188.7L609.6 187.4L611 189.1L612.3 191.3L613.6 191.5L614.4 192.3L612.2 192.6L611.7 195L611.3 196.1L610.3 196.8L610.4 198.4L609.7 198.5L608 196.9L608.9 195.4L608.2 194.4L607.2 194.7L604 197L604 194.8L602.8 194.3L601.6 193.5L602.4 192.4L601 191.4L601.5 190.6L600.5 190L599.9 189.2L600.6 188.7L602.6 189.6L604 189.8L603.1 187.7L603.8 187.2ZM603 197.1L601.2 196.7L599.9 195.2L599.4 194L600 194L600.8 194.8L602 194.8L603 197.1Z", bbox: [599.4, 187.2, 614.4, 198.5] },
    { code: "BA", d: "M529.5 184.7L527.1 183.5L526.1 182.1L525.1 181.4L523.9 180.2L523.3 179.2L522 177.6L522.6 176.3L523.5 177L524.1 176.3L525.3 176.3L527.6 176.8L529.5 176.8L530.7 177.5L531.6 177.5L531 178.9L532.3 180.2L531.9 181.7L531.3 181.9L529.9 182.9L529.5 184.7Z", bbox: [522, 176.3, 532.3, 184.7] },
    { code: "BD", d: "M727.1 246.1L727.1 248.1L726.1 247.7L726.3 249.9L725.6 248.5L725.4 247L724.9 245.7L723.8 244.1L721.3 244L721.6 245.1L720.7 246.7L719.6 246.1L718.5 246.3L717.4 246.1L717 243.7L716.1 241.6L716.5 239.9L714.9 239.2L715.5 238.1L717.1 237.1L715.2 235.6L716.2 233.6L718.3 234.9L719.6 235L719.8 237L722.3 237.4L724.8 237.3L726.3 237.8L725.1 240.2L723.9 240.4L723.1 242L724.5 243.4L725 241.7L725.7 241.6L727.1 246.1Z", bbox: [714.9, 233.6, 727.1, 249.9] },
    { code: "BE", d: "M496.4 157.3L496.1 159.7L495.4 159.8L495.1 161.8L492.8 160.2L491.4 160.4L489.6 158.8L488.3 157.4L487.1 157.3L486.7 156.1L488.8 155.4L490.8 155.7L493.3 154.9L495 156.5L496.4 157.3Z", bbox: [486.7, 154.9, 496.4, 161.8] },
    { code: "BF", d: "M465.6 278.1L465.4 276.5L466.1 275.4L466.1 274.4L468.2 272.2L468.6 270.3L469.3 269.7L470.6 270L471.7 269.5L472.1 268.8L474.2 267.6L474.7 266.7L477.2 265.6L478.6 265.2L479.3 265.7L481 265.7L480.8 267L481.1 268.3L482.6 270.1L482.7 271.4L485.8 272L485.7 273.8L485.2 274.6L483.9 274.9L483.3 276.1L482.4 276.4L480.1 276.3L478.8 276.1L478 276.5L476.8 276.4L472.2 276.5L472.1 278L472.5 280L470.6 279.3L469.4 279.4L468.5 280.1L467.3 279.5L466.8 278.7L465.6 278.1Z", bbox: [465.4, 265.2, 485.8, 280.1] },
    { code: "BG", d: "M540.4 179.6L541.2 180.9L542.2 180.7L544.3 181.2L548.2 181.3L549.5 180.5L552.6 179.8L554.6 180.9L556.2 181.3L554.8 182.6L553.8 184.9L554.7 186.8L552.4 186.3L549.6 187.3L549.6 188.9L547.2 189.2L545.3 188.1L543.2 189L541.2 188.9L541 186.8L539.7 185.8L539.8 184.9L540.3 183.9L541.3 182.9L540 181.5L539.8 180.3L540.4 179.6Z", bbox: [539.7, 179.6, 556.2, 189.2] },
    { code: "BI", d: "M561.3 312.3L561.4 313.3L562 313.9L562 314.8L561.3 315.3L560.3 316.7L559.3 317.7L558.2 317.8L558.1 314.6L557.4 313.4L559 313.6L559.8 312.1L561.3 312.3Z", bbox: [557.4, 312.1, 562, 317.8] },
    { code: "BJ", d: "M487.2 289.1L485 289.4L484.3 287.6L484.4 281.4L483.8 279.5L482.9 278.6L482.1 277.8L482.4 276.4L483.3 276.1L483.9 274.9L485.2 274.6L485.7 273.8L486.6 273L487.6 273L489.6 274.6L489.5 275.5L490.1 277.1L489.6 278.2L489.9 278.9L488.6 280.6L487.8 281.4L487.3 283.1L487.3 284.8L487.2 289.1Z", bbox: [482.1, 273, 490.1, 289.4] },
    { code: "BN", d: "M787.9 291.3L787.7 292.6L787.6 294.3L786.3 294.2L785.8 295.1L784.5 293.7L785.6 292.7L787.9 291.3Z", bbox: [784.5, 291.3, 787.9, 295.1] },
    { code: "BO", d: "M294.6 335.1L296.6 335.4L297.9 335.3L298.5 334.5L300.9 333.4L302.3 332.4L305.8 331.9L305.5 334L305.8 335L305.6 336.8L308.5 339.2L311.5 339.7L312.5 340.7L314.3 341.2L315.4 342L317.1 342L318.7 342.8L318.8 344.4L319.3 345.2L319.3 346.3L318.6 346.4L319.6 349.6L324.7 349.7L324.3 351.3L324.6 352.3L326 353.1L326.7 354.8L326.2 357L325.5 358.2L325.7 359.8L324.9 360.4L324.8 359.5L322.4 358.1L319.9 358L315.2 358.8L314 361.3L313.9 362.8L312.8 366.1L309.4 365.4L308.3 367.7L306.8 365.6L303.3 365L301 367.5L299.1 367.9L298.1 364L296.6 360.9L297.5 358.2L296.1 357L295.7 355.1L294.4 353.2L296.1 350.2L295 347.9L295.6 347L295.1 346L296.1 344.6L296.2 342.3L296.3 340.4L296.9 339.5L294.6 335.1Z", bbox: [294.4, 331.9, 326.7, 367.9] },
    { code: "BR", d: "M337.7 399.4L336.9 397.7L338.1 396.3L336.6 394.3L334.5 392.7L331.7 390.8L330.7 390.9L328.1 388.6L326.3 388.9L329.9 384.9L332.9 382.1L334.7 381L336.9 379.4L337 377.1L335.7 375.4L334.3 376L334.9 374.3L335.2 372.7L335.2 371.1L334.3 370.6L333.3 371.1L332.3 370.9L332 369.8L331.7 367.3L331.2 366.4L329.4 365.7L328.3 366.2L325.5 365.7L325.7 361.9L324.9 360.4L325.7 359.8L325.5 358.2L326.2 357L326.7 354.8L326 353.1L324.6 352.3L324.3 351.3L324.7 349.7L319.6 349.6L318.6 346.4L319.3 346.3L319.3 345.2L318.8 344.4L318.7 342.8L317.1 342L315.4 342L314.3 341.2L312.5 340.7L311.5 339.7L308.5 339.2L305.6 336.8L305.8 335L305.5 334L305.8 331.9L302.3 332.4L300.9 333.4L298.5 334.5L297.9 335.3L296.6 335.4L294.6 335.1L293.1 335.6L291.9 335.3L292 331.2L289.9 332.8L287.5 332.7L286.5 331.3L284.7 331.1L285.3 330L283.8 328.3L282.7 325.9L283.4 325.4L283.4 324.3L285 323.5L284.7 322.1L285.4 321.1L285.6 319.9L288.7 318.1L290.9 317.6L293.6 317.3L294.8 310L294.9 308.8L294.5 307.3L293.3 306.3L293.3 304.4L294.8 303.9L295.4 303.2L293.9 302.9L293.8 301.3L299 301.3L299.9 300.4L300.6 301.2L301.2 302.8L303.1 303.9L305.2 303.7L305.7 302.9L307.7 302.3L308.8 301.8L309.1 300.7L311 300L310.9 299.4L308.6 299.2L308.2 297.5L308.4 295.7L307.2 295L309.6 295.1L311.8 295.8L312.5 295.1L314.4 294.7L317.4 293.7L318.4 292.7L318 291.9L319.4 291.8L320 292.4L319.7 293.6L320.6 294L321.2 295.3L320.5 296.2L320.1 298.5L320.7 299.8L320.9 301.1L322.6 302.3L323.9 302.4L325 301.8L326.2 301.3L327.1 300.6L328.6 300.9L329.2 300.8L330.7 301L330.5 299.9L330.7 299.1L331.8 299.4L333.1 299.1L334.6 299.7L335.8 300.2L336.6 299.5L337.5 300.3L338.8 300.2L339.9 299.1L340.7 297.2L342.2 294.7L343.2 294.6L343.8 296.1L345.3 300.8L346.7 301.2L346.8 303L344.8 305.2L345.6 306L350.3 306.5L350.4 309.1L352.5 307.4L355.8 308.3L360.3 310L361.5 311.5L361.1 313L364.2 312.2L369.4 313.6L373.4 313.5L377.3 315.7L380.7 318.7L382.8 319.5L385.1 319.6L386 320.4L386.9 323.8L387.4 325.4L386.3 329.9L385 331.6L381.2 335.4L379.5 338.4L377.5 340.8L376.9 340.8L376.1 342.8L376.3 347.9L375.6 352.2L375.3 354L374.4 355.1L374 358.8L371.3 362.4L370.8 365.3L368.7 366.5L368 368.2L365.1 368.1L360.9 369.2L359.1 370.5L356.1 371.3L352.9 373.6L350.7 376.4L350.3 378.5L350.7 380.1L350.2 383L349.6 384.4L347.8 386L344.8 391.2L342.5 393.5L340.6 394.9L339.4 397.7L337.7 399.4Z", bbox: [282.7, 291.8, 387.4, 399.4] },
    { code: "BS", d: "M269.4 232.7L270.6 232.4L272.4 232.5L272.5 233.3L269.6 233.7L269.4 232.7ZM272.6 231.9L274.7 233.2L274.2 235.3L273.8 233.4L272.6 232.3ZM271.5 237.2L272.3 237.3L273.2 239.6L273.2 241.3L272.6 241.4L271.9 239.8L270.9 239L271.5 237.2Z", bbox: [269.4, 231.9, 274.7, 241.4] },
    { code: "BT", d: "M724.5 229.8L725.6 230.8L725.4 232.5L723.2 232.6L721 232.4L719.3 232.9L716.9 231.8L716.8 231.2L718.6 229.1L720 228.3L721.9 229L723.4 229.1L724.5 229.8Z", bbox: [716.8, 228.3, 725.6, 232.9] },
    { code: "BW", d: "M558.5 365.7L554.7 367.8L552.3 369.9L551.4 371.7L550.6 372.8L549.2 373L548.7 374.4L548.4 375.3L546.7 375.9L544.6 375.8L543.3 375L542.2 374.7L540.9 375.3L540.2 376.7L538.9 377.5L537.6 378.8L535.7 379.1L535.1 378.1L535.4 376.4L533.8 373.7L533.1 373.2L533.1 365L535.7 364.9L535.8 355L537.7 354.9L541.9 354L542.9 355.1L544.6 354L545.4 354L546.9 353.4L548.4 355.8L549.8 357.9L552.8 361L553.9 361.3L553.9 362.2L554.7 364L556.8 364.4L558.5 365.7Z", bbox: [533.1, 353.4, 558.5, 379.1] },
    { code: "BY", d: "M555.1 137.8L557.9 138.7L558.3 139.7L559.7 139.2L562.3 140.1L562.6 141.9L562 142.9L563.7 145.3L564.8 145.9L564.6 146.6L566.4 147.2L567.2 148.2L566.1 149L564 148.9L564.1 150.4L564.8 152.7L562.5 152.9L561.7 153.7L561.5 155.5L560.4 155.2L558 155.3L557.3 154.5L556.3 155.1L555.3 154.6L553.2 154.5L550.2 153.7L547.5 153.4L545.5 153.5L544 154.4L542.7 154.6L542.7 153L541.9 151.3L543.5 150.6L543.5 149.2L542.7 147.8L542.6 146.2L545.2 146.2L548.1 144.8L548.7 142.7L550.9 141.5L550.7 139.9L552.3 139.2L555.1 137.8Z", bbox: [541.9, 137.8, 567.2, 155.5] },
    { code: "BZ", d: "M242.3 257.8L243.1 257.6L244 256L245.1 256.4L245 257.1L244.6 258.3L244.5 259.7L244.4 261.3L243.9 262.1L242.9 263.1L242.1 263.1L242.3 260L242.3 257.8Z", bbox: [242.1, 256, 245.1, 263.1] },
    { code: "CA", d: "M152.4 163.6L146.9 160.2L145 158.7L140.2 157.2L138.7 154.1L139.1 151.9L135.6 150.4L135.2 147.4L132 144.8L131.9 142.9L133.4 141.1L133.3 138.8L128.8 136.4L126 132L124.4 129.2L121.9 127.5L120.1 125.9L118.7 123.8L116.1 125.1L113.5 127.3L111.1 124.7L109.2 123L106.6 121.9L104 121.7L104 97.8L104 80.9L109 82L113.2 84.3L116 84.7L118.3 82.7L121.6 81.3L125.5 81.8L129.5 79.8L133.9 78.6L135.7 80.5L137.7 79.4L138.3 77.2L140.1 77.7L144.7 82L148.2 78.7L148.6 82.3L151.8 81.6L152.8 80.2L156.1 80.5L160.1 82.4L166.4 84.2L170.1 85L172.7 84.7L176.3 87L172.5 89.3L177.3 90.3L184.5 89.7L186.8 88.9L189.6 91.7L192.5 89.4L189.8 87.4L191.6 85.8L194.8 85.6L196.9 85.2L199.1 86.3L201.8 88.8L204.7 88.4L209.5 90.5L213.6 89.7L217.5 89.8L217.2 87L219.5 86.2L223.7 87.7L223.7 92.1L225.4 88.4L227.5 88.6L228.7 83.9L225.9 81L222.7 79.1L223 73.7L226.1 70.1L229.6 70.9L232.3 73.1L236 78.6L233.6 80.9L238.5 81.9L238.5 86.7L242.1 83L245.3 86L244.5 89.4L247.1 92.5L249.9 89.2L251.8 85.2L251.9 80.1L255.7 80.4L259.7 81.1L263.3 83.5L263.4 85.8L261.4 88.2L263.3 90.7L263 92.9L257.7 96L254 96.7L251.3 95.4L250.5 97.6L247.9 101.3L247.1 103.2L244 106.1L240.2 106.4L238.1 108.1L237.9 110.9L234.8 111.4L231.6 114.8L228.7 119.4L227.7 122.5L227.5 127.1L231.4 127.8L232.6 131.4L233.9 134.3L237.6 133.6L242.6 135.2L245.2 136.7L247.1 138.4L250.5 139.5L253.3 141L257.7 141.3L260.6 141.6L260.2 144.8L261 148.5L262.9 152.5L266.9 155.9L269 154.7L270.4 151.1L269 145.3L267.1 143.4L271.4 141.7L274.4 139L275.9 136.4L275.7 133.9L273.9 130.6L270.6 127.7L273.8 123.5L272.6 119.9L271.7 113.5L273.6 112.6L278.1 113.7L280.9 114.1L283.1 113L285.6 114.4L288.9 116.8L289.7 118.4L294.4 118.7L294.3 122.1L295.2 127.1L297.7 127.7L299.6 130L303.5 127.8L306 123.5L307.8 121.6L309.9 125.2L313.3 130.2L316.3 134.8L315.2 137.2L318.8 139.3L321.2 141.4L325.4 142.4L327.1 143.6L328.2 146.7L330.2 147.1L331.3 148.5L331.5 152.6L329.6 153.9L327.7 155.1L323.3 156.4L319.9 159.3L315.4 159.8L309.7 159.1L305.7 159.1L302.9 159.3L300.7 161.8L297.3 163.3L293.5 167.9L290.4 171L292.6 170.4L296.9 166L302.5 163.1L306.5 162.8L308.9 164.5L306.4 166.8L307.2 170.4L308.1 172.9L311.5 174.6L315.9 174.1L318.6 170.4L318.8 172.8L320.5 174L317.2 176.2L311.3 178.1L308.7 179.5L305.7 181.8L303.7 181.6L303.6 178.8L308.2 176.1L303.9 176.2L301 176.6L299.2 174.7L299.2 170.2L298 169.2L296.2 169.8L295.4 168.9L293.3 171.4L292.5 174L291.6 175.5L290.4 176L289.6 176.2L289.3 177L284.4 177L280.4 177L279.2 177.7L276.3 180L275.1 181.5L272.7 181.5L270.1 181.6L268.9 182.1L269.5 183.7L266 185.6L263.3 186.1L260.2 187.8L259.5 187.8L258.6 187.3L258.3 186.5L258.9 185.4L260.2 183.6L261 181.7L260.4 178.9L259.9 175.9L257.1 174.3L257 173.3L256.3 173.3L255.6 172L254.4 172.3L253.9 171.6L253.7 170.7L251.6 169.6L249.4 168.5L246.8 167.2L244.3 166L241.9 166.9L241.1 167L237.8 166.1L235.6 166.5L233 165.5L230.3 164.9L228.5 164.7L227.6 164.1L227.2 162.2L226.3 162.3L226.2 163.6L220.7 163.6L211.6 163.6L202.5 163.6L194.5 163.6L186.5 163.6L178.7 163.6L170.5 163.6L167.9 163.6L160 163.6L152.4 163.6ZM256 113L258 111.1L261.7 111.1L261.6 111.9L258.5 114.2L256.6 114.1L256 113ZM267.3 65.7L264.3 63L264.4 61.2L265.7 60.8L271.8 61.4L276.4 64.2L276.7 65.6L273.8 65.5L271 65.3L268 66L267.3 65.7ZM265.8 114.5L266.9 113.3L267.9 113.4L268.6 114.2L267.6 116.4L266.4 116L265.7 114.8ZM230.4 54.4L228.9 56.5L225 56.1L221.8 54.7L223.2 52.3L227.1 50.8L229.4 52.7L230.4 54.4ZM229.8 40.4L228.5 40.6L223.5 40.2L222.8 38.6L228.2 38.7L230.1 39.8L229.8 40.4ZM222 33.2L225.2 35.3L224.5 37.4L220.5 38.6L218.3 37.2L217.2 35L217 32.6L220.4 32.8L222 33.2ZM244.9 57.5L240.6 56.9L233.5 55.2L232.6 52.2L232.3 49.5L229.6 47.2L224.1 46.5L221 44.8L222 42.5L227.5 42.8L230.5 44.6L235.7 44.6L238 46.4L237.4 48.5L240.5 49.7L242.2 51L245.8 51.3L249.7 51.7L253.9 50.5L259.3 50.1L263.7 50.5L266.5 52.5L267.1 54.7L265.4 56.1L261.5 57.3L258.1 56.6L250.4 57.4L244.9 57.5ZM183.3 36.8L187.1 37.7L186.2 39.4L181.2 41.1L177.2 39.2L179.4 37.4L183.3 36.8ZM184.1 33L187.6 34.2L184.3 35.3L179.9 35.3L179.9 34.5L182.7 32.7L184.1 33ZM331.7 155.5L330.3 157.7L328.5 160.8L330.3 159.6L332.1 160.3L331.1 161.6L333.5 162.5L334.7 161.7L337.4 162.7L336.6 165.2L338.4 164.7L338.8 166.5L339.6 168.6L338.5 171.5L337.3 171.7L335.5 171L336.1 168.3L335.4 167.8L332.3 170.8L330.7 170.7L332.6 169.1L330 168.3L327.1 168.5L322 168.3L321.5 167.3L323.2 166.1L322 165.2L324.3 163.1L327 157.6L328.7 155.6L331 154.4L332.2 154.5L331.7 155.5ZM256.3 101.7L259.2 103.2L262.3 104.6L262.5 106.6L264.5 106.3L266.4 107.7L264 109L259.9 108L258.4 106.1L255.7 108.3L251.9 110.5L251 108L247.4 108.4L249.7 106.3L250.1 103L251 99L252.9 99.3L253.4 101.3L254.8 100.6L256.3 101.7ZM269.9 68L272.5 66L278.4 68.5L282.1 70.9L282.4 73.1L287.4 71.9L290.1 75.1L296.6 77L298.9 78.9L301.4 83.3L296.5 85.5L302.8 88.5L307 89.5L310.9 93.7L315.1 94L314.2 97.1L309.6 102.2L306.3 100.3L302.1 96.1L298.6 96.7L298.3 99.2L301.1 101.7L304.7 103.7L305.8 104.9L307.5 109.1L306.6 112.1L303.3 110.9L296.6 107.6L300.3 111.2L303.1 113.7L303.6 115.1L296.3 113.5L290.6 111.1L287.4 109L288.3 107.9L284.3 105.7L280.4 103.6L280.5 104.8L272.8 105.5L270.5 104L272.3 100.9L277.3 100.8L282.8 100.2L281.9 98.7L282.8 96.5L286.3 92.1L285.5 90.1L284.5 88.5L280.4 86.3L275 84.7L276.7 83.5L273.9 80.6L271.5 80.3L269.4 78.7L268 80.1L263.2 80.7L253.5 79.7L247.8 78.3L243.5 77.5L241.3 75.8L244.1 73.6L240.3 73.6L239.5 68.6L241.5 64.1L244.2 62L251.1 60.6L249.2 63.9L251.3 67.1L253.7 63L260.5 60.9L265.1 66.2L264.7 69.4L269.9 68ZM228 58.9L233.6 59L238.6 60.3L234.7 64.9L231.5 65.9L228.6 69.6L225.6 69.4L223.9 65L224 62.5L225.3 60.3L228 58.9ZM152.4 48.3L156.9 44.1L162.4 40.5L166.5 40.6L170.1 39.7L169.8 44.1L167.7 46L165.2 46.3L160.3 48.6L156 49.5L152.4 48.3ZM126.1 145.7L128.7 145.4L127.9 149.5L130.2 152.4L129.1 152.4L127.5 150.8L126.5 149.1L125.2 148L124.7 146.4L124.8 145.2L126.1 145.7ZM198.7 30.1L203.9 30.9L211.1 33L213.2 35.8L214.2 38.2L209.9 37.6L205.5 35.7L199.5 35.5L202.1 33.8L198.9 32.3L198.7 30.1ZM150.6 165.3L149.3 165.7L144.9 164.2L144.1 163L141.7 161.8L141.3 160.8L138.5 160.1L137.5 158.2L137.7 157.4L140.5 158.2L142.1 158.7L144.7 159.1L145.6 160.3L146.9 161.9L149.5 163.4L150.6 165.3ZM155.9 57.2L159.7 58.3L166.5 58.6L169.1 60.1L172 62.3L168.6 63.6L162.1 67.2L158.8 70.7L158.8 72.8L151.8 75.2L150.3 73L144.2 70.4L145.3 68.3L147.2 64.6L149.5 61.2L146.9 58L155.9 57.2ZM192.5 49.7L194.9 48.8L197.6 49.1L198.1 51.7L196.5 54.3L187.5 55.1L180.7 57.4L176.7 57.5L176.3 55.8L181.9 53.4L169.8 54.1L166.1 53.1L169.7 47.8L172.3 46.3L179.8 48.1L184.5 51.4L189.2 51.8L185.3 46.5L187.8 44.5L190.5 45.2L191.4 47.8L192.5 49.7ZM195.9 64.3L198.9 66.4L200.6 71.2L201.4 74.7L205.9 77.1L210.7 79.4L210.4 81.5L206 81.9L207.8 83.7L206.9 85.4L202 84.6L197.4 83.4L194.3 83.7L189.3 85.2L182.6 85.9L177.8 86.4L176.4 84.2L172.7 82.9L170.4 83.4L167.1 79.7L168.9 79.2L173 78.4L176.7 78.6L180.2 77.7L175.1 76.6L169.4 77L165.6 76.9L164.2 75.1L170.4 73.2L166.3 73.2L161.6 71.9L163.8 68.2L165.7 66.2L172.8 63.1L175.6 64.1L174.2 66.5L180.2 65L183.9 67.5L186.9 64.9L189.3 66.6L191.5 71.5L192.8 69.4L190.9 64.3L193.3 63.5L195.9 64.3ZM212.2 66.2L209.2 62.9L212.4 60.4L215.6 61.5L220.3 60.8L221 62.3L218.5 64.8L222.6 66.9L222.1 71.4L217.7 73.3L215.1 72.9L213.3 71.1L206.7 67.2L206.7 65.6L212.2 66.2ZM195.7 61.6L199.3 61.4L201.3 62.6L199 65.9L194.8 62.4L195.7 61.6ZM217.3 44.9L219.4 47.5L219.5 50.3L218.2 54.3L213.8 54.8L211 54L211 50.9L206.7 51.3L206.5 47.1L209.4 47.2L213.4 45.3L217.1 45.7L217.3 44.9ZM224 22.2L225.8 20.3L228.5 19.8L227.4 18.4L233.6 18.1L237 21.4L241.5 22.7L245.8 23.9L248 27.9L251.2 29.8L247.5 31.6L242.6 36L237.9 36.4L232.3 35.7L229.5 33.3L229.5 31.2L231.6 29.6L226.7 29.6L223.8 27.6L222.1 24.9L224 22.2ZM235.8 14L239.7 12.8L242.8 12.6L248.1 11.5L252 9.1L255.3 9.4L258.2 11.3L260.2 7.7L263.7 6.6L268.5 5.9L276.7 5.6L278.1 6.3L285.8 5.2L291.6 5.6L297.3 6.1L304.5 6.6L310.2 7.4L315.1 9.2L315 11L308.4 13.8L302 15.1L299.6 16.5L305.4 16.5L299.1 20.3L294.8 22.1L290.2 27.1L284.7 28.1L283 29.3L274.9 29.9L278.6 30.7L276.7 31.7L278.9 34.6L276.4 36.6L272.3 38.3L271 40.5L267.3 42.2L267.7 43.5L272.2 43.2L272.3 44.6L265.2 47.9L258.2 46.4L250.4 47.3L246.4 46.6L241.4 46.3L241 43.6L246 42.4L244.6 38.3L246.3 37.9L253.4 40.3L249.8 36.7L245.4 35.5L247.6 33.3L252.3 31.9L253.1 29.8L249.3 27.5L248.2 24.3L255.5 24.6L257.6 25.3L261.7 23L255.7 22.3L246.4 22.7L241.7 20.6L239.5 18L236.4 16.2L235.8 14ZM279.4 91.4L277.7 92.7L274.7 92.9L274 90.7L275.2 88.2L277.6 87.5L279.7 88.8L279.7 90.7L279.4 91.4ZM223.3 81.9L224.9 83.7L223.3 85.3L219.7 83.9L217.5 84.4L213.9 82.3L216.2 80.9L218.1 78.8L220.9 80.2L222.5 81L223.3 81.9ZM308 160.6L308.9 160.3L312.4 161.1L315.1 162.6L315.2 163.2L313.9 163.3L310.4 162.2L308 160.6ZM309.3 170.3L310.2 171.9L312.2 172.3L314.6 172.3L313.3 173.6L312.3 173.8L309 172.4L308.3 171.3L309.3 170.3Z", bbox: [104, 5.2, 339.6, 187.8] },
    { code: "CD", d: "M558.2 317.8L558.7 320.3L558.5 321.7L559 323.2L560.5 324.7L562 328.1L560.9 327.8L557.3 328.3L556.6 328.6L555.9 330.3L556.5 331.5L556 334.7L555.7 337.4L556.4 337.9L558.2 339L559 338.5L559.2 341.4L557.2 341.4L556.1 339.9L555.1 338.7L553 338.3L552.4 336.9L550.8 337.8L548.7 337.4L547.8 336.2L546.1 335.9L544.8 336L544.7 335.1L543.8 335.1L542.5 334.9L540.9 335.3L539.7 335.3L539.1 335.5L539.2 332.3L538.3 331.3L538.1 329.6L538.5 328L538 327L537.9 325.3L534.7 325.3L534.9 324.4L533.6 324.4L531.8 324.9L531.1 326.5L530.7 327.2L529.2 326.8L528.4 327.2L526.6 327.4L525.6 326L525 325.1L524.2 323.5L523.5 321.5L515.7 321.5L514.7 321.8L514 321.8L512.9 322.1L512.5 321.3L513.2 321L513.2 319.8L513.7 319.1L514.7 318.6L515.4 318.9L516.3 317.8L517.7 317.9L517.9 318.6L518.9 319.1L520.5 317.4L522 316.1L522.7 315.3L522.6 313.1L523.8 310.5L525 309.1L526.7 307.8L527 307L527.1 306L527.5 305.1L527.4 303.5L527.7 301.2L528.3 299.5L529.1 298.1L529.2 296.5L529.4 294.6L530.5 293.3L531.9 292.4L534.1 293.3L535.8 294.3L537.8 294.6L539.7 295.1L540.5 293.5L542.1 293.5L545.1 292.2L546.1 292.8L547 292.7L547.4 292L548.4 291.8L550.4 292.1L552.1 292.1L553 291.9L554.6 294.1L555.8 294.4L556.5 293.9L557.8 294.1L559.2 293.5L559.9 294.7L562.2 296.5L562.1 299.6L563.1 299.9L562.3 300.9L561.3 301.6L560.2 303L559.7 304.2L559.5 306.4L558.9 307.4L558.9 309.4L558.1 310.1L558 311.7L557.4 313.4L558.1 314.6L558.2 317.8Z", bbox: [512.5, 291.8, 563.1, 341.4] },
    { code: "CF", d: "M553 291.9L552.1 292.1L550.4 292.1L548.4 291.8L547.4 292L547 292.7L546.1 292.8L545.1 292.2L542.1 293.5L540.9 293.3L539.7 295.1L537.8 294.6L535.8 294.3L534.1 293.3L531.9 292.4L530.5 293.3L529.4 294.6L529.2 296.5L527.5 296.3L525.7 295.9L524.1 297.3L522.7 299.8L522.4 299L522.3 297.8L521.1 296.9L520.1 295.6L519.9 294.6L518.6 293.2L518.8 292.4L518.6 291.3L518.8 289.2L519.4 288.7L520.7 286L522.9 285.8L523.4 285.1L524.5 285.8L527.9 284.7L529 283.7L530.4 282.8L530.2 281.8L530.9 281.6L533.5 281.7L536 280.5L537.9 277.5L539.3 276.5L541 276L541.3 277.1L542.8 278.8L542.8 279.9L542.4 281L542.6 281.9L543.5 282.7L545.5 283.8L547 284.9L547 285.8L548.8 287.2L549.9 288.3L550.6 289.9L552.6 291L553 291.9Z", bbox: [518.6, 276, 553, 299.8] },
    { code: "CG", d: "M529.2 296.5L529.1 298.1L528.3 299.5L527.7 301.2L527.4 303.5L527.5 305.1L527.1 306L527 307L526.7 307.8L525 309.1L523.8 310.5L522.6 313.1L522.7 315.3L522 316.1L520.5 317.4L518.9 319.1L517.9 318.6L517.7 317.9L516.3 317.8L515.4 318.9L514.7 318.6L513.7 317.7L512.8 318.1L511.8 319.3L509.6 316.4L511.6 315L510.6 313.2L511.5 312.5L513.3 312.2L513.5 311L515 312.3L517.3 312.4L518.1 311.2L518.5 309.4L518.2 307.3L516.9 305.7L518.1 302.6L517.4 302.1L515.4 302.3L514.7 300.9L514.9 299.8L518.2 299.9L520.4 300.6L522.5 301.2L522.7 299.8L524.1 297.3L525.7 295.9L527.5 296.3L529.2 296.5Z", bbox: [509.6, 295.9, 529.2, 319.3] },
    { code: "CH", d: "M505.6 168.6L505.7 169.2L505.3 170L506.5 170.7L507.8 170.7L507.6 172.1L506.5 172.7L504.5 172.3L503.9 173.6L502.6 173.7L500.7 174.3L499.4 174.5L498.2 173.8L497.3 172.3L496.1 172.8L496.1 171.3L498.1 169.4L498 168.6L499.2 168.9L499.9 168.3L502.2 168.3L502.7 167.6L505.6 168.6Z", bbox: [496.1, 167.6, 507.8, 174.5] },
    { code: "CI", d: "M458.6 278.5L459.7 278.7L461.7 278.7L462.2 277.9L463.5 277.7L463.9 278.8L465.6 278.1L466.8 278.7L467.3 279.5L468.5 280.1L469.4 279.4L470.6 279.3L472.5 280L473.2 283.9L472 286.1L471.3 289.1L472.5 291.4L472.4 292.5L471.2 292.5L469.3 292L467.6 292L464.4 292.5L462.6 293.3L460 294.2L459.6 292L459.8 290.6L458.7 289.5L457.8 289.3L457.1 288.6L457.6 287.4L457.4 286.1L457.5 285.3L458.1 284.1L458.1 283.2L459.1 282.9L458.5 280.8L457.8 279.6L458.1 278.7Z", bbox: [457.1, 277.7, 473.2, 294.2] },
    { code: "CL", d: "M297 460.9L297 469L299.8 469L301.4 469.1L300.6 470.6L298.3 471.8L297 471.6L295.4 471.3L293.4 470.2L290.7 469.7L287.3 467.6L284.6 465.6L280.9 461.6L283.1 462.3L286.8 464.8L290.4 466.1L291.8 464.4L292.6 461.9L295.1 460.4L297 460.9ZM294.4 353.2L295.7 355.1L296.1 357L297.5 358.2L296.6 360.9L298.1 364L299.1 367.9L301 367.5L301.4 368.2L300.5 371.1L297.6 372.5L297.6 377.3L297.1 378.2L297.9 379.3L296 381.1L294.3 383.8L293.3 386.4L293.6 389.3L291.9 392.3L293.1 397.4L293.8 397.9L293.8 400.7L292.3 403.6L292.4 406.2L290.3 408.2L290.4 411L291.2 414L289.6 415.1L288.8 417.9L288.2 421.1L288.7 425L287.6 425.7L288.2 429.4L289.4 430.6L288.6 432L289.8 432.7L290.1 433.9L288.9 434.5L289.2 436.5L288.2 440.9L286.8 443.8L287.1 445.5L286.3 447.7L284.2 449.2L284.5 452.8L285.4 454.1L287.2 453.9L287.1 456.5L288.2 458.6L294.7 459.1L297.1 459.6L294.8 459.6L293.5 460.5L291.1 461.8L290.7 465.2L289.5 465.3L286.5 464.1L283.5 461.6L280.1 459.5L279.3 457.3L280.1 455.2L278.7 452.8L278.4 446.9L279.5 443.7L282.3 441.1L278.3 440.1L280.8 437.1L281.7 431.7L284.7 432.8L286.1 426.1L284.3 425.2L283.5 429.3L281.8 428.8L282.6 424.2L283.5 418.3L284.7 416.2L284 413.2L283.8 409.7L284.9 409.6L286.5 404.7L288.4 399.8L289.5 395.4L288.9 391L289.7 388.6L289.4 385L290.9 381.4L291.4 375.9L292.3 370L293.1 363.7L292.9 359.2L292.3 355.3L293.7 354.6L294.4 353.2Z", bbox: [278.3, 353.2, 301.4, 471.8] },
    { code: "CM", d: "M518.7 271.3L519.7 273.1L519.9 274.9L519.8 276.7L521.2 279.1L519.8 279.1L519 279.3L517.8 279L517.2 280.3L518.8 281.9L520 282.3L520.3 283.4L521.2 285.3L520.7 286L519.4 288.7L518.8 289.2L518.6 291.3L518.8 292.4L518.6 293.2L519.9 294.6L520.1 295.6L521.1 296.9L522.3 297.8L522.4 299L522.7 299.8L522.5 301.2L520.4 300.6L518.2 299.9L514.9 299.8L513 300L511.3 299.6L510.1 299.8L505.7 299.7L506.1 297.6L505.1 295.9L503.9 295.4L503.3 294.2L502.6 293.8L502.7 293.1L503.4 291.2L504.6 288.6L505.4 288.6L507 287L508 287L509.5 288.1L511.3 287.2L511.6 286.1L512.2 285L512.6 283.6L514 282.5L514.5 280.6L515.1 280L515.5 278.6L516.2 276.9L518.4 274.8L518.6 273.9L517.8 272.4L517.9 271.5L518.7 271.3Z", bbox: [502.6, 271.3, 522.7, 301.2] },
    { code: "CN", d: "M771.9 256.8L769.7 255.9L769.7 253.5L771 252.3L773.9 251.5L775.4 251.6L776 252.6L774.9 253.8L774.2 255.4L771.9 256.8ZM694 185.7L693.8 183.8L695.6 183L693.2 177.3L698.5 176L699.9 175.3L701.8 169.3L707.1 170.4L708.6 168.9L708.7 165.4L710.9 165.1L713 162.8L714 162.6L714.7 165L716.9 166.8L720.7 168L722.6 170.8L721.6 174.7L722.5 176.1L725.7 176.7L729.3 177.1L732.5 179.2L734.1 179.5L735.4 182.5L736.9 184.5L739.9 184.4L745.4 185.1L748.9 184.7L751.6 185.1L755.5 187.1L758.7 187.1L759.9 188.1L763 186.4L767.3 185.2L771.3 185.1L774.4 184L776.4 182.3L778.2 181.2L777.8 180.1L776.9 178.8L778.3 176.7L779.8 177L782.6 177.7L785.2 175.9L789.3 174.6L791.2 172.4L793.1 171.5L797 171L799.1 171.4L799.4 170.2L797 167.9L794.8 166.8L792.8 168L790.2 167.5L788.6 167.9L788 166.5L789.8 163.1L791.1 160.5L794.3 161.8L798.1 159.6L798.1 158.1L800.5 154.3L802 153.2L801.9 151.2L800.5 150.4L802.7 148.6L806 147.9L809.5 147.8L813.5 148.9L815.9 150.2L817.5 153.8L818.5 155.4L819.4 157.5L820.4 161L825.1 162.1L828.2 164.5L829.3 167.7L833.4 167.7L835.7 166.4L840.1 165.4L838.7 168.4L837.6 169.7L836.7 173.3L834.9 176.6L831.7 176L829.4 177.2L830.1 180L829.7 183.8L828.4 183.9L828.4 185.5L826.7 183.6L825.6 185.4L821.5 186.8L821.9 188.5L819.6 188.4L818.3 187.4L816.5 189.6L813.6 191.3L811.4 193.4L807.6 194.3L805.7 195.7L802.8 196.6L804.2 195.1L803.7 193.9L805.8 191.8L804.4 190.1L802 191.3L799 193.5L797.4 195.5L794.8 195.6L793.4 197.1L794.8 199.2L797 199.7L797.1 201.1L799.2 202L802.2 199.8L804.6 201L806.3 201.1L806.7 202.7L802.9 203.5L801.7 205.2L799.1 206.7L797.7 208.8L800.6 210.5L801.7 213.4L803.3 216.1L805.1 218.4L805 220.6L803.4 221.4L804 223L805.6 223.9L805.2 226.2L804.5 228.5L803 228.8L801.1 231.9L798.9 235.7L796.4 239L792.7 241.6L789 244L786 244.3L784.4 245.6L783.5 244.7L782 246.1L778.3 247.5L775.4 247.9L774.5 250.8L773 251L772.3 249L773 247.9L769.4 247L768.1 247.5L765.4 246.7L764.2 245.6L764.6 244L762.2 243.5L760.9 242.4L758.6 243.9L756 244.2L753.9 244.2L752.5 244.9L751.1 245.3L751.5 248.5L750.1 248.4L749.8 247.8L749.7 246.6L747.8 247.4L746.6 246.9L744.6 245.9L745.4 243.6L743.7 243L743.1 240.4L740.3 240.9L740.6 237.5L743.1 235.1L743.2 232.8L743.2 230.6L742 229.9L741.1 228.2L739.5 228.4L736.7 228L737.6 226.8L736.3 225L734.4 226.2L732.2 225.5L729.1 227.3L726.7 229.5L724.5 229.8L723.4 229.1L721.9 229L720 228.3L718.6 229.1L716.8 231.2L716.6 228.9L715 229.5L711.9 229.3L708.9 228.6L706.7 227.3L704.6 226.8L703.7 225.4L702.2 224.9L699.5 223L697.4 222.1L696.3 222.8L692.6 220.8L690 218.9L689.2 215.7L691.1 216.1L691.2 214.6L690.2 213L690.4 210.6L687.6 207L683.2 205.8L682.4 203.5L680.4 202L679.9 201.2L679.5 199.4L679.6 198.2L678 197.5L677.1 197.8L676.5 194.9L677.2 194.2L676.9 193.5L679.4 192L681.3 191.4L684.1 191.8L685.1 189.8L688.5 189.4L689.5 188.1L693.7 186.4L694 185.7Z", bbox: [676.5, 147.8, 840.1, 256.8] },
    { code: "CO", d: "M301.7 302.5L300.6 301.2L299.9 300.4L299 301.3L293.8 301.3L293.9 302.9L295.4 303.2L295.3 304.2L293.3 304.4L293.3 306.3L294.5 307.3L294.9 308.8L294.8 310L293.6 317.3L292.3 315.9L291.5 315.8L293.2 313.1L291.2 311.8L289.6 312.1L288.6 311.6L287.1 312.3L285.1 312L283.6 309.2L282.3 308.5L281.5 307.2L279.7 306L279 306.2L277.9 305.6L276.5 304.7L275.8 305.1L273.5 304.8L272.9 303.6L269.7 302.1L269.4 301.3L270.3 301.1L270.2 299.8L270.9 298.8L272.2 298.6L273.3 297L274.3 295.6L273.3 294.9L273.8 293.4L273.2 290.9L273.8 290.2L273.4 288L272.3 286.5L272.7 285.2L273.5 285.4L274 284.6L273.4 283L275.1 282.7L277.1 280.9L278.2 280.6L278.2 279.7L278.7 277.4L280.2 276.2L281.9 276.1L284.2 275.8L286.3 274.4L287.4 273.8L288.7 272.5L289.6 272.7L290.3 273.4L289.8 274.3L288.1 274.7L287.4 276.1L286.4 276.9L285.6 277.9L285.3 279.8L284.5 281.4L285.9 281.5L286.2 282.8L286.8 283.4L287 284.4L286.7 285.4L287.5 286.2L288.1 287.2L291.5 286.9L293.1 287.2L295 289.5L296 289.3L298 289.4L299.5 289.1L300.4 289.6L299.9 291L299.4 291.9L299.1 293.8L299.7 295.6L300.4 296.4L299.2 298.3L300.1 298.9L300.8 299.8L301.7 302.5Z", bbox: [269.4, 272.5, 301.7, 317.3] },
    { code: "CR", d: "M259.9 280.2L258.8 280.5L258.9 281.6L259 282.3L258.9 283.3L257.3 283.2L257.1 282.2L256.2 281L255.2 280.5L254.3 280.1L254.1 279.3L253.4 278.8L253.6 279.6L253 280.3L252.4 279.5L251.6 279.3L251.2 277.9L251.6 277L250.8 276.7L251.4 276.1L253.6 276.5L254.2 276.2L255.1 276.4L256.3 277.1L256.9 276.5L257.6 278L258.6 279.1L259.9 280.2Z", bbox: [250.8, 276.1, 259.9, 283.3] },
    { code: "CU", d: "M260.6 242.9L262.9 243.1L265 243.1L267.5 244.1L268.6 245.1L271.1 244.8L272 245.4L274.3 247.2L275.9 248.4L276.8 248.4L278.4 249L278.2 249.7L280.2 249.9L282.2 251L281.9 251.6L280.1 252L278.3 252.1L276.5 251.9L272.7 252.2L274.4 250.6L273.4 249.9L271.6 249.7L270.7 248.9L270.1 247.3L268.6 247.4L266.1 246.7L265.3 246.1L261.8 245.7L260.9 245.1L261.9 244.4L259.3 244.3L257.3 245.7L256.2 245.8L255.9 246.5L254.5 246.8L253.4 246.5L254.8 245.6L255.4 244.6L256.6 244L258 243.5L260 243.2L260.6 242.9Z", bbox: [253.4, 242.9, 282.2, 252.2] },
    { code: "CY", d: "M567.3 208.1L567.9 207.4L569.8 207.4L572.2 206.5L570.4 207.8L569.8 208.5L569 208L567.8 208.3ZM567.3 208.1L568.5 208L569.2 208.2L569.8 208.5L570.6 208.4L567.9 209.8L566.6 209.4L566 208.2L567.3 208.1Z", bbox: [566, 206.5, 572.2, 209.8] },
    { code: "CZ", d: "M520 156.2L521.3 157.4L523.3 157.7L523.1 158.6L524.6 159.4L525 158.5L526.8 158.9L527.1 159.9L529.1 160.2L530.3 161.9L529.5 161.9L528.5 162.6L528.3 163.4L527.7 163.9L526.8 164.3L525.6 164.2L525.2 165L524 164.3L522.7 164.5L520.7 163.4L519.7 163.7L518.2 165.1L516.3 164L514.7 162.5L513.4 161.7L513.1 160.2L512.6 159.2L514.6 158.4L515.6 157.6L517.5 156.9L518.2 156.2L518.9 156.6L520 156.2Z", bbox: [512.6, 156.2, 530.3, 165.1] },
    { code: "DE", d: "M517.7 146.7L518.3 148.6L517.5 149.6L518.5 150.8L519.2 152.7L519 154L520 156.2L518.9 156.6L518.2 156.2L517.5 156.9L515.6 157.6L514.6 158.4L512.6 159.2L513.1 160.2L513.4 161.7L514.7 162.5L516.3 164L515.3 165.6L514.4 166L514.7 168.2L514.5 168.8L513.7 168.1L512.4 168L510.5 168.6L508.1 168.5L507.7 169.4L506.4 168.4L505.6 168.6L502.7 167.6L502.2 168.3L499.9 168.3L500.3 165.9L501.6 163.5L497.8 162.9L496.5 162L496.7 160.5L496.1 159.7L496.4 157.3L496 153.6L497.6 153.6L498.2 152.3L498.9 149L498.4 147.7L498.9 147L501.2 146.8L501.7 147.6L503.5 145.8L502.9 144.4L502.7 142.3L504.8 142.8L506.5 142.2L506.5 143.7L509.2 144.5L509.2 145.8L511.9 145.1L513.4 144.1L516.4 145.6L517.7 146.7Z", bbox: [496, 142.2, 520, 169.4] },
    { code: "DJ", d: "M592.9 272.2L594.1 272.4L594.9 271.8L595.5 272.6L595.4 273.7L593.9 274.4L595.1 275.1L594.1 276.6L593.5 276.1L592.8 276.3L591.3 276.2L591.3 275.4L591.1 274.7L592 273.4L592.9 272.2Z", bbox: [591.1, 271.8, 595.5, 276.6] },
    { code: "DK", d: "M506.5 142.2L504.8 142.8L502.7 142.3L501.7 140.2L501.6 136.4L502 135.4L502.8 134.2L505.1 134L506.1 132.9L508.2 131.9L508.1 133.8L507.3 135.1L507.7 136.1L509.1 136.7L508.4 138.1L507.7 137.7L505.7 140.4L506.5 142.2ZM513 138L513.8 139.9L512.2 142.9L509.4 140.8L509.1 139.3L513 138Z", bbox: [501.6, 131.9, 513.8, 142.9] },
    { code: "DO", d: "M288.8 257.2L288.8 256.4L288.1 255.6L288.8 255.1L289 254.1L288.8 252.6L291.2 252.1L292.8 252.8L293.5 252.8L293.9 253.7L295.4 253.7L295.3 254.5L296.5 254.6L297.8 255.6L296.8 256.7L295.6 256.1L294.3 256.3L293.5 256.1L292 256.8L291.5 256.1L290.7 256.5L289.6 258.4L288.9 258L288.8 257.2Z", bbox: [288.1, 252.1, 297.8, 258.4] },
    { code: "DZ", d: "M456.8 230.9L456.9 230.2L456.9 226.7L461.2 224.6L463.8 224.2L466 223.4L467 221.9L470.2 220.8L470.3 218.6L471.8 218.3L473 217.2L476.5 216.7L477 215.6L476.3 214.9L475.4 211.8L475.2 210L474.2 208L476.8 206.4L479.7 205.8L481.3 204.6L483.9 203.7L488.4 203.1L492.8 202.9L494.2 203.3L496.7 202.1L499.6 202.1L500.6 202.8L502.5 202.6L501.9 204.2L502.3 207.1L501.7 209.6L500.1 211.3L500.3 213.5L502.5 215.3L502.5 216L504.1 217.2L505.3 222.5L506.1 225.1L506.3 226.4L505.8 228.8L506 230.1L505.7 231.7L505.9 233.5L504.8 234.6L506.4 236.7L506.5 237.9L507.5 239.5L508.7 239L510.8 240.3L512 242.1L502.9 247.4L495.1 252.9L491.4 254.1L488.4 254.4L488.4 252.6L487.2 252.2L485.5 251.4L484.9 250.1L475.9 244L466.9 237.8L456.8 230.9Z", bbox: [456.8, 202.1, 512, 254.4] },
    { code: "EC", d: "M279 306.2L279.4 308.3L278.5 310L275.6 312.8L272.4 313.8L270.8 316.2L270.3 318L268.8 319.1L267.7 317.7L266.6 317.4L265.5 317.6L265.4 316.7L266.2 316L265.9 314.9L267.3 312.9L266.7 311.7L265.7 313L264.1 311.8L264.6 311.1L264.2 308.6L265.1 308.2L265.6 306.6L266.6 304.9L266.4 303.8L267.9 303.2L269.7 302.1L272.4 303.7L273.5 304.8L275.8 305.1L276.5 304.7L277.9 305.6L279 306.2Z", bbox: [264.1, 302.1, 279.4, 319.1] },
    { code: "EE", d: "M554.6 125L555 125.7L553.1 128L553.9 131.6L552.8 132.8L550.6 132.8L548.3 131.4L547.1 130.9L544.8 131.6L545.1 129.3L544.2 129.8L542.5 128.4L542.2 126.2L545.6 125.1L549 124.5L551.9 125.2L554.6 125Z", bbox: [542.2, 124.5, 555, 132.8] },
    { code: "EG", d: "M578.3 246.2L567.7 246.2L557.4 246.2L546.7 246.2L546.7 235.8L546.7 225.6L545.9 223.3L546.6 221.4L546.1 220.2L547.1 218.8L550.7 218.7L553.2 219.5L555.9 220.4L557.1 220.8L559.2 219.9L560.3 219.1L562.6 218.8L564.5 219.2L565.2 220.6L565.8 219.7L568 220.4L570.1 220.5L571.4 219.8L572.9 224.1L573.1 224.8L572.4 226L571.8 228.2L571.1 229.7L570.5 230.2L569.6 229.3L568.4 228L566.5 223.8L567.3 227.1L568.9 230L570.9 234.5L571.9 236.1L572.8 237.7L575.2 240.8L574.7 243.1L577.8 245.6L578.3 246.2Z", bbox: [545.9, 218.7, 578.3, 246.2] },
    { code: "EH", d: "M456.9 230.2L456.8 230.9L456.8 235.3L448.1 235.1L448.2 242.4L445.7 242.6L445 244.1L445.5 248.1L435.1 248.1L434.5 249L434.6 247.8L440.7 247.6L441 246.6L442.1 245.3L443 241.5L446.7 238.4L447.9 234.8L448.7 234.6L449.6 232.4L451.9 232.1L452.8 232.5L454 232.5L454.9 231.8L456.6 231.7L456.5 230.2Z", bbox: [434.5, 230.2, 456.9, 249] },
    { code: "ER", d: "M577.1 267.1L576.9 266L578 262L578.3 260.2L579.1 259.3L581.1 258.9L582.4 257.3L584 260.5L584.7 263L586.2 264.3L589.8 266.9L591.3 268.5L592.7 270L593.6 271L594.9 271.8L594.1 272.4L592.9 272.2L592 271.3L590.9 269.7L589.7 268.9L589.1 267.9L586.7 266.8L584.9 266.8L584.3 266.2L582.7 266.9L581.1 265.6L580.2 267.7L577.1 267.1Z", bbox: [576.9, 257.3, 594.9, 272.4] },
    { code: "ES", d: "M460.1 202.2L459.9 201.1L460.9 200L461.3 199.1L460.3 198.2L461.1 196.2L460 194.3L461.2 194L461.3 192.6L461.7 189.6L463 188.8L462.2 187.2L460.7 187.1L458.6 187.5L458 185.9L456.9 186.4L455.9 187.2L456 184.9L454.9 183.5L458.7 181.1L462 181.7L465.6 181.7L468.4 182.3L470.6 182.1L474.9 182.2L476 183.5L480.9 184.9L481.9 184.2L484.9 185.7L488 185.3L488.1 187.1L485.6 189.3L482.2 189.9L481.9 191L480.3 192.7L479.3 195.3L480.3 197.1L478.8 198.5L478.2 200.5L476.2 201.1L474.3 203.4L470.9 203.5L468.4 203.4L466.7 204.5L465.7 205.7L464.4 205.4L463.4 204.4L462.6 202.6L460.1 202.2Z", bbox: [454.9, 181.1, 488.1, 205.7] },
    { code: "ET", d: "M607.4 284.4L599.9 292.5L596.4 292.6L594.1 294.5L592.3 294.5L591.6 295.4L589.8 295.4L588.7 294.5L586.3 295.6L585.5 296.7L583.7 296.5L582.5 296.3L581.7 296.2L578.3 294L576.4 294L575.5 293.1L575.5 291.6L574.1 291.1L572.5 288.2L571.3 287.6L570.9 286.5L569.5 285.2L567.9 285L568.8 283.5L570.2 283.4L570.6 282.6L570.6 280.2L571.3 277.4L572.6 276.6L572.9 275.5L574 273.5L575.6 272.1L576.7 269.4L577.1 267.1L580.2 267.7L581.1 265.6L582.7 266.9L584.3 266.2L584.9 266.8L586.7 266.8L589.1 267.9L589.7 268.9L590.9 269.7L592 271.3L592.9 272.2L592 273.4L591.1 274.7L591.3 275.4L591.3 276.2L592.8 276.3L593.5 276.1L593.5 277.5L594.5 279L595.5 280.3L596.5 281.3L605.2 284.5L607.4 284.4Z", bbox: [567.9, 265.6, 607.4, 296.7] },
    { code: "FI", d: "M556.2 83.9L555.9 87.2L559.9 90.2L557.5 93.6L560.6 98.7L558.8 102.4L561.2 105.6L560.1 108.4L564 111.3L563 113.4L560.6 115.8L554.9 121L550 121.3L545.3 122.7L541 123.6L539.4 121.4L536.9 120.1L537.5 116.1L536.2 112.4L537.4 109.9L539.9 107.3L545.9 102.6L547.7 101.7L547.5 99.9L543.7 97.8L542.8 96.1L542.8 89.1L538.6 86L535.1 83.7L536.7 82.5L539.6 85L543.1 84.7L546 85.9L548.5 83.8L549.8 80.3L554 78.7L557.4 80.6L556.2 83.9Z", bbox: [535.1, 78.7, 564, 123.6] },
    { code: "FJ", d: "M955 353L955.7 352.5L956.6 353.3L956.1 354.8L954.5 355.1L953 354.8L952.8 353.6L953.8 352.6L955 353ZM960 349L960 350.4L958.3 351L956.6 351.6L956.3 350.6L957.6 350L958.4 349.9L960 349Z", bbox: [952.8, 349, 960, 355.1] },
    { code: "FK", d: "M316.8 458L320 455.9L322.3 456.8L323.9 455.4L326 457L325.2 458.2L321.6 459.3L320.4 458L318.1 459.6L316.8 458Z", bbox: [316.8, 455.4, 326, 459.6] },
    { code: "FR", d: "M342.2 294.7L340.7 297.2L339.9 299.1L338.8 300.2L337.5 300.3L337.2 299.6L336.6 299.5L335.8 300.2L334.6 299.7L335.3 298.5L335.5 297.3L336 296.2L334.9 294.6L334.7 292.8L336.1 290.5L337 290.8L339 291.4L341.8 293.6L342.2 294.7ZM496.5 162L497.8 162.9L501.6 163.5L500.3 165.9L499.9 168.3L499.2 168.9L498 168.6L498.1 169.4L496.1 171.3L496.1 172.8L497.3 172.3L498.2 173.8L498.1 174.7L498.9 176L498 177L498.7 179.5L500.1 179.9L499.8 181.3L497.4 183.2L492.1 182.3L488.3 183.3L488 185.3L484.9 185.7L481.9 184.2L480.9 184.9L476 183.5L474.9 182.2L476.3 180.3L476.8 173.7L474.1 170.2L472.1 168.5L468 167.2L467.8 164.7L471.2 163.9L475.7 164.8L474.8 160.9L477.4 162.4L483.6 159.7L484.4 156.8L486.7 156.1L487.1 157.3L488.3 157.4L489.6 158.8L491.4 160.4L492.8 160.2L495.1 161.8L495.7 162.1L496.5 162ZM503.3 184.8L505 183.5L505.5 186.3L504.6 188.8L503.4 188.1L502.8 186L503.3 184.8Z", bbox: [334.6, 156.1, 505.5, 300.3] },
    { code: "GA", d: "M510.1 299.8L511.3 299.6L513 300L514.5 299.6L514.7 300.9L515.4 302.3L517.4 302.1L518.1 302.6L516.9 305.7L518.2 307.3L518.5 309.4L518.1 311.2L517.3 312.4L515 312.3L513.5 311L513.3 312.2L511.5 312.5L510.6 313.2L511.6 315L509.6 316.4L506.8 313.7L505.1 311.5L503.5 308.8L503.5 307.9L504.1 307.1L504.8 305.1L505.3 303.1L506.2 303L510.1 303L510.1 299.8Z", bbox: [503.5, 299.6, 518.5, 316.4] },
    { code: "GB", d: "M463.5 146.3L461.5 145.6L459.8 145.6L460.4 143.7L459.8 141.7L462 141.5L464.9 143.8L463.5 146.3ZM471.7 148L472.1 145.9L470.4 143.6L467.1 142.9L466.4 141.9L467.4 140.3L466.5 139.2L465.1 141L464.9 137.4L463.6 135.5L464.6 131.5L466.6 128.4L468.8 128.7L472 128.3L469.1 132.5L471.9 132L474.8 132L474.1 135.1L471.7 138.5L474.4 138.8L477 143.6L478.9 144.1L480.5 148.3L481.3 149.7L484.5 150.4L484.2 152.7L482.8 153.8L483.9 155.6L481.5 157.4L477.9 157.4L473.4 158.4L472.1 157.7L470.4 159.3L467.9 158.9L466 160.3L464.6 159.6L468.5 155.9L470.9 155.1L466.7 154.5L466 153.1L468.7 152L467.3 150.1L467.8 147.7L471.7 148Z", bbox: [459.8, 128.3, 484.5, 160.3] },
    { code: "GE", d: "M586.5 182.2L589.1 182.3L593.1 182.9L596.7 184.4L597.1 185L598.8 184.5L601.3 185.2L602.1 186.5L603.8 187.2L603.1 187.7L604.4 189.4L602.6 189.6L600.6 188.7L599.9 189.2L596.2 189.7L593.7 188.1L590.8 188.3L591.2 186.9L590.5 184.7L589 183.5L587.5 183.2L586.5 182.2Z", bbox: [586.5, 182.2, 604.4, 189.7] },
    { code: "GH", d: "M480.1 276.3L479.9 277.2L481 278.6L481 280.5L481.2 282.6L481.9 283.6L481.3 286L481.5 287.4L482.2 289.1L482.8 290L478.6 291.6L477.2 292.5L474.8 293.3L472.4 292.5L472.5 291.4L471.3 289.1L472 286.1L473.2 283.9L472.5 280L472.1 278L472.2 276.5L476.8 276.4L478 276.5L478.8 276.1L480.1 276.3Z", bbox: [471.3, 276.1, 482.8, 293.3] },
    { code: "GL", d: "M355.3 9.2L364.2 5.3L373.6 5.6L377 3.1L386.4 2.4L407.7 3.3L424.4 8.6L419.5 11.1L409.3 11.4L394.9 12L396.3 13.2L405.7 12.5L413.7 14.7L418.9 12.7L421.1 15L418.2 18.7L425 16.4L437.9 13.9L445.9 15.1L447.4 17.9L436.6 22.3L435.1 23.7L426.5 24.8L432.7 25.1L429.6 29.5L427.5 33.3L427.5 39.8L430.7 43.5L426.6 43.7L422.2 45.4L427.1 48.4L427.7 53L424.9 53.5L428.3 58L422.4 58.4L425.5 60.5L424.6 62.3L420.9 63.1L417.2 63.2L420.5 66.6L420.5 68.8L415.3 66.8L413.9 68.1L417.5 69.4L421 72.4L422 76.3L417.2 77.2L415.2 75.4L411.9 72.6L412.8 75.9L409.7 78.4L416.7 78.6L420.4 78.9L413.3 83L406 86.7L398.2 88.3L395.3 88.3L392.5 90.1L388.8 94.8L383.1 97.9L381.2 98.1L377.7 99.2L373.8 100.2L371.6 102.9L371.5 105.9L370.2 108.7L365.8 112L366.9 115.3L365.7 118.6L364.3 122.6L360.6 122.8L356.6 119.5L351.3 119.5L348.7 117.3L346.9 113.3L342.3 108.1L341 105.3L340.6 101.4L336.9 97.4L337.9 94.1L336.1 92.5L338.7 87.2L342.7 85.5L343.8 83.5L344.3 79.8L341.3 81.5L339.8 82.2L337.5 82.9L334.2 81.3L334 78.1L335 75.5L337.5 75.5L343 76.8L338.4 73.7L336 72L333.3 72.7L331.1 71.5L334.1 66.8L332.5 64.9L330.3 61.4L327.1 55.8L323.7 53.8L323.8 51.5L316.6 48.3L311 47.9L303.8 48.2L297.3 48.6L294.2 46.8L289.6 43.3L296.6 41.5L302 41.3L290.6 39.8L284.5 37.4L284.9 35.2L295 32.4L304.8 29.5L305.8 27.3L298.6 25.1L300.9 22.7L310.2 18.3L314 17.7L312.9 14.8L319.3 13.1L327.4 12.1L335.6 12L338.5 14L345.6 10.5L352 12.9L355.7 13.4L361.3 15.5L354.9 12L355.3 9.2Z", bbox: [284.5, 2.4, 447.4, 122.8] },
    { code: "GM", d: "M435.4 269.4L438.3 269.3L438.9 268.6L439.8 268.6L440.8 269.3L441.7 269.3L442.5 268.8L443.1 269.6L441.9 270.2L440.8 270.2L439.6 269.6L438.6 270.2L437.5 270.6L435.1 270.6L435.4 269.4Z", bbox: [435.1, 268.6, 443.1, 270.6] },
    { code: "GN", d: "M443.5 272.1L444.8 272.1L446.7 272.8L447.5 272.4L448.9 272.6L449.4 273.5L450.6 273.1L451.8 273.9L452.9 274.1L453.6 273.5L454.5 273.1L455.1 272.8L456.3 273.4L456.6 274.2L457.7 275.3L457.1 276L457 276.9L457.9 276.9L457.8 277.7L458.6 278.5L457.8 279.6L458.5 280.8L459.1 282.9L458.1 283.2L458.1 284.1L457.9 285.3L456.7 285.2L456.2 286.3L455.4 286.3L455.1 284.6L454 283L453.3 283.3L452 283.5L452 282.5L451.6 281.8L451.7 281L451.1 279.9L450.4 278.9L448.2 278.9L447.6 279.5L446.9 279.5L446.1 280.8L444.7 282L443.5 280.4L442.5 279.4L441.8 279L441.1 278.5L440.8 277.3L439.7 276.3L440.8 274.9L441.6 275L442.3 274.5L442.9 274.5L443.1 273.3L443.5 272.1Z", bbox: [439.7, 272.1, 459.1, 286.3] },
    { code: "GQ", d: "M505.7 299.7L510.1 299.8L510.1 303L506.2 303L505.3 303.1L505.7 299.7Z", bbox: [505.3, 299.7, 510.1, 303.1] },
    { code: "GR", d: "M550.1 207.6L549.8 208.5L545.9 208.8L542.7 207.7L543.2 206.4L544.7 207.4L546.7 207.2L548.7 207.5L550.1 207.6ZM541.2 188.9L543.2 189L545.3 188.1L547.2 189.2L549.6 188.9L549.6 187.3L550.9 188.2L550.1 190.2L549.5 190.5L547.9 190.4L546.5 190.1L543.2 191L545.1 192.7L543.7 193.3L542.3 193.3L540.8 191.6L540.3 192.3L540.9 194.2L542.3 195.7L541.3 196.4L542.8 197.8L544.1 198.7L544.1 200.4L541.6 199.6L542.4 201.2L540.7 201.5L541.7 204.2L540 204.3L537.8 202.9L536.8 200.5L536.3 198.4L535.3 197L533.9 195.2L533.7 194.3L535 192.8L535.1 191.8L536 191.3L536.1 190.5L537.8 190.2L538.8 189.5L540.3 189.6L541.2 188.9Z", bbox: [533.7, 187.3, 550.9, 208.8] },
    { code: "GT", d: "M234.1 266.8L234.1 266L234.4 265.4L235.3 262.6L238.8 262.6L238.8 261.7L238.1 260.9L237.1 260.3L236.1 259.4L237.3 259.4L237.3 257.8L239.8 257.8L242.3 257.8L242.3 260L242.1 263.1L242.9 263.1L243.7 263.6L244.7 263.5L243.5 264.6L242.3 265.3L242.3 266.4L241.7 267.1L241.1 267.3L239.8 268.6L238.4 268.5L236.7 268.4L235.5 267.9L234.1 266.8Z", bbox: [234.1, 257.8, 244.7, 268.6] },
    { code: "GW", d: "M435.5 272.6L436.9 272.2L437.8 272.3L438.5 272L443.5 272.1L443.4 273L443.4 274.2L442.3 274.5L441.6 275L440.8 274.9L439.7 276.3L438.2 275.1L437.1 275L436.5 274.2L435.7 273.2Z", bbox: [435.5, 272, 443.5, 276.3] },
    { code: "GY", d: "M329.2 300.8L328.6 300.9L327.1 300.6L326.2 301.3L325 301.8L324.2 301.9L322.6 302.3L320.9 301.1L320.7 299.8L320.1 298.5L320.5 296.2L321.2 295.3L320.6 294L319.7 293.6L320 292.4L318 291.9L316.2 289.9L317 289.2L316.9 287.9L318.6 287.5L319.2 287L318.3 286L318.5 285L320.6 283.5L322.4 284.4L324 286.2L324.1 287.6L325.1 287.6L326.6 288.9L327.6 289.9L327.2 292.3L325.6 293L325.7 293.6L325.2 295L326.4 296.9L327.2 296.9L327.6 298.4L329.2 300.8Z", bbox: [316.2, 283.5, 329.2, 302.3] },
    { code: "HN", d: "M258.3 265.5L257.4 265.5L256.1 266.2L255.4 266.2L254.3 266.4L253.5 266.1L253.2 266.8L252 268L251.2 268.7L250.4 268.1L249.8 268.9L248.7 268.9L248.7 270.3L248 270.9L247.2 271L246.7 270.2L245.9 269.9L246.1 268.8L245.2 268.3L244 268.7L243.1 267.9L241.7 267.1L242.3 266.4L242.3 265.3L243.5 264.6L244.7 263.5L245.6 263.2L246.4 263.1L247 263.2L248.3 263.5L249.5 263.4L250.4 263.1L251.5 262.9L252.1 263.1L252.8 263L254.6 263.2L255.8 263.8L256.6 264.4L257.6 264.8L258.3 265.5Z", bbox: [241.7, 262.9, 258.3, 271] },
    { code: "HR", d: "M524.2 172.1L525 172.5L527 173.9L529.2 174.5L530.2 174L530.9 175.3L531.7 176.3L530.7 177.5L529.5 176.8L527.6 176.8L525.3 176.3L524.1 176.3L523.5 177L522.6 176.3L522 177.6L523.3 179.2L523.9 180.2L525.1 181.4L526.1 182.1L527.1 183.5L529.5 184.7L526.7 184.1L525.1 182.9L522.7 181.9L520.5 179.5L519.8 177.9L519.7 176.8L518 176.3L517.2 177.7L516.4 176.6L516.5 175.4L518.4 175.5L519.8 175.5L520.9 175.6L520.9 174.6L521.8 174.3L522.1 172.9L524.2 172.1Z", bbox: [516.4, 172.1, 531.7, 184.7] },
    { code: "HT", d: "M288.8 252.6L289 254.1L288.8 255.1L288.1 255.6L288.8 256.4L288.8 257.2L287 256.7L285.7 256.9L284.1 256.7L282.9 257.2L281.4 256.4L281.7 255.5L284.1 255.9L286.2 256.1L287.1 255.5L285.9 254.3L285.9 253.2L284.2 252.8L284.8 252L286.5 252.1L288.8 252.6Z", bbox: [281.4, 252, 289, 257.2] },
    { code: "HU", d: "M538.9 165.6L540.4 166.5L540.6 167.4L538.9 168.1L537.7 170.4L536.1 172.7L533.9 173.3L532.3 173.2L530.2 174L529.2 174.5L527 173.9L525 172.5L524.2 172.1L523.7 170.9L524.1 168.7L523.6 168L525.1 168L525.3 166.6L526.6 167.5L527.6 167.8L529.9 167.4L530.1 166.7L531.1 166.6L532.4 166.1L534 165.9L534.6 165.1L535.5 164.9L538.3 165.9Z", bbox: [523.6, 164.9, 540.6, 174.5] },
    { code: "ID", d: "M856 312.8L856.1 321.5L856.1 330.2L853.7 328L851 327.5L850.3 328.2L847 328.3L848.1 326.1L849.8 325.4L849.1 322.5L847.8 320.2L842.6 318L840.4 317.7L836.4 315.3L835.6 316.6L834.6 316.8L834 315.8L834 314.7L832 313.3L834.8 312.4L836.7 312.4L836.5 311.7L832.6 311.7L831.6 310.1L829.2 309.6L828.1 308.3L831.6 307.7L833 306.8L837.3 307.9L837.7 308.9L838.5 313.2L841.2 314.8L843.4 312L846.5 310.4L848.9 310.4L851.2 311.3L853.1 312.3L856 312.8ZM813.3 329.6L813.6 330.9L811.8 333L809.5 333.5L809.5 332.3L810.6 330.7L813.3 329.6ZM837.9 324.2L837.6 322.2L838.1 321.3L838.7 320.4L839.3 321.1L839.3 322.4L837.9 324.2ZM794.4 294.8L792.8 297.2L794.8 299.7L794.3 301L797.3 303.4L794.2 303.7L793.3 305.6L793.4 308L790.8 309.8L790.8 312.5L789.7 316.5L789.3 315.6L786.3 316.8L785.2 315.2L783.3 315L782 314.1L778.8 315.1L777.9 313.8L776.1 314L773.9 313.7L773.5 310.1L772.2 309.3L770.9 307.1L770.5 304.7L770.8 302.2L772.4 300.5L772.9 302.3L774.7 303.8L776.4 303.2L778.1 303.4L779.7 302.1L781 301.8L783.5 302.6L785.7 302L787 298.3L788.1 297.4L789 294.3L792 294.3L794.4 294.8ZM825 313.3L827.9 314.1L828.9 316.1L826.6 315L824.4 314.8L822.9 315L821.1 314.9L821.7 313.4L825 313.3ZM818.3 315.9L816.5 315.4L816 314.3L818.7 314.2L819.3 315.1L818.3 315.9ZM821.2 300L821.3 301.5L822.9 301.7L823.2 302.8L823 305.1L821.7 304.9L821.2 306.5L822.3 307.9L821.6 308.2L820.5 306.5L819.7 303.1L820.3 301L821.2 300ZM807.8 303.5L810.9 303.4L813.5 301.4L814 302L811.8 304.7L809.8 305.2L807.3 304.7L802.8 304.8L800.5 305.2L800.1 307.2L802.5 309.6L803.9 308.4L808.9 307.5L808.7 308.7L807.5 308.3L806.4 309.9L804 310.9L806.5 314.3L806.1 315.2L808.5 318.3L808.4 320.1L807 320.9L806 319.9L807.3 317.7L804.6 318.8L804 318L804.3 317L802.4 315.4L802.6 312.8L800.8 313.6L801 316.8L801.1 320.6L799.5 321L798.3 320.2L799.1 317.7L798.7 315.1L797.5 315.1L796.7 313.3L797.8 311.6L798.2 309.4L799.5 305.4L800.1 304.3L802.4 302.3L804.4 303.1L807.8 303.5ZM800.8 333.3L797.2 331.4L799.7 330.9L801.1 331.7L802.1 332.5L801.9 333.2L800.8 333.3ZM803.6 328.6L805.4 328.4L807.7 327.5L807.3 328.9L803.3 329.7L799.8 329.4L799.8 328.4L801.9 327.8L803.6 328.6ZM795.4 328.2L797 328L797.7 329.1L794.6 329.6L792.7 330L791.3 330L792.2 328.4L793.7 328.4L794.4 327.5L795.4 328.2ZM769.3 323L769.7 323.9L774.8 324.2L775.4 323.1L780.3 324.4L781.3 326.1L785.3 326.6L788.6 328.2L785.5 329.2L782.6 328.1L780.2 328.2L777.4 328L774.9 327.5L771.8 326.5L769.9 326.2L768.7 326.6L763.9 325.5L763.4 324.3L761 324.1L762.8 321.6L766 321.7L768.2 322.8L769.3 323ZM758.3 308.7L758.8 310.6L759.7 312.1L761.7 312.3L763 314L762.3 317.3L762.2 321.4L759.2 321.5L757 319.3L753.6 317.1L752.4 315.5L750.4 313.3L749.1 311.3L747 307.6L744.7 305.3L743.9 303L742.9 301L740.5 299.3L739.1 297L737.1 295.5L734.3 292.6L734.1 291.2L735.8 291.3L740 291.8L742.3 294.4L744.4 296.2L745.9 297.4L748.4 300.2L751.1 300.3L753.3 302.1L754.9 304.3L756.9 305.5L755.8 307.7L757.4 308.6L758.3 308.7Z", bbox: [734.1, 291.2, 856.1, 333.5] },
    { code: "IE", d: "M463.5 146.3L463.9 148.9L461.9 152.1L457.2 154.3L453.4 153.7L455.6 150L454.2 146.3L457.8 143.4L459.8 141.7L460.4 143.7L459.8 145.6L461.5 145.6L463.5 146.3Z", bbox: [453.4, 141.7, 463.9, 154.3] },
    { code: "IL", d: "M575.3 215.4L574.8 216.3L573.8 215.9L573.3 217.9L573.9 218.2L573.3 218.6L573.1 219.4L574.4 219L574.5 220.2L573.1 224.8L572.9 224.1L571.4 219.8L572.1 218.8L572.7 217.3L573.2 215L573.6 214.3L574.6 214.3L575.5 213.7L575.6 214.9Z", bbox: [571.4, 213.7, 575.6, 224.8] },
    { code: "IN", d: "M739.5 228.4L739.7 229.5L738.8 230L739 231.8L737.1 231.3L733.7 233.3L733.7 234.9L732.3 237.3L732.1 238.7L731 241L728.9 240.4L728.8 243.3L728.2 244.2L728.4 245.4L727.1 246.1L725.7 241.6L725 241.7L724.5 243.4L723.1 242L723.9 240.4L725.1 240.2L726.3 237.8L724.8 237.3L722.3 237.4L719.8 237L719.6 235L718.3 234.9L716.2 233.6L715.2 235.6L717.1 237.1L715.5 238.1L714.9 239.2L716.5 239.9L716.1 241.6L717 243.7L717.4 246.1L717 247.1L715.2 247L711.9 247.6L712.1 249.7L710.7 251.4L706.8 253.2L703.8 256.5L701.8 258.2L699.2 260L699.2 261.3L697.9 262L695.4 262.9L694.2 263.1L693.4 265.2L694 268.7L694.1 270.9L693 273.5L693 278.1L691.6 278.2L690.4 280.3L691.2 281.2L688.7 281.9L687.8 283.8L686.8 284.5L684.2 282L683 278.3L682 275.5L681.1 274.3L679.6 271.7L679 268.3L678.5 266.6L676.1 262.8L675 257.5L674.2 254L674.2 250.6L673.7 248L669.8 249.7L667.9 249.3L664.4 246L665.7 245L664.9 243.8L661.8 241.5L663.6 239.6L669.5 239.6L668.9 237.2L667.4 235.7L667.1 233.5L665.4 232.2L668.3 229.2L671.4 229.4L674.2 226.4L675.9 223.4L678.5 220.5L678.4 218.4L680.7 216.7L678.5 215.2L677.6 213.2L676.7 210.6L678 209.3L682 210L685 209.6L687.6 207L690.4 210.6L690.2 213L691.2 214.6L691.1 216.1L689.2 215.7L690 218.9L692.6 220.8L696.3 222.8L694.6 224.2L693.6 226.9L696.2 228L698.7 229.4L702.1 231L705.8 231.4L707.3 232.8L709.4 233.1L712.6 233.8L714.8 233.7L715.1 232.6L714.8 230.8L715 229.5L716.6 228.9L716.8 231.2L719.3 232.9L721 232.4L723.2 232.6L725.4 232.5L725.6 230.8L724.5 229.8L726.7 229.5L729.1 227.3L732.2 225.5L734.4 226.2L736.3 225L737.6 226.8L736.7 228L739.5 228.4Z", bbox: [661.8, 207, 739.7, 284.5] },
    { code: "IQ", d: "M584.5 217L583.4 213.4L589.3 210.3L590.4 206.6L590.1 204.4L591.6 203.7L592.9 201.7L594.1 201.3L597.2 201.7L598.1 202.4L599.4 201.9L601.1 205.6L602.9 206.5L603.1 208.3L601.7 209.3L601.1 211.6L603 214.5L606.2 216.1L607.6 218.4L607.2 220.5L608 220.5L608 222.1L609.5 223.6L607.9 223.4L606.1 223.2L604.2 226L599.2 225.8L591.7 219.9L587.7 217.8L584.5 217Z", bbox: [583.4, 201.3, 609.5, 226] },
    { code: "IR", d: "M609.5 223.6L608 222.1L608 220.5L607.2 220.5L607.6 218.4L606.2 216.1L603 214.5L601.1 211.6L601.7 209.3L603.1 208.3L602.9 206.5L601.1 205.6L599.4 201.9L597.9 199.5L598.5 198.5L597.6 194.9L599.4 194L599.9 195.2L601.2 196.7L603 197.1L604 197L607.2 194.7L608.2 194.4L608.9 195.4L608 196.9L609.7 198.5L610.4 198.4L611.2 200.7L613.7 201.3L615.6 202.8L619.4 203.4L623.5 202.6L623.8 201.8L626.1 201.2L628 199.5L629.8 199.6L631 199L632.9 199.3L635.8 200.8L638 201.2L641 203.9L643 204L643.2 206.6L642.1 210.3L641.4 212.5L642.6 213L641.4 214.6L642.3 217L642.5 218.8L644.5 219.3L644.8 221.2L642.3 223.9L643.6 225.4L644.7 227.2L647.3 228.4L647.3 231L648.6 231.4L648.8 232.8L645 234.2L644 237.5L639 236.7L636.1 236L633.1 235.7L631.9 232.2L630.6 231.6L628.6 232.2L625.9 233.5L622.7 232.6L620 230.4L617.4 229.6L615.6 226.8L613.6 222.9L612.2 223.4L610.5 222.4L609.5 223.6Z", bbox: [597.6, 194, 648.8, 237.5] },
    { code: "IS", d: "M441.3 95.8L440.7 98.7L443.7 101.7L440.2 104.9L432.6 107.9L430.2 108.6L426.7 108L419.3 106.7L421.9 104.8L416.1 102.7L420.8 101.8L420.7 100.6L415.1 99.5L416.9 96.7L421 96L425.1 99L429.2 96.6L432.5 97.9L436.9 95.5L441.3 95.8Z", bbox: [415.1, 95.5, 443.7, 108.6] },
    { code: "IT", d: "M507.8 170.7L509.5 171.2L509.8 170.6L512.4 170L513 171.2L516.8 172L516.5 173.7L517.2 175.1L515 174.6L512.9 175.8L513 177.4L512.7 178.4L513.6 180L516.1 181.7L517.4 184.3L520.4 186.9L522.5 186.9L523.1 187.6L522.4 188.3L524.8 189.4L526.7 190.4L529 192L529.3 192.6L528.8 193.7L527.3 192.3L525 191.7L523.9 193.8L525.8 194.9L525.5 196.6L524.4 196.8L522.9 199.4L521.8 199.7L521.8 198.7L522.4 197L523 196.4L521.9 194.6L521.1 193L520 192.6L519.2 191.2L517.5 190.7L516.3 189.4L514.4 189.2L512.3 187.7L509.8 185.7L508 183.8L507.2 180.6L505.9 180.2L503.7 179.1L502.5 179.6L500.9 181.1L499.8 181.3L500.1 179.9L498.7 179.5L498 177L498.9 176L498.1 174.7L498.2 173.8L499.4 174.5L500.7 174.3L502.2 173.2L503.9 173.6L504.5 172.3L506.5 172.7L507.6 172.1L507.8 170.7ZM519.4 198.9L521.4 198.7L520.4 201.1L520.8 202L520.3 203.6L518.2 202.5L516.9 202.1L513.2 200.6L513.5 199L516.6 199.3L519.4 198.9ZM503.2 190.3L504.6 189.3L506.2 191.6L505.8 195.7L504.6 195.5L503.5 196.6L502.5 195.7L502.4 191.9L501.8 190.1L503.2 190.3Z", bbox: [498, 170, 529.3, 203.6] },
    { code: "JM", d: "M273.2 256L274.9 256.2L276.4 256.9L276.8 257.6L274.9 257.7L274.1 258.1L272.6 257.7L271.1 256.7L271.4 256.1L272.5 255.9L273.2 256Z", bbox: [271.1, 255.9, 276.8, 258.1] },
    { code: "JO", d: "M574.8 216.3L575.3 215.4L578.2 216.6L583.4 213.4L584.5 217L578.7 219L581.3 221.9L580.5 222.4L580 223.4L578 223.8L577.3 224.8L576.2 225.7L573.2 225.3L574.5 220.2L574.4 219L574.8 218.1L574.8 216.3Z", bbox: [573.2, 213.4, 584.5, 225.7] },
    { code: "JP", d: "M858.4 195.7L855.9 198.8L855.9 202L854.9 204.5L855.4 206L854 208.1L850.6 209.5L845.9 209.7L842.1 213.2L840.3 212L840.2 209.8L835.6 210.4L832.4 211.8L829.3 211.9L832 214.1L830.2 219.1L828.5 220.4L827.2 219.2L827.9 216.6L826.2 215.7L825.1 213.7L827.6 212.7L829 210.8L831.7 209.3L833.6 207.2L839 206.3L841.8 206.9L844.6 201.5L846.4 203L850.3 199.9L851.8 198.7L853.5 194.9L853 191.4L854.1 189.4L857 188.8L858.4 193.2L858.4 195.7ZM865.6 180.5L867.5 179.1L868.1 182.7L864.2 183.6L861.8 186.8L857.6 184.6L856.2 188.1L853.2 188.2L852.8 185L854.2 182.5L857 182.3L857.8 177.8L858.6 175.2L861.7 178.7L863.8 179.8L865.6 180.5ZM833 213.2L834.5 211.4L836 211.7L837.1 210.5L839 211.1L839.4 212.1L837.9 213.9L836.8 213L835.4 213.7L834.7 215.4L833 214.6L833 213.2Z", bbox: [825.1, 175.2, 868.1, 220.4] },
    { code: "KE", d: "M584.5 318.3L580.7 315.6L580.5 314.1L570.9 308.7L570.4 305.5L571.1 304.5L572.5 302.7L573.4 300.7L572.3 297.7L571.9 296.3L570.7 294.5L572.3 292.9L574.1 291.1L575.5 291.6L575.5 293.1L576.4 294L578.3 294L581.7 296.2L582.5 296.3L583.1 296.2L583.7 296.5L585.5 296.7L586.3 295.6L588.7 294.5L589.8 295.4L591.6 295.4L589.3 298.4L589.3 308.1L590.9 310.3L589 311.4L588.4 312.5L587.4 312.7L587 314.6L586.1 315.6L585.6 317.4L584.5 318.3Z", bbox: [570.4, 291.1, 591.6, 318.3] },
    { code: "KG", d: "M669.2 185.9L669.8 184.5L671.6 184.1L676 185.2L676.4 183.3L677.9 182.6L681.7 184L682.7 183.6L687.1 183.7L691 184L692.4 185.2L694 185.7L693.7 186.4L689.5 188.1L688.5 189.4L685.1 189.8L684.1 191.8L681.3 191.4L679.4 192L676.9 193.5L677.2 194.2L676.5 194.9L671.4 195.4L668.1 194.4L665.2 194.6L665.5 192.8L668.4 193.3L669.4 192.4L671.4 192.7L674.8 190.4L671.7 188.7L669.8 189.5L667.8 188.3L670 186.3L669.2 185.9Z", bbox: [665.2, 182.6, 694, 195.4] },
    { code: "KH", d: "M753.6 273.2L752.9 269.9L754.6 267.6L758.1 267.1L760.6 267.5L762.8 268.6L764 266.7L766.4 267.7L767 269.5L766.6 272.8L762.2 274.8L763.3 276.5L760.5 276.7L758.2 277.8L756 277.4L754.9 276L753.6 273.2Z", bbox: [752.9, 266.7, 767, 277.8] },
    { code: "KP", d: "M828.4 185.5L827.7 185.9L826.6 187L825.8 188.1L825.9 190.4L824.5 191L824 191.6L823 192.5L821.2 193.1L820.1 193.9L820 195.3L820.8 196.1L822.3 197.5L821.9 198.2L820.8 198.4L818.9 198.6L817.8 200L816.6 199.9L815.2 199.6L814.1 200.4L813.3 199.5L812.6 199L813.3 197.7L813.9 197.3L814.4 195.1L812.6 194.2L811.4 193.4L813.6 191.3L816.5 189.6L818.3 187.4L819.6 188.4L821.9 188.5L821.5 186.8L825.6 185.4L826.7 183.6L828.4 185.5Z", bbox: [811.4, 183.6, 828.4, 200.4] },
    { code: "KR", d: "M816.5 200.1L817.8 200L818.9 198.6L820.8 198.4L821.9 198.2L822.3 197.5L824.6 201.1L825.2 203.1L825.3 206.6L824.2 208.3L821.8 208.9L819.7 210.1L817.3 210.4L817 208.7L817.5 206.5L816.3 203.3L818.3 202.8L816.5 200.1Z", bbox: [816.3, 197.5, 825.3, 210.4] },
    { code: "KW", d: "M607.9 223.4L608.5 224.7L608.3 225.4L609.1 227.6L607.2 227.7L606.6 226.3L604.2 226L606.1 223.2L607.9 223.4Z", bbox: [604.2, 223.2, 609.1, 227.7] },
    { code: "KZ", d: "M713 162.8L710.9 165.1L708.7 165.4L708.6 168.9L707.1 170.4L701.8 169.3L699.9 175.3L698.5 176L693.2 177.3L695.6 183L693.8 183.8L694 185.7L692.4 185.2L691 184L687.1 183.7L682.7 183.6L681.7 184L677.9 182.6L676.4 183.3L676 185.2L671.6 184.1L669.8 184.5L669.2 185.9L667.7 186.5L664.2 188.8L663 191L662 191L661.3 189.5L657.9 189.4L657.4 186.8L656.1 186.8L656.3 183.6L653.1 181.2L648.5 181.5L645.4 181.9L642.8 179L640.6 177.8L636.5 175.4L629.1 177.1L629.2 189L627.9 189.2L626 186.7L624.2 185.8L621.2 186.4L620 187.5L619.9 186.7L620.5 185.4L620 184.2L616.9 183.1L615.7 180.2L614.2 179.4L614.1 178.3L616.7 178.6L616.8 176.2L619.1 175.7L621.4 176.2L621.9 173L621.4 170.9L618.8 171L616.5 170.2L613.4 171.7L610.9 172.4L609.6 171.9L609.9 170.1L608.2 167.9L606.2 168L603.9 165.7L605.4 163.1L604.7 162.4L606.8 158.5L609.5 160.6L609.9 158L615.4 154.2L619.5 154.1L625.4 156.5L628.6 157.9L631.4 156.5L635.6 156.4L639 158.2L639.8 157.2L643.6 157.3L644.2 155.7L639.9 153.2L642.5 151.5L642 150.5L644.5 149.6L642.6 147.1L643.8 145.8L653.8 144.6L655.1 143.6L661.8 142.3L664.2 140.7L669 141.5L669.8 145.4L672.6 144.5L676 145.7L675.8 147.7L678.4 147.5L685 144L684.1 145.2L687.5 148L693.4 157.1L694.8 155.2L698.5 157.3L702.4 156.4L703.8 157L705.1 159L707 159.7L708.1 161.2L711.5 160.7L713 162.8Z", bbox: [603.9, 140.7, 713, 191] },
    { code: "LA", d: "M766.4 267.7L764 266.7L762.8 268.6L760.6 267.5L761.5 266.3L761.6 264L759.4 261.6L759.2 258.9L757.2 256.6L755.2 256.5L754.7 257.4L753.1 257.5L752.3 257L749.5 258.7L749.4 256.2L750.1 253.3L748.3 253.1L748.1 251.5L747 250.6L747.5 249.6L749.8 247.8L750.1 248.4L751.5 248.5L751.1 245.3L752.5 244.9L754 247.1L755.2 249.7L758.5 249.7L759.5 252.1L757.8 252.8L757.1 253.8L760.3 255.5L762.5 258.7L764.1 261.1L766.2 263L766.8 265L766.4 267.7Z", bbox: [747, 244.9, 766.8, 268.6] },
    { code: "LB", d: "M575.5 213.7L574.8 213.7L573.7 214.3L574.6 211.8L575.9 209.7L577.2 209.8L577.6 210.9L576.2 212.1L575.5 213.7Z", bbox: [573.7, 209.7, 577.6, 214.3] },
    { code: "LK", d: "M698.1 285.7L697.7 288.5L696.6 289.3L694.3 289.9L693 287.8L692.5 283.9L693.7 279.5L695.6 281L696.8 282.9L698.1 285.7Z", bbox: [692.5, 279.5, 698.1, 289.9] },
    { code: "LR", d: "M457.5 285.3L457.4 286.1L457.6 287.4L457.1 288.6L457.8 289.3L458.7 289.5L459.8 290.6L459.9 291.6L459.4 294.2L458.7 294.2L456 292.9L453.6 290.9L451.3 289.4L449.5 287.7L450.1 286.8L450.3 286.1L451.5 284.6L452.7 283.4L454 283L455.1 284.6L454.9 285.7L456.2 286.3L456.7 285.2L457.5 285.3Z", bbox: [449.5, 283, 459.9, 294.2] },
    { code: "LS", d: "M557.3 385.2L558.2 386.1L557.4 387.5L556.9 388.5L555.4 388.9L555 389.9L554 390.2L552 387.9L553.4 386.1L554.9 384.9L556.1 384.3L557.3 385.2Z", bbox: [552, 384.3, 558.2, 390.2] },
    { code: "LT", d: "M550.7 139.9L550.9 141.5L548.7 142.7L548.1 144.8L545.2 146.2L542.6 146.2L542 145L540.6 144.6L540.4 143.7L540.7 142.7L539.5 142.1L536.7 141.5L536.1 138.3L539.2 137.2L543.7 137.4L546.3 137L546.7 137.8L548.1 138.1L550.7 139.9Z", bbox: [536.1, 137, 550.9, 146.2] },
    { code: "LU", d: "M496.1 159.7L496.7 160.5L496.5 162L495.7 162.1L495.4 159.8L496.1 159.7Z", bbox: [495.4, 159.7, 496.7, 162.1] },
    { code: "LV", d: "M552.8 132.8L554.1 133.7L554.3 135.6L555.1 137.8L552.3 139.2L550.7 139.9L548.1 138.1L546.7 137.8L546.3 137L543.7 137.4L539.2 137.2L536.1 138.3L536.2 135.5L537.5 133.1L540.1 131.8L542.2 134.6L544.3 134.6L544.8 131.6L547.1 130.9L548.3 131.4L550.6 132.8L552.8 132.8Z", bbox: [536.1, 130.9, 555.1, 139.9] },
    { code: "LY", d: "M546.7 246.2L546.7 251.8L543.6 251.8L543.6 252.9L532.9 247.6L522.3 242.3L519.6 243.8L517.7 244.8L516.2 243.3L512 242.1L510.8 240.3L508.7 239L507.5 239.5L506.5 237.9L506.4 236.7L504.8 234.6L505.9 233.5L505.7 231.7L506 230.1L505.8 228.8L506.3 226.4L506.1 225.1L505.3 222.5L506.6 221.8L506.8 220.6L506.5 219.3L508.4 218.2L509.2 217.3L510.5 216.4L510.6 214.1L513.8 215.2L514.9 214.9L517.1 215.4L520.7 216.7L521.9 219.3L524.3 219.9L528.1 221.1L530.9 222.6L532.2 221.8L533.5 220.5L532.9 218.2L533.7 216.8L535.6 215.4L537.5 215L541.1 215.6L542 216.9L543 216.9L543.8 217.5L546.5 217.8L547.1 218.8L546.1 220.2L546.6 221.4L545.9 223.3L546.7 225.6L546.7 235.8L546.7 246.2Z", bbox: [504.8, 214.1, 547.1, 252.9] },
    { code: "MA", d: "M474.2 208L475.2 210L475.4 211.8L476.3 214.9L477 215.6L476.5 216.7L473 217.2L471.8 218.3L470.3 218.6L470.2 220.8L467 221.9L466 223.4L463.8 224.2L461.2 224.6L456.9 226.7L456.9 230.2L456.6 231.7L454.9 231.8L454 232.5L452.8 232.5L451.9 232.1L449.6 232.4L448.7 234.6L447.9 234.8L446.7 238.4L443 241.5L442.1 245.3L441 246.6L440.7 247.6L434.7 247.8L434.7 246.5L435.8 245.8L436.6 244.3L436.5 243.4L437.4 241.4L438.9 239.6L439.8 239.1L440.5 237.5L440.5 236L441.5 234.2L443.3 233.1L445 230.2L446.3 229.1L448.8 228.8L450.9 226.8L452.3 226L454.5 223.6L453.8 219.9L454.8 217.4L455.2 215.8L456.9 213.8L459.6 212.5L461.6 211.2L463.3 208.1L464.2 206.2L466.2 206.2L467.8 207.5L470.3 207.3L473.1 208L474.2 208Z", bbox: [434.7, 206.2, 477, 247.8] },
    { code: "MD", d: "M551 166.2L551.6 165.7L553.4 165.4L555.4 166.5L556.5 166.6L557.7 167.5L557.5 168.7L558.4 169.2L558.8 170.6L559.8 171.5L560.1 172.3L559.4 172.6L557.8 172.5L557 172.3L556.4 173.9L556 175.1L555.3 175.4L554.8 173.9L555.1 172.5L555 171L553.5 169L552.6 167.6L551.8 166.6L551 166.2Z", bbox: [551, 165.4, 560.1, 175.4] },
    { code: "ME", d: "M533.5 184.9L532.8 185.2L532.6 184.6L531.5 186.2L531.7 187.2L531.1 186.9L530.3 185.9L529.2 185.2L529.9 182.9L530.8 182.2L532 182.4L533.2 183.2L534.2 183.9L533.5 184.9Z", bbox: [529.2, 182.2, 534.2, 187.2] },
    { code: "MG", d: "M612.1 339.2L612.8 340.4L613.5 342.2L613.9 345.5L614.6 346.7L614.3 348L613.9 348.9L613 347.2L612.5 348.1L613 350.1L612.7 351.2L612 351.9L611.8 354.2L610.8 357.4L609.5 361.2L607.8 366.5L606.8 370.4L605.6 373.7L603.4 374.4L601.1 375.6L599.6 374.9L597.4 373.9L596.7 372.4L596.5 369.9L595.6 367.6L595.3 365.6L595.8 363.6L597 363.1L597.1 362.2L598.3 360.1L598.6 358.3L598 357L597.5 355.3L597.2 352.7L598.2 351.2L598.5 349.4L599.9 349.3L601.3 348.8L602.3 348.3L603.5 348.3L605 346.7L607.2 345L608 343.6L607.6 342.5L608.8 342.8L610.2 340.9L610.3 339.3L611.2 338.1L612.1 339.2Z", bbox: [595.3, 338.1, 614.6, 375.6] },
    { code: "MK", d: "M539.7 185.8L541 186.8L541.2 188.9L540.3 189.6L538.8 189.5L537.8 190.2L536.1 190.5L534.9 189.7L534.6 188.3L534.9 187.3L535.4 186.6L536.9 186.1L537.5 186L538.5 185.8L539.7 185.8Z", bbox: [534.6, 185.8, 541.2, 190.5] },
    { code: "ML", d: "M449.3 272.5L449.4 271.6L449.2 270.6L448.2 269.8L447.7 268.3L447.5 266.6L448.4 266.1L448.9 264.5L449.7 264.4L451.6 265.2L453.1 264.6L454.1 264.8L465.2 264.2L465.8 262.2L464.1 250L462.8 237.9L466.9 237.8L475.9 244L484.9 250.1L485.5 251.4L487.2 252.2L488.4 252.6L488.4 254.4L491.4 254.1L491.4 260.5L489.9 262.3L489.7 264L487.3 264.4L483.7 264.6L482.7 265.6L481 265.7L479.3 265.7L478.6 265.2L477.2 265.6L474.7 266.7L474.2 267.6L472.1 268.8L471.7 269.5L470.6 270L469.3 269.7L468.6 270.3L468.2 272.2L466.1 274.4L466.1 275.4L465.4 276.5L465.6 278.1L464.5 278.5L463.9 278.8L463.5 277.7L462.7 278L461.7 278.7L459.7 278.7L458.9 278.3L457.8 277.7L457.9 276.9L457 276.9L457.1 276L457.7 275.3L456.6 274.2L456.3 273.4L455.7 272.8L454.5 273.1L453.6 273.5L452.9 274.1L451.8 273.9L451 273.2L449.9 273.5L449.3 272.5Z", bbox: [447.5, 237.8, 491.4, 278.8] },
    { code: "MM", d: "M747 250.6L745.4 251.3L743.9 252.5L742 252.6L740.8 255.6L739.7 256.1L741 258.5L742.7 260.5L743.7 262.3L742.8 264.7L741.8 265.2L742.5 266.6L744.3 268.7L744.6 270.2L744.5 271.5L745.6 274L744.1 276.5L742.8 279.3L742.5 277.3L743.4 275.2L742.5 273.6L742.7 270.6L741.6 269.2L740.7 266L740.3 262.5L739.1 260.3L737.3 261.6L734.3 263.6L732.8 263.3L731.2 262.7L732.1 259.3L731.5 256.7L729.4 253.5L729.8 252.5L728.2 252.2L726.3 249.9L726.1 247.7L727.1 248.1L727.1 246.1L728.4 245.4L728.2 244.2L728.8 243.3L728.9 240.4L731 241L732.1 238.7L732.3 237.3L733.7 234.9L733.7 233.3L737.1 231.3L739 231.8L738.8 230L739.7 229.5L739.5 228.4L741.1 228.2L742 229.9L743.2 230.6L743.2 232.8L743.1 235.1L740.6 237.5L740.3 240.9L743.1 240.4L743.7 243L745.4 243.6L744.6 245.9L746.6 246.9L747.8 247.4L749.7 246.6L749.8 247.8L747.5 249.6L747 250.6Z", bbox: [726.1, 228.2, 749.8, 279.3] },
    { code: "MN", d: "M714 162.6L716.8 162L721.9 159L726 157.3L728.3 158.4L731.1 158.4L732.8 160.1L735.5 160.2L739.4 161.1L742 158.6L740.9 156.6L743.6 152.9L746.6 154.4L749 154.8L752.2 155.7L752.7 158.3L756.5 159.8L759 159.2L762.4 158.7L765 159.2L767.7 160.8L769.3 162.6L771.7 162.6L775.1 163.1L777.6 162.3L781.1 161.7L785 159.3L786.6 159.6L788 160.8L791.1 160.5L789.8 163.1L788 166.5L788.6 167.9L790.2 167.5L792.8 168L794.8 166.8L797 167.9L799.4 170.2L799.1 171.4L797 171L793.1 171.5L791.2 172.4L789.3 174.6L785.2 175.9L782.6 177.7L779.8 177L778.3 176.7L776.9 178.8L777.8 180.1L778.2 181.2L776.4 182.3L774.4 184L771.3 185.1L767.3 185.2L763 186.4L759.9 188.1L758.7 187.1L755.5 187.1L751.6 185.1L748.9 184.7L745.4 185.1L739.9 184.4L736.9 184.5L735.4 182.5L734.1 179.5L732.5 179.2L729.3 177.1L725.7 176.7L722.5 176.1L721.6 174.7L722.6 170.8L720.7 168L716.9 166.8L714.7 165L714 162.6Z", bbox: [714, 152.9, 799.4, 188.1] },
    { code: "MR", d: "M434.5 249L435.1 248.1L445.5 248.1L445 244.1L445.7 242.6L448.2 242.4L448.1 235.1L456.8 235.3L456.8 230.9L466.9 237.8L462.8 237.9L464.1 250L465.4 261.9L465.2 264.2L454.5 264.2L454.1 264.8L453.1 264.6L451.6 265.2L449.7 264.4L448.9 264.5L448.4 266.1L447.5 266.6L445.8 264.7L444.2 262.7L442.4 262L441.1 261.2L439.6 261.2L438.3 261.8L437 261.6L436.1 262.4L435.9 261L436.6 259.6L436.9 257L436.7 254.3L436.3 252.9L436.6 251.5L435.9 250.2L434.5 249Z", bbox: [434.5, 230.9, 466.9, 266.6] },
    { code: "MW", d: "M567.4 330.5L570 331L570.5 331.8L571.4 333L572.2 336.7L571.4 338.7L572.2 342.3L573.1 342.2L574 343.1L575.2 345.1L575.4 348.6L574.2 349.1L573.4 351L571.7 349.4L571.5 347.4L572.1 346.2L571.9 345.1L570.8 344.4L570.1 344.6L568.6 343.3L567.2 342.6L568 340.1L568.8 339.2L568.3 336.9L568.8 334.7L569.3 334L568.6 331.7L567.4 330.5Z", bbox: [567.2, 330.5, 575.4, 351] },
    { code: "MX", d: "M167.7 215.9L170.7 215.7L174.1 215.4L177.9 217.4L183.9 219.5L189.2 219.4L191.4 219.4L191.4 218.2L196 218.2L197 219.3L198.3 220.2L199.9 221.5L200.8 223L201.4 224.6L202.8 225.5L205 226.4L206.7 224.1L208.9 224L210.8 225.2L212.1 227.2L213 228.9L214.6 230.5L215.2 232.5L215.9 233.9L218 234.7L219.9 235.4L221 235.3L219.9 237.8L219.5 239.8L219.3 243.6L219 245L219.5 246.5L220.3 247.9L220.8 250L222.6 252.1L223.2 253.7L224.3 255L227.1 255.8L228.2 256.9L230.5 256.1L232.6 255.9L234.6 255.4L236.2 254.9L237.9 253.8L238.6 252.2L238.8 249.8L239.3 249L241.1 248.3L243.9 247.6L246.2 247.7L247.9 247.5L248.4 249.4L247 251.1L246.3 252.8L246.4 254.4L245.8 256.6L245.1 255.9L244 256L243.1 257.6L242.3 257.4L239.8 257.8L237.3 257.8L237.3 259.4L236.1 259.4L237.1 260.3L238.1 260.9L238.4 261.5L238.8 262.6L235.3 262.6L234.1 264.8L234.1 266L234.1 266.8L231 263.8L229.7 263L227.5 262.2L226 262.4L223.9 263.5L222.5 263.7L220.6 263L218.6 262.5L216.1 261.3L214.1 260.9L211.1 259.6L208.9 258.3L208.2 257.5L206.7 257.4L204 256.5L202.9 255.2L200 253.7L198.7 251.9L198 250.6L198.9 250.3L198.7 249.5L199.3 248.8L199.3 247.8L198.4 246.6L198.2 245.5L197.3 244L194.9 241.2L192.2 239L190.9 237.3L188.6 236.1L188.2 235.4L188.6 233.6L187.2 233L185.6 231.6L185 229.6L183.5 229.3L182 227.8L180.7 226.4L180.6 225.5L179.2 223.3L178.2 221.1L178.3 219.9L176.3 218.8L175.5 218.9L173.9 218.1L173.5 219.3L173.9 220.7L174.2 222.9L175.1 224.1L177.1 226.1L177.5 226.8L178.3 228L179.3 229.8L180.1 230.5L180.7 231.6L182.4 233L183.2 235.7L184 236.9L184.8 238.3L184.9 239.7L186.2 239.8L187.3 241.1L188.2 242.4L187.1 243.9L185.9 242.2L184.1 240.6L182.2 239.2L180.8 238.5L180.9 236.4L180.5 234.9L179.3 234L177.4 232.7L176.4 232.3L174.8 231.6L173.2 230L174.5 229.9L175.5 228.8L175.6 227.5L173.5 225.5L171.9 224.7L171 222.8L170 220.9L168.7 218.6L167.7 215.9Z", bbox: [167.7, 215.4, 248.4, 266.8] },
    { code: "MY", d: "M746.9 288.6L749.5 289.3L749.7 290.6L751.5 290.3L752.4 289.2L754.6 291.1L755.7 292.9L755.8 294.7L755.6 295.9L755.8 296.8L756 298.4L756.9 299.1L758 301.5L757.9 302.4L756.1 302.6L753.5 300.6L750.4 298.5L750.1 297.1L748.5 295.3L748.2 293.1L747.2 291.6L747.5 289.7L746.9 288.6ZM794.4 294.8L792 294.3L789 294.3L788.1 297.4L787 298.3L785.7 302L783.5 302.6L781 301.8L779.7 302.1L778.1 303.4L776.4 303.2L774.7 303.8L772.9 302.3L772.4 300.5L774.4 301.4L776.4 300.9L777 298.6L778.1 298.1L781.3 297.5L783.2 295.4L784.5 293.7L785.8 295.1L786.3 294.2L787.6 294.3L787.7 292.6L787.9 291.3L789.9 289.4L791.3 287.3L792.3 287.3L793.7 288.7L793.8 289.8L795.6 290.6L797.8 291.4L797.6 292.4L795.8 292.6L796.3 293.9L794.4 294.8Z", bbox: [746.9, 287.3, 797.8, 303.8] },
    { code: "MZ", d: "M572.2 336.7L574.2 336.5L577.4 337.2L578.1 336.9L579.9 336.8L580.9 336L582.5 336L585.4 335L587.5 333.4L587.9 334.6L587.8 337.3L588.2 339.7L588.3 343.9L588.7 345.3L587.9 347.2L586.9 349.1L585.2 350.8L582.8 351.9L579.8 353.2L576.8 356.2L575.7 356.7L573.9 358.6L572.8 359.3L572.5 361.2L573.8 363.4L574.3 365L574.4 365.8L574.8 368.4L574.3 369.7L574.9 370.2L574.6 371.4L573.4 372.4L571.2 373.4L568 374.9L566.9 376L567.1 377.2L567.8 377.3L567.5 378.9L565.5 378.8L565.3 377.6L564.9 376.3L564.7 375.3L565.1 372.1L564.5 370.1L563.2 366.1L566 363L566.7 361L567.4 359.1L567 358.3L567.1 356.2L567.6 354.3L567.6 350.8L566.2 349.9L564.9 349.7L564.4 349L563.1 348.5L560.9 348.5L560.7 347.5L560.5 345.6L568.6 343.3L570.1 344.6L570.8 344.4L571.9 345.1L572.1 346.2L571.5 347.4L571.7 349.4L573.4 351L574.2 349.1L575.4 348.6L575.2 345.1L574 343.1L573.1 342.2L572.2 342.3L571.4 338.7L572.2 336.7Z", bbox: [560.5, 333.4, 588.7, 378.9] },
    { code: "NA", d: "M533.1 373.2L533.1 383.8L530.7 385.3L529.2 385.5L527.6 384.9L526.4 384.7L525.9 383.5L524.9 382.7L523.6 384.1L521.6 382L520.6 379.9L520 377.1L519.3 375L518.4 370.6L518.4 367.3L518 365.7L517 364.6L515.6 362.3L514.2 359L513.6 357.2L511.5 354.5L511.3 352.4L512.6 351.9L514.2 351.4L515.9 351.5L517.5 352.8L528.7 352.4L530.5 353.8L537 354.1L541.9 353L544.1 352.4L545.8 352.6L546.9 353.2L545.4 354L544.6 354L542.9 355.1L541.9 354L537.7 354.9L535.8 355L535.7 364.9L533.1 365L533.1 373.2Z", bbox: [511.3, 351.4, 546.9, 385.5] },
    { code: "NC", d: "M922.1 362.9L924.3 364.6L925.7 365.9L924.6 366.6L923.2 365.8L921.3 364.5L919.5 363.1L917.8 361.1L917.4 360.2L918.6 360.2L920.1 361.1L921.2 362.1L922.1 362.9Z", bbox: [917.4, 360.2, 925.7, 366.6] },
    { code: "NE", d: "M519.6 243.8L520.3 248.1L521.3 248.9L521.3 249.8L522.4 250.7L521.8 251.9L520.8 257.5L520.7 261.1L517.3 263.7L516.1 267.3L517.2 268.3L517.2 270L518.9 270.1L518.7 271.3L517.9 271.5L517.8 272.4L515.5 269.5L514.9 269.3L512.8 270.9L510.7 270.1L509.3 269.9L508.5 270.3L507 270.2L505.4 271.4L504 271.4L500.8 270L499.6 270.7L498.2 270.7L497.2 269.6L494.5 268.6L491.6 268.9L491 269.5L490.6 271.1L489.8 272.2L489.6 274.6L487.6 273L486.6 273L485.7 273.8L485.8 272L482.7 271.4L482.6 270.1L481.1 268.3L480.8 267L481 265.7L482.7 265.6L483.7 264.6L487.3 264.4L489.7 264L489.9 262.3L491.4 260.5L491.4 254.1L495.1 252.9L502.9 247.4L512 242.1L516.2 243.3L517.7 244.8L519.6 243.8Z", bbox: [480.8, 242.1, 522.4, 274.6] },
    { code: "NG", d: "M487.2 289.1L487.3 284.8L487.3 283.1L487.8 281.4L488.6 280.6L489.9 278.9L489.6 278.2L490.1 277.1L489.5 275.5L489.6 274.6L489.8 272.2L490.6 271.1L491 269.5L491.6 268.9L494.5 268.6L497.2 269.6L498.2 270.7L499.6 270.7L500.8 270L504 271.4L505.4 271.4L507 270.2L508.5 270.3L509.3 269.9L510.7 270.1L512.8 270.9L514.9 269.3L515.5 269.5L517.3 272.4L518.9 273.4L518.4 274.8L516.2 276.9L515.5 278.6L515.1 280L514.5 280.6L514 282.5L512.6 283.6L512.2 285L511.6 286.1L511.3 287.2L509.5 288.1L508 287L507 287L505.4 288.6L504.6 288.6L503.4 291.2L502.7 293.1L499.9 294.1L498.9 293.9L497.9 294.5L495.7 294.5L494.3 292.8L493.4 290.8L491.5 289.1L489.5 289.1L487.2 289.1Z", bbox: [487.2, 268.6, 518.9, 294.5] },
    { code: "NI", d: "M256.9 276.5L256.3 277.1L255.5 276.9L254.2 276.2L253.6 276.5L251.8 275.8L250.5 275.3L249.3 274.2L248.7 273.3L247.6 272.4L246.2 271.2L247 271.2L248 270.9L248.3 270.3L248.7 268.9L249.8 268.9L250.4 268.1L251.2 268.7L252 268L252.9 267.3L253.5 266.1L254.3 266.4L255.4 266.2L256.1 266.2L257 265.9L258.3 265.5L257.9 266.4L258.2 267.4L257.6 268.3L257.3 269.4L257.2 270.6L257.3 271.3L257.4 272.5L256.7 274L256.9 274.7L256.4 275.4L256.5 276.1Z", bbox: [246.2, 265.5, 258.3, 277.1] },
    { code: "NL", d: "M498.4 147.7L498.9 149L498.2 152.3L497.6 153.6L496 153.6L496.4 157.3L495 156.5L493.3 154.9L490.8 155.7L488.8 155.4L490.2 154.4L492.6 149.2L496.2 147.6L498.4 147.7Z", bbox: [488.8, 147.6, 498.9, 157.3] },
    { code: "NO", d: "M520.4 27.8L521.4 25.8L525.3 25.6L528.7 27.7L537.5 32.1L530.7 34.4L529.3 38.7L526.9 39.8L525.7 44.4L522.4 44.7L516.7 41.2L519.1 39.2L515.1 37.5L509.9 32.6L507.9 28L515.1 25.8L516.6 27.9L520.4 27.8ZM562.9 81.6L558.4 83.5L556.2 83.9L557.4 80.6L554 78.7L549.8 80.3L548.5 83.8L546 85.9L543.1 84.7L539.6 85L536.7 82.5L535.1 83.7L533.4 83.9L533 87L528 86.2L527.3 88.8L524.7 88.8L523 92L520.3 97L516.1 103.1L517.1 104.6L516.2 106.3L513.5 106.2L511.8 110.2L512 115.7L513.7 117.8L512.8 122.5L510.6 125.2L509.4 127.5L507.6 125.1L502.4 129.6L498.8 130.5L495.1 128.5L494.2 124.3L493.3 115L495.8 112.3L502.8 108.8L508.1 104.4L513 98.4L519.4 89.7L523.8 86.3L531.2 80.4L537 78.3L541.4 78.5L545.5 74.5L550.3 74.7L555.1 73.8L563.4 77.3L560 78.6L562.9 81.6ZM553.1 25.5L549.1 28.8L541.4 29.5L533.5 28.5L533.1 26.8L529.2 26.7L526.3 23.9L534.6 22.2L538.4 23.7L541.1 21.8L547.9 23.4L553.1 25.5ZM545.9 38.5L540 40.9L535.3 39.5L537.1 38.1L535.5 36.2L541 35L542.1 37.2L545.9 38.5Z", bbox: [493.3, 21.8, 563.4, 130.5] },
    { code: "NP", d: "M715 229.5L714.8 230.8L715.1 232.6L714.8 233.7L712.6 233.8L709.4 233.1L707.3 232.8L705.8 231.4L702.1 231L698.7 229.4L696.2 228L693.6 226.9L694.6 224.2L696.3 222.8L697.4 222.1L699.5 223L702.2 224.9L703.7 225.4L704.6 226.8L706.7 227.3L708.9 228.6L711.9 229.3L715 229.5Z", bbox: [693.6, 222.1, 715.1, 233.8] },
    { code: "NZ", d: "M951.7 418.7L950.7 420.4L949.4 422.6L947.3 423.9L946.8 423L945.7 422.6L947.3 420L946.4 418.2L943.5 417L943.6 415.8L945.5 414.8L946 412.4L945.9 410.4L944.8 408.3L943.6 406.5L941.5 403.8L940.4 401.7L941.4 401.5L942.8 403.1L944.9 403.9L945.6 406.6L947.6 409.8L947.6 407.7L948.8 408.6L949.2 410.9L951.4 411.9L953.2 412.2L954.7 411L956 411.3L955.4 414.1L954.6 415.9L952.6 415.8L951.8 416.8L952.1 418.1L951.7 418.7ZM932.4 429.9L934.7 428.2L936.3 426.5L937.5 424.1L938.5 423.3L938.9 421.5L940.8 420.1L941.4 421.4L942 422.7L943.9 421.4L944.7 422.8L944.7 424.1L943.7 425.6L941.9 428L940.6 429.3L941.5 430.8L939.5 430.9L937.2 432.1L936.5 434.3L935 437.6L932.9 439.1L931.6 440.1L929.1 440L927.4 438.9L924.5 438.6L924 437.4L925.5 435L928.8 431.7L930.5 431.1L932.4 429.9Z", bbox: [924, 401.5, 956, 440.1] },
    { code: "OM", d: "M627.2 244.2L627.3 243.1L628.1 241.9L628.1 240.8L629.3 240.2L629 238L630.4 238L631.6 239.9L633.1 240.9L635 241.3L636.6 241.8L637.8 243.4L638.5 244.4L639.5 244.7L639.5 245.3L638.5 247L638.1 247.8L637 248.7L636 250.6L634.8 250.4L634.2 251.1L633.8 252.5L634.1 254.4L632.6 254.7L631 255.7L630.7 257.1L630.1 257.7L628.4 257.6L627.4 258.3L627.4 259.4L626.1 260.2L624.6 259.9L622.9 260.9L621.6 261L620.8 259.1L618.7 254.6L626.7 251.8L628.4 246.2L627.2 244.2ZM630 235.7L629.5 234.8L630.3 233.8L630.4 235.2Z", bbox: [618.7, 233.8, 639.5, 261] },
    { code: "PA", d: "M273.7 282.6L274 284.6L273.5 285.4L272.7 285.2L272.3 286.5L271.4 285.8L270.9 284.3L271.5 283.6L270.8 283.4L270.3 282.5L269 281.8L267.8 281.9L267.3 282.9L266.2 283.6L265.4 284.2L266.7 285.7L265.9 286L264.3 286.5L263.8 284.9L262.6 285.2L262.1 284.2L261 284L260.3 283.7L259.1 283.7L259.1 282.8L259.4 282L258.8 280.5L259.9 280.2L260.8 281.2L261.8 281.9L262.8 282.3L264.1 282.1L265.3 281.5L266.9 280.9L267.8 280.1L269.3 280.3L270.7 280.6L271.9 281.1L272.7 281.9L273.7 282.6Z", bbox: [258.8, 280.1, 274, 286.5] },
    { code: "PE", d: "M293.6 317.3L291.2 317.2L288.7 318.1L285.6 319.9L285.4 321.1L284.7 322.1L285 323.5L283.4 324.3L283.4 325.4L282.7 325.9L283.8 328.3L285.3 330L284.7 331.1L286.5 331.3L287.5 332.7L289.9 332.8L292 331.2L291.9 335.3L293.1 335.6L294.6 335.1L296.9 339.5L296.3 340.4L296.2 342.3L296.1 344.6L295.1 346L295.6 347L295 347.9L296.1 350.2L294.4 353.2L293.7 354.6L292.3 355.3L289.7 353.7L289.4 352.6L284.1 349.8L279.4 346.8L277.3 345.2L276.2 342.9L276.6 342.1L274.4 338.6L271.7 333.6L269.2 328.2L268.1 327L267.3 325L265.2 323.3L263.3 322.2L264.2 321L262.9 318.5L263.7 316.6L265.9 314.9L266.2 316L265.4 316.7L265.5 317.6L266.6 317.4L267.7 317.7L268.8 319.1L270.3 318L270.8 316.2L272.4 313.8L275.6 312.8L278.5 310L279.4 308.3L279 306.2L279.7 306L281.5 307.2L282.3 308.5L283.6 309.2L285.1 312L287.1 312.3L288.6 311.6L289.6 312.1L291.2 311.8L293.2 313.1L291.5 315.8L292.3 315.9L293.6 317.3Z", bbox: [262.9, 306, 296.9, 355.3] },
    { code: "PG", d: "M856 312.8L860.6 314.6L865.6 316.1L867.4 317.5L868.9 318.8L869.3 320.4L873.7 322.1L874.4 323.5L871.9 323.8L872.5 325.6L874.9 327.3L876.6 330.2L878.1 330.1L878 331.3L880.1 331.7L879.3 332.2L882.1 333.4L881.8 334.1L880.1 334.3L879.4 333.6L877.1 333.3L874.4 332.9L872.4 331.2L870.8 329.7L869.5 327.4L866 326.2L863.7 327L862.1 327.9L862.4 329.8L860.3 330.8L858.9 330.3L856.1 330.2L856.1 321.5L856 312.8ZM887 315.6L888.1 316.4L888.4 317.8L887.5 318.5L887 317L886.4 315.9L885.2 315.1L883.7 313.9L881.8 313.1L882.5 312.5L883.9 313.2L884.9 313.8L886 314.5L887 315.6ZM883.5 321.4L882 322.1L880.6 322.7L879.2 322.7L877 321.9L875.5 321.2L875.7 320.3L878.1 320.7L879.6 320.5L880 319.2L880.6 320.6L882.2 320.4L882.9 319.5L884.4 318.5L884.1 316.9L885.7 316.9L886.2 318.8L885.3 320.4L883.9 320.7L883.5 321.4ZM892.7 320.1L893.5 320.7L894.8 322.4L896.1 323.3L895.7 324L894.9 324.3L893.8 323.3L892.6 321.6L892 319.5L892.7 320.1Z", bbox: [856, 312.5, 896.1, 334.3] },
    { code: "PH", d: "M802.2 271.8L800.9 269.7L803.1 269.8L804.1 270.8L803.4 273.1L802.2 271.8ZM806.9 279.1L807.6 278.4L807.9 276.7L809.3 276.5L808.9 278.4L810.9 275.7L810.6 278.3L809.7 279.2L808.8 280.9L808 281.7L806.4 279.8L806.9 279.1ZM817 283.3L817.3 285.1L817.4 286.6L816.5 289.1L815.5 286.3L814.3 287.7L815.2 289.7L814.4 290.9L811.3 289.4L810.5 287.4L811.3 286.2L809.6 284.9L808.8 286L807.5 285.9L805.6 287.4L805.1 286.6L806.2 284.4L807.8 283.6L809.3 282.6L810.2 283.8L812.3 283.1L812.7 281.9L814.6 281.8L814.4 279.7L816.6 281L816.8 282.3L817 283.3ZM796 280.9L792.5 283.5L793.8 281.6L795.7 279.9L797.3 278.1L798.7 275.4L799.2 277.6L797.4 279.1L796 280.9ZM806.2 256.7L805.8 257.8L806.7 259.8L806 262.1L804.4 263L804 265.2L804.6 267.4L806 267.7L807.2 267.3L810.5 268.8L810.3 270.3L811.2 271L810.9 272.2L808.8 270.9L807.8 269.5L807.1 270.5L805.4 268.8L803 269.2L801.7 268.6L801.8 267.5L802.6 266.8L801.8 266.2L801.5 267.2L800.2 265.6L799.8 264.4L799.7 261.8L800.8 262.7L801 258.4L801.9 255.9L803.5 255.9L805.2 256.7L806 256L806.2 256.7ZM805.4 275.3L805 274L806.6 274.8L808.3 274.8L808.3 275.9L807 277.1L805.3 277.9L805.2 276.6L805.4 275.3ZM814.7 273.2L815.4 276.3L813.4 275.5L813.4 276.4L814.1 278.1L812.8 278.7L812.7 276.8L811.9 276.7L811.5 275L813 275.3L813 274.2L811.4 272.2L813.9 272.2L814.7 273.2Z", bbox: [792.5, 255.9, 817.4, 290.9] },
    { code: "PK", d: "M687.6 207L685 209.6L682 210L678 209.3L676.7 210.6L677.6 213.2L678.5 215.2L680.7 216.7L678.4 218.4L678.5 220.5L675.9 223.4L674.2 226.4L671.4 229.4L668.3 229.2L665.4 232.2L667.1 233.5L667.4 235.7L668.9 237.2L669.5 239.6L663.6 239.6L661.8 241.5L659.9 240.7L659.1 238.7L657 236.6L652.1 237.1L647.7 237.1L644 237.5L645 234.2L648.8 232.8L648.6 231.4L647.3 231L647.3 228.4L644.7 227.2L643.6 225.4L642.3 223.9L646.8 225.4L649.5 224.9L651.1 225.3L651.6 224.7L653.5 224.9L656.9 223.7L657 221.2L658.5 219.6L660.5 219.6L660.8 218.7L662.8 218.3L663.8 218.6L664.8 217.8L664.7 216L665.8 214.2L667.5 213.5L666.5 211.5L669 211.6L669.8 210.5L669.6 209.3L671 208.1L670.7 206.6L670 205.3L671.6 203.9L674.5 203.3L677.5 203L678.9 202.4L680.4 202L682.4 203.5L683.2 205.8L687.6 207Z", bbox: [642.3, 202, 687.6, 241.5] },
    { code: "PL", d: "M542.6 146.2L542.7 147.8L543.5 149.2L543.5 150.6L541.9 151.3L542.7 153L542.7 154.6L544.1 157.7L543.8 158.6L542.5 159L540.1 161.9L540.7 163.5L537.6 162L535.7 162.4L534.4 162.1L532.9 162.8L531.5 161.6L530.4 162.1L529.1 160.2L527.1 159.9L526.8 158.9L525 158.5L524.6 159.4L523.1 158.6L523.3 157.7L521.3 157.4L520 156.2L519 154L519.2 152.7L518.5 150.8L517.5 149.6L518.3 148.6L517.7 146.7L519.5 145.7L523.6 144L527 142.7L529.7 143.3L529.9 144.2L532.4 144.3L535.7 144.7L540.6 144.6L542 145L542.6 146.2Z", bbox: [517.5, 142.7, 544.1, 163.5] },
    { code: "PR", d: "M303.2 255.9L304.6 256.1L304.4 257.4L302.4 257.4L300.8 257.5L300.7 256.3L303.2 255.9Z", bbox: [300.7, 255.9, 304.6, 257.5] },
    { code: "PS", d: "M574.4 219L573.1 219.4L573.3 218.6L573.9 218.2L573.3 217.9L573.8 215.9L574.8 216.3L574.8 218.1L574.4 219Z", bbox: [573.1, 215.9, 574.8, 219.4] },
    { code: "PT", d: "M455.9 187.2L456.9 186.4L458 185.9L458.6 187.5L460.2 187.5L462.2 187.2L463 188.8L461.7 189.6L461.7 192.1L461.2 194L460 194.3L461.1 196.2L460.3 198.2L461.3 199.1L460.9 200L459.9 201.1L460.1 202.2L459 202.9L457.6 202.5L456.3 202.9L456.7 200.4L456.4 198.5L455.2 198.3L454.6 197.1L454.8 195L455.9 193.9L456.1 192.6L456.6 190.7L456.6 189.4L456 188.3L455.9 187.2Z", bbox: [454.6, 185.9, 463, 202.9] },
    { code: "PY", d: "M324.9 360.4L325.7 361.9L325.5 365.7L328.3 366.2L329.4 365.7L331.2 366.4L331.7 367.3L332 369.8L332.3 370.9L333.3 371.1L334.3 370.6L335.2 371.1L335.2 372.7L334.9 374.3L334.3 376L333.9 378.5L331.5 380.7L329.4 381.2L326.4 380.7L323.7 380L326.3 375.6L325.9 374.3L323.2 373.2L319.9 371.1L317.7 370.7L312.8 366.1L313.9 362.8L314 361.3L315.2 358.8L319.9 358L322.4 358.1L324.8 359.5L324.9 360.4Z", bbox: [312.8, 358, 335.2, 381.2] },
    { code: "QA", d: "M615.5 238.5L615.3 236.4L616 234.9L616.8 234.6L617.6 235.5L617.6 237.1L617 238.8L616.3 239L615.5 238.5Z", bbox: [615.3, 234.6, 617.6, 239] },
    { code: "RO", d: "M555.3 175.4L556.5 176L557.7 175.5L558.9 176.1L559 176.9L557.7 177.6L556.9 177.3L556.2 181.3L554.6 180.9L552.6 179.8L549.5 180.5L548.2 181.3L544.3 181.2L542.2 180.7L541.2 180.9L540.4 179.6L539.9 179L540.6 178.4L539.9 178L539.1 178.8L537.5 177.8L537.3 176.4L535.7 175.7L535.4 174.6L533.9 173.3L536.1 172.7L537.7 170.4L538.9 168.1L540.6 167.4L541.7 166.7L543.4 167L545.1 167.1L546.3 167.9L547.2 167.4L549.2 167L549.9 166.2L551 166.2L551.8 166.6L552.6 167.6L553.5 169L555 171L555.1 172.5L554.8 173.9L555.3 175.4Z", bbox: [533.9, 166.2, 559, 181.3] },
    { code: "RS", d: "M530.2 174L532.3 173.2L533.9 173.3L535.4 174.6L535.7 175.7L537.3 176.4L537.5 177.8L539.1 178.8L539.9 178L540.6 178.4L539.9 179L539.8 180.3L540 181.5L541.3 182.9L540.3 183.9L539.8 184.9L539.7 185.8L538.5 185.8L537.5 186L537.8 185.4L538.1 184.6L537.2 184L536.4 183.4L535.5 182.7L534.7 183.9L534 184.2L533.2 183.2L532.3 182.9L531.3 181.9L532.3 180.2L531 178.9L531.6 177.5L530.7 177.5L531.7 176.3L530.9 175.3L530.2 174Z", bbox: [530.2, 173.2, 541.3, 186] },
    { code: "RU", d: "M730.1 19.5L735.8 18.1L741 21.3L747.2 27.2L746.5 32.6L740.7 33.3L733.3 31.6L728.8 29.3L726.8 25L723.1 23.8L730.1 19.5ZM754.2 30.2L761 33.5L760.2 35.9L745.2 38.1L750 30.5L752.2 29.8L754.2 30.2ZM850.2 48.2L857.3 48.4L866.9 51.3L864.8 55.3L855 55.1L850.5 56.4L845.3 52.9L846.7 49.2L850.2 48.2ZM875.3 52.4L882 53.9L878.9 56L874.6 55.5L869.7 53.4L870.3 51.6L875.3 52.4ZM853 62.8L855.5 60.8L858.8 60.3L862.6 62.3L862.9 63.6L858.9 63.7L853.4 63.1ZM599.6 22.2L604.8 21.1L608.8 21L609.4 22.7L610.9 21.2L613.4 20.2L617.4 21.6L616.4 22.5L612.8 23.3L610.4 23.8L610 24.8L606.9 25.8L604 24.4L605.5 22.4L599.6 22.2ZM540.6 144.6L535.7 144.7L532.4 144.3L533 142.7L536.7 141.5L539.5 142.1L540.7 142.7L540.4 143.7L540.6 144.6ZM622.7 60.9L629.1 56.3L628.4 53.9L634.3 51L643.1 47.5L652 46.5L656.6 44.4L661.8 43.7L663.6 45.9L661.8 47.6L652.4 50.3L644.2 52.9L635.9 58L632 63L627.8 67.9L628.3 72L633.4 76L631.8 76.5L623.1 75.8L622.4 73.7L617.6 72.4L617.2 69.7L619.9 68.6L619.8 65.9L625.1 61.5L622.7 60.9ZM861.1 146.9L862 150.4L862 153.9L863.1 157.5L865.7 163.7L861.8 162.5L860.2 167.5L862.8 170.9L862.7 173.3L860.7 171.3L858.9 173.8L858.4 171L858.7 167.8L858.4 164.1L859 161.5L859.2 156.8L857.6 153.3L857.8 148.4L860.3 146.7L859.2 145L860.4 144.5L861.1 146.9ZM828.7 186.1L828.4 183.9L829.7 183.8L830.1 180L829.4 177.2L831.7 176L834.9 176.6L836.7 173.3L837.6 169.7L838.7 168.4L840.1 165.4L835.7 166.4L833.4 167.7L829.3 167.7L828.2 164.5L825.1 162.1L820.4 161L819.4 157.5L818.5 155.4L817.5 153.8L815.9 150.2L813.5 148.9L809.5 147.8L806 147.9L802.7 148.6L800.5 150.4L801.9 151.2L802 153.2L800.5 154.3L798.1 158.1L798.1 159.6L794.3 161.8L791.1 160.5L788 160.8L786.6 159.6L785 159.3L781.1 161.7L777.6 162.3L775.1 163.1L771.7 162.6L769.3 162.6L767.7 160.8L765 159.2L762.4 158.7L759 159.2L756.5 159.8L752.7 158.3L752.2 155.7L749 154.8L746.6 154.4L743.6 152.9L740.9 156.6L742 158.6L739.4 161.1L735.5 160.2L732.8 160.1L731.1 158.4L728.3 158.4L726 157.3L721.9 159L716.8 162L714 162.6L713 162.8L711.5 160.7L708.1 161.2L707 159.7L705.1 159L703.8 157L702.4 156.4L698.5 157.3L694.8 155.2L693.4 157.1L687.5 148L684.1 145.2L685 144L678.4 147.5L675.8 147.7L676 145.7L672.6 144.5L669.8 145.4L669 141.5L664.2 140.7L661.8 142.3L655.1 143.6L653.8 144.6L643.8 145.8L642.6 147.1L644.5 149.6L642 150.5L642.5 151.5L639.9 153.2L644.2 155.7L643.6 157.3L639.8 157.2L639 158.2L635.6 156.4L631.4 156.5L628.6 157.9L625.4 156.5L619.5 154.1L615.4 154.2L609.9 158L609.5 160.6L606.8 158.5L604.7 162.4L605.4 163.1L603.9 165.7L606.2 168L608.2 167.9L609.9 170.1L609.6 171.9L610.9 172.4L609.7 174.4L607.1 174.9L604.5 178.3L606.9 181.4L606.6 183.6L609.6 187.4L608 188.7L607.5 189.5L606.3 189.3L604.5 187.3L603.8 187.2L602.1 186.5L601.3 185.2L598.8 184.5L597.1 185L593.1 182.9L589.1 182.3L586.9 181.8L583.1 179.4L580.1 178.2L577.8 176.2L579.7 175.7L582 172.9L580.5 171.6L584.4 170.2L584.3 169.5L581.9 170L582 168.5L583.4 167.6L586 167.3L586.4 166.2L585.8 164.3L586.9 162.5L586.9 161.5L582.9 160.4L581.4 160.4L579.7 158.8L577.7 159.3L574.3 158.1L574.3 157.4L573.4 155.9L571.3 155.7L571 154.6L571.7 153.9L570 151.9L567.2 152.2L566.4 152L565.8 152.9L564.8 152.7L564.1 150.4L563.5 149.2L566.1 149L567.2 148.2L566.4 147.2L564.6 146.6L564.8 145.9L563.7 145.3L562 142.9L562.6 141.9L562.3 140.1L559.7 139.2L558.3 139.7L557.9 138.7L555.1 137.8L554.3 135.6L554.1 133.7L552.8 132.8L553.9 131.6L553.1 128L555 125.7L554.6 125L557.7 122.8L554.9 121L560.6 115.8L563 113.4L564 111.3L560.1 108.4L561.2 105.6L558.8 102.4L560.6 98.7L557.5 93.6L559.9 90.2L555.9 87.2L556.2 83.9L558.4 83.5L562.9 81.6L565.7 79.9L570.1 82.8L577.4 83.9L587.4 89.1L589.5 91.3L589.7 94.3L586.7 96.7L582.4 97.8L570.4 94.5L568.5 95L572.8 98.3L573 100.3L573.2 104.7L576.6 106L578.7 107.1L579 105.1L577.4 103.2L579.1 101.6L585.6 104.3L587.8 103.2L586 100L592.2 95.7L594.7 96L597.2 97.5L598.7 94.5L596.5 91.8L597.8 89.1L595.9 86.2L603.3 87.7L604.9 90.3L601.5 90.8L601.5 93.3L603.6 94.9L607.7 93.9L608.4 91L613.9 88.8L623.2 84.9L625.3 85.1L622.6 87.9L625.9 88.4L627.8 86.8L632.8 86.7L636.8 84.8L639.8 87.6L642.9 84.5L640.1 81.8L641.5 80.2L649.3 81.6L653 83.1L662.7 88.4L664.5 86L661.8 83.5L661.7 82.5L658.5 82.1L659.4 79.8L657.9 76.1L657.9 74.5L662.8 70.1L664.5 65.5L666.5 64.5L673.6 65.9L674.1 68.7L671.6 72.7L673.3 74.2L674.1 77.6L673.5 84.1L676.5 87L675.3 90L670.1 96.4L673.1 97.1L674.2 95.5L677.1 94.3L677.8 92.1L680.1 89.9L678.6 87.3L679.8 84.3L676.9 83.9L676.3 81.3L678.4 76.5L674.9 72.5L679.7 69.2L679.1 65.6L680.4 65.5L681.8 68.3L680.8 73L683.6 73.9L682.4 70.4L686.9 68.4L692.4 68.2L697.3 71L695 66.8L694.7 61.4L699.3 60.4L705.8 60.6L711.5 59.9L709.4 57.2L712.4 53.7L715.5 53.5L720.7 50.9L727.7 50.1L728.6 48.6L735.6 48.1L737.8 49.4L743.8 46.4L748.7 46.5L749.4 44.1L752 41.7L758.3 39.4L762.8 41.3L759.2 42.7L765.3 43.5L766 46.3L768.4 44.9L776.2 45L782.2 47.7L784.4 49.7L783.7 52.5L780.7 54.1L773.7 57.1L771.7 58.6L775 59.4L779 60.7L781.4 59.7L782.7 63L783.9 61.7L788.2 60.9L796.7 61.7L797.4 64.1L808.5 64.9L808.7 60.9L814.3 61.9L818.6 61.8L822.9 64.5L824.1 67.8L822.6 69.9L825.9 73.7L830.1 75.7L832.7 70.6L837 72.8L841.5 71.5L846.7 73L848.6 71.6L853 72.3L851.1 67.7L854.6 65.5L878.7 68.8L880.9 71.7L887.9 75.4L898.7 74.5L904 75.3L906.2 77.3L905.9 80.8L909.2 82.2L912.7 81.2L917.5 81.1L922.5 82L927.6 81.5L932.2 85.6L935.5 84.2L933.4 81.1L934.5 79L943 80.4L948.6 80.1L956.3 82.3L960 84.4L960 102.3L956.6 104.2L953.1 103.9L955.5 106.2L957.1 109.7L958.3 110.8L958.6 112.5L957.9 113.6L953 112.7L945.5 115.8L943.1 116.3L939.1 119.1L935.2 121.6L934.2 123.4L930.4 120.7L923.5 123.8L922.2 122.3L919.7 124L916.1 123.5L915.2 126.1L912 129.9L912.1 131.4L915.2 132.3L914.8 137.8L912.3 138L911.2 141.1L912.3 142.7L907.7 144.6L906.7 148.8L902.7 149.6L901.9 153.3L898.1 156.6L897.1 154.1L896 148.9L894.5 140.8L895.8 135.5L898 133.3L898.2 131.5L902.3 130.6L907.1 125.7L911.7 121.6L916.5 118.4L918.6 112.6L915.4 112.9L913.8 116.3L907 120.8L904.8 115.8L897.9 117.2L891.2 123.9L893.5 126.3L887.5 127.4L883.4 127.8L883.6 124.9L879.4 124.3L876.1 126.3L868 125.6L859.2 126.8L850.6 134.3L840.3 143.2L844.5 143.6L845.8 145.9L848.4 146.7L850.1 144.9L853.1 145.2L856.9 149.2L857 152.2L854.9 155.8L854.7 160L853.5 165.5L849.5 170.4L848.6 172.7L845 176.6L841.4 180.4L839.7 182.3L836.1 184.2L834.4 184.2L832.7 182.7L829.2 185L828.7 186.1ZM0 84.4L6.5 87.9L13.5 92.5L13.3 95.2L15.1 96.3L14.5 93.1L21.7 93.8L26.9 97.9L24.3 99.8L19.9 100.3L19.9 104.5L18.8 105.4L16.3 105.3L14.3 103.8L10.7 102.5L10.1 100.7L7.4 99.9L4.4 100.5L2.9 99L3.5 97.3L0.3 98.4L1.5 100.4L0 102.3ZM0 72.1L2.6 72L6.5 73.4L6.2 74L3.5 75.2L0 75.5L0 72.1ZM960 72.1L960 75.5L957.1 75.7L956.6 74.2L960 72.1ZM569.2 173.8L569.9 173L571.8 173.7L572.6 173.8L573 174.5L574.7 175.7L577.4 175.5L576.9 176.7L574 177.2L570.4 179.1L568.9 178.5L569.5 176.9L566.5 176L567 175.3L569.6 174.2Z", bbox: [0, 18.1, 960, 189.5] },
    { code: "RW", d: "M561.1 308.9L562.2 310.4L562 311.9L561.3 312.3L559.8 312.1L559 313.6L557.4 313.4L557.7 311.9L558.1 310.1L558.9 309.4L559.5 309.7L561.1 308.9Z", bbox: [557.4, 308.9, 562.2, 313.6] },
    { code: "SA", d: "M573.2 225.3L576.2 225.7L577.3 224.8L578 223.8L580 223.4L580.5 222.4L581.3 221.9L578.7 219L584 217.5L587.7 217.8L591.7 219.9L599.2 225.8L604.2 226L606.6 226.3L607.2 227.7L609.1 227.6L610.2 230.1L611.5 230.7L611.9 231.7L613.7 232.9L613.9 234.1L613.6 235.1L614 236L614.7 236.8L615.1 237.8L615.5 238.5L616.3 239L617 238.8L617.5 239.9L617.7 240.6L618.7 243.4L626.7 244.8L628.4 246.2L626.7 251.8L618.7 254.6L611 255.6L608.5 256.9L606.6 259.7L605.3 260.2L604.7 259.3L603.6 259.4L601.1 259.1L597.5 258.9L596.8 259.2L595.7 258.5L595 259.8L595.2 261L594.1 261.8L593.7 260.7L592.9 259.9L592.7 258.8L591.3 257.8L589.9 255.5L589.2 253.2L587.3 251.3L586.1 250.8L584.4 248.2L584.1 246.2L584.2 244.6L582.6 241.5L581.4 240.4L580 239.8L579.1 238.2L579.2 237.5L578.5 236L577.7 235.4L576.7 233.3L575 231L573.7 229L572.3 229L572.8 227.4L572.9 226.4L573.2 225.3Z", bbox: [572.3, 217.5, 628.4, 261.8] },
    { code: "SB", d: "M912.3 333.9L913.1 334.8L911.2 334.8L910.2 333.1L911.8 333.8ZM911.1 331.5L908.8 329.7L908.2 328.1L909.1 328.1L910.1 330.2L911.1 331.5ZM908.9 332.2L907.9 332.3L906.3 332L905.9 330.5L907.6 331L908.5 331.5L908.9 332.2ZM905.7 327.3L906.3 328.1L904.4 327.5L902.9 326.5L901.9 325.7L903.5 326L905.7 327.3ZM899 324.6L900.1 325.5L898.4 325L897.3 323.9L899 324.6Z", bbox: [897.3, 323.9, 913.1, 334.8] },
    { code: "SD", d: "M545.5 283.8L543.5 282.7L542.6 281.9L542.4 281L542.8 279.9L542.8 278.8L541.3 277.1L541 276L541 275.3L540 274.5L540 273L539.4 271.9L538.5 272.1L538.8 271.1L539.5 270L539.2 268.8L540 268L539.5 267.4L540.2 265.7L541.4 263.7L543.7 263.9L543.6 252.9L543.6 251.8L546.7 251.8L546.7 246.2L557.4 246.2L567.7 246.2L578.3 246.2L579.2 249L578.6 249.5L579 252.3L580 255.6L581 256.3L582.4 257.3L581.1 258.9L579.1 259.3L578.3 260.2L578 262L576.9 266L577.1 267.1L576.7 269.4L575.6 272.1L574 273.5L572.9 275.5L572.6 276.6L571.3 277.4L570.6 280.2L570.6 282.6L570.6 280.5L570.2 279.1L569.9 278.2L568.6 277.1L568.2 275.2L568.6 273.2L567.3 273L567.1 273.6L565.5 273.7L566.2 274.5L566.4 276.2L564.9 277.6L563.6 279.6L562.2 279.9L560 278.3L559 278.8L558.7 279.6L557.3 280.1L554.6 280.7L552.3 280L551.3 280.5L550.6 280.3L549.2 278.7L548.8 278L546.9 278.3L546.1 279.6L545.4 282L544.5 282.5L543.7 282.8L545.5 283.8Z", bbox: [538.5, 246.2, 582.4, 283.8] },
    { code: "SE", d: "M509.4 127.5L510.6 125.2L512.8 122.5L513.7 117.8L512 115.7L511.8 110.2L513.5 106.2L516.2 106.3L517.1 104.6L516.1 103.1L520.3 97L523 92L524.7 88.8L527.3 88.8L528 86.2L533 87L533.4 83.9L535.1 83.7L538.6 86L542.8 89.1L542.8 96.1L543.7 97.8L539.2 99L536.6 102.1L537 104.7L532.7 108.1L527.6 111.8L525.7 117.6L527.6 120.4L530.1 122.6L527.7 127.1L524.9 128L523.9 134.5L522.4 138L519.1 137.7L517.6 140.7L514.5 140.8L513.7 137.3L511.4 133L509.4 127.5Z", bbox: [509.4, 83.7, 543.7, 140.8] },
    { code: "SI", d: "M516.8 172L519 172.3L520.4 171.5L522.7 171.5L523.2 170.9L524.2 172.1L522.1 172.9L521.8 174.3L520.9 174.6L520.9 175.6L519.8 175.5L518.9 174.9L518.4 175.5L516.6 175.4L516.5 173.7L516.8 172Z", bbox: [516.5, 170.9, 524.2, 175.6] },
    { code: "SK", d: "M540.2 163.3L539.4 164.2L538.9 165.6L535.5 164.9L534.6 165.1L534 165.9L532.7 166.3L531.1 166.6L530.1 166.7L529.9 167.4L527.6 167.8L526.6 167.5L525.3 166.6L525 165.4L525.6 164.2L526.8 164.3L527.7 163.9L528.5 162.6L529.5 161.9L530.3 161.9L531.5 161.6L532.9 162.8L534.4 162.1L535.7 162.4L537.6 162L540.2 163.3Z", bbox: [525, 161.6, 540.2, 167.8] },
    { code: "SL", d: "M444.7 282L446.1 280.8L446.4 280.1L447.6 279.5L448.2 278.9L450.4 278.9L451.1 279.9L451.7 281L451.6 281.8L452 282.5L452 283.5L452.7 283.4L451.5 284.6L450.3 286.1L450.1 286.8L449.5 287.7L448.8 287.5L446.9 286.4L445.5 285L445 284L444.7 282Z", bbox: [444.7, 278.9, 452.7, 287.7] },
    { code: "SN", d: "M435.4 269.4L434.3 267.2L433 266.3L434.2 265.8L435.5 263.8L436.1 262.4L437 261.6L438.3 261.8L439.6 261.2L441.1 261.2L442.4 262L444.2 262.7L445.8 264.7L447.5 266.6L447.7 268.3L448.2 269.8L449.2 270.6L449.4 271.6L449.3 272.5L447.5 272.4L446.7 272.8L444.8 272.1L443.5 272.1L438.5 272L437.8 272.3L436.9 272.2L435.5 272.6L435.1 270.6L437.5 270.6L438.2 270.2L439.6 269.6L440.8 270.2L441.9 270.2L443.1 269.6L442.5 268.8L441.7 269.3L440.8 269.3L439.8 268.6L438.9 268.6L438.3 269.3L435.4 269.4Z", bbox: [433, 261.2, 449.4, 272.8] },
    { code: "SO", d: "M590.9 310.3L589.3 308.1L589.3 298.4L591.6 295.4L592.3 294.5L594.1 294.5L596.4 292.6L599.9 292.5L607.4 284.4L609.3 282.2L610.5 280.5L610.5 279.1L610.5 276.4L610.5 275.3L611.4 275.2L612.6 274.8L614 274.5L615.3 273.6L616.3 273.6L616.4 274.4L616.1 275.9L616.1 277.3L615.6 278.3L614.8 281.2L613.5 284.2L611.9 287.7L609.6 291.6L607.3 294.6L604.2 298.2L601.5 300.4L597.5 303L595 305L592.1 308.3L591.5 309.7L590.9 310.3ZM610.5 275.3L610.5 276.4L610.5 279.1L610.5 280.5L609.3 282.2L607.4 284.4L605.2 284.5L596.5 281.3L595.5 280.3L594.5 279L593.5 277.5L594.1 276.6L595.1 275.1L595.9 275.6L596.4 276.7L597.6 277.9L599 277.9L601.5 277.2L604.4 276.9L606.7 276L608.1 275.9L609 275.4L610.5 275.3Z", bbox: [589.3, 273.6, 616.4, 310.3] },
    { code: "SR", d: "M334.6 299.7L333.1 299.1L331.8 299.4L330.7 299.1L330.5 299.9L330.7 301L329.2 300.8L327.6 298.4L327.2 296.9L326.4 296.9L325.2 295L325.7 293.6L325.6 293L327.2 292.3L327.6 289.9L330.8 290.4L333.2 289.7L336.1 290.5L334.7 292.8L334.9 294.6L336 296.2L335.5 297.3L335.3 298.5L334.6 299.7Z", bbox: [325.2, 289.7, 336.1, 301] },
    { code: "SS", d: "M562.2 296.5L559.9 294.7L559.2 293.5L557.8 294.1L556.5 293.9L555.8 294.4L554.6 294.1L553 291.9L552.6 291L550.6 289.9L549.9 288.3L548.8 287.2L547 285.8L547 284.9L545.5 283.8L543.7 282.8L544.5 282.5L545.4 282L546.1 279.6L546.9 278.3L548.8 278L549.2 278.7L550.6 280.3L551.3 280.5L552.3 280L554.2 280.1L557.2 280.7L558.7 279.6L559 278.8L560 278.3L562.2 279.9L563.6 279.6L564.9 277.6L566.4 276.2L566.2 274.5L565.5 273.7L567.1 273.6L568.6 273.2L568.2 275.2L568.6 277.1L569.9 278.2L570.2 279.1L570.2 280.5L570.6 282.6L570.2 283.4L568.8 283.5L567.9 285L569.5 285.2L570.9 286.5L571.3 287.6L572.5 288.2L574.1 291.1L572.3 292.9L570.7 294.5L569 295.7L567.2 295.7L565 296.3L563.3 295.7L562.2 296.5Z", bbox: [543.7, 273.2, 574.1, 296.5] },
    { code: "SV", d: "M241.7 267.1L242.5 267.3L243.9 268.3L245.2 268.3L246.1 268.8L245.9 269.9L245.6 270.6L244 270.5L243.1 270.3L242 269.7L240.5 269.6L239.7 269L240.7 267.9L241.1 267.3L241.7 267.1Z", bbox: [239.7, 267.1, 246.1, 270.6] },
    { code: "SY", d: "M575.3 215.4L575.5 213.7L576.2 212.1L577.6 210.9L577.2 209.8L576 209.6L575.7 207.3L576.4 206L577.1 205.4L577.8 204.7L578 203L578.8 203.6L581.8 202.8L583.2 203.3L585.4 203.3L588.5 202.2L589.9 202.2L592.9 201.7L591.6 203.7L590.1 204.4L590.4 206.6L589.3 210.3L583.4 213.4L578.2 216.6L575.3 215.4Z", bbox: [575.3, 201.7, 592.9, 216.6] },
    { code: "SZ", d: "M565.5 378.8L565 380.1L563.4 380.4L561.8 378.9L561.8 377.9L562.5 376.8L562.8 376L563.6 375.8L564.9 376.3L565.3 377.6L565.5 378.8Z", bbox: [561.8, 375.8, 565.5, 380.4] },
    { code: "TD", d: "M543.6 252.9L543.7 263.9L541.4 263.7L540.2 265.7L539.5 267.4L539.2 268.8L539.5 270L538.8 271.1L538.5 272.1L539.4 271.9L540 273L540 274.5L541 275.3L541 276L539.3 276.5L537.9 277.5L536 280.5L533.5 281.7L530.9 281.6L530.2 281.8L530.4 282.8L529 283.7L527.9 284.7L524.5 285.8L523.9 285.2L522.9 285.8L520.7 286L521.2 285.3L520.3 283.4L520 282.3L518.8 281.9L517.2 280.3L517.8 279L519 279.3L519.8 279.1L521.2 279.1L519.8 276.7L519.9 274.9L519.7 273.1L518.7 271.3L518.9 270.1L517.2 270L517.2 268.3L516.1 267.3L517.3 263.7L520.7 261.1L520.8 257.5L521.8 251.9L522.4 250.7L521.3 249.8L521.3 248.9L520.3 248.1L519.6 243.8L522.3 242.3L532.9 247.6L543.6 252.9Z", bbox: [516.1, 242.3, 543.7, 286] },
    { code: "TF", d: "M663.8 446.8L665.5 447.9L668.1 448.3L668.2 448.9L667.4 450.5L663.3 450.7L663.3 448.9L663.6 447.5L663.8 446.8Z", bbox: [663.3, 446.8, 668.2, 450.7] },
    { code: "TG", d: "M482.4 276.4L482.1 277.8L482.9 278.6L483.8 279.5L483.9 280.9L484.3 287.6L485 289.4L482.8 290L482.2 289.1L481.5 287.4L481.3 286L481.9 283.6L481.2 282.6L481 280.5L481 278.6L479.9 277.2L480.1 276.3L482.4 276.4Z", bbox: [479.9, 276.3, 485, 290] },
    { code: "TH", d: "M760.6 267.5L758.1 267.1L754.6 267.6L752.9 269.9L753.6 273.2L751.2 271.9L748.9 272L749.3 269.8L746.9 269.9L746.7 272.8L745.3 276.8L744.4 279.2L744.6 281.1L746.3 281.2L747.4 283.7L747.9 286L749.4 287.5L751 287.8L752.4 289.2L751.5 290.3L749.7 290.6L749.5 289.3L747.4 288.1L745.8 287.5L745.4 286.2L744 284.7L742.7 283.4L742.2 285L741.7 283.5L742 281.8L742.8 279.3L744.1 276.5L745.6 274L744.5 271.5L744.6 270.2L744.3 268.7L742.5 266.6L741.8 265.2L742.8 264.7L743.7 262.3L742.7 260.5L741 258.5L739.7 256.1L740.8 255.6L742 252.6L743.9 252.5L745.4 251.3L747 250.6L748.1 251.5L748.3 253.1L750.1 253.3L749.4 256.2L749.5 258.7L752.3 257L753.1 257.5L754.7 257.4L755.2 256.5L757.2 256.6L759.2 258.9L759.4 261.6L761.6 264L761.5 266.3L760.6 267.5Z", bbox: [739.7, 250.6, 761.6, 290.6] },
    { code: "TJ", d: "M660.9 202L662.4 198.9L661.8 196.6L659.8 195.8L660.5 194.5L662.8 194.6L664 192.9L664.9 190.8L668.4 190.1L667.9 191.6L668.3 192.4L669.4 192.4L668.4 193.3L665.5 192.8L665.2 194.6L668.1 194.4L671.4 195.4L676.5 194.9L677.1 197.8L678 197.5L679.6 198.2L679.5 199.4L679.9 201.2L677.2 201.2L675.4 200.9L673.7 202.3L672.5 202.6L671.6 203.3L670.5 202.2L670.8 199.7L670 199.5L670.3 198.6L668.8 197.9L667.7 198.9L667.4 200.2L665.4 200.6L664.5 202L663.6 201.4L661.7 202.4L660.9 202Z", bbox: [659.8, 190.1, 679.9, 203.3] },
    { code: "TL", d: "M813.3 329.6L813.6 329L815.9 328.4L817.7 328.3L818.6 327.9L819.6 328.3L818.6 329L815.8 330.2L813.6 330.9L813.5 330.1Z", bbox: [813.3, 327.9, 819.6, 330.9] },
    { code: "TM", d: "M620 187.5L621.2 186.4L624.2 185.8L626 186.7L627.9 189.2L629.2 189L632.3 189L631.8 187.3L634.1 186.2L636.3 184.4L639.9 186.1L640.2 188.6L641.2 189.3L644.1 189.1L645 189.7L646.3 193L649.4 195.1L651.1 196.6L653.9 198.1L657.5 199.5L657.4 201.3L656.6 201.2L655.3 200.4L654.9 201.5L652.7 202.1L652.1 204.6L650.6 205.5L648.5 205.9L648 207.3L646 207.7L643.2 206.6L643 204L641 203.9L638 201.2L635.8 200.8L632.9 199.3L631 199L629.8 199.6L628 199.5L626.1 201.2L623.8 201.8L623.3 199.7L623.7 196.4L621.6 195.4L622.3 193.2L620.5 193L621.1 190.4L623.6 191.1L626 190.1L624 188.2L623.3 186.4L621.1 187.2L620.8 189.6L620 187.5Z", bbox: [620, 184.4, 657.5, 207.7] },
    { code: "TN", d: "M505.3 222.5L504.1 217.2L502.5 216L502.5 215.3L500.3 213.5L500.1 211.3L501.7 209.6L502.3 207.1L501.9 204.2L502.5 202.6L505.4 201.4L507.2 201.7L507.1 203.3L509.4 202.2L508.3 204.3L508.2 205.7L509.2 206.4L508.8 209L507.1 210.6L507.6 212.2L508.9 212.2L509.6 213.7L510.6 214.1L510.5 216.4L509.2 217.3L508.4 218.2L506.5 219.3L506.8 220.6L506.6 221.8L505.3 222.5Z", bbox: [500.1, 201.4, 510.6, 222.5] },
    { code: "TR", d: "M599.4 201.9L598.1 202.4L597.2 201.7L594.1 201.3L592.9 201.7L589.9 202.2L588.5 202.2L585.4 203.3L583.2 203.3L581.8 202.8L578.8 203.6L578 203L577.8 204.7L577.1 205.4L576.4 206L575.4 204.7L576.4 203.5L574.8 203.8L572.6 203.1L570.7 204.8L566.7 205.2L564.5 203.5L561.7 203.4L561 204.7L559.2 205.1L556.6 203.4L553.7 203.5L552.1 200.4L550.2 198.7L551.5 196.3L549.8 194.8L552.7 191.8L556.9 191.7L558 189.3L563.1 189.7L566.3 187.6L569.4 186.7L573.8 186.7L578.4 188.9L582.3 190.1L585.4 189.7L587.7 189.9L590.8 188.3L593.7 188.1L596.2 189.7L596.7 190.8L596.4 192.3L598.4 193.1L599.4 194L597.6 194.9L598.5 198.5L597.9 199.5L599.4 201.9ZM549.6 187.3L552.4 186.3L554.7 186.8L555 188L557.3 189L556.8 189.8L553.6 190L552.5 191L550.3 192.7L549.5 191.2L549.5 190.5L550.1 190.2L550.9 188.2L549.6 187.3Z", bbox: [549.5, 186.3, 599.4, 206] },
    { code: "TT", d: "M315.5 277L317.1 276.7L317.5 278.8L315.3 279.1L315.6 278.1L315.5 277Z", bbox: [315.3, 276.7, 317.5, 279.1] },
    { code: "TW", d: "M804.7 239.5L803.1 244L802 246.3L800.6 243.9L800.3 241.8L801.8 239.1L804 236.9L805.2 237.8L804.7 239.5Z", bbox: [800.3, 236.9, 805.2, 246.3] },
    { code: "TZ", d: "M570.4 308.4L580.5 314.1L580.7 315.6L584.5 318.3L583.3 321.6L583.5 323.1L585.2 324.1L585.3 324.8L584.5 326.4L584.7 327.2L584.5 328.5L585.4 330.2L586.5 332.8L587.5 333.4L585.4 335L582.5 336L580.9 336L579.9 336.8L578.1 336.9L577.4 337.2L574.2 336.5L572.2 336.7L571.4 333L570.5 331.8L570 331L567.4 330.5L565.8 329.7L564.1 329.2L563.1 328.8L562 328.1L560.5 324.7L559 323.2L558.5 321.7L558.7 320.3L558.2 317.8L559.3 317.7L560.3 316.7L561.3 315.3L562 314.8L562 313.9L561.3 312.3L562 311.9L562.2 310.4L561.1 308.9L562.1 308.5L565 308.6L570.4 308.4Z", bbox: [558.2, 308.4, 587.5, 337.2] },
    { code: "UA", d: "M564.8 152.7L565.8 152.9L566.4 152L567.2 152.2L570 151.9L571.7 153.9L571 154.6L571.3 155.7L573.4 155.9L574.3 157.4L574.3 158.1L577.7 159.3L579.7 158.8L581.4 160.4L582.9 160.4L586.9 161.5L586.9 162.5L585.8 164.3L586.4 166.2L586 167.3L583.4 167.6L582 168.5L581.9 170L579.8 170.3L578 171.4L575.5 171.6L573.2 172.8L573.4 174.6L572.6 173.8L571.8 173.7L569.9 173L569.2 173.8L564.6 172.6L564.5 171.4L562 171.8L561 173.6L558.9 176.1L557.7 175.5L556.5 176L555.3 175.4L556 175.1L556.4 173.9L557.2 172.9L557 172.3L557.8 172.5L559.4 172.6L560.1 172.3L559.8 171.5L558.8 170.6L558.4 169.2L557.5 168.7L557.7 167.5L556.5 166.6L555.4 166.5L553.4 165.4L551.6 165.7L551 166.2L549.9 166.2L549.2 167L547.2 167.4L546.3 167.9L545.1 167.1L543.4 167L541.7 166.7L540.6 167.4L540.4 166.5L538.9 165.6L539.4 164.2L540.2 163.3L540.1 161.9L542.5 159L543.8 158.6L544.1 157.7L542.7 154.6L544 154.4L545.5 153.5L547.5 153.4L550.2 153.7L553.2 154.5L555.3 154.6L556.3 155.1L557.3 154.5L558 155.3L560.4 155.2L561.5 155.5L561.7 153.7L562.5 152.9L564.8 152.7Z", bbox: [538.9, 151.9, 586.9, 176.1] },
    { code: "UG", d: "M570.4 308.4L565 308.6L562.1 308.5L561.1 308.9L559.5 309.7L558.9 309.4L558.9 307.4L559.5 306.4L559.7 304.2L560.2 303L561.3 301.6L562.3 300.9L563.1 299.9L562.1 299.6L562.2 296.5L563.3 295.7L565 296.3L567.2 295.7L569 295.7L570.7 294.5L571.9 296.3L572.3 297.7L573.4 300.7L572.5 302.7L571.1 304.5L570.4 305.5L570.4 308.4Z", bbox: [558.9, 294.5, 573.4, 309.7] },
    { code: "US", d: "M152.4 163.6L160 163.6L167.9 163.6L170.5 163.6L178.7 163.6L186.5 163.6L194.5 163.6L202.5 163.6L211.6 163.6L220.7 163.6L226.2 163.6L226.3 162.3L227.2 162.2L227.6 164.1L228.5 164.7L230.3 164.9L233 165.5L235.6 166.5L237.8 166.1L241.1 167L241.9 166.9L244.3 166L246.8 167.2L249.4 168.5L251.6 169.6L253.7 170.7L253.9 171.6L254.5 171.9L255.1 172.4L255.8 172.8L257 173.3L257.1 174.3L259.9 175.9L260.4 178.9L261 181.7L260.2 183.6L258.9 185.4L258.3 186.5L258.6 187.3L259.5 187.8L260.2 187.8L263.3 186.1L266 185.6L269.5 184L269.3 182.7L268.9 182.1L270.1 181.6L272.7 181.5L275.1 181.5L276 180.3L279.2 177.7L280.4 177L284.4 177L289.3 177L289.6 176.2L290.4 176L291.6 175.5L292.5 174L293.3 171.4L295.4 168.9L296.2 169.8L298 169.2L299.2 170.2L299.2 174.7L301 176.6L301.4 177.7L298.6 179.3L295.8 180.4L293 181.4L291.6 183.3L291.2 184L291.1 185.7L292 187.4L293.1 187.5L292.8 186.3L293.6 187L293.4 187.9L291.6 188.5L290.3 188.4L288.4 189L287.2 189.1L285.7 189.3L283.4 190.2L287.4 189.6L288.1 190.2L284.4 191.1L282.7 191.2L282 191.6L282.8 191.8L282.2 194L280.2 196.5L280.1 195.7L279.5 195.5L278.6 194.7L279.1 196.4L279.8 196.9L279.9 198.1L279 199.3L277.5 201.8L278.1 199.6L276.7 198.4L276.4 195.8L275.9 197.1L276.5 199.1L274.7 198.6L276.5 199.6L276.6 202.6L277.4 202.8L277.7 203.8L278.1 206.9L276.4 209.1L273.6 210L271.9 211.8L270.5 212L269.2 213.1L268.8 214.1L265.9 216L264.4 217.4L263.1 219.2L262.7 221.2L263.2 223.3L264.1 225.8L265.2 227.8L265.3 229.1L266.5 232.4L266.4 234.3L266.3 235.4L265.7 237.2L264.9 237.5L263.5 237.2L263.1 235.9L262.1 235.3L260.7 232.8L259.5 230.6L259 229.5L259.6 227.6L258.9 226L256.8 223.6L255.7 223.1L253 224.4L251.3 222.9L249.6 222.2L246.6 222.6L244.2 222.3L242.2 222.5L241.1 222.9L241.6 223.7L241.5 224.9L241.6 225.8L240.6 225.4L239.6 225.9L237.7 225.9L235.7 224.3L233.3 224.7L231.4 224L229.7 224.2L227.5 224.9L225.1 227L222.4 228.3L221 229.7L220.4 231L220.3 232.9L220.5 234.3L221 235.3L219.9 235.4L218 234.7L215.9 233.9L215.2 232.5L214.6 230.5L213 228.9L212.1 227.2L210.8 225.2L208.9 224L206.7 224.1L205 226.4L202.8 225.5L201.4 224.6L200.8 223L199.9 221.5L198.3 220.2L197 219.3L196 218.2L191.4 218.2L191.4 219.4L189.2 219.4L183.9 219.5L177.9 217.4L173.8 215.9L170.7 215.7L167.7 215.9L167.2 214.4L165.5 212.7L164.2 212.3L164 211.5L162.5 211.3L161.5 210.5L159 210.2L158.3 209.7L158 208.1L155.4 205L153.2 200.8L153.3 200L152.1 199L150.1 196.4L149.7 193.9L148.3 192.1L148.9 189.5L148.8 186.8L147.9 184.3L149 181.3L149.3 178.3L149.6 175.3L149.1 170.8L148.3 168L147.5 166.4L147.8 165.7L151.7 166.9L153.1 170.1L153.8 169.2L153.3 166.4L152.4 163.6ZM65.6 251.6L66.5 252.2L67.2 253.1L66.1 253.9L65.2 254.3L64.2 254.4L64.2 253.6L63.8 252.6L64.4 251.8L64.4 251L65.6 251.6ZM64 249.7L62.9 250.2L62.1 249.4L63.3 249.2L64 249.7ZM62 248.5L60.5 248.7L62 248.5ZM58.6 247L59.6 248.1L58.3 248.1L57.9 247.4L58.6 247ZM55 245.6L55.1 246.3L53.9 246L55 245.6ZM36.1 121.4L38.2 121.8L38.5 123.3L36.8 123.9L35.1 123.2L33.5 122.1L36.1 121.4ZM71.4 130.9L73.2 131.2L74.3 132.4L72 134.2L69.3 135.7L68 134.7L67.5 132.9L70 131.5L71.4 130.9ZM104 80.9L104 97.8L104 121.7L106.6 121.9L109.2 123L111.1 124.7L113.5 127.3L116.1 125.1L118.7 123.8L120.1 125.9L121.9 127.5L124.4 129.2L126 132L128.8 136.4L133.3 138.8L133.4 141.1L131.9 142.9L130.4 141.5L128.1 140.3L127.3 137L123.9 134L122.5 130.3L119.9 130.1L115.7 130L112.5 128.9L107 124.8L104.5 124L99.8 122.6L96.1 123L90.9 121.1L87.7 119.4L84.7 120.3L85.3 123L83.8 123.3L80.7 124.1L78.4 125.5L75.4 126.3L75 124L76.2 120.1L79.1 118.8L78.3 117.8L74.9 120L73.1 122.7L69.3 125.5L71.2 127.4L68.7 130.2L65.8 131.9L63.2 133L62.5 134.7L58.3 136.7L57.5 138.5L54.4 140.1L52.6 139.8L50.1 140.8L47.4 142.1L45.1 143.3L40.6 144.4L40.2 143.8L43.1 142L45.7 140.9L48.5 138.8L51.8 138.4L53.1 136.9L56.8 134.6L57.4 133.8L59.4 132.5L59.9 129.5L61.2 127.2L58.1 128.4L57.3 127.7L55.8 129.2L54.1 127.2L53.4 128.6L52.4 126.6L49.7 128.2L48.1 128.2L47.9 125.9L48.3 124.4L46.6 123L43.2 123.8L40.9 121.9L39.1 120.9L39.1 118.6L37 116.9L38 114.6L40.2 112.2L41.2 110.1L43.3 109.8L45.2 110.5L47.3 108.4L49.2 108.8L51.3 107.5L50.8 105.5L49.3 104.8L51.3 103.1L49.6 103.2L46.8 104.1L46 105.1L43.9 104.1L40.1 104.6L36.2 103.6L35.1 101.8L31.7 99.3L35.5 97.4L41.4 95.3L43.6 95.3L43.2 97.5L48.9 97.3L46.7 94.6L43.4 92.9L41.5 90.6L39 88.6L35.3 87.2L36.8 84.8L41.5 84.6L44.9 82.5L45.5 80.2L48.2 77.9L50.8 77.3L55.9 75.2L58.3 75.5L62.4 72.9L66.5 74L68.4 76.1L69.6 75.2L74.1 75.5L73.9 76.6L78 77.4L80.7 77L86.4 78.5L91.5 78.9L93.5 79.5L97.1 78.8L101.1 80.2L104 80.9ZM22.1 107.4L23.7 108.2L25.4 107.8L27.5 108.9L30.2 109.5L27.9 110.8L25.9 109.9L24.9 109.1L22.5 109.4L21.9 109L22.1 107.4Z", bbox: [21.9, 72.9, 301.4, 254.4] },
    { code: "UY", d: "M326.3 388.9L328.1 388.6L330.7 390.9L331.7 390.8L334.5 392.7L336.6 394.3L338.1 396.3L336.9 397.7L337.7 399.4L336.5 401.3L333.5 403L331.5 402.4L330.1 402.7L327.6 401.4L325.8 401.5L324.2 399.8L324.4 397.9L325 397.2L325 394.3L325.7 391.3L326.3 388.9Z", bbox: [324.2, 388.6, 338.1, 403] },
    { code: "UZ", d: "M629.2 189L629.1 177.1L636 175.1L640.6 177.8L642.8 179L645.4 181.9L648.5 181.5L653.1 181.2L656.3 183.6L656.1 186.8L657.4 186.8L657.9 189.4L661.3 189.5L662 191L663 191L664.2 188.8L667.7 186.5L669.2 185.9L670 186.3L667.8 188.3L669.8 189.5L671.7 188.7L674.8 190.4L671.4 192.7L669.4 192.4L668.3 192.4L667.9 191.6L668.4 190.1L664.9 190.8L664 192.9L662.8 194.6L660.5 194.5L659.8 195.8L661.8 196.6L662.4 198.9L660.9 202L658.9 201.4L657.4 201.3L657.5 199.5L653.9 198.1L651.1 196.6L649.4 195.1L646.3 193L645 189.7L644.1 189.1L641.2 189.3L640.2 188.6L639.9 186.1L636.3 184.4L634.1 186.2L631.8 187.3L632.3 189L629.2 189Z", bbox: [629.1, 175.1, 674.8, 202] },
    { code: "VE", d: "M318 291.9L318.4 292.7L317.4 293.7L314.4 294.7L312.5 295.1L311.8 295.8L309.6 295.1L307.7 294.8L308.4 295.7L308.2 297.5L308.6 299.2L310.9 299.4L309.1 300.7L308.8 301.8L307.7 302.3L305.7 302.9L305.2 303.7L303.1 303.9L301.7 302.5L300.8 299.8L300.1 298.9L299.2 298.3L300.5 297L300.4 296.4L299.7 295.6L299.1 293.8L299.4 291.9L299.9 291L300.4 289.6L299.5 289.1L298 289.4L296 289.3L295 289.5L293.1 287.2L291.5 286.9L288.1 287.2L287.5 286.2L286.8 286L287 284.4L286.8 283.4L286.2 282.8L285.9 281.5L284.5 281.4L285.3 279.8L285.6 277.9L286.4 276.9L287.4 276.1L288.1 274.7L289.8 274.3L289.7 274.9L288.1 275.2L289 276.5L289 277.9L287.8 279.4L288.8 281.6L290 281.4L290.6 279.4L289.7 278.5L289.6 276.5L292.9 275.4L292.6 274.1L293.5 273.2L294.4 275.1L296.3 275.2L298 276.7L298.2 277.6L300.5 277.6L303.4 277.3L304.9 278.5L307 278.9L308.5 278L308.5 277.3L311.8 277.2L315 277.1L312.7 277.9L313.6 279.2L315.8 279.4L317.8 280.7L318.2 282.9L319.6 282.8L320.6 283.5L318.5 285L318.3 286L319.2 287L318.6 287.5L316.9 287.9L317 289.2L316.2 289.9L318 291.9Z", bbox: [284.5, 273.2, 320.6, 303.9] },
    { code: "VN", d: "M758.2 277.8L760.5 276.7L763.3 276.5L762.2 274.8L766.6 272.8L767 269.5L766.4 267.7L766.8 265L766.2 263L764.1 261.1L762.5 258.7L760.3 255.5L757.1 253.8L757.8 252.8L759.5 252.1L758.5 249.7L755.2 249.7L754 247.1L752.5 244.9L753.9 244.2L756 244.2L758.6 243.9L760.9 242.4L762.2 243.5L764.6 244L764.2 245.6L765.4 246.7L768.1 247.5L764.6 249.8L762.4 252.5L761.8 254.4L763.8 257.3L766.3 260.9L768.7 262.6L770.3 264.8L771.6 269.8L771.2 274.6L769 276.4L765.9 278.1L763.7 280.3L760.4 282.8L759.5 281.1L760.2 279.3L758.2 277.8Z", bbox: [752.5, 242.4, 771.6, 282.8] },
    { code: "VU", d: "M925.9 348.6L927.6 350.1L926.7 350.5L925.8 349.3L925.9 348.6ZM924.8 347.9L924.4 347.2L924.3 345.1L925.6 345.9L926.1 348.1L925.3 347.8Z", bbox: [924.3, 345.1, 927.6, 350.5] },
    { code: "XK", d: "M534.9 187.3L534.7 186.1L534.1 185.8L533.5 184.9L534 184.2L534.7 183.9L535 182.9L535.9 183.2L536.7 183.9L537.7 184.6L537.8 185.4L537.5 186L535.4 186.6L535.2 187.3Z", bbox: [533.5, 182.9, 537.8, 187.3] },
    { code: "YE", d: "M618.7 254.6L620.8 259.1L621.6 261L619.7 261.8L619.2 263L619.1 263.9L616.5 265L612.2 266.3L609.8 268.2L608.6 268.4L607.8 268.2L606.3 269.4L604.6 269.9L602.3 270L601.7 270.2L601.1 270.9L600.4 271.1L600 271.8L598.7 271.7L597.8 272.1L596 271.9L595.3 270.4L595.3 268.9L594.9 268.1L594.4 266.1L593.6 264.9L593.9 263.6L594.1 261.8L595.2 261L595 259.8L595.7 258.5L596.8 259.2L597.5 258.9L600.6 258.9L603.6 259.4L604.7 259.3L605.3 260.2L606.6 259.7L608.5 256.9L611 255.6L618.7 254.6Z", bbox: [593.6, 254.6, 621.6, 272.1] },
    { code: "ZA", d: "M523.6 384.1L524.9 382.7L525.9 383.5L526.4 384.7L527.6 384.9L529.2 385.5L530.7 385.3L533.1 383.8L533.1 373.2L533.8 373.7L535.4 376.4L535.1 378.1L535.7 379.1L537.6 378.8L538.9 377.5L540.2 376.7L540.9 375.3L542.2 374.7L543.3 375L544.6 375.8L546.7 375.9L548.4 375.3L548.7 374.4L549.2 373L550.6 372.8L551.4 371.7L552.3 369.9L554.7 367.8L558.5 365.7L559.6 365.7L560.9 366.2L561.8 365.9L563.2 366.1L564.5 370.1L565.1 372.1L564.7 375.3L564.9 376.3L563.6 375.8L562.8 376L562.5 376.8L561.8 377.9L561.8 378.9L563.4 380.4L565 380.1L565.5 378.8L567.5 378.9L566.9 380.9L566.6 383.3L565.9 384.6L564.1 386.1L562.4 388L561.7 389.5L560.1 391.6L557.1 394.7L555.3 396.4L553.2 397.8L550.5 399L549.1 399.1L548.8 399.9L547.1 399.5L545.8 400.1L542.9 399.5L541.3 399.9L540.2 399.7L537.5 400.9L535.2 401.4L533.5 402.5L532.3 402.6L531.2 401.5L530.3 401.4L529.1 400.1L528.7 398L527.8 396L528.7 395.4L528.6 393.1L526.8 390.4L525.5 387.9L523.6 384.1ZM557.3 385.2L556.1 384.3L554.9 384.9L553.4 386.1L552 387.9L554 390.2L555 389.9L555.4 388.9L556.9 388.5L557.4 387.5L558.2 386.1L557.3 385.2Z", bbox: [523.6, 365.7, 567.5, 402.6] },
    { code: "ZM", d: "M562 328.1L563.1 328.8L564.1 329.2L565.8 329.7L567.4 330.5L568.6 331.7L569.3 334L568.8 334.7L568.3 336.9L568.8 339.2L568 340.1L567.2 342.6L568.6 343.3L560.5 345.6L560.7 347.5L558.7 347.9L557.2 349L556.9 349.9L555.9 350.1L553.6 352.4L552.1 354.2L551.2 354.2L550.4 353.9L547.4 353.6L545.8 352.6L544.1 352.4L541.9 353L540.2 351.3L538.4 349.1L538.5 340.4L544 340.4L543.8 339.5L544.2 338.5L543.7 337.2L544 335.9L543.8 335.1L544.7 335.1L544.8 336L546.1 335.9L547.8 336.2L548.7 337.4L550.8 337.8L552.4 336.9L553 338.3L555.1 338.7L556.1 339.9L557.2 341.4L559.2 341.4L559 338.5L558.2 339L556.4 337.9L555.7 337.4L556 334.7L556.5 331.5L555.9 330.3L556.6 328.6L557.3 328.3L560.9 327.8L562 328.1Z", bbox: [538.4, 327.8, 569.3, 354.2] },
    { code: "ZW", d: "M563.2 366.1L561.8 365.9L560.9 366.2L559.6 365.7L558.5 365.7L556.8 364.4L554.7 364L553.9 362.2L553.9 361.3L552.8 361L549.8 357.9L548.9 356.3L547.4 353.6L550.4 353.9L551.2 354.2L552.1 354.2L553.6 352.4L555.9 350.1L556.9 349.9L557.2 349L558.7 347.9L560.7 347.5L560.9 348.5L563.1 348.5L564.4 349L564.9 349.7L566.2 349.9L567.6 350.8L567.6 354.3L567.1 356.2L567 358.3L567.4 359.1L567.1 360.7L566 363L563.2 366.1Z", bbox: [547.4, 347.5, 567.6, 366.2] }
  ];

  // src/map-renderer.js
  var SVG_NS = "http://www.w3.org/2000/svg";
  var MapRenderer = class {
    /**
     * @param {object} [options]
     * @param {(code: string, evt: MouseEvent) => void} [options.onCountryClick]
     * @param {(code: string|null, evt: MouseEvent) => void} [options.onCountryHover]
     */
    constructor({ onCountryClick, onCountryHover } = {}) {
      this.width = MAP_WIDTH;
      this.height = MAP_HEIGHT;
      this.onCountryClick = onCountryClick || null;
      this.onCountryHover = onCountryHover || null;
      this.svg = null;
      this.viewport = null;
      this.paths = /* @__PURE__ */ new Map();
      this.k = 1;
      this.tx = 0;
      this.ty = 0;
      this._anim = null;
      this._drag = null;
      this._suppressClick = false;
      this._listeners = [];
    }
    /** Build the SVG and attach it to `container`. */
    mount(container) {
      this.svg = document.createElementNS(SVG_NS, "svg");
      this.svg.setAttribute("class", "wm-map");
      this.svg.setAttribute("viewBox", `0 0 ${this.width} ${this.height}`);
      this.svg.setAttribute("role", "img");
      this.svg.setAttribute("aria-label", "World map");
      this.svg.style.touchAction = "none";
      this.viewport = document.createElementNS(SVG_NS, "g");
      this.viewport.setAttribute("class", "wm-viewport");
      const frag = document.createDocumentFragment();
      for (const { code, d } of WORLD_PATHS) {
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("class", "wm-country");
        path.setAttribute("d", d);
        path.setAttribute("data-code", code);
        path.setAttribute("fill-rule", "evenodd");
        frag.appendChild(path);
        this.paths.set(code, path);
      }
      this.viewport.appendChild(frag);
      this.svg.appendChild(this.viewport);
      container.appendChild(this.svg);
      this._bindEvents();
      this._applyTransform();
      return this;
    }
    _listen(target, type, fn, opts) {
      target.addEventListener(type, fn, opts);
      this._listeners.push(() => target.removeEventListener(type, fn, opts));
    }
    _bindEvents() {
      this._listen(this.svg, "mousemove", (evt) => {
        const code = this._codeAt(evt);
        if (this.onCountryHover) this.onCountryHover(code, evt);
      });
      this._listen(this.svg, "mouseleave", () => {
        if (this.onCountryHover) this.onCountryHover(null, new MouseEvent("mouseleave"));
      });
      this._listen(this.svg, "click", (evt) => {
        if (this._suppressClick) return;
        const code = this._codeAt(evt);
        if (this.onCountryClick) this.onCountryClick(code, evt);
      });
      this._listen(
        this.svg,
        "wheel",
        (evt) => {
          evt.preventDefault();
          const rect = this.svg.getBoundingClientRect();
          const sx = (evt.clientX - rect.left) / rect.width * this.width;
          const sy = (evt.clientY - rect.top) / rect.height * this.height;
          const unit = evt.deltaMode === 1 ? 16 : evt.deltaMode === 2 ? 100 : 1;
          const factor = Math.exp(-evt.deltaY * unit * 15e-4);
          this._zoomAt(sx, sy, this.k * factor);
        },
        { passive: false }
      );
      this._listen(this.svg, "pointerdown", (evt) => {
        if (evt.button !== void 0 && evt.button !== 0) return;
        this._cancelAnim();
        this._drag = { id: evt.pointerId, x: evt.clientX, y: evt.clientY, moved: false };
        this.svg.setPointerCapture(evt.pointerId);
        this.svg.classList.add("wm-grabbing");
      });
      this._listen(this.svg, "pointermove", (evt) => {
        const d = this._drag;
        if (!d || d.id !== evt.pointerId) return;
        const rect = this.svg.getBoundingClientRect();
        const dx = (evt.clientX - d.x) / rect.width * this.width;
        const dy = (evt.clientY - d.y) / rect.height * this.height;
        if (Math.abs(evt.clientX - d.x) + Math.abs(evt.clientY - d.y) > 3) d.moved = true;
        d.x = evt.clientX;
        d.y = evt.clientY;
        this.tx += dx;
        this.ty += dy;
        this._clampPan();
        this._applyTransform();
      });
      const endDrag = (evt) => {
        const d = this._drag;
        if (!d || d.id !== evt.pointerId) return;
        this._suppressClick = d.moved;
        this._drag = null;
        this.svg.classList.remove("wm-grabbing");
        try {
          this.svg.releasePointerCapture(evt.pointerId);
        } catch {
        }
        setTimeout(() => {
          this._suppressClick = false;
        }, 0);
      };
      this._listen(this.svg, "pointerup", endDrag);
      this._listen(this.svg, "pointercancel", endDrag);
    }
    _codeAt(evt) {
      const el = evt.target && evt.target.closest ? evt.target.closest("path[data-code]") : null;
      return el ? el.getAttribute("data-code") : null;
    }
    // --- Transform ---------------------------------------------------------
    _applyTransform() {
      this.viewport.setAttribute("transform", `translate(${this.tx} ${this.ty}) scale(${this.k})`);
    }
    _clampPan() {
      const maxX = 0;
      const minX = this.width - this.width * this.k;
      const maxY = 0;
      const minY = this.height - this.height * this.k;
      this.tx = Math.min(maxX, Math.max(minX, this.tx));
      this.ty = Math.min(maxY, Math.max(minY, this.ty));
    }
    _zoomAt(sx, sy, k) {
      const next = Math.min(30, Math.max(1, k));
      const ratio = next / this.k;
      this.tx = sx - (sx - this.tx) * ratio;
      this.ty = sy - (sy - this.ty) * ratio;
      this.k = next;
      this._clampPan();
      this._applyTransform();
    }
    _cancelAnim() {
      if (this._anim) cancelAnimationFrame(this._anim);
      this._anim = null;
    }
    _animateTo(k, tx, ty, duration = 350) {
      this._cancelAnim();
      const k0 = this.k, x0 = this.tx, y0 = this.ty;
      const t0 = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        const e = ease(t);
        this.k = k0 + (k - k0) * e;
        this.tx = x0 + (tx - x0) * e;
        this.ty = y0 + (ty - y0) * e;
        this._applyTransform();
        if (t < 1) this._anim = requestAnimationFrame(step);
        else this._anim = null;
      };
      this._anim = requestAnimationFrame(step);
    }
    /** Animate the viewport to show a country's bounding box. */
    focusCode(code, { maxZoom = 12 } = {}) {
      const bbox = this.bboxOf(code);
      if (!bbox) return;
      const [x0, y0, x1, y1] = bbox;
      const pad = Math.max(8, Math.max(x1 - x0, y1 - y0) * 0.3);
      const w = x1 - x0 + pad * 2;
      const h = y1 - y0 + pad * 2;
      const k = Math.min(maxZoom, Math.min(this.width / w, this.height / h));
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2;
      this._animateTo(k, this.width / 2 - cx * k, this.height / 2 - cy * k);
    }
    /** Reset to the full-world view. */
    fitAll({ animate = true } = {}) {
      if (animate) this._animateTo(1, 0, 0);
      else {
        this.k = 1;
        this.tx = 0;
        this.ty = 0;
        this._applyTransform();
      }
    }
    /** Geographic bounding box [x0,y0,x1,y1] of a country in map units, or null. */
    bboxOf(code) {
      const entry = WORLD_PATHS.find((p) => p.code === code);
      return entry ? entry.bbox : null;
    }
    // --- Styling -----------------------------------------------------------
    /** Set fills: colorFn(alpha2) -> css color, or null/undefined for the "no data" style. */
    setColors(colorFn) {
      for (const [code, path] of this.paths) {
        const color = colorFn(code);
        if (color) {
          path.style.fill = color;
          path.classList.remove("wm-nodata");
        } else {
          path.style.fill = "";
          path.classList.add("wm-nodata");
        }
      }
    }
    /** Mark the selected country (or none). */
    setSelected(code) {
      for (const [c, path] of this.paths) {
        path.classList.toggle("wm-selected", code != null && c === code);
      }
    }
    /**
     * Dim every country not in `codes` (null/undefined clears the filter).
     * @param {Set<string>|string[]|null} codes
     */
    setDimmed(codes) {
      const set = codes == null ? null : codes instanceof Set ? codes : new Set(codes);
      for (const [c, path] of this.paths) {
        path.classList.toggle("wm-dimmed", !!set && !set.has(c));
      }
    }
    destroy() {
      this._cancelAnim();
      for (const un of this._listeners) un();
      this._listeners = [];
      if (this.svg && this.svg.parentNode) this.svg.parentNode.removeChild(this.svg);
      this.svg = null;
      this.viewport = null;
      this.paths.clear();
    }
  };

  // src/panel.js
  var CountryPanel = class {
    /**
     * @param {object} options
     * @param {import("./country-store.js").CountryStore} options.store
     * @param {(code: string|null) => void} [options.onClose]
     */
    constructor({ store, onClose } = {}) {
      this.store = store;
      this.onClose = onClose || null;
      this.el = null;
      this.code = null;
      this._unsub = null;
    }
    mount(container) {
      this.el = document.createElement("aside");
      this.el.className = "wm-panel";
      container.appendChild(this.el);
      this._unsub = this.store.subscribe(() => this._syncFromStore());
      this.showEmpty();
      return this;
    }
    /** Show the "nothing selected" state. */
    showEmpty() {
      this.code = null;
      if (!this.el) return;
      this.el.innerHTML = `<div class="wm-panel-empty">Click a country on the map, or search for one, to view and edit its data.</div>`;
    }
    /** Show a country; `record` may be undefined (no record yet). */
    open(code) {
      this.code = code;
      this._render();
    }
    close() {
      this.showEmpty();
      if (this.onClose) this.onClose(null);
    }
    /** Re-render after an external store change, without clobbering active edits. */
    _syncFromStore() {
      if (!this.code) return;
      const current = this.store.get(this.code);
      const currentJson = current === void 0 ? null : JSON.stringify(current);
      if (currentJson === this._renderedValue) return;
      const textarea = this.el?.querySelector(".wm-json");
      if (textarea && document.activeElement === textarea && this._isDirty()) return;
      this._render();
    }
    _isDirty() {
      const textarea = this.el?.querySelector(".wm-json");
      if (!textarea) return false;
      const current = this.store.get(this.code);
      if (current === void 0) return textarea.value.trim() !== "";
      try {
        return JSON.stringify(JSON.parse(textarea.value)) !== JSON.stringify(current);
      } catch {
        return true;
      }
    }
    _render() {
      const code = this.code;
      const meta = COUNTRIES[code] || { name: code, alpha2: code };
      const record = this.store.get(code);
      const hasRecord = record !== void 0;
      this._renderedValue = hasRecord ? JSON.stringify(record) : null;
      const tags = [
        meta.alpha2 && `<span class="wm-tag">${meta.alpha2}</span>`,
        meta.alpha3 && `<span class="wm-tag">${meta.alpha3}</span>`,
        meta.region && `<span class="wm-tag">${escapeHtml(meta.region)}</span>`
      ].filter(Boolean).join("");
      this.el.innerHTML = `
      <div class="wm-panel-header">
        <div class="wm-panel-name">${escapeHtml(meta.name)}</div>
        <div class="wm-panel-meta">${tags}</div>
      </div>
      <div class="wm-panel-body">
        <div class="wm-field-label">Record (JSON)</div>
        <textarea class="wm-json" spellcheck="false"></textarea>
        <div class="wm-status"></div>
        <div class="wm-hint">Anything JSON-serializable works \u2014 an object, array, number or string.</div>
      </div>
      <div class="wm-panel-actions">
        <button class="wm-btn wm-primary" data-action="save">Save</button>
        <button class="wm-btn" data-action="revert">Revert</button>
        <span class="wm-spacer"></span>
        <button class="wm-btn wm-danger" data-action="delete" ${hasRecord ? "" : "disabled"}>Delete</button>
      </div>`;
      const textarea = this.el.querySelector(".wm-json");
      textarea.value = hasRecord ? JSON.stringify(record, null, 2) : "{\n  \n}";
      textarea.placeholder = '{\n  "value": 42\n}';
      const status = this.el.querySelector(".wm-status");
      const saveBtn = this.el.querySelector('[data-action="save"]');
      const deleteBtn = this.el.querySelector('[data-action="delete"]');
      const validate = () => {
        const ok = this._validate(textarea, status);
        saveBtn.disabled = !ok;
        return ok;
      };
      textarea.addEventListener("input", validate);
      validate();
      saveBtn.addEventListener("click", () => {
        if (!validate()) return;
        try {
          const parsed = JSON.parse(textarea.value);
          this._renderedValue = JSON.stringify(parsed);
          this.store.set(code, parsed);
          this._flash(status, "Saved", "wm-ok");
        } catch (err) {
          this._flash(status, `Invalid JSON: ${err.message}`, "wm-error");
        }
      });
      this.el.querySelector('[data-action="revert"]').addEventListener("click", () => {
        const current = this.store.get(code);
        textarea.value = current === void 0 ? "{\n  \n}" : JSON.stringify(current, null, 2);
        validate();
        this._flash(status, "Reverted", "");
      });
      deleteBtn.addEventListener("click", () => {
        if (this.store.delete(code)) {
          this._render();
          this._flash(this.el.querySelector(".wm-status"), "Record deleted", "");
        }
      });
    }
    _validate(textarea, status) {
      const value = textarea.value.trim();
      if (value === "") {
        textarea.classList.remove("wm-invalid");
        status.textContent = "Empty \u2014 saving will be disabled.";
        status.className = "wm-status wm-error";
        return false;
      }
      try {
        JSON.parse(value);
        textarea.classList.remove("wm-invalid");
        status.textContent = "";
        status.className = "wm-status";
        return true;
      } catch (err) {
        textarea.classList.add("wm-invalid");
        status.textContent = err.message;
        status.className = "wm-status wm-error";
        return false;
      }
    }
    _flash(status, message, cls) {
      if (!status) return;
      status.textContent = message;
      status.className = `wm-status ${cls || ""}`.trim();
      clearTimeout(this._flashTimer);
      this._flashTimer = setTimeout(() => {
        if (status.isConnected && !status.classList.contains("wm-error")) {
          status.textContent = "";
          status.className = "wm-status";
        }
      }, 1600);
    }
    destroy() {
      clearTimeout(this._flashTimer);
      if (this._unsub) this._unsub();
      this._unsub = null;
      if (this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
      this.el = null;
    }
  };
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);
  }

  // src/scales.js
  var SEQUENTIAL_BLUES = ["#f7fbff", "#c6dbef", "#6baed6", "#2171b5", "#08306b"];
  var SEQUENTIAL_GREENS = ["#f7fcf5", "#c7e9c0", "#74c476", "#238b45", "#005a32"];
  var SEQUENTIAL_WARMS = ["#fff5eb", "#fdd0a2", "#fd8d3c", "#d94801", "#8c2d04"];
  var CATEGORICAL = [
    "#4e79a7",
    "#f28e2b",
    "#59a14f",
    "#e15759",
    "#b07aa1",
    "#76b7b2",
    "#edc949",
    "#ff9da7",
    "#9c755f",
    "#bab0ac"
  ];
  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function interpolatePalette(stops, t) {
    const t2 = Math.max(0, Math.min(1, t));
    const n = stops.length - 1;
    const seg = Math.min(Math.floor(t2 * n), n - 1);
    const local = t2 * n - seg;
    const a = hexToRgb(stops[seg]);
    const b = hexToRgb(stops[seg + 1]);
    const c = a.map((v, i) => Math.round(lerp(v, b[i], local)));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }
  function formatNumber(v) {
    if (v == null || Number.isNaN(v)) return String(v);
    if (typeof v !== "number") return String(v);
    const abs = Math.abs(v);
    if (abs >= 1e9) return (v / 1e9).toFixed(abs >= 1e10 ? 0 : 1).replace(/\.0$/, "") + "B";
    if (abs >= 1e6) return (v / 1e6).toFixed(abs >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "M";
    if (abs >= 1e3) return (v / 1e3).toFixed(abs >= 1e4 ? 0 : 1).replace(/\.0$/, "") + "k";
    if (Number.isInteger(v)) return String(v);
    return v.toFixed(2).replace(/\.?0+$/, "");
  }
  function createColorScale({ values, mode, colors = SEQUENTIAL_BLUES, noData = null } = {}) {
    const present = values.filter((v) => v != null);
    const allNumbers = present.length > 0 && present.every((v) => typeof v === "number" && !Number.isNaN(v));
    const resolved = mode || (allNumbers ? "quantile" : "categorical");
    if (resolved === "categorical") {
      const uniques = [...new Set(present.map(String))].sort();
      const map = new Map(uniques.map((u, i) => [u, CATEGORICAL[i % CATEGORICAL.length]]));
      return {
        color: (v) => v == null ? noData : map.get(String(v)) || noData,
        legend: { type: "categorical", items: uniques.map((u) => ({ label: u, color: map.get(u) })) }
      };
    }
    const nums = present.filter((v) => typeof v === "number" && !Number.isNaN(v)).sort((a, b) => a - b);
    if (!nums.length) return { color: () => noData, legend: { type: "empty" } };
    const min = nums[0];
    const max = nums[nums.length - 1];
    if (resolved === "linear" || min === max) {
      const span = max - min || 1;
      return {
        color: (v) => typeof v === "number" && !Number.isNaN(v) ? interpolatePalette(colors, (v - min) / span) : noData,
        legend: { type: "gradient", stops: colors, min, max }
      };
    }
    const nBuckets = colors.length;
    const thresholds = [];
    for (let i = 1; i < nBuckets; i++) {
      thresholds.push(nums[Math.floor(i / nBuckets * nums.length)]);
    }
    const bucketOf = (v) => {
      let i = 0;
      while (i < thresholds.length && v >= thresholds[i]) i++;
      return i;
    };
    const edges = [min, ...thresholds, max];
    return {
      color: (v) => typeof v === "number" && !Number.isNaN(v) ? colors[Math.min(bucketOf(v), colors.length - 1)] : noData,
      legend: {
        type: "buckets",
        items: colors.map((color, i) => ({ color, from: edges[i], to: edges[i + 1] }))
      }
    };
  }

  // src/styles.js
  var CSS = `
.wm-root {
  --wm-bg: #ffffff;
  --wm-fg: #1b1f24;
  --wm-muted: #6b7280;
  --wm-border: #e3e6ea;
  --wm-toolbar-bg: #fafbfc;
  --wm-panel-bg: #ffffff;
  --wm-input-bg: #ffffff;
  --wm-hover-bg: #eef2f6;
  --wm-accent: #2f6fd0;
  --wm-danger: #d1443f;
  --wm-map-bg: #f2f6fa;
  --wm-country: #e2e6eb;
  --wm-nodata-fill: #e2e6eb;
  --wm-country-stroke: #ffffff;
  --wm-selected-stroke: #16181c;
  --wm-tag-bg: #eef1f5;
  --wm-radius: 10px;
  --wm-shadow: 0 6px 24px rgba(15, 23, 42, .14);

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 420px;
  background: var(--wm-bg);
  color: var(--wm-fg);
  border: 1px solid var(--wm-border);
  border-radius: var(--wm-radius);
  overflow: hidden;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.4;
}
.wm-root * { box-sizing: border-box; }

/* Dark preset \u2014 add class "wm-dark" to the container or use { theme: "dark" } */
.wm-root.wm-dark {
  --wm-bg: #14171c;
  --wm-fg: #e8eaed;
  --wm-muted: #9aa3ad;
  --wm-border: #2a2f37;
  --wm-toolbar-bg: #191d23;
  --wm-panel-bg: #171b21;
  --wm-input-bg: #10131a;
  --wm-hover-bg: #232a33;
  --wm-accent: #4f8fe6;
  --wm-map-bg: #0f141b;
  --wm-country: #2b323b;
  --wm-nodata-fill: #2b323b;
  --wm-country-stroke: #0f141b;
  --wm-selected-stroke: #ffffff;
  --wm-tag-bg: #232a33;
}

/* --- Toolbar ---------------------------------------------------------- */
.wm-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--wm-toolbar-bg);
  border-bottom: 1px solid var(--wm-border);
  flex-wrap: wrap;
}
.wm-title { font-weight: 600; font-size: 15px; margin-right: 2px; }
.wm-spacer { flex: 1 1 auto; }
.wm-count { font-size: 12px; color: var(--wm-muted); white-space: nowrap; }

.wm-search { position: relative; flex: 0 1 230px; min-width: 150px; }
.wm-input, .wm-select {
  width: 100%;
  padding: 6px 9px;
  font: inherit;
  font-size: 13px;
  color: inherit;
  background: var(--wm-input-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  outline: none;
}
.wm-input:focus, .wm-select:focus { border-color: var(--wm-accent); }
.wm-select { width: auto; cursor: pointer; }

.wm-search-results {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 30;
  display: none;
  max-height: 240px;
  overflow: auto;
  background: var(--wm-panel-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  box-shadow: var(--wm-shadow);
}
.wm-search-results.wm-open { display: block; }
.wm-search-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
}
.wm-search-item:hover, .wm-search-item.wm-active { background: var(--wm-hover-bg); }
.wm-search-item .wm-code { color: var(--wm-muted); font-size: 11px; font-variant-numeric: tabular-nums; }

.wm-btn {
  padding: 6px 11px;
  font: inherit;
  font-size: 13px;
  color: inherit;
  background: var(--wm-input-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
}
.wm-btn:hover { background: var(--wm-hover-bg); }
.wm-btn:disabled { opacity: .5; cursor: default; }
.wm-btn.wm-primary { background: var(--wm-accent); border-color: transparent; color: #fff; }
.wm-btn.wm-primary:hover { filter: brightness(1.08); }
.wm-btn.wm-danger { color: var(--wm-danger); }

/* --- Body / map ------------------------------------------------------- */
.wm-body { display: flex; flex: 1 1 auto; min-height: 0; }
.wm-map-wrap { position: relative; flex: 1 1 auto; min-width: 0; background: var(--wm-map-bg); overflow: hidden; }
.wm-map { display: block; width: 100%; height: 100%; cursor: grab; }
.wm-map.wm-grabbing { cursor: grabbing; }

.wm-country {
  fill: var(--wm-country);
  stroke: var(--wm-country-stroke);
  stroke-width: .6;
  vector-effect: non-scaling-stroke;
  cursor: pointer;
  transition: fill .25s ease;
}
.wm-country.wm-nodata { fill: var(--wm-nodata-fill); }
.wm-country:hover { filter: brightness(.9); }
.wm-root.wm-dark .wm-country:hover { filter: brightness(1.35); }
.wm-country.wm-selected {
  stroke: var(--wm-selected-stroke);
  stroke-width: 1.6;
}
.wm-country.wm-dimmed { opacity: .18; }

.wm-tooltip {
  position: absolute;
  z-index: 20;
  padding: 6px 9px;
  max-width: 260px;
  background: rgba(18, 20, 24, .93);
  color: #fff;
  font-size: 12px;
  line-height: 1.35;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, calc(-100% - 14px));
  transition: opacity .12s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wm-tooltip.wm-visible { opacity: 1; }
.wm-tooltip b { font-weight: 600; }
.wm-tooltip .wm-tooltip-value { color: #9fd0ff; }

/* --- Panel ------------------------------------------------------------ */
.wm-panel {
  display: flex;
  flex-direction: column;
  width: 320px;
  flex: 0 0 320px;
  border-left: 1px solid var(--wm-border);
  background: var(--wm-panel-bg);
  min-height: 0;
}
.wm-panel-empty { padding: 24px 18px; color: var(--wm-muted); font-size: 13px; text-align: center; }
.wm-panel-header { padding: 12px 14px; border-bottom: 1px solid var(--wm-border); }
.wm-panel-name { font-size: 16px; font-weight: 600; }
.wm-panel-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
.wm-tag {
  padding: 1px 7px;
  font-size: 11px;
  color: var(--wm-muted);
  background: var(--wm-tag-bg);
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}
.wm-panel-body { flex: 1 1 auto; display: flex; flex-direction: column; gap: 8px; padding: 12px 14px; overflow: auto; min-height: 0; }
.wm-field-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--wm-muted);
}
.wm-json {
  flex: 1 1 auto;
  min-height: 170px;
  padding: 8px 10px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  tab-size: 2;
  color: inherit;
  background: var(--wm-input-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  resize: vertical;
  outline: none;
}
.wm-json:focus { border-color: var(--wm-accent); }
.wm-json.wm-invalid { border-color: var(--wm-danger); }
.wm-hint { font-size: 12px; color: var(--wm-muted); }
.wm-status { font-size: 12px; min-height: 16px; color: var(--wm-muted); }
.wm-status.wm-error { color: var(--wm-danger); }
.wm-status.wm-ok { color: #2e8b57; }
.wm-panel-actions { display: flex; gap: 8px; padding: 0 14px 14px; }

/* --- Legend ----------------------------------------------------------- */
.wm-legend {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  min-height: 36px;
  padding: 8px 12px;
  font-size: 11px;
  color: var(--wm-muted);
  border-top: 1px solid var(--wm-border);
}
.wm-legend-title { font-weight: 600; color: var(--wm-fg); }
.wm-legend-gradient { display: flex; align-items: center; gap: 6px; }
.wm-legend-bar { width: 130px; height: 10px; border-radius: 3px; }
.wm-legend-item { display: inline-flex; align-items: center; gap: 5px; }
.wm-legend-swatch { width: 11px; height: 11px; border-radius: 3px; flex: 0 0 auto; }
.wm-legend-hidden { display: none; }

@media (max-width: 720px) {
  .wm-body { flex-direction: column; }
  .wm-panel { width: auto; flex: 0 0 auto; max-height: 46%; border-left: none; border-top: 1px solid var(--wm-border); }
  .wm-search { flex: 1 1 140px; }
}
`;
  function injectStyles(doc = document) {
    const existing = doc.getElementById("worldmap-module-css");
    if (existing) return existing;
    const style = doc.createElement("style");
    style.id = "worldmap-module-css";
    style.textContent = CSS;
    doc.head.appendChild(style);
    return style;
  }

  // src/worldmap-module.js
  var PALETTES = {
    blues: SEQUENTIAL_BLUES,
    greens: SEQUENTIAL_GREENS,
    warm: SEQUENTIAL_WARMS,
    categorical: CATEGORICAL
  };
  var MAP_CODES = new Set(WORLD_PATHS.map((p) => p.code));
  function normalizeColorBy(colorBy) {
    if (typeof colorBy === "function") return colorBy;
    if (typeof colorBy === "string" && colorBy) {
      return (record) => record && typeof record === "object" && !Array.isArray(record) ? record[colorBy] : void 0;
    }
    return () => null;
  }
  var WorldMapModule = class {
    /**
     * @param {object} options
     * @param {string|HTMLElement} options.el  Container (selector or element).
     * @param {CountryStore} [options.store]   Data store (default: in-memory).
     * @param {string|Function} [options.colorBy]  Property name or `(record, code) => value`.
     * @param {string|string[]} [options.colors]   Palette name or array of hex colors.
     * @param {"auto"|"quantile"|"linear"|"categorical"} [options.scaleMode]
     * @param {string} [options.title]         Toolbar title (default "World Data").
     * @param {string} [options.valueLabel]    Legend label for the colorBy value.
     * @param {boolean} [options.legend]       Show the legend (default true).
     * @param {boolean} [options.panel]        Show the record editor panel (default true).
     * @param {boolean} [options.search]       Show the country search box (default true).
     * @param {boolean} [options.regionFilter] Show the region filter (default true).
     * @param {boolean} [options.importExport] Show Import/Export buttons (default true).
     * @param {"light"|"dark"|null} [options.theme]
     * @param {(code: string|null) => void} [options.onSelect]
     */
    constructor(options = {}) {
      const {
        el,
        store = null,
        colorBy = null,
        colors = "blues",
        scaleMode = "auto",
        title = "World Data",
        valueLabel = "",
        legend = true,
        panel = true,
        search = true,
        regionFilter = true,
        importExport = true,
        theme = null,
        onSelect = null
      } = options;
      this.root = resolveElement(el);
      if (!this.root) throw new Error("WorldMapModule: `el` did not resolve to an element.");
      this.options = { title, valueLabel, legend, panel, search, regionFilter, importExport, theme, scaleMode };
      this.store = store || new CountryStore({ storage: memoryAdapter() });
      this.colorBy = normalizeColorBy(colorBy);
      this.palette = Array.isArray(colors) ? colors : PALETTES[colors] || SEQUENTIAL_BLUES;
      this.scaleMode = scaleMode;
      this.onSelect = onSelect;
      this.selected = null;
      this.region = null;
      this._scale = null;
      this._values = /* @__PURE__ */ new Map();
      this._unsub = null;
      this._build();
      this._unsub = this.store.subscribe(() => this._onStoreChange());
      this.refresh();
    }
    // --- DOM ---------------------------------------------------------------
    _build() {
      injectStyles(this.root.ownerDocument || document);
      this.root.classList.add("wm-root");
      if (this.options.theme === "dark") this.root.classList.add("wm-dark");
      else if (this.options.theme === "light") this.root.classList.remove("wm-dark");
      this.root.innerHTML = "";
      const o = this.options;
      const toolbar = document.createElement("div");
      toolbar.className = "wm-toolbar";
      toolbar.innerHTML = `
      <span class="wm-title"></span>
      <div class="wm-search">
        <input class="wm-input" type="search" placeholder="Search country\u2026" aria-label="Search country" />
        <div class="wm-search-results"></div>
      </div>
      <select class="wm-select wm-region" aria-label="Filter by region"></select>
      <span class="wm-spacer"></span>
      <span class="wm-count"></span>
      <button class="wm-btn" data-action="export">Export</button>
      <button class="wm-btn" data-action="import">Import</button>
      <input class="wm-file" type="file" accept="application/json,.json" hidden />
    `;
      this.root.appendChild(toolbar);
      const body = document.createElement("div");
      body.className = "wm-body";
      this.root.appendChild(body);
      this.legendEl = document.createElement("div");
      this.legendEl.className = "wm-legend";
      this.root.appendChild(this.legendEl);
      this.titleEl = toolbar.querySelector(".wm-title");
      this.countEl = toolbar.querySelector(".wm-count");
      this.searchBox = toolbar.querySelector(".wm-search");
      this.searchInput = toolbar.querySelector(".wm-input");
      this.searchResults = toolbar.querySelector(".wm-search-results");
      this.regionSelect = toolbar.querySelector(".wm-region");
      this.fileInput = toolbar.querySelector(".wm-file");
      this.titleEl.textContent = o.title || "";
      this.titleEl.style.display = o.title ? "" : "none";
      if (!o.search) this.searchBox.style.display = "none";
      if (!o.regionFilter) this.regionSelect.style.display = "none";
      if (!o.importExport) {
        toolbar.querySelector('[data-action="export"]').style.display = "none";
        toolbar.querySelector('[data-action="import"]').style.display = "none";
      }
      if (!o.legend) this.legendEl.style.display = "none";
      this.regionSelect.innerHTML = `<option value="">All regions</option>` + REGIONS.map((r) => `<option value="${r}">${r}</option>`).join("");
      this.mapWrap = document.createElement("div");
      this.mapWrap.className = "wm-map-wrap";
      this.tooltip = document.createElement("div");
      this.tooltip.className = "wm-tooltip";
      this.mapWrap.appendChild(this.tooltip);
      body.appendChild(this.mapWrap);
      this.renderer = new MapRenderer({
        onCountryClick: (code) => code ? this.select(code) : this.clearSelection(),
        onCountryHover: (code, evt) => this._onHover(code, evt)
      });
      this.renderer.mount(this.mapWrap);
      this.panel = null;
      if (o.panel) {
        this.panel = new CountryPanel({
          store: this.store,
          onClose: () => this.clearSelection()
        });
        this.panel.mount(body);
      }
      this._wireToolbar();
    }
    _wireToolbar() {
      const o = this.options;
      if (o.search) {
        this.searchInput.addEventListener("input", () => this._renderSearchResults());
        this.searchInput.addEventListener("focus", () => this._renderSearchResults());
        this.searchInput.addEventListener("keydown", (evt) => {
          const items = [...this.searchResults.querySelectorAll(".wm-search-item")];
          const idx = items.findIndex((el) => el.classList.contains("wm-active"));
          if (evt.key === "ArrowDown") {
            evt.preventDefault();
            this._activate(items, Math.min(items.length - 1, idx + 1));
          } else if (evt.key === "ArrowUp") {
            evt.preventDefault();
            this._activate(items, Math.max(0, idx - 1));
          } else if (evt.key === "Enter") {
            const target = items[idx >= 0 ? idx : 0];
            if (target) target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          } else if (evt.key === "Escape") {
            this._closeSearch();
            this.searchInput.blur();
          }
        });
        this.searchInput.addEventListener("blur", () => setTimeout(() => this._closeSearch(), 150));
      }
      if (o.regionFilter) {
        this.regionSelect.addEventListener("change", () => {
          this.region = this.regionSelect.value || null;
          this._applyRegionDim();
          this._renderSearchResults();
        });
      }
      if (o.importExport) {
        this.root.querySelector('[data-action="export"]').addEventListener("click", () => this.exportToFile());
        this.root.querySelector('[data-action="import"]').addEventListener("click", () => this.fileInput.click());
        this.fileInput.addEventListener("change", async () => {
          const file = this.fileInput.files && this.fileInput.files[0];
          this.fileInput.value = "";
          if (!file) return;
          try {
            const json = JSON.parse(await file.text());
            this.importJSON(json);
          } catch (err) {
            console.error("[worldmap-module] Import failed:", err);
            alert(`Could not import \u201C${file.name}\u201D: ${err.message}`);
          }
        });
      }
    }
    _activate(items, index) {
      items.forEach((el, i) => el.classList.toggle("wm-active", i === index));
      if (items[index]) items[index].scrollIntoView({ block: "nearest" });
    }
    _renderSearchResults() {
      const text = this.searchInput.value.trim();
      const matches = listCountries({ text, region: this.region }).filter((c) => MAP_CODES.has(c.alpha2)).slice(0, 12);
      this.searchResults.innerHTML = matches.map(
        (c) => `<div class="wm-search-item" data-code="${c.alpha2}"><span>${escapeHtml2(c.name)}</span><span class="wm-code">${c.alpha2}</span></div>`
      ).join("");
      for (const item of this.searchResults.querySelectorAll(".wm-search-item")) {
        item.addEventListener("mousedown", (evt) => evt.preventDefault());
        item.addEventListener("click", () => {
          this.select(item.dataset.code, { focus: true });
          this.searchInput.value = "";
          this._closeSearch();
        });
      }
      const open = matches.length > 0 && (document.activeElement === this.searchInput || text !== "");
      this.searchResults.classList.toggle("wm-open", open);
    }
    _closeSearch() {
      this.searchResults.classList.remove("wm-open");
    }
    // --- Hover / tooltip ---------------------------------------------------
    _onHover(code, evt) {
      if (!code || !this.renderer || !this.renderer.svg) {
        this._hideTooltip();
        return;
      }
      const meta = COUNTRIES[code];
      const record = this.store.get(code);
      const value = this.colorBy(record, code);
      let html = `<b>${escapeHtml2(meta ? meta.name : code)}</b> <span class="wm-code">${code}</span>`;
      if (value != null && typeof value !== "object") {
        html += `<div class="wm-tooltip-value">${escapeHtml2(formatValue(value))}</div>`;
      } else if (record !== void 0) {
        html += `<div class="wm-tooltip-value">${escapeHtml2(previewValue(record))}</div>`;
      }
      this.tooltip.innerHTML = html;
      const rect = this.mapWrap.getBoundingClientRect();
      const x = evt.clientX - rect.left;
      const y = evt.clientY - rect.top;
      this.tooltip.style.left = `${Math.round(x)}px`;
      this.tooltip.style.top = `${Math.round(y)}px`;
      this.tooltip.classList.add("wm-visible");
    }
    _hideTooltip() {
      if (this.tooltip) this.tooltip.classList.remove("wm-visible");
    }
    // --- State -------------------------------------------------------------
    _onStoreChange() {
      this.refresh();
      if (!this.selected) this.panel && this.panel.showEmpty();
    }
    _applyRegionDim() {
      if (!this.region) {
        this.renderer.setDimmed(null);
        return;
      }
      const codes = Object.values(COUNTRIES).filter((c) => c.region === this.region && MAP_CODES.has(c.alpha2)).map((c) => c.alpha2);
      this.renderer.setDimmed(codes);
    }
    /** Recompute colors, legend and counters from the store. */
    refresh() {
      const values = [];
      this._values = /* @__PURE__ */ new Map();
      for (const code of MAP_CODES) {
        const record = this.store.get(code);
        const value = record === void 0 ? null : this.colorBy(record, code);
        this._values.set(code, value);
        if (value != null) values.push(value);
      }
      this._scale = createColorScale({
        values,
        mode: this.scaleMode === "auto" ? void 0 : this.scaleMode,
        colors: this.palette
      });
      this.renderer.setColors((code) => {
        const v = this._values.get(code);
        return v == null ? null : this._scale.color(v);
      });
      this._renderLegend();
      this.countEl.textContent = this.store.size === 1 ? "1 record" : `${this.store.size} records`;
      this._applyRegionDim();
      return this;
    }
    _renderLegend() {
      if (!this.options.legend) return;
      const legend = this._scale ? this._scale.legend : { type: "empty" };
      const label = this.options.valueLabel;
      const parts = [];
      if (label) parts.push(`<span class="wm-legend-title">${escapeHtml2(label)}</span>`);
      if (legend.type === "gradient") {
        const bar = `linear-gradient(90deg, ${legend.stops.join(", ")})`;
        parts.push(
          `<span class="wm-legend-gradient">${escapeHtml2(formatNumber(legend.min))}<span class="wm-legend-bar" style="background:${bar}"></span>${escapeHtml2(formatNumber(legend.max))}</span>`
        );
      } else if (legend.type === "buckets") {
        parts.push(
          legend.items.map(
            (item) => `<span class="wm-legend-item"><span class="wm-legend-swatch" style="background:${item.color}"></span>${escapeHtml2(formatNumber(item.from))}\u2013${escapeHtml2(formatNumber(item.to))}</span>`
          ).join("")
        );
      } else if (legend.type === "categorical") {
        const shown = legend.items.slice(0, 8);
        parts.push(
          shown.map(
            (item) => `<span class="wm-legend-item"><span class="wm-legend-swatch" style="background:${item.color}"></span>${escapeHtml2(item.label)}</span>`
          ).join("")
        );
        if (legend.items.length > shown.length) {
          parts.push(`<span class="wm-legend-item">+${legend.items.length - shown.length} more</span>`);
        }
      } else {
        parts.push(`<span class="wm-legend-item">No values to display</span>`);
      }
      parts.push(`<span class="wm-legend-item"><span class="wm-legend-swatch" style="background:var(--wm-nodata-fill)"></span>No record</span>`);
      this.legendEl.innerHTML = parts.join("");
    }
    // --- Public API --------------------------------------------------------
    /** Select and (optionally) zoom to a country. */
    select(code, { focus = false } = {}) {
      const c = normalizeCode(code);
      if (!c) {
        this.clearSelection();
        return this;
      }
      this.selected = c;
      this.renderer.setSelected(c);
      if (focus) this.renderer.focusCode(c);
      if (this.panel) this.panel.open(c);
      if (this.onSelect) this.onSelect(c);
      this.root.dispatchEvent(new CustomEvent("wm:select", { detail: { code: c }, bubbles: true }));
      return this;
    }
    /** Deselect the current country. */
    clearSelection() {
      this.selected = null;
      if (this.renderer) this.renderer.setSelected(null);
      if (this.panel) this.panel.showEmpty();
      if (this.onSelect) this.onSelect(null);
      this.root.dispatchEvent(new CustomEvent("wm:select", { detail: { code: null }, bubbles: true }));
      return this;
    }
    getSelected() {
      return this.selected;
    }
    /** Change what drives the choropleth colors. */
    setColorBy(colorBy, { colors, scaleMode } = {}) {
      this.colorBy = normalizeColorBy(colorBy);
      if (colors) this.palette = Array.isArray(colors) ? colors : PALETTES[colors] || this.palette;
      if (scaleMode) this.scaleMode = scaleMode;
      return this.refresh();
    }
    /** Zoom/pan to a country. */
    focus(code) {
      const c = normalizeCode(code);
      if (c) this.renderer.focusCode(c);
      return this;
    }
    /** Reset the map to the full-world view. */
    fitAll() {
      this.renderer.fitAll();
      return this;
    }
    getStore() {
      return this.store;
    }
    /** All data as a portable JSON object. */
    exportJSON() {
      return this.store.exportJSON();
    }
    /** Load data (replaces the store unless `merge` is true). */
    importJSON(json, { merge = false } = {}) {
      this.store.importJSON(json, { merge });
      return this.refresh();
    }
    /** Trigger a browser download of the current data. */
    exportToFile(filename = "worldmap-data.json") {
      const blob = new Blob([JSON.stringify(this.exportJSON(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 0);
      return this;
    }
    destroy() {
      if (this._unsub) this._unsub();
      this._unsub = null;
      if (this.panel) this.panel.destroy();
      if (this.renderer) this.renderer.destroy();
      this.root.innerHTML = "";
      this.root.classList.remove("wm-root", "wm-dark");
    }
  };
  function resolveElement(el) {
    if (typeof el === "string") return document.querySelector(el);
    return el instanceof Element ? el : null;
  }
  function escapeHtml2(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);
  }
  function formatValue(v) {
    return typeof v === "number" ? formatNumber(v) : String(v);
  }
  function previewValue(record) {
    try {
      const s = JSON.stringify(record);
      return s.length > 60 ? `${s.slice(0, 57)}\u2026` : s;
    } catch {
      return String(record);
    }
  }

  // src/index.js
  if (typeof window !== "undefined") {
    window.WorldMap = Object.assign(window.WorldMap || {}, {
      WorldMapModule,
      CountryStore,
      localStorageAdapter,
      memoryAdapter,
      createColorScale
    });
  }
})();
