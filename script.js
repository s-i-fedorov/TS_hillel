'use strict'
new class EventManager {
    handlers = {}

    on(eName, eHandler){
        if(Array.isArray(this.handlers[eName])){
            this.handlers[eName].push(eHandler)
            return
        }
        this.handlers[eName] = [eHandler]
    }
    off(eName, eHandler){
        if(!this.handlers[eName]) return;

        const index = this.handlers.findIndex((existingHandler)=>{
            return existingHandler === eHandler
        })

        this.handlers[eName].splice(index, 1)
    }
    trigger(eName){
        if(!this.handlers[eName]) return
        this.handlers[eName].forEach((handler)=>{
            handler(eName, this)
        })
    }

}