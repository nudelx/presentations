#!/bin/sh
docker run --name mongo -p 27017:27017 -v mongoVolume:/data/db -d mongo