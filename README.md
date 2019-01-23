# Vue Sphere Avatar
A simple component to display a sphere-shaped avatar for users, accounts, companies etc. An image can be used but falls back to initials on a colored background.

## Installation
```
npm install --save vue-sphere-avatar
```

## Usage
You can either use the component globally or locally.

### Globally
In your `main.js`, just import the library using:
```
import 'vue-sphere-avatar'
```
Then use the component directly in your template
```
<sphere-avatar :name="'Strawhat Pirates'" />
```
### Locally
Example usage in a SFC (single file component):
```
<template>
  <div>
    <sphere-avatar :name="'Strawhat Pirates'" />
  </div>
</template>

<script>
import SphereAvatar from 'vue-sphere-avatar';
export default {
  components: {
    SphereAvatar,
  },
}
</script>
```
### Props
| Name | Default | Type | Description
|--|--|--|--|
| src | null | String | Image source e.g. "https://picsum.photos/200" |
| size | 50 | Number | How big is the sphere in height and width |
| name | - | String | The name where the initials shall be extracted if none is provided |
| initials | - | String | The initials to put inside the sphere. If none is not provided, it will extracted from `name`. If `name` isn't provided a `?` is displayed. |
| color | - | String, Object | The background color of choice. String and Object inputs specified in [tinycolor2](https://www.npmjs.com/package/tinycolor2#accepted-string-input) are allowed. An invalid input would return black. <br> In case no value is provided, a color based on the `name` or `initials` will be assigned. This is to make sure the color doesn't change on every DOM update.|
| maxFontSize | 512 | Number | If you want a non-fit avatar display for initials, specify a maximum font size |
| minFontSize | 16 | Number | Minimum font size |

#### Fitty
[Fitty](https://github.com/rikschennink/fitty) is utilized to scale up or down the initials so it fits perfectly inside the sphere. To change how that looks, just specify `maxFontSize` and/or `minFontSize` accordingly.

#### Text color - Light or Dark
Text color is automatically contrasted to the background color via `tinycolor2`.
