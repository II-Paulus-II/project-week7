#!/bin/bash

#curl -X POST -H "Content-type: application/json" -H "Accept: application/json" -d '{"id":"5"}' "http://localhost:8888/delete"
echo -e

curl -X POST -H "Content-type: application/json" -H "Accept: application/json" -d '{"title":"Good Title", "content" : "This is a very very important Post for real", "category" : "France"}' "http://localhost:8888/newpost"

echo -e
