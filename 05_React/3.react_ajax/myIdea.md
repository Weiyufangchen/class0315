## 搜索项目设计思路：
1. 拆分组件
* App 主组件
* Search 搜索组件（负责搜索用户名，并将其保存为App组件上的状态）
* List 展示组件（获取App主组件上的用户名，根据用户名发送ajax请求，并将数据展示）
2. 数据存放
* App状态上保存搜索的用户名
3. 细节：
* Search搜索searchName --> App上更新searchName --> List获取searchName，发送ajax请求
* List四种状态：
  * 初始状态 firstView为true
  * loading状态 search点击，List发送请求之前
    * 成功返回 users状态展示
    * 失败返回 error错误原因
