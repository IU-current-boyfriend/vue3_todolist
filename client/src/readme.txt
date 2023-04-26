现在项目层面上已经进行分层：MVC
但是在数据层面与视图层面上并没有详细的进行分层：
    现在需要的情况是：请求数据 => 修改本地数据 => 视图更改
    不需要的情况是：修改本地数据 => 请求数据 => 视图更改
    我们现在需要做的是封装hooks，让hooks成为请求数据（service层面）与视图更改（view层面）之间的桥梁，
    hooks相当于按照需求去调用service中的接口，然后提供接口，让试图进行更改。
    而试图更改，将会修改hooks中的响应式数据，当数据发生变化的时候，将重新调用service中的接口进行请求。

1. 出现的问题记录：前端传递参数的格式是application/x-www-form-urlencoded, 而并不是application/www-x-form-urlencoded,
否则后端收不到数据。

2. 在给input添加动态的completed类名时，使用change事件，而不是input事件。