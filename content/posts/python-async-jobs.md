---
title: "Python Async Jobs"
date: 2022-12-20T02:02:11+02:00
draft: false
tags: ['python', 'async', 'multiprocessing']
---

i wanna talk about 3 ways to make async jobs and use the whole processor power with python

## AsyncIo

This library is very good for I/O operation like reading/writing to the disk or network jobs
that the process wait sometime doing nothing

this library allow other tasks to use the thread while the first task is waiting

its not good enough if your task use raw computation 

## Threads

This way the python program will run on many threads but there is a limitation here because
python program use [GIL](https://realpython.com/python-gil/) **that allows only one thread to hold the control of the Python interpreter**

then while [GIL](https://realpython.com/python-gil/) you will not able to use the full power of the CPU

```python

from multiprocessing.dummy import Pool as ThreadPool

with ThreadPool() as pool:
    results = pool.imap_unordered(do_work, array)

```


## MultiProcessing

Its run the python program multiple time each one on its own python interpreter with its own [GIL](https://realpython.com/python-gil/)
then we avoid the locking and you will use the full power of your CPU

```python

from multiprocessing import Pool

with Pool() as pool:
    results = pool.imap_unordered(do_work, array)

```


## When to avoid multi processing ?!

- don't do it if your task don't take a really long time, because creating processes and communicating between them is really expensive. so make sure that multiprocessing cost is less than the cost of just doing the computation.

- unlike the threads processes don't share the memory, so to share variables between processes it must be serialized be a thing called `pickle` , if your data is not serializable then it will raise an error

`#HappyCoding`
