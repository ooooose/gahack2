include FirebaseAuth

module FirebaseAuthHelper
  def sign_in_with_google
    # テスト用のFirebaseユーザーを作成し、Googleプロバイダーでログイン
    @firebase_user = create_firebase_user_with_google
    
    # 認証ユーザーとして返す。
    return @firebase_user
  end

  private

  def create_firebase_user_with_google
    # Firebase Authenticationのモックを使用してテスト用のユーザーを作成
    user = Firebase::Auth::User.new(
      uid: 'test_user_uid',
      display_name: 'Test User',
      email: 'test@example.com',
      provider: 'google.com'
    )
    Firebase::Auth::User.create(user)

    # テスト用のユーザーをGoogleプロバイダーでログイン
    Firebase::Auth::AuthHash.new(
      provider: 'google.com',
      uid: user.uid,
      info: {
        email: user.email,
        name: user.display_name
      }
    )
  end
end
