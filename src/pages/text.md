---
title: Textual elements in gaspsUI
description: Creating textual elements in gaspsUI
layout: ../layouts/MainLayout.astro
---

## Creating a Label

```lua
local Label = Tab:CreateLabel("Label Example")
```

### Updating a Label

```lua
Label:Set("Label Example")
```

## Creating a Paragraph

```lua
local Paragraph = Tab:CreateParagraph({Title = "Paragraph Example", Content = "Paragraph Example"})
```

### Updating a Paragraph

```lua
Paragraph:Set({Title = "Paragraph Example", Content = "Paragraph Example"})
```
