# edan

Expose options passed to app as `appInfo.options` and `app.config.appOptions`.

## Usage

you can use options passed to an app like below:
```
// config/config.${env}.js
module.exports = appInfo => {
  const config = {};
  config.something = appInfo.options.something;
  return config;
}
```
or
```
// app.js
module.exports = app => {
  console.log(app.config.appOptions);
}
```

## License

[MIT](LICENSE)
