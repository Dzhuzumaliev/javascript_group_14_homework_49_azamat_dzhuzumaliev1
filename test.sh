#!/bin/bash

mkdir -p projects/my_project
cd projects/my_project
mkdir directory1 directory2 directory3
cd directory1
mkdir subdirectory1
cd ..
cd directory2
echo "Hello from JS" | tee hello.text
cd ..
cd directory3
mkdir subdirectory2