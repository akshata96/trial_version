/* Bucket Type */

INSERT INTO StartwellDB.UserBuckets (BucketType,BucketDesc) VALUES ("Demographics","Demographics of the user");

/* Cateogiries */

INSERT INTO StartwellDB.SCategories (CategoryID,BucketType,CatDesc) VALUES ("Demographics Survey","Demographics","Survey asked to users for Demograpjics");

/* Survey */

INSERT INTO StartwellDB.Surveys 
(SurveyTitle,NoQues,OptDesc,CategoryID,SurveyStatus) VALUES
("Demographics Survey","11","MCQ","Demographics Survey","A");


/* Survey Questions */

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","1","Age:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","2","Race & Ethnicity:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","3","Gender Identity:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","4","Sexual Orientation:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","5","Relationship status:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","6","What is your zip code:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","7","Street name:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","8","City:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","9","State:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","10","What is your phone number:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","11","How did you hear about StartWell:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","10","What inspired you to sign up","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("2","11","Have you tried therapy before","R");

/* Option Insertion */

/* Age */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","1","Under 18");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","2","19 to 24");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","3","25 to 34");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","4","35-44");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","3","25 to 34");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","4","45 to 54");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","4","55-64");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","20","4","65 and Above");

/* Race & Ethnicity */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","1","American Indian/Alaska Native");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","2","Asian");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","3","Native Hawaiian or Other Pacific Islander");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","4","Black or African American");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","5","Hispanic / Latino");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","6","White");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","7","More Than One Race");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","21","8","Unknown");

/* Gender Identity */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","1","Female");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","2","Male");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","3","Trans female");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","4","Trans male");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","5"," Non-binary");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","6","Intersex");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","7","Other");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","8","Prefer not to answer");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","22","9","Do not know");

 /* Sexual Orientation */
 
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","1","Straight");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","2","Gay");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","3","Lesbian");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","4","Bisexual");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","5","Asexual");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","6","Pansexual");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","7","Queer");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","8","Questioning");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","23","9","Prefer not to answer");
 

/* Relationship status */ 

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","1","Single");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","2","In a relationship");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","3","Engaged");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","4","Married");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","5","In a domestic partnership");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","6","In a civil union");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","7","It's complicated");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","8","In an open relationship");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","9","Widowed");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("2","24","10","Prefer not to answer");
 
 
















