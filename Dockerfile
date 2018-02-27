# Base docker image
FROM node:8.9.3
MAINTAINER Radhey

RUN apt-get update && apt-get install -y --no-install-recommends \
   apt-utils php5 php5-mysql php5-sqlite \
&& rm -rf /var/lib/apt/lists/*

ADD . /opt
WORKDIR /opt/
RUN npm install package.json
RUN npm test
