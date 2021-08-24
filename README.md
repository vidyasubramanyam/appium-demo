# jenkins-appium-tests
Please refer to the [appium getting started](https://appium.io/docs/en/about-appium/getting-started/?lang=en) to start the new application

## Other useful links
[The follow the link for macbook](https://krishnachetan.medium.com/setup-appium-on-mac-1e06f1178427)

[Dockerizing appium tests](https://medium.com/testvagrant/dockerizing-appium-tests-c9696809afec)

[Dockerize Android emulator](https://github.com/google/android-emulator-container-scripts)


### Execute the commanns

```
export JAVA_HOME=$(/usr/libexec/java_home)
export ANDROID_HOME=$HOME/Library/Android/sdk
echo $ANDROID_HOME
```
Install appium doctor and check everything looks good for Android
```
npm install -g appium-doctor
appium-doctor --android
```

Run the appium server - stop appium if it is already running
```
killall node
appium &
```
Install Jenkins **jenkins-lts** using HomeBrew
```
brew install jenkins-lts
```
To start jenkins-lts:
```
brew services start jenkins-lts
```
Or, if you don't want/need a background service you can just run:
```
  /usr/local/opt/openjdk@11/bin/java -Dmail.smtp.starttls.enable=true -jar /usr/local/opt/jenkins-lts/libexec/jenkins.war --httpListenAddress=127.0.0.1 --httpPort=8080

```
