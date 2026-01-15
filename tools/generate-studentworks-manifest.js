// tools/generate-studentworks-manifest.js
// Run: node tools/generate-studentworks-manifest.js

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "assets", "studentworks");
const OUT = path.resolve(ROOT, "manifest.json");

// Only images
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function isDir(p){ return fs.existsSync(p) && fs.statSync(p).isDirectory(); }
function isFile(p){ return fs.existsSync(p) && fs.statSync(p).isFile(); }

function listFolders(root){
    return fs.readdirSync(root)
        .map(name => ({ name, full: path.join(root, name) }))
        .filter(x => isDir(x.full))
        .map(x => x.name);
}

function listImages(folderPath, folderName){
    return fs.readdirSync(folderPath)
        .map(name => ({ name, full: path.join(folderPath, name) }))
        .filter(x => isFile(x.full))
        .filter(x => exts.has(path.extname(x.name).toLowerCase()))
        .map(x => ({
            name: x.name,
            src: `./assets/studentworks/${folderName}/${encodeURI(x.name)}`
        }));
}

function main(){
    if(!isDir(ROOT)){
        console.error("Missing folder:", ROOT);
        process.exit(1);
    }

    const folders = listFolders(ROOT);
    const data = { generatedAt: new Date().toISOString(), folders: {} };

    for(const f of folders){
        const fp = path.join(ROOT, f);
        data.folders[f] = listImages(fp, f);
    }

    fs.writeFileSync(OUT, JSON.stringify(data, null, 2), "utf8");
    console.log("Wrote:", OUT);
    console.log("Folders:", Object.keys(data.folders).length);
}

main();
