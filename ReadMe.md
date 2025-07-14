# FiveM UI Lib

A simple JavaScript class to streamline communication between your FiveM client scripts and HTML NUI, including helper methods for `SendNUIMessage`, `RegisterNUICallback`, and browser notifications.

---

## 📦 Installation

Include the library in your `index.html`:

### html

```
<script src="https://cdn.jsdelivr.net/gh/Jax-Danger/fivem-ui-lib@v1.0.0/dist/ui-lib.js"></script>
```

# ✅ Features

- Easy on() and send() methods for NUI communication
- Custom showNotification() helper
- Clean event-driven syntax

# 🚀 Usage Example

### HTML (index.html)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://cdn.jsdelivr.net/gh/Jax-Danger/fivem-ui-lib@v1.0.0/dist/ui-lib.js"></script>
</head>
<body>
  <button onclick="fivem.send('buttonClicked', { time: Date.now() })">Send Event</button>

  <script>
    fivem.on("notify", (data) => {
      fivem.showNotification(data.message);
    });

    // Notify FiveM that the UI is ready
    fivem.send("ready", { loaded: true });
  </script>
</body>
</html>
```

# Client Script (client.lua)

```
RegisterNUICallback("ready", function(data, cb)
  print("UI ready:", data.loaded)
  cb({})
end)

RegisterNUICallback("buttonClicked", function(data, cb)
  print("Button clicked at:", data.time)
  cb({})
end)

SendNUIMessage({
  type = "notify",
  message = "Hello from Lua!"
})
```

# 🛠 API

`fivem.on(type, callback)`
Registers a handler for a message sent from Lua via SendNUIMessage.

`fivem.send(type, data)`
Sends a message back to the client using RegisterNUICallback.

`fivem.showNotification(text)`
Displays a styled temporary message on screen.

# 🔖 CDN Tags

For latest:
`<script src="https://cdn.jsdelivr.net/gh/Jax-Danger/fivem-ui-lib@main/dist/ui-lib.js"></script>`

For versioned:
`<script src="https://cdn.jsdelivr.net/gh/Jax-Danger/fivem-ui-lib@v1.0.0/dist/ui-lib.js"></script>`

# End

Let me know if you want badges, prettier formatting, or GitHub Pages documentation.
