//Get competition list

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.sportradar.com/tabletennis/trial/v2/en/competitions.json?api_key=nmmkpv4w8b7k2n5p2k3ewrgh', true)

request.onload = function () {
    console.log(this.response)

    //Visualization
    const article = document.getElementById('WTT');

    //Add text
    const text = document.createTextNode("World Table Tennis Events:");
    article.appendChild(text);

    const container = document.createElement("div");
    container.setAttribute('class', 'container');

    article.appendChild(container);

    //Access the JSON here
    var data = JSON.parse(this.response);

    data.competitions.slice(0,9).forEach(competition => {
        // Log each competitions's name
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        h1.textContent = competition.name

        // Append the cards to the container element
        container.appendChild(card)

        // Each card will contain an h1 and a p
        card.appendChild(h1)
    })
}

// Send request
request.send()





//Get world ranking list

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://developer.sportradar.com/files/Table_Tennis_Rankings_v2_Example.xml', true)

request.onload = function () {
    console.log(this.response)

    //Visualization
    const article = document.getElementById('WTT');

    //Add text
    const text = document.createTextNode("World Table Tennis Ranking:");
    article.appendChild(text);

    const container = document.createElement("div");
    container.setAttribute('class', 'container');

    article.appendChild(container);

    //Access the XML here
    var data = this.response

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data,"text/xml");



	for (let i = 0; i < 10; i++) {
		const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        const a = i + 1;
        const b = xmlDoc.getElementsByTagName("competitor")[i].getAttribute("name");
        h1.textContent = a + ". "+ b;

        // Append the cards to the container element
        container.appendChild(card)

        // Each card will contain an h1 and a p
        card.appendChild(h1)
	}

}

// Send request
request.send()






