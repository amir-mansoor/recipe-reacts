import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const AddScreen = () => {
  const formSchema = z.object({
    recipeName: z.string().min(5, {
      message: "Recipe name must at least 5 characters.",
    }),
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipeName: "",
    },
  });

  return (
    <div className="container mt-10">
      <h1 className="text-4xl font-bold">Add Recipe</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipe Name</FormLabel>
                <FormControl>
                  <Input className="rounded" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="outline"
            className="rounded hover:bg-slate-200"
            type="submit"
          >
            Add Recipe
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddScreen;
