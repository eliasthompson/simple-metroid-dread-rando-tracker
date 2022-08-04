# Simple Metroid Dread Rando Tracker

## OBS Studio Setup
1. Add a new Browser Source to your scene.
2. Put the following values in the corresponding fields:
  * URL: `https://eliasthompson.github.io/simple-metroid-dread-rando-tracker/`
  * Width: `680`
  * Height: `384` (or `310` to hide the experimental "Go Mode" indicator)
3. Place the tracker in your scene.

## OBS Studio Usage
* To use the tracker, right click the source in your Sources list and select `Interact`.
* To toggle any item on or off, left-click the item in the window that comes up.

Please note that the "Go Mode" indicator cannot be clicked and is currently designed to automatically toggle on or off based on the items needed to clear the game in standard settings. It assumes glitchless logic, save for a simple psuedowave underneath the Ferenia elevator to Hanubia, and does not yet account for boss DNA requirements.

### Starting items
To add always-on starting items, such as Slide or Charge Beam, add them as parameters to the URL. For example:
* `?startingitems=slide`
* `?startingitems=slide,chargebeam`
* `?startingitems=widebeam,plasmabeam,wavebeam`

The list of valid starting item values is as follows: `chargebeam`, `diffusionbeam`, `widebeam`, `plasmabeam`, `wavebeam`, `supermissile`, `icemissile`, `stormmissle`, `variasuit`, `gravitysuit`, `spinboost`, `spacejump`, `morphball`, `bomb`, `crossbomb`, `powerbomb`, `slide`, `spidermagnet`, `speedbooster`, `grapplebeam`, `screwattack`, `phantomcloak`, `flashshift`, & `pulseradar`.

## Disclaimer
The icons are primarily pulled from images provided on the Metroid Dread Speedrunning discord server and recolors/edits of them. The goal is to eventually have clean, full-front images of the pickups, but until I can figure out how to get those this was the best I could do. If you can assist in making the icons look a little better, please let me know.
