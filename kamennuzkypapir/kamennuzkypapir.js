let skore = JSON.parse(localStorage.getItem('skore')) || {
    vyhra: 0, 
    prohra: 0,
    remiza: 0
};    


function playGame(volbaHrac) {
    const volba = ['kamen', 'nuzky', 'papir'];
    const pocitacVolba = volba[Math.floor(Math.random() * volba.length)];

    let vysledek;
    if (volbaHrac === pocitacVolba) {
        vysledek = 'remiza';
    } else if (
        (volbaHrac === 'kamen' && pocitacVolba === 'nuzky') ||
        (volbaHrac === 'nuzky' && pocitacVolba === 'papir') ||
        (volbaHrac === 'papir' && pocitacVolba === 'kamen')
    ) {
        vysledek = 'vyhra';
    } else {
        vysledek = 'prohra';
    }

    skore[vysledek]++;
    localStorage.setItem('skore', JSON.stringify(skore));

    document.querySelector('.jak-jsi-dopadl').textContent = `Jak jsi dopadl: ${vysledek}`;
    document.querySelector('.co-bylo-tazeno').textContent = ` ----- Ty: ${volbaHrac} ----- Pocitac: ${pocitacVolba}`;
    document.querySelector('.vysledky').textContent = `Výsledky - Vyhra: ${skore.vyhra}, 
        Prohra: ${skore.prohra}, Remiza: ${skore.remiza}`;
}