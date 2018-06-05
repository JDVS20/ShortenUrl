CREATE PROCEDURE usp_InsertUrl

	@Url AS VARCHAR(MAX),
	@Short AS VARCHAR(MAX)
AS
BEGIN

INSERT INTO HistoryURL(OriginalUrl, ShortUrl, DateCreated)
	VALUES (@Url, @Short, GETDATE())

END