import { readTextFile } from './structure.js'
import { loadPresentations } from './load_presentations.js';


let file_str = "./js/bio/bio-posters.json";
let json_data = await readTextFile(file_str);
let json = JSON.parse(json_data)
loadPresentations(json);
