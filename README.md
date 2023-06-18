1. 启动命令，-c参数明确指定使用的配置文件
sudo nginx -c /home/sky/Workspace/nginx/nginx.conf

2. 默认情况下，master进程的启动用户是root，worker进程的启动用户是nobody，所以资源路径要确保nobody用户有权限访问才能正常显示页面，否则会报错403。

3. 停止nginx服务
sudo nginx -s stop   立刻停止服务
sudo nginx -s quit   优雅停止服务

4. 重新加载配置文件
sudo nginx -s reload

5. upstream中还支持down和backup两个关键字。
   down表示node下线，即不会将请求转发给被标记成down的node。
   backup表示正常情况不会使用那个node，只有其它全部node都挂了之后，才会使用被标记为backup的node
upstream service1 {
    server localhost:8001 weight=3 down;
    server localhost:8002 weight=1;
    server localhost:8003 weight=1 backup;
}