let favoriteMovie ="Ultimate Versus";
let movieBudget= 10000;
let movieForChildren= false;
let mainActor ="Tak Sakaguchi";
let lengthMinutes= 120;
let movieSummary= "Martial arts, zombie-action movie about demons trying to unlock the ultimate power by battling in a forest that has access to a portal";

let favoriteGame = "Metal Gear Solid 3";
let gameBudget ="unknown";
let gameForChildren =false;
let gameDirector = "Hideo Kojima";
let gameSummary ="a stealth-action game, with a military setting about a special soldier trying to stop an evil organization";

let favoriteManga = "Berserk";
let mangaCreator ="Kentaro Miura";
let mangaSales =55e7;
let mangaVolumes =41;

let favoriteComic ="Spawn";
let comicCreator = "Todd McFarlane";
let comicSales =50000000;

let favoriteAnimeMove ="Vampire Hunter D: Bloodlust";
let animeForChildren = false;
let animeDirector ="Yoshiaki Kawajiri";
document.writeln("My favorite Movie is "+favoriteMovie);
document.write("<br>");
document.writeln("It has a budget of $"+movieBudget+ " dollars");
document.write("<br>");
if (movieForChildren==true){
    document.write("it is for children");
}
else if (movieForChildren==false) {document.write("it is not for children")
}
document.write("<br>");
document.writeln("The main Actor is "+mainActor);
document.write("<br>");
document.writeln("The movie is "+lengthMinutes+ " minutes long");
document.write("<br>");
document.writeln("Summary: "+movieSummary);
document.write("<br>");
document.write("<br>");
document.writeln("my favorite Game is "+favoriteGame);
document.write("<br>");
document.writeln("The game budget is "+gameBudget);
document.write("<br>");
if (gameForChildren==true){
    document.write("it is for children");
}
else if (gameForChildren==false) {document.write("it is not for children")
}
document.write("<br>");
document.writeln("The game director is "+gameDirector);
document.write("<br>");
document.writeln("Summary: "+gameSummary);
document.write("<br>");
document.write("<br>");
document.writeln("My favorite Manga is "+favoriteManga);
document.write("<br>");
document.writeln("The creator is "+mangaCreator);
document.write("<br>");
document.writeln("It has sold "+mangaSales+ " copies");
document.write("<br>");
document.writeln("There are "+mangaVolumes+ " volumes");
document.write("<br>");
document.write("<br>");
document.writeln("My favorite Comic is "+favoriteComic);
document.write("<br>");
document.writeln("The creator is "+comicCreator);
document.write("<br>");
document.writeln("It has sold "+comicSales+ " copies");
document.write("<br>");
document.write("<br>");
document.writeln("My favorite Anime movie is "+favoriteAnimeMove);
document.write("<br>");
document.writeln("The director is "+animeDirector);
document.write("<br>");
if (animeForChildren==true){
    document.write("it is for children");
}
else if (animeForChildren==false) {document.write("it is not for children")
}
