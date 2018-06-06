USE [master]
GO

CREATE DATABASE [ShortenURL]
GO
ALTER DATABASE [ShortenURL] SET ANSI_NULL_DEFAULT ON 
GO
ALTER DATABASE [ShortenURL] SET ANSI_NULLS ON 
GO
ALTER DATABASE [ShortenURL] SET ANSI_PADDING ON 
GO
ALTER DATABASE [ShortenURL] SET ANSI_WARNINGS ON 
GO
ALTER DATABASE [ShortenURL] SET ARITHABORT ON 
GO
ALTER DATABASE [ShortenURL] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ShortenURL] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ShortenURL] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ShortenURL] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ShortenURL] SET CURSOR_DEFAULT  LOCAL 
GO
ALTER DATABASE [ShortenURL] SET CONCAT_NULL_YIELDS_NULL ON 
GO
ALTER DATABASE [ShortenURL] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ShortenURL] SET QUOTED_IDENTIFIER ON 
GO
ALTER DATABASE [ShortenURL] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ShortenURL] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ShortenURL] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ShortenURL] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ShortenURL] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ShortenURL] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ShortenURL] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ShortenURL] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ShortenURL] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ShortenURL] SET RECOVERY FULL 
GO
ALTER DATABASE [ShortenURL] SET  MULTI_USER 
GO
ALTER DATABASE [ShortenURL] SET PAGE_VERIFY NONE  
GO
ALTER DATABASE [ShortenURL] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ShortenURL] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ShortenURL] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [ShortenURL] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ShortenURL', N'ON'
GO
ALTER DATABASE [ShortenURL] SET QUERY_STORE = OFF
GO
USE [ShortenURL]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [ShortenURL]
GO
/****** Object:  Table [dbo].[HistoryURL]    Script Date: 5/6/2018 20:06:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HistoryURL](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OriginalUrl] [varchar](max) NOT NULL,
	[ShortUrl] [varchar](max) NOT NULL,
	[DateCreated] [datetime] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[usp_InsertUrl]    Script Date: 5/6/2018 20:06:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_InsertUrl]

	@Url AS VARCHAR(MAX),
	@Short AS VARCHAR(MAX)
AS
BEGIN

INSERT INTO HistoryURL(OriginalUrl, ShortUrl, DateCreated)
	VALUES (@Url, @Short, GETDATE())

END
GO
USE [master]
GO
ALTER DATABASE [ShortenURL] SET  READ_WRITE 
GO
