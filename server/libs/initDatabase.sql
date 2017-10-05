drop database novel;

create database novel;

use novel;

create table novel(
id int  not null  auto_increment,
type int not null ,
title varchar(60) ,
author varchar(60) ,
content_link varchar(60) ,
primary key(id) 
)engine=InnoDB
,charset=utf8;

insert into novel(id,type,title,author,content_link) values 
(1,1,'第一篇','第一篇作者','./novel/第一篇.txt'),
(2,2,'第二篇二','第二篇作者二','./novel/第二篇.txt'),
(3,3,'第三篇三','第三篇作者三','./novel/第三篇.txt'),
(4,4,'第四篇','第四篇作者四','./novel/第四篇.txt'),
(5,1,'第五篇','第五篇作者五','./novel/第五篇.txt'),
(6,1,'第六篇','第六篇作者六','./novel/第六篇.txt'),
(7,3,'缠绵思雨','佚名','./novel/缠绵思雨.txt'),
(8,3,'惊涛骇浪','佚名','./novel/惊涛骇浪.txt'),
(9,3,'浪淘沙●一轮逐江月','佚名','./novel/浪淘沙●一轮逐江月.txt'),
(10,3,'浪淘沙·坝上观洪流','佚名','./novel/浪淘沙·坝上观洪流.txt'),
(11,3,'水调歌头●对月饮长空','佚名','./novel/水调歌头●对月饮长空.txt'),
(12,3,'水调歌头·俱往矣','佚名','./novel/水调歌头·俱往矣.txt'),
(13,3,'同学情','佚名','./novel/同学情.txt'),
(14,3,'未来太遥远','佚名','./novel/未来太遥远.txt'),
(15,3,'寻访夕阳','佚名','./novel/寻访夕阳.txt'),
(16,3,'有酒','佚名','./novel/有酒.txt'),
(17,3,'虞美人●婷婷杜若幽谷张','佚名','./novel/虞美人●婷婷杜若幽谷张.txt');