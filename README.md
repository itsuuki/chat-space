## usersテーブル	
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|	
|email|string|null: false|	
|password|integer|null: false|


### Association	
- has_many chats	
- has_many groups_users	
- has_many groups, throuth: :groups_users	


## groups_usersテーブル	
|Column|Type|Options|	
|------|----|-------|	
|user_id|integer|null: false, foreign_key: true|	
|group_id|integer|null: false, foreign_key: true|	


### Association	
- belongs_to :group
- belongs_to :user	



## groupsテーブル	
|Column|Type|Options|	
|------|----|-------|	
|name|string|null: false|



### Association	
- has_many chats	
- has_many groups_users	
- has_many users throuth groups_users	


## chatsテーブル
|Column|Type|Options|	
|------|----|-------|	
|text|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association	
- belongs_to :group	
- belongs_to :user
