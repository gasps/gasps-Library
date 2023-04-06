---
title: windows in gasps
description: creating a window in gasps
layout: ../layouts/MainLayout.astro
---

## creating a window

```lua
local Window = Rayfield:CreateWindow({
   Name = "gasps example window",
   LoadingTitle = "gasps interface suite",
   LoadingSubtitle = "by sirius, gasps",
   ConfigurationSaving = {
      Enabled = true,
      FolderName = nil, -- Create a custom folder for your hub/game
      FileName = "big hub"
   },
   Discord = {
      Enabled = false,
      Invite = "noinvitelink", -- The Discord invite code, do not include discord.gg/. E.g. discord.gg/ABCD would be ABCD.
      RememberJoins = true -- Set this to false to make them join the discord every time they load it up
   },
   KeySystem = false, -- Set this to true to use our key system
   KeySettings = {
      Title = "gasps hub",
      Subtitle = "key system",
      Note = "join the discord (discord.gg/sirius), (discord.gg/guilty)",
      FileName = "gaspskey",
      SaveKey = true,
      GrabKeyFromSite = false, -- If this is true, set Key below to the RAW site you would like Rayfield to get the key from
      Key = "test"
   }
})
```

## creating a tab

```lua
local Tab = Window:CreateTab("tab example", 4483362458) -- Title, Image
```

## creating a section

```lua
local Section = Tab:CreateSection("section example")
```

### updating a section

```lua
Section:Set("section example")
```

## destroying the interface

```lua
Rayfield:Destroy()
```
