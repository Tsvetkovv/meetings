/****** Object:  Table [dbo].[Profile]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profile](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[birthday] [datetime] NOT NULL,
	[sex] [nvarchar](6) NOT NULL,
	[cityId] [int] NOT NULL,
	[photoId] [int] NULL,
	[goalId] [int] NOT NULL,
	[requirementId] [int] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Pair]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pair](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[firstPartnerId] [int] NOT NULL,
	[secondPartnerId] [int] NOT NULL,
	[dateStart] [datetime] NOT NULL,
	[dateEnd] [datetime] NULL,
 CONSTRAINT [PK_Pairs_1] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  View [dbo].[PairsGet]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[PairsGet]
AS
SELECT        Pair.id, Pair.dateStart, Pair.dateEnd, Pair.firstPartnerId, Pair.secondPartnerId, firstPartner.id AS [firstPartner.id], firstPartner.name AS [firstPartner.name], firstPartner.birthday AS [firstPartner.birthday],
                         firstPartner.sex AS [firstPartner.sex], firstPartner.cityId AS [firstPartner.cityId], firstPartner.goalId AS [firstPartner.goalId], firstPartner.photoId AS [firstPartner.photoId],
                         firstPartner.requirementId AS [firstPartner.requirementId], secondPartner.id AS [secondPartner.id], secondPartner.name AS [secondPartner.name], secondPartner.birthday AS [secondPartner.birthday],
                         secondPartner.sex AS [secondPartner.sex], secondPartner.cityId AS [secondPartner.cityId], secondPartner.goalId AS [secondPartner.goalId], secondPartner.photoId AS [secondPartner.photoId],
                         secondPartner.requirementId AS [secondPartner.requirementId]
FROM            dbo.Pair AS Pair LEFT OUTER JOIN
                         dbo.Profile AS firstPartner ON Pair.firstPartnerId = firstPartner.id LEFT OUTER JOIN
                         dbo.Profile AS secondPartner ON Pair.secondPartnerId = secondPartner.id

GO
/****** Object:  Table [dbo].[City]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Goal]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Goal](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[value] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Goal] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Interest]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Interest](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[value] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Interest] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[InterestsRequirements]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InterestsRequirements](
	[interestId] [int] NOT NULL,
	[requirementId] [int] NOT NULL,
 CONSTRAINT [PK_InterestsRequirements] PRIMARY KEY CLUSTERED
(
	[interestId] ASC,
	[requirementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Photo]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Photo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[data] [varbinary](max) NOT NULL,
	[mimetype] [nvarchar](max) NULL,
 CONSTRAINT [PK_Photo] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProfilesInterests]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProfilesInterests](
	[profileId] [int] NOT NULL,
	[interestId] [int] NOT NULL,
 CONSTRAINT [PK_UsersInterests] PRIMARY KEY CLUSTERED
(
	[profileId] ASC,
	[interestId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Requirement]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Requirement](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ageBefore] [int] NULL,
	[ageAfter] [int] NULL,
	[sex] [nvarchar](6) NULL,
 CONSTRAINT [PK_Requirement] PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[City] ON

GO
INSERT [dbo].[City] ([id], [name]) VALUES (3, N'Белгород')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (4, N'Губкин')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (5, N'Старый Оскол')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (6, N'Шебекино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (7, N'Брянск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (8, N'Клинцы')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (9, N'Новозыбков')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (10, N'Сельцо')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (11, N'Владимир')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (12, N'Гусь-Хрустальный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (13, N'Ковров')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (14, N'Муром')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (15, N'Радужный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (16, N'Воронеж')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (17, N'Воронеж-45')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (18, N'Нововоронеж')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (19, N'Иваново')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (20, N'Калуга')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (21, N'Обнинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (22, N'Волгореченск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (23, N'Курск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (24, N'Елец')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (25, N'Липецк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (26, N'Зеленоград')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (27, N'Троицк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (28, N'Щербинка')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (29, N'Бронницы')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (30, N'Дзержинский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (31, N'Долгопрудный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (32, N'Домодедово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (33, N'Дубна')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (34, N'Железнодорожный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (35, N'Жуковский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (36, N'Звенигород')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (37, N'Ивантеевка')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (38, N'Климовск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (39, N'Коломна')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (40, N'Королев')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (41, N'Котельники')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (42, N'Красноармейск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (43, N'Краснознаменск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (44, N'Лобня')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (45, N'Лосино-Петровский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (46, N'Лыткарино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (47, N'Орехово-Зуево')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (48, N'Подольск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (49, N'Протвино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (50, N'Пущино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (51, N'Реутов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (52, N'Рошаль')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (53, N'Серпухов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (54, N'Фрязино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (55, N'Химки')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (56, N'Электрогорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (57, N'Электросталь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (58, N'Юбилейный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (59, N'Ливны')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (60, N'Мценск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (61, N'Орел')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (62, N'Касимов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (63, N'Рязань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (64, N'Сасово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (65, N'Скопин')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (66, N'Десногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (67, N'Смоленск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (68, N'Кирсанов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (69, N'Котовск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (70, N'Мичуринск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (71, N'Моршанск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (72, N'Рассказово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (73, N'Тамбов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (74, N'Уварово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (75, N'Вышний Волочек')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (76, N'Кимры')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (77, N'Нелидово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (78, N'Ржев')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (79, N'Тверь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (80, N'Торжок')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (81, N'Донской')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (82, N'Тула')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (83, N'Переславль-Залесский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (84, N'Ярославль')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (85, N'Адыгейск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (86, N'Майкоп')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (87, N'Астрахань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (88, N'Знаменск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (89, N'Волгоград')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (90, N'Волжский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (91, N'Камышин')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (92, N'Михайловка')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (93, N'Урюпинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (94, N'Фролово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (95, N'Элиста')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (96, N'Армавир')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (97, N'Геленджик')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (98, N'Горячий Ключ')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (99, N'Краснодар')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (100, N'Новороссийск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (101, N'Сочи')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (102, N'Азов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (103, N'Батайск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (104, N'Волгодонск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (105, N'Гуково')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (106, N'Донецк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (107, N'Зверево')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (108, N'Каменск-Шахтинский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (109, N'Новочеркасск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (110, N'Новошахтинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (111, N'Ростов-на-Дону')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (112, N'Таганрог')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (113, N'Шахты')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (114, N'Архангельск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (115, N'Коряжма')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (116, N'Мирный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (117, N'Новодвинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (118, N'Северодвинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (119, N'Вологда')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (120, N'Череповец')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (121, N'Калининград город')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (122, N'Ладушкин')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (123, N'Мамоново')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (124, N'Пионерский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (125, N'Светлый')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (126, N'Советск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (127, N'Костомукша')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (128, N'Петрозаводск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (129, N'Сортавала')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (130, N'Воркута')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (131, N'Вуктыл')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (132, N'Инта')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (133, N'Печора')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (134, N'Сосногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (135, N'Сыктывкар')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (136, N'Усинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (137, N'Ухта')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (138, N'Сосновый Бор')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (139, N'Апатиты')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (140, N'Гаджиево')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (141, N'Заозерск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (142, N'Кандалакша')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (143, N'Кировск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (144, N'Мончегорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (145, N'Мурманск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (146, N'Оленегорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (147, N'Оленегорск-1')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (148, N'Оленегорск-2')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (149, N'Оленегорск-4')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (150, N'Островной')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (151, N'Полярные Зори')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (152, N'Полярный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (153, N'Североморск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (154, N'Снежногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (155, N'Нарьян-Мар')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (156, N'Великий Новгород')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (157, N'Великие Луки')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (158, N'Псков')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (159, N'Зеленогорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (160, N'Колпино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (161, N'Красное Село')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (162, N'Кронштадт')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (163, N'Ломоносов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (164, N'Павловск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (165, N'Петергоф')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (166, N'Пушкин')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (167, N'Сестрорецк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (168, N'Белогорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (169, N'Благовещенск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (170, N'Зея')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (171, N'Райчихинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (172, N'Свободный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (173, N'Тында')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (174, N'Шимановск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (175, N'Биробиджан')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (176, N'Вилючинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (177, N'Петропавловск-Камчатский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (178, N'Магадан')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (179, N'Арсеньев')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (180, N'Артем')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (181, N'Большой Камень')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (182, N'Владивосток')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (183, N'Дальнегорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (184, N'Дальнереченск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (185, N'Лесозаводск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (186, N'Находка')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (187, N'Партизанск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (188, N'Спасск-Дальний')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (189, N'Уссурийск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (190, N'Фокино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (191, N'Нерюнгри')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (192, N'Якутск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (193, N'Южно-Сахалинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (194, N'Амурск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (195, N'Бикин')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (196, N'Комсомольск-на-Амуре')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (197, N'Николаевск-на-Амуре')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (198, N'Советская Гавань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (199, N'Хабаровск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (200, N'Анадырь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (201, N'Горно-Алтайск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (202, N'Алейск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (203, N'Барнаул')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (204, N'Белокуриха')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (205, N'Бийск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (206, N'Заринск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (207, N'Камень-на-Оби')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (208, N'Новоалтайск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (209, N'Рубцовск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (210, N'Славгород')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (211, N'Яровое')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (212, N'Северобайкальск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (213, N'Улан-Удэ')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (214, N'Чита')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (215, N'Ангарск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (216, N'Бодайбо')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (217, N'Братск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (218, N'Зима')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (219, N'Иркутск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (220, N'Иркутск-45')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (221, N'Нижнеудинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (222, N'Саянск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (223, N'Свирск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (224, N'Тайшет')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (225, N'Тулун')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (226, N'Усолье-Сибирское')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (227, N'Усть-Илимск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (228, N'Усть-Кут')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (229, N'Черемхово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (230, N'Шелехов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (231, N'Анжеро-Судженск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (232, N'Белово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (233, N'Березовский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (234, N'Калтан')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (235, N'Кемерово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (236, N'Киселевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (237, N'Ленинск-Кузнецкий')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (238, N'Междуреченск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (239, N'Мыски')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (240, N'Новокузнецк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (241, N'Осинники')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (242, N'Полысаево')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (243, N'Прокопьевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (244, N'Тайга')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (245, N'Юрга')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (246, N'Ачинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (247, N'Боготол')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (248, N'Бородино')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (249, N'Дивногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (250, N'Енисейск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (251, N'Железногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (252, N'Заозерный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (253, N'Зеленогорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (254, N'Кайеркан')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (255, N'Канск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (256, N'Красноярск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (257, N'Лесосибирск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (258, N'Минусинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (259, N'Назарово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (260, N'Норильск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (261, N'Сосновоборск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (262, N'Талнах')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (263, N'Шарыпово')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (264, N'Барабинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (265, N'Бердск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (266, N'Искитим')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (267, N'Куйбышев')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (268, N'Новосибирск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (269, N'Обь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (270, N'Татарск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (271, N'Омск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (272, N'Кедровый')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (273, N'Северск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (274, N'Стрежевой')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (275, N'Томск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (276, N'Ак-Довурак')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (277, N'Кызыл')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (278, N'Абаза')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (279, N'Абакан')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (280, N'Саяногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (281, N'Сорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (282, N'Черногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (283, N'Курган')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (284, N'Шадринск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (285, N'Алапаевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (286, N'Асбест')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (287, N'Березовский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (288, N'Верхний Тагил')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (289, N'Верхняя Пышма')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (290, N'Верхняя Тура')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (291, N'Волчанск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (292, N'Дегтярск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (293, N'Екатеринбург')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (294, N'Заречный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (295, N'Ивдель')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (296, N'Ирбит')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (297, N'Каменск-Уральский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (298, N'Камышлов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (299, N'Карпинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (300, N'Качканар')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (301, N'Кировград')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (302, N'Краснотурьинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (303, N'Красноуральск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (304, N'Красноуфимск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (305, N'Кушва')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (306, N'Лесной')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (307, N'Нижний Тагил')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (308, N'Нижняя Салда')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (309, N'Нижняя Тура')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (310, N'Новоуральск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (311, N'Первоуральск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (312, N'Полевской')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (313, N'Ревда')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (314, N'Североуральск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (315, N'Серов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (316, N'Среднеуральск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (317, N'Тобольск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (318, N'Тюмень')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (319, N'Белоярский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (320, N'Когалым')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (321, N'Лангепас')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (322, N'Мегион')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (323, N'Нефтеюганск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (324, N'Нижневартовск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (325, N'Нягань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (326, N'Покачи')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (327, N'Пыть-Ях')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (328, N'Радужный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (329, N'Сургут')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (330, N'Урай')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (331, N'Ханты-Мансийск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (332, N'Югорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (333, N'Верхний Уфалей')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (334, N'Златоуст')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (335, N'Карабаш')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (336, N'Копейск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (337, N'Кыштым')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (338, N'Магнитогорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (339, N'Миасс')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (340, N'Озерск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (341, N'Снежинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (342, N'Трехгорный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (343, N'Трехгорный-1')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (344, N'Троицк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (345, N'Усть-Катав')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (346, N'Чебаркуль')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (347, N'Челябинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (348, N'Южноуральск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (349, N'Губкинский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (350, N'Лабытнанги')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (351, N'Муравленко')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (352, N'Надым')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (353, N'Новый Уренгой')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (354, N'Ноябрьск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (355, N'Салехард')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (356, N'Агидель')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (357, N'Кумертау')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (358, N'Межгорье')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (359, N'Нефтекамск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (360, N'Октябрьский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (361, N'Салават')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (362, N'Сибай')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (363, N'Стерлитамак')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (364, N'Уфа')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (365, N'Киров')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (366, N'Волжск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (367, N'Йошкар-Ола')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (368, N'Козьмодемьянск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (369, N'Саранск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (370, N'Арзамас')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (371, N'Бор')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (372, N'Выкса')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (373, N'Дзержинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (374, N'Нижний Новгород')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (375, N'Саров')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (376, N'Семенов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (377, N'Бугуруслан')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (378, N'Бузулук')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (379, N'Гай')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (380, N'Кувандык')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (381, N'Медногорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (382, N'Новотроицк')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (383, N'Оренбург')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (384, N'Орск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (385, N'Сорочинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (386, N'Заречный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (387, N'Пенза')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (388, N'Александровск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (389, N'Березники')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (390, N'Гремячинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (391, N'Губаха')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (392, N'Добрянка')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (393, N'Кизел')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (394, N'Кудымкар')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (395, N'Кунгур')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (396, N'Лысьва')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (397, N'Пермь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (398, N'Соликамск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (399, N'Чайковский')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (400, N'Чусовой')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (401, N'Жигулевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (402, N'Кинель')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (403, N'Новокуйбышевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (404, N'Октябрьск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (405, N'Отрадный')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (406, N'Похвистнево')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (407, N'Самара')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (408, N'Сызрань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (409, N'Тольятти')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (410, N'Чапаевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (411, N'Аткарск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (412, N'Балаково')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (413, N'Балашов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (414, N'Вольск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (415, N'Красноармейск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (416, N'Маркс')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (417, N'Петровск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (418, N'Пугачев')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (419, N'Ртищево')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (420, N'Саратов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (421, N'Хвалынск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (422, N'Шиханы')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (423, N'Энгельс')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (424, N'Энгельс-19')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (425, N'Энгельс-2')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (426, N'Казань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (427, N'Набережные Челны')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (428, N'Воткинск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (429, N'Глазов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (430, N'Ижевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (431, N'Можга')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (432, N'Сарапул')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (433, N'Барыш')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (434, N'Димитровград')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (435, N'Новоульяновск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (436, N'Ульяновск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (437, N'Алатырь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (438, N'Канаш')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (439, N'Новочебоксарск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (440, N'Чебоксары')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (441, N'Шумерля')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (442, N'Буйнакск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (443, N'Дагестанские Огни')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (444, N'Дербент')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (445, N'Избербаш')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (446, N'Каспийск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (447, N'Кизилюрт')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (448, N'Кизляр')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (449, N'Махачкала')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (450, N'Хасавюрт')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (451, N'Южно-Сухокумск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (452, N'Карабулак')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (453, N'Магас')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (454, N'Малгобек')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (455, N'Назрань')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (456, N'Нальчик')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (457, N'Карачаевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (458, N'Черкесск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (459, N'Владикавказ')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (460, N'Георгиевск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (461, N'Ессентуки')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (462, N'Железноводск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (463, N'Кисловодск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (464, N'Лермонтов')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (465, N'Минеральные Воды')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (466, N'Невинномысск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (467, N'Пятигорск')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (468, N'Ставрополь')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (469, N'Аргун')
GO
INSERT [dbo].[City] ([id], [name]) VALUES (470, N'Грозный')
GO
SET IDENTITY_INSERT [dbo].[City] OFF
GO
SET IDENTITY_INSERT [dbo].[Goal] ON

GO
INSERT [dbo].[Goal] ([id], [value]) VALUES (1, N'Дружба')
GO
INSERT [dbo].[Goal] ([id], [value]) VALUES (2, N'Семья')
GO
INSERT [dbo].[Goal] ([id], [value]) VALUES (3, N'Свидания')
GO
SET IDENTITY_INSERT [dbo].[Goal] OFF
GO
SET IDENTITY_INSERT [dbo].[Interest] ON

GO
INSERT [dbo].[Interest] ([id], [value]) VALUES (1, N'вино')
GO
INSERT [dbo].[Interest] ([id], [value]) VALUES (2, N'кино')
GO
INSERT [dbo].[Interest] ([id], [value]) VALUES (3, N'домино')
GO
SET IDENTITY_INSERT [dbo].[Interest] OFF
GO
SET IDENTITY_INSERT [dbo].[Pair] ON

GO
INSERT [dbo].[Pair] ([id], [firstPartnerId], [secondPartnerId], [dateStart], [dateEnd]) VALUES (2, 8, 9, CAST(N'2007-05-08T12:35:29.123' AS DateTime), NULL)
GO
INSERT [dbo].[Pair] ([id], [firstPartnerId], [secondPartnerId], [dateStart], [dateEnd]) VALUES (5, 12, 13, CAST(N'2017-12-22T15:19:25.107' AS DateTime), NULL)
GO
INSERT [dbo].[Pair] ([id], [firstPartnerId], [secondPartnerId], [dateStart], [dateEnd]) VALUES (6, 14, 17, CAST(N'2017-12-23T09:33:13.423' AS DateTime), NULL)
GO
INSERT [dbo].[Pair] ([id], [firstPartnerId], [secondPartnerId], [dateStart], [dateEnd]) VALUES (7, 22, 23, CAST(N'2017-12-25T20:38:44.573' AS DateTime), NULL)
GO
SET IDENTITY_INSERT [dbo].[Pair] OFF
GO
SET IDENTITY_INSERT [dbo].[Profile] ON

GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (8, N'Mike', CAST(N'1990-05-30T00:00:00.000' AS DateTime), N'male', 88, NULL, 1, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (9, N'Mike', CAST(N'1990-05-30T00:00:00.000' AS DateTime), N'male', 88, NULL, 1, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (10, N'Mike', CAST(N'1990-05-30T00:00:00.000' AS DateTime), N'male', 88, NULL, 1, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (11, N'Mike', CAST(N'1990-05-30T00:00:00.000' AS DateTime), N'male', 88, NULL, 1, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (12, N'Mike', CAST(N'1990-05-30T00:00:00.000' AS DateTime), N'male', 88, NULL, 1, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (13, N'Test', CAST(N'1999-11-30T00:00:00.000' AS DateTime), N'female', 5, NULL, 2, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (14, N'Test123', CAST(N'1999-11-28T00:00:00.000' AS DateTime), N'male', 40, NULL, 2, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (15, N'Test213213', CAST(N'1999-11-28T00:00:00.000' AS DateTime), N'male', 40, NULL, 2, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (17, N'кино и вино', CAST(N'1999-10-16T00:00:00.000' AS DateTime), N'female', 28, NULL, 3, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (18, N'кино и вино', CAST(N'1999-11-01T00:00:00.000' AS DateTime), N'female', 6, NULL, 3, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (19, N'куу', CAST(N'1999-11-28T00:00:00.000' AS DateTime), N'female', 5, NULL, 2, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (20, N'daDAWDa', CAST(N'1999-11-28T00:00:00.000' AS DateTime), N'male', 6, NULL, 3, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (21, N'kuku', CAST(N'1999-11-29T00:00:00.000' AS DateTime), N'male', 75, NULL, 2, NULL)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (22, N'Test', CAST(N'1999-11-29T00:00:00.000' AS DateTime), N'male', 4, NULL, 1, 1)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (23, N'Test', CAST(N'1999-11-29T00:00:00.000' AS DateTime), N'male', 4, NULL, 1, 2)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (24, N'Hdhdd', CAST(N'1999-11-30T00:00:00.000' AS DateTime), N'female', 4, NULL, 2, 3)
GO
INSERT [dbo].[Profile] ([id], [name], [birthday], [sex], [cityId], [photoId], [goalId], [requirementId]) VALUES (25, N'csadcdsv', CAST(N'1999-12-15T00:00:00.000' AS DateTime), N'female', 6, NULL, 2, 4)
GO
SET IDENTITY_INSERT [dbo].[Profile] OFF
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (8, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (8, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (9, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (9, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (10, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (10, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (11, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (11, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (12, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (12, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (18, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (18, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (19, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (19, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (20, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (21, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (22, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (23, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (24, 1)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (24, 2)
GO
INSERT [dbo].[ProfilesInterests] ([profileId], [interestId]) VALUES (25, 2)
GO
SET IDENTITY_INSERT [dbo].[Requirement] ON

GO
INSERT [dbo].[Requirement] ([id], [ageBefore], [ageAfter], [sex]) VALUES (1, 18, 120, N'female')
GO
INSERT [dbo].[Requirement] ([id], [ageBefore], [ageAfter], [sex]) VALUES (2, 18, 120, N'female')
GO
INSERT [dbo].[Requirement] ([id], [ageBefore], [ageAfter], [sex]) VALUES (3, 30, 70, N'female')
GO
INSERT [dbo].[Requirement] ([id], [ageBefore], [ageAfter], [sex]) VALUES (4, 39, 120, N'male')
GO
SET IDENTITY_INSERT [dbo].[Requirement] OFF
GO
ALTER TABLE [dbo].[InterestsRequirements]  WITH CHECK ADD  CONSTRAINT [FK_InterestsRequirements_Interest1] FOREIGN KEY([interestId])
REFERENCES [dbo].[Interest] ([id])
GO
ALTER TABLE [dbo].[InterestsRequirements] CHECK CONSTRAINT [FK_InterestsRequirements_Interest1]
GO
ALTER TABLE [dbo].[InterestsRequirements]  WITH CHECK ADD  CONSTRAINT [FK_InterestsRequirements_Requirement] FOREIGN KEY([requirementId])
REFERENCES [dbo].[Requirement] ([id])
GO
ALTER TABLE [dbo].[InterestsRequirements] CHECK CONSTRAINT [FK_InterestsRequirements_Requirement]
GO
ALTER TABLE [dbo].[Pair]  WITH CHECK ADD  CONSTRAINT [FK_Pair_Profile] FOREIGN KEY([firstPartnerId])
REFERENCES [dbo].[Profile] ([id])
GO
ALTER TABLE [dbo].[Pair] CHECK CONSTRAINT [FK_Pair_Profile]
GO
ALTER TABLE [dbo].[Pair]  WITH CHECK ADD  CONSTRAINT [FK_Pair_Profile1] FOREIGN KEY([secondPartnerId])
REFERENCES [dbo].[Profile] ([id])
GO
ALTER TABLE [dbo].[Pair] CHECK CONSTRAINT [FK_Pair_Profile1]
GO
ALTER TABLE [dbo].[Profile]  WITH CHECK ADD  CONSTRAINT [FK_User_City] FOREIGN KEY([cityId])
REFERENCES [dbo].[City] ([id])
GO
ALTER TABLE [dbo].[Profile] CHECK CONSTRAINT [FK_User_City]
GO
ALTER TABLE [dbo].[Profile]  WITH CHECK ADD  CONSTRAINT [FK_User_Goal] FOREIGN KEY([goalId])
REFERENCES [dbo].[Goal] ([id])
GO
ALTER TABLE [dbo].[Profile] CHECK CONSTRAINT [FK_User_Goal]
GO
ALTER TABLE [dbo].[Profile]  WITH CHECK ADD  CONSTRAINT [FK_User_Photo] FOREIGN KEY([photoId])
REFERENCES [dbo].[Photo] ([id])
GO
ALTER TABLE [dbo].[Profile] CHECK CONSTRAINT [FK_User_Photo]
GO
ALTER TABLE [dbo].[Profile]  WITH CHECK ADD  CONSTRAINT [FK_User_User] FOREIGN KEY([requirementId])
REFERENCES [dbo].[Requirement] ([id])
GO
ALTER TABLE [dbo].[Profile] CHECK CONSTRAINT [FK_User_User]
GO
ALTER TABLE [dbo].[ProfilesInterests]  WITH CHECK ADD  CONSTRAINT [FK_UsersInterests_Interest] FOREIGN KEY([interestId])
REFERENCES [dbo].[Interest] ([id])
GO
ALTER TABLE [dbo].[ProfilesInterests] CHECK CONSTRAINT [FK_UsersInterests_Interest]
GO
ALTER TABLE [dbo].[ProfilesInterests]  WITH CHECK ADD  CONSTRAINT [FK_UsersInterests_User] FOREIGN KEY([profileId])
REFERENCES [dbo].[Profile] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ProfilesInterests] CHECK CONSTRAINT [FK_UsersInterests_User]
GO
/****** Object:  StoredProcedure [dbo].[CityGet]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CityGet]
@id int = NULL
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [id], [name]
	FROM [dbo].[City]
	WHERE id = @id

	SET NOCOUNT ON;
END



GO
/****** Object:  StoredProcedure [dbo].[CityGetAll]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CityGetAll]
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [id], [name]
	FROM [dbo].[City]

	SET NOCOUNT ON;
END



GO
/****** Object:  StoredProcedure [dbo].[GetCurrentPartnerById]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetCurrentPartnerById]
  @id int
AS
  BEGIN
    SET NOCOUNT ON;
    DECLARE @firstPartnerId  int;
    DECLARE @secondPartnerId int;

    SELECT
           @firstPartnerId  = firstPartnerId
         , @secondPartnerId = secondPartnerId
    FROM
           dbo.Pair p
    WHERE
           dateEnd IS NULL
           AND
           (
                  p.firstPartnerId     = @id
                  OR p.secondPartnerId = @id
           )

           DECLARE @temp int;
           SET @temp = IIF(@secondPartnerId = @id, @firstPartnerId, @secondPartnerId)


           SELECT
                  [id]
                , [name]
                , [birthday]
                , [sex]
                , [cityId]
                , [photoId]
                , [goalId]
                , [requirementId]
           FROM
                  [dbo].[Profile]
           WHERE
                  id = IIF(@secondPartnerId = @id, @firstPartnerId, @secondPartnerId)



                  SET NOCOUNT ON;
                END
GO
/****** Object:  StoredProcedure [dbo].[PairCreate]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PairCreate]
@firstPartnerId int,
@secondPartnerId int,
@dateStart datetime,
@dateEnd datetime = NULL
AS
BEGIN
	SET NOCOUNT ON;

	IF (@firstPartnerId = @secondPartnerId)
		THROW 50000, 'Partners should not are equal', 1;


	INSERT INTO [dbo].[Pair]
	(
	[dateStart],
	[dateEnd],
	[firstPartnerId],
	[secondPartnerId]
	)
	VALUES
	(
		@dateStart,
		@dateEnd,
		@firstPartnerId,
		@secondPartnerId
	)

	DECLARE @pairId int;
	SET @pairId = @@IDENTITY;

	SELECT 'pairId' = @pairId;

	SET NOCOUNT ON;
END



GO
/****** Object:  StoredProcedure [dbo].[UserCreate]    Script Date: 1/4/2018 2:49:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UserCreate]
(@login nvarchar(MAX),
@password nvarchar(MAX),
@name nvarchar(MAX),
@birthday datetime,
@sex int,
@cityId int,
@photoId int,
@goalId int,
@requirementId int)
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO [dbo].[User]
	(
	[login],
	[password],
	[name],
	[birthday],
	[sex],
	[cityId],
	[photoId],
	[goalId],
	[requirementId]
	)
	VALUES (
	@login,
	@password,
	@name,
	@birthday,
	@sex,
	@cityId,
	@photoId,
	@goalId,
	@requirementId
	)

	SET NOCOUNT ON;
END



GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties =
   Begin PaneConfigurations =
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[32] 4[29] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane =
      Begin Origin =
         Top = 0
         Left = 0
      End
      Begin Tables =
         Begin Table = "Pair"
            Begin Extent =
               Top = 54
               Left = 24
               Bottom = 203
               Right = 199
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "firstPartner"
            Begin Extent =
               Top = 8
               Left = 448
               Bottom = 138
               Right = 618
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "secondPartner"
            Begin Extent =
               Top = 103
               Left = 295
               Bottom = 251
               Right = 465
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane =
   End
   Begin DataPane =
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane =
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 1590
         Table = 1170
         Output = 1215
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'PairsGet'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'PairsGet'
GO
