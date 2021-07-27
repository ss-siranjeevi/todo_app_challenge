import { useEffect } from "react";
import { Fragment, useMemo, useState } from "react";
import {
  Button,
  Checkbox,
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableContent,
  DataTableHead,
  DataTableHeadCell,
  DataTableRow,
  Grid,
  GridCell,
  GridRow,
  TextField,
  Typography,
} from "rmwc";
import { TodoService } from "../api/todo.service";

type TodoItem = {
  createdAt: Date;
  isComplete: boolean;
  owner: string;
  title: string;
  id?: string;
};

type Props = {
  userId: string;
}

const TodoList = ({ userId } :Props) => {
  const [data, setData] = useState<Array<TodoItem>>([]);

  useEffect(() => {
    if (userId) {
      getData();
    }
  }, [userId]);

  const getData = async () => {
    const res: any = (await TodoService.read()) || [];
    setData(res);
  };

  const [newRow, setNewRow] = useState<TodoItem>({
    title: "",
    isComplete: false,
    createdAt: new Date(),
    owner: "",
  });

  const todos: Array<TodoItem> = useMemo(() => {
    return data.sort((a, b) => {
      const dateA = a.createdAt;
      const dateB = b.createdAt;

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }

      return 0;
    });
  }, [data]);

  const onNewRowInput = (value: string) => {
    setNewRow((prevObj) => {
      return {
        ...prevObj,
        ["title"]: value,
      };
    });
  };

  const onNewCompleteChange = (checked: boolean) => {
    setNewRow((state) => {
      return {
        ...state,
        ["isComplete"]: checked,
      };
    });
  };

  const onAdd = async () => {
    if (newRow?.title) {
      let todoItem: TodoItem = newRow;
      todoItem.createdAt = new Date();
      todoItem.owner = userId || "";

      const res = await TodoService.create(todoItem);
      if (res === "SUCCESS") {
        getData();
      } else {
        console.log("ADD_ITEM_FAILED");
      }

      setNewRow({
        title: "",
        isComplete: false,
        createdAt: new Date(),
        owner: "",
      });
    }
  };

  const onComplete = async (row: TodoItem, checked: boolean) => {
    if (row && row.title && row.id) {
      const id = row.id;
      delete row.id;

      let item = row;
      item.isComplete = checked;

      if (id) {
        const res = await TodoService.update(row, id);

        if (res === "SUCCESS") {
          getData();
        }
      }
    }
  };

  const onDelete = async (row: TodoItem) => {
    if (row && row.title && row.id) {
      const res = await TodoService.delete(row.id);
      if (res === "SUCCESS") {
        getData();
      }
    }
  };

  return (
    <Fragment>
      <Grid>
        <GridRow
          style={{
            width: "75%",
            marginLeft: "9vw",
            marginTop: "5vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <GridCell span={11}>
            <Typography use="headline6">List:</Typography>
          </GridCell>
        </GridRow>
      </Grid>

      <div style={{ width: "75%", marginLeft: "10vw" }}>
        <DataTable style={{ width: "100%" }}>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell style={{ width: "60%" }}>
                  <Typography use="headline6">Title</Typography>
                </DataTableHeadCell>
                <DataTableHeadCell
                  style={{ width: "20%", textAlign: "center" }}
                >
                  <Typography use="headline6">Completed</Typography>
                </DataTableHeadCell>
                <DataTableHeadCell
                  style={{ width: "20%", textAlign: "center" }}
                >
                  <Typography use="headline6">Action</Typography>
                </DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {todos.map((row, i) => (
                <DataTableRow key={i}>
                  <DataTableCell>{row.title}</DataTableCell>
                  <DataTableCell style={{ textAlign: "center" }}>
                    <Checkbox
                      checked={row.isComplete || false}
                      onChange={(e:any) => onComplete(row, e.target.checked)}
                    />
                  </DataTableCell>
                  <DataTableCell style={{ textAlign: "center" }}>
                    <Button raised onClick={() => onDelete(row)}>
                      Delete
                    </Button>
                  </DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
            <DataTableBody>
              <DataTableRow>
                <DataTableCell>
                  <TextField
                    outlined
                    value={newRow?.title || ""}
                    onChange={(e: any) => onNewRowInput(e.target.value)}
                    style={{ width: "100%", height: "35px" }}
                  />
                </DataTableCell>
                <DataTableCell style={{ textAlign: "center" }}>
                  <Checkbox
                    checked={newRow?.isComplete || false}
                    onChange={(e: any) => onNewCompleteChange(e.target.checked)}
                  />
                </DataTableCell>
                <DataTableCell style={{ textAlign: "center" }}>
                  <Button raised onClick={() => onAdd()}>
                    Add row
                  </Button>
                </DataTableCell>
              </DataTableRow>
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
    </Fragment>
  );
};

export default TodoList;
