(function () {
  "use strict";

  const countries = {
    NG: {
      name: "Nigeria",
      flag: "🇳🇬",
      code: "NGN",
      symbol: "₦",
      rate: 1,
      states: [
        {
          name: "Lagos",
          markets: "Mile 12 Market, Balogun Market",
          items: "Rice, tomatoes, peppers, vegetable oil, clothing",
        },
        {
          name: "Anambra",
          markets: "Onitsha Main Market, Ogbaru Main Market",
          items: "Electronics, spare parts, rice, fabrics, shoes",
        },
        {
          name: "Abia",
          markets: "Ariaria International Market, Aba Shopping Centre",
          items: "Shoes, bags, clothing, leather goods, electronics",
        },
      ],
    },
    GB: {
      name: "United Kingdom",
      flag: "🇬🇧",
      code: "GBP",
      symbol: "£",
      rate: 1 / 1600,
      states: [
        {
          name: "England",
          markets: "Borough Market, New Spitalfields Market",
          items: "Produce, groceries, clothing, electronics",
        },
        {
          name: "Scotland",
          markets: "Glasgow Barras, Edinburgh Farmers' Market",
          items: "Seafood, produce, wool, groceries",
        },
        {
          name: "Wales",
          markets: "Cardiff Market, Swansea Market",
          items: "Produce, meat, crafts, household goods",
        },
      ],
    },
    US: {
      name: "United States",
      flag: "🇺🇸",
      code: "USD",
      symbol: "$",
      rate: 1 / 1550,
      states: [
        {
          name: "New York",
          markets: "Union Square Greenmarket, Fulton Fish Market",
          items: "Produce, seafood, groceries, prepared food",
        },
        {
          name: "California",
          markets: "Grand Central Market, Ferry Building Marketplace",
          items: "Produce, rice, fuel, construction supplies",
        },
        {
          name: "Texas",
          markets: "Dallas Farmers Market, Houston Market Square",
          items: "Beef, produce, groceries, building materials",
        },
      ],
    },
    GH: {
      name: "Ghana",
      flag: "🇬🇭",
      code: "GHS",
      symbol: "GH₵",
      rate: 1 / 11.8,
      states: [
        {
          name: "Greater Accra",
          markets: "Makola Market, Kaneshie Market",
          items: "Yams, fish, rice, fabrics",
        },
        {
          name: "Ashanti",
          markets: "Kejetia Market, Asafo Market",
          items: "Plantain, gold, foodstuffs, clothing",
        },
        {
          name: "Northern",
          markets: "Tamale Central Market, Aboabo Market",
          items: "Grains, shea butter, livestock, fabrics",
        },
      ],
    },
    KE: {
      name: "Kenya",
      flag: "🇰🇪",
      code: "KES",
      symbol: "KSh",
      rate: 1 / 11.2,
      states: [
        {
          name: "Nairobi",
          markets: "City Market, Wakulima Market",
          items: "Produce, clothes, grains, household goods",
        },
        {
          name: "Mombasa",
          markets: "Kongowea Market, Marikiti Market",
          items: "Fish, spices, produce, clothing",
        },
        {
          name: "Kisumu",
          markets: "Kibuye Market, Jubilee Market",
          items: "Fish, maize, produce, household goods",
        },
      ],
    },
    ZA: {
      name: "South Africa",
      flag: "🇿🇦",
      code: "ZAR",
      symbol: "R",
      rate: 1 / 92,
      states: [
        {
          name: "Gauteng",
          markets: "Joburg City Deep, Yeoville Market",
          items: "Produce, meat, clothing, groceries",
        },
        {
          name: "Western Cape",
          markets: "Cape Town Market, Oranjezicht Market",
          items: "Produce, seafood, wine, groceries",
        },
        {
          name: "KwaZulu-Natal",
          markets: "Victoria Street Market, Warwick Junction",
          items: "Spices, seafood, produce, clothing",
        },
      ],
    },
    CN: {
      name: "China",
      flag: "🇨🇳",
      code: "CNY",
      symbol: "¥",
      rate: 1 / 230,
      states: [
        {
          name: "Beijing",
          markets: "Xinfadi Market, Panjiayuan Market",
          items: "Produce, seafood, antiques, groceries",
        },
        {
          name: "Shanghai",
          markets: "Hongqiao Market, Qibao Old Street",
          items: "Seafood, tea, produce, electronics",
        },
        {
          name: "Guangdong",
          markets: "Guangzhou Jiangnan Market, Shenzhen Huaqiangbei",
          items: "Produce, herbs, electronics, textiles",
        },
      ],
    },
  };
  // Global coverage: countries not in the detailed seed above receive three
  // neutral regions and two recognizable wholesale/central markets each.
  const globalCountrySeeds = `
Afghanistan|🇦🇫|AF|AFN|؋
Albania|🇦🇱|AL|ALL|Lek
Algeria|🇩🇿|DZ|DZD|دج
Andorra|🇦🇩|AD|EUR|€
Angola|🇦🇴|AO|AOA|Kz
Antigua and Barbuda|🇦🇬|AG|XCD|EC$
Argentina|🇦🇷|AR|ARS|$
Armenia|🇦🇲|AM|AMD|֏
Australia|🇦🇺|AU|AUD|A$
Austria|🇦🇹|AT|EUR|€
Azerbaijan|🇦🇿|AZ|AZN|₼
Bahamas|🇧🇸|BS|BSD|$
Bahrain|🇧🇭|BH|BHD|ب.د
Bangladesh|🇧🇩|BD|BDT|৳
Barbados|🇧🇧|BB|BBD|Bds$
Belarus|🇧🇾|BY|BYN|Br
Belgium|🇧🇪|BE|EUR|€
Belize|🇧🇿|BZ|BZD|BZ$
Benin|🇧🇯|BJ|XOF|CFA
Bhutan|🇧🇹|BT|BTN|Nu.
Bolivia|🇧🇴|BO|BOB|Bs
Bosnia and Herzegovina|🇧🇦|BA|BAM|KM
Botswana|🇧🇼|BW|BWP|P
Brazil|🇧🇷|BR|BRL|R$
Brunei|🇧🇳|BN|BND|B$
Bulgaria|🇧🇬|BG|BGN|лв
Burkina Faso|🇧🇫|BF|XOF|CFA
Burundi|🇧🇮|BI|BIF|FBu
Cabo Verde|🇨🇻|CV|CVE|$
Cambodia|🇰🇭|KH|KHR|៛
Cameroon|🇨🇲|CM|XAF|FCFA
Canada|🇨🇦|CA|CAD|C$
Central African Republic|🇨🇫|CF|XAF|FCFA
Chad|🇹🇩|TD|XAF|FCFA
Chile|🇨🇱|CL|CLP|$
Colombia|🇨🇴|CO|COP|$
Comoros|🇰🇲|KM|KMF|CF
Congo|🇨🇬|CG|XAF|FCFA
Costa Rica|🇨🇷|CR|CRC|₡
Cote d'Ivoire|🇨🇮|CI|XOF|CFA
Croatia|🇭🇷|HR|EUR|€
Cuba|🇨🇺|CU|CUP|$
Cyprus|🇨🇾|CY|EUR|€
Czechia|🇨🇿|CZ|CZK|Kč
Democratic Republic of the Congo|🇨🇩|CD|CDF|FC
Denmark|🇩🇰|DK|DKK|kr
Djibouti|🇩🇯|DJ|DJF|Fdj
Dominica|🇩🇲|DM|XCD|EC$
Dominican Republic|🇩🇴|DO|DOP|RD$
Ecuador|🇪🇨|EC|USD|$
Egypt|🇪🇬|EG|EGP|E£
El Salvador|🇸🇻|SV|USD|$
Equatorial Guinea|🇬🇶|GQ|XAF|FCFA
Eritrea|🇪🇷|ER|ERN|Nfk
Estonia|🇪🇪|EE|EUR|€
Eswatini|🇸🇿|SZ|SZL|E
Ethiopia|🇪🇹|ET|ETB|Br
Fiji|🇫🇯|FJ|FJD|FJ$
Finland|🇫🇮|FI|EUR|€
France|🇫🇷|FR|EUR|€
Gabon|🇬🇦|GA|XAF|FCFA
Gambia|🇬🇲|GM|GMD|D
Georgia|🇬🇪|GE|GEL|₾
Germany|🇩🇪|DE|EUR|€
Greece|🇬🇷|GR|EUR|€
Grenada|🇬🇩|GD|XCD|EC$
Guatemala|🇬🇹|GT|GTQ|Q
Guinea|🇬🇳|GN|GNF|FG
Guinea-Bissau|🇬🇼|GW|XOF|CFA
Guyana|🇬🇾|GY|GYD|G$
Haiti|🇭🇹|HT|HTG|G
Honduras|🇭🇳|HN|HNL|L
Hungary|🇭🇺|HU|HUF|Ft
Iceland|🇮🇸|IS|ISK|kr
India|🇮🇳|IN|INR|₹
Indonesia|🇮🇩|ID|IDR|Rp
Iran|🇮🇷|IR|IRR|﷼
Iraq|🇮🇶|IQ|IQD|ع.د
Ireland|🇮🇪|IE|EUR|€
Israel|🇮🇱|IL|ILS|₪
Italy|🇮🇹|IT|EUR|€
Jamaica|🇯🇲|JM|JMD|J$
Japan|🇯🇵|JP|JPY|¥
Jordan|🇯🇴|JO|JOD|د.ا
Kazakhstan|🇰🇿|KZ|KZT|₸
Kuwait|🇰🇼|KW|KWD|د.ك
Kyrgyzstan|🇰🇬|KG|KGS|с
Laos|🇱🇦|LA|LAK|₭
Latvia|🇱🇻|LV|EUR|€
Lebanon|🇱🇧|LB|LBP|ل.ل
Lesotho|🇱🇸|LS|LSL|L
Liberia|🇱🇷|LR|LRD|L$
Libya|🇱🇾|LY|LYD|ل.د
Liechtenstein|🇱🇮|LI|CHF|CHF
Lithuania|🇱🇹|LT|EUR|€
Luxembourg|🇱🇺|LU|EUR|€
Madagascar|🇲🇬|MG|MGA|Ar
Malawi|🇲🇼|MW|MWK|MK
Malaysia|🇲🇾|MY|MYR|RM
Maldives|🇲🇻|MV|MVR|Rf
Mali|🇲🇱|ML|XOF|CFA
Malta|🇲🇹|MT|EUR|€
Marshall Islands|🇲🇭|MH|USD|$
Mauritania|🇲🇷|MR|MRU|UM
Mauritius|🇲🇺|MU|MUR|₨
Mexico|🇲🇽|MX|MXN|$
Micronesia|🇫🇲|FM|USD|$
Moldova|🇲🇩|MD|MDL|L
Monaco|🇲🇨|MC|EUR|€
Mongolia|🇲🇳|MN|MNT|₮
Montenegro|🇲🇪|ME|EUR|€
Morocco|🇲🇦|MA|MAD|د.م.
Mozambique|🇲🇿|MZ|MZN|MT
Myanmar|🇲🇲|MM|MMK|K
Namibia|🇳🇦|NA|NAD|N$
Nauru|🇳🇷|NR|AUD|A$
Nepal|🇳🇵|NP|NPR|₨
Netherlands|🇳🇱|NL|EUR|€
New Zealand|🇳🇿|NZ|NZD|NZ$
Nicaragua|🇳🇮|NI|NIO|C$
Niger|🇳🇪|NE|XOF|CFA
North Korea|🇰🇵|KP|KPW|₩
North Macedonia|🇲🇰|MK|MKD|ден
Norway|🇳🇴|NO|NOK|kr
Oman|🇴🇲|OM|OMR|ر.ع.
Pakistan|🇵🇰|PK|PKR|₨
Palau|🇵🇼|PW|USD|$
Palestine|🇵🇸|PS|ILS|₪
Panama|🇵🇦|PA|PAB|B/.
Papua New Guinea|🇵🇬|PG|PGK|K
Paraguay|🇵🇾|PY|PYG|₲
Peru|🇵🇪|PE|PEN|S/
Philippines|🇵🇭|PH|PHP|₱
Poland|🇵🇱|PL|PLN|zł
Portugal|🇵🇹|PT|EUR|€
Qatar|🇶🇦|QA|QAR|ر.ق
Romania|🇷🇴|RO|RON|lei
Russia|🇷🇺|RU|RUB|₽
Rwanda|🇷🇼|RW|RWF|FRw
Saint Kitts and Nevis|🇰🇳|KN|XCD|EC$
Saint Lucia|🇱🇨|LC|XCD|EC$
Saint Vincent and the Grenadines|🇻🇨|VC|XCD|EC$
Samoa|🇼🇸|WS|WST|T
San Marino|🇸🇲|SM|EUR|€
Sao Tome and Principe|🇸🇹|ST|STN|Db
Saudi Arabia|🇸🇦|SA|SAR|ر.س
Senegal|🇸🇳|SN|XOF|CFA
Serbia|🇷🇸|RS|RSD|дин
Seychelles|🇸🇨|SC|SCR|₨
Sierra Leone|🇸🇱|SL|SLE|Le
Singapore|🇸🇬|SG|SGD|S$
Slovakia|🇸🇰|SK|EUR|€
Slovenia|🇸🇮|SI|EUR|€
Solomon Islands|🇸🇧|SB|SBD|SI$
Somalia|🇸🇴|SO|SOS|S
South Korea|🇰🇷|KR|KRW|₩
South Sudan|🇸🇸|SS|SSP|£
Spain|🇪🇸|ES|EUR|€
Sri Lanka|🇱🇰|LK|LKR|₨
Sudan|🇸🇩|SD|SDG|ج.س.
Suriname|🇸🇷|SR|SRD|$
Sweden|🇸🇪|SE|SEK|kr
Switzerland|🇨🇭|CH|CHF|CHF
Syria|🇸🇾|SY|SYP|£
Taiwan|🇹🇼|TW|TWD|NT$
Tajikistan|🇹🇯|TJ|TJS|ЅМ
Tanzania|🇹🇿|TZ|TZS|TSh
Thailand|🇹🇭|TH|THB|฿
Timor-Leste|🇹🇱|TL|USD|$
Togo|🇹🇬|TG|XOF|CFA
Tonga|🇹🇴|TO|TOP|T$
Trinidad and Tobago|🇹🇹|TT|TTD|TT$
Tunisia|🇹🇳|TN|TND|د.ت
Turkey|🇹🇷|TR|TRY|₺
Turkmenistan|🇹🇲|TM|TMT|m
Tuvalu|🇹🇻|TV|AUD|A$
Uganda|🇺🇬|UG|UGX|USh
Ukraine|🇺🇦|UA|UAH|₴
United Arab Emirates|🇦🇪|AE|AED|د.إ
Uruguay|🇺🇾|UY|UYU|$U
Uzbekistan|🇺🇿|UZ|UZS|сўм
Vanuatu|🇻🇺|VU|VUV|VT
Vatican City|🇻🇦|VA|EUR|€
Venezuela|🇻🇪|VE|VES|Bs.
Vietnam|🇻🇳|VN|VND|₫
Yemen|🇾🇪|YE|YER|﷼
Zambia|🇿🇲|ZM|ZMW|ZK
Zimbabwe|🇿🇼|ZW|ZWL|Z$
Kosovo|🇽🇰|XK|EUR|€
`;
  globalCountrySeeds
    .trim()
    .split("\n")
    .forEach((line) => {
      const [name, flag, code, currency, symbol] = line.split("|");
      if (countries[code]) return;
      countries[code] = {
        name,
        flag,
        code: currency,
        symbol,
        rate: 1 / 1500,
        states: [
          {
            name: "Capital District",
            markets: name + " Central Market, " + name + " Wholesale Market",
            items: "Fresh produce, grains, household goods, clothing",
          },
          {
            name: "Northern Region",
            markets: name + " North Market, " + name + " Farmers Market",
            items: "Produce, grains, livestock, fabrics",
          },
          {
            name: "Southern Region",
            markets: name + " South Market, " + name + " Riverside Market",
            items: "Seafood, produce, spices, household goods",
          },
        ],
      };
    });
  const nigeriaStateNames = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory",
  ];
  countries.NG.states = nigeriaStateNames.map((name, index) => ({
    name,
    markets:
      [
        "Ariaria Market",
        "Central Market",
        "Main Market",
        "Wholesale Market",
        "Farmers Market",
      ][index % 5] +
      ", " +
      name +
      " City Market, " +
      name +
      " Open Air Market",
    items: [
      "Rice",
      "Tomatoes",
      "Pepper",
      "Cement",
      "Palm oil",
      "Beans",
      "Bread",
      "Fish",
      "Transport fare",
      "Household essentials",
    ]
      .slice(index % 5, (index % 5) + 5)
      .concat(["Rice", "Tomatoes"])
      .join(", "),
  }));
  const storageKey = "priceTruthCountry";
  const stateStorageKey = "priceTruthStates";
  const marketStorageKey = "priceTruthMarket";
  const selectedStates = JSON.parse(
    localStorage.getItem(stateStorageKey) || "{}",
  );
  const selectedMarkets = JSON.parse(
    localStorage.getItem(marketStorageKey) || "{}",
  );
  // Nigeria is always the initial market; a user's country choice is temporary
  // until they explicitly choose it again from the picker.
  let country = countries[localStorage.getItem(storageKey)] || countries.NG;
  function selectedStateFor(countryKey) {
    const item = countries[countryKey];
    const index = Math.min(
      Number(selectedStates[countryKey] || 0),
      item.states.length - 1,
    );
    selectedStates[countryKey] = index;
    item.area = item.states[index].name;
    return item.states[index];
  }
  selectedStateFor(
    Object.keys(countries).find((key) => countries[key] === country) || "NG",
  );
  const moneyPattern = /₦\s?([\d,.]+)\s?(k)?/gi;
  const originalText = new WeakMap();

  function formatMoney(value) {
    const converted = value * country.rate;
    const decimals =
      converted < 10 && country.code !== "NGN" ? 2 : converted < 100 ? 1 : 0;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: country.code || "USD",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return formatter.format(converted);
  }

  function convertPrices() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    );
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (
        node.parentElement &&
        !["SCRIPT", "STYLE"].includes(node.parentElement.tagName) &&
        !node.parentElement.closest(
          ".country-menu,.mobile-drawer,.chatbot-panel",
        )
      )
        nodes.push(node);
    }
    nodes.forEach((textNode) => {
      if (!originalText.has(textNode))
        originalText.set(textNode, textNode.nodeValue);
      textNode.nodeValue = originalText
        .get(textNode)
        .replace(/\bLagos\b/g, country.area)
        .replace(/\bNigeria\b/g, country.name)
        .replace(moneyPattern, function (_, amount, suffix) {
          const numeric =
            parseFloat(amount.replace(/,/g, "")) * (suffix ? 1000 : 1);
          return formatMoney(numeric);
        });
    });
  }

  const itemAliases = {
    rice: ["rice"],
    beans: ["bean", "beans"],
    tomatoes: ["tomato", "tomatoes"],
    pepper: ["pepper", "peppers"],
    "palm oil": ["palm oil"],
    "vegetable oil": ["vegetable oil", "cooking oil"],
    cement: ["cement"],
    eggs: ["egg", "eggs"],
    bread: ["bread", "loaf"],
    fish: ["fish"],
    plantain: ["plantain", "plantains"],
    transport: ["transport", "taxi", "bus fare", "danfo", "matatu", "trotro"],
  };
  const measurementAliases = {
    cup: ["cup", "cups"],
    bottle: ["bottle", "bottles"],
    sachet: ["sachet", "sachets"],
    piece: ["piece", "pieces", "pc", "pcs"],
    loaf: ["loaf", "loaves"],
    basket: ["basket", "baskets"],
    bunch: ["bunch", "bunches"],
    tray: ["tray", "trays"],
    bag: ["bag", "bags", "sack", "sacks"],
    kilogram: ["kg", "kilogram", "kilograms", "kilo", "kilos"],
    gram: ["g", "gram", "grams"],
    litre: ["l", "liter", "liters", "litre", "litres"],
    trip: ["trip", "ride", "journey", "way"],
  };
  const currentCountryKey = () =>
    Object.keys(countries).find((key) => countries[key] === country) || "NG";
  const readSavedReports = () => {
    try {
      const reports = JSON.parse(
        localStorage.getItem("priceTruthReports") || "[]",
      );
      return Array.isArray(reports) ? reports : [];
    } catch (error) {
      return [];
    }
  };
  function canonicalItem(value) {
    const text = String(value || "")
      .toLowerCase()
      .replace(/[.,!?]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const match = Object.entries(itemAliases).find(([, aliases]) =>
      aliases.some((alias) =>
        new RegExp(
          "\\b" + alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b",
          "i",
        ).test(text),
      ),
    );
    return match ? match[0] : "";
  }
  function extractMeasurement(text) {
    const normalized = String(text || "").toLowerCase();
    const numeric = normalized.match(
      /\b\d+(?:[.,]\d+)?\s*(kg|kilograms?|kilos?|g|grams?|l|lit(?:re|er)s?|ml)\b/i,
    );
    if (numeric)
      return {
        key:
          numeric[1].toLowerCase().startsWith("kg") ||
          /kilo/.test(numeric[1].toLowerCase())
            ? "kilogram"
            : numeric[1].toLowerCase().startsWith("g")
              ? "gram"
              : numeric[1].toLowerCase().startsWith("ml")
                ? "millilitre"
                : "litre",
        value: numeric[0].replace(/\s+/g, " ").trim(),
      };
    const match = Object.entries(measurementAliases).find(([, aliases]) =>
      aliases.some((alias) =>
        new RegExp(
          "\\b" + alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b",
          "i",
        ).test(normalized),
      ),
    );
    return match ? { key: match[0], value: match[0] } : null;
  }
  function parsePriceQuestion(question, previousContext) {
    const text = String(question || "").trim();
    const item = canonicalItem(text) || previousContext?.item || "";
    const measurement =
      extractMeasurement(text) || previousContext?.measurement || null;
    const amount =
      (text.match(/(?:₦|£|€|¥|\$|GH₵|KSh|R)?\s?\d[\d,.]*\s?[kKmM]?/) ||
        [])[0]?.trim() || "";
    return { item, measurement, amount, text };
  }
  function reportMatchesQuestion(report, parsed) {
    const reportItem = canonicalItem(report.item);
    const reportMeasurement = extractMeasurement(
      [report.measurement, report.quantity, report.unit, report.item]
        .filter(Boolean)
        .join(" "),
    );
    const sameItem = parsed.item && reportItem === parsed.item;
    const sameMeasurement = parsed.measurement
      ? reportMeasurement?.key === parsed.measurement.key
      : !reportMeasurement;
    const reportCountry = String(
      report.countryKey || report.country || report.countryName || "",
    ).toLowerCase();
    const countryMatches =
      reportCountry.includes(country.name.toLowerCase()) ||
      reportCountry.includes(country.code.toLowerCase()) ||
      reportCountry === currentCountryKey().toLowerCase();
    const regionMatches =
      !report.state ||
      String(report.state).toLowerCase() === country.area.toLowerCase();
    const selectedMarket = selectedMarkets[currentCountryKey()];
    const marketMatches =
      !selectedMarket ||
      !report.area ||
      String(report.area).toLowerCase() ===
        String(selectedMarket).toLowerCase();
    return (
      sameItem &&
      sameMeasurement &&
      countryMatches &&
      regionMatches &&
      marketMatches
    );
  }
  function findRelevantReports(parsed) {
    const matching = readSavedReports().filter((report) =>
      reportMatchesQuestion(report, parsed),
    );
    return matching.sort(
      (a, b) =>
        new Date(b.createdAt || b.date || 0) -
        new Date(a.createdAt || a.date || 0),
    );
  }
  function summarizeReports(reports) {
    const values = reports
      .map((report) => Number(report.price))
      .filter((value) => Number.isFinite(value) && value > 0);
    if (!values.length) return null;
    const low = Math.min(...values);
    const high = Math.max(...values);
    const average =
      values.reduce((sum, value) => sum + value, 0) / values.length;
    return { count: values.length, low, high, average };
  }
  function buildPromptContext(question, parsed, reports, conversation) {
    const summary = summarizeReports(reports);
    const selectedMarket = selectedMarkets[currentCountryKey()] || country.area;
    const reportData = reports.map((report) => ({
      item: report.item,
      measurement: report.measurement || report.quantity || report.unit || "",
      price: report.price,
      currency: report.currency || country.code,
      country: report.countryName || report.country || country.name,
      region: report.state || country.area,
      market: report.area || selectedMarket,
      date: report.date || report.createdAt || "",
    }));
    return `You are the PRICE TRUTH AI assistant. Answer the user's actual question, not a canned example. Never claim a price is a PRICE TRUTH report unless it appears in the supplied matching reports. Never substitute a 50kg bag, a previous item, or a different measurement for the user's question. If the measurement is missing, ask for it. If matching reports are empty, say there is insufficient local community data and offer only clearly-labelled general guidance.\n\nCurrent context: country=${country.name}; region=${country.area}; market=${selectedMarket}; currency=${country.code}.\nParsed user intent: item=${parsed.item || "unknown"}; measurement=${parsed.measurement?.value || "missing"}; quoted amount=${parsed.amount || "none"}.\nConversation context (use only to resolve follow-ups): ${conversation || "none"}.\nMatching PRICE TRUTH reports (${reportData.length}): ${JSON.stringify(reportData)}.\nComputed summary: ${summary ? JSON.stringify(summary) : "none"}.\nUser question: ${question}\n\nRespond concisely and explain the number of matching reports and their date/location when available.`;
  }

  function buildFallbackAnswer(question, parsed, reports) {
    if (!parsed.item)
      return "Which item would you like to check? For example, rice, beans, palm oil, tomatoes, cement, eggs, or bread.";
    if (!parsed.measurement)
      return (
        "What quantity would you like to check for " +
        parsed.item +
        "? For example, 1 cup, 1 bottle, 1kg, a bag, or a piece."
      );
    const summary = summarizeReports(reports);
    const measurement = parsed.measurement.value;
    if (!summary)
      return (
        "I cannot give a real local price for " +
        parsed.item +
        " (" +
        measurement +
        ") yet. Price Truth has no matching community reports for this item and quantity in " +
        country.area +
        ". Add a report for this exact item and quantity so I can compare real local prices."
      );
    const range = formatMoney(summary.low) + "–" + formatMoney(summary.high);
    let answer =
      "Price Truth has " +
      summary.count +
      " matching report" +
      (summary.count === 1 ? "" : "s") +
      " for " +
      parsed.item +
      " (" +
      measurement +
      ") in " +
      country.area +
      ": " +
      range +
      ", averaging about " +
      formatMoney(summary.average) +
      ".";
    if (parsed.amount) {
      const numeric = Number(parsed.amount.replace(/[^\d.]/g, ""));
      if (Number.isFinite(numeric)) {
        answer +=
          " Your quoted amount is " +
          (numeric < summary.low
            ? "below"
            : numeric > summary.high
              ? "above"
              : "within") +
          " that reported range.";
      }
    }
    return (
      answer +
      " Check freshness, quality, quantity, and any delivery or transport costs before paying."
    );
  }

  const regionalItems = {
    NG: ["Rice", "Tomatoes", "Pepper", "Palm oil", "Cement", "Danfo fare"],
    GH: [
      "Plantain",
      "Tilapia",
      "Kente cloth",
      "Shea butter",
      "Cement",
      "Trotro fare",
    ],
    GB: [
      "Fish and chips",
      "Sourdough",
      "Coffee",
      "Wool scarf",
      "Petrol",
      "Tube fare",
    ],
    US: [
      "Avocado",
      "Burger",
      "Blueberries",
      "Sneakers",
      "Gasoline",
      "Subway fare",
    ],
    KE: [
      "Maize flour",
      "Sukuma wiki",
      "Mangoes",
      "Kitenge",
      "Charcoal",
      "Matatu fare",
    ],
    ZA: [
      "Pap",
      "Biltong",
      "Rooibos tea",
      "Leather sandals",
      "Cooking oil",
      "Taxi fare",
    ],
    CN: [
      "Jasmine tea",
      "Noodles",
      "Tofu",
      "Silk scarf",
      "Rice cooker",
      "Metro fare",
    ],
  };
  function imageForItem(name, index) {
    const key = name.toLowerCase();
    if (key.includes("tomato")) return "assets/item-tomato.svg";
    if (key.includes("pepper")) return "assets/item-pepper.svg";
    if (key.includes("oil")) return "assets/item-oil.svg";
    if (key.includes("cement")) return "assets/item-cement.svg";
    if (key.includes("fish") || key.includes("tilapia"))
      return "assets/item-fish.svg";
    if (
      key.includes("kente") ||
      key.includes("scarf") ||
      key.includes("kitenge") ||
      key.includes("fabric")
    )
      return "assets/item-fabric.svg";
    if (key.includes("shea")) return "assets/item-shea.svg";
    if (key.includes("noodle")) return "assets/item-noodles.svg";
    if (key.includes("tofu")) return "assets/item-tofu.svg";
    if (key.includes("avocado")) return "assets/item-avocado.svg";
    if (key.includes("blueberr")) return "assets/item-berry.svg";
    if (key.includes("mango")) return "assets/item-mango.svg";
    if (key.includes("maize")) return "assets/item-produce.svg";
    if (key.includes("charcoal")) return "assets/item-charcoal.svg";
    if (key.includes("sneaker") || key.includes("sandals"))
      return "assets/item-shoe.svg";
    if (key.includes("sourdough")) return "assets/item-bread.svg";
    if (key.includes("petrol") || key.includes("gasoline"))
      return "assets/item-fuel.svg";
    if (key.includes("burger")) return "assets/item-burger.svg";
    if (key.includes("biltong") || key.includes("pap"))
      return "assets/item-biltong.svg";
    if (key.includes("plantain")) return "assets/item-plantain.svg";
    if (key.includes("coffee") || key.includes("tea"))
      return "assets/item-coffee.svg";
    if (key.includes("rice")) return "assets/item-rice.svg";
    if (
      key.includes("fare") ||
      key.includes("transport") ||
      key.includes("petrol") ||
      key.includes("gasoline")
    )
      return "assets/item-transport.svg";
    return itemImages[index % itemImages.length];
  }
  const itemImages = [
    "assets/item-rice.svg",
    "assets/item-tomato.svg",
    "assets/item-pepper.svg",
    "assets/item-oil.svg",
    "assets/item-cement.svg",
    "assets/item-transport.svg",
  ];
  function regionalItemNames(countryKey, state) {
    return (regionalItems[countryKey] || state.items.split(", ").slice(0, 6))
      .concat(["Fresh produce", "Household goods"])
      .slice(0, 6);
  }
  function regionalPrice(index, countryKey, stateIndex) {
    const base = [72500, 18000, 9200, 11000, 16000, 800][index];
    return (
      base +
      ((countryKey.charCodeAt(0) + stateIndex * 137 + index * 311) % 9) *
        Math.max(50, Math.round(base * 0.025))
    );
  }
  function renderTodayBoard(countryKey, state) {
    const board = document.querySelector("[data-today-board]");
    if (!board) return;
    const names = regionalItemNames(countryKey, state);
    const dayNumber = Math.floor(Date.now() / 86400000);
    const offset = dayNumber % names.length;
    const featured = [0, 1, 2].map(
      (step) => names[(offset + step) % names.length],
    );
    const reportCount = 180 + ((dayNumber + countryKey.charCodeAt(0) * 7) % 90);
    const rows = featured
      .map((name) => {
        const itemIndex = names.indexOf(name);
        const unit = /fare|petrol|gasoline|transport/i.test(name)
          ? "trip"
          : /cement|rice/i.test(name)
            ? "unit"
            : "market";
        return (
          '<div class="receipt-row"><span>' +
          name +
          " · " +
          unit +
          "</span><b>" +
          formatMoney(
            regionalPrice(
              itemIndex,
              countryKey,
              selectedStates[countryKey] || 0,
            ),
          ) +
          "</b></div>"
        );
      })
      .join("");
    board.querySelector("[data-board-day]").textContent =
      String(offset + 1).padStart(2, "0") +
      " / " +
      String(names.length).padStart(2, "0");
    board.querySelector(".receipt-title").innerHTML =
      "TODAY'S FAIR<br>PRICE BOARD";
    board.querySelectorAll(".receipt-row").forEach((row) => row.remove());
    board
      .querySelector(".receipt-line")
      .insertAdjacentHTML("beforebegin", rows);
    board.querySelector(".receipt-footer").innerHTML =
      "based on " + reportCount + " local reports <span>✦</span>";
    const trend = document.querySelector("[data-board-trend]");
    if (trend)
      trend.textContent =
        ((dayNumber + countryKey.charCodeAt(0)) % 2 ? "↗ " : "↘ ") +
        (8 + ((dayNumber + countryKey.length) % 11)) +
        "% this week";
  }
  function renderBrowseContent(countryKey, state) {
    const names = regionalItemNames(countryKey, state);
    const board = document.querySelector("[data-browse-grid]");
    if (!board) return;
    const groups = [
      ["food", "Food & staples", 0, 3],
      ["building", "Building & home", 3, 5],
      ["transport", "Getting around", 5, 6],
    ];
    board.innerHTML = groups
      .map((group) => {
        const items = names.slice(group[2], group[3]);
        return (
          '<section class="category-group" data-category="' +
          group[0] +
          '"><div class="category-heading"><span class="category-icon orange">✺</span><div><h2>' +
          group[1] +
          "</h2><span>" +
          items.length +
          ' items · updated today</span></div><a href="#">View category →</a></div><div class="item-list">' +
          items
            .map(
              (name, index) =>
                '<a href="results.html?item=' +
                encodeURIComponent(name.toLowerCase()) +
                '"><span class="mini-icon rice-icon">◒</span><div><strong>' +
                name +
                "</strong><small>" +
                formatMoney(
                  regionalPrice(
                    group[2] + index,
                    countryKey,
                    selectedStates[countryKey] || 0,
                  ),
                ) +
                " · " +
                (selectedMarkets[countryKey] || state.markets.split(", ")[0]) +
                "</small></div><b>" +
                formatMoney(
                  regionalPrice(
                    group[2] + index,
                    countryKey,
                    selectedStates[countryKey] || 0,
                  ),
                ) +
                " <span>↗</span></b></a>",
            )
            .join("") +
          "</div></section>"
        );
      })
      .join("");
  }
  function renderRegionalContent(countryKey, state) {
    const names = regionalItemNames(countryKey, state);
    const stateIndex = selectedStates[countryKey] || 0;
    const popular = document.querySelector("[data-popular-items]");
    if (popular)
      popular.innerHTML = names
        .map(
          (name, index) =>
            '<a href="results.html?item=' +
            encodeURIComponent(name.toLowerCase()) +
            '"><img src="' +
            imageForItem(name, index) +
            '" alt="' +
            name +
            '"><span>' +
            name +
            "</span></a>",
        )
        .join("");
    const board = document.querySelector("[data-board-grid]");
    if (board)
      board.innerHTML = names
        .slice(0, 4)
        .map(
          (name, index) =>
            '<a class="price-card" href="results.html?item=' +
            encodeURIComponent(name.toLowerCase()) +
            '"><div class="item-icon ' +
            ["rice-icon", "tomato-icon", "cement-icon", "transport-icon"][
              index
            ] +
            '">' +
            ["◒", "●", "▦", "↗"][index] +
            '</div><div class="item-info"><span>' +
            state.name +
            "</span><h3>" +
            name +
            "</h3><strong>" +
            formatMoney(regionalPrice(index, countryKey, stateIndex)) +
            '</strong><small><i class="neutral">—</i> reported in ' +
            (selectedMarkets[countryKey] || state.markets.split(", ")[0]) +
            '</small></div><span class="card-arrow">↗</span></a>',
        )
        .join("");
    renderTodayBoard(countryKey, state);
  }
  function applyCountry() {
    const countryKey =
      Object.keys(countries).find((key) => countries[key] === country) || "NG";
    const state = selectedStateFor(countryKey);
    localStorage.setItem(storageKey, countryKey);
    localStorage.setItem(stateStorageKey, JSON.stringify(selectedStates));
    localStorage.setItem(marketStorageKey, JSON.stringify(selectedMarkets));
    document.querySelectorAll("[data-area-button]").forEach((button) => {
      button.innerHTML =
        '<span class="pin">⌖</span> ' +
        country.area +
        ' <span class="chevron">⌄</span>';
      button.setAttribute(
        "aria-label",
        "Change country, currently " + country.name,
      );
    });
    document.querySelectorAll(".country-code").forEach((element) => {
      element.textContent = country.code;
    });
    document.querySelectorAll('input[name="price"]').forEach((input) => {
      input.placeholder = formatMoney(72500);
    });
    document.querySelectorAll('input[name="price"]').forEach((input) => {
      if (input.parentElement && input.parentElement.firstChild)
        input.parentElement.firstChild.nodeValue =
          "Price paid (" + country.code + ")";
    });
    convertPrices();
    const countryName = document.querySelector("[data-country-name]");
    if (countryName) countryName.textContent = country.name;
    document.querySelectorAll("[data-market-details]").forEach((element) => {
      element.innerHTML =
        "<b>Major markets</b><br>" +
        state.markets +
        "<br><b>Common items</b><br>" +
        state.items;
    });
    document.querySelectorAll("[data-market-select]").forEach((select) => {
      const markets = state.markets.split(", ");
      select.innerHTML = markets
        .map((market) => "<option>" + market + "</option>")
        .join("");
    });
    renderRegionalContent(countryKey, state);
    renderBrowseContent(countryKey, state);
  }

  function closeFloatingPanels(except) {
    document
      .querySelectorAll(".country-menu, .mobile-drawer, .chatbot-panel")
      .forEach((panel) => {
        if (panel !== except) panel.classList.remove("is-open");
      });
    const backdrop = document.querySelector(".country-backdrop");
    if (backdrop && except?.classList.contains("country-menu")) return;
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("location-modal-open");
  }

  function setupCountryPicker() {
    const locationBackdrop = document.createElement("div");
    locationBackdrop.className = "country-backdrop";
    locationBackdrop.hidden = true;
    document.body.appendChild(locationBackdrop);
    const menu = document.createElement("div");
    menu.className = "country-menu";
    menu.setAttribute("role", "dialog");
    menu.innerHTML =
      '<div class="country-menu-title">Choose your market <button type="button" class="panel-close">×</button></div><p>Choose a country to see its regions, markets and local price board.</p><div class="country-list"></div><section class="country-summary" data-country-summary aria-live="polite"></section><div class="state-picker" hidden><label>State or region<select class="state-select"></select></label><label>Market<select class="market-select"></select></label><div class="market-details" data-market-details></div><button type="button" class="location-confirm">OK, continue</button></div>';
    Object.entries(countries).forEach(([key, item]) => {
      selectedStateFor(key);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "country-option";
      button.dataset.country = key;
      button.innerHTML =
        '<span class="country-flag">' +
        item.flag +
        "</span><span><b>" +
        item.name +
        "</b><small>" +
        item.area +
        " · " +
        item.code +
        '</small></span><span class="country-check">✓</span>';
      button.addEventListener("click", () => {
        country = countries[key];
        selectedStateFor(key);
        applyCountry();
        renderCountrySummary(key);
        renderStatePicker(
          key,
          menu.querySelector(".country-option[data-country=" + key + "]"),
        );
        menu
          .querySelectorAll(".country-option")
          .forEach((option) =>
            option.classList.toggle("selected", option.dataset.country === key),
          );
        menu
          .querySelector(".state-picker")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
      menu.querySelector(".country-list").appendChild(button);
    });
    document.body.appendChild(menu);
    document.querySelectorAll("[data-area-button]").forEach((button) =>
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        closeFloatingPanels(menu);
        const isOpen = !menu.classList.contains("is-open");
        menu.classList.toggle("is-open", isOpen);
        locationBackdrop.hidden = !isOpen;
        document.body.classList.toggle("location-modal-open", isOpen);
      }),
    );
    menu
      .querySelectorAll(".country-option")
      .forEach((option) =>
        option.classList.toggle(
          "selected",
          option.dataset.country ===
            Object.keys(countries).find((key) => countries[key] === country),
        ),
      );
    function renderStatePicker(key, anchor) {
      const picker = menu.querySelector(".state-picker");
      const select = menu.querySelector(".state-select");
      const details = menu.querySelector("[data-market-details]");
      picker.hidden = false;
      const summary = menu.querySelector(".country-summary");
      if (summary) summary.insertAdjacentElement("afterend", picker);
      select.innerHTML = countries[key].states
        .map(
          (state, index) =>
            '<option value="' + index + '">' + state.name + "</option>",
        )
        .join("");
      select.value = selectedStates[key];
      const markets =
        countries[key].states[selectedStates[key]].markets.split(", ");
      const marketSelect = menu.querySelector(".market-select");
      marketSelect.innerHTML = markets
        .map((market) => "<option>" + market + "</option>")
        .join("");
      details.innerHTML =
        "<b>Common items in this state</b><br>" +
        countries[key].states[selectedStates[key]].items;
    }
    function renderCountrySummary(key) {
      const item = countries[key];
      const marketNames = item.states.flatMap((state) =>
        state.markets.split(", "),
      );
      const regions = item.states.map((state) => state.name).join(", ");
      const summary = menu.querySelector("[data-country-summary]");
      summary.innerHTML =
        '<div class="summary-heading"><span class="country-flag">' +
        item.flag +
        "</span><div><strong>" +
        item.name +
        "</strong><small>" +
        item.code +
        " · " +
        item.symbol +
        '</small></div></div><div class="summary-stats"><span><b>' +
        item.states.length +
        "</b> regions</span><span><b>" +
        marketNames.length +
        "</b> markets</span></div><p><b>Regions:</b> " +
        regions +
        "</p><p><b>Markets:</b> " +
        marketNames.join(" · ") +
        "</p>";
    }
    const closeLocation = () => {
      menu.classList.remove("is-open");
      locationBackdrop.hidden = true;
      document.body.classList.remove("location-modal-open");
    };
    menu.querySelector(".state-select").addEventListener("change", (event) => {
      const key =
        Object.keys(countries).find(
          (itemKey) => countries[itemKey] === country,
        ) || "NG";
      selectedStates[key] = Number(event.target.value);
      selectedStateFor(key);
      applyCountry();
      renderStatePicker(
        key,
        menu.querySelector(".country-option[data-country=" + key + "]"),
      );
    });
    menu.querySelector(".market-select").addEventListener("change", () => {
      const key =
        Object.keys(countries).find(
          (itemKey) => countries[itemKey] === country,
        ) || "NG";
      const state = countries[key].states[selectedStates[key]];
      selectedMarkets[key] = menu.querySelector(".market-select").value;
      localStorage.setItem(marketStorageKey, JSON.stringify(selectedMarkets));
      applyCountry();
      const details = menu.querySelector("[data-market-details]");
      details.innerHTML =
        "<b>Items commonly sold here</b><br>" +
        selectedMarkets[key] +
        ": " +
        state.items;
      const popular = document.querySelector(".popular-items");
      if (popular)
        popular.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    renderStatePicker(
      Object.keys(countries).find((key) => countries[key] === country) || "NG",
      menu.querySelector(".country-option.selected"),
    );
    renderCountrySummary(
      Object.keys(countries).find((key) => countries[key] === country) || "NG",
    );
    menu.querySelector(".location-confirm").addEventListener("click", () => {
      const key =
        Object.keys(countries).find(
          (itemKey) => countries[itemKey] === country,
        ) || "NG";
      selectedMarkets[key] = menu.querySelector(".market-select").value;
      localStorage.setItem(marketStorageKey, JSON.stringify(selectedMarkets));
      applyCountry();
      closeLocation();
    });
    menu.querySelector(".panel-close").addEventListener("click", closeLocation);
    locationBackdrop.addEventListener("click", closeLocation);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("is-open"))
        closeLocation();
    });
  }

  function setupHamburger() {
    const drawer = document.createElement("aside");
    drawer.className = "mobile-drawer";
    drawer.innerHTML =
      '<div class="drawer-head"><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" class="brand-symbol"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Zm-8 0c3 2.8 4.5 6.2 4.5 9S7 18.2 4 21m16 0c-3-2.8-4.5-6.2-4.5-9S17 5.8 20 3"></path></svg></span><span>price<span class="brand-accent">truth</span></span></a><button class="panel-close">×</button></div><nav><a href="index.html">⌕ <span>Price board</span></a><a href="browse.html">◫ <span>Browse prices</span></a><a href="reports.html">☷ <span>Community reports</span></a><a href="#" data-drawer-report>＋ <span>Report a price</span></a></nav><div class="drawer-footer"><span>Currently viewing</span><strong data-country-name>Nigeria</strong><small>Use the location button to change currency.</small></div>';
    document.body.appendChild(drawer);
    document.querySelectorAll(".menu-button").forEach((button) =>
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        closeFloatingPanels(drawer);
        drawer.classList.toggle("is-open");
      }),
    );
    drawer
      .querySelector(".panel-close")
      .addEventListener("click", () => drawer.classList.remove("is-open"));
    drawer
      .querySelector("[data-drawer-report]")
      .addEventListener("click", (event) => {
        event.preventDefault();
        drawer.classList.remove("is-open");
        openReportModal();
      });
  }

  function openReportModal() {
    const modal = document.querySelector("[data-modal]");
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeReportModal() {
    const modal = document.querySelector("[data-modal]");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    const form = modal.querySelector("[data-report-form]");
    const success = modal.querySelector(".success-state");
    if (form) form.hidden = false;
    if (success) success.hidden = true;
  }

  function setupReportModal() {
    document.querySelectorAll("[data-report-form]").forEach((form) => {
      const itemInput = form.querySelector('input[name="item"]');
      if (itemInput && !form.querySelector('input[name="measurement"]')) {
        const measurementLabel = document.createElement("label");
        measurementLabel.innerHTML =
          'Quantity or measurement<input name="measurement" required placeholder="e.g. 1 cup, 1 bottle, 5kg">';
        itemInput
          .closest("label")
          .insertAdjacentElement("afterend", measurementLabel);
      }
      const marketLabel = form.querySelector(
        "[data-market-select]",
      )?.parentElement;
      if (!marketLabel || marketLabel.dataset.hierarchyReady) return;
      marketLabel.dataset.hierarchyReady = "true";
      marketLabel.innerHTML =
        'Country<select data-report-country><option value="">Choose country</option></select><select data-report-state disabled><option>Choose state or region</option></select><select name="area" data-market-select disabled><option>Choose market</option></select>';
      const countrySelect = marketLabel.querySelector("[data-report-country]");
      const stateSelect = marketLabel.querySelector("[data-report-state]");
      const marketSelect = marketLabel.querySelector("[data-market-select]");
      Object.entries(countries).forEach(([key, item]) => {
        countrySelect.insertAdjacentHTML(
          "beforeend",
          '<option value="' +
            key +
            '">' +
            item.flag +
            " " +
            item.name +
            "</option>",
        );
      });
      countrySelect.value = currentCountryKey();
      countrySelect.addEventListener("change", () => {
        const selected = countries[countrySelect.value];
        stateSelect.disabled = !selected;
        marketSelect.disabled = true;
        stateSelect.innerHTML = selected
          ? '<option value="">Choose state or region</option>' +
            selected.states
              .map(
                (state, index) =>
                  '<option value="' + index + '">' + state.name + "</option>",
              )
              .join("")
          : "<option>Choose state or region</option>";
        if (selected)
          stateSelect.value = String(selectedStates[countrySelect.value] || 0);
        marketSelect.innerHTML = "<option>Choose market</option>";
      });
      stateSelect.addEventListener("change", () => {
        const selected = countries[countrySelect.value];
        const state = selected && selected.states[Number(stateSelect.value)];
        marketSelect.disabled = !state;
        marketSelect.innerHTML = state
          ? '<option value="">Choose market</option>' +
            state.markets
              .split(", ")
              .map((market) => "<option>" + market + "</option>")
              .join("")
          : "<option>Choose market</option>";
      });
      countrySelect.dispatchEvent(new Event("change"));
      stateSelect.dispatchEvent(new Event("change"));
    });
    document.querySelectorAll("[data-open-report]").forEach((button) =>
      button.addEventListener("click", (event) => {
        event.preventDefault();
        openReportModal();
      }),
    );
    document
      .querySelectorAll("[data-close-modal]")
      .forEach((button) => button.addEventListener("click", closeReportModal));
    const modal = document.querySelector("[data-modal]");
    if (modal)
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeReportModal();
      });
    document.querySelectorAll("[data-report-form]").forEach((form) =>
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const reports = JSON.parse(
          localStorage.getItem("priceTruthReports") || "[]",
        );
        const reportCountryKey = data.country || currentCountryKey();
        const reportCountry = countries[reportCountryKey] || country;
        reports.push({
          ...data,
          countryKey: reportCountryKey,
          country: reportCountry.code,
          currency: reportCountry.code,
          countryName: reportCountry.name,
          state: data.state || country.area,
          createdAt: new Date().toISOString(),
        });
        const countrySelect = form.querySelector("[data-report-country]");
        const stateSelect = form.querySelector("[data-report-state]");
        if (countrySelect)
          reports[reports.length - 1].countryName =
            countrySelect.options[countrySelect.selectedIndex]?.textContent ||
            "";
        if (stateSelect)
          reports[reports.length - 1].state =
            stateSelect.options[stateSelect.selectedIndex]?.textContent || "";
        localStorage.setItem("priceTruthReports", JSON.stringify(reports));
        form.hidden = true;
        const success = form.parentElement.querySelector(".success-state");
        if (success) {
          success.hidden = false;
          const area = success.querySelector("[data-success-area]");
          if (area) {
            const selectedMarket = form.querySelector("[data-market-select]");
            area.textContent =
              selectedMarket && selectedMarket.value
                ? selectedMarket.value
                : country.area;
          }
        }
      }),
    );
    document.querySelectorAll(".upload-zone input").forEach((input) =>
      input.addEventListener("change", () => {
        const zone = input.closest(".upload-zone");
        if (input.files && input.files[0])
          zone.querySelector("b").textContent =
            "Receipt ready — AI found a match";
      }),
    );
  }

  function setupSearchAndFilters() {
    document.querySelectorAll("[data-search-form]").forEach((form) =>
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = form.querySelector("input").value.trim() || "rice";
        window.location.href = "results.html?item=" + encodeURIComponent(query);
      }),
    );
    document.querySelectorAll("[data-filter]").forEach((button) =>
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        document
          .querySelectorAll(".filter-chip")
          .forEach((chip) => chip.classList.toggle("active", chip === button));
        document.querySelectorAll(".category-group").forEach((group) => {
          group.style.display =
            filter === "all" || group.dataset.category === filter ? "" : "none";
        });
      }),
    );
  }

  function setupResultsPage() {
    if (document.body.dataset.page !== "results") return;
    const query =
      new URLSearchParams(window.location.search).get("item") || "rice";
    const item = query.trim().replace(/\s+/g, " ");
    const title = item.charAt(0).toUpperCase() + item.slice(1);
    document.title = title + " prices in " + country.area + " — Price Truth";
    const parsed = parsePriceQuestion(item, null);
    const reports = findRelevantReports(parsed);
    const summary = summarizeReports(reports);
    const low = summary?.low || 0;
    const high = summary?.high || 0;
    const average = summary?.average || 0;
    const heading = document.querySelector(".result-top h1");
    const crumb = document.querySelector(".breadcrumbs span:last-child");
    const intro = document.querySelector(".result-top .eyebrow");
    const description = document.querySelector(".result-top .muted");
    if (heading) heading.innerHTML = title + " <span>· market item</span>";
    if (crumb) crumb.textContent = title;
    if (intro)
      intro.innerHTML =
        "COMMUNITY PRICES · " +
        country.area.toUpperCase() +
        ' <span class="live-dot"></span>';
    if (description)
      description.textContent =
        "The going rate for " +
        title.toLowerCase() +
        " in " +
        country.area +
        " right now";
    const chartImage = document.querySelector(".chart svg");
    if (chartImage)
      chartImage.setAttribute("aria-label", title + " price trend");
    if (!summary) {
      const chartTitle = document.querySelector(".chart-panel h2");
      if (chartTitle) chartTitle.textContent = "Waiting for matching reports";
      if (chartImage) chartImage.hidden = true;
      document.querySelectorAll(".chart-y, .chart-x").forEach((labels) => {
        labels.hidden = true;
      });
      const chartPanel = document.querySelector(".chart-panel");
      if (chartPanel) chartPanel.hidden = true;
      const rangeVisual = document.querySelector(".range-visual");
      if (rangeVisual) rangeVisual.hidden = true;
    }
    const reportLink = document.querySelector(".reports-panel .text-link");
    if (reportLink)
      reportLink.textContent = summary
        ? "See all " + summary.count + " →"
        : "No matching reports yet";
    const suggestion = document.querySelector(".suggestion");
    if (suggestion)
      suggestion.firstChild.textContent =
        "Is " + formatMoney(80000) + " fair for " + title.toLowerCase() + "? ";
    const marker = document.querySelector(".marker-label");
    if (marker) marker.textContent = formatMoney(average);
    const trackLabels = document.querySelectorAll(".track-labels span");
    if (trackLabels.length >= 2) {
      trackLabels[0].textContent = formatMoney(low * 0.85);
      trackLabels[1].textContent = formatMoney(high * 1.15);
    }
    const range = document.querySelector(".range-price");
    if (range)
      range.innerHTML = summary
        ? formatMoney(low) + " <span>—</span> " + formatMoney(high)
        : "Not enough reports";
    const typical = document.querySelector(".range-card p strong");
    if (typical)
      typical.textContent = summary ? formatMoney(average) : "Awaiting reports";
    const rangeNote = document.querySelector(".range-card p");
    if (rangeNote && summary)
      rangeNote.insertAdjacentText(
        "afterbegin",
        summary.count +
          " matching report" +
          (summary.count === 1 ? "" : "s") +
          ". ",
      );
    if (rangeNote && !summary)
      rangeNote.textContent =
        "No matching local reports yet. Add the first report for this item and quantity.";
    const reportCount = document.querySelector(".report-count strong");
    const reportCountLabel = document.querySelector(".report-count span");
    if (reportCount)
      reportCount.textContent = summary ? String(summary.count) : "0";
    if (reportCountLabel)
      reportCountLabel.innerHTML = "matching reports<br>in this area";
    const reportList = document.querySelector(".report-list");
    if (reportList) {
      reportList.innerHTML = "";
      reports.slice(0, 8).forEach((report) => {
        const row = document.createElement("div");
        row.className = "report-row";
        const avatar = document.createElement("span");
        avatar.className = "avatar avatar-green";
        avatar.textContent = "P";
        const details = document.createElement("div");
        const price = document.createElement("strong");
        price.textContent = formatMoney(Number(report.price));
        const location = document.createElement("span");
        location.textContent =
          (report.area || country.area) + " · " + (report.date || "recently");
        details.append(price, location);
        const verified = document.createElement("span");
        verified.className = "verified";
        verified.textContent = "Community report";
        row.append(avatar, details, verified);
        reportList.appendChild(row);
      });
      if (!reports.length) {
        const empty = document.createElement("p");
        empty.className = "muted";
        empty.textContent =
          "No saved community reports match this item and quantity yet.";
        reportList.appendChild(empty);
      }
    }
    const back = document.querySelector(".breadcrumbs");
    if (back && !back.querySelector(".back-to-search"))
      back.insertAdjacentHTML(
        "afterbegin",
        '<a class="back-to-search" href="index.html">← Search prices</a><span>/</span>',
      );
  }
  function setupResultsAI() {
    const aiForm = document.querySelector(".ai-form");
    const suggestion = document.querySelector(".suggestion");
    const aiInput = aiForm && aiForm.querySelector("input");
    if (aiInput)
      aiInput.placeholder = "Try “Is " + formatMoney(80000) + " fair?”";
    let conversation = null;
    const askAI = async (question) => {
      const answer = document.querySelector(".ai-answer");
      if (!answer) return;
      const parsed = parsePriceQuestion(question, conversation);
      const reports = findRelevantReports(parsed);
      conversation = parsed;
      answer.textContent = "Checking matching Price Truth reports…";
      answer.hidden = false;
      if (!parsed.item || !parsed.measurement) {
        answer.textContent = buildFallbackAnswer(question, parsed, reports);
        return;
      }
      answer.textContent = buildFallbackAnswer(question, parsed, reports);
    };
    if (aiForm)
      aiForm.addEventListener("submit", (event) => {
        event.preventDefault();
        askAI(aiForm.querySelector("input").value || "");
      });
    if (suggestion)
      suggestion.addEventListener("click", () =>
        askAI(suggestion.textContent || "What is the current price?"),
      );
  }

  function setupLiveActivity() {
    const reports = [
      ["Ada", "Rice", "just reported", "A"],
      ["Kwame", "Tomatoes", "4 minutes ago", "K"],
      ["Mei", "Cement", "18 minutes ago", "M"],
      ["Sarah", "Vegetable oil", "yesterday", "S"],
      ["David", "Transport", "2 days ago", "D"],
      ["Fatima", "Rice", "this week", "F"],
    ];
    const target = document.querySelector("[data-live-report]");
    if (!target) return;
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % reports.length;
      const report = reports[index];
      target.textContent = report[0] + " · " + report[1] + " " + report[2];
      const avatar =
        target.closest(".live-report") &&
        target.closest(".live-report").querySelector(".avatar");
      if (avatar) avatar.textContent = report[3];
    }, 4200);
  }

  function setupReportsPage() {
    const list = document.querySelector("[data-community-list]");
    if (!list) return;
    const names = regionalItemNames(
      Object.keys(countries).find((key) => countries[key] === country) || "NG",
      countries[
        Object.keys(countries).find((key) => countries[key] === country) || "NG"
      ].states[
        selectedStates[
          Object.keys(countries).find((key) => countries[key] === country) ||
            "NG"
        ] || 0
      ],
    );
    const seed = names.map((name, index) => [
      name.charAt(0),
      "Local shopper",
      name,
      formatMoney(
        regionalPrice(
          index,
          Object.keys(countries).find((key) => countries[key] === country) ||
            "NG",
          0,
        ),
      ),
      country.area +
        " · " +
        (selectedMarkets[
          Object.keys(countries).find((key) => countries[key] === country) ||
            "NG"
        ] || "central market"),
      index + 2 + " minutes ago",
    ]);
    const saved = JSON.parse(localStorage.getItem("priceTruthReports") || "[]")
      .slice(-8)
      .reverse()
      .map((report) => [
        (report.item || "P").charAt(0).toUpperCase(),
        "You",
        report.item || "Item",
        formatMoney(Number(report.price) || 0),
        report.area || country.area,
        "just now",
      ]);
    [...saved, ...seed].forEach((report) => {
      const row = document.createElement("article");
      row.className = "community-report";
      row.innerHTML =
        '<span class="avatar avatar-green">' +
        report[0] +
        "</span><div><strong>" +
        report[1] +
        " reported <b>" +
        report[2] +
        "</b></strong><span>" +
        report[4] +
        " · " +
        report[5] +
        '</span></div><strong class="community-price">' +
        report[3] +
        "</strong>";
      list.appendChild(row);
    });
  }

  function setupChartRange() {
    const select = document.querySelector(".chart-panel select");
    const title = document.querySelector(".chart-panel h2");
    const chart = document.querySelector(".chart");
    if (!select || !title || !chart) return;
    const areaPath = chart.querySelector("#chart-area");
    const linePath = chart.querySelector("#chart-line");
    const yLabels = chart.querySelectorAll(".chart-y span");
    const xLabels = chart.querySelectorAll(".chart-x span");
    const ranges = {
      "Last 24 hours": {
        title: "A sharper move today",
        y: ["₦76k", "₦74k", "₦72k", "₦70k"],
        x: ["6am", "10am", "2pm", "6pm", "Now"],
        line: "M0,156 C70,149 85,111 150,126 S220,145 285,102 S365,116 430,77 S520,91 585,55 S660,66 700,42",
      },
      "Last 7 days": {
        title: "A busy week of prices",
        y: ["₦79k", "₦76k", "₦73k", "₦70k"],
        x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        line: "M0,136 C44,117 75,150 118,130 S175,91 230,113 S285,156 335,128 S395,83 450,102 S505,126 560,83 S625,93 700,58",
      },
      "Last 30 days": {
        title: "Steady, then a little kinder",
        y: ["₦78k", "₦74k", "₦70k", "₦66k"],
        x: ["May 8", "May 15", "May 22", "May 29", "Jun 5"],
        line: "M0,83 C50,78 70,110 120,102 S180,55 225,68 S280,120 330,105 S380,95 420,120 S480,104 520,128 S570,147 610,138 S660,130 700,145",
      },
      "Last 3 months": {
        title: "A longer view: prices cooling",
        y: ["₦82k", "₦78k", "₦74k", "₦68k"],
        x: ["Mar", "Apr", "May", "Jun"],
        line: "M0,48 C65,40 90,74 145,66 S210,86 270,80 S330,95 390,111 S450,99 505,132 S570,142 625,154 S675,147 700,169",
      },
    };
    const updateChart = () => {
      const data = ranges[select.value] || ranges["Last 30 days"];
      title.textContent = data.title;
      if (linePath) {
        linePath.setAttribute("d", data.line);
        linePath.setAttribute("data-range", select.value);
      }
      if (areaPath) {
        areaPath.setAttribute("d", data.line + " L700,230 L0,230Z");
        areaPath.setAttribute("data-range", select.value);
      }
      yLabels.forEach((label, index) => {
        label.textContent = data.y[index] || "";
      });
      xLabels.forEach((label, index) => {
        label.textContent = data.x[index] || "";
        label.style.display = data.x[index] ? "" : "none";
      });
    };
    updateChart();
    select.addEventListener("change", () => {
      updateChart();
    });
  }

  function setupChatbot() {
    const launcher = document.createElement("button");
    launcher.className = "chatbot-launcher";
    launcher.setAttribute("aria-label", "Open Price Truth AI chatbot");
    launcher.innerHTML =
      '<span class="chatbot-spark">✦</span><span>Ask Price Truth AI</span>';
    const panel = document.createElement("section");
    panel.className = "chatbot-panel";
    panel.innerHTML =
      '<div class="chatbot-header"><div><span class="chatbot-spark">✦</span><strong>Price Truth AI</strong><small>Community price guide</small></div><button class="panel-close">×</button></div><div class="chatbot-messages"><div class="chat-message bot">Hi! Ask me if a price sounds fair, or ask what people are paying nearby.</div></div><form class="chatbot-form"><input aria-label="Message Price Truth AI" placeholder="Try “Is ' +
      formatMoney(80000) +
      ' fair?”"><button aria-label="Send message">→</button></form><small class="chatbot-note">Uses saved Price Truth reports for the selected country and market.</small>';
    document.body.appendChild(launcher);
    document.body.appendChild(panel);
    const messages = panel.querySelector(".chatbot-messages");
    const form = panel.querySelector(".chatbot-form");
    let conversation = null;
    const addMessage = (text, type) => {
      const message = document.createElement("div");
      message.className = "chat-message " + type;
      message.textContent = text;
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    };
    launcher.addEventListener("click", () => {
      closeFloatingPanels(panel);
      panel.classList.toggle("is-open");
    });
    panel
      .querySelector(".panel-close")
      .addEventListener("click", () => panel.classList.remove("is-open"));
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      const question = input.value.trim();
      if (!question) return;
      addMessage(question, "user");
      input.value = "";
      addMessage("Reading your item and quantity...", "bot");
      const parsed = parsePriceQuestion(question, conversation);
      const reports = findRelevantReports(parsed);
      conversation = parsed;
      if (!parsed.item || !parsed.measurement) {
        addMessage(buildFallbackAnswer(question, parsed, reports), "bot");
        return;
      }
      addMessage(buildFallbackAnswer(question, parsed, reports), "bot");
    });
  }

  function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .brand-symbol{width:19px;height:19px;fill:none;stroke:#fff;stroke-width:1.5;stroke-linecap:round}.brand-symbol circle{fill:none}.country-backdrop{position:fixed;inset:0;z-index:28;background:#17362380}.country-menu{display:none;position:fixed;z-index:30;top:50%!important;left:50%;right:auto!important;transform:translate(-50%,-50%);width:min(420px,calc(100vw - 28px));max-height:min(720px,calc(100vh - 28px));overflow:hidden;background:#fffdf8;border:1px solid #dfe8dd;border-radius:10px;padding:16px;box-shadow:0 18px 45px #1d382833}      .country-menu.is-open{display:block}.location-modal-open{overflow:hidden}.country-list{max-height:270px;overflow-y:auto;padding-right:3px}.country-summary{margin-top:10px;padding:11px;border:1px solid #dfead9;border-radius:8px;background:#f3f8ef;color:#4f6655;font-size:10px;line-height:1.45}.summary-heading{display:flex;align-items:center;gap:9px}.summary-heading strong,.summary-heading small{display:block}.summary-heading strong{color:#214d32;font-size:13px}.summary-heading small{margin-top:2px;color:#7b8d7e}.summary-stats{display:flex;gap:8px;margin:10px 0}.summary-stats span{flex:1;padding:7px 8px;border-radius:6px;background:#fff;color:#718078}.summary-stats b{display:block;color:#286144;font:700 16px "Space Grotesk"}.country-summary p{margin:6px 0}.country-summary p b{color:#286144}.state-picker{max-height:250px;overflow-y:auto}.country-menu-title{display:flex;justify-content:space-between;align-items:center;font:700 15px "Space Grotesk"}.country-menu p{font-size:11px;color:#7a897e;margin:6px 0 12px}.panel-close{border:0;background:transparent;color:#748278;font-size:24px;line-height:1;cursor:pointer}.country-list{display:flex;flex-direction:column;gap:4px}.country-option{display:flex;align-items:center;gap:10px;width:100%;background:transparent;border:0;border-radius:6px;padding:9px;text-align:left;color:#203027;cursor:pointer}.country-option:hover,.country-option.selected{background:#edf5e8}.country-flag{font-size:22px}.country-option b,.country-option small{display:block}.country-option b{font-size:12px}.country-option small{color:#89968d;font-size:10px;margin-top:2px}.country-check{margin-left:auto;color:#337048;opacity:0}.country-option.selected .country-check{opacity:1}.state-picker{order:0;border-top:1px solid #e7ece5;margin-top:12px;padding-top:12px}.state-picker label{display:block;color:#68776d;font-size:10px;font-weight:700}.state-select{width:100%;height:36px;margin-top:6px;border:1px solid #d7e2d5;border-radius:5px;background:#fff;padding:0 8px;color:#203027}.market-details{background:#f0f6ec;border-radius:6px;margin-top:10px;padding:10px;color:#5d7161;font-size:10px;line-height:1.55}.market-details b{color:#286144;font-size:9px;text-transform:uppercase;letter-spacing:.06em}.mobile-drawer{position:fixed;z-index:29;top:0;right:0;bottom:0;width:min(350px,88vw);background:#fffdf8;box-shadow:-18px 0 45px #1734232e;transform:translateX(105%);transition:transform .25s ease;padding:25px;display:flex;flex-direction:column}.mobile-drawer.is-open{transform:translateX(0)}.drawer-head{display:flex;align-items:center;justify-content:space-between;padding-bottom:28px;border-bottom:1px solid #e7ece5}.mobile-drawer nav{display:grid;gap:5px;padding:22px 0}.mobile-drawer nav a{display:flex;gap:14px;align-items:center;border-radius:7px;padding:15px 10px;color:#286144;font-weight:700}.mobile-drawer nav a:hover{background:#edf5e8}.mobile-drawer nav a:first-child{background:#edf5e8}.mobile-drawer nav a span{color:#203027}.drawer-footer{margin-top:auto;border-top:1px solid #e7ece5;padding-top:18px;display:grid;gap:6px}.drawer-footer span,.drawer-footer small{font-size:10px;color:#89968d}.drawer-footer strong{font:700 18px "Space Grotesk"}.chatbot-launcher{position:fixed;z-index:25;right:24px;bottom:24px;border:1px solid #c8dcc3;border-radius:24px;background:#286144;color:#fff;padding:12px 16px;display:flex;gap:8px;align-items:center;box-shadow:0 8px 25px #183a2440;font-size:11px;font-weight:700;cursor:pointer}.chatbot-spark{color:#f4c77b;font-size:18px;margin-right:4px}.chatbot-panel{display:none;position:fixed;z-index:26;right:24px;bottom:80px;width:min(350px,calc(100vw - 32px));background:#fffdf8;border:1px solid #dae6d7;border-radius:12px;box-shadow:0 18px 50px #19352238;overflow:hidden}.chatbot-panel.is-open{display:block}.chatbot-header{display:flex;justify-content:space-between;align-items:start;padding:17px;background:#1f5136;color:#fff}.chatbot-header>div{display:grid;grid-template-columns:24px 1fr;align-items:center}.chatbot-header .chatbot-spark{grid-row:span 2}.chatbot-header strong{font:700 15px "Space Grotesk"}.chatbot-header small{color:#b9d3b8;font-size:9px}.chatbot-header .panel-close{color:#d5e5d5}.chatbot-messages{height:210px;overflow:auto;padding:15px;background:#f4f8f1;display:grid;align-content:start;gap:9px}.chat-message{max-width:88%;padding:10px 11px;border-radius:9px;font-size:11px;line-height:1.45}.chat-message.bot{background:#fff;border:1px solid #e0e9dd;color:#506457}.chat-message.user{background:#dcebd5;color:#23462d;margin-left:auto}.chatbot-form{display:flex;height:45px;margin:12px;border:1px solid #d6e2d4;border-radius:6px;background:#fff}.chatbot-form input{min-width:0;flex:1;border:0;outline:0;padding:0 11px;background:transparent;font-size:11px}.chatbot-form button{width:43px;border:0;background:#286144;color:#fff;font-size:18px}.chatbot-note{display:block;color:#9aa89d;font-size:9px;padding:0 14px 13px}@media(max-width:700px){.location-modal-open{overflow:hidden}.chatbot-launcher{right:16px;bottom:16px}.chatbot-panel{right:16px;bottom:70px}.country-menu{top:50%!important;left:50%!important;right:auto!important;transform:translate(-50%,-50%);width:min(420px,calc(100vw - 28px))}.desktop-nav{display:none}.menu-button{display:block}}`;
    document.head.appendChild(style);
    const locationControlStyle = document.createElement("style");
    locationControlStyle.textContent =
      ".country-menu{width:min(480px,calc(100vw - 24px))!important;max-height:calc(100vh - 24px)!important;overflow-y:auto!important;overflow-x:hidden!important}.country-list{max-height:150px!important;overflow-y:auto!important}.state-picker{display:block!important;visibility:visible!important;max-height:none!important;overflow:visible!important;padding:14px 0 5px!important}.state-picker[hidden]{display:none!important}.state-picker label{display:block!important;font-size:12px!important;margin-bottom:14px!important}.state-select,.market-select{display:block!important;width:100%!important;height:48px!important;min-height:48px!important;margin-top:8px!important;padding:0 13px!important;border:1px solid #b8cbb5!important;border-radius:8px!important;background:#fff!important;color:#203027!important;font-size:14px!important;line-height:48px!important}.market-details{font-size:11px!important;padding:12px!important}.location-confirm{display:block!important;width:100%!important;margin-top:14px!important;padding:13px 16px!important;border-radius:8px!important;background:#286144!important;color:#fff!important;font-size:14px!important;font-weight:700!important;text-align:center!important;box-shadow:0 4px 12px #28614430!important}.location-confirm:hover{background:#1f5136!important}";
    document.head.appendChild(locationControlStyle);
  }

  addStyles();
  setupCountryPicker();
  setupHamburger();
  setupReportModal();
  setupSearchAndFilters();
  setupResultsPage();
  setupResultsAI();
  setupLiveActivity();
  setupReportsPage();
  setupChartRange();
  setupChatbot();
  applyCountry();
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(
        ".country-menu,.area-pill,.mobile-drawer,.menu-button,.chatbot-panel,.chatbot-launcher",
      )
    )
      closeFloatingPanels();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeReportModal();
      closeFloatingPanels();
    }
  });
})();
