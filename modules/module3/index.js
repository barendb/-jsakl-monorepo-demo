const { TypesOfCats } = require('@jsakl/module2');
const { NotImplementedError } = require('@jsakl/module1');

function CatTester9000(cat) {
  if (!TypesOfCats[cat]) {
    throw new NotImplementedError({ info: { cat } });
  }

  console.log(`We know thiz cat ${cat} 😻`);
}

module.exports = {
  CatTester9000
};
