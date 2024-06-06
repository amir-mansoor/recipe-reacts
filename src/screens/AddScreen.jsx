import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

const AddScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [ingValue, setIngValue] = useState("");
  const [level, setLevel] = useState("");

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
  const handleForm = (e) => {
    e.preventDefault();
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
            <Label htmlFor="description" className="mb-1">
              Description
            </Label>
            <Textarea
              id="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div>
            <Label className="mb-2" htmlFor="ing">
              Ingredients
            </Label>
            <Input
              id="ing"
              value={ingValue}
              placeholder="Separate with ,"
              onChange={(e) => {
                setIngValue(e.target.value);
              }}
            />

            <div className="mt-3 w-[70%] bg-red-500 flex shrink-0 ">
              {ingValue &&
                ingValue.split(",").map((ingr, idx) => (
                  <span
                    key={idx}
                    className="bg-black p-2 mx-2 my-2 px-2 py-2 rounded-full text-white"
                  >
                    {ingr}
                  </span>
                ))}
            </div>
          </div>

          <div className="">
            <Label className="mb-2" htmlFor="level">
              Level
            </Label>
            <Input id="level" placeholder="Easy, Medium, Hard" />
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
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
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
        </div>

        <div className="pb-4">
          <Button
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
