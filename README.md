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

6. 负载均衡策略：轮询、权重、ip_hash、url_hash、least_conn、fair。后四个几乎不会使用到。一般只会使用轮询。

7. Http refer header可以用于防盗链，所谓盗链就是其它网站引用了你的js、css或图片等静态资源。
   refer header记录了是哪个site要引用你的静态资源。
   nginx可以设置refer的白名单，规定只有在白名单中的site才能引用静态资源，否则返回403
