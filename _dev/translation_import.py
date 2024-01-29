

from os import path
import os


def proc_dir(dirpath:str, base_path:str):
    """
    dirpath: absolute path
    """
    dirpath+='\\'
    if not dirpath.startswith(base_path):
        print('ERROR: dirpath does not starts with base_path, indicating path not matching')
        return
    # targetPath = base_path + '\\tmp' + dirpath[len(base_path):]
    print(dirpath)

curr = os.getcwd()
print("base dir: " + curr)
print('------')
for (dirpath, dirnames, filenames) in os.walk(curr):
    if dirpath.endswith("lang"):
        proc_dir(dirpath, curr)