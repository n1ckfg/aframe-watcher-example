## glitch-aframe-watcher

Use the save button of A-Frame Inspector on Glitch.

![](https://user-images.githubusercontent.com/674727/49696477-fa525f00-fb5e-11e8-92e9-be0c9461f4ac.png)

Are you tired of switching back and forth between your text editor, the Inspector, and refreshing? Now you can save your changes from the Inspector directly to your HTML files. The Inspector has built-in support with a save button for the Watcher. Just make sure your entities have defined IDs.

### Usage

This version of aframe-watcher works on Glitch 🎉

1. edit your scene in the aframe-editor (make sure everything you want to save has a defined ID)
2. press that little floppydisk button (ask your grandfather if you don't know what that is)
3. stuff is automatically updated on the server 🥳

### Warning

Currently the watcher only handles entity updates that have defined IDs:

```
<a-entity id="updateMe"></a-entity>
```

### Security

Currently anyone who has access to your glitch can modify your HTML on your server (!)  
Make your glitch private if you don't want that.
