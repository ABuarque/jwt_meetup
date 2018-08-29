# jwt_meetup
Project made for MCZ dev Meetp

To consume API

+ Log in:

``` 
POST http://localhost:9888/v1/users/sign_in
{
	"email":"capetao.flag@coldemail.com",
	"password":"VACA@MONSTRO"
}

Will give you as aswear:

{
    "email": "capetao.flag@coldemail.com",
    "password": "VACA@MONSTRO",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcGV0YW8uZmxhZ0Bjb2xkZW1haWwuY29tIiwiaWF0IjoxNTM1NDk5NTUyLCJleHAiOjE1MzYzNjM1NTJ9.ExE_vXZjFngvDmeNTwfWowzgSKdbyzSHqeMh2YSCGLA"
}

```
+ Geting authorized data:
```
GET http://localhost:9888/v1/users/user_data 
Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcGV0YW8uZmxhZ0Bjb2xkZW1haWwuY29tIiwiaWF0IjoxNTM1NDk3ODkzLCJleHAiOjE1MzYzNjE4OTN9.7kPNbTH3kcEPCQdNSexJhZbgXWe7XJkcv7KMBC8hUf4

will give you:
{
    "email": "capetao.flag@coldemail.com",
    "password": "VACA@MONSTRO"
}
```
