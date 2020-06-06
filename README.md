# UpStarMusic
Starter Repo for a Webpack course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.  This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

```
git clone https://github.com/OsvaldoMartini/Webpack_Deploy_Surge_SH.git

cd Webpack_Deploy_Surge_SH

npm install
```

## G Suite Toolbox - Dig DNS Dig Tool
https://toolbox.googleapps.com/apps/dig/#AAAA/
## Install:
https://help.dyn.com/how-to-use-binds-dig-tool/
https://www.isc.org/downloads/
##Usage:
```
>dig www.wservices.co.uk +nostats +nocomments +nocmd
>dig www.wservices.co.uk +nostats +nocomments +nocmd
>dig www.wservices.co.uk +nostats +nocomments +nocmd
```
## Videos 49 and 50
Deploymnet of Servers and Node and Webpack Integration

making webpack Middleware.
Creating a Stand Alone Server

```
npm install --save express
```

Install Webpack as  Middleware (For Intercept incoming request and hand it off to webpack)

```
npm install --save-dev webpack-dev-middleware@2.0.6
```
## If you get this error:
```
context.compiler.hooks.invalid.tap('WebpackDevMiddleware', invalid);
```

## These Versions really works together
```
  "webpack": "^2.2.0-rc.0",
  "webpack-dev-middleware": "^2.0.6",
  "webpack-dev-server": "^2.2.0-rc.0"
```

## Tests as PRODUCTION

```
SET NODE_ENV=production
Delete folder 'dist'
node server.js
```

## Adding some Authentication or Databasic Logic or anything like that
It is to Add Additional Route ABOVE .. 
## I meant: "ABOVE"... "ABOVE ALL WEBPACK INFORMATION"
server.js
```
//Servers Routes...

app.get('/hello', (req, res) => res.send({ hi: 'there' }));

if (process.env.NODE_ENV !== 'production') { ...
```

AWS and Heroku it Not Allow to Specific the Port here
But they will want you to bind to a port specified by the server

# SURGE 
## Static web publishing for Front-End Developers:
https://surge.sh/

## Install the Surge CLI
````
> npm install -g surge
````

Build the App:
````
npm run build
````

Deploy
````
npm run surge
````

## It can be any pasword at first 
````
surge -p dist  

ExpecteD to YOU press <ENTER> to continue
Expeting the confirmation of the URL
````

After "surge -p dist":
````
Result expected:

Success! - Published to gaping-join.surge.sh
````

# Google Domain
Add CNAME at the Domain
Instructions:

https://surge.sh/help/adding-a-custom-domain

## Setting a CNAME
To get started, you’ll need have a custom domain and sign into your account to manage it. now:

## 1) Add a new CNAME record to your domain.
## 2) Set the hostnames @ and www to:
````
>>  na-west1.surge.sh
````

If your DNS provider doesn’t support CNAME records for apex domains, you can set an A record to the following IP address instead:
````
45.55.110.124
````
Apply the Deploy
````
surge -p dist  shifthunter.com
````

Results expected:
````
PS C:\Projects\Webpack_Deploy_Surge_SH> surge -p dist  shifthunter.com

   Running as osvaldo.martini@gmail.com (Student)

        project: dist
         domain: shifthunter.com
         upload: [====================] 100% eta: 0.0s (7 files, 1434047 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124

   Success! - Published to shifthunter.com
````
## Then try to access via 
````
shifthunter.com
````