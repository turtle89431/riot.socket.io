import '@riotjs/hot-reload'
import { mount, install } from 'riot'
import registerGlobalComponents from './register-global-components'
import io from 'socket.io-client'
// register
registerGlobalComponents()
install((comp) => {
        comp.io = io()
    })
    // mount all the global components found in this page
mount('[data-riot-component]')