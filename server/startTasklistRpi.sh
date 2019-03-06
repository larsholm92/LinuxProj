#!/bin/bash

# /etc/init.d/startTasklistRpi.sh
### BEGIN INIT INFO
# Provides:          startTasklistRpi.sh
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start daemon at boot time
# Description:       Enable service provided by daemon.
### END INIT INFO

cd /home/pi/repos/homeServer/LinuxProj/server/routes
DEBUG=server:* npm start&
cd /home/pi/repos/homeServer/LinuxProj/server/Client/homepage
ng serve --host 0.0.0.0 --port 5001 --disable-host-check&