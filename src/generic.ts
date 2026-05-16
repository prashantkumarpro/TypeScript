function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({ flavor: "ginger" })


function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", "test")
pair("masala", 20)
pair("masala", { flavor: "ginger" })


interface Box<T> {
    content: T
}

const stringBox: Box<string> = {
    content: "This is a contnet"
}
const numberBox: Box<number> = {
    content: 25
}

// Real world use cases
 interface ApiPromise<T>{
    status:number,
    data:T
 }

 const res:ApiPromise <{flavor:string}> = {
    status : 200,
    data:{flavor:"masala"}
 }


 // React form state

 // State mangament