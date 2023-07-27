### 一. 数据库命令
1. 显示所有数据库
  > show dbs
2. 切换到指定数据库，如果数据库不存在会自动创建数据库
  > use 库名
3. 显示当前所在的数据库
  > db
4. 删除当前数据库
  > db.dropDatabase()

### 二. 集合命令
1. 创建集合
  > db.createCollection('集合名称')
2. 显示当前数据库中所有集合
  > show collections
3. 删除某个集合
  > db.集合名称.drop()
4. 集合重命名
  > db.集合名.renameCollection('新集合名')

### 三. 文档命令
1. 插入文档
  > db.集合名.insert(文档对象)
2. 查询文档
  > db.集合名.find(查询条件对象)
  > db.users.find({ age: 18 })
3. 更新文档（默认全部更新，使用了新的对象替换旧的对象，需要加$set）
  > db.集合名.update(查询条件, 新的文档)
  > db.users.update({ age: 18 }, { hobby: 'eat' })
  > db.users.update({ age: 18 }, { $set: {hobby: 'eat'} })
4. 删除文档
  > 