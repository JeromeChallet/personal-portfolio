# Project Name

ML_Self_Driving_Car

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Quick project of a self driving car using JavaScript.\

## Features

1. Self-Driving Car Simulation: self-driving car driving and avoiding other vehicles\
2. Sensor Simulation: Simulate sensors on the car using raycasting to detect proximity to the road's edge or other cars in traffic.\
3. Collision Detection: using segment intersection formulas, supporting various orientations and shapes.\
4. Neural Network Visualization: inspired by biological neural networks, optimizing them through trial and error.\
5. Genetic Algorithm Optimization: Optimize neural networks using a basic genetic algorithm, parallelizing the process to save time.\

## Installation

clone the the project then run locally, i used Live Server extension.\

```bash
# Clone the repository
git clone <repository_url>

#  dependencies
none
```

## Usage

Call the save() and discard() methods in the browser console when you want to store a car's brain in local storage.\

Everytime you click a button it will automatically refresh the browser remembering the last brain.\

Play with the number of cars simulated in parallel N (line 9) and the mutation amount (line 0.4)\

Changing properties of the neural network or the sensor requires you to call discard() in the console so that the old ones don't come from local storage.\

Everytime you see the car making positive progress click save. It will refresh the browser and the car will keep trying.\

If you dont like what the car is doing click the bin button, it will trash the last brain and refresh the browser.\

If the car hits the side of the road and come to a stop click the reload button. It won't affect the state of the brain.\
