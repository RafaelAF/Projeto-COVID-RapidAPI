const btn = document.getElementById('search')
const paises = document.getElementById('countries')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd411e79046msh8c96b737df8f15ep1f6beajsn22d2f606e14a',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

const req = async ()=>{
    const countres = await fetch('https://covid-193.p.rapidapi.com/countries', options)
    const statistics = await fetch('https://covid-193.p.rapidapi.com/statistics', options)
    
    const jsonC = await countres.json()
    const jsonS = await statistics.json()
    

    jsonC.response.forEach(element => {
        
        let item = document.createElement('option')
        item.value = element
        item.innerHTML = element

        paises.appendChild(item)
        
       //console.log(element)
    });

    
    const statisticas = jsonS.response
    console.log(jsonC)
    
}

req()


btn.addEventListener('click', async ()=>{
    
        let selectElement = document.querySelector('#countries');
        let output = selectElement.options[selectElement.selectedIndex].value;
        const history = await fetch(`https://covid-193.p.rapidapi.com/history?country=${output}&day=2020-06-02`, options)
        const jsonH = await history.json()

        let card = document.createElement('div')
        card.classList.add('card-body')
        console.log(jsonH);
    
})