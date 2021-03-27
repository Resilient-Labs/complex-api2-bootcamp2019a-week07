

// Mark helped me with this

document.querySelector("button").addEventListener("click", getLyrics)
document.addEventListener("mouseup", useSelectionText)

function getLyrics() {

    let song = document.getElementById("song").value
    let artist = document.getElementById("artist").value

    fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=TibJStcK2J0m8rOQyhrNNWLXYDxSd3rvWRIyfS3Pwv3PvVu5aOD8dS5PaR5spEmI`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("#results").innerHTML = data.result.track.text.replace(/(\r\n|\r|\n)/g, "<br>")
        })

}
// got this from StackOverflow
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function useSelectionText() {
    let highlight = getSelectionText()
    if (highlight) {
        let udUrl = `https://api.urbandictionary.com/v0/define?term=${highlight}`
        console.log(udUrl)
        fetch(udUrl)
            .then(res => res.json())
            .then(data => {
                document.getElementById("urban").innerHTML = "";
                for(let i =0; i < data.list.length&& i < 3; i++){
                    console.log(data.list[0].definition)
                    const definition = document.createElement("li");
                    const textNode = document.createTextNode(data.list[i].definition);
                    definition.appendChild(textNode);
                    document.querySelector("ol").appendChild(definition)
                }
              
                

            })
    }
}







