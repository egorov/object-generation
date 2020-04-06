describe('module export tests', () => {

  const make_object = require('../index').make_object;
  const factories = require('../index').value_factories;
  const expected = {
    date: require('../src/make_date'),
    email: require('../src/make_email'),
    'from set of': require('../src/choose_from_set'),
    number: require('../src/make_number'),
    password: require('../src/make_password'),
    phone: require('../src/make_phone'),
    string: require('../src/make_string'),
    url: require('../src/make_url')
  };

  
  it('should contain methods', () => {

    for(const name in factories){
      
      expect(expected[name]).toEqual(factories[name]);
    }
  });

  it('should make an object', () => {

    const metadata = {
      user_name: {
        type: 'string',
        min_length: 2,
        max_length: 9
      },
      email: {
        type: 'email',
        domain: 'insta.gram'
      },
      birth_date: {
        type: 'date'        
      },
      mobile: {
        type: 'phone'
      },
      web_page: {
        type: 'url'
      },
      password: {
        type: 'password'
      },
      id: {
        type: 'number'
      },
      gender: {
        type: 'from set of',
        values: [
          'Male',
          'Female'
        ]
      }
    };
    
    const value = make_object(metadata);
      
    expect(typeof value.user_name).toEqual('string');
    expect(value.user_name.length >= metadata.user_name.min_length).toBeTruthy();
    expect(value.user_name.length <= metadata.user_name.max_length).toBeTruthy();
        
    expect(typeof value.email).toEqual('string');
    expect(value.email.length >= 3).toBeTruthy();
    expect(value.email.includes('@')).toBeTruthy();
    expect(value.email.indexOf('@') < value.email.length - 1).toBeTruthy();
    expect(value.email.indexOf('@') > 0).toBeTruthy();
    expect(value.email.endsWith(metadata.email.domain)).toBeTruthy();

    expect(value.birth_date instanceof Date).toBeTruthy();
    expect(value.birth_date >= new Date(1900, 1, 1)).toBeTruthy();
    expect(value.birth_date <= new Date(Date.now())).toBeTruthy();

    expect(typeof value.web_page).toEqual('string');
    expect(value.web_page.length >= 10).toBeTruthy();
    expect(value.web_page.startsWith('https://')).toBeTruthy();

    expect(typeof value.mobile).toEqual('string');
    expect(value.mobile.length >= 15).toBeTruthy();    
    expect(value.mobile.startsWith('+')).toBeTruthy();

    expect(typeof value.id).toEqual('number');
    expect(value.id >= 0).toBeTruthy();    
    expect(value.id <= 1000).toBeTruthy();

    expect(typeof value.gender).toEqual('string');
    expect(metadata.gender.values.includes(value.gender)).toBeTruthy();    
  });
});