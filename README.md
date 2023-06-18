1. 启动命令，-c参数明确指定使用的配置文件
sudo nginx -c /home/sky/Workspace/nginx/nginx.conf

2. 默认情况下，master进程的启动用户是root，worker进程的启动用户是nobody，所以资源路径要确保nobody用户有权限访问才能正常显示页面，否则会报错403。

3. 停止nginx服务
sudo nginx -s stop   立刻停止服务
sudo nginx -s quit   优雅停止服务