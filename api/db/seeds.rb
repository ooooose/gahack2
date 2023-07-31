theme_1 = Theme.find_or_create_by(title: "カエル")
theme_2 = Theme.find_or_create_by(title: "腕を組む人")
theme_3 = Theme.find_or_create_by(title: "怒ってるモチ")

user = User.find_or_create_by(uid: 'aaa', name: 'oose', twitter_name: 'oose', avatar: 'sample_avatar', description: '')

picture_1 = Picture.find_or_create_by(user_id: user.id, theme_id: theme_1.id, image: 'image_a', frame_id: 0)
picture_2 = Picture.find_or_create_by(user_id: user.id, theme_id: theme_2.id, image: 'image_b', frame_id: 0)
picture_3 = Picture.find_or_create_by(user_id: user.id, theme_id: theme_3.id, image: 'image_c', frame_id: 0)

Comment.find_or_create_by(user_id: user.id, picture_id: picture_1.id, body: "コメントサンプル1")
Comment.find_or_create_by(user_id: user.id, picture_id: picture_2.id, body: "コメントサンプル2")
Comment.find_or_create_by(user_id: user.id, picture_id: picture_3.id, body: "コメントサンプル3")
