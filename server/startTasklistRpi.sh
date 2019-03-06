#!/bin/bash
cd /home/pi/repos/homeServer/LinuxProj/server/routes
DEBUG=server:* npm start&
cd /home/pi/repos/homeServer/LinuxProj/server/Client/homepage
ng serve --host 0.0.0.0 --port 5001 --disable-host-check&