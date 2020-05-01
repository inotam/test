from __future__ import print_function
import argparse
import torch
import torch.utils.data
from torch import nn, optim
from torch.nn import functional as F
from torchvision import datasets, transforms
from torchvision.utils import save_image
import numpy as np
import pickle
list = []

dset = datasets.FashionMNIST('../data', train=True, download=True, transform=transforms.ToTensor())
for i in range(len(dset)):
    #if :
        #list.append(dset[i])
with open('train.pickle','wb') as web:
    pickle.dump(list, web)



