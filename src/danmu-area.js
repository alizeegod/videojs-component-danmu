/**
 * Author: zhangqiang
 * Create Time: 2020-05-18 16:03
 * Description:
 */

import videojs from 'video.js'

let Component = videojs.getComponent('Component')
const DanmuArea = videojs.extend(Component, {
    constructor(player, options) {
        this.CM = null;
    },
    createEl() {
        let area = videojs.dom.createEl('div', {
            className: 'vjs-danmu-area'
        })
    }

})

videojs.registerComponent('DanmuArea', DanmuArea)
