import { createPresentationBox} from './structure.js'

export function loadPresentations(json_data) {

    const content_block = document.getElementsByClassName("section");
    const sections = new Map();
    let idx = 0
    let presentations = json_data["presentations"];

    for (let i = 0; i < presentations.length; i++) {

        if (!sections.has(presentations[i].section)) {
            sections.set(presentations[i].section, idx)
            idx++
        }
        let section_num = presentations[i].section;

        let container_idx = sections.get(section_num);
        let container = content_block[container_idx]
        createPresentationBox(presentations[i], container, false);
    }
}
