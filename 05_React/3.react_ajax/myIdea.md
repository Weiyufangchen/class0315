## 搜索项目设计思路：
1. 拆分组件
* App 主组件
* Search 搜索组件（负责搜索用户名，并将其保存为App组件上的状态）
* List 展示组件（获取App主组件上的用户名，根据用户名发送ajax请求，并将数据展示）
2. 数据存放
* App状态上保存搜索的用户名
* List 状态上保存4种显示状态
  * firstView 第一种，默认开始显示的内容
  * loading 点击事件触发，用户名更新之后，拿到这个用户名，显示loading内容，发送ajax请求，分请求成功和失败两种：
    * users 成功获取到的用户数据，（模糊查找会有多个用户数据）
    * error 失败，获取失败的问题，并显示提前设置的error内容。
3. 细节：
* Search搜索searchName --> App上更新searchName --> List获取searchName，发送ajax请求
* List四种状态：(**_四种状态只能显示一种_**)
  * 初始状态 firstView为true
  * loading状态 search点击，List发送请求之前
    * 成功返回 users状态展示
    * 失败返回 error错误原因
