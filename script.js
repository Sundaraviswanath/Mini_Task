let data = fetch("https://restcountries.eu/rest/v2/all");

data
.then((res) =>{
    return res.json();
})
.then ((res) =>{
    let container = document.createElement("div");
    container.setAttribute ('class', 'container bg-secondary text-warning');
    container.innerHTML = "<h1>Rest Countries Data</h1>"
    container.style.textAlign = "center";

    let row = document.createElement("div");
    row.setAttribute("class","row");

    for (let i in res)
    {
        let c1=document.createElement("div");
        c1.setAttribute("class","col col-lg-4 col-sm-12");
        c1.style.padding = "10px";

        let card = document.createElement("div");
        card.setAttribute("class","card");
        card.style.border = "1px dashed black";

        let flagImg = document.createElement("img");
        flagImg. setAttribute("src" ,  res[i].flag);

        let cardBody = document.createElement ("div");
        cardBody.setAttribute("class", "card_body");

        let conName = document.createElement("h3");
        conName.setAttribute("class","name text-warning bg-primary");
        conName.innerHTML = res[i].name;
        conName.style.margin = "10px";

        let conReg = document.createElement("h4");
        conReg.setAttribute("class","region text-dark");
        conReg.innerHTML = res[i].region;

        let conCapital = document.createElement("h4");
        conCapital.setAttribute("class","capital text-dark");
        conCapital.innerHTML = res[i].capital;

        cardBody.append(conName,conReg,conCapital,);
        card.append(flagImg,cardBody);
        c1.append(card);
        row.append(c1);
        container.append(row);
        document.body.append(container);
    }

})
.catch((err) => {
    prompt(err);
});