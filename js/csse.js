import { createPresentationBox, loadTitleToSideNav, sideNavEvent, closeNav, readTextFile } from './structure.js'

window.sideNavEvent = sideNavEvent;
window.closeNav = closeNav;

function loadCSSEPresentations(json_data) {


    let presentations = json_data["presentations"];
    for (let i = 0; i < presentations.length; i++) {
        let room_num = presentations[i].section;
        let room_str = "room-" + room_num + "-presentations";
        let container = document.getElementById(room_str);
        createPresentationBox(presentations[i], container, true);

    }
}

//let url = 'http://127.0.0.1:8080/api/major/csse';
//const response = await fetch(url);
//const json = await response.json();

const NUM_ROOMS = 7

for (let i = 1; i<=NUM_ROOMS; i++){
    let path = "./js/csse/"
    let file_str = path + "csseRoom" + i + ".json";
    let json_data = await readTextFile(file_str);
    let json = JSON.parse(json_data)
    loadTitleToSideNav(json, 'presentations')
    loadCSSEPresentations(json);

}





