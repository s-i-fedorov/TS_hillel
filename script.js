'use strict'
class EventManager {
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

        const index = this.handlers[eName].findIndex((existingHandler)=>{
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
const handler1 = (name,e)=>{
    console.log('handler1',name,e)}
const handler2 = (name,e)=>{
    console.log('handler2',name,e)}
const handler3 = (name,e)=>{
    console.log('handler3',name,e)}
const testMgr = new EventManager()
testMgr.on('hello',handler1)
testMgr.on('hello',handler2)
testMgr.on('hello',handler3)
// console.log(testMgr);
testMgr.off('hello',handler2)
testMgr.trigger('hello')
