# End-to-End Encryption Using Node.js

This project demonstrates a simple implementation of end-to-end encryption (E2EE) using Node.js and the `crypto` module. E2EE ensures that only the sender and the intended recipient can read the message, providing a high level of security for communications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
  - [1. Generate Key Pairs](#1-generate-key-pairs)
  - [2. Encrypt a Message](#2-encrypt-a-message)
  - [3. Decrypt the Message](#3-decrypt-the-message)
  
## Introduction

End-to-end encryption (E2EE) is a method of encrypting data such that only the communicating users can read it. It prevents potential eavesdroppers, including telecom providers, Internet providers, and even the service providing the communication platform, from being able to access the cryptographic keys needed to decrypt the conversation.

In this project, we use RSA (Rivest–Shamir–Adleman) encryption, a widely-used public-key cryptosystem, to implement E2EE in Node.js.

## Features

- Generate RSA key pairs for encryption and decryption
- Encrypt messages using the recipient's public key
- Decrypt messages using the recipient's private key

## Requirements

- Node.js (v18.17.1 or later)
- `crypto` module (built into Node.js)
- `fs` module (built into Node.js)

## Setup

### 1. Generate Key Pairs

First, generate RSA key pairs for encryption and decryption.

### 2. Encrypt a Message

Encrypt a message using the recipient's public key.

### 3. Decrypt the Message

Decrypt a message using the recipient's private key.
