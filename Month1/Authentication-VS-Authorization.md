=> Authentication
it is the process of verifying who are you
Example: at the clg entrance gate the security guard checks your ID and verify and then only let's you in this is called authentication
--> common authentication methods
1) Username and password
most commmon, eg. instagram, facebook
2) OTP 
login -> OTP sent -> verify -> login
3) Fingerprint
phone unlock
4) Face recognition
iphone Face ID
5) Multi-Factor authentication
password + OTP + fingerprint

--> Authentication Flow
user -> Enter credentials -> server -> database -> Valid? -> YES -> Authenticated

=> Authorization
example: can every student edit everyone's marks? -> no, only teachers can
this is authorization

-->How login actually works?
user -> enter email and password -> Frontend(react) -> POST/login -> Backend(node.js) -> database -> password match? -> YES -> create session/JWT -> return success -> dashboard open

=> Sessions
suppose you login to gmail. after login, you dont have to enter your password again on every page. why? -> bcz the server remembers you. this is called session

--> session flow 
login -> server creats session -> session ID generated -> browser stores session ID -> every request -> session ID sent -> sever recognizes user

=> cookies
where is the session ID stored? -> usually inside a cookie
-> a cookie is a small piece of data stored in the browser

--> cookie flow
login -> server -> cookie created -> browser stores cookie -> next request -> cookie sent -> server recognizes user
so everytime there is no need to enter the password

=> JWT (Json web Token)
-> modern applicationws dont always use sessions, instead they use JWT
-> JWT is a special token

--> JWT flow
login -> server verifies password -> creates JWT -> sends JWT -> browser stores JWT -> every request -> JWT sent -> server verifies JWT -> access granted

--> why JWT? bcz it is fast, stateless, used in MERN

--> Authentication in MERN
react -> login form -> node.js -> express -> mongoDB -> JWT -> dashboard

=> cybersecurity perspective
-> authenticatin is a hug attack surface 
-> attackers try: brute force, credential stuffing, password spraying, session hijacking, cookie theft, jwt manipulation
