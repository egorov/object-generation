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
      values
    };

    for(let index = 0; index < 10; index += 1) {

      const value = choose(metadata);

      expect(metadata.values.includes(value)).toBeTruthy();
    }
  });

  it('should throw if values property is omitted', () => {

    const method = () => choose([]);

    expect(method).toThrow(new Error('metadata.values must be an array!'));
  });

  it('should throw if values property is omitted', () => {

    const method = () => choose({});

    expect(method).toThrow(new Error('metadata.values array is required!'));
  });

  it('should throw if metadata is null', () => {

    const method = () => {
      choose(null);
    };

    expect(method).toThrow(new Error('metadata must be an object!'));
  });  

  it('should throw if values is not array', () => {

    const methods = [
      () => choose({values: 1}),
      () => choose({values: 'values'}),
      () => choose({values: {}}),
      () => choose({values: true}),
      () => choose({values: 89.99})
    ];

    methods.forEach((method) => {
      expect(method).toThrow(new Error('metadata.values must be an array!'));
    });
  });
});