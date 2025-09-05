class Musica{
    constructor(idNome, autor, album, ano, genero){
        this.idNome = idNome 
        this.autor = autor
        this.album =album
        this.ano =ano
        this.genero =genero
    };
    reproduzir(){
        return `Reproduzindo ${this.idNome} de ${this.autor}`
    };
    exibirInfo(){
        return `Faixa: ${this.idNome} \n
            Artista: ${this.autor} \n
            Album: ${this.album} \n
            Ano de lançamento: ${this.ano} \n
            Gênero: ${this.genero}`
    };
};

    const musicaht = document.getElementById("music");
    const musicaht2 = document.getElementById("music1");

    const musica1 = new Musica('Saturday night', 'Misfits', 'Famous Monsters', 1999, 'Punk/Horror punk');

    function mostraHtml(){
        musicaht.textContent = musica1.reproduzir()
    } //window.onload= mostraHtml;
    
    function mostraHtml1(){
        musicaht2.textContent = musica1.exibirInfo()
    } //window.onload= mostraHtml1;
    mostraHtml();
    mostraHtml1();
    