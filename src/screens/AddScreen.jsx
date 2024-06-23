import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { storage } from '../config/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { addRecipe } from '@/slices/recipeSlice';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Check, ChevronsUpDown } from 'lucide-react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const AddScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [ingValue, setIngValue] = useState('');
  const [level, setLevel] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const dispatch = useDispatch();
  const categories = [
    {
      value: 'BreakFast',
      label: 'BreakFast',
    },
    {
      value: 'Lunch',
      label: 'Lunch',
    },
    {
      value: 'Dinner',
      label: 'Dinner',
    },
    {
      value: 'Dessert',
      label: 'Dessert',
    },
  ];

  const removeSpacesFromStringStart = (str) => {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      (desc.trim() === '') | (ingValue.length === 0) ||
      level.trim() === '' ||
      imgUrl.trim() === ''
    ) {
      toast.error('All fields are required.');
      return;
    }

    const ing = ingValue
      .split(',')
      .map((value) => removeSpacesFromStringStart(value));

    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);

    dispatch(
      addRecipe({ id, name, desc, ing, level, imgUrl, value, favourite: false })
    );
    setName('');
    setDesc('');
    setLevel('');
    setIngValue('');
    setImgUrl('');
    toast.success('Recipe Added.');
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
      'state_changed',
      (snapShot) => {
        // console.log(snapShot);
      },
      (error) => {
        toast.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          toast.success('Image Uploaded Successfully.');
        });
      }
    );
  };

  return (
    <div className='container  bg-gray-100 py-10'>
      <div className='px-[100px]'>
        <h1 className='text-4xl font-bold'>Add Recipe</h1>
      </div>
      <form
        className=' grid grid-cols-2 mt-2  py-2 rounded-lg  justify-center items-start px-[100px] gap-10'
        onSubmit={handleForm}
      >
        <div className=' space-y-4 flex  flex-col  items-center '>
          <div className='w-full'>
            <Label htmlFor='name' className='mb-1'>
              Recipe Name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='py-2 px-2'
              id='name'
            />
          </div>

          <div className='w-full'>
            <Label className='mb-2' htmlFor='ing'>
              Ingredients{' '}
              <span className='text-gray-600'>(Separate With ,)</span>
            </Label>
            <Input
              id='ing'
              value={ingValue}
              onChange={(e) => {
                setIngValue(e.target.value);
              }}
            />
          </div>
          <div className='w-full'>
            <Label className='mb-2' htmlFor='level'>
              Level <span className='text-gray-600'>(Easy,Medium,Hard)</span>
            </Label>
            <Input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              id='level'
            />
          </div>
          <div className='w-full'>
            <Label htmlFor='description' className='mb-1'>
              Description
            </Label>
            <Textarea
              className='h-[20px]'
              id='description'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>

        {/* 2nd grid */}
        <div className='second_grid space-y-4  grid '>
          <div className='w-full'>
            <Label htmlFor='image'>Image</Label>
            <Input
              onChange={(e) => handleFile(e.target.files)}
              id='image'
              type='file'
            />
          </div>

          <div className='flex flex-col'>
            <Label className='mb-2'>Category</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='w-[200px] justify-between'
                >
                  {value
                    ? categories.find((category) => category.value === value)
                        ?.label
                    : 'Select category...'}
                  <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 ' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0 bg-slate-300'>
                <Command>
                  <CommandInput placeholder='Search category...' />
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((category) => (
                        <CommandItem
                          key={category.value}
                          value={category.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? '' : currentValue
                            );
                            setOpen(false);
                          }}
                          className='cursor-pointer'
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value === category.value
                                ? 'opacity-100'
                                : 'opacity-0'
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
          <div className='pt-6'>
            <Button
              onClick={handleForm}
              variant='outline'
              className='rounded hover:bg-slate-200'
              type='submit'
            >
              Add Recipe
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddScreen;
