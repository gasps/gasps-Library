---
title: loading the gasps library
description: booting the gasps library
layout: ../layouts/MainLayout.astro
---

## booting the library

```lua
local gasps = loadstring(game:HttpGet('https://raw.githubusercontent.com/gasps/gaspsUI/main/source'))()
```

### secure mode

if the game you're trying to run gasps interface suite on, is detecting or crashing when you use gasps interface suite, try using secure mode:

- place `getgenv().securemode = true` above the initial gasps loadstring

gasps will now use secure mode and attempt to reduce detection

- note: this may cause some elements of the ui to look lower quality or may increase loading times slightly

### enabling configuration saving

- enable configurationsaving in the createwindow function
- choose an appropiate filename in the createwindow function
- choose an unique flag identifier for each supported element you create
- place `gasps:Loadconfiguration()` at the bottom of all your code

gasps will now automatically save and load your configuration
