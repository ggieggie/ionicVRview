# 動作確認済み環境
- Android6.0.1
- iOS9,10

# アプリ実行まで
リポジトリからソースコードをクローン

```
git clone https://bitbucket.org/ctiinnovation/colabapp
cd colabapp
```

必要なライブラリをnpmでインストール（python2が必要？）

```npm install```

動作をブラウザで確認

```ionic serve --lab```

# Android実機にて確認
- 前提条件
  - AndroidSDKがインストールされている事
  - 実機がPCとUSB接続されており、USBデバッグがONになっていること
  - colabapp直下に移動

プラットフォームにAndroidをadd

```ionic cordova platform add android```

android用にapkファイルを作成

```ionic cordova build android --dev --release```

キーストアの作成

```
keytool -genkey -v -keystore mykey.jks -keyalg RSA -keysize 2048 -validity 10000 -alias myalias
# キーストアのパスワード以外は、Unknownでよい
```

apkファイルに署名

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore mykey.jks ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk myalias
```

本番用アプリを作成

```
# SDKの位置やバージョン等によって、zipalignコマンドを適宜変えてください。
~/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk myapp.apk
```

実機にインストール

```
# SDKのインストール位置によって、adbコマンドを適宜変えてください。
~/Library/Android/sdk/platform-tools/adb install myapp.apk
```

以上で、Android端末で動作するはず。

# iPhone実機にて確認
- 前提条件
  - xcodeが入っている
  - 実機がPCとUSB接続されており、認識されていること
  - colabapp直下に移動
  
プラットフォームにiOSをadd

```ionic cordova platform add ios```

android用にapkファイルを作成

```ionic cordova build ios --dev```

xcodeで、以下のプロジェクトを開く

```./platform/ios/colabApp.xcodeproj```

デプロイさせるため、開発ユーザを作成や署名については、この[サイト](https://qiita.com/DKN915/items/7a2ce97f3758e2daf486)参照  
アカウントは、iPhoneのAppleIDじゃなくてもよい。なんでもよい。  
たまにSigningでエラーが出るが、Identity->Bundle Identifierを別の名前に変えると解消できたりする。

あとは、実行ボタンを押して、端末側でアプリを信頼する事で確認可能です。

