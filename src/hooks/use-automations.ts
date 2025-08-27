import {
  createAutomations,
  deleteKeyword,
  saveKeyword,
  saveLisener,
  saveTrigger,
  updateAutomationName,
} from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import useZodForm from "./use-zod-form";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slices/automation";
export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );
  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdite = () => setEdit(false);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdite
  );

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node | null)
      ) {
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value });
        } else {
          disableEdite();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    edit,
    enableEdit,
    disableEdite,
    inputRef,
    isPending,
  };
};

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null);
  // for validation input data
  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  });
  const { isPending, mutate } = useMutationData(
    ["create-lister"],
    (data: { prompt: string; reply: string }) =>
      saveLisener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  );

  const { errors, onFormSubmit, register, reset, watch } = useZodForm(
    promptSchema,
    mutate
  );

  const onSetListener = (type: "SMARTAI" | "MESSAGE") => setListener(type);
  return { onSetListener, register, onFormSubmit, listener, isPending };
};

export const useTriggers = (id: string) => {
  const types = useAppSelector(
    (state) => state.AutomationReducer.trigger?.types
  );

  const dispatch: AppDispatch = useDispatch();
  const onSetTrigger = (type: "COMMENT" | "DM") =>
    dispatch(TRIGGER({ trigger: { type } }));

  const { isPending, mutate } = useMutationData(
    ["add-trigger"],
    (data: { types: string[] }) => saveTrigger(id, data.types),
    "automation-info"
  );

  const onSaveTrigger = () =>
    mutate({ types, onSetTrigger, onSaveTrigger, isPending });
  return { types, onSetTrigger, onSaveTrigger, isPending };
};



export const useKeywords = (id: string) => {
  const [keyword, setKeyword] = useState("")

  //  Handle input value change
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  // Mutation for adding a keyword
  const { mutate } = useMutationData(
    ["add-keyword"],
    (data: { keyword: string }) => saveKeyword(id, data.keyword),
    "automation-info",
    () => setKeyword("") // clear input after success
  )

  // Handle "Enter" key press to add keyword
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      mutate({ keyword })
      setKeyword("") // clear input manually
    }
  }

  //  Mutation for deleting a keyword
  const { mutate: deleteMutation } = useMutationData(
    ["delete-keyword"],
    (data: { id: string }) => deleteKeyword(data.id),
    "automation-info"
  )

  //  Return everything you need in the component
  return { keyword, onValueChange, deleteMutation, onKeyPress }
}
