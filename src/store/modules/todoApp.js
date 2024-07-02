const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            console.log(localStorage)
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(String(i))));
                }
            }
        }
        return arr;
    }
}

const state = {
    headerText: "TODO IT!!"
    , todoItems: storage.fetch()
}

const mutations = {
    addOneItems(state, todoItem) {
        console.log(JSON.parse(localStorage.getItem(String(localStorage.length - 1))));
        const index = localStorage.length > 0 ? JSON.parse(localStorage.getItem(String(localStorage.length - 1))).idx + 1 : 0
        let obj = {idx: index, completed: false, item: todoItem};
        localStorage.setItem(String(index), JSON.stringify(obj));
        state.todoItems.push(obj);
    }
    , removeOneItem(state, payload) {
        localStorage.removeItem(String(payload.todoItem.idx));
        state.todoItems.splice(payload.todoItem.idx, 1);
        setTimeout(() => {
            console.log("재정렬")
        }, 500);
        for (let i = 0; i < state.todoItems.length; i++) {
            state.todoItems[i].idx = i;
            localStorage.removeItem(String(localStorage.key(i)));
            localStorage.setItem(String(i), JSON.stringify(state.todoItems[i]));
        }
    }
    , completeOneItem(state, payload) {
        payload.todoItem.completed = !payload.todoItem.completed;
        localStorage.removeItem(String(payload.todoItem.idx));
        localStorage.setItem(String(payload.todoItem.idx), JSON.stringify(payload.todoItem));
    }
    , clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
        state.index = 0;
    }
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

export default {getters, mutations, state}