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