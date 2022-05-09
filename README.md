# Modal Helper
custom modal Helper for React Native.

## Install
[npm install react-native-popup-confirm-toast](https://www.npmjs.com/package/react-native-popup-confirm-toast)

## Parameters
- children
- title: There is a textBody option, but there's not much to say inside the small modal so just use the title (or just the textBody)
- img: There is a default icon in the package, but you can use image. (**type is requireUrl**)
- type: (In the case of a popup) success, danger, warning and confirm.

## How to use
1. Import Root and this helper

    ```　
    import { Root } from "react-native-popup-confirm-toast";
    import ModalHelper from "../components/ModalHelper";
　
2. Put the Root just under SafeAreaView
  
3. Put the button between the ModalHelper

