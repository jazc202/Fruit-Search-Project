const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


const search = (str) => fruit.filter(f => f.toLowerCase().includes(str))

function searchHandler(e) {  //handles inputs
	let searched = e.currentTarget.value.toLowerCase() //converts the searched string to lowercase to allow case-insensitive searching
	let results = search(searched) 
	showSuggestions(results, searched)	
}

function showSuggestions(results, inputVal) { //puts suggestions in the dom
	suggestions.innerHTML = ''  //Clears the suggestions dropdown to avoid making a mess
	let bold = `<b>${inputVal}</b>` //A string literal to bold the input value
	results.forEach(val => {
		let str = val.replace(RegExp(inputVal, 'ig'), bold)  //Replaces the parts of the string matching the input value (case insensitive) with the bold string literal 

		let suggestion = document.createElement('li')
		suggestion.innerHTML = str //using innerHTML instead of innerText because there's HTML (the <b> tags)

		suggestions.appendChild(suggestion)
	})
}

function useSuggestion(e) { //add selected suggestion to search bar
	if(e.target.tagName === 'LI') {
		let suggestion = e.target.innerText    
		input.value = suggestion
	}
}

function hoverOver(e) {  //makes the background more transparent for a highlighting effect
	if(e.target.tagName === 'LI') {
		e.target.style.backgroundColor = "rgba(255, 255, 255, .1)"
	}
} //note: this could've been done with CSS, but the assignment said to use a function so that's what I'm doing.

function unHover (e) { //returns the background of the list item to normal
	if(e.target.tagName === 'LI') {
		e.target.style.backgroundColor = "rgba(255, 255, 255, .4)"
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', hoverOver)
suggestions.addEventListener('mouseout', unHover)