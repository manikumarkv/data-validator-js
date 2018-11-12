import { Greeter, Transaction, Customer } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
test('My transctions', () => {
  const cust = new Customer("1","mani", "kumar", 9700911)
  let trans = new Transaction("1",[],100, "card",0, "11", cust, new Date())
  expect(trans.id).toBe('1');
});