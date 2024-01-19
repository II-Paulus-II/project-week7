#!/bin/bash

curl -X POST -H "Content-type: application/json" -H "Accept: application/json" -d '{"id":"5"}' "http://localhost:8888/delete"
echo -e
