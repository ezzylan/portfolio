---
title: "Some resources for setting up PostgreSQL in Fedora Linux"
description: "Some resources I found handy to setup PostgreSQL in Fedora Linux "
pubDate: "Dec 25 2025"
---

For the installation:
https://docs.fedoraproject.org/en-US/quick-docs/postgresql/

For setting up:
https://www.theodinproject.com/lessons/nodejs-installing-postgresql#step-1-make-sure-the-system-is-up-to-date

After you done these two, If you are anything like me, you would've gotten some weird error when connecting to PostgreSQL with password authentication.

```bash
sudo gedit /var/lib/pgsql/data/pg_hba.conf
```

and edit `host all all 127.0.0.1/32 ident` to `host all all 127.0.0.1/32 md5`. I've had to bash my head against the wall for hours to find this solution, later to find that this have been documented in the Fedora docs I linked earlier.

This is for my future self not to waste time on this again.
