# edan

将传递给Application/Agent的options，同时也保存为`appInfo.options`和`app.config.appOptions`。

## 使用

使用方法如下：
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
