# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...





## usersテーブル	## usersテーブル
|Column|Type|Options|	|Column|Type|Options|
|------|----|-------|	|------|----|-------|
|name|string|null: false|	|name|string|null: false|
|email|string|null: false|	|email|string|null: false|
|password|integer|null: false|	|password|integer|null: false|
### Association	### Association
- has_many chats	- has_many chats
- has_many groups_users	- has_many groups_users
- has_many group throuth groups_users	- has_many group throuth groups_users
## groups_usersテーブル	## groups_usersテーブル
|Column|Type|Options|	|Column|Type|Options|
|------|----|-------|	|------|----|-------|
|user_id|integer|null: false, foreign_key: true|	|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|	|group_id|integer|null: false, foreign_key: true|
### Association	### Association
- belongs_to :group	- belongs_to :group
- belongs_to :user	- belongs_to :user
## groupsテーブル	## groupsテーブル
|Column|Type|Options|	|Column|Type|Options|
|------|----|-------|	|------|----|-------|
|group_name|string|null: false|	|group_name|string|null: false|
### Association	### Association
- has_many chats	- has_many chats
- has_many groups_users	- has_many groups_users
- has_many users throuth groups_users	- has_many users throuth groups_users
## chatsテーブル	## chatsテーブル
|Column|Type|Options|	|Column|Type|Options|
|------|----|-------|	|------|----|-------|
|text|text|null: false|	|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association	### Association
- belongs_to :group	- belongs_to :group
- belongs_to :user