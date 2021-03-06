function generateId(tasks) {
    // console.log(tasks)
    //получаем массив значений свойства id всех объектов task
    const ids = tasks.map(task => {
        return task.id;
    })

    //если у нас пустой массив, значит начианем нумерацию с единицы
    if (!ids.length) {
        return 1;
    }
    //нвходим макс айди
    const maxId = Math.max(...ids);
    //возращаем новый больше макс на 1 
    return maxId + 1;
}

export default generateId;