import { addOne } from './foo';


test('basic', () => {
  expect("Hello").toBe("Hello");
  expect(addOne(1)).toEqual(2)
});


