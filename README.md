# Инструменты генерации данных  

Для использования в тестовой среде.

## Генераторы значений базовых типов

Числа:  

```javascript
const make = require('object-generation').generators.make_number;

const settings = {
  min: -1,
  max: 3
};
const value = make(settings);

expect(typeof value).toEqual('number');
expect(value >= settings.min).toBeTruthy();
expect(value <= settings.max).toBeTruthy();
```

Строки:  

```javascript
const make = require('object-generation').generators.make_string;

const settings = {
  min_length: 2,
  max_length: 5
};
const value = make(settings);

expect(typeof value).toEqual('string');
expect(value.length >= settings.min).toBeTruthy();
expect(value.length <= settings.max).toBeTruthy();
```  

## Генератор объектов  

```javascript
const store = require('object-generation').makeStore();
const generate = require('object-generation').generate;

const action = {
  type: 'metadata',
  payload: {
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
  }
};

store.dispatch(action);

generate(store);

const value = store.getState().value;

expect(typeof value.first_name).toEqual('string');
expect(value.first_name.length >= action.payload.first_name.min_length).toBeTruthy();
expect(value.first_name.length <= action.payload.first_name.max_length).toBeTruthy();


expect(typeof value.last_name).toEqual('string');
expect(value.last_name.length >= action.payload.last_name.min_length).toBeTruthy();
expect(value.last_name.length <= action.payload.last_name.max_length).toBeTruthy();

expect(typeof value.age).toEqual('number');
expect(value.age >= action.payload.age.min).toBeTruthy();
expect(value.age <= action.payload.age.max).toBeTruthy();
```