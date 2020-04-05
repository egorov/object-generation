# Инструменты генерации данных  

Фабрика объектов, создаваемых на базе метаданных для использования в тестовой среде.  

```javascript  

const make = require('../src/object_factory');

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
```

Подробности, с описанием метаданных генерируемых значений в модульных тестах. В общем виде в файле [object_factory_spec.js](/tests/object_factory_spec.js). В деталях в файлах тестов фабрик конкретных типов данных.