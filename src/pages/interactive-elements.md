---
title: adding interactive elements
description: adding interactive elements to your gasps window
layout: ../layouts/MainLayout.astro
---

## notifying the user

```lua
gasps:Notify({
   Title = "notification title",
   Content = "notification content",
   Duration = 6.5,
   Image = 4483362458,
   Actions = { -- Notification Buttons
      Ignore = {
         Name = "okay",
         Callback = function()
         print("the user tapped 'okay'")
      end
   },
},
})
```

## creating a button

```lua
local Button = Tab:CreateButton({
   Name = "button example",
   Callback = function()
   -- The function that takes place when the button is pressed
   end,
})
```

### updating a button

```lua
Button:Set("button example")
```

### updating a button

```lua
local Toggle = Tab:CreateToggle({
   Name = "toggle example",
   CurrentValue = false,
   Flag = "Toggle1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Value)
   -- The function that takes place when the toggle is pressed
   -- The variable (Value) is a boolean on whether the toggle is true or false
   end,
})
```

### updating a button

```lua
Toggle:Set(false)
```

## creating a color picker

```lua
local ColorPicker = Tab:CreateColorPicker({
    Name = "color picker",
    Color = Color3.fromRGB(255,255,255),
    Flag = "ColorPicker1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
    Callback = function(Value)
        -- The function that takes place every time the color picker is moved/changed
        -- The variable (Value) is a Color3fromRGB value based on which color is selected
    end
})
```

### updating a color picker

```lua
ColorPicker:Set(Color3.fromRGB(255,255,255)
```

## creating a slider

```lua
local Slider = Tab:CreateSlider({
   Name = "slider example",
   Range = {0, 100},
   Increment = 10,
   Suffix = "marijuana",
   CurrentValue = 10,
   Flag = "Slider1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Value)
   -- The function that takes place when the slider changes
   -- The variable (Value) is a number which correlates to the value the slider is currently at
   end,
})
```

### updating a slider

```lua
Slider:Set(10) -- The new slider integer value
```

## creating an adaptive input (textbox)

```lua
local Input = Tab:CreateInput({
   Name = "input example",
   PlaceholderText = "input placeholder",
   RemoveTextAfterFocusLost = false,
   Callback = function(Text)
   -- The function that takes place when the input is changed
   -- The variable (Text) is a string for the value in the text box
   end,
})
```

## creating a dropdown menu

```lua
local Dropdown = Tab:CreateDropdown({
   Name = "dropdown example",
   Options = {"option 1","option 2"},
   CurrentOption = "option 1",
   Flag = "Dropdown1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Option)
   -- The function that takes place when the selected option is changed
   -- The variable (Option) is a string for the value that the dropdown was changed to
   end,
})
```

### updating a dropdown

```lua
Dropdown:Set("option 2") -- The new option value
```

## check the value of an existing element

To check the current value of an existing element, using the variable, you can do `ElementName.CurrentValue`, if it's a keybind or dropdown, you will need to use `KeybindName.CurrentKeybind` or `DropdownName.CurrentOption`
You can also check it via the flags from `gasps.Flags`
