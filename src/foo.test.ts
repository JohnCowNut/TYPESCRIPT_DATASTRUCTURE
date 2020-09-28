import { addOne } from './foo.ts';


test('basic', () => {
  expect("Hello").toBe("Hello");
  expect(addOne(1)).toEqual(2)
});


