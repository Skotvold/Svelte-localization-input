import countryCodes from "country-codes-list"
function getCountriesDebug(){
    const myCountryCodesObject = countryCodes.customList('countryCode', '[{countryCode}] {countryNameEn}: +{countryCallingCode}');
    console.log(myCountryCodesObject);

    const CountryCallingCodes = countryCodes.customList('countryCallingCode', '{countryCode}')
    console.log(CountryCallingCodes['47']); // "NO"
    console.log(CountryCallingCodes['46']); // "SE"
     // Translate country code to different country names
     console.log("Norge (Alpha-2) => " + countries.getName("NO", "no"));
     console.log("Russland (Alpha-2) => " + countries.getName("RU", "no"));
     console.log("Ryssland (Alpha-3) => " + countries.getName("RU", "de"));
     console.log("USA (Numeric) => " + countries.getName("840", "no"));
     console.log("Ukraina (Numeric) => " + countries.getName("UA", "no"));

     // Print by having a valid phone number with phone npm pack
     console.log("Sverige (Numeric) => " + countries.getName(phone('+46771793336').countryIso2, "no"));

     englishName = countries.getName(CountryCallingCodes['47'], "en"); 		// Norway
     norwegianName = countries.getName(CountryCallingCodes['47'], "de"); 	// Norge
}