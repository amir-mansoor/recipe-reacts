import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addRecipe } from "@/slices/recipeSlice";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, ChevronsUpDown } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const AddScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [ingValue, setIngValue] = useState("");
  const [level, setLevel] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const dispatch = useDispatch();
  const categories = [
    {
      value: "BreakFast",
      label: "BreakFast",
    },
    {
      value: "Lunch",
      label: "Lunch",
    },
    {
      value: "Dinner",
      label: "Dinner",
    },
    {
      value: "Dessert",
      label: "Dessert",
    },
  ];

  const removeSpacesFromStringStart = (str) => {
    return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      (desc.trim() === "") | (ingValue.length === 0) ||
      level.trim() === "" ||
      imgUrl.trim() === ""
    ) {
      toast.error("All fields are required.");
      return;
    }

    const ing = ingValue
      .split(",")
      .map((value) => removeSpacesFromStringStart(value));

    dispatch(addRecipe({ name, desc, ing, level, imgUrl, value }));
    setName("");
    setDesc("");
    setLevel("");
    setIngValue("");
    setImgUrl("");
    toast.success("Recipe Added.");
  };

  const handleFile = (file) => {
    const orgFile = file[0];
    if (!orgFile) {
      return;
    }

    const storageRef = ref(
      storage,
      `files/${orgFile.name}-id-${Math.random().toString(16).slice(2)}`
    );
    const uploadTask = uploadBytesResumable(storageRef, orgFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        // console.log(snapShot);
      },
      (error) => {
        toast.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          toast.success("Image Uploaded Successfully.");
        });
      }
    );
  };

  return (
    <div className="container mt-10">
      <h1 className="text-4xl font-bold">Add Recipe</h1>
      <form className="flex flex-col  space-y-4" onSubmit={handleForm}>
        <div className="w-[60%] space-y-4 flex flex-col">
          <div>
            <Label htmlFor="name" className="mb-1">
              Recipe Name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="py-2 px-2"
              id="name"
            />
          </div>

          <div>
            <Label className="mb-2" htmlFor="ing">
              Ingredients{" "}
              <span className="text-gray-600">(Separate With ,)</span>
            </Label>
            <Input
              id="ing"
              value={ingValue}
              onChange={(e) => {
                setIngValue(e.target.value);
              }}
            />
          </div>

          <div>
            <Label className="mb-2" htmlFor="level">
              Level <span className="text-gray-600">(Easy,Medium,Hard)</span>
            </Label>
            <Input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              id="level"
            />
          </div>

          <div>
            <Label htmlFor="description" className="mb-1">
              Description
            </Label>
            <Textarea
              id="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="">
            <Label htmlFor="image">Image</Label>
            <Input
              onChange={(e) => handleFile(e.target.files)}
              id="image"
              type="file"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <Label className="mb-2">Category</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? categories.find((category) => category.value === value)
                      ?.label
                  : "Select category..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 " />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 bg-slate-300">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        key={category.value}
                        value={category.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === category.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {category.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="pb-4">
          <Button
            onClick={handleForm}
            variant="outline"
            className="rounded hover:bg-slate-200"
            type="submit"
          >
            Add Recipe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddScreen;
