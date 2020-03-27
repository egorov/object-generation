describe('choose from set', () => {

  const choose = require('../src/choose_from_set');
  const values = [
    'Male',
    'Female',
    'Cat',
    'Dog',
    'Red',
    'Blue'
  ];

  it('should return random value from array', () => {

    for(let index = 0; index < 10; index += 1) {

      const value = choose(values);

      expect(values.includes(value)).toBeTruthy();
    }
  });

  it('should throw if array is empty', () => {

    const method = () => {
      choose([]);
    };

    expect(method).toThrow(new Error('values array must not be empty!'));
  });

  it('should throw if argument is not array', () => {

    const methods = [
      () => choose(1),
      () => choose('values'),
      () => choose({}),
      () => choose(true),
      () => choose(89.99)
    ];

    methods.forEach((method) => {
      expect(method).toThrow(new Error('values argument must be an array!'));
    });
  });
});