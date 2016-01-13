
drop table if exists user_data;
create table user_data( 
        id serial primary key, 
        user_name char(255) not null, 
        password char(255)
    );

drop table if exists char_info;
create table char_info(
        id serial primary key,
        player_id integer not null,
        char_name char(255) not null
    );

alter table char_info add column data text default '';