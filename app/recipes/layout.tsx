import CreateRecipe from '@/components/features/ui/CreateRecipe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Filter, Search } from 'lucide-react';
import { PropsWithChildren } from 'react';

const RecipesLayout = ({ children }: PropsWithChildren) => {
    const searchIcon = (
        <Search
            className='mr-2'
            size={12}
        ></Search>
    );

    return (
        <div className='my-8 flex h-full basis-2/3 flex-col items-center justify-center gap-6'>
            <div className='flex w-full flex-1 justify-between gap-4'>
                <Button
                    className='flex basis-1/2 items-center '
                    variant='outline_primary'
                >
                    <Filter
                        size={16}
                        className='mr-2'
                    />
                    Filter
                </Button>
                <CreateRecipe className='basis-1/2'></CreateRecipe>
            </div>
            <div className='w-full'>
                <Label></Label>
                <Input
                    className='w-full'
                    type='text'
                    placeholder={`Rechercher`}
                ></Input>
            </div>
            {children}
        </div>
    );
};

export default RecipesLayout;
