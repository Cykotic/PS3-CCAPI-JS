# PS3 CCAPI Node.js

A Node.js wrapper for PS3 CCAPI (Console Communication API) that allows sending notifications to your PlayStation 3 console.

## Features

- Connect/disconnect from PS3 console
- Send text notifications to the console

## Prerequisites

- Node.js 14+ ([Node v16 (32-bit)](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x86.msi))
- Windows PC (CCAPI.dll is Windows-only)
- PlayStation 3 with CCAPI installed
- Network connectivity between PC and PS3

## Installation

1. Clone this repository or add the PS3.js file to your project
2. Install dependencies:

```bash
npm install ffi-napi
```
## Note:
This is a basic implementation of `connect` and `notify`, designed specifically for CCAPI (PS3). 
Having already developed versions for Xbox 360 and PS4, it made sense to extend support to PS3, completing the lineup.

## Credit: 
- iMoD1998 Python ([PS3API](https://github.com/iMoD1998/PS3API))
