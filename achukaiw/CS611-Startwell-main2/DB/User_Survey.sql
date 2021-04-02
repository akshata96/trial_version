/* Bucket Type */

INSERT INTO StartwellDB.UserBuckets (BucketType,BucketDesc) VALUES ("All","General to all Users");

/* Cateogry Type */

INSERT INTO StartwellDB.SCategories (CategoryID,BucketType,CatDesc) VALUES ("UserSurvey","All","Survey asked to users for matching");

/* Survey */
INSERT INTO StartwellDB.Surveys 
(SurveyTitle,NoQues,OptDesc,CategoryID,SurveyStatus) VALUES
("User Matching Survey","19","MCQ","UserSurvey","A");

/* Survey Questions */

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","1","Therapist directiveness:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","2","Emotional intensity:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","3","Past Vs. Present:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","4","Warm vs. Challenging:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","5","Gender Preference:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","6","Racial/cultural Preference:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","7","Age Preference:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","8","Sexual orientation Preference:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","9","Religious Preference:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","10","What modality of therapy would you prefer:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","11","How many sessions would you like to be in therapy:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","12","How long would you like your sessions to be","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","13","What orientation of therapy would you prefer:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","14","What are some of your concerns:","C");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","15","Are you interested in self help books, apps or podcasts regarding your concerns:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","16","Are you interested in support groups:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","17","Are you interested in telehealth:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","18","Do you need support with housing or other resources apart from mental health:","R");

INSERT INTO StartwellDB.SQuestions (SurveyID,QuesID,QText,RespType) VALUES 
("1","19","What would you most dislike or despise happening in your therapy or counselling:","T");

/* Option Insertion */


/* Therapist Directiveness */
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","1","1","Strong Directive Preference");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","1","2","Strong Client Preference");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","1","3","NO Preference");

/* Emotional Intensity */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","2","1","Strong Preference for Emotional intensity");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","2","2","Strong Preference for Emotionally reserved");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","2","3","NO preference");


/* Past Vs. Present */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","3","1","Strong Past Preference");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","3","2","Strong Present Preference");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","3","3","No Preference");

/* Warm vs. Challenging */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","4","1","Strong Warm and Supportive Preference");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","4","2","Strong Focus and Challenging Preference ");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","4","3","No Preference");

/* Gender Prefernce */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","5","1","Male");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","5","2","Female");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","5","3","Transgender");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","5","4","No Preference");

/*  Racial Identity */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","6","1","Asian");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","6","2","African American");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","6","3","Hispanic or Latino");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","6","4","White");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","6","5","Others");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","6","6","No Preference");

/* Age Preference */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","7","1","Below 35");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","7","2","35 to 50");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","7","3","Above 50");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","7","4","No Preference");


/* Sexual Oreintation */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","8","1","Hetrosexual");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","8","2","Homosexula");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","8","3","Bisexual");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","8","4","No Preference");

/* Religion */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","9","1","Religious");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","9","2","Non-Religious");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","9","3","No Preference");


/*Modulatity*/

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","10","1","Individua");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","10","2","Couples");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","10","3","Family");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","10","4","Group");

/*  how many Sessions */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","11","1","5");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","11","2","12");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","11","3","20");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","11","4","Long term");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","11","5","Open Ended");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","11","6","I am Not Sure");

/* How long */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","12","1","15 minutes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","12","2","30 minutes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","12","3","45 minutes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","12","4","60 minutes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","12","5","I am Not Sure");



/* Orientation */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","13","1","I really don’t know");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","13","2","Cognitive / Cognitive-Behavioral");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","13","3","Psychodynamic");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","13","4","Person Centered");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","13","5","Other");

/* concern */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","1","Anxiety and stress");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","2","Depression and self-esteem");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","3","Relationships/lack thereof ");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","4","Habits and behaviors");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","5","Trouble getting through the day");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","6","Trouble being in the present moment");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","7","Substance use behaviors");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","8","Bipolar symptoms");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","9","OCD symptoms");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","10","Trauma or PTSD symptoms");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","11","ADD/ADHD symptoms ");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","12","Eating disorder symptoms");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","13","Grief symptoms");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","14","BPD symptoms ");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","15","Trouble with sex");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","16","Child/adolescent ");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","17","Family");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","14","18","Chronic Pain ");

/* Self help */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","15","1","Yes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","15","2","No");

/* support group */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","16","1","Yes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","16","2","No");


/* Tele health */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","17","1","Yes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","17","2","Combination of both in person and telehealth");

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","17","3","I’d prefer it in person");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","17","4","No I only want in person");

/* Housing support */

INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","18","1","Yes");
INSERT INTO StartwellDB.QOptions (SurveyID,Combination,OptID,OptText) 
VALUES ("1","18","2","No");






