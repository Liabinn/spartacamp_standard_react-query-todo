import { addTodo, removeTodo, switchTodo } from "../api/todos";
import { useMutation } from "react-query";

export const useAddMutation = () => useMutation(addTodo);

export const useDeleteMutation = () => useMutation(removeTodo);

export const useSwitchMutation = () => useMutation(switchTodo);