// https://eth-goerli.g.alchemy.com/v2/6s7sAK_tJ0uLHVQc0E3c4GvP59Mjw2wu

require('@nomiclabs/hardhat-waffle');

module.exports = 
{
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-goerli.g.alchemy.com/v2/6s7sAK_tJ0uLHVQc0E3c4GvP59Mjw2wu',
      accounts: ['84820002b2a9d29a60dff67f0c01d0d71bd3843707ed7aaac7045f2177666533']
    }
  }
}