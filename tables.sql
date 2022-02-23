create table projects(
    title text not null, 
counter SERIAL primary key not null,
skills text not null, 
description text not null, 
image text not null,
link text not null);