import { createPresentationBox, readTextFile, createPanelDiscussionElement } from './structure.js'

/**
 * rearrange query result into a list of panel discussions, with a list of presentations
 * @param {*} query_result 
 */
function preprocess_data(query_result) {

    const mapped = new Map();
    const result = {
        ac: []
    };
    query_result.forEach(element => {

        const panel = element.panel;
        if (!mapped.has(panel)) {
            mapped.set(panel, {
                panel: panel,
                time: element.time,
                presentations: []
            });
        }

        mapped.get(panel).presentations.push({
            title: element.title,
            studentName: element.studentName,
            facultyAdvisor: element.facultyAdvisor,
            poster: element.poster,
        })
    });
    result.ac = Array.from(mapped.values());
    return JSON.stringify(result, null, 2)


}

function createPanels(panels) {

    const content_block = document.getElementsByClassName("acContent_Block");
    const panel_sections = new Map();
    let idx = 0

    panels.forEach(element => {

        if (!panel_sections.has(element.panel)) {
            panel_sections.set(element.panel, idx)
            idx++
        }
        const divElement = document.createElement('div');
        divElement.className = 'acContent';

        let section = panel_sections.get(element.panel)
        content_block[section].appendChild(divElement);

        let panel_element = createPanelDiscussionElement(element.time, element.panel);
        divElement.appendChild(panel_element);
        let presentations = element.presentations;
        const coldiv = panel_element.children[1]; //todo: do this better, not sure if cols will always be at [1]
        const cols = coldiv.children;

        for (let i = 0; i < presentations.length; ++i) {
            const container = i % 2 === 0 ? cols[0] : cols[1];
            
            let pres = createPresentationBox(presentations[i], container, false, false);
            let img = pres.querySelector('img');
            img.setAttribute('onclick', 'onClick(this)');

        }

    }
    );
}



//getJsonData("./js/ac/");

//let url = 'http://127.0.0.1:8080/api/major/acmpt';

//const response = await fetch(url);

//const json = await response.json();

let json_data = await readTextFile("./js/ac/ac.json");
let json = JSON.parse(json_data)
//let data = preprocess_data(json['ac']);
createPanels(json['ac'])


