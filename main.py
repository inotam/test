import torch
import argparse
import torchvision
import

parser = argparse.ArgumentParser(description='This script is ...')


args = parser.parse_args()

#the number of epochs
num_epochs = 50

# list to save results
train_loss_list = []
train_acc_list = []
test_loss_list = []
test_acc_list = []

for epochs in range(num_epochs):
    #initialization
    train_loss = 0
    train_acc = 0
    test_loss = 0
    test_acc = 0

    # change to train mode
    net.train()

    #split and load
    for i, (images, labels) in enumerate(trian_loader):
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = net(images)
        loss = criterion(outputs, labels)
        train_loss += loss.item()
        train_acc += (outputs)
        loss = loss.item()

