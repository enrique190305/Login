Create database login_php;
use login_php;
create table accounts(
id int(11) not null auto_increment primary key,
username varchar(50) not null,
password varchar(255) not null,
email varchar(100) not null
);

insert into accounts(username,password,email) values('example_user','abc123','user@example.com');