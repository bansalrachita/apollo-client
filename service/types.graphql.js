module.exports = `type Query {
    rates(currency: String!): [ExchangeRate]
  } type ExchangeRate {
currency: String
rate: String
name: String}`;