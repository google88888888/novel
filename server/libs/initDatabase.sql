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
