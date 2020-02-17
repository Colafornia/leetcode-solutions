const fs = require('fs');

let solutionFiles = [];
fs.readdir('./javascript/', (err, files) => {
  if (err) throw err;
  const content = `---
home: true
heroImage: https://i.loli.net/2018/09/28/5bae311eae1a0.png
description: I've solved ${files.length} / 1138 problems
footer: MIT Licensed | Copyright © 2018-present Colafornia
---`
  solutionFiles = files;
  fs.readdir('./python/', (err, pyFiles) => {
    if (err) throw err;
    solutionFiles = solutionFiles.concat(pyFiles)
    genHomeContent(content);
  })
})

const genHomeContent = (content) => {
  fs.writeFile('docs/README.md', content, (err) => {
    if (err) throw err;
    console.log('docs/README.md has been saved!');
    genSolutionDocs();
  })
}

const genSolutionDocs = () => {
  solutionFiles.forEach((fileName) => {
    const content = `# ${fileName.slice(0, -3)}

<<< @/${fileName.slice(-2) === 'py' ? 'python' : 'javascript'}/${fileName}{0}`
    fs.writeFile(`docs/source/${fileName + '.md'}`, content, (err) => {
      if (err) throw err;
      console.log(`${fileName + '.md'} has been saved!`);
    })
  })
}
