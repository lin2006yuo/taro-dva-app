import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoadding from 'dva-loading'

let app
let store
let dispatch
let registered

function createApp(opt) {
    opt.onAction = [ createLogger() ]
    app = create(opt)
    app.use(createLoadding({}))
    if(!registered) opt.models.forEach(model => app.model(model))
    registered = true
    app.start()

    store = app._store
    app.getStore = () => store
    app.use({
        onError(err) {
            console.lo(err)
        }
    })

    dispatch = store.dispatch

    app.dispatch = dispatch
    return app
}

export default {
    createApp,
    getDispatch() {
        return app.dispatch
    }
}