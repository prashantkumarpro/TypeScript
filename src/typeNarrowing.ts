function chai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    }
    return `Chai order : ${kind}`
}

function serveCahi(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}


function orderChai(size: "medium" | "small" | "large" | number) {
    if (size === "small") {
        return `small cutting chai...`
    }
    if (size === "medium" || size === "large") {
        return `make extra chai...`
    }

    return `chai order ${size}`
}

class KulhadCahi {
    serve() {
        return `Searving Kulhad Chai`
    }
}
class CuttingChai {
    serve() {
        return `Searving Cutting Chai`
    }
}

function serve(chai: KulhadCahi | CuttingChai) {
    if (chai instanceof KulhadCahi) {
        return chai.serve();
    }
}

type chaiOrder = {
    type: string,
    suger: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Searving ${item.type} chai with ${item.suger}`
    }

    return `Serving custom chai : ${item}`
}

type MasalChai = { type: "masala"; spicelevel: number }
type GingerChai = { type: "ginger"; amount: number }
type ElachiChai = { type: "elachi"; aroma: number }

type Chai = MasalChai | GingerChai | ElachiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elachi":
            return `Elachi Chai`
            break;
    }
}

function brew(order: MasalChai | GingerChai) {
    if ("spicelevel" in order) {
        //
    }
}

// function isStringArray(arr:unknown):arr is string[]{

// }