---
title: binding keys in gasps
description: creating a keybind in gasps
layout: ../layouts/MainLayout.astro
---

## creating a keybind

```lua
local Keybind = Tab:CreateKeybind({
   Name = "keybind example",
   CurrentKeybind = "Q",
   HoldToInteract = false,
   Flag = "Keybind1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Keybind)
   -- The function that takes place when the keybind is pressed
   -- The variable (Keybind) is a boolean for whether the keybind is being held or not (HoldToInteract needs to be true)
   end,
})
```

### updating a keybind

```lua
Keybind:Set("rightctrl") -- Keybind (string)
```
