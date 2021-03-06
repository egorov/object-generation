describe('object factory', () => {

  const make = require('../src/object_factory');

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
        from_set: [
          'Male',
          'Female'
        ]
      }
    };
    
    const value = make(metadata);
      
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

    expect(typeof value.password).toEqual('string');
    expect(value.password.length >= 8).toBeTruthy();    
    expect(value.password.length <= 16).toBeTruthy();    

    expect(typeof value.id).toEqual('number');
    expect(value.id >= 0).toBeTruthy();    
    expect(value.id <= 1000).toBeTruthy();

    expect(typeof value.gender).toEqual('string');
    expect(metadata.gender.from_set.includes(value.gender)).toBeTruthy();    
  });
  
  it('should make an object', () => {

    const metadata = {
      first_name: {
        type: 'string',
        min_length: 2,
        max_length: 9
      },
      last_name: {
        type: 'string',
        min_length: 2,
        max_length: 9
      },
      age: {
        type: 'number',
        min: 18,
        max: 99
      }
    };
    
    const value = make(metadata);
      
    expect(typeof value.first_name).toEqual('string');
    expect(value.first_name.length >= metadata.first_name.min_length).toBeTruthy();
    expect(value.first_name.length <= metadata.first_name.max_length).toBeTruthy();
    
    
    expect(typeof value.last_name).toEqual('string');
    expect(value.last_name.length >= metadata.last_name.min_length).toBeTruthy();
    expect(value.last_name.length <= metadata.last_name.max_length).toBeTruthy();
    
    expect(typeof value.age).toEqual('number');
    expect(value.age >= metadata.age.min).toBeTruthy();
    expect(value.age <= metadata.age.max).toBeTruthy();    
  });

  it('should return null for unknown metadata', () => {

    const metadata = {
      engbood: {
        type: 'dilgboldl'
      }
    };

    expect(make(metadata)).toBeNull();
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
      }
    };
    
    const value = make(metadata);
      
    expect(typeof value.user_name).toEqual('string');
    expect(value.user_name.length >= metadata.user_name.min_length).toBeTruthy();
    expect(value.user_name.length <= metadata.user_name.max_length).toBeTruthy();
        
    expect(typeof value.email).toEqual('string');
    expect(value.email.length >= 3).toBeTruthy();
    expect(value.email.includes('@')).toBeTruthy();
    expect(value.email.indexOf('@') < value.email.length - 1).toBeTruthy();
    expect(value.email.indexOf('@') > 0).toBeTruthy();
    expect(value.email.endsWith(metadata.email.domain)).toBeTruthy();
  });

  it('should not make value for unknown field metadata', () => {

    const metadata = {
      first_name: {
        type: 'string'
      },
      engbood: {
        type: 'dilgboldl'
      }
    };

    const value = make(metadata);

    expect(typeof value.first_name).toEqual('string');
    expect(value.first_name.length >= 3).toBeTruthy();
    expect(value.first_name.length <= 9).toBeTruthy();

    expect(value['engbood']).toBeUndefined();
  });
});