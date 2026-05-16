interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}


const fetchData = async () => {
    try {
        const respons = await fetch('https://jsonplaceholder.typicode.com/todos/1');

      if(!respons.ok){
        throw new Error (`HTTP error ${respons.status}`)
      }

      const data:Todo = await respons.json()

    } catch (error: any) {


    }
}
