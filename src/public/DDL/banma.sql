/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2024/01/25 16:45:02                            */
/*==============================================================*/


drop table if exists UserInfo;

drop table if exists UserPermission;

drop table if exists LoginHistory;

drop table if exists MainBoard;

drop table if exists SubBoard;

drop table if exists PostContent;

drop table if exists ReplyContent;

drop table if exists LikesFavorites;


/*==============================================================*/
/* Table: UserInfo                                               */
/*==============================================================*/
CREATE TABLE UserInfo (
    UserID INT PRIMARY KEY COMMENT '用户识别番号',
    Username VARCHAR(255) not null COMMENT '用户名',
    Pwd VARCHAR(255) not null COMMENT '密码',
    Gender VARCHAR(50) COMMENT '性别',
    Nickname VARCHAR(255) COMMENT '昵称',
    Avatar VARCHAR(255) COMMENT '头像',
    CreationDate DATETIME COMMENT '创建日期',
    Creator VARCHAR(255) COMMENT '创建者',
    UpdateDate DATETIME COMMENT '更新日期',
    Updater VARCHAR(255) COMMENT '更新者'
)ENGINE=InnoDB COMMENT='用户信息表';

/*==============================================================*/
/* Table: UserPermission                                               */
/*==============================================================*/
CREATE TABLE UserPermission (
    UserID INT PRIMARY KEY COMMENT '用户识别番号',
    PostStopFlag int COMMENT '发帖停止flag',
    ReplyStopFlag int COMMENT '回复停止flag',
    LoginSuspendFlag int COMMENT '暂停登陆flag',
    LoginSuspendReason TEXT COMMENT '暂停登陆理由',
    LoginSuspendEndTime DATETIME COMMENT '暂停截至时间',
    PermanentLoginStopFlag int COMMENT '永久停止登陆flag',
    PermanentLoginStopReason TEXT COMMENT '永久停止登陆理由',
    LoginVerificationFlag int COMMENT '登陆验证flag',
    ModeratorFlag int COMMENT '版主flag',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期'
)ENGINE=InnoDB COMMENT='用户权限表';

/*==============================================================*/
/* Table: LoginHistory                                               */
/*==============================================================*/
CREATE TABLE LoginHistory (
    LoginID INT AUTO_INCREMENT COMMENT '登陆番号',
    UserID INT COMMENT '用户识别番号',
    LoginTime DATETIME not null COMMENT '登陆时间',
    LoginLocation VARCHAR(255) not null COMMENT '登陆地',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期',
    PRIMARY KEY (LoginID, UserID)
)ENGINE=InnoDB COMMENT='登陆履历表';

/*==============================================================*/
/* Table: MainBoard                                               */
/*==============================================================*/
CREATE TABLE MainBoard (
    MainBoardID INT PRIMARY KEY COMMENT '主板块ID',
    BoardName VARCHAR(255) COMMENT '板块名',
    BoardDescription TEXT COMMENT '板块简介',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期'
)ENGINE=InnoDB COMMENT='主板块表';

/*==============================================================*/
/* Table: SubBoard                                               */
/*==============================================================*/
CREATE TABLE SubBoard (
    SubBoardID INT COMMENT '子板块ID',
    MainBoardID INT COMMENT '主板块ID',
    BoardName VARCHAR(255) COMMENT '板块名',
    BoardDescription TEXT COMMENT '板块简介',
    Moderator VARCHAR(255) COMMENT '版主',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期',
    PRIMARY KEY (SubBoardID, MainBoardID)
)ENGINE=InnoDB COMMENT='子板块表';

/*==============================================================*/
/* Table: PostContent                                               */
/*==============================================================*/
CREATE TABLE PostContent (
    PostID INT COMMENT '帖子ID',
    PosterUserID INT COMMENT '发帖人识别番号',
    Title VARCHAR(255) not null COMMENT '标题',
    Subtitle VARCHAR(255) COMMENT '副标题',
    Content TEXT not null COMMENT '内容',
    PostTime DATETIME not null COMMENT '发帖时间',
    PostReplyStopFlag int COMMENT '帖子回复停止flag',
    PostReviewFlag int COMMENT '帖子审核flag',
    PostDeleteFlag int COMMENT '帖子删除flag',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期',
    PRIMARY KEY (PostID, PosterUserID)
)ENGINE=InnoDB COMMENT='帖子内容表';

/*==============================================================*/
/* Table: ReplyContent                                               */
/*==============================================================*/
CREATE TABLE ReplyContent (
    PostID INT COMMENT '帖子ID',
    ReplyID INT COMMENT '回复ID',
    ReplierUserID INT COMMENT '回复人识别番号',
    Content TEXT not null COMMENT '内容',
    ReplyTime DATETIME COMMENT '回复时间',
    ReplyDeleteFlag int COMMENT '回复删除flag',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期',
    PRIMARY KEY (PostID, ReplyID, ReplierUserID)
)ENGINE=InnoDB COMMENT='回复内容表';

/*==============================================================*/
/* Table: LikesFavorites                                               */
/*==============================================================*/
CREATE TABLE LikesFavorites (
    PostID INT COMMENT '帖子ID',
    ReplyID INT COMMENT '回复ID',
    UserID INT COMMENT '用户识别番号',
    LikeFavoriteType int not null COMMENT '点赞收藏区分',
    Creator VARCHAR(255) COMMENT '创建者',
    CreationDate DATETIME COMMENT '创建日期',
    Updater VARCHAR(255) COMMENT '更新者',
    UpdateDate DATETIME COMMENT '更新日期',
    PRIMARY KEY (PostID, ReplyID, UserID)
)ENGINE=InnoDB COMMENT='点赞收藏表';
