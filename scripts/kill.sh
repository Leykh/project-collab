set -x
kill $(cat .pidfile)

cd frontend
set -x
kill $(cat .pidfile)