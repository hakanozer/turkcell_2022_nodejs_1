import events from 'events'

export const eventEmitter = new events.EventEmitter()

export enum eventEnum {
    fncOne = 'fncOne',
    fncTwo = 'fncTwo'  
}

let i = 0
const one = (data: any) => {
    i++
    console.log("Cal-1", i ,data);
}

const two = (data: any) => {
    console.log("Cal-2", data);
}

eventEmitter.on(eventEnum.fncOne, one)
eventEmitter.on(eventEnum.fncTwo, two)
