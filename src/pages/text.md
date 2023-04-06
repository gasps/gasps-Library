---
title: textual elements in gasps
description: creating textual elements in gasps
layout: ../layouts/MainLayout.astro
---

## creating a label

```lua
local Label = Tab:CreateLabel("label example")
```

### updating a label

```lua
Label:Set("label example")
```

## creating a paragraph

```lua
local Paragraph = Tab:CreateParagraph({Title = "paragraph example", Content = "paragraph example"})
```

### updating a paragraph

```lua
Paragraph:Set({Title = "paragraph example", Content = "paragraph example"})
```
