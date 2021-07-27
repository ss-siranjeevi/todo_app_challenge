import firebase from "firebase";

type TodoItem = {
  createdAt: Date;
  isComplete: boolean;
  owner: string;
  title: string;
};

const db: any = firebase.firestore();

export const TodoService = {
  create: (todo: TodoItem) => {
    return new Promise((resolve, reject) => {
      db.collection("todos")
        .add(todo)
        .then(() => {
          resolve("SUCCESS");
        })
        .catch((err: any) => {
          console.log(err);
          resolve("FAILED");
        });
    });
  },
  read: () => {
    return new Promise((resolve, reject): any => {
      db.collection("todos")
        .get()
        .then((querySnapshot: any) => {
          let result: Array<TodoItem> = [];

          querySnapshot.forEach((doc: any) => {
            let docRef = { ...doc.data(), id: doc.id };
            result.push(docRef);
          });

          resolve(result);
        });
    });
  },
  delete: (id: string) => {
    return new Promise((resolve, reject): any => {
      db.collection("todos")
        .doc(id)
        .delete()
        .then(() => {
          resolve("SUCCESS");
        })
        .catch((err: any) => {
          console.log(err);
          resolve("FAILED");
        });
    });
  },
  update: (item: TodoItem, id: string) => {
    return new Promise((resolve, reject): any => {
      db.collection("todos")
        .doc(id)
        .set(item)
        .then(() => {
          resolve("SUCCESS");
        })
        .catch((err: any) => {
          console.log(err);
          resolve("FAILED");
        });
    });
  }
};
