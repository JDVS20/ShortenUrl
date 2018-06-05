CREATE TABLE [dbo].[HistoryURL] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [OriginalUrl] VARCHAR (MAX) NOT NULL,
    [ShortUrl]    VARCHAR (MAX) NOT NULL,
    [DateCreated] DATETIME      NOT NULL
);



