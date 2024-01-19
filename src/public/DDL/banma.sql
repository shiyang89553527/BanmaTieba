/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2019/4/2 17:17:02                            */
/*==============================================================*/


drop table if exists BUYINFO;

drop table if exists HUIFU;

drop table if exists LIUYN;

drop table if exists NEWS;

drop table if exists ORDERFORM;

drop table if exists PINGJIA;

drop table if exists SHOPPING;

drop table if exists USERINFO;

drop table if exists WAREINFO;

drop table if exists WARETYPE;

/*==============================================================*/
/* Table: BUYINFO                                               */
/*==============================================================*/
create table BUYINFO
(
   BUY_ID               numeric(8,0) not null,
   BUID                 numeric(8,0),
   BWNAME               varchar(500),
   BOID                 varchar(50),
   COUNT                numeric(8,0),
   SUMPRICE             numeric(8,0),
   BPJ                  numeric(8,0),
   BWID                 numeric(8,0),
   primary key (BUY_ID)
);

/*==============================================================*/
/* Table: HUIFU                                                 */
/*==============================================================*/
create table HUIFU
(
   HID                  numeric(8,0) not null,
   LID                  numeric(8,0),
   HTEXT                varchar(2000),
   HTIME                varchar(50),
   primary key (HID)
);

/*==============================================================*/
/* Table: LIUYN                                                 */
/*==============================================================*/
create table LIUYN
(
   LID                  numeric(8,0) not null,
   LTITLE               varchar(50),
   LTEXT                varchar(2000),
   LNAME                varchar(50),
   LTIME                varchar(50),
   LSTATE               numeric(8,0),
   LUID                 numeric(8,0),
   primary key (LID)
);

/*==============================================================*/
/* Table: NEWS                                                  */
/*==============================================================*/
create table NEWS
(
   NID                  numeric(8,0) not null,
   NTITLE               varchar(30),
   NTEXT                varchar(200),
   NTIME                varchar(20),
   NTYPE                varchar(20),
   primary key (NID)
);

/*==============================================================*/
/* Table: ORDERFORM                                             */
/*==============================================================*/
create table ORDERFORM
(
   ID                   numeric(8,0) not null,
   STATE                numeric(8,0),
   TIME                 varchar(90),
   ADDPRESS             varchar(500),
   NAME                 varchar(90),
   NUMID                varchar(50),
   OUID                 numeric(8,0),
   primary key (ID)
);

/*==============================================================*/
/* Table: PINGJIA                                               */
/*==============================================================*/
create table PINGJIA
(
   PID                  numeric(8,0) not null,
   PWID                 numeric(8,0),
   PTEXT                varchar(2000),
   PUID                 numeric(8,0),
   PTIME                varchar(50),
   primary key (PID)
);

/*==============================================================*/
/* Table: SHOPPING                                              */
/*==============================================================*/
create table SHOPPING
(
   ID                   numeric(8,0) not null,
   WIDS                 numeric(8,0),
   UIDS                 numeric(8,0),
   primary key (ID)
);

/*==============================================================*/
/* Table: USERINFO                                              */
/*==============================================================*/
create table USERINFO
(
   USID                 numeric(8,0) not null,
   UUSER                varchar(20),
   UPWD                 varchar(20),
   UNAME                varchar(20) not null,
   USEX                 varchar(20) not null,
   UBORN                varchar(20) not null,
   UPHONE               varchar(20) not null,
   UEMAIL               varchar(20) not null,
   UADDPRESS            varchar(20) not null,
   UIMAGE               varchar(20) not null,
   primary key (USID)
);

/*==============================================================*/
/* Table: WAREINFO                                              */
/*==============================================================*/
create table WAREINFO
(
   WID                  numeric(8,0) not null,
   WTID                 numeric(8,0),
   WNAME                varchar(500),
   WPRESS               numeric(8,0),
   WBREED               varchar(100),
   WTEXT                varchar(2000),
   WCOUNT               numeric(8,0),
   WNUM                 varchar(50),
   WHOT                 numeric(8,0),
   WIMAGE               varchar(50),
   WTE                  numeric(8,0),
   primary key (WID)
);

/*==============================================================*/
/* Table: WARETYPE                                              */
/*==============================================================*/
create table WARETYPE
(
   WID                  numeric(8,0) not null,
   WNAME                varchar(20),
   WPID                 numeric(8,0),
   primary key (WID)
);

