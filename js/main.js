//House Moses help with first async code from Mugui
//This is called an iife - Immidiately invoked function exporession
//When you want to make asyncronous coide, you use async before function and await followed by fetch
(async function() {
  let userID = 1
  const jsonPlaceholder_url = "https://jsonplaceholder.typicode.com/" //until ".com/"
  //follow the same variable naming convention everytime (camel case)
  const response = await fetch(`${jsonPlaceholder_url}albums`)
  const result = await response.json()
  console.log(result) //Allows us to see the result information from the call in the console
  // document.getElementById("response").innerHTML = JSON.stringify(result)
  //THE DRY WAY- FANCY
  async function getDataFromJSON(route, id) {
    const apiResponse = await fetch(`${jsonPlaceholder_url}${route}/${id}`)
    const apiResult = await apiResponse.json()
    return apiResult
    //Create a Button that when the button is clicked it shows the API information for the route that we choose
    // document.getElementByID("apiResponse").innerHTML = JSON.stringify(result)
  }
  document.getElementById("makeAPICall").addEventListener("click", async () => { //with an anonomous function call (fat arrow notation)
    let user = (await getDataFromJSON("users", userID))
    userID++ // >=(userID.length) - WANT TO MAKE IT STOP AT THE LENGTH
    // document.getElementById("response").innerHTML = user //JSON.stringify(await getDataFromJSON("users")) //function call WITH PARAMETER
    document.getElementById("name").innerHTML = user.name
    document.getElementById("userName").innerHTML = user.username
    document.getElementById("phone").innerHTML = user["phone"]
    document.getElementById("email").innerHTML = user["email"]
    document.getElementById("company_catchPhrase").innerHTML = user["company"]["catchPhrase"]
    document.getElementById("company_name").innerHTML = user["company"]["name"]
    document.getElementById("website").innerHTML = user["website"]
    let firstName = user.name.split(' ')[0]
    const prefixes = ['Mr.', 'Mrs.', 'Ms.'];

    if (prefixes.includes(firstName)){
      firstName = user.name.split(' ')[1]
    }
    fetch(`https://www.behindthename.com/api/related.json?key=ab872171270&name=${firstName}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
            console.log(response)
            document.querySelector("#nickName").innerHTML = response.names
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
        });
  })
})()
// .catch(err => {
//   console.error(err.message);
// });
//1. Start with Asyncronnous Iife
//2. Console log to make sure its connected
//3. Create a variable for your api url
//4. Making a fetch to your api
//5. Turning what we get back from url into JSON
//6. get rid of console log- THROW UOP ALL THE JSON ON THE PAGE : USING JSON.stringify
//HOW TO SEE THE JSON IN THE DOM: DOCUMENT OBJECT MODEL AKA
// DOCUMENT.getElementById(PASS IN RESULT).INNERHTML = JSON.STRINGIFY//
//7.
//Make NEw function that will:
//call JSON placeholder api
//Return specified data from the JSON placeholder API based on a parameter passed into the function
