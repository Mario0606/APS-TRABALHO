import psycopg2
from psycopg2.extras import RealDictCursor
from threading import Thread
from time import sleep
from datetime import datetime


def pg_connection():
    """postgres connection.

    Returns
    -------

        (connection): postgres connection

    """
    conn = "host=127.0.0.1 port='' dbname=aps user=aps_admin password=APSadmin"
    return psycopg2.connect(conn)


def events_monitor():
    while True:
        conn = pg_connection()
        now = datetime.now()
        open_ = """update events set status='open' where %s > start_date and %s < end_date"""
        closed_ = """update events set status='finished' where %s > end_date"""
        will_open = """update events set status='will_open' where %s < start_date"""
        with conn:
            with conn.cursor() as curs:
                curs.execute(open_, (now, now,))
                curs.execute(closed_, (now,))
                curs.execute(will_open, (now,))
        sleep(30)


def start_monitor():
    """"""
    print('bkabka')
    Thread(target=events_monitor, args=()).start()