create table homies (
user_id serial primary key,
name varchar(100),
email varchar,
profile_img text
);
create table homies_hash(
hash_id serial primary key,
hash text,
user_id int references homies(user_id)
);
create table posts (
post_id serial primary key,
title varchar(40),
img_url text,
content text,
likes int,
user_id int references homies(user_id)
);
--Dummy Data
insert into homies(name, email, profile_img)
values('jonathan', 'jon@than.co', 'https://1843magazine.static-economist.com/sites/default/files/styles/article-main-image-overlay/public/0212ILIN01-web.jpg'),
('josh', 'jmcc@nn.co', 'https://i.ytimg.com/vi/4B5kZ4MvdcE/maxresdefault.jpg');
insert into homies_hash(hash, user_id)
values('password', 5),
('s3cret', 6);
insert into posts(title, img_url, content, likes, user_id)
values('cute dog', 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*', 'puppy is a cute puppy', 0, 5),
('hot dogs', 'https://culinaryginger.com/wp-content/uploads/Mexican-Style-Hot-Dogs-picture-11-720x405.jpg', 'these hot dogs are mexican', 0, 6);