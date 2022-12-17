---
title: "Diagnose Slow Python Code"
date: 2022-12-17T13:59:16+02:00
draft: false
tags: ['python', 'performance']
---

To diagnose the slow of python code you can use python **profiling**, that track all the executed method and the time for each one
which allow you to find the real reason that causing the slow

## Code example

```python

import cProfile
import pstats
import requests

def main():
    with cProfile.Profile() as pr:
        # the method you want to profile and improve its performance
        requests.get('https://google.com')

    stats = pstats.Stats(pr)
    stats.sort_stats(pstats.SortKey.TIME)
    stats.print_stats()
    # to store in file
    # stats.dump_stats(filename='profiling.prof')

if __name__ == '__main__':
    main()

```
### output example

```
   10764 function calls (10698 primitive calls) in 0.681 seconds

   Ordered by: internal time

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
       10    0.212    0.021    0.212    0.021 {method 'read' of '_ssl._SSLSocket' objects}
        2    0.159    0.080    0.159    0.080 {method 'do_handshake' of '_ssl._SSLSocket' objects}
        2    0.124    0.062    0.124    0.062 {method 'load_verify_locations' of '_ssl._SSLContext' objects}
        2    0.102    0.051    0.102    0.051 {method 'connect' of '_socket.socket' objects}
        2    0.025    0.012    0.025    0.013 {built-in method _socket.getaddrinfo}
       70    0.012    0.000    0.012    0.000 {built-in method __new__ of type object at 0x5555fe0027e0}
        2    0.002    0.001    0.002    0.001 {built-in method marshal.loads}
```

all you need just check the `tottime` and know the reason

`#HappyCoding`
