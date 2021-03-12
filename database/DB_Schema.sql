DROP SCHEMA IF EXISTS StartwellDB;
CREATE SCHEMA StartwellDB;
USE StartwellDB;

CREATE TABLE UserBuckets (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    BucketType VARCHAR (45) NOT NULL UNIQUE,
    BucketDesc VARCHAR(45),
    PRIMARY KEY (SNo)
);

CREATE TABLE Users (
  SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
  UserID VARCHAR(20) NOT NULL UNIQUE,
  UserType CHAR(1) NOT NULL,
  Pass VARCHAR (45) NOT NULL,
  First_Name VARCHAR(45) NOT NULL,
  Last_Name VARCHAR(45) NOT NULL,
  DOB DATE NOT NULL,
  Sex VARCHAR(20),
  EmailID VARCHAR(45) NOT NULL UNIQUE,
  LicenseID VARCHAR(15) UNIQUE,
  BucketType VARCHAR(10),
  Current_Status VARCHAR(20),
  Subscription VARCHAR(20),
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (SNo),
  FOREIGN KEY (BucketType) REFERENCES UserBuckets(BucketType)
);

CREATE TABLE SCategories (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    CategoryID VARCHAR(10) NOT NULL UNIQUE,
    BucketType VARCHAR(20) NOT NULL,
    CatDesc VARCHAR(45),
    PRIMARY KEY (SNo),
    FOREIGN KEY (BucketType) REFERENCES UserBuckets (BucketType)
);

CREATE TABLE Surveys (
	SurveyID INT UNSIGNED NOT NULL AUTO_INCREMENT,
    SurveyTitle VARCHAR(30) NOT NULL,
    NoQues INT UNSIGNED NOT NULL,
    OptDesc VARCHAR(30) NOT NULL,
    CategoryID VARCHAR(45) NOT NULL,
    SurveyStatus CHAR(1) NOT NULL,
    PRIMARY KEY(SurveyID),
    FOREIGN KEY (CategoryID) REFERENCES SCategories (CategoryID)
);

CREATE TABLE UserSurveyHeader (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    UserID VARCHAR (20) NOT NULL,
    SurveyID INT UNSIGNED NOT NULL,
    AttemptID INT UNSIGNED NOT NULL,
    SurveyStatus CHAR(1) NOT NULL,
    Time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (SNo),
    FOREIGN KEY (SurveyID) REFERENCES Surveys (SurveyID),
    FOREIGN KEY (UserID) REFERENCES Users (UserID),
    UNIQUE KEY Attempts (UserID, SurveyID, AttemptID)
);

CREATE TABLE SQuestions (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    SurveyID INT UNSIGNED NOT NULL,
    QuesID INT UNSIGNED NOT NULL UNIQUE,
    QText VARCHAR(90) NOT NULL,
    RespType CHAR(1) NOT NULL,
    PRIMARY KEY (SNo),
    FOREIGN KEY (SurveyID) REFERENCES Surveys (SurveyID)
);

CREATE TABLE QOptions (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    SurveyID INT UNSIGNED NOT NULL,
    QuesID INT UNSIGNED NOT NULL,
    OptID INT UNSIGNED NOT NULL,
    OptText VARCHAR (45) NOT NULL,
    PRIMARY KEY (SNo),
    FOREIGN KEY (SurveyID) REFERENCES Surveys (SurveyID),
    FOREIGN KEY (QuesID) REFERENCES SQuestions (QuesID)
);

CREATE TABLE UserResponses (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    UserID VARCHAR(20) NOT NULL,
    UserType CHAR(1) NOT NULL,
    SurveyID INT UNSIGNED NOT NULL,
    AttemptID INT UNSIGNED NOT NULL,
    QuesID INT UNSIGNED NOT NULL,
    Response VARCHAR(45),
    Time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (SNo),
    FOREIGN KEY (UserID) REFERENCES Users (UserID),
    FOREIGN KEY (SurveyID) REFERENCES Surveys (SurveyID),
    FOREIGN KEY (QuesID) REFERENCES SQuestions (QuesID)
);

CREATE TABLE RelTypes (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    RelType VARCHAR(45) NOT NULL UNIQUE,
    RelDesc VARCHAR(90),
    PRIMARY KEY (SNo)
);

CREATE TABLE UserRelationships (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    UserID VARCHAR (20) NOT NULL,
    RelType VARCHAR(45) NOT NULL,
    LinkedUserID VARCHAR (20) NOT NULL,
    PRIMARY KEY (SNo),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (LinkedUserID) REFERENCES Users(UserID),
    FOREIGN KEY (RelType) REFERENCES RelTypes(RelType)
);

CREATE TABLE WebsiteContent (
	SNo INT UNSIGNED NOT NULL AUTO_INCREMENT,
    BucketType VARCHAR(45) NOT NULL,
    ContentType CHAR(1) NOT NULL,
    LocationID VARCHAR(45) NOT NULL,
    URL VARCHAR (90) NOT NULL,
    PRIMARY KEY (SNo),
    FOREIGN KEY (BucketType) REFERENCES UserBuckets(BucketType)
);