#!/bin/bash
set -e #exit on first error

cd "$(dirname "$0")"

psql -c "CREATE USER jobsdbuser WITH PASSWORD 'anonymous';"
createdb jobsdb -O jobsdbuser
psql -U jobsdbuser -d jobsdb -f tables.sql
psql -U jobsdbuser -d jobsdb -f data.sql
