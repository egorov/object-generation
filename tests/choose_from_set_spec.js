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

    const metadata = {
      from_set: values
    };

    for(let index = 0; index < 10; index += 1) {

      const value = choose(metadata);

      expect(metadata.from_set.includes(value)).toBeTruthy();
    }
  });

  it('should throw if from_set property is omitted', () => {
    const methods = [
      () => choose([]),
      () => choose({})
    ];

    methods.forEach((method) => {
      expect(method).toThrow(new Error('metadata.from_set array is required!'));
    });
  });

  it('should throw if metadata is null', () => {

    const method = () => {
      choose(null);
    };

    expect(method).toThrow(new Error('metadata must be an object!'));
  });  

  it('should throw if from_set is not array', () => {

    const methods = [
      () => choose({from_set: 1}),
      () => choose({from_set: 'values'}),
      () => choose({from_set: {}}),
      () => choose({from_set: true}),
      () => choose({from_set: 89.99})
    ];

    methods.forEach((method) => {
      expect(method).toThrow(new Error('metadata.from_set must be an array!'));
    });
  });
});