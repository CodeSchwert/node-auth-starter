#!/bin/sh
#
# MongoDB service currently doesn't work for MongoDB 
# installed on Windows 10 WSL, thus this script can
# be used to manually start the mongo server.
#

#sudo /usr/bin/mongod --quiet --config /etc/mongod.conf

sudo mongod
