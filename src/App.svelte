<script>
	// https://www.npmjs.com/package/i18n-iso-countries Translate countries. Sveinung wrote as help
	// https://www.npmjs.com/package/country-codes-list Country-code-list
	// https://www.npmjs.com/package/phone Full phone validation, requires entire number to be written.
	// Cuntry code list is better for lookups on countryCallingCode.

	import {phone} from "phone"
	import countries from "i18n-iso-countries"
	import en from "i18n-iso-countries/langs/en.json"
	import no from "i18n-iso-countries/langs/no.json"
	import sv from "i18n-iso-countries/langs/sv.json"
	import de from "i18n-iso-countries/langs/de.json"
	import nb from "i18n-iso-countries/langs/nb.json"
	import nn from "i18n-iso-countries/langs/nn.json"

	// Register languages
	countries.registerLocale(en);
	countries.registerLocale(no);
	countries.registerLocale(sv);
	countries.registerLocale(de);
	countries.registerLocale(nb);
	countries.registerLocale(nn);

	let countryList = countries.langs()
	let countrySelected = "en";
	let phoneNumber = "";
	$: name = GetCountryFromPhoneNumber();

	function GetCountryFromPhoneNumber(){
		let code = phone(phoneNumber)?.countryIso2;
		if(code){
			name = countries.getName(code,countrySelected);
		}else{
			name = "";
		}
	}
</script>

<main>
	<h1>Hello {name || 'None'}!</h1>
	<select bind:value={countrySelected} on:change="{GetCountryFromPhoneNumber}">
		{#each countryList as country}
			<option value={country}>
				{country}
			</option>
		{/each}
	</select>
	<input
		bind:value={phoneNumber}
		placeholder="enter your phoneNumber"
		on:input={GetCountryFromPhoneNumber}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
