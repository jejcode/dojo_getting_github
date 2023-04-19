async function get_api_data(form) {
    event.preventDefault() // keep page from resetting on form submitt
    var form_data = document.getElementsByClassName('form_data') // get all the checkboxes from the form
    var git_options = [] // empty list to hold checked box values
    for(var i =0; i < form_data.length; i++){ // iterate the list and add each selected item into git_options array
        if (form_data[i].checked) {
            git_options.push(form_data[i].id)
        }
    }
    var response = await fetch("https://api.github.com/users/jejcode") // get data from api
    var data = await response.json() // convert data to json object
    document.getElementById('avatar').innerHTML = `<img src="${data.avatar_url}" alt="profile picture">`
    document.getElementById('info').innerHTML = '' // clear info html section before repopulating it
    git_options.forEach(element => {
        
        document.getElementById('info').innerHTML += `<p>${element}: ${data[element]}</p>` // write html for each github element selcted
    })
}
