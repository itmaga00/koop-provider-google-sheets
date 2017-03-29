const pkg = require('./package.json')
const provider = {
  name: 'googlesheets',
  hosts: true,
  Model: require('./sheets'),
  version: pkg.version,
  type: 'provider'
}

module.exports = provider
