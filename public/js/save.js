AFRAME.registerComponent("save", {
    
  schema: {
    host: {
      default:
        location.protocol +
        "//" +
        location.hostname +
        (location.port ? ":" + location.port : ""),
    },
  },

  init: function () {
    this.saveMethod = this.save.bind(this);
  },

  pause: function () {
    // clone old button, so we can get rid of the original event
    let el = document.querySelector(".toolbarActions .button.fa-save");
    let newEl = el.cloneNode(true);

    // add a new click event and replace the button
    newEl.addEventListener("click", this.saveMethod);
    el.parentNode.replaceChild(newEl, el);
    this.button = newEl;
  },

  play: function () {
    if (this.button) {
      this.button.removeEventListener("click", this.saveMethod);
    }
  },

  save: function () {

    console.log("Saving", AFRAME.INSPECTOR.history.updates);

    const xhr = new XMLHttpRequest();
    const url = this.data.host + "/save";

    xhr.open("POST", url);
    xhr.onerror = () => {
      alert("aframe-watcher not running?");
    };

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(AFRAME.INSPECTOR.history.updates));

  },
});
