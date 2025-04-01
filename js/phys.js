import {readTextFile } from './structure.js'
import { loadPresentations } from './load_presentations.js';


let file_str = "./js/phys+chem/chem + phys.json";
let json_data = await readTextFile(file_str);
let json = JSON.parse(json_data)
loadPresentations(json);
