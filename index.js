let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
var texto = ""
for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var a = 0; a < noun.length; a++) {
            console.log(pronoun[i] + " " + adj[j] + " " + noun[a] + ".com")
        }
    }
}